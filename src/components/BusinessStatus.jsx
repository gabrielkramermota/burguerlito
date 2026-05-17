import { useState, useEffect } from 'react'
import { getBusinessStatus } from '../utils/business'

export default function BusinessStatus() {
  const [status, setStatus] = useState(() => getBusinessStatus(new Date()))

  useEffect(() => {
    const interval = setInterval(() => setStatus(getBusinessStatus(new Date())), 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
    <div className="info-strip rounded-lg p-4 mb-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="hours-title text-sm font-bold text-white mb-3">Horários de atendimento</p>
          <div className="hours-list grid gap-2 text-sm">
            <div className="hours-row">
              <span>Quinta, sábado e domingo</span>
              <strong>18h30 às 00h</strong>
            </div>
            <div className="hours-row">
              <span>Sexta</span>
              <strong>12h às 17h e 18h30 às 00h</strong>
            </div>
          </div>
        </div>

        <div className={`status-pill ${status.open ? 'status-open' : 'status-closed'}`}>
          <span className={`status-dot animate-pulse ${status.open ? 'status-dot-open' : 'status-dot-closed'}`} />
          <span>{status.open ? 'Atendendo agora' : 'Fechado agora'}</span>
        </div>
      </div>
    </div>

    <div className="rounded-lg p-3 flex gap-3 items-start mb-8" style={{ background: 'rgba(217,130,33,0.08)', border: '1px solid rgba(217,130,33,0.3)' }}>
      <span className="text-lg leading-none mt-0.5">📲</span>
      <div>
        <p className="text-sm font-semibold" style={{ color: 'var(--color-brand-soft)' }}>Pagamento não é feito no site</p>
        <p className="text-xs text-gray-400 mt-0.5">Seu pedido é enviado pelo WhatsApp com todas as informações. O pagamento é combinado diretamente com a gente.</p>
      </div>
    </div>
    </>
  )
}
