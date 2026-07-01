'use client'
import { getDecodedUserToken } from '@/lib/getUserToken';
import React from 'react'
import { toast } from 'sonner';
import { AddToWishList } from '../../Products/Product.action.AddToWishList';
import { useWishlist, WishlistContextType } from '../../_context/wishlistContext';
import { useRouter } from 'next/navigation';
export default function AddToWishListBtn({
  productId,

}: {
  productId: string;

}) {
const router = useRouter()
const {updateNumberOfWishlistItem} = (useWishlist() as WishlistContextType)
   async function handleAddToWishList() {
     const boolAddToWishList = await AddToWishList({
  productId,
 
})
     if (boolAddToWishList>0) {
        toast.success("Product added to wishlist successfully!",
            {richColors : true , position :'top-right'}
        );
        updateNumberOfWishlistItem(boolAddToWishList)
        } 
        else if (boolAddToWishList==undefined)
        {  toast.error("Failed to add product to wishlist. Please signin.",
              {richColors : true , position :'top-right'}
            );
             setTimeout(()=>{
         router.push('/Login')
        
        }
          ,2000)
          }
        else {
            toast.error("Failed to add product to wishlist. Please try again.",
              {richColors : true , position :'top-right'}
            );
        }
   }
  return (
    <div>
      <button 
        className="bg-white p-2 rounded-full shadow cursor-pointer hover:bg-green-600
        hover:scale-110 transition-all " 
        onClick={handleAddToWishList}
      >
        ❤️
      </button>
    </div>
  )
}
