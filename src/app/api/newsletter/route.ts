import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(async () => {
      // Also handle form submissions
      const formData = await req.formData().catch(() => null);
      if (!formData) return null;
      return { email: formData.get("email") };
    });

    const email = body?.email as string;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // In production: add to newsletter list (Loops, Beehiiv, etc.)
    // Example with Loops:
    // await fetch("https://app.loops.so/api/v1/contacts/create", {
    //   method: "POST",
    //   headers: { Authorization: `Bearer ${process.env.LOOPS_API_KEY}`, "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, source: "website-download-page" }),
    // });

    console.log("Newsletter signup:", email);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter signup failed:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
