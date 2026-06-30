import { NextRequest, NextResponse } from "next/server";

import { getToken } from "next-auth/jwt";

export async function proxy(req : NextRequest) {
  // console.log(req,'req middleware')



   if (req.nextUrl.pathname.includes('/cart') ||req.nextUrl.pathname.includes('/orders')
   ||req.nextUrl.pathname.includes('/wishlist')) 
      {
      
         const token = await getToken({req,secret:process.env.AUTH_SECRET})
         if(token){return NextResponse.next()}
         else{return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/Login`)}
   }
}
export const config = {
   matcher:['/cart','/allorders','/wishlist']
}