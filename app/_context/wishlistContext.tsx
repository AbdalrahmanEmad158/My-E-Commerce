'use client'

import { getMyWishList } from '@/interfaces/getMyWishList';
import React, { createContext, useContext, useState } from 'react';

export interface WishlistContextType {
  numberOfWishlistItems: number;
  wishlistItems: any[];

  updateNumberOfWishlistItem: (num: number) => void;
  setWishlistItems: React.Dispatch<React.SetStateAction<any[]>>;
}

export const Wishlistcontext = createContext<WishlistContextType>({
  numberOfWishlistItems: 0,
  wishlistItems: [],

  updateNumberOfWishlistItem() {},
  setWishlistItems() {},
});

export default function WishlistContext({
  children,
  WishlistUser,
}: {
  children: React.ReactNode;
  WishlistUser: getMyWishList | undefined;
}) {
  const [numberOfWishlistItems, setNumberOfWishlistItems] = useState(
    WishlistUser?.count ?? 0
  );

  const [wishlistItems, setWishlistItems] = useState(
    WishlistUser?.data ?? []
  );

  function updateNumberOfWishlistItem(number: number) {
    setNumberOfWishlistItems(number);
  }

  return (
    <Wishlistcontext.Provider
      value={{
        numberOfWishlistItems,
        wishlistItems,
        setWishlistItems,
        updateNumberOfWishlistItem,
      }}
    >
      {children}
    </Wishlistcontext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(Wishlistcontext);

  if (!context) {
    throw new Error(
      'useWishlist must be used inside WishlistContext'
    );
  }

  return context;
}