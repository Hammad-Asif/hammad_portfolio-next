// Branded 1200x630 social preview image, rendered at build time by next/og.
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

let logoCache;
async function brandLogo() {
  if (!logoCache) {
    const buf = await readFile(join(process.cwd(), "public", "hammad-logo-full.png"));
    logoCache = `data:image/png;base64,${buf.toString("base64")}`;
  }
  return logoCache;
}

let photoCache;
async function profilePhoto() {
  if (!photoCache) {
    const buf = await readFile(join(process.cwd(), "public", "profile_pic.jpg"));
    photoCache = `data:image/jpeg;base64,${buf.toString("base64")}`;
  }
  return photoCache;
}

/**
 * @param {object} opts
 * @param {string} opts.kicker  Small label above the title, e.g. "Case study"
 * @param {string} opts.title   Main headline (keep under ~70 characters)
 * @param {string} [opts.tags]  One line of keywords shown under the title
 */
export async function renderOgImage({ kicker, title, tags }) {
  const [photo, logo] = await Promise.all([profilePhoto(), brandLogo()]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#020617",
          backgroundImage:
            "radial-gradient(circle at 10% 0%, rgba(16,185,129,0.22) 0%, transparent 45%), radial-gradient(circle at 95% 100%, rgba(59,130,246,0.16) 0%, transparent 45%)",
          padding: "64px 72px",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, paddingRight: 48 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* 1119 × 232 source, shown 46px tall */}
            <img src={logo} width={222} height={46} alt="" />
            <span style={{ marginLeft: 18, fontSize: 22, fontWeight: 400, color: "#94a3b8" }}>hammadasif.dev</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                padding: "8px 18px",
                borderRadius: 999,
                border: "1px solid rgba(16,185,129,0.4)",
                background: "rgba(16,185,129,0.12)",
                color: "#34d399",
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 26,
              }}
            >
              {kicker}
            </div>
            <div style={{ display: "flex", fontSize: title.length > 48 ? 54 : 64, fontWeight: 700, lineHeight: 1.12, letterSpacing: -1.5 }}>
              {title}
            </div>
            {tags ? (
              <div style={{ display: "flex", marginTop: 26, fontSize: 24, color: "#94a3b8" }}>{tags}</div>
            ) : null}
          </div>

          <div style={{ display: "flex", fontSize: 24, color: "#cbd5e1" }}>
            Muhammad Hammad Asif · AI Engineer &amp; Full-Stack Developer
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={photo}
            width={300}
            height={300}
            style={{
              borderRadius: 999,
              border: "6px solid rgba(52,211,153,0.6)",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    ),
    ogSize
  );
}
