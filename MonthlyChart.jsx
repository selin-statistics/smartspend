import { formatCurrency } from '../utils/currency'

export default function MonthlyChart({ data, currentKey }) {
  const maxTotal = Math.max(...data.map((month) => month.total), 1)

  return (
    <section className="panel">
      <h2 className="panel-title">Aylık Harcama Grafiği</h2>
      <p className="panel-subtitle">Son {data.length} ay</p>
      <div className="chart" role="img" aria-label="Aylık harcama grafiği">
        {data.map((month) => {
          const height = (month.total / maxTotal) * 100
          const isCurrent = month.key === currentKey
          return (
            <div className="chart-column" key={month.key}>
              <span className="chart-value">
                {month.total > 0 ? formatCurrency(month.total) : ''}
              </span>
              <div className="chart-track">
                <div
                  className={`chart-bar${isCurrent ? ' chart-bar--current' : ''}`}
                  style={{ height: `${height}%` }}
                  title={`${month.label}: ${formatCurrency(month.total)}`}
                />
              </div>
              <span className="chart-label">{month.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
