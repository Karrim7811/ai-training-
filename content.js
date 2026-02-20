// ── MODULE MANIFEST ─────────────────────────────────────────
export const MODULES = [
  { id:'intro',     mono:'00 / Intro',    title:'Introduction'    },
  { id:'basics',    mono:'01 / Basics',   title:'AI Basics'       },
  { id:'risks',     mono:'02 / Risks',    title:'AI Risks'        },
  { id:'prompting', mono:'03 / Prompting',title:'Prompting'       },
  { id:'library',   mono:'04 / Library',  title:'Practice Library'},
  { id:'agents',    mono:'05 / Agents',   title:'AI Agents'       },
  { id:'quiz',      mono:'06 / Quiz',     title:'Final Quiz'      },
]

// ── MODULE 1: BASICS ─────────────────────────────────────────
export const BASICS = {
  isItems: [
    { title:'Systems that learn patterns',    body:'AI analyzes large amounts of data to find patterns and make predictions, recommendations, or generate content based on what it has learned.' },
    { title:'Predictions & recommendations',  body:'It can forecast outcomes, suggest actions, and produce first drafts — but always requires human verification before use.' },
    { title:'A powerful productivity tool',   body:'When used with human oversight, AI significantly accelerates quality work across every practice area at Aon.' },
  ],
  isntItems: [
    { title:'Human judgment',                 body:'AI cannot weigh context, relationships, ethics, and professional nuance the way an experienced colleague can.' },
    { title:'Always correct',                 body:'AI frequently hallucinates — stating incorrect facts with total confidence and no warning signal. Always verify.' },
    { title:'Autonomous without oversight',   body:'Every AI output must be reviewed by a human before it informs any decision or reaches any client.' },
  ],
  types: [
    { icon:'📈', title:'Predictive AI',   tag:'Already widely used', tagDark:true, desc:'Forecasts outcomes from historical data. Claims trend analysis, renewal pricing models, portfolio risk scoring.' },
    { icon:'✍️', title:'Generative AI',  tag:'Your daily AI tool',   tagDark:true, desc:'Creates new content: text, summaries, tables, proposals. This is what most colleagues use day-to-day at Aon.' },
    { icon:'👁️', title:'Computer Vision', tag:'Emerging at Aon',     tagDark:false, desc:'Analyzes images and documents. Construction inspections, claims photos, document extraction and classification.' },
  ],
  useCases: [
    { icon:'📣', title:'Advisory & Distribution',  items:['Triage & inbox management','Executive summaries','Client communication drafts','Narrative generation'] },
    { icon:'📊', title:'Analytics & Optimization', items:['Trend analysis','Scenario modeling','Portfolio insights','Claims pattern detection'] },
    { icon:'⚙️', title:'Operations & Enablement',  items:['Meeting preparation','Knowledge retrieval','Content creation & formatting','Process automation support'] },
  ],
}

// ── MODULE 2: RISKS ──────────────────────────────────────────
export const RISKS = {
  categories: [
    { icon:'🔒', title:'Data Privacy & Cybersecurity', body:'Uploading sensitive or confidential client data to unapproved AI tools creates serious legal and reputational exposure. Only use Aon-sanctioned platforms — ever.' },
    { icon:'🌀', title:'Errors & Hallucinations',       body:'AI confidently states incorrect facts without any warning signal. Always verify numbers, names, dates, coverage details, and policy references before using any AI output.' },
    { icon:'⚖️', title:'Bias & Discrimination',         body:'AI reflects biases embedded in its training data. This can affect recommendations, especially in HR, benefits, and underwriting contexts — even when not immediately obvious.' },
    { icon:'📜', title:'Intellectual Property',         body:'AI output may include copyrighted material. Review all content carefully before publishing or sharing with any external parties.' },
    { icon:'📋', title:'Regulatory & Compliance Risk',  body:'Using AI for regulated advice without proper oversight creates legal and professional liability. Document all AI-assisted work in line with governance and compliance standards.' },
  ],
  neverDo: [
    { title:'Upload Confidential Data',        body:'Never upload client policy details, loss runs, or sensitive employee data to unapproved AI tools. Aon-sanctioned platforms only.' },
    { title:'Treat Output as Final Advice',    body:'AI-generated content is always a starting point. Every output requires human review before it informs decisions or reaches clients.' },
    { title:'Make Legal or Actuarial Calls',   body:'AI cannot make coverage, legal, or actuarial determinations. These require licensed professional judgment and accountability.' },
    { title:'Skip Documentation',             body:'All AI-assisted work must be documented. Governance requirements still apply regardless of how content was created.' },
    { title:'Copy-Paste Without Review',       body:'Blindly copying AI output into client deliverables risks errors, hallucinations, and significant E&O exposure.' },
    { title:'Use AI as the Decision-Maker',    body:'AI supports your thinking — it never replaces it. A human must own every decision, every output, every time.' },
  ],
  scenarios: [
    { badge:'Red Flag',     good:false, text:'A colleague exports a full client loss run and uploads it to a free public AI chatbot to get a quick renewal summary. The output looks great, so they share it with the client directly.', analysis:'Two violations in one scenario: (1) uploading confidential client data to an unapproved platform, and (2) sharing AI output without review. Use an Aon-sanctioned AI tool and manually verify the output before any client contact.' },
    { badge:'Red Flag',     good:false, text:"An AE sends a client an AI-generated email explaining their coverage. The email contains an incorrect deductible figure. The AE didn't review the output because \"it looked right.\"", analysis:"AI hallucinations are real and undetectable without human review. Errors in coverage details — even small ones — create E&O exposure and damage client trust. \"It looked right\" is not a defence. Every client-facing output must be verified before sending." },
    { badge:'Good Practice',good:true,  text:'A broker uses AI to draft three bullet points summarizing a complex policy endorsement, then has a senior colleague review and approve before sharing with the client.', analysis:'This follows the core principle: AI drafts, people review, people decide. The human adds the judgment layer that ensures accuracy, accountability, and client-appropriateness. This is exactly the right workflow.' },
  ],
}

