import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon: hex frame + inner prism; pairs with `LogoMark` */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050816",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32">
          <defs>
            <linearGradient id="fg" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22d3ee" />
              <stop offset="0.5" stopColor="#a78bfa" />
              <stop offset="1" stopColor="#fb7185" />
            </linearGradient>
          </defs>
          <path d="M16 2 28.5 9.25v13.5L16 30 3.5 22.75V9.25L16 2Z" fill="url(#fg)" />
          <path d="m16 9.5 5.2 3.8v5.4L16 22.5l-5.2-3.8v-5.4L16 9.5Z" fill="#f8fafc" />
        </svg>
      </div>
    ),
    size,
  );
}
