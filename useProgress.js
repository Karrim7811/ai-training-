import { useState, useCallback } from 'react'

const KEY = 'aon_ai101_v2_progress'

function load() {
  try { const r = localStorage.getItem(KEY); if (r) return JSON.parse(r) } catch {}
  return { visited: [], quizScore: null, quizAnswers: {} }
}
function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)) } catch {} }

export function useProgress() {
  const [state, setState] = useState(load)

  const visit = useCallback((id) => {
    setState(prev => {
      if (prev.visited.includes(id)) return prev
      const next = { ...prev, visited: [...prev.visited, id] }
      save(next); return next
    })
  }, [])

  const saveQuiz = useCallback((score, answers) => {
    setState(prev => {
      const next = { ...prev, quizScore: score, quizAnswers: answers,
        visited: prev.visited.includes('quiz') ? prev.visited : [...prev.visited, 'quiz'] }
      save(next); return next
    })
  }, [])

  const reset = useCallback(() => {
    const fresh = { visited: [], quizScore: null, quizAnswers: {} }
    save(fresh); setState(fresh)
  }, [])

  return { progress: state, visit, saveQuiz, reset }
}
