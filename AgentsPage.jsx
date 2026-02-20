import React from 'react'
import { AGENTS } from '../data/content'
import { Eyebrow, ModTitle, Lead, SHead, Callout, Card, CardGrid, TwoCol, GoldenRule, CompTable, NavRow } from '../components/UI'

export default function AgentsPage({ onNext }) {
  const compRows = AGENTS.comparison.map(r => [
    r.aspect,
    { text: r.prompting, bad: r.prompting.includes('scratch') || r.prompting.includes('vary') || r.prompting.includes('Same effort') },
    { text: r.agent, good: true },
  ])

  return (
    <div className="anim-slideX">
      <Eyebrow>Module 05 — AI Agents</Eyebrow>
      <ModTitle>Smarter Than<br /><span style={{ color: 'var(--red)' }}>A Single Prompt</span></ModTitle>
      <Lead>An AI Agent is a pre-configured AI tool built for a specific, repeatable purpose. Think of it as a junior teammate who's already been trained for your workflow.</Lead>

      <Callout label="The Simple Definition" variant="red">
        <strong>"An agent is a tool that already knows its job."</strong> Instead of writing a new prompt every time, you feed the agent your specific inputs — client data, documents, requests — and it applies its pre-built instructions consistently every time.
      </Callout>

      <SHead>Agents vs. Regular Prompting</SHead>
      <CompTable
        headers={['Dimension', 'Regular Prompting', 'Using an Agent']}
        rows={compRows}
      />

      <SHead>What Agents Can and Cannot Do</SHead>
      <TwoCol
        leftLabel="✓ Agents HELP WITH"
        rightLabel="✗ Agents DO NOT"
        leftHead="#1a6b3c"
        rightHead="var(--red)"
        left={AGENTS.canDo.map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: '.5rem', alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)', fontSize: '.9rem', marginTop: '.1rem', flexShrink: 0 }}>✓</span>
            <span style={{ fontSize: '.88rem', color: 'var(--light)', lineHeight: 1.6 }}>{item}</span>
          </div>
        ))}
        right={AGENTS.cantDo.map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: '.5rem', alignItems: 'flex-start' }}>
            <span style={{ color: '#FF7777', fontFamily: 'var(--font-mono)', fontSize: '.9rem', marginTop: '.1rem', flexShrink: 0 }}>✗</span>
            <span style={{ fontSize: '.88rem', color: 'var(--light)', lineHeight: 1.6 }}>{item}</span>
          </div>
        ))}
      />

      <SHead>Practice-Specific Agents at Aon</SHead>
      <CardGrid>
        {AGENTS.types.map((agent, i) => (
          <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
            <div style={{ background: 'var(--panel)', padding: '1rem 1.25rem', borderBottom: '2px solid var(--red)' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '.35rem' }}>{agent.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '.04em', color: 'var(--white)' }}>{agent.title}</div>
            </div>
            <div style={{ padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
              {agent.items.map((item, j) => (
                <div key={j} style={{ display: 'flex', gap: '.5rem', fontSize: '.84rem', color: 'var(--muted)' }}>
                  <span style={{ color: 'var(--red)', flexShrink: 0 }}>→</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardGrid>

      <GoldenRule sub="This applies to every agent output, every time — without exception." />
      <NavRow label="Take the Final Quiz →" onNext={onNext} />
    </div>
  )
}
