'use client'
import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import  { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { RegistritionScehma } from '../_Scehmas/AuthSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegistarAction } from './registar.action';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { EyeClosed, Loader } from 'lucide-react';
import { Eye } from 'iconsax-reactjs';
import { RegistarValues } from '@/interfaces/Registar.interface';
import reviewAuthor_photo from '../../finalProjectimages/review-author.webp';
import Link from 'next/link';
import Image from 'next/image';



export default function page() {
 
  const[isLoading , setisLoading] = useState(false)
    const[showPassword , setshowPassword] = useState(false)
    const[showrePassword , setshowrePassword] = useState(false)
    const router = useRouter()
  const{handleSubmit, formState , register,control} = useForm({
    resolver : zodResolver(RegistritionScehma),
    defaultValues : {
      name : "" ,
      email : "" ,
      password : "" ,
      rePassword : "" ,
      phone : ""
    }
  });
function hundleShowPassword()
{
  setshowPassword(!showPassword)
}
function hundleShowrePassword()
{
  setshowrePassword(!showrePassword)
}
 

  async function sunmitRegistarForm(values : RegistarValues) {

   setisLoading(true)
 try {
    const registarBool = await RegistarAction(values)
   if (registarBool===true) {
    toast.success("registar Success",{
      duration:2000,
      position:'top-right',
      //action:{label:'xyz',onClick:function(){console.log('heloo from action toaster')}},
      richColors:true
    })
    setTimeout(()=>{
    //  redirect('/Login')
    router.push('/Login')
    }
      ,2000)
   }
   else{
   toast.error(registarBool,{duration:2000,position:'top-right'})
   }
 } 
 catch (error) {

 }

finally{setisLoading(false)}
  }
 return (
  <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
    <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12">

      {/* Left Side */}
      <div className="hidden lg:flex flex-col justify-center">
        <h1 className="text-6xl font-bold mb-6">
          Welcome to <span className="text-green-600">FreshCart</span>
        </h1>

        <p className="text-2xl text-slate-600 mb-12">
          Join thousands of happy customers who enjoy fresh groceries
          delivered right to their doorstep.
        </p>

        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="size-14 rounded-full bg-green-100 flex items-center justify-center">
              ⭐
            </div>
            <div>
              <h3 className="font-semibold text-xl">Premium Quality</h3>
              <p className="text-slate-500">
                Premium quality products sourced from trusted suppliers.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="size-14 rounded-full bg-green-100 flex items-center justify-center">
              🚚
            </div>
            <div>
              <h3 className="font-semibold text-xl">Fast Delivery</h3>
              <p className="text-slate-500">
                Same-day delivery available in most areas.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="size-14 rounded-full bg-green-100 flex items-center justify-center">
              🛡️
            </div>
            <div>
              <h3 className="font-semibold text-xl">Secure Shopping</h3>
              <p className="text-slate-500">
                Your data and payments are completely secure.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="size-12 rounded-full bg-green-200">
                 <Image
  src={reviewAuthor_photo}
  alt="cart"
  width={300}
  height={300}
  className="mb-6"
/>
              </div>
            <div>
              <h4 className="font-semibold">Sarah Johnson</h4>
              <div>⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          <p className="italic text-slate-600">
            "FreshCart has transformed my shopping experience. The quality
            of the products is outstanding, and the delivery is always on
            time."
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">

        <h2 className="text-5xl font-bold text-center mb-2">
          Create Your Account
        </h2>

        <p className="text-center text-slate-500 mb-8">
          Start your fresh journey with us today
        </p>

        <form onSubmit={handleSubmit(sunmitRegistarForm)}>

          {/* Name */}
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="mb-5">
                <FieldLabel>Name</FieldLabel>
                <Input
                  {...field}
                  placeholder="Abdalrahman"
                  className="h-12"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Email */}
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="mb-5">
                <FieldLabel>Email</FieldLabel>
                <Input
                  {...field}
                  placeholder="Abdalrahman@example.com"
                  className="h-12"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Password */}
          <div className="relative">
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field className="mb-5">
                  <FieldLabel>Password</FieldLabel>
                  <Input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    className="h-12"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {showPassword ? (
              <Eye
                className="absolute right-4 top-[52px] cursor-pointer"
                onClick={hundleShowPassword}
              />
            ) : (
              <EyeClosed
                className="absolute right-4 top-[52px] cursor-pointer"
                onClick={hundleShowPassword}
              />
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <Controller
              name="rePassword"
              control={control}
              render={({ field, fieldState }) => (
                <Field className="mb-5">
                  <FieldLabel>Confirm Password</FieldLabel>
                  <Input
                    {...field}
                    type={showrePassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="h-12"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {showrePassword ? (
              <Eye
                className="absolute right-4 top-[52px] cursor-pointer"
                onClick={hundleShowrePassword}
              />
            ) : (
              <EyeClosed
                className="absolute right-4 top-[52px] cursor-pointer"
                onClick={hundleShowrePassword}
              />
            )}
          </div>

          {/* Phone */}
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="mb-6">
                <FieldLabel>Phone Number</FieldLabel>
                <Input
                  {...field}
                  placeholder="+20 100 000 0000"
                  className="h-12"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Button
            disabled={isLoading}
            className="w-full h-12 bg-green-600 hover:bg-green-700 text-lg"
          >
            {isLoading && (
              <Loader className="animate-spin mr-2 size-4" />
            )}
            Create My Account
          </Button>

          <p className="text-center mt-6 text-slate-600">
            Already have an account?{" "}
       <Link href={'/Login'}>
            <span
              className="text-green-600 cursor-pointer"
         
            >
              Sign In
            </span></Link>
          </p>
        </form>
      </div>
    </div>
  </div>
);
}
