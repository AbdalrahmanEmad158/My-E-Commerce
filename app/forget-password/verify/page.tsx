// app/forget-password/verify/page.tsx
import Link from "next/link";
import { Mail, KeyRound, Lock, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { verifyResetCodeAction } from "../forgetPassword.action";

export default async function VerifyCodeStep2({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const resolvedParams = await searchParams;
  const userEmail = resolvedParams?.email || "";

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
        <form action={verifyResetCodeAction} className="space-y-5">
          {/* إرسال الـ email مع كود التحقق */}
          <input type="hidden" name="email" value={userEmail} />

          <div className="space-y-2">
            <Label htmlFor="resetCode" className="text-xs font-semibold text-slate-700">
              Reset Code
            </Label>
            <div className="relative">
              <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                id="resetCode"
                name="resetCode"
                type="text"
                placeholder="Enter reset code"
                required
                className="pl-10 h-11 border-slate-200 focus-visible:ring-emerald-500"
              />
            </div>
          </div>

          <Button type="submit" className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-white font-medium">
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