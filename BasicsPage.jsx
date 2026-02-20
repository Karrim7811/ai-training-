import React from 'react'
import { BASICS } from '../data/content'
import { Eyebrow, ModTitle, Lead, SHead, Callout, Card, CardGrid, TwoCol, GoldenRule, NavRow } from '../components/UI'

export default function BasicsPage({ onNext }) {
  return (
    <div className="anim-slideX">
      <Eyebrow>Module 01 — AI Basics</Eyebrow>
      <ModTitle>What AI<br/><span style={{ color:'var(--red)' }}>Actually Is</span></ModTitle>
      <Lead>Before you can use AI well — or safely — you need to know exactly what it is and what it isn't. Most misuse starts with misunderstanding.</Lead>

      <SHead>What AI Is — and Isn't</SHead>
      <TwoCol
        leftLabel="✓  AI IS…"
        rightLabel="✗  AI IS NOT…"
        leftHead="#1a6b3c"
        rightHead="var(--red)"
        left={BASICS.isItems.map((item, i) => (
          <div key={i}>
            <div style={{ fontWeight:600, fontSize:'.9rem', color:'#88FFB8', marginBottom:'.2rem' }}>{item.title}</div>
            <div style={{ fontSize:'.84rem', color:'var(--silver)', lineHeight:1.55 }}>{item.body}</div>
          </div>
        ))}
        right={BASICS.isntItems.map((item, i) => (
          <div key={i}>
            <div style={{ fontWeight:600, fontSize:'.9rem', color:'#FF8888', marginBottom:'.2rem' }}>{item.title}</div>
            <div style={{ fontSize:'.84rem', color:'var(--silver)', lineHeight:1.55 }}>{item.body}</div>
          </div>
        ))}
      />

      <SHead>Three Relevant AI Types for Aon</SHead>
      <CardGrid>
        {BASICS.types.map((t, i) => (
          <Card key={i}>
            <div style={{ fontSize:'2rem', marginBottom:'.65rem', lineHeight:1 }}>{t.icon}</div>
            <div style={{ fontWeight:600, fontSize:'.95rem', color:'var(--white)', marginBottom:'.3rem' }}>{t.title}</div>
            <div style={{ display:'inline-block', background: t.tagDark ? 'var(--red)' : 'var(--mid)', padding:'.15rem .5rem', borderRadius:2, fontFamily:'var(--font-mono)', fontSize:'.6rem', letterSpacing:'1px', textTransform:'uppercase', color:'var(--white)', margin:'.3rem 0 .4rem' }}>{t.tag}</div>
            <div style={{ fontSize:'.84rem', color:'var(--muted)', lineHeight:1.6 }}>{t.desc}</div>
          </Card>
        ))}
      </CardGrid>

      <SHead>Where AI Shows Up at Aon</SHead>
      <CardGrid>
        {BASICS.useCases.map((uc, i) => (
          <Card key={i}>
            <div style={{ fontSize:'1.5rem', marginBottom:'.5rem' }}>{uc.icon}</div>
            <div style={{ fontWeight:600, fontSize:'.95rem', color:'var(--white)', marginBottom:'.6rem' }}>{uc.title}</div>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'.3rem' }}>
              {uc.items.map((it, j) => (
                <li key={j} style={{ display:'flex', gap:'.5rem', fontSize:'.84rem', color:'var(--muted)' }}>
                  <span style={{ color:'var(--red)', flexShrink:0 }}>→</span>{it}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </CardGrid>

      <GoldenRule sub="Every AI output at Aon requires human review and approval before it reaches a client or informs a decision." />
      <NavRow label="Continue to Module 02: Risks →" onNext={onNext} />
    </div>
  )
}
