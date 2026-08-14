const commercial = {
  price: 'USD 3,500 起',
  duration: '3–4 星期',
  pilot: '14 日試行',
}

const instagramProfile = 'https://www.instagram.com/terry.ai.lab/'

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
      heroKicker: 'BUSINESS GROWTH · AI ENABLEMENT',
      heroTitle: ['先找出真正問題', '再用 AI 落地解決'],
      heroLead: '從企業診斷到 AI 建置 由 Terry 與團隊共同完成',
      heroPrimary: '30 分鐘為你找出答案',
      primary: '預約免費諮詢',
      secondary: '查看解決方案',
      selectorKicker: 'START WITH YOUR PROBLEM',
      selectorTitle: '你遇到哪個問題?',
      selectorLead: '選擇一項現況 查看可以改善的結果',
      current: '現況',
      improved: '改善後',
      outcomes: ['看清問題', '共同建置', '團隊掌握'],
      comparisonKicker: 'THREE WAYS TO WORK',
      comparisonTitle: '三種合作模式',
      comparisonLead: '方向 工具 或完整落地',
      comparisonRows: ['找出根因', '共同建置', '團隊掌握', '最終結果'],
      comparisonCells: [
        ['主要重點', '視項目而定', '包含'],
        ['通常不包括', '主要重點', '包含'],
        ['視服務而定', '視服務而定', '包含'],
        ['方向', '工具', '方向 + 工具 + 成果'],
      ],
      methodKicker: 'ONE ACCOUNTABLE METHOD',
      methodTitle: ['從診斷到落地', '由同一位夥伴負責'],
      methodLead: '將方向、執行與團隊能力連成一條線',
      methodSteps: [
        ['釐清', 'CLARIFY', '目標與根因'],
        ['建置', 'BUILD', '可用方案'],
        ['試行', 'PILOT', '真實流程'],
        ['賦能', 'ENABLE', '團隊掌握'],
      ],
      proofKicker: 'TERRY PRACTICAL TEACHING',
      proofTitle: '先看方法 再談合作',
      proofLink: '查看更多教學',
      offerKicker: 'AI WORKFLOW BUILD SPRINT',
      offerTitle: ['一個核心 workflow', '一個可驗證版本'],
      offerLead: '集中處理一項最值得優先改善的工作',
      offerButton: '了解建置流程',
      consultKicker: 'START WITH ONE PROBLEM',
      consultTitle: '從一個問題開始',
      consultLead: '30 分鐘 找出下一步',
      consultNote: '免費初步評估 不包括完整企業審計',
      faqKicker: 'QUESTIONS BEFORE STARTING',
      faqTitle: '開始之前 你可能想知道',
      finalKicker: 'ONE GOOD FIRST STEP',
      finalTitle: '找出下一步',
      finalLead: '選擇一項最想改善的工作',
    },
  },
  en: {
    home: {
      heroKicker: 'BUSINESS GROWTH · AI ENABLEMENT',
      heroTitle: ['Find the real problem', 'Then solve it with AI'],
      heroLead: 'From business diagnosis to AI implementation Built with your team',
      heroPrimary: 'Find Your Answer in 30 Minutes',
      primary: 'Book a Free Consultation',
      secondary: 'Explore Solutions',
      selectorKicker: 'START WITH YOUR PROBLEM',
      selectorTitle: 'What is holding you back?',
      selectorLead: 'Choose a current issue to see the outcome',
      current: 'Current state',
      improved: 'Improved state',
      outcomes: ['Clarity', 'Co-build', 'Capability'],
      comparisonKicker: 'THREE WAYS TO WORK',
      comparisonTitle: 'Three ways to work',
      comparisonLead: 'Advice Tools or End-to-End Execution',
      comparisonRows: ['Root-cause diagnosis', 'Co-building', 'Team capability', 'Typical result'],
      comparisonCells: [
        ['Main focus', 'Depends on scope', 'Included'],
        ['Usually not included', 'Main focus', 'Included'],
        ['Depends on service', 'Depends on service', 'Included'],
        ['Direction', 'Tools', 'Direction + Tools + Outcomes'],
      ],
      methodKicker: 'ONE ACCOUNTABLE METHOD',
      methodTitle: ['One partner from diagnosis', 'to implementation'],
      methodLead: 'Connect direction execution and team capability',
      methodSteps: [
        ['Clarify', 'CLARIFY', 'Goal and root cause'],
        ['Build', 'BUILD', 'Usable solution'],
        ['Pilot', 'PILOT', 'Real workflow'],
        ['Enable', 'ENABLE', 'Team ownership'],
      ],
      proofKicker: 'TERRY PRACTICAL TEACHING',
      proofTitle: 'See the method before you commit',
      proofLink: 'See more lessons',
      offerKicker: 'AI WORKFLOW BUILD SPRINT',
      offerTitle: ['One core workflow', 'One testable version'],
      offerLead: 'Focus on one high-value business workflow first',
      offerButton: 'Explore the Build Sprint',
      consultKicker: 'START WITH ONE PROBLEM',
      consultTitle: 'Start with one problem',
      consultLead: '30 minutes to find the next step',
      consultNote: 'Initial fit assessment Full business audit not included',
      faqKicker: 'QUESTIONS BEFORE STARTING',
      faqTitle: 'Questions before starting',
      finalKicker: 'ONE GOOD FIRST STEP',
      finalTitle: 'Find your next step',
      finalLead: 'Bring one workflow you want to improve',
    },
  },
}

