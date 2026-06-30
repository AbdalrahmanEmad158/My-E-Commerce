import { getAllProductsWithParam } from '@/services/product.services';
import React from 'react'
import ProductCard from '../../_myComponants/ProductCard/ProductCard';
import { Product } from '@/interfaces/product.interface';
import { getSpecificCategory } from '@/services/Categories.services';
import Image from 'next/image';

export default async function categoriesProducts({params}:Promise<{id:string}>) {
  const {id} = await params
const { data }: { data: Product[] } = await getAllProductsWithParam('category[in]',id);
const dataOfCategorie = await getSpecificCategory(id)
  console.log('data of Specific Categorie in haha',dataOfCategorie)


return <>
    <div className="container pt-5 mx-auto">
      <div className="bg-green-500 rounded-xl p-4 mb-10">
        <div className="flex gap-6 items-center">
          
          {/* Image */}
          <div className="relative w-20 h-20 bg-green-300">
            <Image
              src={dataOfCategorie.data?.image}
              alt={dataOfCategorie.data?.name}
              fill
              className="object-contain"
            />
          </div>
      
          {/* Text */}
          <div>
            <h2 className="text-white text-xl font-bold">
              {dataOfCategorie.data?.name}
            </h2>
            <p className="text-white/80">
              Shop {dataOfCategorie.data?.name} products
            </p>
          </div>
      
        </div>
      </div>
      <h2 className="text-2xl border-solid border-slate-300 mb-5 text-gray-500">Showing {data.length} products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
         {data?.map((product)=> <ProductCard key={product._id} product={product} isProduct={true}/>)}
      </div>
    </div>
</>
}