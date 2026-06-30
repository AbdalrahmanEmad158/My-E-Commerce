'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { clearAllProduct } from '../../Cart/cart.action';
import { toast } from 'sonner';
import { cartContextType, useCart } from '../../_context/cartContext';

export default function ClearAllProductFromCart() {
    const {updateNumberOfCartItem} = (useCart() as cartContextType)

    async function handleClearAll()
    {
      const res = await  clearAllProduct();
      if(res =='no-Token'){
      {toast.error('You Must Login First',{richColors : true})}
    }

   else if(res=='false')
   {
      {toast.error('somthing Error please Cheak NetWork',{richColors : true})}
   }
   else if(res==false)
   {
   {toast.error('somthing is Error',{richColors : true})}}

   else
    {
    {toast.success('You Remove Your Cart Successful',{richColors : true})}
    updateNumberOfCartItem(0)
    }
   }
  return (
    <>
     <Button variant="destructive" size="sm" onClick={handleClearAll}>
        Clear Cart
        </Button>
        </>
  )
}
