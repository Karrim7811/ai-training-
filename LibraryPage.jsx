import React, { useState } from 'react'
import { LIBRARY } from '../data/content'
import { Eyebrow, ModTitle, Lead, SHead, Callout, CopyBtn, NavRow } from '../components/UI'

function PromptItem({ p }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      background: 'var(--card)', border: '1px solid var(--line)', borderRadius: '5px',
      marginBottom: '.65rem', overflow: 'hidden', transition: 'border-color .2s',
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--mid)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--line)'}
    >
      <button onClick={() => setOpen(o => !o)} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '.85rem 1.1rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
      }}>
        <span style={{ fontWeight: 600, fontSize: '.9rem', color: 'var(--white)' }}>{p.title}</span>
        <span style={{ color: 'var(--red)', fontSize: '.8rem', marginLeft: '.5rem', flexShrink: 0, transition: 'transform .2s', transform: open ? 'rotate(180deg)' : 'none' }}>▼</span>
      </button>
      {open && (
        <div style={{ padding: '0 1.1rem 1.1rem' }}>
          <div style={{
            background: 'rgba(0,0,0,.35)', border: '1px solid var(--line)', borderRadius: '4px',
            padding: '.9rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '.8rem',
            color: 'var(--silver)', lineHeight: 1.65, marginBottom: '.65rem', fontStyle: 'italic',
          }}>
            {p.text}
          </div>
          <CopyBtn text={p.text} label="Copy Prompt" />
        </div>
      )}
    </div>
  )
}

export default function LibraryPage({ onNext }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="anim-slideX">
      <Eyebrow>Module 04 — Practice Prompt Library</Eyebrow>
      <ModTitle>Ready-to-Use<br /><span style={{ color: 'var(--red)' }}>Prompt Library</span></ModTitle>
      <Lead>16 fully-structured prompts across every Aon practice area. Click any prompt to expand and copy. Adapt the bracketed fields [like this] and paste directly into your AI tool.</Lead>

      <Callout label="Important" variant="amber">
        <strong>Always review AI output before use.</strong> These prompts are starting points — not finished deliverables. Verify all facts, numbers, and coverage references before sending anything to a client.
      </Callout>

      {/* Tab bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', margin: '1.5rem 0 1.25rem' }}>
        {LIBRARY.map((cat, i) => (
          <button key={cat.id} onClick={() => setActiveTab(i)} style={{
            background: activeTab === i ? 'var(--red)' : 'var(--panel)',
            border: `1px solid ${activeTab === i ? 'var(--red)' : 'var(--line)'}`,
            color: activeTab === i ? 'var(--white)' : 'var(--muted)',
            padding: '.45rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '.65rem',
            letterSpacing: '1.5px', textTransform: 'uppercase', borderRadius: '3px',
            cursor: 'pointer', transition: 'all .15s',
          }}
            onMouseEnter={e => { if (activeTab !== i) { e.currentTarget.style.color = 'var(--white)'; e.currentTarget.style.borderColor = 'var(--mid)' } }}
            onMouseLeave={e => { if (activeTab !== i) { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--line)' } }}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      {/* Active panel */}
      <div>
        {LIBRARY[activeTab].prompts.map((p, i) => (
          <PromptItem key={i} p={p} />
        ))}
      </div>

      <NavRow label="Continue to Module 05: AI Agents →" onNext={onNext} />
    </div>
  )
}
