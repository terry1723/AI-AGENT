const draftCommercial = {
  consultation: '30 分鐘免費 AI Agent 諮詢',
  price: 'USD 3,500 起',
  duration: '一般 3–4 星期',
  pilot: '14-Day Pilot',
  featured: 'Lead & Follow-up Agent',
}

const agents = [
  {
    id: 'lead',
    number: '01',
    name: 'Lead & Follow-up Agent',
    title: '每一個新客戶，都有人負責跟進。',
    description: '將分散的 enquiry、通知、分配和 follow-up，連成一條有人負責、可以量度的流程。',
    steps: ['不同 enquiry forms', 'Standardise lead', 'Save to database', 'Notify + assign', 'Follow-up timer', 'Funnel analytics'],
    signal: 'LEAD OPERATIONS',
  },
  {
    id: 'finance',
    number: '02',
    name: 'Finance Capture Agent',
    title: '說一句，記一筆。月底自動整理。',
    description: '將 voice input 或 receipt 轉成清晰的內部管理記錄。正式會計及稅務仍由專業人士審核。',
    steps: ['Voice / receipt', 'Understand', 'Categorise', 'Store', 'Monthly summary'],
    signal: 'INTERNAL OPERATIONS',
  },
  {
    id: 'customer',
    number: '03',
    name: 'Customer Enquiry Agent',
    title: '重複問題交給 AI，重要客戶交給真人。',
    description: '按公司知識理解問題，起草回覆，遇到例外就升級給適合的人。',
    steps: ['Customer question', 'Understand intent', 'Retrieve knowledge', 'Draft response', 'Human escalation'],
    signal: 'CUSTOMER EXPERIENCE',
  },
  {
    id: 'operations',
    number: '04',
    name: 'Operations Agent',
    title: '讓工作不再靠人記得下一步。',
    description: '追蹤 request、指派 action、更新系統及提醒團隊，令交接變得清楚。',
    steps: ['Order / request', 'Check data', 'Assign action', 'Update system', 'Chase missing step'],
    signal: 'TEAM OPERATIONS',
  },
  {
    id: 'reporting',
    number: '05',
    name: 'Management Reporting Agent',
    title: '不用等月底，先知道公司發生了什麼。',
    description: '整理不同來源的資料，找出異常，再交一份人可以 review 的 management summary。',
    steps: ['Multiple sources', 'Consolidate', 'Analyse', 'Detect anomaly', 'Human review'],
    signal: 'MANAGEMENT VISIBILITY',
  },
]

const navItems = [
  ['/ai-agents', 'AI Agent'],
  ['/ai-agent-build', '解決方案'],
  ['/ai-agent-build#process', '建置流程'],
  ['/cases', '案例'],
  ['/about', '關於我們'],
  ['/insights', '洞察'],
]

const phases = [
  ['01', '診斷', 'Business Priority Session', '先鎖定值得解決的問題、瓶頸和成功指標。'],
  ['02', '設計', 'Workflow Mapping', '將 current workflow 拆開，分清 HUMAN、AUTOMATION、AI AGENT。'],
  ['03', '建置', 'Working AI Agent', '把一個 core workflow 變成真正可以運作的系統。'],
  ['04', '試行', 'Real Business Pilot', '在真實流程中測試例外、審批、錯誤和交接。'],
  ['05', '量度', 'Business Impact Review', '按流程選擇 1–3 個指標，檢討下一步。'],
]

const faqs = [
  ['我完全不懂 AI，可以嗎？', '可以。重點不是教你成為 AI 專家，而是把 AI 放進適合的企業流程。'],
  ['我的員工需要每人一個 ChatGPT 帳號嗎？', '不一定。會按實際 workflow，研究如何整合到團隊已經使用的工具。'],
  ['你們使用什麼 AI 工具？', '先看商業問題，再選擇最簡單而適合的工具。工具不是起點，工作流程才是。'],
  ['所有工作都適合 AI Agent 嗎？', '不是。清楚固定的工作可能更適合 deterministic automation，高風險判斷則應由真人負責。'],
  ['一個項目需要多久？', `目前建議的 scope 是 ${draftCommercial.duration}，實際取決於 workflow 和 integrations。`],
  ['收費多少？', `目前 draft 起步價格為 ${draftCommercial.price}；最終以確認後的 proposal 為準。`],
  ['Software 和 API 費用包括嗎？', '第三方 subscription、API 或平台費用一般由客戶直接承擔，會在 proposal 中清楚列出。'],
  ['可以連接我們現在的 CRM 嗎？', '需要先檢查 CRM 的 API、權限和 technical access，再決定最穩妥的整合方式。'],
  ['Agent 出錯怎麼辦？', '重要流程會設計 logging、error handling、human approval 和 escalation，不讓不確定性靜默通過。'],
  ['上線後怎麼辦？', '建置流程包括試行、優化及 handover；長期 maintenance 會按需要另行評估。'],
]

const icons = {
  arrow: '<span aria-hidden="true">↗</span>',
  plus: '<span aria-hidden="true">+</span>',
  dot: '<span class="signal-dot" aria-hidden="true"></span>',
}

function link(path, label, className = '') {
  return `<a class="${className}" href="${path}">${label}</a>`
}

