import { useMemo, useState } from 'react'
import { useExpenses } from './hooks/useExpenses'
import Dashboard from './components/Dashboard'
import ExpenseForm from './components/ExpenseForm'
import CategoryFilter from './components/CategoryFilter'
import TransactionTable from './components/TransactionTable'
import MonthlyChart from './components/MonthlyChart'
import { currentMonthKey, monthTitle } from './utils/date'
import { getMonthSummary, getRecentMonthTotals } from './utils/expenseStats'
import './App.css'

const CHART_MONTHS = 6

export default function App() {
  const { expenses, addExpense, deleteExpense } = useExpenses()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const currentKey = currentMonthKey()

  const monthSummary = useMemo(
    () => getMonthSummary(expenses, currentKey),
    [expenses, currentKey],
  )

  const monthlyTotals = useMemo(
    () => getRecentMonthTotals(expenses, currentKey, CHART_MONTHS),
    [expenses, currentKey],
  )

  const visibleExpenses = useMemo(
    () =>
      expenses
        .filter(
          (expense) =>
            selectedCategory === 'all' || expense.category === selectedCategory,
        )
        .sort((a, b) => b.date.localeCompare(a.date)),
    [expenses, selectedCategory],
  )

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <p className="eyebrow">{monthTitle(currentKey)}</p>
          <h1 className="app-title">SmartSpend</h1>
        </div>
      </header>

      <main className="app-main">
        <Dashboard monthTotal={monthSummary.total} monthCount={monthSummary.count} />

        <div className="grid-two">
          <ExpenseForm onAdd={addExpense} />
          <MonthlyChart data={monthlyTotals} currentKey={currentKey} />
        </div>

        <section className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Harcamalar</h2>
            <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
          </div>
          <TransactionTable expenses={visibleExpenses} onDelete={deleteExpense} />
        </section>
      </main>
    </div>
  )
}
