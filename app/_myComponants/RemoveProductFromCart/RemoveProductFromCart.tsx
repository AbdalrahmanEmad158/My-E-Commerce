'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { removeProductFromCard } from '../../cart/cart.action'
import { toast } from 'sonner'
import { cartContextType, useCart } from '../../_context/cartContext'
import { useRouter } from 'next/navigation'

export default function RemoveProductFromCart({productId}:{productId:string}) {
  const {updateNumberOfCartItem} = (useCart() as cartContextType)
  const router = useRouter()
     async function handleRemove()
    {
        const result = await removeProductFromCard(productId)
      
        if(result === 'no-token')
        {
          toast.error('You Must Login First',{richColors : true})
        }
        else if(result =='false')
        {
          toast.error('something Error',{richColors : true})
        }
        else
        {
          toast.success('product Delete Your Cart Successful',{richColors : true})
          
         updateNumberOfCartItem(result)
         router.push('/cart')
          
        }
          
    }


  return (
    <>
    <Button variant="destructive" size="sm" onClick={handleRemove}>
        Remove
        </Button></>
  )
}