function shell(content, current = '') {
  return `
    <div class="site-shell">
      <header class="site-header" data-header>
        <a class="wordmark" href="/" aria-label="Terry AI Lab home">
          <span class="wordmark-mark">T</span>
          <span>Terry AI Lab</span>
        </a>
        <nav class="desktop-nav" aria-label="主選單">
          ${navItems.map(([path, label]) => link(path, label, current === path ? 'active' : '')).join('')}
        </nav>
        <div class="header-actions">
          ${link('/consultation', '免費諮詢', 'button button-small button-primary')}
          <button class="menu-toggle" data-menu-toggle aria-label="開啟選單" aria-expanded="false"><span></span><span></span></button>
        </div>
      </header>
      <div class="mobile-menu" data-mobile-menu aria-hidden="true">
        <div class="mobile-menu-inner">
          ${navItems.map(([path, label]) => link(path, label, 'mobile-link')).join('')}
          ${link('/consultation', '預約 30 分鐘免費諮詢', 'button button-primary mobile-cta')}
        </div>
      </div>
      <main>${content}</main>
      <footer class="site-footer">
        <div class="footer-main">
          <div>
            <a class="wordmark footer-wordmark" href="/">
              <span class="wordmark-mark">T</span>
              <span>Terry AI Lab</span>
            </a>
            <p class="footer-tagline">LEARN · APPLY · GROW</p>
            <p class="footer-copy">將複雜 AI，變成普通人可以真正使用的工作流程。</p>
          </div>
          <div class="footer-links">
            <div><span class="footer-label">EXPLORE</span>${navItems.slice(0, 4).map(([path, label]) => link(path, label)).join('')}</div>
            <div><span class="footer-label">START HERE</span>${link('/consultation', '免費諮詢')}${link('/ai-agent-build', 'AI Agent 建置計劃')}</div>
          </div>
        </div>
        <div class="footer-bottom"><span>© 2026 Terry AI Lab</span><span>Privacy & Terms · Draft for Preview</span></div>
      </footer>
    </div>`
}

function eyebrow(label, index = '') {
  return `<div class="eyebrow">${index ? `<span>${index}</span>` : icons.dot}<span>${label}</span></div>`
}

function buttonPair(primary = '預約 30 分鐘免費諮詢', secondary = '看看 AI Agent 可以做什麼') {
  return `<div class="button-row">${link('/consultation', `${primary} ${icons.arrow}`, 'button button-primary')}${link('/ai-agents', `${secondary} ${icons.arrow}`, 'button button-ghost')}</div>`
}

function workflowVisual(steps = ['NEW LEAD', 'AI UNDERSTANDS', 'ASSIGN OWNER', 'TELEGRAM', 'FOLLOW-UP TIMER', 'FUNNEL DATA'], compact = false) {
  return `<div class="workflow-visual ${compact ? 'workflow-compact' : ''}" data-flow>
    <div class="flow-topline"><span>LIVE WORKFLOW / 001</span><span>${icons.dot} SYSTEM READY</span></div>
    <div class="flow-track">${steps.map((step, index) => `<div class="flow-node ${index === 0 ? 'is-active' : ''}" data-flow-node><span class="flow-node-index">0${index + 1}</span><span class="flow-node-label">${step}</span>${index < steps.length - 1 ? '<span class="flow-connector" aria-hidden="true">↓</span>' : ''}</div>`).join('')}</div>
    <div class="flow-footer"><span>HUMAN REVIEW AVAILABLE</span><span>DATA → AI → ACTION</span></div>
  </div>`
}

function sectionHeading(kicker, title, copy = '', align = '') {
  return `<div class="section-heading ${align}">${eyebrow(kicker)}<h2>${title}</h2>${copy ? `<p>${copy}</p>` : ''}</div>`
}

function hero() {
  return `<section class="hero section-dark">
    <div class="hero-grid container">
      <div class="hero-copy">
        ${eyebrow('AI AGENT IMPLEMENTATION FOR SMEs', '01')}
        <h1>不要再增加<br /><span>更多 AI 工具。</span><br />讓 AI 真正開始<br /><em>替你的公司工作。</em></h1>
        <p class="hero-lead">Terry AI Lab 協助中小企業找出最耗時、最容易出錯或最依賴人手的工作流程，再把它轉化成真正可以使用的 AI Agent 與自動化系統。</p>
        ${buttonPair()}
        <div class="hero-proof"><span>${icons.dot} BUSINESS FIRST</span><span>${icons.dot} HUMAN REVIEW</span><span>${icons.dot} MEASURABLE</span></div>
      </div>
      <div class="hero-visual-wrap">
        <div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div>
        ${workflowVisual()}
        <div class="hero-annotation annotation-one"><span>01</span> INPUT RECEIVED</div>
        <div class="hero-annotation annotation-two"><span>07</span> NEXT ACTION READY</div>
      </div>
    </div>
    <div class="hero-bottom container"><span>SCROLL TO EXPLORE</span><span class="scroll-line"></span><span>HONG KONG · MALAYSIA</span></div>
  </section>`
}

function principles() {
  return `<section class="principles section-light"><div class="container principle-grid"><div class="principle-intro">${eyebrow('A DIFFERENT STARTING POINT', '02')}<p>不是先問「可以用什麼 AI」，而是先問「哪一個工作最值得改善」。</p></div><div class="principle-rail"><div><strong>01</strong><span>BUSINESS<br />FIRST</span></div><div><strong>02</strong><span>WORKFLOW<br />CONNECTED</span></div><div><strong>03</strong><span>HUMAN<br />REVIEW</span></div><div><strong>04</strong><span>MEASURABLE<br />OUTCOME</span></div></div></div></section>`
}

