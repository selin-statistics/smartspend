import { getCategoryLabel } from '../constants/categories'
import { formatDate } from '../utils/date'
import { formatCurrency } from '../utils/currency'

export default function TransactionTable({ expenses, onDelete }) {
  const handleDelete = (expense) => {
    const confirmed = window.confirm(
      `"${expense.description}" harcamasını silmek istediğinize emin misiniz?`,
    )
    if (confirmed) onDelete(expense.id)
  }

  if (expenses.length === 0) {
    return (
      <div className="empty-state">
        <p>Henüz harcama yok. Yukarıdaki formdan ilk harcamanızı ekleyin.</p>
      </div>
    )
  }

  return (
    <div className="table-wrapper">
      <table className="transaction-table">
        <thead>
          <tr>
            <th scope="col">Tarih</th>
            <th scope="col">Açıklama</th>
            <th scope="col">Kategori</th>
            <th scope="col" className="cell-right">Tutar</th>
            <th scope="col">
              <span className="visually-hidden">İşlemler</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td data-label="Tarih">{formatDate(expense.date)}</td>
              <td data-label="Açıklama" className="cell-description">
                {expense.description}
              </td>
              <td data-label="Kategori">
                <span className="category-tag">{getCategoryLabel(expense.category)}</span>
              </td>
              <td data-label="Tutar" className="cell-right cell-amount">
                {formatCurrency(expense.amount)}
              </td>
              <td className="cell-action">
                <button
                  type="button"
                  className="btn-delete"
                  onClick={() => handleDelete(expense)}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
