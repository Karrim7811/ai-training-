import React from 'react'
import { Eyebrow, ModTitle, Lead, Callout, Card, CardGrid, GoldenRule, NavRow } from '../components/UI'

const OVERVIEW = [
  { icon:'🤖', num:'01', title:'AI Basics',        body:'What AI is, what it isn\'t, the three types that matter at Aon, and where it already shows up in your work.' },
  { icon:'⚠️', num:'02', title:'AI Risks',          body:'Five core risk categories, real-world red flags, and the six things you must never do with AI — ever.' },
  { icon:'✍️', num:'03', title:'Prompting',         body:'The 7-element formula that turns vague requests into client-ready drafts. Plus a live prompt builder.' },
  { icon:'📋', num:'04', title:'Practice Library',  body:'16 ready-to-use prompts across H&B, Human Capital, P&C, and Brokers & AEs. Copy and adapt instantly.' },
  { icon:'🤝', num:'05', title:'AI Agents',         body:'What agents are, how they differ from regular prompting, and what practice-specific agents exist at Aon.' },
  { icon:'🏆', num:'06', title:'Final Quiz',        body:'8 questions to test your understanding. Instant feedback on every answer. Unlock after all 5 modules.' },
]

export default function IntroPage({ onNext }) {
  return (
    <div className="anim-slideX">
      <Eyebrow>Aon AI 101 Training</Eyebrow>
      <ModTitle>Welcome to<br/><span style={{ color:'var(--red)' }}>AI 101</span></ModTitle>
      <Lead>This training will help you understand what AI is, where it already shows up at Aon, and how to use it responsibly to accelerate your work — while protecting your clients and staying compliant.</Lead>

      <GoldenRule sub="This principle applies to every output, every tool, every time. It never changes." />

      <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.5rem', letterSpacing:'.04em', color:'var(--white)', margin:'2.5rem 0 1rem' }}>
        What You'll Learn in 6 Modules
      </h2>
      <CardGrid>
        {OVERVIEW.map((m, i) => (
          <Card key={i} style={{ animationDelay:`${i*.08}s` }} className="anim-rise">
            <div style={{ fontSize:'1.8rem', marginBottom:'.65rem', lineHeight:1 }}>{m.icon}</div>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:'.6rem', letterSpacing:'2px', textTransform:'uppercase', color:'var(--red)', marginBottom:'.2rem' }}>Module {m.num}</div>
            <div style={{ fontWeight:600, fontSize:'.95rem', color:'var(--white)', marginBottom:'.35rem' }}>{m.title}</div>
            <div style={{ fontSize:'.84rem', color:'var(--muted)', lineHeight:1.6 }}>{m.body}</div>
          </Card>
        ))}
      </CardGrid>

      <Callout label="How to Navigate" variant="red">
        Use the module tabs above to jump to any section. Complete each module in order — the quiz unlocks once you've worked through all five training modules. Your progress saves automatically in your browser.
      </Callout>

      <NavRow label="Start Module 01: AI Basics →" onNext={onNext} />
    </div>
  )
}