function problemSection() {
  const items = [
    ['01', '新客戶來了，卻沒有人及時跟進', '不同表單、廣告、WhatsApp 查詢分散在不同地方。'],
    ['02', '員工每天重複做相同的行政工作', 'Copy 資料、更新表格、發提醒、整理 report。'],
    ['03', '公司資料散落在不同工具', '系統互不連接，管理層看不到完整流程。'],
    ['04', '所有事情最後都需要問老闆', '工作過度依賴記憶、經驗和個別員工。'],
  ]
  return `<section class="problem-section section-light"><div class="container"><div class="problem-top">${sectionHeading('THE REAL BOTTLENECK', 'AI 不是問題。<br /><span>斷開的工作流程才是。</span>', '很多團隊不是缺少工具，而是工具之間沒有一條可以負責到底的線。')}</div><div class="problem-list">${items.map(([number, title, copy]) => `<article class="problem-item"><span class="item-number">${number}</span><div><h3>${title}</h3><p>${copy}</p></div><span class="item-arrow">↗</span></article>`).join('')}</div><div class="problem-conclusion"><span class="conclusion-line"></span><p>這些問題未必需要再請一個人。<br /><strong>很多時候，需要的是一個更好的工作系統。</strong></p></div></div></section>`
}

function agentExplainer() {
  return `<section class="agent-explainer section-dark" id="agent"><div class="container explainer-grid"><div class="explainer-copy">${eyebrow('HOW IT WORKS', '03')}<h2>不是另一個<br /><span>Chatbot。</span><br />而是一個會工作的<br /><em>AI 系統。</em></h2><p>一般 AI 工具需要你主動打開、輸入指令，再自行處理答案。AI Agent 可以在指定事件發生時，接收資料、理解情境、按照公司規則判斷、使用工具、執行下一步，並在需要時交給真人。</p><div class="explainer-note">${icons.dot}<span>固定規則，用 automation。<br />真正需要理解和判斷的位置，才用 AI Agent。</span></div></div><div class="explainer-flow"><div class="flow-rail-label">AGENT LOGIC / HUMAN CONTROL</div>${['INPUT', 'UNDERSTAND', 'DECIDE', 'ACT', 'HUMAN REVIEW'].map((step, index) => `<div class="logic-step ${index === 0 ? 'is-active' : ''}" data-logic-step><span class="logic-index">0${index + 1}</span><strong>${step}</strong><small>${['接收資料', '理解情境', '按規則判斷', '使用工具執行', '需要時交回真人'][index]}</small>${index < 4 ? '<span class="logic-arrow">↓</span>' : ''}</div>`).join('')}</div></div></section>`
}

function adoptionSection() {
  return `<section class="adoption-section section-accent"><div class="container adoption-grid"><div class="adoption-mark">“</div><div><div class="eyebrow">THE ADOPTION PRINCIPLE</div><h2>你的員工不需要<br /><span>人人都成為 AI 專家。</span></h2><p>AI 應該直接融入他們本來的工作方式。Telegram、WhatsApp、Forms、CRM、Email、Spreadsheet——團隊照常工作，AI 在背後連接資料、判斷、提醒和執行。</p><div class="adoption-tools"><span>TELEGRAM</span><span>FORMS</span><span>CRM</span><span>EMAIL</span><span>SPREADSHEET</span></div></div></div></section>`
}

function agentShowcase() {
  return `<section class="showcase section-light" id="use-cases"><div class="container">${sectionHeading('EXAMPLES, NOT PACKAGES', '你的第一個 AI Agent<br /><span>可以做什麼？</span>', '以下是常見例子。真正建置內容會根據企業流程設計。')}<div class="showcase-grid"><div class="agent-menu" role="tablist" aria-label="Agent examples">${agents.map((agent, index) => `<button class="agent-tab ${index === 0 ? 'is-selected' : ''}" data-agent="${agent.id}" role="tab" aria-selected="${index === 0}"><span>${agent.number}</span><strong>${agent.name}</strong><span>↗</span></button>`).join('')}</div><div class="agent-stage" data-agent-stage>${agentStage(agents[0])}</div></div></div></section>`
}

function agentStage(agent) {
  return `<div class="stage-topline"><span>${agent.signal}</span><span>${icons.dot} EXAMPLE FLOW</span></div><div class="stage-copy"><span class="stage-number">${agent.number}</span><h3>${agent.title}</h3><p>${agent.description}</p></div><div class="stage-steps">${agent.steps.map((step, index) => `<div class="stage-step"><span>0${index + 1}</span><strong>${step}</strong>${index < agent.steps.length - 1 ? '<i>→</i>' : ''}</div>`).join('')}</div><div class="stage-footer"><span>HUMAN APPROVAL WHEN NEEDED</span><span>WORKFLOW PREVIEW</span></div>`
}

