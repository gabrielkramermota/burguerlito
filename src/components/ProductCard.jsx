import { useState } from 'react'
import { toast } from 'sonner'
import { useCart } from '../context/CartContext'

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 260'%3E%3Crect fill='%231f1f1f' width='400' height='260'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%23a8a29e'%3EImagem em breve%3C/text%3E%3C/svg%3E"

const categoryLabels = { burgers: 'Lanche', combos: 'Combo', drinks: 'Bebida' }

function formatPrice(price) {
  return `R$ ${price.toFixed(2).replace('.', ',')}`
}

export default function ProductCard({ product, isOpen }) {
  const { addToCart } = useCart()
  const [imgSrc, setImgSrc] = useState(product.image)

  function handleAdd() {
    addToCart(product)
    toast.success('Adicionado ao carrinho', { description: product.name })
  }

  return (
    <div className="card-burger p-4 rounded-xl relative overflow-hidden">
      {product.promo && <div className="promo-badge">Promoção</div>}

      <div className="product-image relative w-full h-48 mb-4 rounded-lg overflow-hidden">
        <img
          src={imgSrc}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300"
          onError={() => setImgSrc(PLACEHOLDER)}
          loading="lazy"
        />
      </div>

      <div className="flex justify-between items-start mb-3">
        <span className="category-label">{categoryLabels[product.category] || 'Item'}</span>
        <div className="flex flex-col gap-1 items-end">
          {product.oldPrice && <div className="price-tag price-tag-old">{formatPrice(product.oldPrice)}</div>}
          <div className="price-tag">{formatPrice(product.price)}</div>
        </div>
      </div>

      <h3 className="subtitle text-lg mb-2 text-white font-bold">{product.name}</h3>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{product.description}</p>

      <button
        onClick={handleAdd}
        disabled={!isOpen}
        className={`btn-primary w-full py-2.5 rounded-lg text-white text-sm ${!isOpen ? 'opacity-40 cursor-not-allowed' : ''}`}
      >
        {isOpen ? 'Adicionar' : 'Fechado'}
      </button>
    </div>
  )
}
