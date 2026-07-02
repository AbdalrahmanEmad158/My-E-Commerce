'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useWishlist, WishlistContextType } from '../../_context/wishlistContext'
import { AddToWishList } from '../../Products/Product.action.AddToWishList'
import { removeFromWishlist } from '../../wishlist/wishlist.action'

export default function AddToWishListBtn({
  productId,
  isProductCard = true,
}: {
  productId: string
  isProductCard?: boolean
}) {
  const router = useRouter()


  const {
    wishlistItems,
    setWishlistItems,
    numberOfWishlistItems,
    updateNumberOfWishlistItem,
  } = useWishlist() as WishlistContextType

  const isInWishlist = wishlistItems.some(
    (item) => item._id === productId
  )


  async function handleWishlist() {
    // =======================
    // Remove
    // =======================
    if (isInWishlist) {
      const result = await removeFromWishlist(productId)

      if (result === 'no-token') {
        toast.error('Please login first', {
          richColors: true,
        })
        router.push('/Login')
        return
      }

      if (result === 'false') {
        toast.error('Something went wrong', {
          richColors: true,
        })
        return
      }

      setWishlistItems((prev) =>
        prev.filter((item) => item._id !== productId)
      )

      updateNumberOfWishlistItem(Number(result))

      toast.success('Removed from wishlist', {
        richColors: true,
      })

      return
    }

    // =======================
    // Add
    // =======================
    const result = await AddToWishList({
      productId,
    })

    if (result === undefined) {
      toast.error('Please login first', {
        richColors: true,
      })

      setTimeout(() => {
        router.push('/Login')
      }, 1500)

      return
    }

    if (result === false) {
      toast.error('Something went wrong', {
        richColors: true,
      })

      return
    }

    setWishlistItems((prev) => [
      ...prev,
      {
        _id: productId,
      },
    ])

    updateNumberOfWishlistItem(result)

    toast.success('Added to wishlist', {
      richColors: true,
    })
  }

  return (
 <>
<button
  onClick={handleWishlist}
  className={
    isProductCard
      ? "bg-white p-2 rounded-full shadow hover:bg-green-600 hover:scale-110 transition-all"
      : isInWishlist
      ? "w-full bg-red-100 p-3 rounded-xl shadow border border-red-300 text-red-500 flex items-center justify-center gap-2"
      : "w-full bg-white p-3 rounded-xl shadow border hover:border-green-300 hover:text-green-500 flex items-center justify-center gap-2"
  }
>
  {isProductCard ? (
    isInWishlist ? (
      <FaHeart className="text-red-500" size={18} />
    ) : (
      <FaRegHeart className="text-gray-500" size={18} />
    )
  ) : isInWishlist ? (
    <>
      <FaHeart size={18} />
      <span>Remove from Wishlist</span>
    </>
  ) : (
    <>
      <FaRegHeart size={18} />
      <span>Add to Wishlist</span>
    </>
  )}
</button>
 </>
  )
}
