'use client'
import Link from "next/link";
import { Mail, KeyRound, Lock, EyeClosed, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { resetPasswordAction } from "../forgetPassword.action";
import { useRouter, useSearchParams } from "next/navigation";

import { Controller, useForm } from "react-hook-form";
import { forgotPasswordSchemaStep3 } from "../../_Scehmas/AuthSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { forgotPasswordStep3Values } from "@/interfaces/forgotPasswordStep3.interface";
import { toast } from "sonner";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

export default function ResetPasswordStep3() {
 
  const searchParams = useSearchParams();

const userEmail = searchParams.get("email") || "";
console.log("userEmai2",userEmail,"userEmai2")


   const router = useRouter()
     const[showNewPassword , setshowNewPassword] = useState(false)
     function hundleShowNewPassword()
{
  setshowNewPassword(!showNewPassword)
}
  const{handleSubmit, formState , register,control,reset} = useForm({
      resolver : zodResolver(forgotPasswordSchemaStep3),
      defaultValues : {
        newPassword:"",
        email:userEmail
    
        
      }
    });

  const[isLoading , setisLoading] = useState(false)
 
 async function handleRresetPasswordAction(values: forgotPasswordStep3Values) {
   
 console.log(values,"valllla")
    try {
      setisLoading(true);
      const response = await resetPasswordAction(values);



      if (response?.token) {
        toast.success("yoy are enter new Password successful please login",
          {richColors : true, 
            position:'top-right'
          }
        );
         reset()
  setTimeout(()=>{
         router.push("/Login")
        
        }
          ,2000)
       
      }
      
      else {
        toast.error(response?.message,
            {richColors : true, 
            position:'top-right'
          }
        );
      
      } 
    } catch (err) {
      console.error("Error in verfication code password:", err);
    } finally {
      setisLoading(false);
    }
  }

  return (
    <>
      <div>
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-2xl font-black text-emerald-600 tracking-tight">
            Fresh<span className="text-slate-800">Cart</span>
          </span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-800 mb-1">Set New Password</h1>
          <p className="text-sm text-slate-500">Enter your new password below</p>
        </div>

        {/* Stepper Indicator */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <Mail className="w-4 h-4" />
          </div>
          <div className="w-12 h-0.5 bg-emerald-500" />
          <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <KeyRound className="w-4 h-4" />
          </div>
          <div className="w-12 h-0.5 bg-emerald-500" />
          <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
            <Lock className="w-5 h-5" />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleRresetPasswordAction)} className="space-y-4">
          
          {/* 2. Fix input name to "email" instead of "newPassword" */}
          <input
            type="hidden"
            name="email"
            value={userEmail}
          />

          <div className="space-y-2">
            <Label htmlFor="newPassword" className="text-xs font-semibold text-slate-700">
              New Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Controller
            name="newPassword"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="mb-5">
                <FieldLabel>new Password</FieldLabel>
                <Input
                  {...field}
                  placeholder="* * * * * *"
                     type={showNewPassword ? "text" : "password"}
                  className="h-12"

                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
            ></Controller>

            {showNewPassword ? (
              <Eye
                className="absolute right-4 top-[52px] cursor-pointer"
                onClick={hundleShowNewPassword}
              />
            ) : (
              <EyeClosed
                className="absolute right-4 top-[52px] cursor-pointer"
                onClick={hundleShowNewPassword}
              />
            )}
            </div>
          </div>

          <Button type="submit" className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-white font-medium">
            Reset Password
          </Button>
        </form>
      </div>

      <div className="pt-6 border-t border-slate-100 text-center text-xs text-slate-500 mt-8">
        Remember your password?{" "}
        <Link href="/Login" className="font-semibold text-emerald-600 hover:underline">
          Sign In
        </Link>
      </div>
    </>
  );
}