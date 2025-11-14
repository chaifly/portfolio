import ProjectDetail from '../../../components/ProjectDetail';

export default function CalculateCentralPage() {
  return (
    <ProjectDetail
      en={{
        title: 'Calculate Central - Online Calculator Toolkit',
        sections: [
          {
            heading: 'Overview',
            paragraphs: [
              'Calculate Central is an online calculator toolkit designed for high-frequency and professional calculation scenarios.',
              'It focuses on encapsulating complex formulas, business rules, and multi-step workflows into intuitive user interfaces so that users can complete advanced calculations directly in the browser.',
            ],
          },
          {
            heading: 'Technical Challenges',
            paragraphs: [
              'The core challenges of the project lie in performing accurate calculations on complex formulas while keeping the UI responsive and performant.',
            ],
            listItems: [
              'Handling high-precision numeric operations in the browser to minimise floating-point errors.',
              'Designing an extensible computation module so that new calculators from different domains can be added over time.',
              'Maintaining smooth interactions and good perceived performance even under frequent user input and recalculation.',
            ],
          },
          {
            heading: 'Tech Stack',
            listItems: [
              'TypeScript + React / Next.js for the frontend interface and routing.',
              'A modular calculation engine that abstracts formulas and validation logic for each calculator.',
              'Modern frontend tooling and optimisation techniques for bundle size and runtime performance.',
            ],
          },
        ],
        cta: {
          prefix: 'To explore the full feature set, please ',
          text: 'visit the complete online calculator toolkit',
          href: 'https://calccentral.net/',
        },
      }}
      zh={{
        title: 'Calculate Central - 在线计算器工具集',
        sections: [
          {
            heading: '项目概述',
            paragraphs: [
              'Calculate Central 是一个面向高频计算场景的在线计算器工具集，专注于将复杂公式、业务规则和多步骤计算流程封装为简单直观的交互界面。',
              '通过这些工具，用户可以在浏览器中快速完成专业级计算，而无需手动维护复杂表格或脚本。',
            ],
          },
          {
            heading: '技术挑战',
            paragraphs: [
              '项目的核心挑战在于需要对大量复杂公式进行精确计算，同时保证前端交互的流畅性和整体性能。',
            ],
            listItems: [
              '在浏览器端处理高精度数值运算，最大程度减少浮点误差累积。',
              '设计可扩展的公式与计算模块，支持后续新增不同领域的专用计算器。',
              '在高交互频率下保持良好的响应性能与用户体验。',
            ],
          },
          {
            heading: '使用的技术栈',
            listItems: [
              'TypeScript + React / Next.js：用于构建前端界面与路由系统。',
              '模块化计算引擎：针对不同计算器场景抽象公式与校验逻辑，便于复用与扩展。',
              '现代前端工程化工具链：支持打包优化、代码分割与性能调优。',
            ],
          },
        ],
        cta: {
          prefix: '如需体验完整功能，请 ',
          text: '访问完整的在线计算器工具包',
          href: 'https://calccentral.net/',
        },
      }}
    />
  );
}
