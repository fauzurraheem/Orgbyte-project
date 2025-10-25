import { Product } from '@/types/products'
import Image from 'next/image'
import React from 'react'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      key={product.id}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
    >
      <div className="relative h-64 bg-linear-to-br from-slate-100 to-slate-200 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="text-xs font-semibold text-indigo-600 uppercase mb-2">
          {product.category}
        </div>
        <h3 title={product.title} className="text-lg font-bold text-slate-900 mb-2 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-slate-900">
            ${product.price}
          </span>
          <button className="bg-linear-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
            View
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard