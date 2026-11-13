import { ImageResponse } from "next/og";

export const alt = "Ali Irfan — Creative Developer & Designer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#080808",
          color: "#f3f1eb",
          padding: "60px 64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -80,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(98,120,255,0.34) 0%, rgba(139,92,246,0.12) 45%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: -100,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.24) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            paddingBottom: 24,
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                letterSpacing: 1,
              }}
            >
              AI
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 13,
                letterSpacing: 5,
                textTransform: "uppercase",
                color: "rgba(243,241,235,0.75)",
              }}
            >
              Ali Irfan
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 11,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: "rgba(243,241,235,0.42)",
            }}
          >
            Creative developer · Designer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            maxWidth: 950,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: -5,
              lineHeight: 0.98,
            }}
          >
            Crafting digital
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: -5,
              lineHeight: 0.98,
            }}
          >
            experiences that{" "}
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                background: "linear-gradient(90deg, #8fa0ff, #c4b5fd)",
                backgroundClip: "text",
                color: "transparent",
                marginLeft: 18,
              }}
            >
              inspire.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 24,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 52,
              letterSpacing: -2,
              color: "#f3f1eb",
            }}
          >
            ALI IRFAN
            <span style={{ color: "#6278ff" }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 11,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: "rgba(243,241,235,0.4)",
              paddingBottom: 8,
            }}
          >
            Portfolio / 2026
          </div>
        </div>
      </div>
    ),
    size,
  );
}
