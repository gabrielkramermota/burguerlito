import { useCart } from '../context/CartContext'

export default function Header({ onCartClick }) {
  const { itemCount } = useCart()

  return (
    <header className="site-header sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center gap-4">
        <div>
          <h1 className="title-burger text-2xl md:text-3xl font-black text-white">BURGUERLITO</h1>
          <p className="brand-subtitle text-xs md:text-sm mt-1 font-semibold">Simples, Rápido e Viciante</p>
        </div>

        <button onClick={onCartClick} aria-label="Abrir carrinho">
          <div className="btn-primary px-4 py-3 rounded-lg flex items-center gap-3 font-bold">
            <span>Carrinho</span>
            <span className="item-count">{itemCount}</span>
          </div>
        </button>
      </div>
    </header>
  )
}
