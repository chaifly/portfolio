"use client";

import { usePathname, useRouter } from 'next/navigation';

export default function SkillsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const isZhRoute = pathname?.startsWith('/zh');
  const locale: 'en' | 'zh' = isZhRoute ? 'zh' : 'en';

  const switchLocale = (nextLocale: 'en' | 'zh') => {
    if (!pathname) return;
    if (nextLocale === 'en') {
      const newPath = pathname.startsWith('/zh') ? pathname.replace(/^\/zh/, '') || '/' : pathname;
      router.push(newPath);
    } else {
      if (pathname.startsWith('/zh')) return;
      const newPath = pathname === '/' ? '/zh' : `/zh${pathname}`;
      router.push(newPath);
    }
  };

  const personSkillsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Chen',
    jobTitle: locale === 'en' ? 'Data Analyst / Data Product Professional' : '数据分析师 / 数据产品从业者',
    url: 'https://your-portfolio-domain.com',
    skills:
      locale === 'en'
        ? [
            'Python for data analysis (pandas / numpy / visualization)',
            'SQL and data extraction',
            'Metric design and data modeling (star schema, wide tables)',
            'Basic machine learning workflow (feature engineering, model evaluation)',
            'Data visualization and business storytelling',
            'Foundations of finance and accounting concepts',
          ]
        : [
            'Python 数据分析基础（pandas / numpy / 可视化）',
            'SQL 与数据抽取',
            '指标体系与数据建模（星型模型、宽表建模）',
            '基础机器学习建模流程（特征工程、模型评估）',
            '数据可视化与商业分析沟通',
            '金融与财务基础概念理解',
          ],
    knowsAbout:
      locale === 'en'
        ? [
            'Financial industry (risk control, credit, transaction analysis)',
            'Telecom operator business (user growth, churn, plan analysis)',
            'Local services and on-demand delivery analytics',
            'Content safety and risk control strategies',
            'Data product requirement analysis and metric design',
          ]
        : [
            '金融行业业务（风控、授信、交易分析等）',
            '电信运营商业务（用户增长、流失、套餐分析）',
            '本地生活服务（到店、到家业务数据分析）',
            '内容安全与风控策略',
            '数据产品需求分析与指标设计',
          ],
  };

  const content =
    locale === 'en'
      ? {
          pageTitle: 'Skills & Experience',
          pageIntro:
            'This page summarises my core skills as a data analyst and my experience across finance, telecom, local services and content safety.',
          coreTitle: 'Core Technical Skills',
          coreIntro:
            'Over years of working with data, I have developed a stable toolkit around data collection, modeling, analysis and communication to support product and business decisions.',
          coreList: [
            'Python data analysis: comfortable with pandas / numpy for data cleaning, feature creation and metric calculation.',
            'SQL and data extraction: able to work with complex schemas to join, aggregate and prepare analysis datasets.',
            'Metric system & data modeling: design metric systems and topic-wide tables aligned with business goals.',
            'Basic machine learning: experience in participating in classification / prediction projects with feature engineering and evaluation.',
            'Data visualization: building dashboards or custom visualisations to communicate findings to stakeholders.',
            'Problem decomposition & storytelling: translate business questions into measurable metrics and analysis plans.',
          ],
          domainTitle: 'Project-Specific Skills & Domain Experience',
          domainIntro:
            'Through real projects in different industries, I have built up an understanding of domain metrics, risk logic and operational strategies that can be transferred to new products and analysis tasks.',
          domainList: [
            'Finance & accounting basics: understand core concepts like balance sheet, P&L and cashflow to support modeling and KPIs.',
            'Financial risk and credit: experience in risk rule analysis and scorecard-related work, focusing on delinquency and default metrics.',
            'Telecom operator data: user lifecycle analysis, plan strategy evaluation and campaign performance measurement.',
            'Local services (to-store & to-home): build merchant, order and traffic dashboards and analysis frameworks.',
            'Content safety: participate in policy and model performance analysis with attention to recall and false positive trade-offs.',
            'Data modeling & data product collaboration: hands-on collaboration with data warehouse and tracking design.',
          ],
        }
      : {
          pageTitle: '技能与经验',
          pageIntro:
            '这里梳理了作为数据分析师与数据相关从业经历中积累的核心技术栈，以及在金融、电信、本地生活与内容安全等业务场景下形成的项目特定能力。',
          coreTitle: '核心技术',
          coreIntro:
            '长期从事数据分析工作，围绕数据采集、建模、分析与沟通，形成了一套相对稳定的技术组合，用于支持产品与业务决策。',
          coreList: [
            'Python 数据分析：熟悉 pandas / numpy，用于数据清洗、特征加工与指标计算。',
            'SQL 与数据抽取：能够在复杂业务库中完成数据抽取、关联与聚合。',
            '数据建模与指标体系：根据业务目标设计指标体系与主题宽表，支持报表与分析。',
            '基础机器学习：参与分类、预测等建模项目，对特征工程与模型评估有实践经验。',
            '数据可视化：使用 BI 或自建可视化方案，将分析结论结构化呈现给业务方。',
            '需求拆解与分析故事讲述：能够将业务问题拆解为可度量的指标与分析路径。',
          ],
          domainTitle: '项目特定技术与领域经验',
          domainIntro:
            '在不同业务领域中，通过实际项目沉淀出对行业指标、风控逻辑与运营策略的理解，这些经验可以快速迁移到新的数据产品与分析任务中。',
          domainList: [
            '金融与财务基础：理解资产负债表、利润表、现金流等核心概念，用于建模与指标设计。',
            '金融风控与授信：参与风控规则与评分卡相关分析，对逾期、违约等风险指标有实践经验。',
            '电信运营商数据：熟悉用户生命周期分析、套餐策略评估与运营活动效果衡量。',
            '本地生活与到店到家业务：围绕商户、订单与流量构建经营看板与分析模型。',
            '内容安全：参与内容审核策略与模型效果分析，关注召回率与误杀率平衡。',
            '数据建模与数据产品协作：对数据中台、数仓分层与埋点设计有实战配合经验。',
          ],
        };

  return (
    <>
      <section className="skills-page">
        <div className="lang-toggle" aria-label="Language switcher">
          <button
            type="button"
            className={locale === 'en' ? 'active' : ''}
            onClick={() => switchLocale('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={locale === 'zh' ? 'active' : ''}
            onClick={() => switchLocale('zh')}
          >
            中文
          </button>
        </div>

        <header className="skills-header">
          <h1>{content.pageTitle}</h1>
          <p>{content.pageIntro}</p>
        </header>

        <div className="skills-grid">
          <section className="skills-card">
            <h2>{content.coreTitle}</h2>
            <p>{content.coreIntro}</p>
            <ul>
              {content.coreList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="skills-card">
            <h2>{content.domainTitle}</h2>
            <p>{content.domainIntro}</p>
            <ul>
              {content.domainList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSkillsJsonLd) }}
      />
    </>
  );
}
