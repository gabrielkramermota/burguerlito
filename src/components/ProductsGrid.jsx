import { menuData } from '../data/menu'
import ProductCard from './ProductCard'

export default function ProductsGrid({ category, isOpen }) {
  const filtered = category === 'all' ? menuData : menuData.filter(p => p.category === category)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map(product => (
        <ProductCard key={product.id} product={product} isOpen={isOpen} />
      ))}
    </div>
  )
}
