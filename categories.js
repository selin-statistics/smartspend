export const CATEGORIES = [
  { id: 'market', label: 'Market' },
  { id: 'dining', label: 'Restoran & Kafe' },
  { id: 'transport', label: 'Ulaşım' },
  { id: 'bills', label: 'Faturalar' },
  { id: 'housing', label: 'Kira & Konut' },
  { id: 'health', label: 'Sağlık' },
  { id: 'shopping', label: 'Alışveriş' },
  { id: 'entertainment', label: 'Eğlence' },
  { id: 'other', label: 'Diğer' },
]

export const getCategoryLabel = (id) =>
  CATEGORIES.find((category) => category.id === id)?.label ?? 'Diğer'
