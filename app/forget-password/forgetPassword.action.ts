"use server";

import { redirect } from "next/navigation";

// 1. Forgot Password Action
export async function sendResetCodeAction(formData: FormData) {
  const email = formData.get("email");

  const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();

  if (res.ok) {
    redirect(`/forget-password/verify?email=${encodeURIComponent(String(email))}`);
  } else {
    throw new Error(data.message || "Failed to send reset code");
  }
}

// 2. Verify Code Action
// app/forget-password/forgetPassword.action.ts

export async function verifyResetCodeAction(formData: FormData) {
  const resetCode = formData.get("resetCode");
  const email = formData.get("email");

  const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ resetCode }),
  });

  if (res.ok) {
    // تمرير البريد في الـ Query Params إلى خطوة reset
    redirect(`/forget-password/reset?email=${encodeURIComponent(String(email))}`);
  } else {
    throw new Error("Invalid or expired reset code");
  }
}

// 3. Reset Password Action
export async function resetPasswordAction(formData: FormData) {
  const email = formData.get("email");
  const newPassword = formData.get("newPassword");
  console.log("email",email,"email")
  console.log("newPassword",newPassword,"newPassword")

  const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, newPassword }),
  });

  if (res.ok) {
    redirect("/Login");
  } else {
    throw new Error("Failed to reset password");
  }
}