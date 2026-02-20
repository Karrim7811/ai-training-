import React, { useState } from 'react'
import { PROMPTING } from '../data/content'
import { Eyebrow, ModTitle, Lead, SHead, Callout, Card, CardGrid, CompTable, CopyBtn, NavRow } from '../components/UI'

function LiveBuilder() {
  const FIELDS = [
    { key:'role',        label:'Role ✱',          ph:'e.g., senior P&C broker with 20 years of experience in construction risk' },
    { key:'task',        label:'Task ✱',           ph:'e.g., draft a placement strategy memo' },
    { key:'context',     label:'Context ✱',        ph:'e.g., client is a $200M food manufacturer, self-insured for WC, first renewal' },
    { key:'inputs',      label:'Inputs',           ph:'e.g., here are the last 3 years of loss runs: [paste data]' },
    { key:'constraints', label:'Constraints',      ph:'e.g., do not recommend specific carriers or give legal advice' },
    { key:'format',      label:'Output Format ✱',  ph:'e.g., 3 bullets per section, plain English, under 200 words' },
    { key:'qc',          label:'Quality Check',    ph:'e.g., list 3 facts assumed and 3 things I should verify before sending' },
  ]
  const [vals, setVals] = useState({})
  const [output, setOutput] = useState('')

  const filledCount = Object.values(vals).filter(v => v?.trim().length > 3).length
  const pct = Math.round((filledCount / 7) * 100)
  const scoreColor = pct < 40 ? '#CC0000' : pct < 70 ? 'var(--amber)' : 'var(--green)'

  function build() {
    const { role, task, context, inputs, constraints, format, qc } = vals
    let p = ''
    if (role)        p += `Act as ${role}.\n\n`
    if (task)        p += `Task: ${task}.\n\n`
    if (context)     p += `Context: ${context}.\n\n`
    if (inputs)      p += `Inputs: ${inputs}.\n\n`
    if (constraints) p += `Constraints: ${constraints}.\n\n`
    if (format)      p += `Output format: ${format}.\n\n`
    if (qc)          p += `Quality check: ${qc}.`
    setOutput(p.trim() || 'Fill in at least one field above.')
  }

  function clear() { setVals({}); setOutput('') }

  return (
    <div style={{ background:'var(--panel)', border:'1px solid var(--line)', borderRadius:'8px', padding:'1.75rem', margin:'1.5rem 0' }}>
      <div style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', letterSpacing:'.04em', color:'var(--white)', marginBottom:'.2rem' }}>Live Prompt Builder</div>
      <div style={{ fontSize:'.8rem', color:'var(--muted)', marginBottom:'1.25rem' }}>Fill in the 7 elements. The quality score updates live as you type. Required fields marked ✱</div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))', gap:'.9rem' }}>
        {FIELDS.slice(0,6).map(f => (
          <div key={f.key}>
            <label style={{ fontFamily:'var(--font-mono)', fontSize:'.6rem', letterSpacing:'2px', textTransform:'uppercase', color:'var(--red)', display:'block', marginBottom:'.3rem' }}>{f.label}</label>
            <input value={vals[f.key] || ''} onChange={e => setVals(p => ({ ...p, [f.key]: e.target.value }))}
              placeholder={f.ph}
              style={{ width:'100%', background:'rgba(255,255,255,.05)', border:'1px solid var(--line)', color:'var(--white)', padding:'.6rem .85rem', borderRadius:'4px', fontSize:'.85rem', transition:'border-color .2s', outline:'none' }}
              onFocus={e => e.target.style.borderColor='var(--red)'}
              onBlur={e => e.target.style.borderColor='var(--line)'}
            />
          </div>
        ))}
      </div>
      <div style={{ marginTop:'.9rem' }}>
        <label style={{ fontFamily:'var(--font-mono)', fontSize:'.6rem', letterSpacing:'2px', textTransform:'uppercase', color:'var(--red)', display:'block', marginBottom:'.3rem' }}>Quality Check</label>
        <input value={vals.qc || ''} onChange={e => setVals(p => ({ ...p, qc: e.target.value }))}
          placeholder={FIELDS[6].ph}
          style={{ width:'100%', background:'rgba(255,255,255,.05)', border:'1px solid var(--line)', color:'var(--white)', padding:'.6rem .85rem', borderRadius:'4px', fontSize:'.85rem', transition:'border-color .2s', outline:'none' }}
          onFocus={e => e.target.style.borderColor='var(--red)'}
          onBlur={e => e.target.style.borderColor='var(--line)'}
        />
      </div>

      {filledCount > 0 && (
        <div style={{ marginTop:'1rem' }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'.3rem' }}>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:'.62rem', letterSpacing:'1.5px', color:'var(--silver)' }}>Prompt Quality: {filledCount} / 7 elements</span>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:'.68rem', fontWeight:600, color:scoreColor }}>{pct}%</span>
          </div>
          <div style={{ height:3, background:'rgba(255,255,255,.1)', borderRadius:2, overflow:'hidden' }}>
            <div style={{ height:'100%', width:`${pct}%`, background:scoreColor, borderRadius:2, transition:'width .4s var(--ease)' }}/>
          </div>
        </div>
      )}

      <div style={{ display:'flex', gap:'.75rem', marginTop:'1.25rem' }}>
        <button onClick={build} style={{ background:'var(--red)', color:'var(--white)', padding:'.65rem 1.6rem', fontFamily:'var(--font-display)', fontSize:'1rem', letterSpacing:'.08em', borderRadius:'2px', border:'none', cursor:'pointer', transition:'background .2s' }}
          onMouseOver={e => e.currentTarget.style.background='var(--red-dark)'}
          onMouseOut={e => e.currentTarget.style.background='var(--red)'}
        >Build Prompt</button>
        <button onClick={clear} style={{ background:'transparent', color:'var(--muted)', border:'1px solid rgba(255,255,255,.15)', padding:'.65rem 1.2rem', fontFamily:'var(--font-mono)', fontSize:'.68rem', letterSpacing:'1px', textTransform:'uppercase', borderRadius:'2px', cursor:'pointer' }}>Clear</button>
      </div>

      <div style={{ marginTop:'1.25rem' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'.35rem' }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:'.6rem', letterSpacing:'2px', textTransform:'uppercase', color:'var(--muted)' }}>Assembled Prompt</span>
          {output && output !== 'Fill in at least one field above.' && <CopyBtn text={output} />}
        </div>
        <div style={{ background:'rgba(0,0,0,.4)', border:'1px solid var(--line)', borderRadius:'4px', padding:'1rem 1.1rem', fontFamily:'var(--font-mono)', fontSize:'.82rem', color: output && output !== 'Fill in at least one field above.' ? '#AACCFF' : 'var(--muted)', minHeight:80, whiteSpace:'pre-wrap', lineHeight:1.65 }}>
          {output || 'Fill in the fields above and click Build Prompt...'}
        </div>
      </div>
    </div>
  )
}