const problems = {
  zh: [
    { id: 'lead', number: '01', title: '客戶無人跟進', current: '新客戶容易漏跟', improved: '每位新客都有負責人與下一步', steps: ['收到查詢', '分配負責人', '設定跟進', '檢視狀態'] },
    { id: 'records', number: '02', title: '記錄太慢', current: '資料分散且依賴人手', improved: '記錄更快更完整', steps: ['收集資料', '整理內容', '儲存紀錄', '產生摘要'] },
    { id: 'replies', number: '03', title: '查詢重複', current: '團隊反覆回答相同問題', improved: '常見問題自動處理', steps: ['理解問題', '搜尋知識', '草擬回覆', '真人覆核'] },
    { id: 'handoff', number: '04', title: '工作靠記憶', current: '交接後容易遺漏下一步', improved: '每一步都有提醒', steps: ['建立請求', '分派工作', '更新狀態', '追蹤缺口'] },
    { id: 'visibility', number: '05', title: '營運看不清', current: '資料分散 難以及時判斷', improved: '更早掌握業務狀況', steps: ['整合資料', '檢視訊號', '找出異常', '人手覆核'] },
  ],
  en: [
    { id: 'lead', number: '01', title: 'Leads go cold', current: 'New enquiries are missed', improved: 'Every new lead has an owner and next step', steps: ['Capture enquiry', 'Assign owner', 'Set follow-up', 'Review status'] },
    { id: 'records', number: '02', title: 'Records take too long', current: 'Information is scattered and manual', improved: 'Faster and more complete records', steps: ['Collect data', 'Structure notes', 'Store record', 'Create summary'] },
    { id: 'replies', number: '03', title: 'Questions repeat', current: 'The team answers the same questions', improved: 'Common questions handled faster', steps: ['Understand intent', 'Search knowledge', 'Draft reply', 'Human review'] },
    { id: 'handoff', number: '04', title: 'Work relies on memory', current: 'Next steps disappear after handoff', improved: 'Every step has a clear reminder', steps: ['Create request', 'Assign work', 'Update status', 'Track gaps'] },
    { id: 'visibility', number: '05', title: 'The business is hard to see', current: 'Data is scattered and slow to interpret', improved: 'Earlier visibility into the business', steps: ['Combine data', 'Review signals', 'Find anomaly', 'Human review'] },
  ],
}

