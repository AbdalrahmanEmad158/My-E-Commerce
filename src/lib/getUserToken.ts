'use server'
import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";


export async function getDecodedUserToken(){
    const cookie = await cookies()

const token  = cookie.get('next-auth.session-token')?.value ||
 cookieStore.get("__Secure-next-auth.session-token")?.value
console.log(token,'tokeeeen 123')
const decodedToken = await decode({token : token , secret :process.env.NEXTAUTH_SECRET as string})
console.log(decodedToken?.token,'decodedToken?.token tokeeeen 123')
console.log(decodedToken?.token)


 // const tkn = await getToken({ req });
  //return tkn?.token;


return decodedToken?.token
}