import { monthLabel, shiftMonthKey } from './date'

export function getMonthSummary(expenses, monthKey) {
  return expenses.reduce(
    (summary, expense) => {
      if (expense.date.startsWith(monthKey)) {
        summary.total += expense.amount
        summary.count += 1
      }
      return summary
    },
    { total: 0, count: 0 },
  )
}

export function getRecentMonthTotals(expenses, currentKey, monthCount) {
  return Array.from({ length: monthCount }, (_, index) => {
    const key = shiftMonthKey(currentKey, index - (monthCount - 1))
    const { total } = getMonthSummary(expenses, key)
    return { key, label: monthLabel(key), total }
  })
}
