'use client';

// global-error.tsx replaces the root layout when an unhandled error escapes the
// app, so it has to ship its own <html>/<body> and the minimum style needed for
// the error card to look at home with the rest of the site. The inline values
// mirror the design tokens in app/globals.css.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1.25rem',
          background: '#FAF9F7',
          color: '#334155',
          fontFamily:
            "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          WebkitFontSmoothing: 'antialiased',
          textRendering: 'optimizeLegibility',
        }}
      >
        <div
          style={{
            maxWidth: 520,
            width: '100%',
            background: '#FFFFFF',
            border: '1px solid #E7E5DE',
            borderRadius: 14,
            padding: '2.25rem 1.75rem',
            boxShadow:
              '0 18px 38px rgba(15, 23, 42, 0.08), 0 6px 12px rgba(15, 23, 42, 0.04)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily:
                "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
              fontSize: '0.72rem',
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: '#B45309',
              marginBottom: '0.75rem',
            }}
          >
            500 · Something broke
          </p>
          <h1
            style={{
              fontFamily:
                "Space Grotesk, Inter, system-ui, sans-serif",
              color: '#0F172A',
              fontSize: '1.65rem',
              margin: '0 0 0.75rem',
              letterSpacing: '-0.018em',
              lineHeight: 1.2,
            }}
          >
            The page hit an unexpected error.
          </h1>
          <p
            style={{
              color: '#64748B',
              margin: '0 auto 1.5rem',
              maxWidth: '40ch',
              fontSize: '0.96rem',
            }}
          >
            The site is technically down for this route. Reloading usually
            clears it — if it keeps coming back, please send me a note.
          </p>
          {error?.digest ? (
            <p
              style={{
                fontFamily:
                  "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                fontSize: '0.78rem',
                color: '#94A3B8',
                margin: '0 0 1.5rem',
                wordBreak: 'break-all',
              }}
            >
              ref · {error.digest}
            </p>
          ) : null}
          <div
            style={{
              display: 'flex',
              gap: '0.6rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.7rem 1.1rem',
                borderRadius: 10,
                background: '#0F172A',
                color: '#fff',
                border: '1px solid #0F172A',
                fontWeight: 500,
                fontSize: '0.95rem',
                cursor: 'pointer',
              }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.7rem 1.1rem',
                borderRadius: 10,
                background: '#FFFFFF',
                color: '#0F172A',
                border: '1px solid #E7E5DE',
                fontWeight: 500,
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              Back to home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
