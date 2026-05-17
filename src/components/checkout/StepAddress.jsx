import { useState } from 'react'
import { toast } from 'sonner'

export default function StepAddress({ addresses, selectedAddress, onAdd, onDelete, onSelect }) {
  const [showForm, setShowForm] = useState(addresses.length === 0)
  const [form, setForm] = useState({ name: '', house: '', cep: '', reference: '' })
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: false }))
  }

  function handleAdd() {
    const newErrors = {
      name: !form.name.trim(),
      house: !form.house.trim(),
      cep: !form.cep.trim(),
    }
    if (newErrors.name || newErrors.house || newErrors.cep) {
      setErrors(newErrors)
      toast.error('Preencha os campos obrigatórios')
      return
    }
    onAdd(form)
    setForm({ name: '', house: '', cep: '', reference: '' })
    setErrors({})
    setShowForm(false)
  }

  const showingForm = showForm || addresses.length === 0

  function inputClass(field) {
    const base = 'w-full px-4 py-2 rounded-lg border bg-gray-900 text-white placeholder-gray-500 focus:outline-none transition text-sm'
    return errors[field]
      ? `${base} border-red-500 focus:border-red-400`
      : `${base} border-gray-600 focus:border-orange-500`
  }

  return (
    <div className="space-y-4">
      {addresses.length > 0 && (
        <button
          onClick={() => setShowForm(v => !v)}
          className="text-sm font-semibold transition"
          style={{ color: 'var(--color-brand-soft)' }}
        >
          {showForm ? '← Ver endereços salvos' : '+ Novo endereço'}
        </button>
      )}

      {showingForm && (
        <div className="space-y-3">
          <h3 className="text-white font-semibold">Novo Endereço</h3>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">
              Seu nome <span className="text-red-400">*</span>
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ex: João Silva"
              className={inputClass('name')}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">Nome é obrigatório</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">
              Endereço <span className="text-red-400">*</span>
            </label>
            <input
              name="house"
              value={form.house}
              onChange={handleChange}
              placeholder="Rua, número, apto (ex: Rua A, 123, apto 45)"
              className={inputClass('house')}
            />
            {errors.house && <p className="text-red-400 text-xs mt-1">Endereço é obrigatório</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">
              CEP <span className="text-red-400">*</span>
            </label>
            <input
              name="cep"
              value={form.cep}
              onChange={handleChange}
              placeholder="Ex: 12345-678"
              className={inputClass('cep')}
            />
            {errors.cep && <p className="text-red-400 text-xs mt-1">CEP é obrigatório</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">
              Ponto de referência
            </label>
            <textarea
              name="reference"
              value={form.reference}
              onChange={handleChange}
              placeholder="Ex: próximo ao mercado, portão azul..."
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition resize-none text-sm"
              rows={2}
            />
          </div>

          <button onClick={handleAdd} className="btn-primary w-full py-2 rounded-lg text-white font-bold text-sm">
            Adicionar Endereço
          </button>
        </div>
      )}

      {!showingForm && addresses.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-white font-semibold text-sm">Selecione um endereço</h3>
          {addresses.map(addr => (
            <div
              key={addr.id}
              onClick={() => onSelect(addr.id)}
              className={`address-item-checkout ${selectedAddress?.id === addr.id ? 'address-selected' : ''}`}
            >
              <div className="flex-1">
                <p className="text-white font-semibold">{addr.name}</p>
                <p className="text-gray-400 text-sm">{addr.house}</p>
                <p className="text-gray-500 text-xs">CEP: {addr.cep}{addr.reference ? ` • ${addr.reference}` : ''}</p>
              </div>
              <button
                onClick={e => { e.stopPropagation(); onDelete(addr.id) }}
                className="delete-address-btn"
              >✕</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
