
import { getAllSubCategories } from "@/interfaces/getAllSubCategories";
import { error } from "console";

    const BASE_URL = "https://ecommerce.routemisr.com/api/v1";

export async function getAllSubCategors(): Promise<getAllSubCategories> {
  try {
    const resp = await fetch(`${BASE_URL}/subcategories`, {
      next: { revalidate: 60*5}
    });


    if (resp.ok) {
       const data = await resp.json();

   
    return data;
    }
    else
    {throw error}

  } catch (error) {
    
    console.error("get All subcategories error:", error);
    throw error
  }
}



export async function getSpicificCategors(id:string){
  try {
    const resp = await fetch(`${BASE_URL}/subcategories/${id}`, {
      next: { revalidate: 60*5}
    });


    if (resp.ok) {
       const data = await resp.json();
 
   
    return data;
    }
    else
    {throw error}

  } catch (error) {
    
    console.error("get All subcategories error:", error);
    throw error
  }
}