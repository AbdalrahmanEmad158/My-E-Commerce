import { getDecodedUserId } from "@/lib/getUserId"

 export async function getUserOrders()
     {
      const userId= await getDecodedUserId();
     if (userId) {
  console.log('decodeddd user id is ' , userId)
   try {
      const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`
          );
           console.log(response , 'response of User Order haha')

         if (response.ok) {
          
           const data = await response.json()
           console.log('dataaa ofmget user order in getuserorder',data,'dataaa ofmget user order in getuserorder')
            
           
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