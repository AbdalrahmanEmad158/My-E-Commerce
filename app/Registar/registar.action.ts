'use server'

import { RegistarValues } from "@/interfaces/Registar.interface";
import { cookies } from "next/headers";

export async function RegistarAction(values:RegistarValues)
{
     
          const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup",{
            method : 'POST',
           body:JSON.stringify(values),   
           headers : {'Content-type' : 'application/json'}
          }
          );
          const data = await response.json()
         /* console.log(data , 'data of registar')*/
          if (data.message=="success") {
           /* const cookie =await cookies()
            cookie.set('token',data.token,
              {httpOnly:true , sameSite:'strict',secure:true,maxAge:60*60*24*7}
            )*/
            return true
          }
          else 
          {
            return data.message
          }
        
}