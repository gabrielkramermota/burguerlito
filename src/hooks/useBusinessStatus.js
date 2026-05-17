import { useState, useEffect } from 'react'
import { getBusinessStatus } from '../utils/business'

export function useBusinessStatus() {
  const [status, setStatus] = useState(() => getBusinessStatus(new Date()))

  useEffect(() => {
    const interval = setInterval(() => setStatus(getBusinessStatus(new Date())), 60000)
    return () => clearInterval(interval)
  }, [])

  return status
}
