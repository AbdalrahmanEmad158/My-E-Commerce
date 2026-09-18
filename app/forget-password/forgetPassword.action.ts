"use server";

import { ChangePasswordValues } from "@/interfaces/ChangePasswordValue";
import { forgotPasswordStep1Values } from "@/interfaces/forgotPasswordStep1.interface";
import { forgotPasswordStep2Values } from "@/interfaces/forgotPasswordStep2.interface";
import { forgotPasswordStep3Values } from "@/interfaces/forgotPasswordStep3.interface";
import { redirect } from "next/navigation";

// 1. Forgot Password Action
export async function sendResetCodeAction(values:forgotPasswordStep1Values) {
 

  const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
     body: JSON.stringify(values),
  });

  const data = await res.json();

  if (data) {

    return data
   // redirect(`/forget-password/verify?email=${encodeURIComponent(String(email))}`);
  } else {
   
    throw new Error(data.message || "Failed to send reset code");
  }
}

// 2. Verify Code Action
// app/forget-password/forgetPassword.action.ts

export async function verifyResetCodeAction(values : forgotPasswordStep2Values,email:string) {


  const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
   body: JSON.stringify(values)
  });

  
  if (res.ok) 
  {
     const data = await res.json();

  if (data?.status) {

    return data
   // redirect(`/forget-password/verify?email=${encodeURIComponent(String(email))}`);
  } else {
   
    throw new Error(data.message || "Reset code is invalid or has expired");
  }
  }
}

// 3. Reset Password Action
export async function resetPasswordAction(values : forgotPasswordStep3Values) {



  const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values)
  });

  if (res.ok) {
    const data = await res.json()
    return data
  } else {
    throw new Error("Failed to reset password");
  }
}