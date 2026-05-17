const methods = [
  { id: 'pix', label: '🌐 PIX' },
  { id: 'card', label: '💳 Cartão de Crédito/Débito' },
  { id: 'cash', label: '💵 Dinheiro' },
]

export default function StepPayment({ selected, onChange }) {
  return (
    <div className="space-y-4">
      <h3 className="text-white font-semibold">Forma de Pagamento</h3>
      {methods.map(m => (
        <button
          key={m.id}
          onClick={() => onChange(m.id)}
          className={`w-full px-4 py-3 rounded-lg border-2 text-white font-semibold transition text-sm ${
            selected === m.id
              ? 'border-orange-500 bg-orange-500/10'
              : 'border-gray-600 bg-gray-900 hover:border-gray-500'
          }`}
        >
          {m.label}
        </button>
      ))}
    </div>
  )
}
