import { getDecodedUserId } from "@/lib/getUserId"

 export async function getUserOrders()
     {
      const userId= await getDecodedUserId();
     if (userId) {

   try {
      const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`
          );
           

         if (response.ok) {
          
           const data = await response.json()
         
            
           
              return data

            
          
         }
        
   } catch (error) {
   
      console.error("Error in fetch your Order error:", error);
    throw error
   }
}
else{
  return 'no-id'
}
     }