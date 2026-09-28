import type { CSSProperties } from 'react';

type LogoProps = {
  /** Show the secondary line under the wordmark (used in the footer). */
  subtitle?: string;
  /** Override the mark — defaults to "AC" (AI Coder). */
  mark?: string;
  style?: CSSProperties;
};

export default function Logo({ subtitle, mark = 'AC', style }: LogoProps) {
  return (
    <a className="logo" href="/" aria-label="AI Coder · Chen — home" style={style}>
      <span className="logo-mark" aria-hidden="true">
        {mark}
      </span>
      <span className="logo-text">
        AI Coder
        {subtitle ? <small>{subtitle}</small> : null}
      </span>
    </a>
  );
}

