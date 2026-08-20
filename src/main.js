const commercial = {
  price: 'USD 500',
  unitZh: '1 個 Workflow',
  unitEn: '1 workflow',
}

const appBase = (import.meta.env?.BASE_URL || '/').replace(/\/$/, '')

function appUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${appBase}${normalizedPath}` || '/'
}

function currentRoute() {
  let path = window.location.pathname
  if (appBase && path.startsWith(appBase)) path = path.slice(appBase.length) || '/'
  return path.replace(/\/$/, '') || '/'
}

let currentLang = 'zh'
try {
  currentLang = localStorage.getItem('terry-ai-lab-lang') === 'en' ? 'en' : 'zh'
} catch {
  currentLang = 'zh'
}

const icons = {
  arrow: '<span aria-hidden="true">↗</span>',
  plus: '<span aria-hidden="true">+</span>',
  dot: '<span class="signal-dot" aria-hidden="true"></span>',
}

const nav = {
  zh: [
    ['/ai-agents', '解決方案'],
    ['/#process', '合作方式'],
    ['/cases', '案例'],
    ['/insights', '教學'],
    ['/about', '關於 Terry'],
  ],
  en: [
    ['/ai-agents', 'Solutions'],
    ['/#process', 'How We Work'],
    ['/cases', 'Cases'],
    ['/insights', 'Insights'],
    ['/about', 'About Terry'],
  ],
}

const text = {
  zh: {
    homeTitle: 'Terry AI Lab — 企業成長與 AI 落地夥伴',
    homeDescription: 'Terry AI Lab 協助企業釐清真正問題，再與團隊共同建立可持續使用的 workflow。',
    home: {
      heroKicker: 'BUSINESS DIAGNOSIS · AI AGENT EXECUTION',
      heroTitle: ['先找出真正問題', '再讓 AI Agent 持續處理'],
      heroLead: '企業顧問先釐清流程，再由 Terry 與團隊建立可用的 AI Agent',
      heroPrimary: '30 分鐘為你找出答案',
      primary: '開始 30 分鐘診斷',
      secondary: '查看方案內容',
      selectorKicker: 'START WITH YOUR PROBLEM',
      selectorTitle: '你遇到哪個問題？',
      selectorLead: '選擇一項 / 查看可以改善的結果',
      current: '現況',
      improved: '改善後',
      outcomes: ['找出問題', '建立 Agent', '持續改善'],
      productKicker: 'ONE SOLUTION · TWO PARTS',
      productTitle: ['一個方案', '兩個部分'],
      productLead: '先指出問題，再處理問題',
      productParts: [
        ['01', '企業顧問診斷', '找出真正問題', '找出最重複／最耗時／最容易遺漏的流程'],
        ['02', 'AI Agent 建置', '持續處理問題', '自動回覆／收集資料／判斷下一步／記錄及跟進'],
      ],
      productTailor: '按你的行業、流程及系統度身設計',
      productUseCase: '首個產品例子：客戶查詢與跟進 Agent',
      casesKicker: 'REAL WORKFLOW EVIDENCE',
      casesTitle: ['由問題出發', '看到可量度改善'],
      casesLead: '用實際 Workflow、操作畫面及可公開數據，說明 Agent 如何加入日常營運。',
      marketingCaseTitle: ['AI Agent 加入營運後', '獲客成本下降'],
      marketingCaseLead: '將 AI Agent 加入營運及 Marketing Workflow，同步改善內容製作、廣告測試及查詢跟進。',
      marketingCaseSupport: '每位潛在客戶成本下降 62.6%',
      marketingCaseBefore: '之前',
      marketingCaseAfter: '之後',
      marketingCaseDisclaimer: 'Meta Lead Campaign 實際記錄。結果會因預算、受眾及市場而異。',
      operationsCaseTitle: ['從分散試算表', '到統一客戶跟進系統'],
      operationsCaseLead: '將分散資料、負責人與跟進提醒，放進同一個可檢視的 Workflow。',
      operationsBefore: '每個廣告／表格各自收集資料，人手整理，容易遺漏。',
      operationsAfter: '一個管理中心，Agent 檢查新客戶及未聯絡記錄，再提醒團隊跟進。',
      operationsOutcome: '少一點人手整理／少一點遺漏／每位客戶都有下一步',
      marketingSampleKicker: 'MARKETING WORKFLOW SAMPLE',
      marketingSampleTitle: ['由內容方向', '到短劇成片'],
      marketingSampleLead: '由 AI Agent 協調內容流程，再使用 AI 生成圖片及影片。',
      marketingSampleLabel: '保險顧問短劇示例',
      sampleDisclosure: '示範作品，不代表已驗證的客戶案例。',
      comparisonKicker: 'THREE WAYS TO WORK',
      comparisonTitle: '三種合作模式',
      comparisonLead: '企業教練、AI 公司，與我們的分別',
      comparisonTypes: ['企業教練', 'AI 公司', '我們'],
      comparisonRows: ['找出根因', '共同建置', '團隊掌握', '最終結果'],
      comparisonCells: [
        ['主要重點', '視項目而定', '包含'],
        ['通常不包括', '主要重點', '包含'],
        ['視服務而定', '視服務而定', '包含'],
        ['方向', '工具', '方向 + 工具 + 成果'],
      ],
      methodKicker: 'FROM DIAGNOSIS TO AGENT',
      methodTitle: ['從診斷到 Agent 上線', '由同一位夥伴負責'],
      methodLead: '由同一位夥伴，連接問題、建置與交付。',
      methodSteps: [
        ['釐清', 'CLARIFY', '目標、流程與根因'],
        ['設計', 'DESIGN', 'Agent 邏輯與邊界'],
        ['建置', 'BUILD', '連接資料與工具'],
        ['交付', 'HANDOVER', '團隊可以使用'],
      ],
      instagramKicker: 'TERRY PRACTICAL TEACHING',
      instagramTitle: '更多實用 AI 教學',
      instagramLead: 'Terry 持續分享 AI Agent、工作效率及內容製作方法',
      offerKicker: 'AI AGENT WORKFLOW',
      offerTitle: ['一個核心 Workflow', '一個可用 Agent'],
      offerLead: '先集中處理一項最值得改善的工作，再按實際需要擴展。',
      offerButton: '查看建置內容',
      offerIncluded: ['一項核心 Workflow', 'AI Agent 邏輯設計', '基本資料及工具連接', '交付及使用說明'],
      offerExcluded: '不包括第三方／API／WhatsApp／CRM／SaaS 費用、複雜整合、長期維護及額外 Workflow。',
      consultKicker: 'START WITH ONE PROBLEM',
      consultTitle: '帶一個問題來',
      consultLead: '30 分鐘為你找出答案',
      consultNote: '免費初步診斷，不包括完整企業審計',
      faqKicker: 'QUESTIONS BEFORE STARTING',
      faqTitle: '開始之前 你可能想知道',
      finalKicker: 'ONE GOOD FIRST STEP',
      finalTitle: '先找出一個答案',
      finalLead: '選擇一項最想改善的工作',
    },
  },
  en: {
    home: {
      heroKicker: 'BUSINESS DIAGNOSIS · AI AGENT EXECUTION',
      heroTitle: ['Find the real problem', 'Then let an AI Agent handle it'],
      heroLead: 'A business consultant clarifies the workflow, then Terry and the team build a usable AI Agent',
      heroPrimary: 'Find Your Answer in 30 Minutes',
      primary: 'Start a 30-minute diagnosis',
      secondary: 'See the solution',
      selectorKicker: 'START WITH YOUR PROBLEM',
      selectorTitle: 'Which problem are you facing?',
      selectorLead: 'Choose one / see the outcome',
      current: 'Current state',
      improved: 'Improved state',
      outcomes: ['Diagnose', 'Build an Agent', 'Improve'],
      productKicker: 'ONE SOLUTION · TWO PARTS',
      productTitle: ['One solution', 'Two parts'],
      productLead: 'Diagnose the problem, then handle it',
      productParts: [
        ['01', 'Business diagnosis', 'Find the real problem', 'Find the most repetitive, time-consuming and leaky workflow'],
        ['02', 'AI Agent build', 'Handle the problem continuously', 'Reply, collect, decide, record and follow up'],
      ],
      productTailor: 'Tailored to your industry, workflow and systems',
      productUseCase: 'First product example: customer enquiry and follow-up Agent',
      casesKicker: 'REAL WORKFLOW EVIDENCE',
      casesTitle: ['Start with the problem', 'See measurable improvement'],
      casesLead: 'Real workflows, operating screens and shareable evidence show how an Agent fits daily operations.',
      marketingCaseTitle: ['After adding an AI Agent', 'Acquisition cost fell'],
      marketingCaseLead: 'The AI Agent joined the operating and marketing workflow, improving content, ad testing and enquiry follow-up together.',
      marketingCaseSupport: 'Cost per potential lead down 62.6%',
      marketingCaseBefore: 'Before',
      marketingCaseAfter: 'After',
      marketingCaseDisclaimer: 'Actual Meta Lead Campaign records. Results vary by budget, audience and market.',
      operationsCaseTitle: ['From scattered sheets', 'to one follow-up system'],
      operationsCaseLead: 'Put scattered data, owners and follow-up reminders into one visible workflow.',
      operationsBefore: 'Every ad or form had its own sheet. Manual handling made follow-up easy to miss.',
      operationsAfter: 'One management centre. The Agent checks new and untouched leads, then reminds the team on WhatsApp.',
      operationsOutcome: 'Less manual handling / fewer misses / a next step for every customer',
      marketingSampleKicker: 'MARKETING WORKFLOW SAMPLE',
      marketingSampleTitle: ['From content direction', 'to a short drama'],
      marketingSampleLead: 'An AI Agent coordinates the content workflow, then AI creates the images and video.',
      marketingSampleLabel: 'Insurance advisor short-drama sample',
      sampleDisclosure: 'Demonstration work, not a verified client case.',
      comparisonKicker: 'THREE WAYS TO WORK',
      comparisonTitle: 'Three ways to work',
      comparisonLead: 'Business coach, AI company and our model',
      comparisonTypes: ['Business Coach', 'AI Company', 'Our model'],
      comparisonRows: ['Root-cause diagnosis', 'Co-building', 'Team capability', 'Typical result'],
      comparisonCells: [
        ['Main focus', 'Depends on scope', 'Included'],
        ['Usually not included', 'Main focus', 'Included'],
        ['Depends on service', 'Depends on service', 'Included'],
        ['Direction', 'Tools', 'Direction + Tools + Outcomes'],
      ],
      methodKicker: 'FROM DIAGNOSIS TO AGENT',
      methodTitle: ['From diagnosis to Agent', 'with one accountable partner'],
      methodLead: 'One partner connects the problem, build and handover.',
      methodSteps: [
        ['Clarify', 'CLARIFY', 'Goal, workflow and root cause'],
        ['Design', 'DESIGN', 'Agent logic and guardrails'],
        ['Build', 'BUILD', 'Connect data and tools'],
        ['Handover', 'HANDOVER', 'The team can use it'],
      ],
      instagramKicker: 'TERRY PRACTICAL TEACHING',
      instagramTitle: 'More practical AI lessons',
      instagramLead: 'Terry shares AI Agents, work efficiency and content production methods',
      offerKicker: 'AI AGENT WORKFLOW',
      offerTitle: ['One core workflow', 'One usable Agent'],
      offerLead: 'Focus on one high-value workflow, then expand when the operation is ready.',
      offerButton: 'See what is included',
      offerIncluded: ['One core workflow', 'AI Agent logic design', 'Basic data and tool connections', 'Handover and usage guide'],
      offerExcluded: 'Excludes third-party, API, WhatsApp, CRM and SaaS fees, complex integrations, long-term maintenance and extra workflows.',
      consultKicker: 'START WITH ONE PROBLEM',
      consultTitle: 'Bring one problem',
      consultLead: '30 minutes to find your answer',
      consultNote: 'Initial diagnosis. Full business audit not included.',
      faqKicker: 'QUESTIONS BEFORE STARTING',
      faqTitle: 'Questions before starting',
      finalKicker: 'ONE GOOD FIRST STEP',
      finalTitle: 'Find one answer first',
      finalLead: 'Bring one workflow you want to improve',
    },
  },
}

const problems = {
  zh: [
    { id: 'lead', number: '01', title: '客戶無人跟進', current: '新客戶容易漏跟', improved: '每位新客都有負責人與下一步', steps: ['收到查詢', '分配負責人', '設定跟進', '檢視狀態'] },
    { id: 'records', number: '02', title: '記錄太慢', current: '資料分散並依賴人手', improved: '資料自動整理及保存', steps: ['收集資料', '整理內容', '儲存記錄', '產生摘要'] },
    { id: 'replies', number: '03', title: '查詢重複', current: '團隊反覆回答相同問題', improved: '常見問題由 Agent 協助處理', steps: ['理解問題', '搜尋知識', '草擬回覆', '真人覆核'] },
    { id: 'handoff', number: '04', title: '工作靠記憶', current: '交接後容易遺漏下一步', improved: '每一步都有記錄及提醒', steps: ['建立請求', '分派工作', '更新狀態', '提醒跟進'] },
    { id: 'visibility', number: '05', title: '營運看不清', current: '資料分散並難以及時判斷', improved: '更早掌握業務狀況', steps: ['整合資料', '檢視訊號', '找出異常', '產生摘要'] },
    { id: 'marketing', number: '06', title: 'Marketing 製作太慢', current: '內容每次由零開始', improved: '圖片與影片持續產出', steps: ['整理方向', '生成圖片', '製作影片', '人手審批'] },
  ],
  en: [
    { id: 'lead', number: '01', title: 'Leads go cold', current: 'New enquiries are missed', improved: 'Every new lead has an owner and next step', steps: ['Capture enquiry', 'Assign owner', 'Set follow-up', 'Review status'] },
    { id: 'records', number: '02', title: 'Records take too long', current: 'Information is scattered and manual', improved: 'Data is structured and saved automatically', steps: ['Collect data', 'Structure notes', 'Store record', 'Create summary'] },
    { id: 'replies', number: '03', title: 'Questions repeat', current: 'The team answers the same questions', improved: 'An Agent helps handle common questions', steps: ['Understand intent', 'Search knowledge', 'Draft reply', 'Human review'] },
    { id: 'handoff', number: '04', title: 'Work relies on memory', current: 'Next steps disappear after handoff', improved: 'Every step is recorded and reminded', steps: ['Create request', 'Assign work', 'Update status', 'Remind follow-up'] },
    { id: 'visibility', number: '05', title: 'The business is hard to see', current: 'Data is scattered and slow to interpret', improved: 'Earlier visibility into the business', steps: ['Combine data', 'Review signals', 'Find anomaly', 'Create summary'] },
    { id: 'marketing', number: '06', title: 'Marketing production is slow', current: 'Every piece starts from zero', improved: 'Images and video keep moving', steps: ['Set direction', 'Generate image', 'Make video', 'Human approval'] },
  ],
}

const lessons = {
  zh: [
    { image: '/instagram-covers/ai-agent-vpn-guide.png', title: '由 0 到 1 教你整免 VPN AI Agent', topic: 'AI AGENT', description: '逐步建立可用 Agent' },
    { image: '/instagram-covers/ai-agent-vpn-hk.png', title: '香港唔使 VPN 都可以整 AI Agent', topic: 'AI AGENT', description: '由零開始自己搭建' },
    { image: '/instagram-covers/agents-md.png', title: '先整理好 AGENTS.md', topic: 'WORKFLOW', description: '先令 AI 明白工作方式' },
    { image: '/instagram-covers/chatgpt-chrome-hidden.png', title: 'ChatGPT 隱藏功能', topic: 'PRACTICAL AI', description: '將 AI 用到日常操作' },
    { image: '/instagram-covers/ai-video-production.jpg', title: 'AI 影像效果製作指南', topic: 'CONTENT', description: '更快完成圖片及影片' },
  ],
  en: [
    { image: '/instagram-covers/ai-agent-vpn-guide.png', title: 'Build an AI Agent from zero', topic: 'AI AGENT', description: 'A step-by-step build' },
    { image: '/instagram-covers/ai-agent-vpn-hk.png', title: 'Build an AI Agent without a VPN', topic: 'AI AGENT', description: 'Start from the basics' },
    { image: '/instagram-covers/agents-md.png', title: 'Set up AGENTS.md first', topic: 'WORKFLOW', description: 'Give AI a clear way to work' },
    { image: '/instagram-covers/chatgpt-chrome-hidden.png', title: 'A hidden ChatGPT feature', topic: 'PRACTICAL AI', description: 'Use AI in everyday operations' },
    { image: '/instagram-covers/ai-video-production.jpg', title: 'AI video production guide', topic: 'CONTENT', description: 'Make images and video faster' },
  ],
}

const faqs = {
  zh: [
    ['你們只做 AI 嗎？', '不是。我們先從企業目標及 Workflow 開始，再判斷哪一段值得改善。'],
    ['你們與一般企業教練有何不同？', '企業教練提供方向，AI 公司建置工具；我們先找出問題，再共同建置，最後讓團隊掌握。'],
    ['我還未知道問題在哪裡，可以諮詢嗎？', '可以。30 分鐘先釐清目標、瓶頸與下一步。'],
    ['需要一開始購買很多工具嗎？', '不需要。先用最少工具驗證一項核心 Workflow。'],
    ['USD 500 包括甚麼？', '包括一項核心 Workflow、Agent 邏輯設計、基本連接，以及交付及使用說明。'],
  ],
  en: [
    ['Do you only do AI?', 'No. We start with the business goal and workflow, then decide where improvement is worthwhile.'],
    ['How are you different from a business coach?', 'A business coach provides direction and an AI company builds tools. We diagnose, co-build and enable the team.'],
    ['Can I talk to you if I do not know the problem yet?', 'Yes. We use 30 minutes to clarify the goal, bottleneck and next step.'],
    ['Do I need to buy many tools first?', 'No. We start with the smallest useful set of tools to test one core workflow.'],
    ['What does USD 500 include?', 'One core workflow, Agent logic design, basic connections, and a handover and usage guide.'],
  ],
}

function currentText() {
  return text[currentLang]
}

function link(path, label, className = '') {
  return `<a class="${className}" href="${appUrl(path)}">${label}</a>`
}

function eyebrow(label, index = '') {
  return `<div class="eyebrow">${index ? `<span>${index}</span>` : icons.dot}<span>${label}</span></div>`
}

function heroCta(label = currentText().home.heroPrimary) {
  return `<div class="button-row hero-actions hero-selector-cta">${link('/consultation', `${label} ${icons.arrow}`, 'button button-primary button-large button-hero-highlight')}</div>`
}

function shell(content) {
  const labels = nav[currentLang]
  const copy = currentText()
  const languageLabel = currentLang === 'zh' ? '切換至 English' : '切換至中文'
  return `
    <div class="site-shell">
      <header class="site-header" data-header>
        <a class="wordmark" href="${appUrl('/')}" aria-label="Terry AI Lab home"><span class="wordmark-mark">T</span><span>Terry AI Lab</span></a>
        <nav class="desktop-nav" aria-label="Primary navigation">${labels.map(([path, label]) => link(path, label)).join('')}</nav>
        <div class="header-actions">
          <button class="language-switch" type="button" data-lang-toggle aria-label="${languageLabel}"><span class="${currentLang === 'zh' ? 'is-active' : ''}">中文</span><i>/</i><span class="${currentLang === 'en' ? 'is-active' : ''}">EN</span></button>
          ${link('/consultation', `${copy.home.primary} ${icons.arrow}`, 'button button-small button-primary')}
          <button class="menu-toggle" data-menu-toggle aria-label="${currentLang === 'zh' ? '開啟選單' : 'Open menu'}" aria-expanded="false"><span></span><span></span></button>
        </div>
      </header>
      <div class="mobile-menu" data-mobile-menu aria-hidden="true"><div class="mobile-menu-inner">${labels.map(([path, label]) => link(path, label, 'mobile-link')).join('')}${link('/consultation', `${copy.home.primary} ${icons.arrow}`, 'button button-primary mobile-cta')}</div></div>
      <main>${content}</main>
      <footer class="site-footer">
        <div class="footer-main"><div><a class="wordmark footer-wordmark" href="${appUrl('/')}"><span class="wordmark-mark">T</span><span>Terry AI Lab</span></a><p class="footer-tagline">LEARN · APPLY · GROW</p><p class="footer-copy">${currentLang === 'zh' ? '由企業問題出發 建立團隊真正使用的 workflow' : 'Start with the business problem Build a workflow the team can use'}</p></div><div class="footer-links"><div><span class="footer-label">EXPLORE</span>${labels.slice(0, 4).map(([path, label]) => link(path, label)).join('')}</div><div><span class="footer-label">START HERE</span>${link('/consultation', copy.home.primary)}${link('/ai-agents', currentLang === 'zh' ? '解決方案' : 'Solutions')}</div></div></div>
        <div class="footer-bottom"><span>© 2026 Terry AI Lab</span><span>${currentLang === 'zh' ? '私人預覽 · Privacy & Terms' : 'Private preview · Privacy & Terms'}</span></div>
      </footer>
    </div>`
}

function workflowVisual(problem) {
  const copy = currentText().home
  const sampleLink = problem.id === 'marketing'
    ? `<a class="problem-sample-link" href="#marketing-sample">${currentLang === 'zh' ? '查看 Marketing Sample' : 'View the marketing sample'} ${icons.arrow}</a>`
    : ''
  return `<div class="problem-result" data-problem-result aria-live="polite"><div class="problem-result-top"><span>${copy.current}</span><span>${problem.number} · ${problem.title}</span></div><div class="problem-state"><small>${copy.current}</small><strong>${problem.current}</strong></div><div class="problem-divider" aria-hidden="true">↓</div><div class="problem-state is-improved"><small>${copy.improved}</small><strong>${problem.improved}</strong></div><div class="problem-flow"><span>${problem.steps.join('</span><i aria-hidden="true">→</i><span>')}</span></div>${sampleLink}</div>`
}

function hero() {
  const copy = currentText().home
  const first = problems[currentLang][0]
  return `<section class="hero section-dark hero-v3 hero-selector-only" id="top"><div class="hero-grid container"><div class="hero-center-copy">${eyebrow(copy.heroKicker, '01')}<h1><span>${copy.heroTitle[0]}</span><span><em>${copy.heroTitle[1]}</em></span></h1><p class="hero-lead">${copy.heroLead}</p></div><div class="hero-visual-wrap"><div class="hero-selector-stack"><div class="problem-selector" id="solutions"><div class="problem-selector-heading"><div>${eyebrow(copy.selectorKicker)}</div><h2>${copy.selectorTitle}</h2><p>${copy.selectorLead}</p></div><div class="problem-selector-grid"><div class="problem-tabs" role="tablist" aria-label="${copy.selectorTitle}">${problems[currentLang].map((problem, index) => `<button class="problem-tab ${index === 0 ? 'is-selected' : ''}" type="button" role="tab" aria-selected="${index === 0}" data-problem="${problem.id}"><span>${problem.number}</span><strong>${problem.title}</strong><span aria-hidden="true">↗</span></button>`).join('')}</div>${workflowVisual(first)}</div></div>${heroCta()}</div></div></div><div class="hero-bottom container"><span>${copy.outcomes.join(' · ')}</span><span class="scroll-line"></span><span>HONG KONG · MALAYSIA</span></div></section>`
}

function productSection() {
  const copy = currentText().home
  return `<section class="product-section section-light" id="product"><div class="container"><div class="product-heading">${eyebrow(copy.productKicker, '02')}<h2>${copy.productTitle[0]}<br /><span>${copy.productTitle[1]}</span></h2><p>${copy.productLead}</p></div><div class="product-panels">${copy.productParts.map(([number, title, headline, detail], index) => `<article class="product-panel ${index === 1 ? 'is-agent' : 'is-consultant'}"><div class="product-panel-top"><span>${number}</span><small>${index === 0 ? 'CONSULTANT' : 'AGENT'}</small></div><h3>${title}</h3><strong>${headline}</strong><p>${detail}</p><div class="product-panel-footer"><span>${index === 0 ? 'Human judgement' : 'Human-approved execution'}</span><i aria-hidden="true">→</i></div></article>`).join('')}</div><p class="product-use-case">${copy.productUseCase}</p><p class="product-tailor">${copy.productTailor}</p></div></section>`
}

function metricCard(label, value, tone = '') {
  return `<div class="metric-card ${tone}"><span>${label}</span><strong>${value}</strong></div>`
}

function marketingCase() {
  const copy = currentText().home
  const beforeSrc = appUrl('/case-studies/marketing-before-cost-92.png')
  const afterSrc = appUrl('/case-studies/marketing-after-cost-34.png')
  const beforeAlt = currentLang === 'zh' ? '之前廣告記錄：每位潛在客戶成本 92.52 美元' : 'Before ad record: $92.52 cost per potential lead'
  const afterAlt = currentLang === 'zh' ? '之後廣告記錄：每位潛在客戶成本 34.58 美元' : 'After ad record: $34.58 cost per potential lead'
  return `<article class="case-study case-study-marketing"><div class="case-study-copy"><div class="case-study-kicker">01 / MARKETING ACQUISITION</div><h3>${copy.marketingCaseTitle[0]}<br /><span>${copy.marketingCaseTitle[1]}</span></h3><p>${copy.marketingCaseLead}</p><div class="case-metrics">${metricCard(copy.marketingCaseBefore, '$92.52', 'is-before')}${metricCard(copy.marketingCaseAfter, '$34.58', 'is-after')}<div class="metric-drop"><strong>−62.6%</strong><span>${copy.marketingCaseSupport}</span></div></div><small class="case-disclaimer">${copy.marketingCaseDisclaimer}</small></div><div class="case-evidence case-evidence-ads"><div class="marketing-evidence-grid"><figure class="is-before"><a class="case-image-link marketing-proof-window" href="${beforeSrc}" target="_blank" rel="noopener" aria-label="${beforeAlt}"><img src="${beforeSrc}" alt="${beforeAlt}" loading="lazy" /></a><figcaption>${copy.marketingCaseBefore} · $92.52 <span aria-hidden="true">↗</span></figcaption></figure><figure class="is-after"><a class="case-image-link marketing-proof-window" href="${afterSrc}" target="_blank" rel="noopener" aria-label="${afterAlt}"><img src="${afterSrc}" alt="${afterAlt}" loading="lazy" /></a><figcaption>${copy.marketingCaseAfter} · $34.58 <span aria-hidden="true">↗</span></figcaption></figure></div><small class="evidence-caption">${currentLang === 'zh' ? 'Meta 廣告管理畫面 / 實際記錄' : 'Meta Ads Manager / actual records'}</small></div></article>`
}

function operationsCase() {
  const copy = currentText().home
  const images = [
    [appUrl('/case-studies/lead-sheets-before-redacted-v2.jpg'), currentLang === 'zh' ? '之前：分散試算表' : 'Before: scattered sheets', 1721, 914],
    [appUrl('/case-studies/unified-lead-dashboard-redacted.jpg'), currentLang === 'zh' ? '之後：統一管理中心' : 'After: one management centre', 1521, 1034],
    [appUrl('/case-studies/whatsapp-follow-up-reminder-redacted.jpg'), currentLang === 'zh' ? '提醒：WhatsApp 跟進' : 'Reminder: WhatsApp follow-up', 1198, 1313],
  ]
  return `<article class="case-study case-study-operations"><div class="case-study-copy"><div class="case-study-kicker">02 / OPERATIONS</div><h3>${copy.operationsCaseTitle[0]}<br /><span>${copy.operationsCaseTitle[1]}</span></h3><div class="before-after-copy"><div><small>${currentLang === 'zh' ? '之前' : 'Before'}</small><p>${copy.operationsBefore}</p></div><div><small>${currentLang === 'zh' ? '之後' : 'After'}</small><p>${copy.operationsAfter}</p></div></div><strong class="case-outcome">${copy.operationsOutcome}</strong></div><div class="case-evidence operations-evidence">${images.map(([src, alt, width, height], index) => `<figure class="operation-evidence-item operation-evidence-item-${index + 1}"><a class="case-image-link" href="${src}" target="_blank" rel="noopener" aria-label="${currentLang === 'zh' ? `放大查看${alt}` : `Open full-size ${alt}`}" title="${currentLang === 'zh' ? '按圖放大' : 'Open full size'}"><img src="${src}" alt="${alt}；${currentLang === 'zh' ? '私人資料已遮蓋' : 'Private data redacted'}" width="${width}" height="${height}" loading="eager" decoding="async" /></a><figcaption>${alt} <span aria-hidden="true">↗</span><br /><span>${currentLang === 'zh' ? '示範畫面 / 私人資料已遮蓋' : 'Demonstration / private data redacted'}</span></figcaption></figure>`).join('')}</div></article>`
}

function marketingSampleCase() {
  const copy = currentText().home
  return `<article class="case-study case-study-sample" id="marketing-sample"><div class="case-study-copy"><div class="case-study-kicker">03 / ${copy.marketingSampleKicker}</div><h3>${copy.marketingSampleTitle[0]}<br /><span>${copy.marketingSampleTitle[1]}</span></h3><p>${copy.marketingSampleLead}</p><span class="sample-label">${copy.marketingSampleLabel}</span><small class="case-disclaimer">${copy.sampleDisclosure}</small></div><div class="video-sample-card"><video controls playsinline preload="metadata" poster="${appUrl('/instagram-covers/ai-video-production.jpg')}"><source src="${appUrl('/case-studies/insurance-marketing-agent-sample.mp4')}" type="video/mp4" />${currentLang === 'zh' ? '你的瀏覽器不支援影片播放。' : 'Your browser does not support video playback.'}</video><div class="video-sample-meta"><span>${copy.marketingSampleLabel}</span><span>9:16 · 30s</span></div></div></article>`
}

function caseStudiesSection() {
  const copy = currentText().home
  return `<section class="cases-section section-dark" id="cases"><div class="container"><div class="cases-heading">${eyebrow(copy.casesKicker, '03')}<h2>${copy.casesTitle[0]}<br /><span>${copy.casesTitle[1]}</span></h2><p>${copy.casesLead}</p></div><div class="case-study-list">${marketingCase()}${operationsCase()}${marketingSampleCase()}</div></div></section>`
}

function comparisonSection() {
  const copy = currentText().home
  const types = copy.comparisonTypes
  const mobileCards = [2, 0, 1].map((typeIndex) => `<article class="comparison-mobile-card ${typeIndex === 2 ? 'is-featured' : ''}"><div class="comparison-mobile-title"><strong>${types[typeIndex]}</strong>${typeIndex === 2 ? `<small>${currentLang === 'zh' ? '最完整方案' : 'Most complete'}</small>` : ''}</div><dl>${copy.comparisonRows.map((row, rowIndex) => `<div><dt>${row}</dt><dd>${copy.comparisonCells[rowIndex][typeIndex]}</dd></div>`).join('')}</dl></article>`).join('')
  return `<section class="comparison-section section-dark" id="difference"><div class="container"><div class="comparison-heading">${eyebrow(copy.comparisonKicker, '04')}<h2>${copy.comparisonTitle}</h2><p>${copy.comparisonLead}</p></div><div class="comparison-table" role="table" aria-label="${copy.comparisonTitle}"><div class="comparison-row comparison-header" role="row"><span></span>${types.map((type, index) => `<strong class="comparison-column comparison-column-${index} ${index === 2 ? 'is-featured' : ''}">${type}${index === 2 ? `<small>${currentLang === 'zh' ? '最完整方案' : 'Most complete'}</small>` : ''}</strong>`).join('')}</div>${copy.comparisonRows.map((row, rowIndex) => `<div class="comparison-row" role="row"><span class="comparison-dimension">${row}</span>${copy.comparisonCells[rowIndex].map((cell, index) => `<span class="comparison-cell comparison-column comparison-column-${index} ${index === 2 ? 'is-featured' : ''}">${cell}</span>`).join('')}</div>`).join('')}</div><div class="comparison-mobile-cards">${mobileCards}</div><div class="comparison-summary"><span>${currentLang === 'zh' ? '找出問題' : 'Diagnose'}</span><i>→</i><span>${currentLang === 'zh' ? '共同建置' : 'Build together'}</span><i>→</i><span>${currentLang === 'zh' ? '團隊掌握' : 'Enable the team'}</span></div></div></section>`
}

function methodSection() {
  const copy = currentText().home
  return `<section class="method-section section-light" id="process"><div class="container"><div class="method-heading">${eyebrow(copy.methodKicker, '05')}<h2>${copy.methodTitle[0]}<br /><span>${copy.methodTitle[1]}</span></h2><p>${copy.methodLead}</p></div><div class="method-steps">${copy.methodSteps.map(([title, english, detail], index) => `<article class="method-step"><span class="method-number">0${index + 1}</span><small>${english}</small><h3>${title}</h3><p>${detail}</p></article>`).join('')}</div><div class="method-handover"><span>${currentLang === 'zh' ? '共同完成' : 'Built together'}</span><strong>${currentLang === 'zh' ? '方向 + 工具 + 成果' : 'Direction + Tools + Outcomes'}</strong><i aria-hidden="true">→</i><span>${currentLang === 'zh' ? '團隊可以使用' : 'The team can use it'}</span></div></div></section>`
}

function lessonCard(lesson) {
  return `<article class="instagram-lesson-card"><div class="instagram-lesson-media"><img src="${appUrl(lesson.image)}" alt="${lesson.title}" loading="lazy" /></div><div class="instagram-lesson-meta"><span>${lesson.topic}</span><span>Instagram</span></div><h3>${lesson.title}</h3><p>${lesson.description}</p></article>`
}

function instagramAuthoritySection() {
  const copy = currentText().home
  return `<section class="instagram-authority section-light" id="insights"><div class="container"><div class="instagram-authority-heading">${eyebrow(copy.instagramKicker, '06')}<h2>${copy.instagramTitle}</h2><p>${copy.instagramLead}</p></div><div class="instagram-cover-wall">${lessons[currentLang].map(lessonCard).join('')}</div></div></section>`
}

function offerSection() {
  const copy = currentText().home
  return `<section class="offer-section section-dark" id="offer"><div class="container offer-panel"><div>${eyebrow(copy.offerKicker, '07')}<h2>${copy.offerTitle[0]}<br /><span>${copy.offerTitle[1]}</span></h2><p>${copy.offerLead}</p><ul class="offer-included">${copy.offerIncluded.map(item => `<li>${item}</li>`).join('')}</ul><p class="offer-excluded">${copy.offerExcluded}</p></div><div class="offer-side"><div class="offer-price"><small>${currentLang === 'zh' ? '建置費用' : 'BUILD FEE'}</small><strong>${commercial.price}</strong><span>${currentLang === 'zh' ? commercial.unitZh : commercial.unitEn}</span></div>${link('/ai-agent-build', `${copy.offerButton} ${icons.arrow}`, 'button button-primary')}</div></div></section>`
}

function consultationPreview() {
  const copy = currentText().home
  return `<section class="consult-preview section-accent"><div class="container consultation-grid"><div>${eyebrow(copy.consultKicker, '05')}<h2>${copy.consultTitle}</h2><p>${copy.consultLead}</p><span class="consult-note">${copy.consultNote}</span></div><div class="mini-form-card"><div class="form-card-top"><span>OPPORTUNITY CALL</span><span>30 MIN</span></div><p>${currentLang === 'zh' ? '帶一項工作來 我們先判斷下一步' : 'Bring one workflow We will find the next step'}</p>${link('/consultation', `${copy.primary} ${icons.arrow}`, 'button button-dark')}</div></div></section>`
}

function faqSection() {
  const copy = currentText().home
  return `<section class="faq-section section-light"><div class="container faq-grid">${sectionHeading(copy.faqKicker, copy.faqTitle)}<div class="faq-list">${faqs[currentLang].map(([question, answer], index) => `<details ${index === 0 ? 'open' : ''}><summary><span>${question}</span><span class="faq-plus">+</span></summary><p>${answer}</p></details>`).join('')}</div></div></section>`
}

function sectionHeading(kicker, title, copy = '') {
  return `<div class="section-heading">${eyebrow(kicker)}<h2>${title}</h2>${copy ? `<p>${copy}</p>` : ''}</div>`
}

function homePage() {
  const copy = currentText().home
  return shell(`${hero()}${productSection()}${caseStudiesSection()}${comparisonSection()}${methodSection()}${instagramAuthoritySection()}${offerSection()}${consultationPreview()}${faqSection()}<section class="final-cta section-dark"><div class="container">${eyebrow(copy.finalKicker, '09')}<h2>${copy.finalTitle}</h2><p>${copy.finalLead}</p>${link('/consultation', `${copy.primary} ${icons.arrow}`, 'button button-primary button-large')}</div></section>`)
}

function pageHero(kicker, title, copy, number = 'PAGE') {
  return `<section class="page-hero section-dark"><div class="container page-hero-inner">${eyebrow(kicker, number)}<h1>${title}</h1><p>${copy}</p></div></section>`
}

function agentPage() {
  const zh = currentLang === 'zh'
  const title = zh ? '由企業問題<br /><span>行到可用 workflow</span>' : 'From business problem<br /><span>to a usable workflow</span>'
  const lead = zh ? '每個 solution 都對應一項清晰的 business outcome' : 'Every solution starts with a clear business outcome'
  return shell(`${pageHero(zh ? 'OUTCOME-FIRST SOLUTIONS' : 'OUTCOME-FIRST SOLUTIONS', title, lead, '01')}<section class="agent-page-list section-light"><div class="container">${problems[currentLang].map((problem, index) => `<article class="agent-page-row ${index === 0 ? 'is-featured' : ''}"><div class="agent-page-number">${problem.number}</div><div><span class="stage-topline">${problem.title}</span><h2>${problem.improved}</h2><p>${problem.current} → ${problem.improved}</p><div class="inline-steps">${problem.steps.map(step => `<span>${step}</span>`).join('<i>→</i>')}</div></div><span class="row-arrow"></span></article>`).join('')}</div></section>${consultationPreview()}`)
}

function buildPage() {
  const zh = currentLang === 'zh'
  const title = zh ? '一個核心 workflow<br /><span>一個可驗證版本</span>' : 'One core workflow<br /><span>One testable version</span>'
  const lead = zh ? '由診斷、建置到團隊掌握 集中處理一項最值得改善的工作' : 'Diagnose, build and enable the team around one high-value workflow'
  return shell(`${pageHero('AI AGENT WORKFLOW', title, lead, '02')}<section class="offer-detail section-light"><div class="container offer-detail-grid"><div>${eyebrow(zh ? 'THE RULE' : 'THE RULE', '01')}<h2>ONE CORE<br /><span>BUSINESS WORKFLOW</span></h2><p>${zh ? '先定義優先事項，再建立最小可用版本。Scope、資料權限與驗收方式會在開始前說明。' : 'Define the priority first, then build the smallest useful version. Scope, data access and acceptance are set before we start.'}</p></div><div class="offer-facts"><div><span>${zh ? '建置費用' : 'BUILD FEE'}</span><strong>${commercial.price}</strong></div><div><span>${zh ? '內容' : 'INCLUDES'}</span><strong>${zh ? commercial.unitZh : commercial.unitEn}</strong></div><div><span>${zh ? '交付' : 'HANDOVER'}</span><strong>${zh ? '使用說明' : 'Usage guide'}</strong></div></div></div></section><section class="service-phases section-dark"><div class="container"><div class="service-title">${eyebrow(zh ? 'DELIVERY PHASES' : 'DELIVERY PHASES', '03')}<h2>${zh ? '四個階段<br /><span>由問題行到團隊掌握</span>' : 'Four phases<br /><span>from problem to team ownership</span>'}</h2></div><div class="service-phase-list">${currentText().home.methodSteps.map(([name, english, detail], index) => `<div class="service-phase"><span>0${index + 1}</span><div><h3>${name}</h3><small>${english}</small></div><p>${detail}</p></div>`).join('')}</div></div></section>${consultationPreview()}`)
}

function casesPage() {
  const zh = currentLang === 'zh'
  return shell(`${pageHero('CASE LIBRARY', zh ? '先量度<br /><span>再談結果</span>' : 'Measure first<br /><span>then discuss outcomes</span>', zh ? '案例以 baseline、workflow、人手覆核與可驗證結果為基礎' : 'Cases are grounded in a baseline, workflow, human review and verifiable outcomes', '03')}<section class="case-library section-light"><div class="container case-library-inner">${eyebrow(zh ? 'VERIFIED EVIDENCE ONLY' : 'VERIFIED EVIDENCE ONLY', '01')}<h2>${zh ? '案例庫正在建立' : 'Case library in progress'}</h2><p>${zh ? '公開案例會保留必要證據，並遮蓋所有私人資料。' : 'Public cases retain necessary evidence and redact private information.'}</p>${link('/consultation', `${currentText().home.primary} ${icons.arrow}`, 'button button-primary')}</div></section>`)
}

function aboutPage() {
  const zh = currentLang === 'zh'
  return shell(`${pageHero('ABOUT TERRY AI LAB', zh ? '企業成長與<br /><span>AI 落地夥伴</span>' : 'A partner for<br /><span>growth and AI implementation</span>', zh ? 'Terry AI Lab 連接企業診斷與 AI 落地' : 'Terry AI Lab connects business diagnosis with AI implementation', '04')}<section class="about-story section-light"><div class="container about-story-grid"><div>${eyebrow(zh ? 'WHY THIS MODEL EXISTS' : 'WHY THIS MODEL EXISTS', '01')}<h2>${zh ? '先作出更好的 business decision' : 'Make better business decisions first'}</h2></div><div><p>${zh ? 'Terry 面向香港中小企業、創業者、服務專業人士與 small teams，先從企業問題與成長方向開始。' : 'Terry works with founders, SMEs, service professionals and small teams, starting with the business problem and growth direction.'}</p><p>${zh ? '再將值得改善的 workflow 變成團隊可以採用、量度與持續優化的系統。' : 'The work then becomes a system the team can adopt, measure and improve.'}</p></div></div></section><section class="about-disciplines section-dark"><div class="container about-role-grid"><article><span class="discipline-tag">ROLE 01</span><h2>Business<br /><em>Growth Coach</em></h2><p>${zh ? '釐清目標 找出瓶頸 定出優先次序' : 'Clarify goals Find bottlenecks Set priorities'}</p></article><article><span class="discipline-tag">ROLE 02</span><h2>AI Implementation<br /><em>Partner</em></h2><p>${zh ? '共同建置 workflow 讓團隊掌握方法' : 'Co-build workflows and enable the team'}</p></article></div></section>${consultationPreview()}`)
}

function insightsPage() {
  const zh = currentLang === 'zh'
  return shell(`${pageHero('INSIGHTS / PRACTICAL AI', zh ? '由教學<br /><span>行到 business decision</span>' : 'From lessons<br /><span>to business decisions</span>', zh ? '短片與 workflow note 全部由一個問題開始' : 'Short lessons and workflow notes that start with a real problem', '05')}<section class="video-lessons-section section-light"><div class="container"><div class="video-lessons-heading">${eyebrow('TERRY ON INSTAGRAM', '01')}<h2>${zh ? '先看方法<br /><span>再作決定</span>' : 'See the method<br /><span>then decide</span>'}</h2><p>${zh ? '每張卡會連接 Terry 的 Instagram 教學' : 'Each card links to a Terry AI Lab lesson on Instagram.'}</p></div><div class="video-lessons-grid">${lessons[currentLang].map(lessonCard).join('')}</div></div></section>${consultationPreview()}`)
}

function consultationPage() {
  const zh = currentLang === 'zh'
  const copy = currentText().home
  const labels = zh ? ['姓名', '公司', 'Email', 'Website 可選', '團隊規模', 'Workflow 類型', '最想改善的工作', '改善後希望看到的變化'] : ['Name', 'Company', 'Email', 'Website Optional', 'Team size', 'Workflow area', 'Workflow to improve', 'Desired outcome']
  return shell(`${pageHero('30 MINUTES / OPPORTUNITY CALL', zh ? '從一個問題開始<br /><span>找出下一步</span>' : 'Start with one problem<br /><span>Find the next step</span>', copy.consultNote, '06')}<section class="consultation-page section-light"><div class="container consultation-page-grid"><div class="consultation-context"><div class="context-sticky">${eyebrow(zh ? 'WHAT HAPPENS NEXT' : 'WHAT HAPPENS NEXT', '01')}<h2>30<br /><span>${zh ? '分鐘' : 'minutes'}</span></h2><div class="consult-steps"><div><span>01</span><p>${zh ? '說明想改善的 business outcome' : 'Explain the business outcome'}</p></div><div><span>02</span><p>${zh ? '拆解瓶頸與 priority' : 'Break down the bottleneck and priority'}</p></div><div><span>03</span><p>${zh ? '判斷是否值得進行 pilot' : 'Decide whether a pilot is worthwhile'}</p></div></div></div></div><form class="consult-form" data-consult-form novalidate><div class="form-heading"><span>OPPORTUNITY CALL / INTAKE</span><small>PREVIEW MODE · DATA NOT SENT</small></div><div class="form-grid"><label>${labels[0]}<input name="name" required /></label><label>${labels[1]}<input name="company" required /></label><label>${labels[2]}<input type="email" name="email" required /></label><label>${labels[3]}<input type="url" name="website" /></label><label class="full">${labels[6]}<textarea name="workflow" required rows="4"></textarea></label><label class="full">${labels[7]}<textarea name="outcome" required rows="4"></textarea></label></div><label class="consent"><input type="checkbox" name="consent" required /><span>${zh ? '我明白此表格為私人預覽 資料不會送出' : 'I understand this is a private preview and the data will not be sent'}</span></label><div class="form-error" data-form-error role="alert"></div><button class="button button-dark form-submit" type="submit">${copy.primary} ${icons.arrow}</button><div class="form-success" data-form-success role="status"><strong>${zh ? '預覽狀態已記錄' : 'Preview state recorded'}</strong></div></form></div></section>`)
}

function notFound() {
  return shell(`${pageHero('404 / NOT FOUND', currentLang === 'zh' ? '找不到此頁' : 'Page not found', currentLang === 'zh' ? '由一個 business problem 開始' : 'Start with one business problem', 'ERR')}<section class="not-found section-light"><div class="container">${link('/', `${currentLang === 'zh' ? '返回首頁' : 'Back home'} ${icons.arrow}`, 'button button-primary')}</div></section>`)
}

function render({ preserveScroll = null } = {}) {
  const path = currentRoute()
  let output
  if (path === '/') output = homePage()
  else if (path === '/ai-agents') output = agentPage()
  else if (path === '/ai-agent-build') output = buildPage()
  else if (path === '/cases') output = casesPage()
  else if (path === '/about') output = aboutPage()
  else if (path === '/insights') output = insightsPage()
  else if (path === '/consultation') output = consultationPage()
  else output = notFound()
  document.querySelector('#app').innerHTML = output
  document.documentElement.lang = currentLang === 'zh' ? 'zh-Hant' : 'en'
  document.title = currentLang === 'zh' ? text.zh.homeTitle : 'Terry AI Lab — Business Growth and AI Implementation'
  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', currentLang === 'zh' ? text.zh.homeDescription : 'Terry AI Lab helps teams diagnose the real problem, build useful AI workflows and enable the people who use them.')
  bindInteractions()
  const targetHash = window.location.hash
  window.setTimeout(() => {
    if (targetHash) document.getElementById(targetHash.slice(1))?.scrollIntoView({ behavior: 'auto' })
    else if (preserveScroll !== null) window.scrollTo({ top: preserveScroll, behavior: 'auto' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, 30)
}

function bindInteractions() {
  const menuButton = document.querySelector('[data-menu-toggle]')
  const mobileMenu = document.querySelector('[data-mobile-menu]')
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true'
      menuButton.setAttribute('aria-expanded', String(!open))
      mobileMenu.setAttribute('aria-hidden', String(open))
      document.body.classList.toggle('menu-open', !open)
    })
    mobileMenu.querySelectorAll('a').forEach((item) => item.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false')
      mobileMenu.setAttribute('aria-hidden', 'true')
      document.body.classList.remove('menu-open')
    }))
  }

  const languageButton = document.querySelector('[data-lang-toggle]')
  if (languageButton) languageButton.addEventListener('click', () => {
    const previousScroll = window.scrollY
    currentLang = currentLang === 'zh' ? 'en' : 'zh'
    try { localStorage.setItem('terry-ai-lab-lang', currentLang) } catch {}
    render({ preserveScroll: previousScroll })
  })

  document.querySelectorAll('[data-problem]').forEach((tab) => tab.addEventListener('click', () => {
    document.querySelectorAll('[data-problem]').forEach((item) => {
      item.classList.toggle('is-selected', item === tab)
      item.setAttribute('aria-selected', String(item === tab))
    })
    const selected = problems[currentLang].find((problem) => problem.id === tab.dataset.problem)
    const stage = document.querySelector('[data-problem-result]')
    if (selected && stage) stage.outerHTML = workflowVisual(selected)
  }))

  const form = document.querySelector('[data-consult-form]')
  if (form) form.addEventListener('submit', (event) => {
    event.preventDefault()
    const error = form.querySelector('[data-form-error]')
    const success = form.querySelector('[data-form-success]')
    const required = [...form.querySelectorAll('[required]')]
    const invalid = required.filter((field) => field.type === 'checkbox' ? !field.checked : !field.value.trim())
    error.textContent = ''
    success.classList.remove('is-visible')
    if (invalid.length) {
      invalid[0].focus()
      error.textContent = currentLang === 'zh' ? '請先完成必填欄位' : 'Please complete the required fields'
      return
    }
    success.classList.add('is-visible')
    form.querySelector('.form-submit').disabled = true
  })
}

document.addEventListener('click', (event) => {
  const anchor = event.target.closest('a')
  if (!anchor || !anchor.href.startsWith(window.location.origin) || anchor.target === '_blank') return
  const url = new URL(anchor.href)
  event.preventDefault()
  window.history.pushState({}, '', url.pathname + url.hash)
  render()
})

window.addEventListener('popstate', () => render())
render()
