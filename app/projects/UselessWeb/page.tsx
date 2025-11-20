import ProjectDetail from '../../../components/ProjectDetail';

export default function UselessWebPage() {
  return (
    <ProjectDetail
      currentSlug="UselessWeb"
      en={{
        title: 'Useless Web - Don\'t Click Experiment',
        sections: [
          {
            heading: 'Overview',
            paragraphs: [
              "Useless Web is my first experimental web project, inspired by an existing 'useless websites' collection but reimagined with a playful 'don't click' experience.",
              'Instead of directly listing links, the site invites visitors to resist the urge to click, turning a simple collection of useless sites into a small interaction experiment.',
            ],
          },
          {
            heading: 'Concept & Interaction',
            paragraphs: [
              "The core idea is intentionally simple: present a big 'don\'t click' style entry point that teasingly encourages people to click anyway.",
              'Behind that entry are randomly surfaced useless websites — quirky pages that do nothing practical but are oddly entertaining.',
            ],
          },
          {
            heading: 'Community Contributions',
            paragraphs: [
              'To keep the collection fresh, Useless Web allows visitors to submit their own favourite useless websites.',
              'Over time, this turns the project into a small community-driven archive of weird, funny, or surprising URLs discovered across the internet.',
            ],
          },
        ],
        cta: {
          prefix: 'To experience the \"don\'t click\" experiment yourself, ',
          text: 'visit the Useless Web site',
          href: 'https://www.uselessweb.net/',
        },
      }}
      zh={{
        title: 'Useless Web - 「不要点」风格的无用网站实验',
        sections: [
          {
            heading: '项目概述',
            paragraphs: [
              'Useless Web 是我个人的第一个尝试性项目，灵感来自某个同类「无用网站」集合，但以一种更调皮的「不要点」形式呈现。',
              '页面并不是直接罗列链接，而是先用「不要点」式的入口吊起用户的好奇心，把一堆无用网站变成一个小小的交互实验。',
            ],
          },
          {
            heading: '理念与交互',
            paragraphs: [
              '核心概念非常简单：在页面上放一个「不要点」式的入口按钮，看用户能否忍住不点。',
              '在这个入口之后，会随机展示各类无用网站——这些页面几乎没有实际功能，却往往出乎意料地好玩或荒诞。',
            ],
          },
          {
            heading: '用户参与与收集',
            paragraphs: [
              '为了让站点持续有新内容，Useless Web 也为访客提供了提交入口，欢迎大家分享自己收藏或偶然发现的「useless website」。',
              '随着时间推移，这个项目逐渐变成一个由用户共同构建的「无用但有趣」网址小档案库。',
            ],
          },
        ],
        cta: {
          prefix: '如果你也想体验一下这个「不要点」实验，请 ',
          text: '访问 Useless Web 站点',
          href: 'https://www.uselessweb.net/',
        },
      }}
    />
  );
}
