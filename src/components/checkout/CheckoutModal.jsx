import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { useAddresses } from '../../hooks/useAddresses'
import { usePayment } from '../../hooks/usePayment'
import StepAddress from './StepAddress'
import StepPayment from './StepPayment'
import StepConfirmation from './StepConfirmation'
import { sendToWhatsApp } from '../../utils/whatsapp'

const steps = [
  { n: 1, label: 'Endereço' },
  { n: 2, label: 'Pagamento' },
  { n: 3, label: 'Confirmação' },
]

export default function CheckoutModal({ onClose }) {
  const { cart, total } = useCart()
  const { addresses, selectedAddress, addAddress, deleteAddress, selectAddress } = useAddresses()
  const { paymentMethod, setPaymentMethod } = usePayment()
  const [step, setStep] = useState(1)

  const comments = localStorage.getItem('burguerlito_comments') || ''

  function next() {
    if (step === 1) setStep(2)
    else if (step === 2) setStep(3)
    else { sendToWhatsApp({ cart, total, selectedAddress, paymentMethod, comments }); onClose() }
  }

  const nextLabel = step === 3 ? '📲 Enviar Pedido no WhatsApp' : 'Próximo'
  const nextDisabled = (step === 1 && !selectedAddress) || (step === 2 && !paymentMethod)

  return (
    <div className="fixed inset-0 modal-overlay z-50 flex items-end md:items-center justify-center">
      <div className="modal-content w-full md:w-96 md:rounded-lg rounded-t-lg flex flex-col max-h-screen">

        <div className="cart-header p-6 flex justify-between items-center">
          <h2 className="title-burger text-xl font-bold text-white">Seu Pedido</h2>
          <button onClick={onClose} className="close-cart-btn transition">Fechar</button>
        </div>

        {/* Indicador de passos */}
        <div className="px-6 pt-4 pb-2">
          <div className="flex justify-center items-center gap-2">
            {steps.flatMap(({ n, label }, i) => [
              <div key={`step-${n}`} className={`step-indicator ${step >= n ? 'active' : ''}`}>
                <span className="step-number">{n}</span>
                <span className="step-label">{label}</span>
              </div>,
              i < steps.length - 1 && <div key={`line-${n}`} className="step-line" />,
            ])}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {step === 1 && (
            <StepAddress
              addresses={addresses}
              selectedAddress={selectedAddress}
              onAdd={addAddress}
              onDelete={deleteAddress}
              onSelect={selectAddress}
            />
          )}
          {step === 2 && (
            <StepPayment selected={paymentMethod} onChange={setPaymentMethod} />
          )}
          {step === 3 && (
            <StepConfirmation
              address={selectedAddress}
              paymentMethod={paymentMethod}
              cart={cart}
              total={total}
            />
          )}
        </div>

        <div className="p-6 space-y-3 border-t border-gray-700">
          <button
            onClick={next}
            disabled={nextDisabled}
            className={`w-full py-3 rounded-lg text-white font-bold text-sm transition-opacity ${step === 3 ? 'btn-success' : 'btn-primary'} ${nextDisabled ? 'opacity-40 cursor-not-allowed' : ''}`}
          >
            {nextLabel}
          </button>
          {step > 1 && (
            <button onClick={() => setStep(s => s - 1)} className="btn-secondary w-full py-2 rounded-lg font-semibold text-sm">
              Voltar
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
