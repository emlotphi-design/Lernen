import Link from "next/link";

// Root-level fallback — only reached for a URL that matches no route at all (not even a
// dynamic segment under [locale]), where Next can't resolve which locale subtree to render from,
// so it renders this instead of [locale]/not-found.tsx. Kept fully self-contained (own
// <html>/<body>, plain next/link — not the i18n-aware @/i18n/navigation wrapper, since this
// sits outside the locale routing context entirely) since [locale]/layout.tsx is the de-facto
// root layout for everything under it — this file sits outside that tree.
export default function RootNotFound() {
  return (
    <html lang="de">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          background: "#fff",
          color: "#111",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 420, padding: "0 24px" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#6b7280", letterSpacing: "0.02em" }}>404</p>
          <h1 style={{ fontSize: 28, fontWeight: 600, margin: "12px 0 8px" }}>Seite nicht gefunden</h1>
          <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.6, margin: "0 0 24px" }}>
            Diese Seite existiert nicht oder wurde verschoben.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              borderRadius: 8,
              background: "#4f46e5",
              color: "#fff",
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Zur Startseite
          </Link>
        </div>
      </body>
    </html>
  );
}
