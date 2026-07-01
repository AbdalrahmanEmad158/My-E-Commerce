'use client'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'


export default function SessionProviderServer({children} : {children:ReactNode}) {
  return  <>
  <SessionProvider>
   {children}
  </SessionProvider>
  </>
}
