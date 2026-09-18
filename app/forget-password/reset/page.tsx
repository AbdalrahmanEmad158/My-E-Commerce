import Link from "next/link";
import { Mail, KeyRound, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { resetPasswordAction } from "../forgetPassword.action";

export default async function ResetPasswordStep3({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
 
  const resolvedParams = await searchParams;
  const userEmail = resolvedParams?.email || "";
  console.log("resolvedParams",resolvedParams,"resolvedParams")
    console.log("userEmail",userEmail,"userEmail")

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
        <form action={resetPasswordAction} className="space-y-4">
          
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
              <Input
                id="newPassword"
                name="newPassword"
                type="password"
                placeholder="Enter new password"
                required
                className="pl-10 h-11 border-slate-200 focus-visible:ring-emerald-500"
              />
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