'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Lock, Eye, EyeOff, EyeClosed, Loader2, Loader } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import {ChangePasswordScehma}  from '../../_Scehmas/AuthSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChangePasswordValues } from '@/interfaces/ChangePasswordValue'
import { changePassword } from '../../settings/ChangePassword.action'
import { signIn, signOut, useSession } from 'next-auth/react'


export default function ChangePasswordPage() {
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [isLoading, setisLoading] = useState(false)

  const router = useRouter()

    
  function hundleShowCurrent()
{
  setShowCurrent(!showCurrent)
}
function hundleShowNew()
{
  setShowNew(!showNew)
}

function hundleShowConfirm()
{
  setShowConfirm(!showConfirm)
}


 const{handleSubmit, formState , register,control,reset} = useForm({
    resolver : zodResolver(ChangePasswordScehma),
    defaultValues : {
      currentPassword: "" ,
      password : "" ,
      rePassword:""
      
    }
  });

   async function handleChangePassword(values: ChangePasswordValues) {
    try {
      setisLoading(true);
      const response = await changePassword(values);
      console.log(response);

      if (response?.message == "success") {
        toast.success("Password Changed Successfully please login again with new password",
          {richColors : true, 
            position:'top-right'
          }
        );
         reset()
      await signIn("credentials", {
  redirect: false,
  email : response?.user?.email,
  password: values.password,
      
});
console.log('test 2')
  setTimeout(()=>{
         router.push('/')
        
        }
          ,2000)
       
      }
      
      else if (response?.errors) {
        toast.error(response?.errors?.msg,
            {richColors : true, 
            position:'top-right'
          }
        );
        console.log('response?.errors?.msg',response?.errors?.msg)
      } else {
        toast.error(response?.message);
              console.log('response?.errors?.msg',response?.message)
      }
    } catch (err) {
      console.error("Error updating password:", err);
    } finally {
      setisLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <Card className="max-w-7xl mx-auto rounded-[32px] shadow-sm border">
        <CardContent className="p-12">

          {/* Header */}
          <div className="flex items-center gap-6 mb-10">
            <div className="w-20 h-20 rounded-3xl bg-amber-100 flex items-center justify-center">
              <Lock className="w-10 h-10 text-amber-600" />
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                Change Password
              </h1>

              <p className="text-slate-500 text-lg">
                Update your account password
              </p>
            </div>
          </div>
 <form onSubmit={handleSubmit(handleChangePassword)}>
          {/* Current Password */}
          {/* Password */}
          <div className="relative">
            <Controller
              name="currentPassword"
              control={control}
              render={({ field, fieldState }) => (
                <Field className="mb-5">
                  <FieldLabel>current Password</FieldLabel>
                  <Input
                    {...field}
                    type={showCurrent ? "text" : "password"}
                   placeholder="Enter your current password"
                    className="h-12"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {showCurrent ? (
              <Eye
                className="absolute right-4 top-[52px] cursor-pointer"
                onClick={hundleShowCurrent}
              />
            ) : (
              <EyeClosed
                className="absolute right-4 top-[52px] cursor-pointer"
                onClick={hundleShowCurrent}
              />
            )}
          </div>

          <div className="relative">
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field className="mb-5">
                  <FieldLabel>Password</FieldLabel>
                  <Input
                    {...field}
                    type={showNew ? "text" : "password"}
                    placeholder="Create a strong password"
                    className="h-12"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {showNew? (
              <Eye
                className="absolute right-4 top-[52px] cursor-pointer"
                onClick={hundleShowNew}
              />
            ) : (
              <EyeClosed
                className="absolute right-4 top-[52px] cursor-pointer"
                onClick={hundleShowNew}
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
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="h-12"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {showConfirm ? (
              <Eye
                className="absolute right-4 top-[52px] cursor-pointer"
                onClick={hundleShowConfirm}
              />
            ) : (
              <EyeClosed
                className="absolute right-4 top-[52px] cursor-pointer"
                onClick={hundleShowConfirm}
              />
            )}
          </div>

          {/* Button */}
   <Button
            disabled={isLoading}
            className="w-full h-12 bg-green-600 hover:bg-green-700 text-lg"
          >
            {isLoading && (
              <Loader className="animate-spin mr-2 size-4" />
              
            )}
           Change Password
          </Button>

          </form>

        </CardContent>
      </Card>
    </div>
  )
}