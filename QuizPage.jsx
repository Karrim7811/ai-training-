import React, { useState } from 'react'
import { QUIZ } from '../data/content'
import { Eyebrow, ModTitle, Lead, Btn, GhostBtn } from '../components/UI'

function QuizQuestion({ q, idx, onAnswer, answered }) {
  const [selected, setSelected] = useState(null)

  function pick(optIdx) {
    if (selected !== null) return
    setSelected(optIdx)
    onAnswer(optIdx === q.correct)
  }

  function optStyle(j) {
    const base = {
      background: 'rgba(255,255,255,.04)', border: '1px solid var(--line)',
      padding: '.7rem 1rem', borderRadius: '4px',
      fontSize: '.88rem', color: 'var(--silver)', textAlign: 'left',
      width: '100%', display: 'block', cursor: selected !== null ? 'default' : 'pointer',
      transition: 'all .15s', marginBottom: '.45rem',
      fontFamily: 'var(--font-body)',
    }
    if (selected === null) return base
    if (j === q.correct) return { ...base, borderColor: 'var(--green)', background: 'var(--green-bg)', color: 'var(--green)', fontWeight: 500 }
    if (j === selected && j !== q.correct) return { ...base, borderColor: 'var(--red)', background: 'rgba(204,0,0,.12)', color: '#FF7777' }
    return base
  }

  const isCorrect = selected === q.correct
  const answered_ = selected !== null

  return (
    <div style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: '6px', padding: '1.4rem', margin: '1.25rem 0' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '.5rem' }}>
        Question {idx + 1} of {QUIZ.length}
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', letterSpacing: '.02em', color: 'var(--white)', marginBottom: '1rem', lineHeight: 1.35 }}>
        {q.q}
      </div>
      <div>
        {q.opts.map((opt, j) => (
          <button key={j} onClick={() => pick(j)} style={optStyle(j)}
            onMouseEnter={e => { if (selected === null) { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.background = 'rgba(204,0,0,.08)'; e.currentTarget.style.color = 'var(--white)' } }}
            onMouseLeave={e => { if (selected === null) { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.background = 'rgba(255,255,255,.04)'; e.currentTarget.style.color = 'var(--silver)' } }}
          >
            {opt}
          </button>
        ))}
      </div>
      {answered_ && (
        <div style={{
          marginTop: '.75rem', padding: '.75rem 1rem', borderRadius: '4px', fontSize: '.85rem', lineHeight: 1.6,
          background: isCorrect ? 'var(--green-bg)' : 'rgba(204,0,0,.1)',
          color: isCorrect ? 'var(--green)' : '#FF9999',
          border: `1px solid ${isCorrect ? 'rgba(34,197,94,.3)' : 'rgba(204,0,0,.3)'}`,
        }}>
          {isCorrect ? '✓ Correct. ' : '✗ Not quite. '}{q.fb}
        </div>
      )}
    </div>
  )
}

function ResultScreen({ score, total, onRetake, onHome }) {
  const pct = score / total
  const tiers = [
    [0.50, 'Keep Practicing',    'Review the Risk and Prompting modules, then try again.',              '#CC0000'],
    [0.75, 'Good Foundation',    'Solid basics. Revisit any questions you missed to strengthen gaps.',   '#F59E0B'],
    [0.88, 'Strong Performance', "Nearly there. One more review of missed questions and you're set.",    '#22C55E'],
    [1.01, 'Mastery',            'Outstanding. You\'re ready to lead by example on AI use at Aon.',     '#22C55E'],
  ]
  const [, title, msg, color] = tiers.find(([t]) => pct < t) || tiers[tiers.length - 1]

  return (
    <div style={{ textAlign: 'center', padding: '3.5rem 1rem', animation: 'scaleIn .4s var(--ease)' }}>
      <div style={{
        width: 120, height: 120, borderRadius: '50%', background: 'var(--panel)',
        margin: '0 auto 1.5rem', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: -4, borderRadius: '50%',
          border: `2px solid ${color}`, animation: 'pulseRing 2s ease infinite',
        }} />
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', letterSpacing: '.04em', color, lineHeight: 1 }}>{score}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.65rem', color: 'var(--muted)', letterSpacing: '2px' }}>/ {total}</div>
      </div>

      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.65rem', letterSpacing: '3px', textTransform: 'uppercase', color, marginBottom: '.4rem' }}>
        {Math.round(pct * 100)}% CORRECT
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', letterSpacing: '.04em', color: 'var(--white)', marginBottom: '.5rem' }}>{title}</div>
      <div style={{ fontSize: '.95rem', color: 'var(--muted)', marginBottom: '2rem' }}>{msg}</div>

      <div style={{ height: 3, background: 'var(--line)', borderRadius: 2, overflow: 'hidden', maxWidth: 300, margin: '0 auto 2rem' }}>
        <div style={{ height: '100%', width: `${Math.round(pct * 100)}%`, background: color, borderRadius: 2, transition: 'width 1s var(--ease)' }} />
      </div>

      <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Btn onClick={onRetake}>Retake Quiz</Btn>
        <GhostBtn onClick={onHome}>Back to Home</GhostBtn>
      </div>

      <div style={{
        background: 'var(--panel)', border: '1px solid var(--line)', borderRadius: '6px',
        padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem',
        maxWidth: 500, margin: '2.5rem auto 0', textAlign: 'left',
      }}>
        <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>⭐</span>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', letterSpacing: '.03em', color: 'var(--white)', fontStyle: 'italic' }}>
            "AI drafts. People review. People decide."
          </div>
          <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginTop: '.2rem' }}>
            The principle that never changes — regardless of tool, task, or seniority.
          </div>
        </div>
      </div>
    </div>
  )
}

export default function QuizPage({ onGoTo }) {
  const [answers, setAnswers] = useState({})
  const [finished, setFinished] = useState(false)

  function handleAnswer(qIdx, correct) {
    const next = { ...answers, [qIdx]: correct }
    setAnswers(next)
    if (Object.keys(next).length === QUIZ.length) {
      setTimeout(() => setFinished(true), 700)
    }
  }

  const score = Object.values(answers).filter(Boolean).length

  function retake() {
    setAnswers({})
    setFinished(false)
  }

  if (finished) {
    return <ResultScreen score={score} total={QUIZ.length} onRetake={retake} onHome={() => onGoTo('intro')} />
  }

  return (
    <div className="anim-slideX">
      <Eyebrow>Module 06 — Final Knowledge Check</Eyebrow>
      <ModTitle>Prove Your<br /><span style={{ color: 'var(--red)' }}>Knowledge</span></ModTitle>
      <Lead>8 questions covering everything from AI basics to risks, prompting, and agents. Answer each question — instant feedback follows every response.</Lead>

      {QUIZ.map((q, i) => (
        <QuizQuestion key={i} q={q} idx={i} answered={i in answers} onAnswer={(correct) => handleAnswer(i, correct)} />
      ))}
    </div>
  )
}
