import ProjectDetail from '../../../components/ProjectDetail';

export default function EpitaphPage() {
  return (
    <ProjectDetail
      en={{
        title: 'Digital Epitaphs - Online Memorial Project',
        sections: [
          {
            heading: 'Overview',
            paragraphs: [
              'Digital Epitaphs is a personal product experiment built around one simple question: what final words would we want to leave behind at the end of life?',
              'The site collects epitaphs together with the people and stories behind them, turning short last words into a richer space for remembrance and reflection.',
            ],
          },
          {
            heading: 'How the project started',
            paragraphs: [
              'While working on different products I kept looking for the next meaningful direction, and by chance discovered the niche field of epitaphs.',
              'Existing sites often list epitaphs in isolation; very few try to connect those words with the lives and contexts behind them. Digital Epitaphs is my attempt to explore that missing layer.',
            ],
          },
          {
            heading: 'What the project does',
            listItems: [
              'Collect meaningful epitaphs from different cultures and regions.',
              'Document the stories of the people behind each epitaph.',
              'Use these stories to explore the meaning and value of life.',
              'Build a quiet digital space for remembrance, reflection, and shared memory.',
              "Make sure each life's final words can continue to be heard online.",
            ],
          },
          {
            heading: 'Tone and intention',
            paragraphs: [
              'The project is not about sensationalism; it is about respect, empathy, and drawing strength from people who have already completed their journey.',
              'I hope that, as you browse, you can also find a bit of comfort, courage, or inspiration for your own path. May the force be with you.',
            ],
          },
        ],
        cta: {
          prefix: 'To read the epitaph stories online, please ',
          text: 'visit the Digital Epitaphs site',
          href: 'https://epitaph.world/',
        },
      }}
      zh={{
        title: '数字纪念碑 - 在线墓志铭与纪念项目',
        sections: [
          {
            heading: '项目概述',
            paragraphs: [
              '数字纪念碑是一个围绕「人生最后想留下什么话」这一问题展开的个人产品实验。',
              '站点不仅收集墓志铭本身，也尽量记录背后的人物与故事，让短短几句话变成一个可以停下来缅怀与思考的空间。',
            ],
          },
          {
            heading: '项目的起点',
            paragraphs: [
              '在做一系列产品的过程中，我一直在寻找一个更值得长期投入的方向，机缘巧合之下看到了 epitaphs（墓志铭）这一并不热门的领域。',
              '很多网站只是简单罗列墓志铭，很少会把这些话与说出它们的人、他们的生命经历真正连接起来。数字纪念碑就是试图补上这块缺失的拼图。',
            ],
          },
          {
            heading: '我们在做什么',
            listItems: [
              '收集世界各地有代表性的墓志铭与纪念文字；',
              '尽力还原每一句话背后的人物与生命故事；',
              '借由这些故事，一起讨论生命的意义与价值；',
              '搭建一个安静的线上空间，用于缅怀、反思与停留；',
              '让每个生命的最后话语在数字世界中被更多人听见。',
            ],
          },
          {
            heading: '意义与期待',
            paragraphs: [
              '这个项目并不是猎奇，而是希望以尊重和共情的方式，向已经走完旅程的人致敬，也给还在路上的我们一点点力量。',
              '希望你在浏览这些墓志铭的同时，也能获得一些安慰、勇气，或者面对生活的新的角度。May the force be with you.',
            ],
          },
        ],
        cta: {
          prefix: '如果你想进一步阅读这些墓志铭与故事，请 ',
          text: '访问数字纪念碑站点',
          href: 'https://epitaph.world/',
        },
      }}
    />
  );
}
