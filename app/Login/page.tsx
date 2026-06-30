'use client'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { LoginScehma, RegistritionScehma } from '../_Scehmas/AuthSchema';
import { zodResolver } from '@hookform/resolvers/zod';

import { toast, Toaster } from 'sonner';
import { redirect, useRouter } from 'next/navigation';
import { EyeClosed, Loader } from 'lucide-react';
import { Eye } from 'iconsax-reactjs';
import { LoginValues } from '@/interfaces/Login.interface';
import { getCurrentLoggedUserCart, LoginAction } from './Login.action';
import { Button } from '@/components/ui/button';
import { FieldError, FieldLabel, Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { signIn } from 'next-auth/react';
import { email } from 'zod';
import { cartContextType, useCart } from '../_context/cartContext';
import { useWishlist, WishlistContextType } from '../_context/wishlistContext';
import { getUsetWishlist } from '@/services/getUserWishlist';
import banner4 from '../../finalProjectimages/banner-4.jpeg';
import blogImg1 from '../../finalProjectimages/blog-img-1.jpeg';
import blogImg2 from '../../finalProjectimages/blog-img-2.jpeg';

import logo from '../../finalProjectimages/freshcart-logo.svg';

import groceryBanner2 from '../../finalProjectimages/grocery-banner-2.jpeg';
import groceryBanner from '../../finalProjectimages/grocery-banner.png';

import slider2 from '../../finalProjectimages/slider-2.jpeg';
import sliderImage1 from '../../finalProjectimages/slider-image-1.jpeg';
import sliderImage3 from '../../finalProjectimages/slider-image-3.jpeg';
import login_photo from '../../finalProjectimages/login-photo.png';
import Image from 'next/image';
import Link from 'next/link';


export default function login() {
  const[isLoading , setisLoading] = useState(false)
    const[showPassword , setshowPassword] = useState(false)
   const {updateNumberOfCartItem} = (useCart() as cartContextType)
   const {updateNumberOfWishlistItem} = (useWishlist() as WishlistContextType)
    const router = useRouter()
  const{handleSubmit, formState , register,control} = useForm({
    resolver : zodResolver(LoginScehma),
    defaultValues : {
    
      email : "" ,
      password : "" ,
    
    }
  });
function hundleShowPassword()
{
  setshowPassword(!showPassword)
}


  async function sunmitLoginForm(values : LoginValues) {
   console.log(values) 
   setisLoading(true)
 try {
   const res = await signIn('credentials' , {
    email:values.email,
    password:values.password,
   // redirect : true,
    //callbackUrl : '/'

    redirect : false,
    })
  

      if(res?.ok)
            {
           
              toast.success('Login success',{
                position: 'top-left',
                richColors: true,
                duration: 2000,
              
              }
              )

              const resGetUserCart = await getCurrentLoggedUserCart()
              const WishlistUser =await  getUsetWishlist()
              if (resGetUserCart?.numOfCartItems) {
                updateNumberOfCartItem(resGetUserCart?.numOfCartItems ||0)
                updateNumberOfWishlistItem(WishlistUser?.count)
              }
              
     setTimeout(()=>{
         router.push('/')
        
        }
          ,2000)
             
            }
    else{toast.error('Login faild',
      {  position: 'top-left',
                richColors: true,
                duration: 2000,}
    )}



    

 } 
 catch (error) {
  console.log(error)
 }  

finally{setisLoading(false)}
  }
 return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full">

      {/* LEFT SIDE (IMAGE + TEXT) */}
      <div className="hidden md:flex flex-col justify-center items-center bg-gray-50 p-8">
        <Image
  src={login_photo}
  alt="cart"
  width={300}
  height={300}
  className="mb-6"
/>
        <h2 className="text-2xl font-bold text-center mb-2">
          FreshCart - Your One-Stop Shop for Fresh Products
        </h2>
        <p className="text-gray-500 text-center">
          Join thousands of happy customers who trust FreshCart
        </p>
      </div>

      {/* RIGHT SIDE (FORM) */}
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-2 text-green-600">FreshCart</h1>
        <p className="text-gray-500 mb-6">Welcome Back!</p>

      

        <form onSubmit={handleSubmit(sunmitLoginForm)}>

          {/* EMAIL */}
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="mb-4">
                <FieldLabel>Email Address</FieldLabel>
                <Input
                  {...field}
                  type="text"
                  placeholder="Enter your email"
                  className="rounded-xl h-12"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* PASSWORD */}
          <div className="relative">
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field className="mb-4">
                  <FieldLabel>Password</FieldLabel>
                  <Input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="rounded-xl h-12 pr-10"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {showPassword ? (
              <Eye
                className="absolute top-[60%] right-3 cursor-pointer"
                onClick={hundleShowPassword}
              />
            ) : (
              <EyeClosed
                className="absolute top-[60%] right-3 cursor-pointer"
                onClick={hundleShowPassword}
              />
            )}
          </div>

          {/* REMEMBER + FORGOT */}
          <div className="flex justify-between items-center text-sm mb-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Keep me signed in
            </label>
            <span className="text-green-600 cursor-pointer">
              Forgot Password?
            </span>
          </div>

          {/* BUTTON */}
          <Button
            className="w-full bg-green-600 hover:bg-green-700 rounded-xl h-12"
            disabled={isLoading}
          >
            {isLoading && <Loader className="animate-spin mr-2" />}
            Sign In
          </Button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-sm text-gray-500 mt-6">
          New to FreshCart?{" "}
         <Link
         href={'/Registar'}>
          <span className="text-green-600 cursor-pointer">
            Create an account
          </span></Link>
        </p>
      </div>
    </div>
  </div>
);
}