// ── MODULE 3: PROMPTING ──────────────────────────────────────
export const PROMPTING = {
  formula: [
    { label:'ROLE',          hl:true,  desc:'Sets the lens AI uses to answer. Triggers vocabulary, tone, depth, and domain knowledge.', example:'Act as a senior P&C broker with 20 years of experience in construction risk.' },
    { label:'TASK',          hl:false, desc:'The specific action you want performed. Vague tasks produce vague outputs.', example:"Draft a placement strategy memo — not 'help me with placement'." },
    { label:'CONTEXT',       hl:false, desc:'Background the AI cannot guess. The more relevant context, the more tailored the output.', example:'Client is a $200M food manufacturer, self-insured for WC, first renewal.' },
    { label:'INPUTS',        hl:false, desc:'The actual data or content the AI should work from. Paste it in or describe it precisely.', example:'Here are the last 3 years of loss runs: [paste data]' },
    { label:'CONSTRAINTS',   hl:true,  desc:'Limits on what AI should or should not include. Prevents generic, out-of-scope responses.', example:'Do not recommend specific carriers. Do not give legal or coverage advice.' },
    { label:'OUTPUT FORMAT', hl:false, desc:'How the response should be structured. Explicit formatting dramatically improves usability.', example:'3 bullets per section. Plain English. Under 200 words. Use a table for comparison.' },
    { label:'QUALITY CHECK', hl:true,  desc:"Ask AI to flag assumptions and list items to verify. Adds a safety layer to every output.", example:'After the draft, list 3 facts assumed and 3 things I should verify before sending.' },
  ],
  dosAndDonts: [
    { do:'Be specific and structured in every prompt',                dont:'Use vague one-line prompts expecting great output' },
    { do:'Assign a clear role to AI before the task',                  dont:'Assume AI understands your intent or context' },
    { do:'Ask for a specific format explicitly',                        dont:'Accept the first output without reviewing or iterating' },
    { do:'Use AI to support and accelerate your thinking',              dont:'Use AI as the decision-maker on any matter' },
    { do:'Review all outputs critically before using',                  dont:'Copy/paste AI output into client materials without review' },
    { do:'Respect data and confidentiality rules at all times',         dont:'Input sensitive, restricted, or confidential data' },
  ],
  templates: [
    { icon:'🔍', title:'Clarify Before Answering',  use:"When you're not sure what you need",  prompt:'Help me with the following task. Before you produce an output, ask me the 5 key questions you need answered to do this well. Do not assume missing information.' },
    { icon:'📝', title:'First Draft + Verification', use:'For any deliverable needing sign-off', prompt:'Create a first draft of the following. Then provide a short verification checklist of facts, assumptions, and items I must confirm before using this output.' },
    { icon:'🏢', title:'Executive Simplifier',       use:'Before sharing with leadership',       prompt:'Rewrite the following content for a senior executive audience. Use plain English, short paragraphs, and clear takeaways. Preserve meaning exactly.' },
    { icon:'⚠️', title:'Risk & Compliance Check',   use:'Before finalizing any client draft',   prompt:'Review this draft and flag anything that could raise privacy, compliance, bias, or governance concerns. Do not rewrite unless I ask you to.' },
  ],
}

