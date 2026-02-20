import React, { useState } from 'react'
import { RISKS } from '../data/content'
import { Eyebrow, ModTitle, Lead, SHead, Callout, Card, CardGrid, NavRow } from '../components/UI'

function ScenarioCard({ s }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ background:'var(--card)', border:`1px solid ${open ? 'var(--line)' : 'var(--line)'}`,
      borderLeft:`3px solid ${s.good ? 'var(--green)' : 'var(--red)'}`,
      borderRadius:'0 var(--radius) var(--radius) 0', overflow:'hidden', marginBottom:'.75rem' }}>
      <div style={{ padding:'1rem 1.25rem', display:'flex', alignItems:'flex-start', gap:'.85rem' }}>
        <span style={{ background: s.good ? '#1a6b3c' : 'var(--red)', color:'var(--white)',
          fontFamily:'var(--font-mono)', fontSize:'.58rem', letterSpacing:'1.5px', fontWeight:700,
          textTransform:'uppercase', padding:'.2rem .55rem', borderRadius:'2px',
          flexShrink:0, marginTop:'.1rem' }}>
          {s.badge}
        </span>
        <span style={{ fontSize:'.9rem', color:'var(--silver)', lineHeight:1.65 }}>{s.text}</span>
      </div>
      <button onClick={() => setOpen(o => !o)} style={{
        padding:'0 1.25rem .9rem', fontFamily:'var(--font-mono)', fontSize:'.62rem',
        letterSpacing:'1.5px', textTransform:'uppercase', color: s.good ? 'var(--green)' : 'var(--red)',
        background:'none', border:'none', cursor:'pointer', transition:'color .15s',
      }}>
        {open ? '▲ Hide Analysis' : '▼ Show Analysis'}
      </button>
      {open && (
        <div style={{ padding:'.9rem 1.25rem 1.25rem', borderTop:'1px solid var(--line)',
          background: s.good ? 'rgba(34,197,94,.04)' : 'rgba(204,0,0,.06)' }}>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:'.6rem', letterSpacing:'2px',
            textTransform:'uppercase', color: s.good ? 'var(--green)' : 'var(--red)', marginBottom:'.4rem' }}>
            Analysis
          </div>
          <div style={{ fontSize:'.88rem', color:'var(--light)', lineHeight:1.65 }}>{s.analysis}</div>
        </div>
      )}
    </div>
  )
}

export default function RisksPage({ onNext }) {
  return (
    <div className="anim-slideX">
      <Eyebrow>Module 02 — AI Risks</Eyebrow>
      <ModTitle>What Can Go<br/><span style={{ color:'var(--red)' }}>Wrong</span></ModTitle>
      <Lead>Using AI carelessly creates real risk — for clients, for Aon, and for you personally. These aren't hypothetical: each risk category has caused real compliance incidents at firms across the industry.</Lead>

      <Callout label="Why This Matters" variant="amber">
        Knowing these risks protects you and your clients. <strong>Ignorance is not a defence</strong> — and AI-related compliance violations are treated the same as any other professional breach.
      </Callout>

      <SHead>The Five Core Risk Categories</SHead>
      {RISKS.categories.map((r, i) => (
        <div key={i} style={{ display:'grid', gridTemplateColumns:'40px 1fr', gap:'.75rem',
          alignItems:'start', background:'var(--card)', borderLeft:'3px solid var(--red)',
          borderRadius:'0 var(--radius) var(--radius) 0', padding:'1rem 1.25rem',
          marginBottom:'.6rem', transition:'background .15s',
        }}
          onMouseEnter={e => e.currentTarget.style.background='var(--mid)'}
          onMouseLeave={e => e.currentTarget.style.background='var(--card)'}
        >
          <span style={{ fontSize:'1.3rem', marginTop:'.05rem' }}>{r.icon}</span>
          <div>
            <div style={{ fontWeight:600, fontSize:'.92rem', color:'var(--white)', marginBottom:'.2rem' }}>{r.title}</div>
            <div style={{ fontSize:'.84rem', color:'var(--muted)', lineHeight:1.55 }}>{r.body}</div>
          </div>
        </div>
      ))}

      <SHead>What NOT To Do — Ever</SHead>
      <CardGrid>
        {RISKS.neverDo.map((item, i) => (
          <Card key={i} redLeft>
            <div style={{ fontSize:'1rem', marginBottom:'.4rem' }}>🚫</div>
            <div style={{ fontWeight:700, fontSize:'.9rem', color:'var(--red)', marginBottom:'.25rem' }}>{item.title}</div>
            <div style={{ fontSize:'.84rem', color:'var(--muted)', lineHeight:1.55 }}>{item.body}</div>
          </Card>
        ))}
      </CardGrid>

      <SHead>Real-World Scenarios — What Would You Do?</SHead>
      <p style={{ fontSize:'.92rem', color:'var(--muted)', marginBottom:'1rem' }}>
        Read each scenario. Decide what you think, then reveal the analysis.
      </p>
      {RISKS.scenarios.map((s, i) => <ScenarioCard key={i} s={s} />)}

      <NavRow label="Continue to Module 03: Prompting →" onNext={onNext} />
    </div>
  )
}
