import { getAllProducts } from "@/services/product.services";

import ProductCard from './../_myComponants/ProductCard/ProductCard';

export default async function Home() {


  const allProduct = await getAllProducts()
  return (
    <>
    <div className="container pt-5 mx-auto">
      <h2 className="text-3xl border-solid border-slate-300">Featcherd Product</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
         {allProduct?.data.map((product)=> <ProductCard key={product._id} product={product} isProduct={true}/>)}
      </div>
    </div>
   
    </>
    

  )
}