function leadDemo() {
  const steps = ['ENQUIRY RECEIVED', 'STANDARDISE DATA', 'SAVE LEAD', 'TELEGRAM ALERT', 'ASSIGN OWNER', 'FOLLOW-UP TIMER', 'MISSED? → REMINDER', 'UPDATE STATUS', 'FUNNEL ANALYTICS']
  return `<section class="lead-demo section-dark"><div class="container"><div class="demo-heading"><div>${eyebrow('FEATURED WORKFLOW', '04')}<h2>每一個新客戶，<br /><span>都有人負責跟進。</span></h2></div><p>從新客進來，到跟進、提醒、轉換率分析，全部連成一條流程。以下是 workflow concept，並非 live customer dashboard。</p></div><div class="lead-canvas"><div class="canvas-bar"><span><i></i><i></i><i></i></span><span>LEAD / FOLLOW-UP SYSTEM</span><span>PREVIEW MODE</span></div><div class="canvas-flow">${steps.map((step,index)=>`<div class="canvas-step ${index === 0 ? 'is-live' : ''}" data-canvas-step><span class="canvas-index">${String(index + 1).padStart(2,'0')}</span><strong>${step}</strong><small>${index < 2 ? 'INPUT' : index < 5 ? 'ACTION' : index === 6 ? 'ESCALATION' : 'SIGNAL'}</small></div>`).join('')}</div><div class="canvas-foot"><span>DATA → AI → ACTION</span><span>HUMAN REVIEW AVAILABLE</span><span>LOGGING ENABLED / CONCEPT</span></div></div></div></section>`
}

function whySection() {
  return `<section class="why-section section-light"><div class="container"><div class="why-heading">${eyebrow('WHY THIS MODEL', '05')}<h2>我們不會一開始<br /><span>就叫你做 AI。</span></h2><p>因為把錯誤的流程自動化，只會更快地放大錯誤。</p></div><div class="discipline-grid"><article><span class="discipline-tag">DISCIPLINE 01</span><h3>Business<br /><em>Diagnosis</em></h3><p>我們現在解決的，是不是最值得解決的問題？</p><ul><li>Goal</li><li>Bottleneck</li><li>Root cause</li><li>Priority</li><li>Success metric</li></ul></article><div class="discipline-bridge">→<span>ONE<br />OUTCOME</span></div><article><span class="discipline-tag">DISCIPLINE 02</span><h3>AI Agent<br /><em>Implementation</em></h3><p>怎樣把這個商業優先事項，變成真正可以運作的 AI 系統？</p><ul><li>Workflow</li><li>Agent architecture</li><li>Data + integrations</li><li>Testing</li><li>Team adoption</li></ul></article></div><div class="why-conclusion">先解決對的問題，<strong>再用 AI 執行。</strong></div></div></section>`
}

function processOffer() {
  return `<section class="process-section section-light" id="process"><div class="container">${sectionHeading('FROM PROBLEM TO PILOT', '由商業問題，<br /><span>到真正上線。</span>', '一個清晰的流程，將判斷、建置、試行和量度連成一條線。')}<div class="process-list">${phases.map(([num, title, english, copy], index) => `<div class="process-row"><span class="process-number">${num}</span><div class="process-title"><h3>${title}</h3><span>${english}</span></div><p>${copy}</p><span class="process-state">${index < 2 ? 'DISCOVER' : index === 2 ? 'BUILD' : 'VALIDATE'}</span></div>`).join('')}</div><div class="offer-panel"><div>${eyebrow('THE AI AGENT BUILD SPRINT', '06')}<h2>一個重要的商業問題。<br /><span>一套真正可以運作的 AI 系統。</span></h2><p>每個 Sprint 聚焦 ONE CORE WORKFLOW。從 business priority 到 working agent、team SOP、pilot 和 handover。</p></div><div class="offer-side"><div class="offer-price"><small>STARTING FROM <sup>DRAFT</sup></small><strong>${draftCommercial.price}</strong><span>${draftCommercial.duration} · ${draftCommercial.pilot}</span></div>${link('/ai-agent-build', `查看建置計劃 ${icons.arrow}`, 'button button-primary')}</div></div></div></section>`
}

function fitAndProof() {
  return `<section class="fit-section section-dark"><div class="container"><div class="fit-grid"><div>${eyebrow('A GOOD FIRST PROJECT', '07')}<h2>這個計劃<br /><span>適合你的公司嗎？</span></h2><p>先從一個重要流程開始，通常比一次改造整間公司更容易學到真實答案。</p>${link('/consultation', `帶一個流程來問 ${icons.arrow}`, 'text-link')}</div><div class="fit-columns"><div><span class="fit-label fit-good">適合</span><ul><li>5–50 人中小企業</li><li>每天有重複流程</li><li>多人需要交接</li><li>資料分散、缺乏 visibility</li><li>想真正落地 AI</li></ul></div><div><span class="fit-label fit-not">未必適合</span><ul><li>只想學 prompt</li><li>想一次自動化整間公司</li><li>完全沒有固定流程</li><li>要求 AI 取代專業判斷</li><li>要求保證營業額</li></ul></div></div></div><div class="case-prep"><div><span class="case-status">CASE LIBRARY / PREPARING</span><h3>真實流程。<br /><span>真實結果。</span></h3><p>正式案例會展示 baseline、workflow、human controls、pilot 和 verified outcome。現階段不使用未驗證數字。</p></div><div class="case-schematic"><span>BEFORE</span><i>→</i><span>WORKFLOW</span><i>→</i><span>AFTER</span><small>VERIFICATION STATUS REQUIRED</small></div></div></div></section>`
}

