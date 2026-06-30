'use server'
import { getDecodedUserToken } from "@/lib/getUserToken";
import { revalidatePath } from "next/cache";

 export async function AddToWishList({
  productId,
  isHome = false,
  IsProduct = false,
  isProductDetails = false,
}: {
  productId: string;
  isHome?: boolean;
  IsProduct?: boolean;
  isProductDetails?: boolean;
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
            console.log("Product added to wishlist:", data);
            
             if (data.status=="success") {
          if (isHome) {
            revalidatePath("/")
          }
          if (IsProduct) {
            revalidatePath("/Products")
          }
            if (isProductDetails) {
            revalidatePath(`/Products/${productId}`)
          }
            return data.data.length
          }
          else 
          {
              if (isHome) {
            revalidatePath("/")
          }
          if (IsProduct) {
            revalidatePath("/Products")
          }
            if (isProductDetails) {
            revalidatePath(`/Products/${productId}`)
          }
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