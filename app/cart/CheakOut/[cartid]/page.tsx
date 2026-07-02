'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CheakOut } from '@/interfaces/CheakOut.interface'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { cashOrder } from '../../cart.action'
import { visaOrder } from '../../cart.action'
import {  useParams, useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { cartContextType, useCart } from '../../../_context/cartContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { cheakOutSchema } from '../../../_Scehmas/cheakOutSchema'



export default function page() {
    const{cartid} = useParams()
    const router = useRouter()
  
    const[paymentMehoud,setPaymentMehoud] = useState<'cash'|'visa'>()
      const {updateNumberOfCartItem} = (useCart() as cartContextType)

const{handleSubmit, formState:{errors} , register,control} = useForm<CheakOut>({
  resolver : zodResolver(cheakOutSchema),
    defaultValues : {
      shippingAddress:{
        details: "",
        phone: "",
        city: ""
        }
    }
  });

 async function hundleCheakOut(values:CheakOut){

if (paymentMehoud=="cash") {
    
         const res = await  cashOrder(cartid as string,values);
      if(res =='no-Token'){      {toast.error('You Must Login First',{richColors : true})}
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
    {toast.success('Your cash order is Successful',{richColors : true})}
    updateNumberOfCartItem(0)
     router.push('/')
    }
}

else if (paymentMehoud=="visa") {
   const url = await visaOrder(cartid as string,values)
   
   router.push(url)
}
  }

  return (
   <>
   <div className='container'>
    <form onSubmit={handleSubmit(hundleCheakOut)} className="p-5 rounded bg-green-300 ">
        <h1>CheakOut</h1>
        <div className='my-5'>
            <Label>deatails</Label>
            <Input {...register('shippingAddress.details')}/>

              {errors.shippingAddress?.details && (
    <p className='text-red-500 text-sm mt-1'>
      {errors.shippingAddress.details.message}
    </p>
  )}
        </div>


        <div className='my-5'> 
            <Label>phone</Label>
            <Input {...register('shippingAddress.phone')}/>

              {errors.shippingAddress?.phone&& (
    <p className='text-red-500 text-sm mt-1'>
      {errors.shippingAddress.phone.message}
    </p>
  )}
        </div>


        <div className='my-5'>
            <Label>city</Label>
            <Input {...register('shippingAddress.city')}/>
            {errors.shippingAddress?.city&& (
               <p className='text-red-500 text-sm mt-1'>
                {errors.shippingAddress.city.message}
               </p>
            )}
        </div>

        <Button type='submit' onClick={()=>setPaymentMehoud('cash')}>Cash</Button>
        <Button type='submit' onClick={()=>setPaymentMehoud('visa')}>Visa</Button>
    </form>
    </div></>
  )
}
