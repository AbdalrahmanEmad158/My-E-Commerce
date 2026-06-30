'use server'
import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";


export async function getDecodedUserId(){
    const cookie = await cookies()

const token  = cookie.get('next-auth.session-token')?.value
console.log(token,'tokeeeen')
const decodedToken = await decode({token : token , secret :process.env.NEXTAUTH_SECRET as string})
console.log(decodedToken.id)


 // const tkn = await getToken({ req });
  //return tkn?.token;


return decodedToken.id
}