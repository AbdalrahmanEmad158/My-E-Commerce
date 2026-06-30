import { Product } from "@/interfaces/getUserOrder.interface";
import { getAllProductsWithParam } from "@/services/product.services";
import ProductCard from "../../_myComponants/ProductCard/ProductCard";
import NoProductsFound from "../../_myComponants/NoProductsFound/NoProductsFound";
import { getSpecificBrand } from "@/services/brands.services";
import Image from "next/image";

export default async function page({params}:Promise<{id:string}>) {
  const {id} = await params
const { data }: { data: Product[] } = await getAllProductsWithParam('brand',id);
const dataOfBrand = await getSpecificBrand(id)
  console.log('data of Specific brands in haha',dataOfBrand)




return <>
 <div className="container pt-5 mx-auto">
  <div className="bg-green-500 rounded-xl p-4 mb-10">
  <div className="flex gap-6 items-center">
    
    {/* Image */}
    <div className="relative w-20 h-20 bg-green-300">
      <Image
        src={dataOfBrand.data?.image}
        alt={dataOfBrand.data?.name}
        fill
        className="object-contain"
      />
    </div>

    {/* Text */}
    <div>
      <h2 className="text-white text-xl font-bold">
        {dataOfBrand.data?.name}
      </h2>
      <p className="text-white/80">
        Shop {dataOfBrand.data?.name} products
      </p>
    </div>

  </div>
</div>

      <h2 className="text-2xl border-solid border-slate-300 mb-5 text-gray-500">Showing {data.length} products</h2>
{data.length> 0 ?     <>
     


      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
         { data?.map((product)=> <ProductCard key={product._id} product={product} isProduct={true}/>)}
      </div>
      </>

 :
    
    
    <NoProductsFound></NoProductsFound>}

    </div>

</>
}
