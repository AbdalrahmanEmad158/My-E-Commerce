import { getAllBrands } from '@/services/brands.services'

import BrandCard from '../_myComponants/BrandCard/BrandCard'

export default async function Brands() {
  const brands = await getAllBrands()
  const brandsData = brands.data

  return (
        <div className="container mx-auto py-10">
      
      <div className="bg-green-500 rounded-xl p-4 mb-10">
  <div className="flex gap-6 items-center">
    
    {/* Image */}
    <div className="relative w-20 h-20 bg-green-300 flex items-center justify-center text-white">
    <svg data-prefix="fas" data-icon="tags" class="svg-inline--fa fa-tags text-3xl"
     role="img" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor"
      d="M401.2 39.1L549.4 189.4c27.7 28.1 27.7 73.1 0 101.2L393 448.9c-9.3 9.4-24.5 9.5-33.9 
      .2s-9.5-24.5-.2-33.9L515.3 256.8c9.2-9.3 9.2-24.4 0-33.7L367 72.9c-9.3-9.4-9.2-24.6 
      .2-33.9s24.6-9.2 33.9 .2zM32.1 229.5L32.1 96c0-35.3 28.7-64 64-64l133.5 0c17 0 33.3 6.7
       45.3 18.7l144 144c25 25 25 65.5 0 90.5L285.4 418.7c-25 25-65.5 
       25-90.5 0l-144-144c-12-12-18.7-28.3-18.7-45.3zm144-85.5a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z">
        </path></svg>
    </div>

    {/* Text */}
    <div>
      <h2 className="text-white text-2xl font-bold">
      Top Brands
      </h2>
      <p className="text-white/80">
       Shop from your favorite brands


      </p>
    </div>

  </div>
</div>

      <div className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4 
        lg:grid-cols-6 
        gap-6
      ">
        {brandsData.map((brand) => (
          <BrandCard key={brand._id} brand={brand} />
        ))}
      </div>

    </div>
  )
}
