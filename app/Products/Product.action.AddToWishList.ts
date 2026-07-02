'use server'
import { getDecodedUserToken } from "@/lib/getUserToken";
import { revalidatePath } from "next/cache";

 export async function AddToWishList({
  productId,

}: {
  productId: string;

}) {
    const token =await getDecodedUserToken();

       if (token) {
         try {
          const response = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
            
            method: "POST",
            headers: {
                token : token as string,
              "Content-Type": "application/json",
           
            },
            body: JSON.stringify({ productId : productId}),
          });

            if (!response.ok) {
                throw new Error("Failed to add product to wishlist");
            }

            const data = await response.json();
         
            
             if (data.status=="success") {
          
            return data.data.length
          }
          else 
          {
           
            return false
          }
        }
            catch (error) {
            console.error("Error adding product to wishlist:", error);
            return false
        }
        
       }
       else{return undefined}
    }