const lessons = {
  zh: [
    { image: '/instagram-lessons/terry-workflow-01.webp', title: '為何內容流程愈做愈慢', topic: 'CONTENT WORKFLOW', description: '將重複工作變成可重用流程' },
    { image: '/instagram-lessons/terry-workflow-02.webp', title: 'AI 不只是想得更多 而是做得更快', topic: 'PRACTICAL AI', description: '將想法變成可執行的下一步' },
    { image: '/instagram-lessons/terry-workflow-03.webp', title: '第一步不是增加工具 而是釐清問題', topic: 'BUSINESS CLARITY', description: '先定義成果 再決定如何改善' },
  ],
  en: [
    { image: '/instagram-lessons/terry-workflow-01.webp', title: 'Why your content workflow gets slower', topic: 'CONTENT WORKFLOW', description: 'Turn repeat work into a reusable process' },
    { image: '/instagram-lessons/terry-workflow-02.webp', title: 'AI is not about thinking more', topic: 'PRACTICAL AI', description: 'Turn an idea into the next useful action' },
    { image: '/instagram-lessons/terry-workflow-03.webp', title: 'The first step is not another tool', topic: 'BUSINESS CLARITY', description: 'Define the outcome before changing the work' },
  ],
}

const faqs = {
  zh: [
    ['你們只做 AI 嗎', '不是。我們先從 business goal 與 workflow 開始，再判斷哪一段值得改善。'],
    ['你們與一般企業教練有何不同', '企業教練通常提供方向，AI 公司通常建置工具；Terry AI Lab 會先找出問題，再共同建置，最後讓團隊掌握。'],
    ['我還未知道問題在哪裡 可以諮詢嗎', '可以。30 分鐘先釐清目標、瓶頸與下一步。'],
    ['需要一開始購買很多工具嗎', '不需要。先用最少的工具驗證一項核心 workflow。'],
    ['一個 project 通常需要多久', `視乎 scope。常見 AI Workflow Build Sprint 約 ${commercial.duration}，包括一項核心 workflow 與 ${commercial.pilot}。`],
  ],
  en: [
    ['Do you only do AI', 'No. We start with the business goal and workflow, then decide where improvement is worthwhile.'],
    ['How are you different from a business coach', 'A business coach usually provides direction and an AI company usually builds tools. Terry AI Lab diagnoses, co-builds and enables the team.'],
    ['Can I talk to you if I do not know the problem yet', 'Yes. We use 30 minutes to clarify the goal, bottleneck and next step.'],
    ['Do I need to buy many tools first', 'No. We start with the smallest useful set of tools to test one core workflow.'],
    ['How long does a project take', `It depends on scope. A typical AI Workflow Build Sprint takes ${commercial.duration} and includes one core workflow and a ${commercial.pilot}.`],
  ],
}

function currentText() {
  return text[currentLang]
}

