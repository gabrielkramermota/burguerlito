import { useState, useCallback } from 'react'

function loadAddresses() {
  try { return JSON.parse(localStorage.getItem('burguerlito_deliveries')) || [] }
  catch { return [] }
}

export function useAddresses() {
  const [addresses, setAddresses] = useState(loadAddresses)
  const [selectedId, setSelectedId] = useState(
    () => localStorage.getItem('burguerlito_selectedDelivery')
  )

  const addAddress = useCallback(({ name, house, cep, reference }) => {
    const address = { id: Date.now(), name, house, cep, reference }
    setAddresses(prev => {
      const next = [...prev, address]
      localStorage.setItem('burguerlito_deliveries', JSON.stringify(next))
      return next
    })
    const id = String(address.id)
    setSelectedId(id)
    localStorage.setItem('burguerlito_selectedDelivery', id)
  }, [])

  const deleteAddress = useCallback((id) => {
    setAddresses(prev => {
      const next = prev.filter(a => a.id !== id)
      localStorage.setItem('burguerlito_deliveries', JSON.stringify(next))
      return next
    })
    setSelectedId(prev => {
      if (String(prev) === String(id)) {
        localStorage.removeItem('burguerlito_selectedDelivery')
        return null
      }
      return prev
    })
  }, [])

  const selectAddress = useCallback((id) => {
    const sid = String(id)
    setSelectedId(sid)
    localStorage.setItem('burguerlito_selectedDelivery', sid)
  }, [])

  const selectedAddress = addresses.find(a => String(a.id) === String(selectedId)) || null

  return { addresses, selectedAddress, addAddress, deleteAddress, selectAddress }
}
