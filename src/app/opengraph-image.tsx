import { ImageResponse } from "next/og";
import { site } from "@/lib/site-config";

export const dynamic = "force-static";
export const alt = `${site.brand} | ${site.name}`;
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
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #050816 0%, #0f172a 42%, #1e1b4b 100%)",
          color: "#f1f5ff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "linear-gradient(135deg, #22d3ee, #a78bfa, #fb7185)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 18px 50px rgba(34, 211, 238, 0.25)",
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 999,
                background: "#f8fafc",
              }}
            />
          </div>
          <div style={{ fontSize: 22, letterSpacing: "0.12em", opacity: 0.8, fontWeight: 600 }}>
            {site.brand.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 980 }}>
          <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            {site.brand}
          </div>
          <div style={{ fontSize: 28, opacity: 0.88, lineHeight: 1.25 }}>{site.name}</div>
          <div style={{ fontSize: 26, opacity: 0.72, lineHeight: 1.3 }}>{site.title}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, opacity: 0.72 }}>
          <div>AI powered web development</div>
          <div>Book a call</div>
        </div>
      </div>
    ),
    size,
  );
}