function consultationPreview() {
  return `<section class="consult-preview section-accent"><div class="container consultation-grid"><div>${eyebrow('START WITH ONE WORKFLOW', '08')}<h2>帶一個混亂的流程來，<br /><span>看看 AI 是否值得介入。</span></h2><p>30 分鐘免費 AI Agent 諮詢，先了解你的公司、流程和想改善的結果。這不是完整免費 business audit。</p><div class="consult-meta"><span>01 / 了解目前流程</span><span>02 / 找出改善位置</span><span>03 / 判斷 AI 是否適合</span></div></div><div class="mini-form-card"><div class="form-card-top"><span>OPPORTUNITY CALL</span><span>30 MIN</span></div><p>下一步只需要帶一個你最想改善的流程。</p>${link('/consultation', `開始填寫 ${icons.arrow}`, 'button button-dark')}</div></div></section>`
}

function faqSection() {
  return `<section class="faq-section section-light"><div class="container faq-grid">${sectionHeading('QUESTIONS BEFORE STARTING', '先問清楚，<br /><span>再決定下一步。</span>')}<div class="faq-list">${faqs.map(([question, answer], index) => `<details ${index === 0 ? 'open' : ''}><summary><span>${question}</span><span class="faq-plus">+</span></summary><p>${answer}</p></details>`).join('')}</div></div></section>`
}

function homePage() {
  return shell(`${hero()}${principles()}${problemSection()}${agentExplainer()}${adoptionSection()}${agentShowcase()}${leadDemo()}${whySection()}${processOffer()}${fitAndProof()}${consultationPreview()}${faqSection()}<section class="final-cta section-dark"><div class="container">${eyebrow('ONE GOOD FIRST STEP', '09')}<h2>先找出最值得<br /><span>改善的一步。</span></h2><p>不用一次改變整間公司。先選一個重要流程，讓 AI 真正開始工作。</p>${link('/consultation', `預約 30 分鐘免費諮詢 ${icons.arrow}`, 'button button-primary')}</div></section>`)
}

function pageHero(kicker, title, copy, number = 'PAGE') {
  return `<section class="page-hero section-dark"><div class="container page-hero-inner">${eyebrow(kicker, number)}<h1>${title}</h1><p>${copy}</p></div></section>`
}