function link(path, label, className = '') {
  return `<a class="${className}" href="${path}">${label}</a>`
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
        <a class="wordmark" href="/" aria-label="Terry AI Lab home"><span class="wordmark-mark">T</span><span>Terry AI Lab</span></a>
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
        <div class="footer-main"><div><a class="wordmark footer-wordmark" href="/"><span class="wordmark-mark">T</span><span>Terry AI Lab</span></a><p class="footer-tagline">LEARN · APPLY · GROW</p><p class="footer-copy">${currentLang === 'zh' ? '由企業問題出發 建立團隊真正使用的 workflow' : 'Start with the business problem Build a workflow the team can use'}</p></div><div class="footer-links"><div><span class="footer-label">EXPLORE</span>${labels.slice(0, 4).map(([path, label]) => link(path, label)).join('')}</div><div><span class="footer-label">START HERE</span>${link('/consultation', copy.home.primary)}${link('/ai-agents', currentLang === 'zh' ? '解決方案' : 'Solutions')}</div></div></div>
        <div class="footer-bottom"><span>© 2026 Terry AI Lab</span><span>${currentLang === 'zh' ? '私人預覽 · Privacy & Terms' : 'Private preview · Privacy & Terms'}</span></div>
      </footer>
    </div>`
}

function workflowVisual(problem) {
  const copy = currentText().home
  return `<div class="problem-result" data-problem-result aria-live="polite"><div class="problem-result-top"><span>${copy.current}</span><span>${problem.number} · ${problem.title}</span></div><div class="problem-state"><small>${copy.current}</small><strong>${problem.current}</strong></div><div class="problem-divider" aria-hidden="true">↓</div><div class="problem-state is-improved"><small>${copy.improved}</small><strong>${problem.improved}</strong></div><div class="problem-flow"><span>${problem.steps.join('</span><i aria-hidden="true">→</i><span>')}</span></div></div>`
}

function hero() {
  const copy = currentText().home
  const first = problems[currentLang][0]
  return `<section class="hero section-dark hero-v3 hero-selector-only"><div class="hero-grid container"><div class="hero-center-copy">${eyebrow(copy.heroKicker, '01')}<h1><span>${copy.heroTitle[0]}</span><span><em>${copy.heroTitle[1]}</em></span></h1><p class="hero-lead">${copy.heroLead}</p></div><div class="hero-visual-wrap"><div class="hero-selector-stack"><div class="problem-selector" id="solutions"><div class="problem-selector-heading"><h2>${copy.selectorTitle}</h2><p>${copy.selectorLead}</p></div><div class="problem-selector-grid"><div class="problem-tabs" role="tablist" aria-label="${copy.selectorTitle}">${problems[currentLang].map((problem, index) => `<button class="problem-tab ${index === 0 ? 'is-selected' : ''}" type="button" role="tab" aria-selected="${index === 0}" data-problem="${problem.id}"><span>${problem.number}</span><strong>${problem.title}</strong><span aria-hidden="true">↗</span></button>`).join('')}</div>${workflowVisual(first)}</div></div>${heroCta()}</div></div></div><div class="hero-bottom container"><span>${copy.outcomes.join(' · ')}</span><span class="scroll-line"></span><span>HONG KONG · MALAYSIA</span></div></section>`
}

function comparisonSection() {
  const copy = currentText().home
  const types = currentLang === 'zh' ? ['企業教練', 'AI 公司', '我們'] : ['Business Coach', 'AI Company', 'Our model']
  return `<section class="comparison-section section-dark" id="difference"><div class="container"><div class="comparison-heading">${eyebrow(copy.comparisonKicker, '02')}<h2>${copy.comparisonTitle}</h2><p>${copy.comparisonLead}</p></div><div class="comparison-table" role="table" aria-label="${copy.comparisonTitle}"><div class="comparison-row comparison-header" role="row"><span></span>${types.map((type, index) => `<strong class="comparison-column comparison-column-${index} ${index === 2 ? 'is-featured' : ''}">${type}${index === 2 ? `<small>${currentLang === 'zh' ? '最完整方案' : 'Most complete'}</small>` : ''}</strong>`).join('')}</div>${copy.comparisonRows.map((row, rowIndex) => `<div class="comparison-row" role="row"><span class="comparison-dimension">${row}</span>${copy.comparisonCells[rowIndex].map((cell, index) => `<span class="comparison-cell comparison-column comparison-column-${index} ${index === 2 ? 'is-featured' : ''}">${cell}</span>`).join('')}</div>`).join('')}</div><div class="comparison-summary"><span>${currentLang === 'zh' ? '找出問題' : 'Diagnose'}</span><i>→</i><span>${currentLang === 'zh' ? '共同建置' : 'Build together'}</span><i>→</i><span>${currentLang === 'zh' ? '團隊掌握' : 'Enable the team'}</span></div></div></section>`
}

function methodSection() {
  const copy = currentText().home
  return `<section class="method-section section-light" id="process"><div class="container"><div class="method-heading">${eyebrow(copy.methodKicker, '03')}<h2>${copy.methodTitle[0]}<br /><span>${copy.methodTitle[1]}</span></h2><p>${copy.methodLead}</p></div><div class="method-steps">${copy.methodSteps.map(([title, english, detail], index) => `<article class="method-step"><span class="method-number">0${index + 1}</span><small>${english}</small><h3>${title}</h3><p>${detail}</p></article>`).join('')}</div><div class="method-proof"><div class="method-proof-copy">${eyebrow(copy.proofKicker)}<h3>${copy.proofTitle}</h3><p>${currentLang === 'zh' ? '透過 Instagram 教學 先了解 Terry 如何將複雜問題拆成可執行的下一步' : 'Use Terry’s Instagram lessons to see how complex problems become useful next steps'}</p>${link('/insights', `${copy.proofLink} ${icons.arrow}`, 'text-link')}</div><div class="instagram-home-grid">${lessons[currentLang].map(lessonCard).join('')}</div></div></div></section>`
}

function lessonCard(lesson) {
  const label = currentLang === 'zh' ? '查看教學' : 'View lesson'
  return `<a class="instagram-lesson-card" href="${instagramProfile}" target="_blank" rel="noopener noreferrer"><div class="instagram-lesson-media"><img src="${lesson.image}" alt="${lesson.title}" loading="lazy" /><span class="instagram-play" aria-hidden="true">▶</span></div><div class="instagram-lesson-meta"><span>${lesson.topic}</span><span>Instagram ↗</span></div><h3>${lesson.title}</h3><p>${lesson.description}</p><span class="instagram-lesson-arrow">${label} <span aria-hidden="true">↗</span></span></a>`
}

function offerSection() {
  const copy = currentText().home
  return `<section class="offer-section section-dark"><div class="container offer-panel"><div>${eyebrow(copy.offerKicker, '04')}<h2>${copy.offerTitle[0]}<br /><span>${copy.offerTitle[1]}</span></h2><p>${copy.offerLead}</p></div><div class="offer-side"><div class="offer-price"><small>STARTING FROM</small><strong>${commercial.price}</strong><span>${commercial.duration} · ${commercial.pilot}</span></div>${link('/ai-agent-build', `${copy.offerButton} ${icons.arrow}`, 'button button-primary')}</div></div></section>`
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
  return shell(`${hero()}${comparisonSection()}${methodSection()}${offerSection()}${consultationPreview()}${faqSection()}<section class="final-cta section-dark"><div class="container">${eyebrow(copy.finalKicker, '06')}<h2>${copy.finalTitle}</h2><p>${copy.finalLead}</p>${link('/consultation', `${copy.primary} ${icons.arrow}`, 'button button-primary button-large')}</div></section>`)
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
  return shell(`${pageHero('AI WORKFLOW BUILD SPRINT', title, lead, '02')}<section class="offer-detail section-light"><div class="container offer-detail-grid"><div>${eyebrow(zh ? 'THE RULE' : 'THE RULE', '01')}<h2>ONE CORE<br /><span>BUSINESS WORKFLOW</span></h2><p>${zh ? '先定義優先事項，再建立最小可行版本。scope、資料權限與 pilot 指標會在開始前說明。' : 'Define the priority first, then build the smallest useful version. Scope, data access and pilot metrics are set before we start.'}</p></div><div class="offer-facts"><div><span>STARTING FROM</span><strong>${commercial.price}</strong></div><div><span>TYPICAL DURATION</span><strong>${commercial.duration}</strong></div><div><span>PILOT</span><strong>${commercial.pilot}</strong></div></div></div></section><section class="service-phases section-dark"><div class="container"><div class="service-title">${eyebrow(zh ? 'DELIVERY PHASES' : 'DELIVERY PHASES', '03')}<h2>${zh ? '四個階段<br /><span>由問題行到團隊掌握</span>' : 'Four phases<br /><span>from problem to team ownership</span>'}</h2></div><div class="service-phase-list">${currentText().home.methodSteps.map(([name, english, detail], index) => `<div class="service-phase"><span>0${index + 1}</span><div><h3>${name}</h3><small>${english}</small></div><p>${detail}</p></div>`).join('')}</div></div></section>${consultationPreview()}`)
}

function casesPage() {
  const zh = currentLang === 'zh'
  return shell(`${pageHero('CASE LIBRARY', zh ? '先量度<br /><span>再談結果</span>' : 'Measure first<br /><span>then discuss outcomes</span>', zh ? '案例會以 baseline、workflow、human control 與 verified outcome 為基礎' : 'Cases are grounded in a baseline, workflow, human control and verified outcome', '03')}<section class="case-library section-light"><div class="container case-library-inner">${eyebrow(zh ? 'VERIFIED EVIDENCE ONLY' : 'VERIFIED EVIDENCE ONLY', '01')}<h2>${zh ? '案例庫正在建立' : 'Case library in progress'}</h2><p>${zh ? '第一批 project 完成 pilot 與 read-back 後 我們會整理可公開的 before and after' : 'After the first projects complete their pilots and read-backs, we will publish verified before and after evidence.'}</p>${link('/consultation', `${currentText().home.primary} ${icons.arrow}`, 'button button-primary')}</div></section>`)
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
  const path = window.location.pathname.replace(/\/$/, '') || '/'
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
