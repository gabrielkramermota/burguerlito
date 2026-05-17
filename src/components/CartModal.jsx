import { useState } from 'react'
import { useCart } from '../context/CartContext'

function formatPrice(price) {
  return `R$ ${price.toFixed(2).replace('.', ',')}`
}

export default function CartModal({ onClose, onCheckout }) {
  const { cart, removeFromCart, updateQuantity, total } = useCart()
  const [comments, setComments] = useState(() => localStorage.getItem('burguerlito_comments') || '')

  function handleCommentsChange(e) {
    setComments(e.target.value)
    localStorage.setItem('burguerlito_comments', e.target.value)
  }

  return (
    <div className="fixed inset-0 modal-overlay z-50 flex items-end md:items-center justify-end">
      <div className="modal-content w-full md:w-96 h-screen md:h-auto md:rounded-lg md:mr-4 rounded-t-lg flex flex-col">
        <div className="cart-header p-6 flex justify-between items-center">
          <h2 className="title-burger text-2xl font-bold text-white">Seu Pedido</h2>
          <button onClick={onClose} className="close-cart-btn transition">Fechar</button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center text-gray-400 py-12 text-sm">Seu carrinho está vazio.</div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-line flex gap-3 p-4 rounded-lg items-center">
                <div className="flex-1">
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="footer-contact font-semibold">{formatPrice(item.price)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn flex items-center justify-center font-bold"
                  >-</button>
                  <span className="w-6 text-center font-bold text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn quantity-btn-add flex items-center justify-center font-bold"
                  >+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-item-btn transition">
                  Remover
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-summary p-6 space-y-4">
          <div className="flex justify-between items-center text-lg font-bold">
            <span className="text-white">Total:</span>
            <span className="total-price text-2xl font-black">{formatPrice(total)}</span>
          </div>

          <textarea
            value={comments}
            onChange={handleCommentsChange}
            placeholder="Observações do pedido (ex: sem cebola, extra maionese...)"
            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition resize-none"
            rows={3}
          />

          <button
            onClick={onCheckout}
            disabled={cart.length === 0}
            className="btn-primary w-full py-3 rounded-lg text-white font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Fazer Pedido
          </button>

          <button onClick={onClose} className="btn-secondary w-full py-2 rounded-lg transition font-semibold">
            Continuar Comprando
          </button>
        </div>
      </div>
    </div>
  )
}
