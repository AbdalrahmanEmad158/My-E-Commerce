'use server'

import { ChangePasswordValues } from "@/interfaces/ChangePasswordValue";
import { getDecodedUserToken } from "@/lib/getUserToken";




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

  if (response.ok) {
    
  const data =await response?.json()
 
  return data;
  }

  else{ const data =await response?.json()
 
  return data;
}
 } catch (error) {
  return false
 }


}
