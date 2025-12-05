import ProjectDetail from '../../../components/ProjectDetail';

export default function TiktokEmojisPage() {
  return (
    <ProjectDetail
      currentSlug="emojitik"
      en={{
        title: 'Tiktok Emojis – The Ultimate TikTok Emoji Tool',
        sections: [
          {
            heading: 'Overview',
            paragraphs: [
              "Tiktok Emojis (Emojitik.com) is the ultimate TikTok emoji tool and a specialized niche website dedicated to unlocking TikTok's hidden emoji codes (e.g., [cry]).",
              'It focuses on helping creators, community managers, and power users quickly discover and use secret emojis across comments, captions, and DMs.',
            ],
          },
          {
            heading: 'Problems with existing tools',
            paragraphs: [
              'Most existing TikTok emoji sites have poor mobile UX: cluttered layouts, multiple taps just to copy a code, and noisy ads or unrelated content.',
              'Tiktok Emojis was designed specifically to fix these pain points with a focused interface and simple interactions that work great on small screens.',
            ],
          },
          {
            heading: 'Experience & features',
            listItems: [
              'Mobile-first layout tailored for TikTok creators browsing on phones.',
              'Millisecond-level one-click copy so users can copy hidden emoji codes into the clipboard with a single tap.',
              'Visual emotional indexing that lets users browse emojis by mood instead of memorising raw codes.',
              "Searchable library of TikTok's hidden emojis with clean, distraction-free presentation.",
            ],
          },
          {
            heading: 'Data quality & maintenance',
            paragraphs: [
              'Under the hood, the emoji dataset is continuously curated to keep up with TikTok emoji changes and community usage.',
              'The goal is to make Tiktok Emojis the most user-friendly and accurate TikTok secret emoji library on the web.',
            ],
          },
        ],
        cta: {
          prefix: 'To try the tool, please ',
          text: 'visit Emojitik.com',
          href: 'https://emojitik.com/',
        },
      }}
      zh={{
        title: 'Tiktok Emojis – TikTok 秘密表情代码工具站',
        sections: [
          {
            heading: '项目概述',
            paragraphs: [
              'Tiktok Emojis（Emojitik.com）是一个面向 TikTok 创作者的秘密表情代码工具站，专注收录和呈现 TikTok 隐藏表情（如 [cry]）。',
              '相较于通用的表情列表，它更关注在真实创作场景下的查找效率和使用体验。',
            ],
          },
          {
            heading: '现有工具的痛点',
            paragraphs: [
              '市面上现有的 TikTok 表情工具，在移动端往往存在复制步骤繁琐、页面信息噪音大、广告干扰强等问题。',
              'Tiktok Emojis 从一开始就以「移动优先」为前提，希望用更纯粹的界面和交互，把查找与复制这两个动作做到极致顺滑。',
            ],
          },
          {
            heading: '体验设计与功能亮点',
            listItems: [
              '移动端优先的信息架构和页面布局，更贴近 TikTok 创作者在手机上的真实使用习惯。',
              '毫秒级响应的一键复制能力，点击即可将隐藏表情代码复制到剪贴板，减少多余步骤。',
              '可视化情绪索引，以情绪/氛围而不是代码记忆来浏览表情，更贴合内容创作时的思考方式。',
              '针对 TikTok 场景做过筛选和排布的表情库，界面干净、没有额外噪音内容。',
            ],
          },
          {
            heading: '数据质量与维护',
            paragraphs: [
              '站点持续维护与更新 TikTok 隐藏表情相关数据，跟进平台变化和社区常用表达。',
              '目标是把 Tiktok Emojis 打造成目前体验最流畅、数据最准确的 TikTok 表情查询库。',
            ],
          },
        ],
        cta: {
          prefix: '如果你想体验这个工具，请 ',
          text: '访问 Emojitik.com',
          href: 'https://emojitik.com/',
        },
      }}
    />
  );
}
