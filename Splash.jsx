import React, { useState } from 'react'

const S = {
  wrap: {
    position:'fixed', inset:0, zIndex:300,
    background:'var(--black)',
    display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
    padding:'2rem', overflow:'hidden',
  },
  scanline: {
    position:'absolute', left:0, right:0, height:'3px',
    background:'linear-gradient(90deg,transparent,var(--red),transparent)',
    animation:'scanline 4s linear infinite', opacity:.4, pointerEvents:'none',
  },
  grain: {
    position:'absolute', inset:0, pointerEvents:'none',
    background:'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,.012) 2px,rgba(255,255,255,.012) 4px)',
  },
  badge: {
    fontFamily:'var(--font-mono)', fontSize:'.65rem', letterSpacing:'4px',
    textTransform:'uppercase', color:'var(--red)',
    border:'1px solid rgba(204,0,0,.3)', padding:'.3rem .8rem', borderRadius:'2px',
    marginBottom:'1.5rem', background:'rgba(204,0,0,.06)',
    animation:'rise .8s var(--ease) both',
  },
  logo: {
    fontFamily:'var(--font-display)', fontSize:'clamp(4rem,10vw,8rem)',
    color:'var(--white)', letterSpacing:'.04em', lineHeight:1,
    animation:'flicker 4s ease infinite, rise 1s var(--ease) .1s both',
  },
  title: {
    fontFamily:'var(--font-display)', fontSize:'clamp(1.4rem,4vw,2.8rem)',
    color:'var(--light)', letterSpacing:'.06em',
    margin:'.4rem 0 .8rem',
    animation:'rise 1s var(--ease) .2s both',
  },
  sub: {
    fontSize:'.95rem', color:'var(--muted)', textAlign:'center',
    maxWidth:480, lineHeight:1.6,
    animation:'rise 1s var(--ease) .35s both',
  },
  divider: {
    width:60, height:2, background:'var(--red)', margin:'1.5rem auto',
    animation:'rise 1s var(--ease) .45s both',
  },
  modules: {
    display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'.5rem',
    maxWidth:520, marginBottom:'2rem',
    animation:'rise 1s var(--ease) .55s both',
  },
  modTag: {
    fontFamily:'var(--font-mono)', fontSize:'.6rem', letterSpacing:'1.5px',
    textTransform:'uppercase', color:'var(--silver)',
    background:'var(--panel)', border:'1px solid var(--line)',
    padding:'.25rem .7rem', borderRadius:'2px',
  },
}

const MODS = ['01 / AI Basics','02 / AI Risks','03 / Prompting','04 / Practice Library','05 / AI Agents','06 / Final Quiz']

export default function Splash({ onLaunch }) {
  const [leaving, setLeaving] = useState(false)

  function go() {
    setLeaving(true)
    setTimeout(onLaunch, 600)
  }

  return (
    <div style={{ ...S.wrap, opacity: leaving ? 0 : 1, transform: leaving ? 'scale(1.04)' : 'none', transition:'opacity .6s,transform .6s' }}>
      <div style={S.grain}/>
      <div style={S.scanline}/>
      <div style={S.badge}>Session 101 · AI Fundamentals</div>
      <div style={S.logo}>A<span style={{ color:'var(--red)' }}>O</span>N</div>
      <div style={S.title}>AI 101 Training</div>
      <p style={S.sub}>Understand AI, use it responsibly, and make it work for your practice — with the skills to do it right.</p>
      <div style={S.divider}/>
      <div style={S.modules}>
        {MODS.map(m => <span key={m} style={S.modTag}>{m}</span>)}
      </div>
      <button onClick={go} style={{
        background:'var(--red)', color:'var(--white)',
        padding:'.9rem 3.5rem', fontFamily:'var(--font-display)', fontSize:'1.2rem',
        letterSpacing:'.1em', borderRadius:'2px', border:'none', cursor:'pointer',
        animation:'rise 1s var(--ease) .65s both',
        transition:'background .2s, transform .15s, box-shadow .2s',
      }}
        onMouseEnter={e => { e.currentTarget.style.background='var(--red-dark)'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 30px var(--red-glow)' }}
        onMouseLeave={e => { e.currentTarget.style.background='var(--red)'; e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none' }}
      >
        BEGIN TRAINING →
      </button>
    </div>
  )
}
