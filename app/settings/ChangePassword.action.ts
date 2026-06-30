'use server'

import { ChangePasswordValues } from "@/interfaces/ChangePasswordValue";
import { getDecodedUserToken } from "@/lib/getUserToken";

  import CredentialsProvider from "next-auth/providers/credentials"
  import { NextAuthOptions } from 'next-auth';
import { useSession } from "next-auth/react";


export async function changePassword(values:ChangePasswordValues) {
  const token = await getDecodedUserToken();

  if (!token) {
    throw new Error("unAuth please login");
  }

 try {
   const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
    {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        token : (token as string) ,
        "content-type": "application/json",
      },
    },
  );
  console.log('reponse of change password',response  )
  if (response.ok) {
    
  const data =await response?.json()
  console.log('data of change password',data  )
  return data;
  }

  else{ const data =await response?.json()
  console.log('data of change password not ok',data  )
  return data;
}
 } catch (error) {
  return false
 }


}
