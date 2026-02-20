import React, { useState } from 'react'

/* ─── EYEBROW ────────────────────────────────────────────── */
export function Eyebrow({ children }) {
  return (
    <div style={{ fontFamily:'var(--font-mono)', fontSize:'.62rem', letterSpacing:'4px',
      textTransform:'uppercase', color:'var(--red)', marginBottom:'.5rem' }}>
      {children}
    </div>
  )
}

/* ─── MODULE TITLE ───────────────────────────────────────── */
export function ModTitle({ children }) {
  return (
    <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2.2rem,5vw,3.8rem)',
      letterSpacing:'.04em', lineHeight:1.05, color:'var(--white)', marginBottom:'.4rem' }}>
      {children}
    </h1>
  )
}

/* ─── SECTION HEAD ───────────────────────────────────────── */
export function SHead({ children, mt = '2.5rem' }) {
  return (
    <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.5rem', letterSpacing:'.04em',
      color:'var(--white)', margin:`${mt} 0 1rem` }}>
      {children}
    </h2>
  )
}

/* ─── LEAD TEXT ──────────────────────────────────────────── */
export function Lead({ children }) {
  return (
    <p style={{ fontSize:'1rem', color:'var(--silver)', lineHeight:1.7,
      maxWidth:640, marginBottom:'1.5rem' }}>
      {children}
    </p>
  )
}

/* ─── CALLOUT ────────────────────────────────────────────── */
export function Callout({ label, children, variant = 'red' }) {
  const colors = { red:'var(--red)', green:'var(--green)', amber:'var(--amber)' }
  const bgs    = { red:'var(--red-muted)', green:'var(--green-bg)', amber:'var(--amber-bg)' }
  const c = colors[variant] || colors.red
  const bg = bgs[variant]  || bgs.red
  return (
    <div style={{ borderLeft:`3px solid ${c}`, background:bg, padding:'1rem 1.25rem',
      borderRadius:'0 6px 6px 0', margin:'1.25rem 0' }}>
      {label && (
        <div style={{ fontFamily:'var(--font-mono)', fontSize:'.6rem', letterSpacing:'2px',
          textTransform:'uppercase', color:c, marginBottom:'.35rem' }}>{label}</div>
      )}
      <div style={{ fontSize:'.9rem', color:'var(--light)', lineHeight:1.65 }}>{children}</div>
    </div>
  )
}

/* ─── CARD ───────────────────────────────────────────────── */
export function Card({ children, style, redLeft }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ background:'var(--card)', border:`1px solid ${hov ? 'var(--red)' : 'var(--line)'}`,
        borderLeft: redLeft ? '3px solid var(--red)' : undefined,
        borderRadius:'var(--radius)', padding:'1.25rem',
        transform: hov ? 'translateY(-2px)' : 'none',
        boxShadow: hov ? '0 6px 24px rgba(0,0,0,.3)' : 'none',
        transition:'all .2s var(--ease)', ...style }}>
      {children}
    </div>
  )
}

/* ─── CARD GRID ──────────────────────────────────────────── */
export function CardGrid({ children, min = 240 }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns:`repeat(auto-fill,minmax(${min}px,1fr))`,
      gap:'1rem', margin:'1rem 0' }}>
      {children}
    </div>
  )
}

/* ─── TWO-COL SPLIT ──────────────────────────────────────── */
export function TwoCol({ left, right, leftLabel, rightLabel, leftBg, rightBg, leftHead, rightHead }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1px',
      background:'var(--line)', borderRadius:'var(--radius)', overflow:'hidden', margin:'1.25rem 0' }}>
      <div style={{ background: leftBg || '#001A08' }}>
        <div style={{ background: leftHead || '#1a6b3c', padding:'.65rem 1.25rem',
          fontFamily:'var(--font-mono)', fontSize:'.68rem', letterSpacing:'2px',
          textTransform:'uppercase', color:'var(--white)', fontWeight:600 }}>
          {leftLabel}
        </div>
        <div style={{ padding:'1.25rem', display:'flex', flexDirection:'column', gap:'1rem' }}>
          {left}
        </div>
      </div>
      <div style={{ background: rightBg || '#1A0000' }}>
        <div style={{ background: rightHead || 'var(--red)', padding:'.65rem 1.25rem',
          fontFamily:'var(--font-mono)', fontSize:'.68rem', letterSpacing:'2px',
          textTransform:'uppercase', color:'var(--white)', fontWeight:600 }}>
          {rightLabel}
        </div>
        <div style={{ padding:'1.25rem', display:'flex', flexDirection:'column', gap:'1rem' }}>
          {right}
        </div>
      </div>
    </div>
  )
}

