import { getMyWishList } from '@/interfaces/getMyWishList';
import { getDecodedUserToken } from '@/lib/getUserToken';


export async function getUsetWishlist() :Promise<getMyWishList |undefined>
{
   const token= await getDecodedUserToken();
     if (token) {

   try {
      const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,
        { headers : {token : token as string}}
          );
      

         if (response.ok) {
          
           const data :getMyWishList= await response.json()
        if(data.status=='success')
        {
            
   
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
