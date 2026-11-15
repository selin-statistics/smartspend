import { useState } from 'react'
import { CATEGORIES } from '../constants/categories'
import { today } from '../utils/date'

const getEmptyForm = () => ({
  description: '',
  amount: '',
  date: today(),
  category: '',
})

function validate(values) {
  const errors = {}
  const amount = Number(values.amount)

  if (!values.description.trim()) errors.description = 'Açıklama gerekli.'
  if (!values.amount || !Number.isFinite(amount) || amount <= 0) {
    errors.amount = 'Geçerli bir tutar girin.'
  }
  if (!values.date) errors.date = 'Tarih seçin.'
  if (!CATEGORIES.some((category) => category.id === values.category)) {
    errors.category = 'Kategori seçin.'
  }
  return errors
}

export default function ExpenseForm({ onAdd }) {
  const [values, setValues] = useState(getEmptyForm)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((previous) => ({ ...previous, [name]: value }))
    setErrors((previous) => ({ ...previous, [name]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    onAdd({
      description: values.description.trim(),
      amount: Math.round(Number(values.amount) * 100) / 100,
      date: values.date,
      category: values.category,
    })
    setValues(getEmptyForm())
  }

  return (
    <section className="panel">
      <h2 className="panel-title">Yeni Harcama</h2>
      <form className="expense-form" onSubmit={handleSubmit} noValidate>
        <Field label="Açıklama" error={errors.description}>
          <input
            name="description"
            type="text"
            placeholder="Örn. Haftalık market alışverişi"
            value={values.description}
            onChange={handleChange}
            maxLength={80}
          />
        </Field>

        <div className="form-row">
          <Field label="Tutar (₺)" error={errors.amount}>
            <input
              name="amount"
              type="number"
              inputMode="decimal"
              step="0.01"
              min="0.01"
              placeholder="0,00"
              value={values.amount}
              onChange={handleChange}
            />
          </Field>

          <Field label="Tarih" error={errors.date}>
            <input
              name="date"
              type="date"
              value={values.date}
              onChange={handleChange}
            />
          </Field>
        </div>

        <Field label="Kategori" error={errors.category}>
          <select name="category" value={values.category} onChange={handleChange}>
            <option value="" disabled>
              Kategori seçin
            </option>
            {CATEGORIES.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </Field>

        <button type="submit" className="btn-primary">
          Harcamayı Ekle
        </button>
      </form>
    </section>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      {children}
      {error && <span className="field-error">{error}</span>}
    </label>
  )
}