// ── MODULE 4: PRACTICE LIBRARY ───────────────────────────────
export const LIBRARY = [
  {
    id:'hb', icon:'🏥', label:'Health & Benefits',
    prompts: [
      { title:'Renewal Strategy Summary', text:'Act as a H&B consultant. Draft a renewal strategy summary for [CLIENT] covering medical, pharmacy, dental, and ancillary lines. Include cost drivers, utilization trends, stop-loss considerations, and three cost-containment options. Ask clarifying questions if data is missing.' },
      { title:'Executive Benefits Brief',  text:'Create a one-page executive summary explaining year-over-year benefits cost changes for [CLIENT]. Use plain English, define all acronyms, and include a section titled "What leadership should know." Keep it under 400 words.' },
      { title:'Plan Design Comparison',    text:'Build a comparison table showing employee impact, employer cost implications, and risk trade-offs between the following plan options: [LIST OPTIONS]. Present pros and cons only — do not recommend a specific option or give coverage advice.' },
      { title:'Employee Communication',    text:'Rewrite the following benefits content into an employee-friendly message at an eighth-grade reading level. Preserve meaning exactly. Avoid all insurance jargon. [PASTE CONTENT]' },
    ],
  },
  {
    id:'hc', icon:'👥', label:'Human Capital',
    prompts: [
      { title:'Workforce Risk Snapshot',         text:'Create a workforce risk snapshot for [CLIENT] covering: turnover, absenteeism, wage pressure, skills gaps, and regulatory exposure. Summarize in 5 bullet points with a brief explanation of each. Flag any area that requires additional data.' },
      { title:'Talent Strategy Talking Points',  text:'Generate six client-ready talking points on workforce trends and their business impact over the next 24 months. Avoid technical language. Keep each point to 2 sentences maximum. Do not make predictions — focus on trends with clear evidence.' },
      { title:'AI in HR Risk Guide',             text:'Create a discussion guide for AI use in recruiting or performance management. Include: governance considerations, bias risks specific to AI-assisted hiring, and three practical mitigation steps for each risk. Do not give legal advice.' },
      { title:'Board-Level HR Brief',            text:'Draft a one-page board briefing focused on strategic human capital risk for [CLIENT]. Use plain English. Clearly label all assumptions. Keep it under 350 words. Format: Executive Summary (3 bullets), Key Risks (3 items), Recommended Discussions.' },
    ],
  },
  {
    id:'pc', icon:'🏗️', label:'Property & Casualty',
    prompts: [
      { title:'Account Risk Summary',    text:'Create a concise account risk summary for [CLIENT] covering Property, GL, Auto, and WC. Include loss drivers, key exposures, and underwriting sensitivities. Format as a structured table followed by a 3-bullet executive summary. Do not give coverage recommendations.' },
      { title:'Loss Run Interpretation', text:'Act as a senior P&C broker. Translate the following loss runs into plain-English insights for a client meeting. Highlight key trends, anomalies, and renewal implications. Do not give coverage advice. Flag any data that appears incomplete or inconsistent. [PASTE LOSS RUNS]' },
      { title:'Market Strategy Outline', text:'Draft a placement strategy outline for [CLIENT] including: approach and positioning, key risk differentiators, objections underwriters are likely to raise, and required underwriting data still needed. Do not recommend specific carriers.' },
      { title:'Construction Risk Review',text:'Summarize the following construction project for an underwriting submission, covering: project scope and values, timeline and phasing, key hazards, subcontractor risk exposure, and expected risk mitigations. Flag any missing information. [PASTE PROJECT DETAILS]' },
    ],
  },
  {
    id:'broker', icon:'🤝', label:'Brokers & AEs',
    prompts: [
      { title:'Coverage Review & Gap Analysis', text:'Compare the following policies and identify all material coverage gaps, including sublimits, exclusions, and missing endorsements. Present as a table: Coverage Line | Current | Gap | Risk Level. Do not make specific coverage recommendations. [PASTE POLICY SUMMARIES]' },
      { title:'Submission Drafting',            text:'Rewrite the following submission to improve clarity for underwriters. Highlight key risk characteristics, loss history summary, and risk improvement initiatives. Keep it under 400 words. Do not add information not provided. [PASTE EXISTING SUBMISSION]' },
      { title:'Client Email — Premium Increase',text:'Draft a calm, professional client email explaining a [X]% premium increase. Tone: clear, advisory, and trust-preserving. Briefly explain market context. Do not give coverage advice. End with a call-to-action for a follow-up call. Under 120 words. List 2 assumptions you made.' },
      { title:'Claims Update in Plain English', text:'Translate the following technical claim update into clear, client-friendly language. Avoid insurance jargon. Be factual, calm, and concise. Do not speculate on outcomes. End with a "Next Steps" section. Under 150 words. [PASTE CLAIMS UPDATE]' },
    ],
  },
]

