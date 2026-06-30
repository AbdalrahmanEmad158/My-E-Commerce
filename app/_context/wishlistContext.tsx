'use client'

import { getMyWishList } from '@/interfaces/getMyWishList';
import React, { createContext, useContext, useState } from 'react'

export interface WishlistContextType {
numberOfWishlistItems : number
updateNumberOfWishlistItem : (num : number) => void
} 

export const Wishlistcontext = createContext<WishlistContextType>({numberOfWishlistItems  : 0 , updateNumberOfWishlistItem(){}})

export default function wishlistContext({children,WishlistUser} : {children : React.ReactNode,WishlistUser:getMyWishList|undefined}) {
    const [numberOfWishlistItems,setNumberOfWishlistItems] = useState(()=>{
      return WishlistUser === undefined ? 0 : WishlistUser.count
    });

function updateNumberOfWishlistItem(number:number)
{
  setNumberOfWishlistItems(number)
}
  return (
 <Wishlistcontext.Provider value={{numberOfWishlistItems,updateNumberOfWishlistItem}}>
  {children}
  </Wishlistcontext.Provider>
  )
}


export function useWishlist(){
  const WishlistUser = useContext(Wishlistcontext)
  if(WishlistUser)
  {return WishlistUser}
  else {'can not use cart context outside its context'}
}