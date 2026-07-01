
import { getUsetWishlist } from '@/services/getUserWishlist'
import Link from 'next/link'

import ProductWishlistTable from '../_myComponants/ProductWishlistTable/ProductWishlistTable'

export default async function wishlist() {
 const UserWishList =await getUsetWishlist()
 const numberOfUserWishList = UserWishList?.data?.length


  return (
      <div className="container py-8 space-y-5 m-auto">
      <div className="flex items-center justify-between">


        <div className="flex items-center gap-3">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="12" fill="#FEF2F2"/>
<path d="M23.4141 17.4023L24 18.2109L24.5859 17.4023C25.5625 16.0508 27.1328 15.25 28.8008 15.25C31.6719 15.25 34 17.5781 34 20.4492V20.5508C34 24.9336 28.5352 30.0234 25.6836 32.1992C25.1992 32.5664 24.6055 32.75 24 32.75C23.3945 32.75 22.7969 32.5703 22.3164 32.1992C19.4648 30.0234 14 24.9336 14 20.5508V20.4492C14 17.5781 16.3281 15.25 19.1992 15.25C20.8672 15.25 22.4375 16.0508 23.4141 17.4023Z" fill="#FB2C36"/>
</svg>



        <div>
            <h1 className="text-3xl font-bold">
        My Wishlist
      </h1>
      <span className="text-gray-400">{numberOfUserWishList} items saved</span>
        </div>


        </div>
              <Link
                        href="/"
                        className="text-green-700 hover:text-green-600 font-medium transition block">
       <div className="bg-green-50 hover:bg-green-200 flex justify-center rounded-2xl p-3"> 
  
         <span className="p-2 me-5 inline">
          <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2.625C6 1.79766 6.67266 1.125 7.5 1.125C8.32734 1.125 9 1.79766 9 2.625V3.75H6V2.625ZM4.875 3.75H3.375C2.75391 3.75 2.25 4.25391 2.25 4.875V9.75C2.25 10.9922 3.25781 12 4.5 12H10.5C11.7422 12 12.75 10.9922 12.75 9.75V4.875C12.75 4.25391 12.2461 3.75 11.625 3.75H10.125V2.625C10.125 1.17422 8.95078 0 7.5 0C6.04922 0 4.875 1.17422 4.875 2.625V3.75ZM5.4375 4.875C5.51137 4.875 5.58451 4.88955 5.65276 4.91782C5.721 4.94609 5.78301 4.98752 5.83525 5.03975C5.88748 5.09199 5.92891 5.154 5.95718 5.22224C5.98545 5.29049 6 5.36363 6 5.4375C6 5.51137 5.98545 5.58451 5.95718 5.65276C5.92891 5.721 5.88748 5.78301 5.83525 5.83525C5.78301 5.88748 5.721 5.92891 5.65276 5.95718C5.58451 5.98545 5.51137 6 5.4375 6C5.36363 6 5.29049 5.98545 5.22224 5.95718C5.154 5.92891 5.09199 5.88748 5.03975 5.83525C4.98752 5.78301 4.94609 5.721 4.91782 5.65276C4.88955 5.58451 4.875 5.51137 4.875 5.4375C4.875 5.36363 4.88955 5.29049 4.91782 5.22224C4.94609 5.154 4.98752 5.09199 5.03975 5.03975C5.09199 4.98752 5.154 4.94609 5.22224 4.91782C5.29049 4.88955 5.36363 4.875 5.4375 4.875ZM9 5.4375C9 5.28832 9.05926 5.14524 9.16475 5.03975C9.27024 4.93426 9.41332 4.875 9.5625 4.875C9.71168 4.875 9.85476 4.93426 9.96025 5.03975C10.0657 5.14524 10.125 5.28832 10.125 5.4375C10.125 5.58668 10.0657 5.72976 9.96025 5.83525C9.85476 5.94074 9.71168 6 9.5625 6C9.41332 6 9.27024 5.94074 9.16475 5.83525C9.05926 5.72976 9 5.58668 9 5.4375Z" fill="#16A34A"/>
</svg>
         </span>

          
                        
                      
                        Continue Shopping
                     
        </div>
         </Link>
      </div>

        <ProductWishlistTable
        products={UserWishList?.data}
          />
    </div>
  )
}
