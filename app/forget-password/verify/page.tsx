// app/forget-password/verify/page.tsx
'use client'
import Link from "next/link";
import { Mail, KeyRound, Lock, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { sendResetCodeAction, verifyResetCodeAction } from "../forgetPassword.action";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {forgotPasswordSchemaStep2 } from "../../_Scehmas/AuthSchema";
import { useState } from "react";

import { forgotPasswordStep2Values } from "@/interfaces/forgotPasswordStep2.interface";
import { toast } from "sonner";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

export default function VerifyCodeStep2()
 {

  const searchParams = useSearchParams();

const userEmail = searchParams.get("email") || "";
console.log("userEmai",userEmail,"userEmai")


   const router = useRouter()
  const{handleSubmit, formState , register,control,reset} = useForm({
      resolver : zodResolver(forgotPasswordSchemaStep2),
      defaultValues : {
        resetCode:"",
    
        
      }
    });

  const[isLoading , setisLoading] = useState(false)
 
 async function handleVerifyResetCode(values: forgotPasswordStep2Values) {
   
 console.log(values,"valllla")
    try {
      setisLoading(true);
      const response = await verifyResetCodeAction(values,userEmail);


      if (response?.status == "Success") {
        toast.success("code verified successful",
          {richColors : true, 
            position:'top-right'
          }
        );
         reset()
  setTimeout(()=>{
         router.push(`/forget-password/reset?email=${encodeURIComponent(String(userEmail))}`)
        
        }
          ,2000)
       
      }
      
      else {
        toast.error("Reset code is invalid or has expired",
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
          <h1 className="text-2xl font-bold text-slate-800 mb-1">Enter Verification Code</h1>
          <p className="text-sm text-slate-500">Please enter the reset code sent to your email</p>
        </div>

        {/* Stepper Indicator */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <Mail className="w-4 h-4" />
          </div>
          <div className="w-12 h-0.5 bg-emerald-500" />
          <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
            <KeyRound className="w-5 h-5" />
          </div>
          <div className="w-12 h-0.5 bg-slate-200" />
          <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
            <Lock className="w-4 h-4" />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleVerifyResetCode)} className="space-y-5">
          {/* إرسال الـ email مع كود التحقق */}

          <div className="space-y-2">
          
            <div className="relative">
              <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          
                <Controller
            name="resetCode"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="mb-5">
                <FieldLabel>reset Code</FieldLabel>
                <Input
                  {...field}
                  placeholder="* * * * * *"
                  className="h-12"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />





            </div>
          </div>

          <Button disabled={isLoading} type="submit" className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-white font-medium">
            Verify Code
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/forget-password" className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 hover:underline">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to email entry
          </Link>
        </div>
      </div>

      <div className="pt-6 border-t border-slate-100 text-center text-xs text-slate-500 mt-8">
        Didn't receive code?{" "}
        <Link href="/forget-password" className="font-semibold text-emerald-600 hover:underline">
          Resend
        </Link>
      </div>
    </>
  );
}