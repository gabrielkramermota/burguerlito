# Burguerlito — Cardápio Online

Cardápio digital da Burguerlito com carrinho, fluxo de checkout e envio de pedido pelo WhatsApp.

## Tecnologias

- React 18 + Vite
- Tailwind CSS
- Sonner (notificações)

## Estrutura

```
src/
├── App.jsx
├── data/menu.js              — produtos do cardápio
├── utils/whatsapp.js         — montagem da mensagem
├── utils/business.js         — lógica de horário
├── context/CartContext.jsx   — carrinho global
├── hooks/useAddresses.js     — endereços salvos
├── hooks/usePayment.js       — forma de pagamento
└── components/
    ├── Header, BusinessStatus, CategoryBar
    ├── ProductCard, ProductsGrid
    ├── CartModal
    └── checkout/
        ├── CheckoutModal
        ├── StepAddress
        ├── StepPayment
        └── StepConfirmation
images/                       — imagens dos produtos
```

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Personalização

**Número do WhatsApp** — `src/utils/whatsapp.js`:
```js
export const WHATSAPP_NUMBER = '5514997366653'
```

**Produtos** — `src/data/menu.js`:
```js
{ id: 16, name: 'Novo Produto', price: 19.99, category: 'burgers', image: '/novo-produto.png', description: '...' }
```

Categorias disponíveis: `burgers`, `combos`, `drinks`.

**Imagens** — coloque os arquivos na pasta `images/` na raiz. Elas são servidas como `/nome-do-arquivo.png`.

## Fluxo do pedido

1. Cliente adiciona produtos ao carrinho
2. Clica em **Fazer Pedido**
3. Preenche ou seleciona um endereço de entrega
4. Escolhe a forma de pagamento (PIX, Cartão ou Dinheiro)
5. Confirma o resumo
6. Pedido é enviado ao WhatsApp da Burguerlito com todas as informações

> O pagamento **não** é processado no site. É combinado diretamente via WhatsApp.

## Contato

WhatsApp: (14) 99736-6653

## Licença

Uso restrito. Veja o arquivo [LICENSE](./LICENSE).

---

Desenvolvido por **Kramer Software House**
