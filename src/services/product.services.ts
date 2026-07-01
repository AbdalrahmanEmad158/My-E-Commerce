import { AllProductResponse, Product } from "@/interfaces/product.interface"



 /*export async function getAllProducts():Promise<AllProductResponse>
  {
    const resp = await fetch("https://ecommerce.routemisr.com/api/v1/products" , 
      {cache : 'force-cache',
        next : {revalidate : 10}
      }
      
    )
    if (!resp.ok) {
    throw new Error(`can not get all Products ${resp.statusText}`);
  }
    const data = await resp.json()
  
    return data
  }

  
    export async function getProductDetails(id:string):Promise<Product>
     {
       const resp = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`,
        {next : {revalidate : 10}}
       )
       const data = await resp.json()
      
       return data
     }
*/ 

     const BASE_URL = "https://ecommerce.routemisr.com/api/v1";

export async function getAllProducts(): Promise<AllProductResponse> {
  try {
    const resp = await fetch(`${BASE_URL}/products`, {
      next: { revalidate: 60*5}
    });

    if (!resp.ok) {
      throw new Error(`Failed to fetch products — Status: ${resp.status} ${resp.statusText}`);
    }

    const data = await resp.json();
    return data;

  } catch (error) {
    
    console.error("getAllProducts error:", error);
    throw error
  }
}

export async function getProductDetails(id: string): Promise<Product> {
  try {
    const resp = await fetch(`${BASE_URL}/products/${id}`, {
      next: { revalidate: 60*60 }
    });

    if (!resp.ok) {
      throw new Error(`Failed to fetch product ${id} — Status: ${resp.status} ${resp.statusText}`);
    }

    const data = await resp.json();
    return data;

  } catch (error) {
       throw error
  }
}


export async function getAllProductsWithParam(typeOfBaram:string , paramVlyue:string): Promise<AllProductResponse> {
  try {
    const resp = await fetch(`${BASE_URL}/products?${typeOfBaram}=${paramVlyue}`, {
      next: { revalidate: 60*5}
    });

    if (!resp.ok) {
      throw new Error(`Failed to fetch products — Status: ${resp.status} ${resp.statusText}`);
    }

    const data = await resp.json();
    return data;

  } catch (error) {
    
    console.error("getAllProducts error:", error);
    throw error
  }
}