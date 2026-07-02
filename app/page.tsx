import { getAllProducts} from "@/services/product.services";

import ProductCard from "./_myComponants/ProductCard/ProductCard";
import { getAllCategors } from "@/services/Categories.services";
import CategorsCard from "./_myComponants/CategoriesCard/CategoriesCard";
import PromoSection from "./_myComponants/PromoSection/PromoSection";
import MySlider from "./_myComponants/MySlider/MySlider";
import p1 from '../finalProjectimages/p1.jpg'
import p2 from '../finalProjectimages/p2.jpg'
import p3 from '../finalProjectimages/p3.jpg'
import Link from "next/link";
import Features from "./_myComponants/FeatureCard/FeatureCard";


export default async function Home() {

async function getSafeProducts() {
  try {
    return await getAllProducts();
  } catch {
    return { data: [] };
  }
}



  const products = await getSafeProducts()
 
    const Categors = await getAllCategors()
    const CategorsData = Categors.data
  return (
    <>
  <div className="relative">

    <MySlider imagesList={[p1.src,p2.src,p3.src]} />

    {/* Overlay */}
    <div className="absolute inset-0 bg-green-600/60 pointer-events-none z-10">
     <div className="absolute inset-0 z-20 flex items-center">
        <div className="ml-20 text-white">
            <h1 className="text-2xl font-bold mb-4">
                Fresh 
                Products 
                <br></br>Delivered
            </h1>

            <Link href="/Products" className="mt-6 bg-white text-green-600! px-6 py-3 rounded-lg pointer-events-auto">
                Shop Now
            </Link>
        </div>
    </div>
    </div>

   

</div>

<Features></Features>
    
    <div className="container mx-auto">
      
      <p className="mt-5 mb-5 p-2 border-l-8 border-green-700 font-bold text-3xl">Shop By <span className="text-green-500 underline">Category</span></p>
        <div className="
              grid 
              grid-cols-2 
              sm:grid-cols-3 
              md:grid-cols-4 
              lg:grid-cols-6 
              gap-6
            ">
              {CategorsData.map((categorie) => (
                <CategorsCard key={categorie._id} categories={categorie} />
              ))}
            </div>

             <PromoSection />
       {products.data.length === 0
          ? <p>There is no Product</p>
          : 
          <> 



<div className="flex justify-between items-center">
<h2 className="mt-5 mb-5 border-solid p-2 border-l-8 border-green-700 font-bold text-3xl">
Featured <span className="text-green-500 underline">Products</span></h2>
 <Link href={'Products'} className="bg-green-200 p-2 hover:bg-green-500 hover:scale-110 transition-all"> view All Products </Link>
</div>
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {products.data.map(p => <ProductCard key={p._id} product={p} />)}
          <br></br>
       
      </div>
      </>
        }
    </div>
    </>
  )
}

