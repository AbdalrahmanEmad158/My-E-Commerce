import React from 'react'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Product } from '@/interfaces/product.interface'
import  Image  from 'next/image';
import Link from 'next/link'
import AddProductToCartBtn from '../AddProductToCartBtn/AddProductToCartBtnFromProduct'
import Rating from '../Rating/Rating'
import AddToWishListBtn from '../AddToWishListBtn/AddToWishListBtn'


export default function ProductCard({product,isHome=false,isProduct=false}:{product:Product,isHome?:boolean,isProduct?:boolean}) {
    const discount =
    product.priceAfterDiscount
      ? Math.round(((product.price - product.priceAfterDiscount) / product.price) * 100)
      : 0;


  return (
  
    <Card className="relative bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-2  transition-all p-3">
      
        {/* Discount Badge */}
      {discount > 0 && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          -{discount}%
        </span>
      )}

    <div className="absolute top-10 right-2 flex flex-col gap-2 transition">
        <AddToWishListBtn productId={product._id} isHome={isHome} IsProduct={isProduct} />
        <button className="bg-white p-2 rounded-full shadow">🔄</button>
         <Link href={`/Products/${product._id}`} >
        <button className="bg-white p-2 rounded-full shadow cursor-pointer hover:bg-green-600
        hover:scale-110 transition-all" >👁</button>
        </Link>
      </div>


      <Image
        src={product.imageCover}
        alt="Event cover"
        width={300}
        height={300}
      />
        <Badge className='absolute top-1 right-1' variant="secondary">
          {product.category.name}</Badge>
      <CardHeader>
        <CardAction>
        
        </CardAction>
        <CardTitle>{product.title.split(' ',4).join(' ')}</CardTitle>
        <CardDescription>

      {/*   {product.description.slice(0,500)} */}
      
        </CardDescription>
      </CardHeader>

         <div className="flex items-center gap-1 text-yellow-500 text-sm">
        <Rating rate={product.ratingsAverage} />
        <span className="text-gray-500 text-xs">
          ({product.ratingsQuantity})
        </span>
      </div>

        <div className="flex items-center justify-between algn-center ">
            <div>
          {product.priceAfterDiscount ? (
            <>
              <span className="text-green-600 font-bold text-2xl">
                {product.priceAfterDiscount} EGP
              </span>
              <br />
              <span className="line-through text-gray-400 text-sm ml-2">
                {product.price}
              </span>
            </>
          ) : (
            <span className="text-black font-bold text-2xl">
              {product.price} EGP
            </span>
          )}
        </div>



    {/*   <Link href={`Products/${product._id}`}>
        
        <Button className="w-full bg-black text-white">View product</Button>
        </Link>
         */}
    
         <AddProductToCartBtn productId={product._id} isProductCard ={true} className={"bg-green-500 hover:bg-green-800 text-white w-9 h-9 rounded-full flex items-center justify-center text-lg"} >
    
              
                    +
                
         </AddProductToCartBtn>
         </div>
   
    </Card>
  )

}
