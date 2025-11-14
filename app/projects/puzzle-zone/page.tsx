import ProjectDetail from '../../../components/ProjectDetail';

export default function PuzzleZonePage() {
  return (
    <ProjectDetail
      en={{
        title: 'PuzzleZone - Unblocked Browser Games Hub',
        sections: [
          {
            heading: 'Overview',
            paragraphs: [
              'PuzzleZone started from a simple idea: to create a clean, accessible hub for playing unblocked browser games anywhere — at school, at work, or at home.',
              'The site is designed as a lightweight, easy-to-browse destination where you can quickly jump into casual games without complicated setup.',
            ],
          },
          {
            heading: 'How the Project Started',
            paragraphs: [
              'PuzzleZone was built as a learning project in collaboration with ChatGPT. With AI guidance, I learned how to structure a modern web app, write React and Next.js code, and refine the UI step by step.',
              'Features such as the fixed navbar, search, and category filtering were iterated through many small improvements and late-night debugging sessions.',
            ],
          },
          {
            heading: 'Content Sources & Growth',
            listItems: [
              'The first wave of games came from open-source projects on GitHub — small, creative indie titles shared by developers around the world.',
              'Over time, PuzzleZone expanded by integrating HTML5 games from online distributors and publishers, using batch import to add hundreds of titles efficiently.',
              'Today the site hosts 300+ games across genres such as puzzle, action, racing, and strategy, making it a convenient entry point for quick play sessions.',
            ],
          },
          {
            heading: 'Future & Collaboration',
            paragraphs: [
              'Most games on PuzzleZone are designed for short bursts of fun, but the project itself is still growing piece by piece — game by game.',
              'I actively look for new distribution partners and independent creators. If you know a great source of browser games or want to share your own, I would love to hear from you.',
            ],
          },
        ],
        cta: {
          prefix: 'To try the games yourself, please ',
          text: 'visit the PuzzleZone website',
          href: 'https://puzzlezone.online/',
        },
      }}
      zh={{
        title: 'PuzzleZone - 在线无障碍小游戏中心',
        sections: [
          {
            heading: '项目概述',
            paragraphs: [
              'PuzzleZone 起源于一个简单的想法：做一个干净、易访问的浏览器小游戏入口，让用户无论在学校、公司还是家里，都能随时打开网页玩一局。',
              '站点整体尽量保持轻量和简洁，让用户可以快速浏览并进入游戏，而不需要复杂的前置操作。',
            ],
          },
          {
            heading: '从学习项目到完整站点',
            paragraphs: [
              'PuzzleZone 是我与 ChatGPT 一起完成的学习型项目。在 AI 的帮助下，我从零开始搭建现代 Web 应用，逐步学习项目结构、React 与 Next.js 的编写方式，以及如何一点点打磨界面细节。',
              '固定导航栏、搜索功能以及按分类筛选等特性，都是在无数次小迭代和深夜调试中逐步完善的。',
            ],
          },
          {
            heading: '游戏来源与规模',
            listItems: [
              '最初的一批游戏来自 GitHub 上的开源项目，这些由全球开发者分享的小型独立游戏构成了 PuzzleZone 的基础。',
              '随后站点逐步接入多家在线游戏分发商与 Publisher 的 HTML5 游戏，通过批量导入的方式高效扩展游戏数量。',
              '目前站点已经汇集了 300+ 款小游戏，覆盖益智、动作、赛车、策略等多种类型，适合在碎片时间轻松游玩。',
            ],
          },
          {
            heading: '持续迭代与合作',
            paragraphs: [
              'PuzzleZone 目前的大部分游戏都偏向「短时娱乐」，但站点本身仍在持续迭代，就像一块块拼图被慢慢拼完整。',
              '我也在积极寻找新的游戏分发合作伙伴与创作者。如果你知道优质的浏览器游戏来源，或希望分享自己的作品，都非常欢迎与我联系。',
            ],
          },
        ],
        cta: {
          prefix: '如果你也想亲自体验这些小游戏，请 ',
          text: '访问 PuzzleZone 在线站点',
          href: 'https://puzzlezone.online/',
        },
      }}
    />
  );
}
