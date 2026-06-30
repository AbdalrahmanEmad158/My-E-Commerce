import { getMyWishList } from '@/interfaces/getMyWishList';
import { getDecodedUserToken } from '@/lib/getUserToken';
import React from 'react'

export async function getUsetWishlist() :Promise<getMyWishList |undefined>
{
   const token= await getDecodedUserToken();
     if (token) {
  console.log('decodeddd token in wishlist is ' , token)
   try {
      const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,
        { headers : {token : token as string}}
          );
           console.log(response , 'response of User wish List')

         if (response.ok) {
          
           const data :getMyWishList= await response.json()
        if(data.status=='success')
        {
            
          console.log(data , 'data of User wish List')
        return data
        }
         }
       
   } catch (error) {
   
      console.error("getAllProducts error:", error);
    throw error
   }
}
else{
 return undefined
}
}
