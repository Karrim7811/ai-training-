import React, { useState, useEffect } from 'react'
import Splash from './components/Splash'
import { TopBar, NavTabs } from './components/Layout'
import { useProgress } from './hooks/useProgress'
import { MODULES } from './data/content'
import IntroPage     from './pages/IntroPage'
import BasicsPage    from './pages/BasicsPage'
import RisksPage     from './pages/RisksPage'
import PromptingPage from './pages/PromptingPage'
import LibraryPage   from './pages/LibraryPage'
import AgentsPage    from './pages/AgentsPage'
import QuizPage      from './pages/QuizPage'
import './styles/global.css'

const PAGE_MAP = {
  intro:     IntroPage,
  basics:    BasicsPage,
  risks:     RisksPage,
  prompting: PromptingPage,
  library:   LibraryPage,
  agents:    AgentsPage,
  quiz:      QuizPage,
}

const ORDER = MODULES.map(m => m.id)

export default function App() {
  const [launched, setLaunched]   = useState(false)
  const [currentId, setCurrentId] = useState('intro')
  const { progress, visit }       = useProgress()

  // mark current as visited on each nav
  useEffect(() => { if (launched) visit(currentId) }, [currentId, launched])

  function goTo(id) {
    setCurrentId(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goNext() {
    const idx = ORDER.indexOf(currentId)
    if (idx < ORDER.length - 1) {
      visit(currentId)
      goTo(ORDER[idx + 1])
    }
  }

  const PageComponent = PAGE_MAP[currentId] || IntroPage

  if (!launched) {
    return <Splash onLaunch={() => { setLaunched(true); visit('intro') }} />
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--black)' }}>
      <TopBar visited={progress.visited} />
      <NavTabs currentId={currentId} visited={progress.visited} onGo={goTo} />
      <main style={{ flex: 1, padding: '2.5rem 1.5rem 5rem', maxWidth: 960, width: '100%', margin: '0 auto' }}>
        <PageComponent
          key={currentId}
          onNext={goNext}
          onGoTo={goTo}
        />
      </main>
    </div>
  )
}
