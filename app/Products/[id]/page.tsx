import { getProductDetails } from '@/services/product.services'


import { Button } from "@/components/ui/button"
import { FaHeart, FaShippingFast ,FaShieldAlt } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


import { Product } from '@/interfaces/product.interface';

import AddProductToCartBtn from '../../_myComponants/AddProductToCartBtn/AddProductToCartBtnFromProduct'
import ProductGallery from '../../_myComponants/ProductGallery/ProductGallery'
import Rating from '../../_myComponants/Rating/Rating'
import RelatedProducts from '../../_myComponants/RelatedProducts/RelatedProducts';



export default async function page({params}:Promise<{id:string}>) {
  const {id} = await params
const { data }: { data: Product } = await getProductDetails(id);

    const discount =
    data.priceAfterDiscount
      ? Math.round(((data.price - data.priceAfterDiscount) / data.price) * 100)
      : 0;

  const allImages = [
    data.imageCover,
    ...(data.images || []),
  ];

  var count = 1; // Set the initial count value
  
  return (
   <>
    
      <div className="container mx-auto px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        
        {/* Gallery */}
        <ProductGallery images={allImages} />

        {/* Product Info */}
        <div className="space-y-6">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm text-green-700 mb-3 inline-block me-10">   
            {data.category.name}
          </span>

               <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 mb-3 inline-block">
           
                {data.brand.name}
              </span>

          <h1 className="text-4xl font-bold">
            {data.title}
          </h1>

          <div className="flex items-center gap-2">
            <Rating rate={data.ratingsAverage} />
             <span className="text-gray-500">
              {data.ratingsAverage.toFixed(1)}
            </span>
            <span className="text-gray-500">
              ({data.ratingsQuantity} reviews)
            </span>
          </div>

        <div className="flex items-center gap-3 flex-wrap">
  <span className="text-4xl font-bold text-black">
   
  </span>

  {data.priceAfterDiscount ? (
    <>
      <span className="text-black text-3xl ">
        {data.priceAfterDiscount} EGP
      </span>
        <span className="text-xl text-gray-400 line-through">
        {data.price} EGP
      </span>

      <span className="rounded bg-red-500 px-2 py-1 text-sm text-white">
        Save {discount}%
      </span>
    </>
  ):(
    <>
      <span className="text-3xl text-black ">
        {data.price} EGP
      </span>

    
    </>
  )}
</div>

         

          <p className="leading-8 text-gray-600">
            {data.description}
          </p>
          <div className="flex items-center gap-3" justify-content="space-between">
              <div>
             
             {/* 
              <p>
                Quantity
              </p>
              <div className='border p-1'>
                <UpdateItemCartCount newid={id} count={count} />
              </div>
              */} 
            </div>
              <p className="text-gray-500">  {data.quantity} Available</p>
        
          </div>
            
            

         
          <div className="flex items-center justify-between gap-3">
            <p>Total Price:</p>
            <p className="text-4xl font-bold text-green-600">
              {data.priceAfterDiscount ? <>
              <span className="text-green-600 font-bold text-2xl">
                {data.priceAfterDiscount} EGP
              </span>
            
          
            </> : (
            <span className="text-green-600  font-bold text-2xl">
              {data.price} EGP
            </span>
          )} 
            </p>
          </div>
           <AddProductToCartBtn productId={data._id} className={"bg-green-500 hover:bg-green-800 text-white w-full h-12 rounded-lg flex items-center justify-center text-lg"}>
            
            
        Add To Cart
     </AddProductToCartBtn>
           <div className='flex items-center justify-between  hover:bg-accent hover:text-green-700'>
            <FaHeart /> 
             <Button className='bg-gray-150 border-gray-600 block hover:border-green-600
             text-black'>
              Add To Wash List</Button>
           </div>

           <div className='flex justify-between gap-3'>
            <div className='flex justify-between gap-3 items-center'>
              <div className='bg-green-200 p-2 rounded-full'>
                <FaShippingFast className='text-green-700' />
              </div>
              <div>
                <p>Free Delivery</p>
                <p className='text-gray-400'>Orders over $50</p>
              </div>
            </div>

            <div className='flex justify-between gap-3 items-center'>
              <div className='bg-green-200 p-2 rounded-full'>
                <AiOutlineLoading3Quarters className='animate-spin text-green-700' />
              </div>
              <div>
                <p>30 Days Return</p>
                <p className='text-gray-400'>Money back</p>
              </div>
            </div>

            <div className='flex justify-between gap-3 items-center '>
              <div className='bg-green-200 p-2 rounded-full'>
                <FaShieldAlt className='text-green-700' />
              </div>
              <div>
                <p>Secure Payment</p>
                <p className='text-gray-400'>100% Protected</p>
              </div>
            </div>
           </div>
          


/* NavTapsProductDetails product = data/NavTapsProductDetails */


              


        </div>
      </div>
<h2 className="mt-10 mb-5 border-solid p-2 border-l-8 border-green-700 font-bold text-3xl">
You May Also  <span className="text-green-500 underline">Like</span></h2>
      <RelatedProducts categoryId={data.category._id} />
    </div>

    </>
  )
}
