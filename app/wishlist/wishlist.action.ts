'use server'
import { getDecodedUserId } from "@/lib/getUserId";
import { getDecodedUserToken } from "@/lib/getUserToken";


export async function removeFromWishlist(productId:string) {
 const token = await getDecodedUserToken()
 const id = await getDecodedUserId()
 
  if (!token) {
     return "no-token"
   }

      const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId }`,{
             method : 'delete',
            
            headers : {token : token as string}
           }
           );
           if(response.ok)
             {
            const data = await response.json()
         
           if (data.status=="success") {
         
          
 
             return data?.data?.length
 
           }
           else 
           {
             return 'false'
           }
           }
}
