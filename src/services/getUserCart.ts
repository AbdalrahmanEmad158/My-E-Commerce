import { GetCartResponse } from "@/interfaces/getCart.interface";
import { getDecodedUserToken } from "@/lib/getUserToken";

export async function getUserCart():Promise<GetCartResponse |undefined >
{

const token = await getDecodedUserToken()
if (token) {     

   
    try {
         const response = await fetch("https://ecommerce.routemisr.com/api/v1/cart",{
              
           headers : {token : token as string,'Content-type' : 'application/json'},
         
          }
          );

           if (response.ok) {
   const data :GetCartResponse= await response.json()
        
          if (data.status=='success') {
   
          return data 
    }
         
          }
          
    }
    catch (error) {
    
        throw error
    }   

             
}
else
{
    return undefined
}

}