import { CATEGORIES } from '../constants/categories'

export default function CategoryFilter({ selected, onSelect }) {
  const options = [{ id: 'all', label: 'Tümü' }, ...CATEGORIES]

  return (
    <div className="chip-group" role="group" aria-label="Kategoriye göre filtrele">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          className={`chip${selected === option.id ? ' chip--active' : ''}`}
          aria-pressed={selected === option.id}
          onClick={() => onSelect(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
