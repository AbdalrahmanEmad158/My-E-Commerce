'use client'
import Link from "next/link";
import { Mail, KeyRound, Lock, ArrowLeft, Router } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { sendResetCodeAction } from "./forgetPassword.action";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { useState } from "react";
import { forgotPasswordSchemaStep1 } from "../_Scehmas/AuthSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangePasswordValues } from "@/interfaces/ChangePasswordValue";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { forgotPasswordStep1Values } from "@/interfaces/forgotPasswordStep1.interface";


export default function ForgotPasswordStep1() {
 const router = useRouter()
  const{handleSubmit, formState , register,control,reset} = useForm({
      resolver : zodResolver(forgotPasswordSchemaStep1),
      defaultValues : {
        email:""
        
      }
    });

  const[isLoading , setisLoading] = useState(false)
 
 async function handleSendResetCode(values: forgotPasswordStep1Values) {
   
 console.log(values,"valllla")
    try {
      setisLoading(true);
      const response = await sendResetCodeAction(values);
     console.log(response,"dataaalresponse")

      if (response.message == "Reset code sent to your email") {
        toast.success("Reset code sent to your email",
          {richColors : true, 
            position:'top-right'
          }
        );
         reset()
  setTimeout(()=>{
         router.push(`/forget-password/verify?email=${encodeURIComponent(String(values.email))}`)
        
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
      console.error("Error updating password:", err);
    } finally {
      setisLoading(false);
    }
  }

 
 
  return (
    <>
      <div>
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-2xl font-black text-emerald-600 tracking-tight">
            Fresh<span className="text-slate-800">Cart</span>
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-800 mb-1">Forgot Password?</h1>
          <p className="text-sm text-slate-500">No worries, we'll send you a reset code</p>
        </div>

        {/* Stepper Indicator */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
            <Mail className="w-5 h-5" />
          </div>
          <div className="w-12 h-0.5 bg-slate-200" />
          <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
            <KeyRound className="w-4 h-4" />
          </div>
          <div className="w-12 h-0.5 bg-slate-200" />
          <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
            <Lock className="w-4 h-4" />
          </div>
        </div>

        {/* Native Form with Server Action */}
        <form onSubmit={handleSubmit(handleSendResetCode)} className="space-y-5">
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

          <Button disabled={isLoading} type="submit" className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-white font-medium">
            Send Reset Code
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/Login" className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 hover:underline">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Sign In
          </Link>
        </div>
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