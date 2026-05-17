// Imagens servidas pela pasta /images (publicDir: 'images' no vite.config.js)
export const menuData = [
  // ===== LANCHES =====
  { id: 1, name: 'Smash Simples', price: 17.99, oldPrice: 22.90, category: 'burgers', image: '/smash-simples.png', description: 'Pão macio + carne smash + cheddar + molho especial' },
  { id: 2, name: 'Smash Duplo', price: 21.99, oldPrice: 27.90, category: 'burgers', image: '/smash-duplo.png', description: 'Pão macio + 2 carnes smash + cheddar duplo + molho especial' },
  { id: 3, name: 'X-Salada Smash', price: 19.99, oldPrice: 24.90, category: 'burgers', image: '/x-salada-smash.png', description: 'Carne smash + cheddar + alface + tomate + picles + molho especial' },

  // ===== COMBOS =====
  { id: 4, name: 'Combo Essencial', price: 21.90, oldPrice: 27.30, category: 'combos', image: '/combo-essencial-1.png', description: 'Smash Simples + Refrigerante 350ml' },
  { id: 5, name: 'Combo Duplo Brutal', price: 25.90, oldPrice: 31.30, category: 'combos', image: '/combo-duplo-brutal-2.png', description: 'Smash Duplo + Refrigerante 350ml' },
  { id: 6, name: 'Combo Fresh', price: 23.90, oldPrice: 29.30, category: 'combos', image: '/combo-fresh-3.png', description: 'X-Salada Smash + Refrigerante 350ml' },
  { id: 7, name: 'Combo Casal', price: 41.90, oldPrice: 54.90, category: 'combos', image: '/combo-casal-4.png', description: '2x Smash Simples + 2x Refrigerante 350ml' },
  { id: 8, name: 'Combo Casal Premium', price: 47.90, oldPrice: 61.90, category: 'combos', image: '/combo-casal-premium-5.png', description: '1x Smash Duplo + 1x X-Salada + 2x Refrigerante 350ml' },
  { id: 9, name: 'Combo Fome de Verdade', price: 33.90, oldPrice: 43.90, category: 'combos', image: '/combo-fome-de-verdade-6.png', description: '2x Smash Simples + 1x Refrigerante 350ml' },
  { id: 10, name: 'Combo Trio', price: 59.90, oldPrice: 72.90, category: 'combos', image: '/combo-trio-7.png', description: '3x Smash Simples + 3x Refrigerante 350ml' },

  // ===== BEBIDAS =====
  { id: 11, name: 'Água 500ml', price: 8.00, category: 'drinks', image: '/agua-500ml.png', description: 'Água mineral gelada' },
  { id: 12, name: 'Sprite 350ml', price: 8.00, category: 'drinks', image: '/refrigerante-sprite.png', description: 'Refrigerante de limão' },
  { id: 13, name: 'Fanta Laranja 350ml', price: 8.00, category: 'drinks', image: '/refrigerante-fanta-laranja.png', description: 'Refrigerante de laranja' },
  { id: 14, name: 'Pepsi 350ml', price: 8.00, oldPrice: 8.99, category: 'drinks', image: '/refrigerante-pepsi.png', description: 'Refrigerante Pepsi', promo: true },
  { id: 15, name: 'Fanta Uva 220ml', price: 6.50, oldPrice: 6.99, category: 'drinks', image: '/refrigerante-fanta-uva.png', description: 'Refrigerante de uva' },
]
