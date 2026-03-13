import { NextRequest, NextResponse } from "next/server";
import { stripe, getPriceId } from "@/lib/stripe";
import { PLANS } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { planParam } = await req.json();

    const [planId, interval] = (planParam ?? "path-annual").split("-") as [
      "path" | "accel",
      "monthly" | "annual"
    ];

    if (!["path", "accel"].includes(planId) || !["monthly", "annual"].includes(interval)) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const priceId = getPriceId(planId, interval);
    const plan = PLANS[planId];
    const trialDays = plan.trialDays;

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      subscription_data: {
        trial_period_days: trialDays > 0 ? trialDays : undefined,
      },
      success_url: `${baseUrl}/account/billing?success=true`,
      cancel_url: `${baseUrl}/pricing`,
      allow_promotion_codes: true,
      tax_id_collection: { enabled: true },
      automatic_tax: { enabled: true },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout session creation failed:", err);
    return NextResponse.json({ error: "Failed to create checkout" }, { status: 500 });
  }
}
