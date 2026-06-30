import { getAllProducts } from "@/services/product.services";

import ProductCard from "./_myComponants/ProductCard/ProductCard";
import { getAllCategors } from "@/services/Categories.services";
import CategorsCard from "./_myComponants/CategoriesCard/CategoriesCard";
import PromoSection from "./_myComponants/PromoSection/PromoSection";
import MySlider from "./_myComponants/MySlider/MySlider";
import p1 from '../finalProjectimages/p1.jpg'
import p2 from '../finalProjectimages/p2.jpg'
import p3 from '../finalProjectimages/p3.jpg'

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
    <div className="bg-green-300 opacity-75"><MySlider imagesList={[p1.src,p2.src,p3.src]}/></div>
    
    <div className="container mx-auto">
      
      <p className="mt-5 mb-5">Shop By <span className="text-green-500">Category</span></p>
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
          <> <h2 className="mt-5 mb-5">
Featured <span className="text-green-500">Products</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {products.data.map(p => <ProductCard key={p._id} product={p} isHome={true} />)}
      </div>
      </>
        }
    </div>
    </>
  )
}

