
import { getAllCategories } from "@/interfaces/getAllCategories.interface";
import { error } from "console";

    const BASE_URL = "https://ecommerce.routemisr.com/api/v1";

export async function getAllCategors(): Promise<getAllCategories> {
  try {
    const resp = await fetch(`${BASE_URL}/categories`, {
      next: { revalidate: 60*5}
    });
console.log('response of categories',resp)

    if (resp.ok) {
       const data = await resp.json();
  console.log('data of categories',data)
   
    return data;
    }
    else
    {throw error}

  } catch (error) {
    
    console.error("getAllcategories error:", error);
    throw error
  }
}



export async function getSpecificCategory(id: string) {
  try {
    const resp = await fetch(`${BASE_URL}/categories/${id}`, {
      next: { revalidate: 60*5}
    });
console.log('response of categories',resp)

    if (resp.ok) {
       const data = await resp.json();
  console.log('data of categories',data)
   
    return data;
    }
    else
    {throw error}

  } catch (error) {
    
    console.error("getAllcategories error:", error);
    throw error
  }
}