'use client';

import type { ReactNode } from 'react';
import { Fragment } from 'react';
import { buildProjectLinkifyTokens } from '../lib/projects';

/**
 * Auto-links project / site mentions that appear in prose copy.
 *
 *   "TechPulse (techpulse.press) is the direct build..."
 *   "flockfinder.online maps ALPR cameras..."
 *
 * Tokens are matched longest-first to avoid partial overlaps (so
 * "techpulse.press" wins over "TechPulse" when both could match the same
 * starting position) and each hit is consumed once so we don't double-link
 * inside the same paragraph.
 *
 * The default token list is built from PROJECTS so every project name and
 * its bare-domain form is linkable out of the box. Callers can override
 * via the `tokens` prop (e.g. add custom aliases like a short name).
 *
 * Marked 'use client' so it can be imported directly from the (client-side)
 * ProjectDetail component without crossing an RSC boundary, while still
 * working in server components like the home and about pages.
 */
export type LinkifyToken = {
  /** Exact substring to search for, e.g. "techpulse.press" or "TechPulse". */
  match: string;
  /** Anchor href. Use "/projects/<slug>" for in-site detail links, full URL for external sites. */
  href: string;
  /** Open in a new tab. Defaults to true for full URLs, false for in-site routes. */
  external?: boolean;
};

function isExternalUrl(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

export function renderLinkified(
  text: string,
  tokens: LinkifyToken[],
): ReactNode[] {
  if (!text) return [];
  // Sort tokens by length, longest first, so domain-style tokens win over
  // shorter brand names that share a starting index.
  const sorted = [...tokens].sort((a, b) => b.match.length - a.match.length);
  const out: ReactNode[] = [];
  let cursor = 0;
  let keyCounter = 0;

  while (cursor < text.length) {
    let earliest: { index: number; token: LinkifyToken } | null = null;
    for (const token of sorted) {
      const idx = text.indexOf(token.match, cursor);
      if (idx === -1) continue;
      if (earliest === null || idx < earliest.index) {
        earliest = { index: idx, token };
      }
    }

    if (!earliest) {
      out.push(text.slice(cursor));
      break;
    }

    if (earliest.index > cursor) {
      out.push(text.slice(cursor, earliest.index));
    }

    const external =
      earliest.token.external ?? isExternalUrl(earliest.token.href);
    out.push(
      <a
        key={`l-${keyCounter++}`}
        href={earliest.token.href}
        className="linkified-mention"
        {...(external
          ? { target: '_blank', rel: 'noreferrer noopener' }
          : {})}
      >
        {earliest.token.match}
      </a>,
    );
    cursor = earliest.index + earliest.token.match.length;
  }

  return out;
}

export type LinkifyProps = {
  text: string;
  /** Optional override for the default token list (e.g. add custom aliases). */
  tokens?: LinkifyToken[];
};

export default function Linkify({ text, tokens }: LinkifyProps) {
  const effective = tokens ?? buildProjectLinkifyTokens();
  const nodes = renderLinkified(text, effective);
  return <Fragment>{nodes}</Fragment>;
}
