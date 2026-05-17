const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'burgers', label: 'Lanches' },
  { id: 'combos', label: 'Combos' },
  { id: 'drinks', label: 'Bebidas' },
]

export default function CategoryBar({ active, onChange }) {
  return (
    <div className="category-bar flex gap-3 mb-8 overflow-x-auto pb-4">
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`category-btn ${active === cat.id ? 'active' : ''}`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
