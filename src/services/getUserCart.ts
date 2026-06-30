import { GetCartResponse } from "@/interfaces/getCart.interface";
import { getDecodedUserToken } from "@/lib/getUserToken";

export async function getUserCart():Promise<GetCartResponse |undefined >
{

const token = await getDecodedUserToken()
if (token) {     

    console.log('decodeddd is ' , token)
    try {
         const response = await fetch("https://ecommerce.routemisr.com/api/v1/cart",{
              
           headers : {token : token as string,'Content-type' : 'application/json'},
         
          }
          );

           if (response.ok) {
   const data :GetCartResponse= await response.json()
           console.log(data , 'data of getToCart')
          if (data.status=='success') {
            console.log(data , 'data of getToCart')
          return data 
    }
         
          }
          
    }
    catch (error) {
        console.log('error in getUserCart is : ' , error)
        throw error
    }   

             
}
else
{
    return undefined
}

}