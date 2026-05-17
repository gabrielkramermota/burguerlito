const paymentLabels = { pix: '🌐 PIX', card: '💳 Cartão de Crédito/Débito', cash: '💵 Dinheiro' }

function formatPrice(price) {
  return `R$ ${price.toFixed(2).replace('.', ',')}`
}

export default function StepConfirmation({ address, paymentMethod, cart, total }) {
  const addressText = address
    ? [address.name, address.house, `CEP: ${address.cep}`, address.reference ? `Referência: ${address.reference}` : null]
        .filter(Boolean).join('\n')
    : '—'

  return (
    <div className="space-y-4">
      <h3 className="text-white font-semibold">Resumo do Pedido</h3>

      <div className="rounded-lg p-3 flex gap-3 items-start" style={{ background: 'rgba(217,130,33,0.08)', border: '1px solid rgba(217,130,33,0.3)' }}>
        <span className="text-lg leading-none mt-0.5">📲</span>
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--color-brand-soft)' }}>Pagamento não é feito no site</p>
          <p className="text-xs text-gray-400 mt-0.5">Seu pedido será enviado pelo WhatsApp com todas as informações. O pagamento é combinado diretamente com a gente.</p>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 space-y-3">
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Endereço</p>
          <p className="text-white font-semibold text-sm whitespace-pre-wrap">{addressText}</p>
        </div>

        <div className="border-t border-gray-700 pt-3">
          <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Pagamento</p>
          <p className="text-white font-semibold text-sm">{paymentLabels[paymentMethod] || '—'}</p>
        </div>

        <div className="border-t border-gray-700 pt-3">
          <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Itens</p>
          {cart.map(item => (
            <p key={item.id} className="text-white text-sm">
              {item.quantity}x {item.name}
            </p>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-3">
          <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Total</p>
          <p className="total-price text-xl font-black">{formatPrice(total)}</p>
        </div>
      </div>
    </div>
  )
}