function agentPage() {
  return shell(`${pageHero('AI AGENTS / USE CASES', 'AI Agent 可以替你的公司<br /><span>做什麼？</span>', '以下是常見例子。真正建置內容會根據企業流程設計。', '01')}<section class="agent-page-intro section-light"><div class="container intro-split"><div>${eyebrow('DECISION RULE', '02')}<h2>固定規則，<br /><span>先用 automation。</span></h2></div><p>真正需要理解、分類、推理、生成或情境判斷的位置，才使用 AI Agent。高風險決定，保留 human approval。</p></div></section><section class="agent-page-list section-light"><div class="container">${agents.map((agent, index) => `<article class="agent-page-row ${index === 0 ? 'is-featured' : ''}><div class="agent-page-number">${agent.number}</div><div><span class="stage-topline">${agent.signal}</span><h2>${agent.title}</h2><p>${agent.description}</p><div class="inline-steps">${agent.steps.map(step => `<span>${step}</span>`).join('<i>→</i>')}</div></div><span class="row-arrow">↗</span></article>`).join('')}</div></section><section class="disclaimer section-light"><div class="container"><span>${icons.dot}</span><p>這些是 workflow concept，不是固定 template product。建置內容、資料來源、integration 和 human checkpoints 會按你的企業流程設計。</p></div></section>${consultationPreview()}`,'/ai-agents')
}

function buildPage() {
  return shell(`${pageHero('AI AGENT BUILD SPRINT', '一個重要的商業問題。<br /><span>一套真正可以運作的 AI 系統。</span>', '從 business diagnosis、workflow mapping 到 working agent、team adoption 和 pilot，集中處理一個值得改善的 core workflow。', '02')}<section class="offer-detail section-light"><div class="container offer-detail-grid"><div>${eyebrow('THE RULE', '01')}<h2>ONE CORE<br /><span>BUSINESS WORKFLOW</span></h2><p>不要一次自動化整間公司。先選一個重要流程，將 scope、責任、例外和成功指標講清楚。</p></div><div class="offer-facts"><div><span>STARTING FROM <sup>DRAFT</sup></span><strong>${draftCommercial.price}</strong></div><div><span>TYPICAL DURATION <sup>DRAFT</sup></span><strong>3–4 <small>WEEKS</small></strong></div><div><span>PILOT <sup>DRAFT</sup></span><strong>14 <small>DAYS</small></strong></div></div></div></section><section class="service-phases section-dark" id="process"><div class="container"><div class="service-title">${eyebrow('DELIVERY PHASES', '02')}<h2>由判斷開始，<br /><span>到團隊真正用得上。</span></h2></div><div class="service-phase-list">${phases.map(([num, title, english, copy]) => `<div class="service-phase"><span>${num}</span><div><h3>${title}</h3><small>${english}</small></div><p>${copy}</p></div>`).join('')}</div></div></section><section class="deliverables section-light"><div class="container"><div>${eyebrow('WHAT YOU TAKE AWAY', '03')}<h2>付款之後，<br /><span>你會得到什麼？</span></h2></div><div class="deliverable-groups"><div><span>STRATEGY</span><strong>Business Priority Brief</strong><strong>Success Metric</strong></div><div><span>WORKFLOW</span><strong>Current Workflow Map</strong><strong>Future AI Workflow Map</strong></div><div><span>SYSTEM</span><strong>Working AI Agent</strong><strong>Agent Instructions</strong></div><div><span>ADOPTION</span><strong>Team SOP</strong><strong>Team Training</strong></div><div><span>EVIDENCE</span><strong>14-Day Pilot</strong><strong>Optimisation & Handover</strong></div></div></div></section><section class="not-included section-dark"><div class="container not-grid"><div>${eyebrow('SCOPE WITH CLARITY', '04')}<h2>清楚知道<br /><span>不包括什麼。</span></h2></div><div><p>第三方 software、API 或 platform 費用一般由客戶直接承擔，實際 scope 以 proposal 為準。</p><p>這個 Sprint 不承諾 Full Business AI Transformation、Unlimited Automation、保證營業額或完全取代專業判斷。</p></div></div></section>${consultationPreview()}<section class="final-cta section-dark"><div class="container">${eyebrow('READY WHEN YOU ARE', '05')}<h2>帶一個流程，<br /><span>我們先一起看清楚。</span></h2>${link('/consultation', `預約免費諮詢 ${icons.arrow}`, 'button button-primary')}</div></section>`,'/ai-agent-build')
}

function casesPage() {
  return shell(`${pageHero('CASE LIBRARY / PREPARING', '真實流程。<br /><span>真實結果。</span>', '案例不是裝飾。正式案例會展示 baseline、workflow、human controls、pilot 和 verified outcome。', '03')}<section class="case-library section-light"><div class="container case-library-inner"><div class="case-empty-mark">◎</div>${eyebrow('VERIFIED EVIDENCE ONLY', '01')}<h2>案例整理中</h2><p>我們會在有可核實的企業流程、成效數據和公開許可後，再把案例放上網站。現階段先展示未來每個 case 會如何被理解和驗證。</p><div class="case-evidence-grid"><div><span>01</span><strong>BEFORE BASELINE</strong><p>問題、手動步驟、現況指標。</p></div><div><span>02</span><strong>WHAT WE BUILT</strong><p>Workflow、agent role、human checkpoints。</p></div><div><span>03</span><strong>AFTER MEASUREMENT</strong><p>Pilot 結果、方法和 verification status。</p></div></div>${link('/consultation', `討論你的流程 ${icons.arrow}`, 'button button-primary')}</div></section><section class="case-principle section-dark"><div class="container"><p>沒有 proof，就不把 capability 寫成 result。</p><span>TRUST IS A PRODUCT FEATURE.</span></div></section>`,'/cases')
}

function aboutPage() {
  return shell(`${pageHero('ABOUT TERRY AI LAB', 'Two disciplines.<br /><span>One outcome.</span>', '很多企業不是缺少 AI 工具。真正問題是，不知道哪一個流程值得先改，以及改了之後沒有真正落地。', '04')}<section class="about-story section-light"><div class="container about-story-grid"><div>${eyebrow('WHY THIS MODEL EXISTS', '01')}<h2>先看清楚問題，<br /><span>再決定 AI 放在哪裡。</span></h2></div><div><p>我們將 business judgment 同 AI implementation 放在同一個 project，因為好系統不應該只係「做到」，亦要解決真正值得解決的問題。</p><p>Terry AI Lab 的角色，是將複雜 AI 變成普通人可以理解、團隊可以採用、企業可以量度的工作流程。</p></div></div></section><section class="about-disciplines section-dark"><div class="container discipline-grid about-discipline-grid"><article><span class="discipline-tag">DISCIPLINE 01</span><h2>Business<br /><em>Diagnosis</em></h2><p>找出 goal、bottleneck、root cause、priority 和 success metric。</p><span class="role-note">ROLE-LEVEL VIEW / PROFILE DETAILS PENDING</span></article><article><span class="discipline-tag">DISCIPLINE 02</span><h2>AI Agent<br /><em>Implementation</em></h2><p>將 business priority 變成 workflow、agent、integration、testing、SOP 和 pilot。</p><span class="role-note">TERRY AI LAB / PRACTICAL IMPLEMENTATION</span></article></div></section><section class="about-values section-light"><div class="container"><div>${eyebrow('OUR OPERATING PRINCIPLES', '02')}<h2>少一點工具，<br /><span>多一點真正完成。</span></h2></div><div class="value-list"><div><span>01</span><strong>Business-first</strong><p>先問這個問題是否值得解決。</p></div><div><span>02</span><strong>Human review</strong><p>重要判斷保留清晰的責任線。</p></div><div><span>03</span><strong>Real workflow</strong><p>系統要進入團隊本來的工作方式。</p></div></div></div></section>${consultationPreview()}`,'/about')
}

function insightsPage() {
  const articles = [
    ['01', '甚麼工作適合 AI Agent，甚麼只需要 Automation？', 'AI AGENT BASICS', '用一個簡單 decision rule，分清楚 fixed rules 同需要理解的工作。'],
    ['02', '為什麼中小企業不需要每個員工都成為 AI 專家？', 'SME AI ADOPTION', '真正重要的不是人人識 prompt，而是 AI 能否進入團隊原本的 workflow。'],
    ['03', '你的 Lead 到底在哪一步流失？', 'LEAD OPERATIONS', '由 enquiry、assign、follow-up 到 funnel，先找到斷開的那一步。'],
  ]
  return shell(`${pageHero('INSIGHTS / PRACTICAL AI', '先理解工作流程，<br /><span>再選擇 AI。</span>', '短而實用的觀點，幫你由 AI curiosity 行到可以做下一步的 business decision。', '05')}<section class="insights-list section-light"><div class="container">${articles.map(([num, title, tag, copy],index)=>`<a class="insight-row" href="/insights/${index === 0 ? 'automation-vs-agent' : index === 1 ? 'sme-ai-adoption' : 'lead-funnel-loss'}"><span class="insight-number">${num}</span><div><span class="stage-topline">${tag} · DRAFT</span><h2>${title}</h2><p>${copy}</p></div><span class="row-arrow">↗</span></a>`).join('')}</div></section><section class="insights-note section-dark"><div class="container"><span>${icons.dot}</span><p>Insights 的目的不是追工具新聞，而是幫你做更好的 AI workflow decision。</p></div></section>${consultationPreview()}`,'/insights')
}

function insightDetail(slug) {
  const data = {
    'automation-vs-agent': ['AI AGENT BASICS', '甚麼工作適合 AI Agent，甚麼只需要 Automation？', '先分清楚規則，再決定智能。', ['如果每一次都係同一個條件、同一個動作，deterministic automation 通常已經足夠。當工作需要理解語境、分類、生成或處理例外，AI Agent 才開始有價值。', '最實用的第一步，不是列出所有 AI tools，而是把一個 workflow 拆成：固定規則、需要判斷、需要人批准、需要記錄。']],
    'sme-ai-adoption': ['SME AI ADOPTION', '為什麼中小企業不需要每個員工都成為 AI 專家？', '最好的 AI adoption，通常不會增加另一個工具。', ['如果團隊每人都要記住另一套 prompt、另一個 interface，採用率自然會變低。更好的方法，是把 AI 放在團隊已經使用的工作線背後。', '員工仍然用熟悉的工具；AI 負責整理、提醒、起草和判斷需要升級的情況。人仍然知道何時需要 review。']],
    'lead-funnel-loss': ['LEAD OPERATIONS', '你的 Lead 到底在哪一步流失？', '不要先問 conversion rate，先問下一步有沒有發生。', ['Lead flow 不是只看一個結果數字。由 enquiry received、save、assign、first follow-up 到 status update，每一步都有可能斷開。', '當每個 step 都有 owner、時間線和記錄，團隊才有機會知道問題係流程、資料，還是 capacity。']],
  }
  const article = data[slug] || data['automation-vs-agent']
  return shell(`${pageHero(article[0] + ' / DRAFT ARTICLE', article[1], article[2], 'INSIGHT')}<article class="article-page section-light"><div class="container article-layout"><div class="article-meta"><span>DRAFT</span><span>WORKFLOW NOTE</span></div><div class="article-body">${article[3].map((paragraph,index)=>index===0 ? `<p class="article-lead">${paragraph}</p>` : `<p>${paragraph}</p>`).join('')}<div class="article-callout"><span>${icons.dot} DECISION RULE</span><strong>Business problem → workflow map → smallest useful system</strong></div><h2>由一個流程開始</h2><p>你不需要一次改變整間公司。先選一個每天都會發生、有人需要交接、而且結果可以被看見的 workflow，才容易知道 AI 是否真正有用。</p>${link('/consultation', `帶你的流程來傾 ${icons.arrow}`, 'button button-primary')}</div></div></article>`,'/insights')
}

function consultationPage() {
  return shell(`${pageHero('30 MINUTES / OPPORTUNITY CALL', '帶一個流程來，<br /><span>看看 AI 是否值得介入。</span>', '這是一個初步了解和 suitability check，不是完整免費 business audit。', '06')}<section class="consultation-page section-light"><div class="container consultation-page-grid"><div class="consultation-context"><div class="context-sticky">${eyebrow('WHAT HAPPENS NEXT', '01')}<h2>30 分鐘，<br /><span>先看清楚一件事。</span></h2><div class="consult-steps"><div><span>01</span><p>了解你的公司和目前 workflow。</p></div><div><span>02</span><p>找出最耗時、易錯或依賴人手的位置。</p></div><div><span>03</span><p>初步判斷 AI Agent 或 automation 是否適合。</p></div></div><p class="small-note">我們不會在免費 call 承諾完整 architecture、workflow blueprint 或 strategy report。</p></div></div><form class="consult-form" data-consult-form novalidate><div class="form-heading"><span>OPPORTUNITY CALL / INTAKE</span><small>PREVIEW MODE · DATA NOT SENT</small></div><div class="form-grid"><label>姓名<input name="name" required placeholder="你的名字" /></label><label>公司名稱<input name="company" required placeholder="公司名稱" /></label><label>工作 Email<input type="email" name="email" required placeholder="you@company.com" /></label><label>Website <em>Optional</em><input type="url" name="website" placeholder="https://" /></label><label>Team size<select name="teamSize" required><option value="">請選擇</option><option>1–4</option><option>5–10</option><option>11–25</option><option>26–50</option><option>51+</option></select></label><label>Workflow area<select name="area" required><option value="">請選擇</option><option>Sales</option><option>Marketing</option><option>Customer Service</option><option>Admin</option><option>Finance</option><option>Operations</option><option>Reporting</option><option>Other</option></select></label><label class="full">哪一個流程最讓團隊浪費時間？<textarea name="workflow" required rows="4" placeholder="例如：新客戶由不同渠道進來，但沒有人知道下一步由誰負責。"></textarea></label><label>Frequency<select name="frequency" required><option value="">請選擇</option><option>Daily</option><option>Weekly</option><option>Monthly</option></select></label><label>最常見的問題<select name="problem" required><option value="">請選擇</option><option>Slow</option><option>Forgotten</option><option>Repetitive</option><option>Human error</option><option>No visibility</option><option>Too expensive</option></select></label><label class="full">如果流程改善了，你最希望看到什麼結果？<textarea name="outcome" required rows="4" placeholder="例如：每個新 lead 24 小時內有人跟進，管理層可以看到漏單位置。"></textarea></label></div><label class="consent"><input type="checkbox" name="consent" required /><span>我同意 Terry AI Lab 使用以上資料聯絡我，並明白這是預覽模式，資料暫時不會正式送出。</span></label><div class="form-error" data-form-error role="alert"></div><button class="button button-dark form-submit" type="submit">檢查資料 ${icons.arrow}</button><div class="form-success" data-form-success role="status"><strong>收到你的流程草稿。</strong><span>目前是 Preview mode，資料未正式送出。接上 backend 後，這裡會顯示 verified submission state。</span></div></form></div></section>`,'/consultation')
}

function notFound() {
  return shell(`${pageHero('404 / NOT FOUND', '找不到這一頁。', '返回首頁，重新由一個 workflow 開始。', 'ERR')}<section class="not-found section-light"><div class="container">${link('/', `返回首頁 ${icons.arrow}`, 'button button-primary')}</div></section>`)
}

function render() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  let output
  if (path === '/') output = homePage()
  else if (path === '/ai-agents') output = agentPage()
  else if (path === '/ai-agent-build') output = buildPage()
  else if (path === '/cases') output = casesPage()
  else if (path === '/about') output = aboutPage()
  else if (path === '/insights') output = insightsPage()
  else if (path.startsWith('/insights/')) output = insightDetail(path.split('/')[2])
  else if (path === '/consultation') output = consultationPage()
  else output = notFound()
  document.querySelector('#app').innerHTML = output
  window.scrollTo({ top: 0, behavior: 'instant' })
  bindInteractions()
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

  document.querySelectorAll('[data-agent]').forEach((tab) => tab.addEventListener('click', () => {
    document.querySelectorAll('[data-agent]').forEach((item) => {
      item.classList.toggle('is-selected', item === tab)
      item.setAttribute('aria-selected', String(item === tab))
    })
    const selected = agents.find((agent) => agent.id === tab.dataset.agent)
    const stage = document.querySelector('[data-agent-stage]')
    if (selected && stage) stage.innerHTML = agentStage(selected)
  }))

  const flowNodes = [...document.querySelectorAll('[data-flow-node]')]
  if (flowNodes.length) {
    let active = 0
    window.setInterval(() => {
      flowNodes.forEach((node, index) => node.classList.toggle('is-active', index === active))
      active = (active + 1) % flowNodes.length
    }, 1650)
  }

  const logicSteps = [...document.querySelectorAll('[data-logic-step]')]
  if (logicSteps.length) {
    let active = 0
    window.setInterval(() => {
      logicSteps.forEach((node, index) => node.classList.toggle('is-active', index === active))
      active = (active + 1) % logicSteps.length
    }, 1900)
  }

  const canvasSteps = [...document.querySelectorAll('[data-canvas-step]')]
  if (canvasSteps.length) {
    let active = 0
    window.setInterval(() => {
      canvasSteps.forEach((node, index) => node.classList.toggle('is-live', index === active))
      active = (active + 1) % canvasSteps.length
    }, 1250)
  }

  const form = document.querySelector('[data-consult-form]')
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const error = form.querySelector('[data-form-error]')
      const success = form.querySelector('[data-form-success]')
      const required = [...form.querySelectorAll('[required]')]
      const invalid = required.filter((field) => field.type === 'checkbox' ? !field.checked : !field.value.trim())
      error.textContent = ''
      success.classList.remove('is-visible')
      if (invalid.length) {
        invalid[0].focus()
        error.textContent = '請先完成標示為必填的資料，再提交流程。'
        return
      }
      success.classList.add('is-visible')
      form.querySelector('.form-submit').disabled = true
      form.querySelector('.form-submit').textContent = '預覽資料已檢查 ✓'
    })
  }
}

document.addEventListener('click', (event) => {
  const anchor = event.target.closest('a')
  if (!anchor || !anchor.href.startsWith(window.location.origin) || anchor.target === '_blank') return
  const url = new URL(anchor.href)
  if (url.pathname === window.location.pathname && url.hash) return
  event.preventDefault()
  window.history.pushState({}, '', url.pathname + url.hash)
  render()
})

window.addEventListener('popstate', render)
render()