// ── MODULE 5: AGENTS ─────────────────────────────────────────
export const AGENTS = {
  comparison: [
    { aspect:'Starting point',   prompting:'Start from scratch every time',        agent:'Setup is already done for you' },
    { aspect:'Best for',         prompting:'Quick, one-off tasks',                  agent:'Repeat, client-facing, structured work' },
    { aspect:'Consistency',      prompting:'Results may vary',                      agent:'More consistent output every time' },
    { aspect:'Effort over time', prompting:'Same effort every time',                agent:'Less effort as usage grows' },
  ],
  canDo:   ['Drafting first versions','Summarizing information','Creating tables & bullet points','Preparing emails & talking points'],
  cantDo:  ['Make decisions','Give legal or actuarial advice','Provide coverage advice','Replace human judgment'],
  types: [
    { icon:'🏥', title:'Health & Benefits Agent', items:['Renewal summaries','Plan comparisons','Executive benefits briefs','Employee communications','Vendor & PBM questions'] },
    { icon:'👥', title:'Human Capital Agent',     items:['Workforce risk summaries','Talent strategy talking points','Engagement survey summaries','Board-level HR briefs','AI-in-HR discussion guides'] },
    { icon:'🏗️', title:'P&C Agent',              items:['Account risk summaries','Loss run interpretation','Market & placement prep','Construction risk reviews','Client-ready explanations'] },
    { icon:'🤝', title:'Brokers & AE Agent',     items:['Coverage reviews & gap analysis','Submission drafting','Market strategy prep','Renewal summaries','Claims updates in plain language'] },
  ],
}

// ── MODULE 6: QUIZ ───────────────────────────────────────────
export const QUIZ = [
  { q:'Which is a HIGH-RISK use of AI that you should AVOID?', opts:['Drafting a first version of a client email','Uploading client policy details to a free AI chatbot','Summarizing meeting notes into an agenda','Creating a comparison table of plan options'], correct:1, fb:'Never upload client policy details or sensitive data to unapproved platforms. Only use Aon-sanctioned AI tools for any client information. The other three options are all encouraged, low-risk uses.' },
  { q:'The 7-element prompt formula is designed to:', opts:['Limit what AI is allowed to say','Help AI produce more accurate, structured, and compliant outputs','Serve as an Aon compliance checklist','Train a custom AI model for your practice area'], correct:1, fb:'Each element adds specificity that helps AI produce more accurate, usable, and compliant outputs. The more structured the prompt, the better the output — and the less human rework required.' },
  { q:"A colleague says 'AI told me this coverage applies, so I'm using it in the proposal.' What's wrong?", opts:['Nothing — AI is reliable for coverage decisions','AI cannot make legal, actuarial, or coverage determinations','The colleague should have used a better-structured prompt','AI is too slow for time-sensitive coverage work'], correct:1, fb:'Coverage, legal, and actuarial determinations require licensed professional judgment and accountability. AI can help research or draft — but a qualified human must always own the final determination.' },
  { q:'What is the key practical difference between using an AI Agent and writing a regular prompt?', opts:['Agents are more expensive and require IT approval','Agents use the internet; prompting uses only offline data','Agents are pre-configured for repeat, structured work; prompts are better for one-off tasks','Agents can make autonomous decisions; prompts cannot'], correct:2, fb:'Agents have a pre-set purpose, rules, and structure — ideal for consistent, repeat tasks. Prompting is better for quick, one-time questions or novel tasks.' },
  { q:'Which action is SAFE and ENCOURAGED when using AI at Aon?', opts:['Making a final underwriting decision based on AI output','Summarizing a long document to create reviewed talking points','Skipping documentation because AI generated the content','Copying AI output directly into a client deliverable without review'], correct:1, fb:'Document summarization is a high-value, low-risk use of AI. The output still requires human review before use — but this is exactly the kind of task AI is best suited for.' },
  { q:'"AI drafts → _______ → _______"', opts:['AI refines → AI finalizes','Managers review → Clients receive','People review → People decide','Systems verify → Compliance approves'], correct:2, fb:'This is the non-negotiable principle behind all AI use at Aon. Every AI output must go through human review and judgment before it informs any decision or reaches any client — without exception.' },
  { q:'Which CONSTRAINT should you always include when asking AI about insurance coverage options?', opts:['"Respond in bullet points only"','"Do not give legal or coverage advice or recommend specific carriers"','"Keep the response under 100 words"','"Act as a senior underwriter"'], correct:1, fb:'This constraint keeps AI in the educational lane. Without it, AI may attempt to make coverage determinations, creating compliance and E&O exposure regardless of how well-intentioned the prompt was.' },
  { q:'In the "First Draft + Verification" template, what does the Quality Check step produce?', opts:['A second, automatically improved draft','A score out of 10 for the draft quality','A checklist of facts, assumptions, and items to verify before use','A compliance-cleared version of the draft'], correct:2, fb:'The quality check asks AI to produce a verification checklist — listing its assumptions and the specific facts you should confirm. This creates a targeted, efficient review process instead of checking everything blindly.' },
]
