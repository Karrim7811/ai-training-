import React from 'react'
import { MODULES } from '../data/content'

export function TopBar({ visited }) {
  const total = MODULES.length - 1 // exclude intro
  const done  = visited.filter(id => id !== 'intro').length
  const pct   = Math.round((done / total) * 100)

  return (
    <div style={{
      position:'sticky', top:0, zIndex:100, height:'var(--nav-h)',
      background:'rgba(8,8,8,.92)', backdropFilter:'blur(16px)',
      borderBottom:'1px solid var(--line)',
      display:'flex', alignItems:'center', gap:'1rem', padding:'0 1.5rem',
    }}>
      <div style={{ fontFamily:'var(--font-display)', fontSize:'1.8rem', color:'var(--red)', letterSpacing:'.05em', lineHeight:1 }}>Aon</div>
      <div style={{ width:1, height:24, background:'var(--line)' }}/>
      <div style={{ fontFamily:'var(--font-mono)', fontSize:'.62rem', letterSpacing:'3px', textTransform:'uppercase', color:'var(--muted)' }}>AI 101 Training</div>
      <div style={{ flex:1 }}/>
      <div style={{ display:'flex', alignItems:'center', gap:'.75rem' }}>
        <div style={{ width:100, height:3, background:'var(--line)', borderRadius:2, overflow:'hidden' }}>
          <div style={{ height:'100%', width:`${pct}%`, background:'var(--red)', borderRadius:2, transition:'width .5s var(--ease)' }}/>
        </div>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'.65rem', color:'var(--red)', letterSpacing:'1px', whiteSpace:'nowrap' }}>
          {done}/{total}
        </span>
      </div>
    </div>
  )
}

export function NavTabs({ currentId, visited, onGo }) {
  return (
    <div style={{
      background:'var(--panel)', borderBottom:'1px solid var(--line)',
      display:'flex', overflowX:'auto', scrollbarWidth:'none',
    }}>
      {MODULES.map((m, i) => {
        const isActive = m.id === currentId
        const isDone   = visited.includes(m.id)
        return (
          <button key={m.id} onClick={() => onGo(m.id)} style={{
            padding:'.7rem 1.3rem', whiteSpace:'nowrap',
            fontFamily:'var(--font-mono)', fontSize:'.62rem', letterSpacing:'2px', textTransform:'uppercase',
            background:'transparent', border:'none', cursor:'pointer',
            borderBottom: isActive ? '2px solid var(--red)' : '2px solid transparent',
            marginBottom:'-1px',
            color: isActive ? 'var(--red)' : isDone ? 'var(--green)' : 'var(--muted)',
            transition:'color .2s, border-color .2s', flexShrink:0,
          }}
            onMouseEnter={e => { if(!isActive) e.currentTarget.style.color='var(--light)' }}
            onMouseLeave={e => { if(!isActive) e.currentTarget.style.color = isDone ? 'var(--green)' : 'var(--muted)' }}
          >
            {m.mono}
          </button>
        )
      })}
    </div>
  )
}
