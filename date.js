export function toIsoDate(date) {
  const localMidnightShift = date.getTimezoneOffset() * 60000
  return new Date(date.getTime() - localMidnightShift).toISOString().slice(0, 10)
}

export const today = () => toIsoDate(new Date())

export const currentMonthKey = () => today().slice(0, 7)

export function shiftMonthKey(key, delta) {
  const [year, month] = key.split('-').map(Number)
  const date = new Date(year, month - 1 + delta, 1)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
}

export const monthLabel = (key) =>
  new Date(`${key}-01T00:00:00`).toLocaleDateString('tr-TR', { month: 'short' })

export const monthTitle = (key) =>
  new Date(`${key}-01T00:00:00`).toLocaleDateString('tr-TR', {
    month: 'long',
    year: 'numeric',
  })

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
