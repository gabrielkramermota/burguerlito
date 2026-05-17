export const WHATSAPP_NUMBER = '5514997366653'

export function sendToWhatsApp({ cart, total, selectedAddress, paymentMethod, comments }) {
  let msg = '*NOVO PEDIDO BURGUERLITO*\n'
  msg += '─────────────────────\n\n'
  if (selectedAddress?.name) {
    msg += `*CLIENTE:* ${selectedAddress.name}\n\n`
  }
  msg += '*ITENS DO PEDIDO:*\n\n'

  cart.forEach(item => {
    msg += `${item.name}\n`
    msg += `Quantidade: ${item.quantity}\n`
    msg += `Valor: R$ ${item.price.toFixed(2).replace('.', ',')}\n`
    msg += `Subtotal: R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n\n`
  })

  msg += '─────────────────────\n'
  msg += `*TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*\n`
  msg += '─────────────────────\n\n'

  if (selectedAddress) {
    msg += `*ENDEREÇO DE ENTREGA:*\n`
    msg += `${selectedAddress.house}\n`
    msg += `CEP: ${selectedAddress.cep}`
    if (selectedAddress.reference) msg += `\nReferência: ${selectedAddress.reference}`
    msg += '\n\n'
  }

  const paymentLabels = { pix: 'PIX', card: 'Cartão de Crédito/Débito', cash: 'Dinheiro' }
  if (paymentMethod) {
    msg += `*FORMA DE PAGAMENTO:*\n${paymentLabels[paymentMethod] || paymentMethod}\n\n`
  }

  if (comments) {
    msg += `*OBSERVAÇÕES:*\n${comments}\n\n`
  }

  msg += '_Pedido realizado pelo site Burguerlito_'

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
}

export function openWhatsAppContact() {
  const msg = encodeURIComponent('Olá! Gostaria de falar com a Burguerlito.')
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
}
