"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {ShoppingCart, Trash2 } from "lucide-react";
import Link from 'next/link'
import AddProductToCartBtn from "../AddProductToCartBtn/AddProductToCartBtnFromProduct";
import RemoveProductFromWishList from "../RemoveProductFromWishList/RemoveProductFromWishList";

interface Product {
  id: string;
  title: string;
  price: number;
  priceAfterDiscount?: number;
  quantity: number;
  imageCover: string;

  category: {
    name: string;
  };
}

export default function ProductWishlistTable({
  products,
}: {
  products: Product[];
}) {
    
  return (
    <div className="rounded-3xl border overflow-hidden bg-white">

      {/* Desktop Header */}
      <div className="hidden md:grid md:grid-cols-4 px-8 py-6 bg-gray-50 text-gray-500 font-medium">

        <div>Product</div>
        <div className="text-center">Price</div>
        <div className="text-center">Status</div>
        <div className="text-center">Actions</div>

      </div>

      {products.map((product) => (
        <div
          key={product.id}
          className="
          border-t
          p-5
          md:px-8 md:py-8
          "
        >
          {/* Mobile → card layout / Desktop → table */}

          <div
            className="
            flex flex-col
            gap-6
            md:grid md:grid-cols-4 md:items-center
            "
          >
            {/* Product */}

            <div className="flex gap-4">

              <div className="w-24 h-24 md:w-28 md:h-28 border rounded-2xl flex items-center justify-center">

                <Image
                  src={product.imageCover}
                  alt={product.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />

              </div>

              <div>

                <h3 className="font-semibold text-lg md:text-xl">
                  {product.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {product.category.name}
                </p>

              </div>

            </div>

            {/* Price */}

            <div className="md:text-center">

              <span className="md:hidden text-gray-500">
                Price:
              </span>

              {product.priceAfterDiscount ? (
                <div>

                  <h3 className="font-bold text-xl">
                    {product.priceAfterDiscount} EGP
                  </h3>

                  <p className="line-through text-gray-400">
                    {product.price} EGP
                  </p>

                </div>
              ) : (
                <h3 className="font-bold text-xl">
                  {product.price} EGP
                </h3>
              )}

            </div>

            {/* Status */}

            <div className="md:flex md:justify-center">

              <Badge
                className="
                bg-green-100
                text-green-700
                rounded-full
                px-4 py-2
                hover:bg-green-100
                "
              >
                ● In Stock
              </Badge>

            </div>

            {/* Actions */}

            <div className="flex gap-3 md:justify-center">

              <AddProductToCartBtn productId={product.id}
                className={'flex-1 md:flex-none bg-green-600 hover:bg-green-800'}
                
              >
                <ShoppingCart className="w-4 h-4"/>

                Add to Cart
              </AddProductToCartBtn>

              <RemoveProductFromWishList productId={product.id}></RemoveProductFromWishList>

            </div>

          </div>
        </div>
      ))}

      <div className="p-5 md:p-8">

        <button className="text-muted-foreground hover:text-black">


          <Link className="text-muted-foreground hover:text-green-500"
        href="/">

          ← Continue Shopping
          </Link>

        </button>

      </div>

    </div>
  );
}