/* ─── GOLDEN RULE BANNER ─────────────────────────────────── */
export function GoldenRule({ sub }) {
  return (
    <div style={{ background:'var(--panel)', border:'1px solid var(--line)', borderRadius:'var(--radius)',
      padding:'1.25rem 1.5rem', display:'flex', alignItems:'center', gap:'1rem', margin:'1.5rem 0' }}>
      <span style={{ fontSize:'1.4rem', flexShrink:0 }}>⭐</span>
      <div>
        <div style={{ fontFamily:'var(--font-display)', fontSize:'1.15rem', letterSpacing:'.03em',
          color:'var(--white)', fontStyle:'italic' }}>
          "AI drafts. People review. People decide."
        </div>
        {sub && <div style={{ fontSize:'.8rem', color:'var(--muted)', marginTop:'.2rem' }}>{sub}</div>}
      </div>
    </div>
  )
}

/* ─── PRIMARY BUTTON ─────────────────────────────────────── */
export function Btn({ children, onClick, style, disabled }) {
  const [hov, setHov] = useState(false)
  return (
    <button onClick={onClick} disabled={disabled}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: disabled ? 'var(--mid)' : hov ? 'var(--red-dark)' : 'var(--red)',
        color: disabled ? 'var(--muted)' : 'var(--white)',
        padding:'.75rem 2.5rem', fontFamily:'var(--font-display)', fontSize:'1.1rem',
        letterSpacing:'.08em', borderRadius:'2px', cursor: disabled ? 'not-allowed' : 'pointer',
        transform: hov && !disabled ? 'translateY(-1px)' : 'none',
        boxShadow: hov && !disabled ? '0 6px 20px var(--red-glow)' : 'none',
        transition:'all .2s var(--ease)', ...style }}>
      {children}
    </button>
  )
}

/* ─── GHOST BUTTON ───────────────────────────────────────── */
export function GhostBtn({ children, onClick }) {
  const [hov, setHov] = useState(false)
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background:'transparent', color: hov ? 'var(--white)' : 'var(--muted)',
        border:`1px solid ${hov ? 'var(--mid)' : 'var(--line)'}`, padding:'.7rem 1.5rem',
        fontFamily:'var(--font-mono)', fontSize:'.68rem', letterSpacing:'2px',
        textTransform:'uppercase', borderRadius:'2px', transition:'all .15s' }}>
      {children}
    </button>
  )
}

/* ─── COPY BUTTON ────────────────────────────────────────── */
export function CopyBtn({ text, label = 'Copy', style }) {
  const [ok, setOk] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setOk(true); setTimeout(() => setOk(false), 1800)
    })
  }
  return (
    <button onClick={copy} style={{
      background: ok ? 'rgba(34,197,94,.15)' : 'rgba(255,255,255,.07)',
      border: `1px solid ${ok ? 'var(--green)' : 'rgba(255,255,255,.15)'}`,
      color: ok ? 'var(--green)' : 'var(--silver)',
      padding:'.28rem .75rem', fontFamily:'var(--font-mono)', fontSize:'.62rem',
      letterSpacing:'1.5px', textTransform:'uppercase', borderRadius:'3px',
      transition:'all .15s', cursor:'pointer', ...style }}>
      {ok ? '✓ Copied' : label}
    </button>
  )
}

/* ─── COMP TABLE ─────────────────────────────────────────── */
export function CompTable({ headers, rows }) {
  return (
    <table style={{ width:'100%', borderCollapse:'collapse', margin:'1.25rem 0', fontSize:'.87rem' }}>
      <thead>
        <tr>
          {headers.map((h,i) => (
            <th key={i} style={{ background:'var(--panel)', padding:'.65rem 1rem', textAlign:'left',
              fontFamily:'var(--font-mono)', fontSize:'.62rem', letterSpacing:'1.5px',
              textTransform:'uppercase', color:'var(--silver)',
              borderBottom:'1px solid var(--line)' }}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ background: i%2===0 ? 'transparent' : 'rgba(255,255,255,.02)' }}>
            {row.map((cell, j) => (
              <td key={j} style={{ padding:'.6rem 1rem', borderBottom:'1px solid var(--line)',
                color: cell.good ? 'var(--green)' : cell.bad ? '#FF7777' : 'var(--silver)',
                fontWeight: (cell.good || cell.bad) ? 500 : 400, verticalAlign:'top' }}>
                {typeof cell === 'object' ? cell.text : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

/* ─── NAV ROW ────────────────────────────────────────────── */
export function NavRow({ label, onNext }) {
  return (
    <div style={{ display:'flex', justifyContent:'flex-end', marginTop:'2.5rem',
      paddingTop:'1.5rem', borderTop:'1px solid var(--line)' }}>
      <Btn onClick={onNext}>{label || 'Continue →'}</Btn>
    </div>
  )
}
