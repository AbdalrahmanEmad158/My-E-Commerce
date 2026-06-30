 'use server'

import { getUserCart } from "@/services/getUserCart"

/*import { LoginValues } from "@/interfaces/Login.interface";
import { cookies } from "next/headers";

export async function LoginAction(values:LoginValues)
{
     
          const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin",{
            method : 'POST',
           body:JSON.stringify(values),   
           headers : {'Content-type' : 'application/json'}
          }
          );
          const data = await response.json()
          console.log(data , 'data of login')
          if (data.message=="success") {
           /* const cookie =await cookies()
            cookie.set('token',data.token,
              {httpOnly:true , sameSite:'strict',secure:true,maxAge:60*60*24*7}
            )
            return true
          }
          else 
          {
            return data.message
          }
        
}
          */

export async function getCurrentLoggedUserCart()
{
  return getUserCart()
}
