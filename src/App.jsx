import { useState } from 'react'
import { Toaster } from 'sonner'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import BusinessStatus from './components/BusinessStatus'
import CategoryBar from './components/CategoryBar'
import ProductsGrid from './components/ProductsGrid'
import CartModal from './components/CartModal'
import CheckoutModal from './components/checkout/CheckoutModal'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')

  function openCheckout() {
    setCartOpen(false)
    setCheckoutOpen(true)
  }

  function closeCheckout() {
    setCheckoutOpen(false)
    setCartOpen(true)
  }

  return (
    <CartProvider>
        <div className="site-shell min-h-screen flex flex-col">
          <Header onCartClick={() => setCartOpen(true)} />

          <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
            <BusinessStatus />
            <CategoryBar active={activeCategory} onChange={setActiveCategory} />
            <ProductsGrid category={activeCategory} />
          </main>

          <footer className="site-footer mt-12">
            <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-400 text-xs md:text-sm">
              <p>Burguerlito 2026. Sabor direto ao ponto. Sem frescura. Só vício.</p>
              <p className="footer-contact font-semibold mt-2">WhatsApp: (14) 99736-6653</p>
            </div>
          </footer>
        </div>

        <Toaster theme="dark" richColors position="top-right" />
        <WhatsAppFloat />

        {cartOpen && (
          <CartModal onClose={() => setCartOpen(false)} onCheckout={openCheckout} />
        )}

        {checkoutOpen && (
          <CheckoutModal onClose={closeCheckout} />
        )}
    </CartProvider>
  )
}
