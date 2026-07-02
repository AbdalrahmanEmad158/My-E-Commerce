'use client'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'

import { toast } from 'sonner'
import { removeFromWishlist } from '../../wishlist/wishlist.action'
import { useRouter } from 'next/navigation'
import { useWishlist, WishlistContextType } from '../../_context/wishlistContext'


export default function RemoveProductFromWishList({productId}:{productId:string}) {
    const router = useRouter()

      const {
    wishlistItems,
    setWishlistItems,
    numberOfWishlistItems,
    updateNumberOfWishlistItem,
  } = useWishlist() as WishlistContextType
    async function handleRemoveProductFromWishList()
    
    {
        const result = await removeFromWishlist(productId)
      
        if(result == 'no-token')
        {
          toast.error('You Must Login First',{richColors : true})
        }
        else if(result =='false')
        {
          toast.error('something Error',{richColors : true})
        }
        else
        {
          toast.success('product Delete Your Your WishList Successful',{richColors : true})
          updateNumberOfWishlistItem(result)
          setWishlistItems((prev) =>
            prev.filter((item) => item._id !== productId)
          )
          router.refresh()
          
        }
          
    }
  return (
    <div>
      <Button
                variant='destructive'
                size="icon"
                className="hover:cursor-pointer"
                onClick={handleRemoveProductFromWishList}
              >
                <Trash2 className="w-4 h-4"/>
              </Button>
    </div>
  )
}
