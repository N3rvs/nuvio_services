import { FC } from 'react'
import { IProductCard } from '../Models/model-ProductCards'


const ProductCard: FC<IProductCard> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-nuvio-light border border-nuvio-dark rounded-xl p-4 shadow hover:shadow-lg transition">
      <div className="bg-gray-200 h-40 rounded mb-4 overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : null}
      </div>
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  )
}

export default ProductCard