export default function PromptingPage({ onNext }) {
  const dosRows = PROMPTING.dosAndDonts.map(r => [
    { text: r.do,   good: true },
    { text: r.dont, bad: true },
  ])

  return (
    <div className="anim-slideX">
      <Eyebrow>Module 03 — Prompting Fundamentals</Eyebrow>
      <ModTitle>The Art of<br/><span style={{ color:'var(--red)' }}>The Prompt</span></ModTitle>
      <Lead>The difference between a useless AI response and a client-ready draft is almost entirely about how you wrote the prompt. The formula is learnable. The results are immediate.</Lead>

      <SHead>The 7-Element Prompt Formula</SHead>
      <div style={{ border:'1px solid var(--line)', borderRadius:'var(--radius)', overflow:'hidden', marginBottom:'2rem' }}>
        {PROMPTING.formula.map((row, i) => (
          <div key={i} style={{ display:'grid', gridTemplateColumns:'130px 1fr',
            borderBottom: i < PROMPTING.formula.length-1 ? '1px solid var(--line)' : 'none',
            minHeight:58, transition:'background .15s',
          }}
            onMouseEnter={e => e.currentTarget.style.background='rgba(204,0,0,.05)'}
            onMouseLeave={e => e.currentTarget.style.background='transparent'}
          >
            <div style={{ background: row.hl ? 'var(--red)' : 'var(--panel)',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:'var(--font-mono)', fontSize:'.68rem', letterSpacing:'1.5px',
              textTransform:'uppercase', color:'var(--white)', fontWeight:500,
              textAlign:'center', padding:'.5rem', borderRight:'1px solid var(--line)' }}>
              {row.label}
            </div>
            <div style={{ padding:'.75rem 1rem' }}>
              <div style={{ fontSize:'.76rem', color:'var(--muted)', marginBottom:'.2rem' }}>{row.desc}</div>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:'.8rem', color:'var(--light)', fontStyle:'italic', lineHeight:1.5 }}>"{row.example}"</div>
            </div>
          </div>
        ))}
      </div>

      <SHead>Before & After: The Formula in Action</SHead>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1px', background:'var(--line)', borderRadius:'var(--radius)', overflow:'hidden', margin:'1.25rem 0' }}>
        <div style={{ background:'#150000', padding:'1.25rem' }}>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:'.6rem', letterSpacing:'2px', textTransform:'uppercase', color:'var(--red)', marginBottom:'.75rem', fontWeight:600 }}>✗ Weak Prompt — Missing 5 of 7 Elements</div>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:'.82rem', background:'rgba(255,255,255,.05)', padding:'.7rem .85rem', borderRadius:'4px', lineHeight:1.55, marginBottom:'.65rem', color:'var(--light)', fontStyle:'italic' }}>
            "Write an email about the premium increase for my client."
          </div>
          <div style={{ fontSize:'.83rem', color:'var(--silver)', lineHeight:1.6 }}>
            <strong style={{ color:'#FF8888' }}>Result:</strong> A generic 3-paragraph email about "rising market conditions" applicable to anyone. Heavy editing required. No built-in verification step.
          </div>
        </div>
        <div style={{ background:'#001510', padding:'1.25rem' }}>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:'.6rem', letterSpacing:'2px', textTransform:'uppercase', color:'var(--green)', marginBottom:'.75rem', fontWeight:600 }}>✓ Strong Prompt — All 7 Elements</div>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:'.82rem', background:'rgba(255,255,255,.05)', padding:'.7rem .85rem', borderRadius:'4px', lineHeight:1.55, marginBottom:'.65rem', color:'var(--light)', fontStyle:'italic' }}>
            "Act as a senior insurance AE. Draft a client email explaining a 22% property premium increase for a retail chain (8 locations, $15M TIV). Tone: calm, advisory. Under 120 words. End with 3 talking points for a follow-up call. List 2 assumptions you made."
          </div>
          <div style={{ fontSize:'.83rem', color:'var(--silver)', lineHeight:1.6 }}>
            <strong style={{ color:'var(--green)' }}>Result:</strong> A near-ready email tailored to the scenario, with talking points and a built-in verification checklist. Saves 15–20 minutes. Human review still required.
          </div>
        </div>
      </div>

      <SHead>Do's & Don'ts</SHead>
      <CompTable headers={['✓ DO','✗ DON\'T']} rows={dosRows} />

      <SHead>Live Prompt Builder</SHead>
      <LiveBuilder />

      <SHead>4 Starter Templates You Can Use Today</SHead>
      <CardGrid>
        {PROMPTING.templates.map((t, i) => (
          <Card key={i} style={{ overflow:'hidden', padding:0 }}>
            <div style={{ padding:'1rem 1.25rem', borderBottom:'1px solid var(--line)' }}>
              <div style={{ fontSize:'1.3rem', marginBottom:'.4rem' }}>{t.icon}</div>
              <div style={{ fontWeight:700, fontSize:'.95rem', color:'var(--white)', marginBottom:'.2rem' }}>{t.title}</div>
              <div style={{ fontSize:'.78rem', color:'var(--muted)', fontStyle:'italic' }}>When to use: {t.use}</div>
            </div>
            <div style={{ padding:'1rem 1.25rem', background:'rgba(0,0,0,.2)' }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:'.78rem', color:'var(--silver)', lineHeight:1.6, fontStyle:'italic', marginBottom:'.65rem' }}>"{t.prompt}"</div>
              <CopyBtn text={t.prompt} />
            </div>
          </Card>
        ))}
      </CardGrid>

      <NavRow label="Continue to Module 04: Practice Library →" onNext={onNext} />
    </div>
  )
}
