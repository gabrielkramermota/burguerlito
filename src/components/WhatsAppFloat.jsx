import { openWhatsAppContact } from '../utils/whatsapp'

export default function WhatsAppFloat() {
  return (
    <button onClick={openWhatsAppContact} className="whatsapp-float" aria-label="Entrar em contato pelo WhatsApp">
      <i className="fab fa-whatsapp" />
    </button>
  )
}
