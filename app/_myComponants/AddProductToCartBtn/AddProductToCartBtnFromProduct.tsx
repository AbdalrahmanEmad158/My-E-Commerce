'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { addtoCart } from '../../Cart/cart.action'
import { toast } from 'sonner'
import { cartContextType, useCart } from '../../_context/cartContext'
import { useRouter } from 'next/navigation'

export  default function AddProductToCartBtn({
  productId,
  isProductCard = true,
  children,
  className
}: {
  productId: string
  isProductCard?: boolean
   children: React.ReactNode
    className?: string
}){
  const {updateNumberOfCartItem}= (useCart() as cartContextType)
  const router = useRouter()
    async function handleAddToCart()
    {
        const result = await addtoCart(productId)
      
        if(result === 'no-token')
        {
          toast.error('You Must Login First',{richColors : true})
           setTimeout(()=>{
         router.push('/Login')
        
        }
          ,2000)
        }
        else if(result =='false')
        {
          toast.error('something Error',{richColors : true})
        }
        else
        {
          toast.success('product Added To Your Cart Successful',{richColors : true})
          updateNumberOfCartItem(result)
          
        }
    }

    return (
      <Button className={className} onClick={handleAddToCart}>
        {children}
      </Button>
    )

 /* return isProductCard ?(
    
  
     <Button className="bg-green-500 hover:bg-green-800 text-white w-9 h-9 
     rounded-full flex items-center justify-center text-lg"
     onClick={handleAddToCart}>
          +
        </Button>
    )
    :
    (
      <Button className="bg-green-500 hover:bg-green-800 text-white w-full h-12 
      rounded-lg flex items-center justify-center text-lg"
      onClick={handleAddToCart}>
        Add To Cart
      </Button>




    )*/
}
