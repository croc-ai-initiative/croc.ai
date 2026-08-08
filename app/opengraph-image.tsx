import { ImageResponse } from "next/og";

export const alt = "CROC AI Initiative: Advancing AI Innovation in Africa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A0A0F",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(140,134,255,0.25) 0%, transparent 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 40, fontWeight: 700 }}>
          <span style={{ color: "#FFFFFF" }}>CROC</span>
          <span style={{ color: "#5B54F0", marginLeft: 12 }}>AI</span>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 56,
            fontWeight: 700,
            color: "#F5F5F7",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          Advancing and inspiring AI innovation across Nigeria and Africa.
        </div>
        <div style={{ marginTop: 28, fontSize: 24, color: "#A6A6B3" }}>
          CROC AI Initiative — Kaduna, Nigeria
        </div>
      </div>
    ),
    { ...size }
  );
}
