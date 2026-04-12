import { ImageResponse } from "next/og";

export const alt = "Return Man 2 Unblocked — play free in your browser";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0f172a 0%, #14532d 45%, #0f172a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 120,
              height: 72,
              borderRadius: 999,
              background: "linear-gradient(180deg, #fef9c3 0%, #eab308 100%)",
              border: "4px solid #d97706",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: "#fef08a",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Return Man 2
            </span>
            <span
              style={{
                fontSize: 36,
                fontWeight: 600,
                color: "#86efac",
                marginTop: 8,
              }}
            >
              Unblocked · Play in browser
            </span>
          </div>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#cbd5e1",
            maxWidth: 900,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Kick return football — yellow circle, end zone, arrows or IJKL, specials A/S/D
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 22,
            color: "#94a3b8",
            fontWeight: 500,
          }}
        >
          returnman2.com
        </div>
      </div>
    ),
    { ...size },
  );
}
