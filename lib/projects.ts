/**
 * Single source of truth for project metadata shared across the home grid,
 * /projects index, project detail pages, and the JSON-LD/nav references.
 */

export type ProjectCategory =
  | 'editorial'
  | 'civic'
  | 'tools'
  | 'games'
  | 'commerce'
  | 'experimental';

export type ProjectStatus = 'live' | 'shipped' | 'sunset';

export type ProjectMeta = {
  slug: string;
  name: string;
  /** Short, single-sentence pitch shown on cards. Should be ≤ 140 chars. */
  pitch: string;
  /** Slightly longer description shown on the /projects list. */
  summary: string;
  category: ProjectCategory;
  status: ProjectStatus;
  /** Year the project first launched (informational only — display as “Since 2024”). */
  since: number;
  /** External live URL — null if the project is permanently local-only. */
  externalUrl: string | null;
  /** External CTA label, e.g. "Open live site". */
  externalLabel?: string;
  /** Tech stack chips shown on the project detail page. */
  stack: string[];
  /** Quick stats shown on the project detail page (e.g. "256K / mo", "100 keywords"). */
  stats?: { label: string; value: string }[];
};

export const PROJECTS: ProjectMeta[] = [
  {
    slug: 'techpulse',
    name: 'TechPulse',
    pitch:
      'A keyword-research-backed Apple hardware site: iPhone 18, iPhone Fold and more.',
    summary:
      'An editorial Apple hardware intelligence site built directly from a Google Trends pipeline that flagged a 256K-vol, low-KD iPhone 18 cluster as a long-term SEO opportunity.',
    category: 'editorial',
    status: 'live',
    since: 2026,
    externalUrl: 'https://techpulse.press/',
    externalLabel: 'Visit TechPulse.press',
    stack: ['Next.js', 'Tailwind CSS', 'Cloudflare Pages', 'Pagefind', 'Beehiiv', 'Plausible'],
    stats: [
      { value: '256K', label: 'iPhone 18 cluster, monthly US volume' },
      { value: '19.1', label: 'average keyword difficulty' },
      { value: '100+', label: 'keywords in the iPhone 18 cluster' },
      { value: '81%', label: 'informational query intent' },
    ],
  },
  {
    slug: 'flockfinder',
    name: 'flockfinder.online',
    pitch:
      'Independent public-records ALPR transparency project — not affiliated with Flock Safety or any vendor.',
    summary:
      'Maps Automated License Plate Reader camera networks across U.S. cities using only public records and open government data. Operated by The Transparency Project.',
    category: 'civic',
    status: 'live',
    since: 2025,
    externalUrl: 'https://flockfinder.online/',
    externalLabel: 'Visit flockfinder.online',
    stack: ['Next.js', 'Tailwind CSS', 'Leaflet', 'OpenStreetMap', 'SQLite', 'Plausible'],
    stats: [
      { value: '100%', label: 'records sourced from public government documents' },
      { value: '6+', label: 'states with active city dossiers' },
      { value: '4', label: 'product pillars (Map, Dossiers, FOIA, Cancel)' },
      { value: '0', label: 'instructions facilitating tampering or vandalism' },
    ],
  },
  {
    slug: 'GemGuidePro',
    name: 'GemGuidePro.com',
    pitch:
      'An AI-assisted content platform for gemstone and birthstone buying guides.',
    summary:
      'An AI-assisted content platform for transparent gemstone and birthstone buying guides, built on Next.js + Sanity and deployed as static through Cloudflare Pages.',
    category: 'commerce',
    status: 'live',
    since: 2024,
    externalUrl: 'https://gemguidepro.com/',
    externalLabel: 'Visit GemGuidePro.com',
    stack: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'Cloudflare Pages'],
    stats: [
      { value: '12', label: 'gemstone verticals covered' },
      { value: '100%', label: 'content-as-code (PR review)' },
    ],
  },
  {
    slug: 'calculate-central',
    name: 'Calculate Central',
    pitch:
      'An online calculator toolkit that turns complex formulas into intuitive web tools.',
    summary:
      'An online calculator toolkit that turns complex, multi-step formulas into intuitive web tools with SEO-first entry pages per formula.',
    category: 'tools',
    status: 'live',
    since: 2024,
    externalUrl: 'https://calccentral.net/',
    externalLabel: 'Open live site',
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
  },
  {
    slug: 'PuzzleZone',
    name: 'PuzzleZone',
    pitch:
      'An embedded web game hub with 300+ browser games integrated via iframes.',
    summary:
      'An unblocked browser game hub with 300+ HTML5 games across multiple genres, embedded via iframe.',
    category: 'games',
    status: 'shipped',
    since: 2024,
    externalUrl: 'https://puzzlezone.online/',
    externalLabel: 'Play games online',
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
  },
  {
    slug: 'UselessWeb',
    name: 'Useless Web',
    pitch:
      "My first experimental project: a playful 'don't click' style collection of useless websites.",
    summary:
      "My first experimental project: a 'don't click' style collection of useless websites that also accepts user-submitted links.",
    category: 'experimental',
    status: 'shipped',
    since: 2024,
    externalUrl: 'https://www.uselessweb.net/',
    externalLabel: 'Visit the experiment',
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
  },
  {
    slug: 'emojitik',
    name: 'Tiktok Emojis',
    pitch:
      'The ultimate TikTok secret emoji code library with mobile-first one-click copy.',
    summary:
      'A TikTok hidden emoji code tool ([cry], [smile]) with mobile-first one-click copy and visual emotional indexing.',
    category: 'tools',
    status: 'live',
    since: 2025,
    externalUrl: 'https://emojitik.com/',
    externalLabel: 'Open Emojitik.com',
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
  },
  {
    slug: 'epitaph',
    name: 'Digital Epitaphs',
    pitch:
      'A digital memorial project that collects epitaphs and life stories.',
    summary:
      'A digital memorial that curates epitaphs and the stories behind them, exploring the meaning and value of life.',
    category: 'editorial',
    status: 'live',
    since: 2025,
    externalUrl: 'https://epitaph.world/',
    externalLabel: 'Visit the memorial',
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
  },
];

export function projectBySlug(slug: string): ProjectMeta | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export const CATEGORY_LABEL_EN: Record<ProjectCategory, string> = {
  editorial: 'Editorial',
  civic: 'Civic transparency',
  tools: 'Web tools',
  games: 'Games',
  commerce: 'Commerce',
  experimental: 'Experimental',
};

export const CATEGORY_LABEL_ZH: Record<ProjectCategory, string> = {
  editorial: '编辑 / 内容',
  civic: '公民透明度',
  tools: '在线工具',
  games: '小游戏',
  commerce: '电商 / 内容',
  experimental: '实验项目',
};

export const STATUS_LABEL_EN: Record<ProjectStatus, string> = {
  live: 'Live',
  shipped: 'Shipped',
  sunset: 'Sunset',
};

export const STATUS_LABEL_ZH: Record<ProjectStatus, string> = {
  live: '线上在跑',
  shipped: '已上线',
  sunset: '已归档',
};

