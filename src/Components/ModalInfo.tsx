import { FC } from 'react'

interface ModalInfoProps {
  isOpen: boolean
  onClose: () => void
}

const ModalInfo: FC<ModalInfoProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white text-nuvio-text rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-sm text-gray-600 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-2">¿Qué es Nuvio?</h2>
        <p className="text-sm">
          Nuvio es una plataforma de comercio local que conecta a consumidores con pequeños
          productores y artesanos, sin inventario propio. Una experiencia directa, ética y humana.
        </p>
      </div>
    </div>
  )
}

export default ModalInfo
