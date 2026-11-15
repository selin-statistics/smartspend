const formatter = new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
})

export const formatCurrency = (value) => formatter.format(value)
