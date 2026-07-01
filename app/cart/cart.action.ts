'use server'

import { CartResponseAdd } from "@/interfaces/AddToCart.Inerface";
import { CheakOut } from "@/interfaces/CheakOut.interface";

import { getDecodedUserToken } from "@/lib/getUserToken";

import { revalidatePath } from "next/cache";



export async function addtoCart(productId:string)
{

const token = await getDecodedUserToken()
 if (!token) {
    return "no-token"
  }
console.log('decodeddd is ' , token)
     const response = await fetch("https://ecommerce.routemisr.com/api/v1/cart",{
            method : 'POST',
             body: JSON.stringify({
        productId: productId, // ✅ هنا التصحيح
      }),   
           headers : {token : token as string,'Content-type' : 'application/json'}
          }
          );
          const data :CartResponseAdd= await response.json()
          console.log(data , 'data of AddToCart')
          if (data.status=="success") {

           
         
            return data.numOfCartItems
          }
          else 
          {
            return 'false'
          }
}

export async function updateItemCartCount(id:string , count:number)
{

const token = await getDecodedUserToken()
console.log('decodeddd is ' , token)
     const response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{

              method:'PUT',
           body:JSON.stringify({count}),
           headers : {token : token as string,'Content-type' : 'application/json'}
          }
          );
          if(response.ok)
          {
                  const data = await response.json()
          console.log(data , 'data of ubdate count Cart')
          if (data.status=="success") {
         
            revalidatePath('/Cart')
            return 'true'
            } 
            else
            {
              return false
            }
          }
        
}

export async function removeProductFromCard(productId:string)
{

const token = await getDecodedUserToken()
 if (!token) {
    return "no-token"
  }
console.log('decodeddd is ' , token)
     const response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
            method : 'delete',
           
           headers : {token : token as string}
          }
          );
          if(response.ok)
            {
           const data :CartResponseAdd= await response.json()
          console.log(data , 'data of Remove Product From Cart')
          if (data.status=="success") {
         revalidatePath('/Cart')
         

            return data.numOfCartItems

          }
          else 
          {
            return 'false'
          }
          }
         
}

export async function clearAllProduct() {
  const token = await getDecodedUserToken()
  if (token) {
    try {
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,
       { 
        method : 'delete' , 
        headers : {token : token as string}

       }
      )
      if (res.ok) {
         const data = await res.json()
         console.log('data of clear all product' , data)
         revalidatePath('/Cart')
         return true
      }
      else
      {
        return false
      }
    } catch (error) {
      return 'false'
    }
  }

  else
  {return 'no-Token'}
}
export async function cashOrder(cartId:string , values : CheakOut)
{

const token = await getDecodedUserToken()
if (token) {
  console.log('decodeddd is ' , token)
   try {
      const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,{

              method:'POST',
           body:JSON.stringify(values),
           headers : {token : token as string,'Content-type' : 'application/json'}
          }
          );
         if (response.ok) {
           const data = await response.json()
          console.log(data , 'data of cash order Cart')
          if (data.status=="success") {
            return data
           // redirect('/Cart')
            
          } 
         }
         else {return false}
   } catch (error) {
    return 'false'
   }
}
else{
  return 'no-token'
}
}



export async function visaOrder(cartId:string , values : CheakOut)
{

const token = await getDecodedUserToken()
console.log('decodeddd is ' , token)
     const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://my-e-commerce-plum.vercel.app/`,{

              method:'POST',
           body:JSON.stringify(values),
           headers : {token : token as string,'Content-type' : 'application/json'}
          }
          );
          const data = await response.json()
          console.log(data , 'data of visa order Cart')
          if (data.status=="success") {
         
            return data.session.url
          } 
}