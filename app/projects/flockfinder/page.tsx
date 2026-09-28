import ProjectDetail from '../../../components/ProjectDetail';
import { PROJECTS } from '../../../lib/projects';

const flockfinder = PROJECTS.find((p) => p.slug === 'flockfinder')!;

export default function FlockfinderPage() {
  return (
    <ProjectDetail
      currentSlug="flockfinder"
      externalUrl="https://flockfinder.online/"
      externalLabel="Visit flockfinder.online ↗"
      meta={flockfinder.stats}
      stack={flockfinder.stack}
      en={{
        title: 'flockfinder.online - A Public-Records-Backed ALPR Transparency Site',
        sections: [
          {
            heading: 'Overview',
            paragraphs: [
              'flockfinder.online is an independent civic transparency project that maps Automated License Plate Reader (ALPR) camera networks across U.S. cities, using only public records and open government data.',
              'It is operated by The Transparency Project and is explicitly not affiliated with, endorsed by, or operated by Flock Group Inc. or any ALPR vendor or government agency.',
            ],
          },
          {
            heading: 'Why this project: the niche thesis',
            paragraphs: [
              'ALPR networks have rolled out across U.S. cities for years - largely through vendors like Flock Safety - with limited public visibility into coverage, contracts, and data retention. Local coverage exists but is fragmented per-city; FOIA records exist but stay siloed in municipal archives.',
              'flockfinder consolidates that information into a single, sourced, browsable form: per-city dossiers, a national camera map, a FOIA tracker, and a Cancel Tracker for cities that have ended their ALPR contracts.',
            ],
          },
          {
            heading: 'What we publish: 4 pillars',
            paragraphs: [
              'flockfinder ships in four product pillars, each designed to answer a different kind of public-information question:',
            ],
            listItems: [
              'Camera Map - a Leaflet + OpenStreetMap national overlay of publicly-known ALPR nodes with city / state attribution. Camera entries are only published when their source is a public document (sheriff press release, council minutes, vendor capex disclosure, redacted FOIA response, etc.).',
              'City Dossiers - long-form, sourced profiles of cities with active or recently concluded ALPR deployments. Each dossier lists the number of known cameras, the operating agency, contract terms where public, and the latest FOIA disclosures.',
              'FOIA Tracker - a public log of Public Records Requests we have filed, organised by state and city. Citizens and journalists can see what has been asked, what has been answered, and what is still pending.',
              'Cancel Tracker - a running index of cities that have voted down, ended, or let lapse an ALPR contract (e.g., Mountain View 2025; Wilkes-Barre, PA). Built so other cities can see how others exited.',
            ],
          },
          {
            heading: 'Sourcing rules: 100% public records',
            paragraphs: [
              'flockfinder ships with a hard rule on sourcing - the badge is shown on every page:',
            ],
            listItems: [
              '"100% Records sourced from public government documents" - only contracts, council minutes, RFPs, FOIA responses, public-records requests, and capex disclosures.',
              'No vendor leak data, no network taps, no inferences from observed plate reads.',
              'Every claim links to a primary source hosted on a .gov / .us domain, a municipal archive, or a redacted FOIA response.',
              'No AI-generated quotes from officials; summaries are written from the document, not from secondary coverage.',
              'Anti-tampering disclaimer on every guide page - the project never publishes instructions that facilitate damage to, disabling of, or tampering with public infrastructure.',
            ],
          },
          {
            heading: 'Editorial posture & independence',
            paragraphs: [
              'flockfinder is operated independently of any vendor, agency, or political party. Its operating mailing address is PO Box 1, Boston, MA 02101 - chosen on purpose so the project is not bound to any single jurisdiction.',
              'When a city or agency disputes a dossier entry, the project publishes the correction alongside a primary-source note. Corrections are visible in the page history, not silently overwritten.',
            ],
          },
          {
            heading: 'Tech stack & deployment',
            listItems: [
              'Next.js (App Router) + Tailwind CSS for fast, JS-optional pages - dossier pages must be readable with JS off because they are public records.',
              'Leaflet + OpenStreetMap tiles for the camera map (vendor-neutral base map, no Mapbox key required).',
              'Dossier records live in JSON / Markdown with a small SQLite mirror for structured queries (e.g., "show all cities in CA with an active contract").',
              'Plausible for privacy-first analytics - no fingerprinting, no cross-site tracking.',
              'Editor workflow is pull-request based: changes are diffs and the audit trail is the git history.',
              'Static-exported and hosted on Cloudflare Pages for cheap, fast global delivery.',
            ],
          },
        ],
        cta: {
          prefix: 'Start with your city - ',
          text: 'open flockfinder.online',
          href: 'https://flockfinder.online/',
        },
        external: {
          label: 'Visit flockfinder.online ↗',
          href: 'https://flockfinder.online/',
        },
      }}
      zh={{
        title: 'flockfinder.online —— 由公开记录驱动的 ALPR 公民透明度站',
        sections: [
          {
            heading: '项目概述',
            paragraphs: [
              'flockfinder.online 是一个独立的公民透明度项目，使用公开记录与开放政府数据，记录美国各城市的自动车牌识别（ALPR）摄像头覆盖情况。',
              '项目由 The Transparency Project 运营，并在页面上明确声明：本项目与 Flock Group Inc. 以及任何 ALPR 厂商或政府机构均无关联、未获其背书、亦不由其运营。',
            ],
          },
          {
            heading: '为什么做这个站：选题依据',
            paragraphs: [
              '过去几年美国城市大规模部署 ALPR 网络——主要由 Flock Safety 等厂商提供——但在其覆盖范围、合同条款与数据保留周期上长期缺乏公开可见度。地方媒体偶有报道，但分散在各家报纸；FOIA 档案虽存在，却散落在市政存档里无人整理。',
              'flockfinder 把这些信息汇总成一个可浏览、附信源的整体形态：城市档案、全国摄像头地图、FOIA 申请进度台，以及已经终止 ALPR 合同的城市的退出追踪。',
            ],
          },
          {
            heading: '内容架构：四大产品支柱',
            paragraphs: [
              'flockfinder 由四个产品支柱组成，分别对应不同种类的公开信息诉求：',
            ],
            listItems: [
              'Camera Map：基于 Leaflet + OpenStreetMap 的全国摄像头地图，每个节点都带城市 / 州归属；只有「具备公开信源」的节点（警长通稿、市议会纪要、厂商 capex 披露、脱敏 FOIA 答复等）才会被收录。',
              'City Dossiers：长期维护、按城市精修的档案，涵盖现役或近期结束 ALPR 部署的城市；每份档案列出公开的摄像头数量、运营机构、合同条款（如已公开）以及最新 FOIA 披露。',
              'FOIA Tracker：已提交信息自由申请的公开台账，按州 / 城市组织；公众与记者可以快速查阅「已提 / 已答 / 待答」状态。',
              'Cancel Tracker：长期维护的退出追踪表，记录投票否决、合同终止或自然到期的 ALPR 部署（例如 2025 年的 Mountain View、宾州 Wilkes-Barre），让其它城市看见别人是怎么退出的。',
            ],
          },
          {
            heading: '信源规则：100% 来自公开记录',
            paragraphs: [
              'flockfinder 把信源规则做成硬约束，并在每页显著位置标明：',
            ],
            listItems: [
              '"100% Records sourced from public government documents"：只采用合同、市议会纪要、RFP、FOIA 答复、信息公开申请、capex 披露等。',
              '不使用厂商泄露数据，不接入网络抓包，不从观察到的车牌读数做推断。',
              '每条论断都附至少一条一手信源链接，host 在 .gov / .us、市政存档或脱敏 FOIA 答复上。',
              '不使用 AI 生成官员引文；摘要直接基于原始文件，而非二手报道。',
              '每篇指南页都明确反破坏声明——项目绝不发布任何帮助损坏、停用或篡改公共设施的指引。',
            ],
          },
          {
            heading: '编辑立场与独立性',
            paragraphs: [
              'flockfinder 独立于任何厂商、机构或党派运营；运营通讯地址使用 PO Box 1, Boston, MA 02101，故意不与特定司法辖区绑定。',
              '当某城市或机构对档案内容提出异议时，项目会附一手信源更正；更正会在页面历史里显式记录，而不是静默覆盖。',
            ],
          },
          {
            heading: '技术栈与部署',
            listItems: [
              'Next.js（App Router）+ Tailwind CSS，页面 JS 可关——档案页本质是公开记录，必须可以在无 JS 环境下完整阅读。',
              '摄像头地图基于 Leaflet + OpenStreetMap 中立底图，无需 Mapbox key。',
              '档案数据存于 JSON / Markdown，并附带 SQLite 镜像做结构化查询（例如「列出 CA 州所有仍在合同内的城市」）。',
              'Plausible 提供隐私优先的流量分析，无指纹、无跨站跟踪。',
              '编辑走 Pull Request：内容变更即 diff，审计轨迹就是 git 历史。',
              '静态导出 + Cloudflare Pages，全球快速分发。',
            ],
          },
        ],
        cta: {
          prefix: '从你所在的城市开始看：',
          text: '打开 flockfinder.online',
          href: 'https://flockfinder.online/',
        },
        external: {
          label: '访问 flockfinder.online ↗',
          href: 'https://flockfinder.online/',
        },
      }}
    />
  );
}
