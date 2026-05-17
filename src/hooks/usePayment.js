import { useState } from 'react'

export function usePayment() {
  const [paymentMethod, setPaymentMethodState] = useState(
    () => localStorage.getItem('burguerlito_paymentMethod') || null
  )

  function setPaymentMethod(method) {
    setPaymentMethodState(method)
    localStorage.setItem('burguerlito_paymentMethod', method)
  }

  return { paymentMethod, setPaymentMethod }
}
