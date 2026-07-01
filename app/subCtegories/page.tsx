import { getAllSubCategors } from '@/services/SubCategories.services'

import SubCategoryCard from '../_myComponants/SubCategoryCard/SubCategoryCard'


export default async function subCtegories() {
  const subCategories =await getAllSubCategors()
  const dataSubCategories=subCategories.data
  return (
    <div className="container mx-auto py-10">
      
      <h2 className="text-xl font-bold mb-6">
        {dataSubCategories.length} Subcategories
      </h2>

      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6
      ">
        {dataSubCategories.map((item) => (
          <SubCategoryCard key={item._id} item={item} />
        ))}
      </div>

    </div>
  )
}
