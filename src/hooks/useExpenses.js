import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'smartspend.expenses'

function loadExpenses() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const createId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`

export function useExpenses() {
  const [expenses, setExpenses] = useState(loadExpenses)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses))
  }, [expenses])

  const addExpense = useCallback((expense) => {
    setExpenses((previous) => [{ id: createId(), ...expense }, ...previous])
  }, [])

  const deleteExpense = useCallback((id) => {
    setExpenses((previous) => previous.filter((expense) => expense.id !== id))
  }, [])

  return { expenses, addExpense, deleteExpense }
}
