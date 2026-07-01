import { getAllProductsWithParam } from '@/services/product.services';

import ProductCard from '../../_myComponants/ProductCard/ProductCard';
import { Product } from '@/interfaces/product.interface';
import NoProductsFound from '../../_myComponants/NoProductsFound/NoProductsFound';
import { getSpicificCategors } from '@/services/SubCategories.services';

import { Folder } from 'lucide-react';

export default async function subcategoriesProducts({params}:Promise<{id:string}>) {
  const {id} = await params
const { data }: { data: Product[] } = await getAllProductsWithParam('subcategory',id);
const dataOfSubCategors=  await getSpicificCategors(id)


return <>
 <div className="container pt-5 mx-auto">
  <div className="bg-green-500 rounded-xl p-4 mb-10">
  <div className="flex gap-6 items-center">
    
    {/* Image */}
    <div className="relative w-20 h-20 bg-green-300 flex items-center justify-center">
     <Folder size={70}></Folder>
    </div>

    {/* Text */}
    <div>
      <h2 className="text-white text-xl font-bold">
        {dataOfSubCategors.data?.name}
      </h2>
      <p className="text-white/80">
        Shop {dataOfSubCategors.data?.name} products
      </p>
    </div>

  </div>
</div>

     
{data.length> 0 ?     <>
      <h2 className="text-2xl border-solid border-slate-300 mb-5 text-gray-500">Showing {data.length} products</h2>


      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
         { data?.map((product)=> <ProductCard key={product._id} product={product} isProduct={true}/>)}
      </div>
      </>

 :
    
    
    <NoProductsFound></NoProductsFound>}

    </div>

</>


}