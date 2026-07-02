import { getAllProductsWithParam } from '@/services/product.services'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'


export default async function RelatedProducts({categoryId}:{categoryId:string}) {
    const RelatedProducts = await getAllProductsWithParam('category[in]',categoryId)
    
  return (
  <><div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {RelatedProducts.data.map(p => <ProductCard key={p._id} product={p} />)}
            <br></br>
         
        </div></>
  )
}
