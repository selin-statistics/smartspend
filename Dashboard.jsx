import { formatCurrency } from '../utils/currency'

export default function Dashboard({ monthTotal, monthCount }) {
  return (
    <section className="summary-grid" aria-label="Aylık özet">
      <article className="stat-card stat-card--primary">
        <p className="stat-label">Bu Ay Toplam Harcama</p>
        <p className="stat-value">{formatCurrency(monthTotal)}</p>
      </article>
      <article className="stat-card">
        <p className="stat-label">Bu Ayki İşlem Sayısı</p>
        <p className="stat-value">{monthCount}</p>
      </article>
    </section>
  )
}
