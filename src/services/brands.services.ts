import { getAllBrandsData } from "@/interfaces/getAllBrands.interface";
import { error } from "console";

    const BASE_URL = "https://ecommerce.routemisr.com/api/v1";

export async function getAllBrands(): Promise<getAllBrandsData> {
  try {
    const resp = await fetch(`${BASE_URL}/brands`, {
      next: { revalidate: 60*5}
    });

    if (resp.ok) {
       const data = await resp.json();

   
    return data;
    }
    else
    {throw error}

  } catch (error) {
    
    console.error("getAllBrands error:", error);
    throw error
  }
}






export async function getSpecificBrand(id : string) {
  try {
    const resp = await fetch(`${BASE_URL}/brands/${id}`, {
      next: { revalidate: 60*5}
    });


    if (resp.ok) {
       const data = await resp.json();

   
    return data;
    }
    else
    {throw error}

  } catch (error) {
    
   
    throw error
  }
}