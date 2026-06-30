'use client'
import { GetCartResponse } from '@/interfaces/getCart.interface';
import React, { createContext, useContext, useState } from 'react'
export interface cartContextType {
numberOfCartItems : number
updateNumberOfCartItem : (num : number) => void
} 

export const Cartcontext = createContext<cartContextType>({numberOfCartItems  : 0 , updateNumberOfCartItem(){}})

export default function CartContext({children,cartUser} : {children : React.ReactNode,cartUser:GetCartResponse|undefined}) {
    const [numberOfCartItems,setNumberOfCartItems] = useState(()=>{
      return cartUser === undefined ? 0 : cartUser.numOfCartItems
    });

function updateNumberOfCartItem(number:number)
{
  setNumberOfCartItems(number)
}
  return (
 <Cartcontext.Provider value={{numberOfCartItems,updateNumberOfCartItem}}>
  {children}
  </Cartcontext.Provider>
  )
}


export function useCart() {
  return useContext(Cartcontext);
}