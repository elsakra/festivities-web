import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Festivities";
  const subtitle = searchParams.get("subtitle") ?? "AI Language Learning";
  const language = searchParams.get("language") ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #FAF7F2 0%, #F0EBE3 50%, #EDE0CC 100%)",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(196,82,26,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            transform: "translate(100px, -100px)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 60,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#C4521A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            F
          </div>
          <span style={{ fontSize: 22, fontWeight: 700, color: "#1A1714" }}>
            Festivities
          </span>
        </div>

        {language && (
          <div
            style={{
              fontSize: 80,
              marginBottom: 20,
            }}
          >
            {language}
          </div>
        )}

        <h1
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#1A1714",
            lineHeight: 1.1,
            margin: 0,
            marginBottom: 16,
            maxWidth: 900,
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: 24,
            color: "#6B6560",
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
