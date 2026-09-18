import Link from "next/link";
import { Mail, KeyRound, Lock, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { sendResetCodeAction } from "./forgetPassword.action";

export default function ForgotPasswordStep1() {
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
        <form action={sendResetCodeAction} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-semibold text-slate-700">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
                className="pl-10 h-11 border-slate-200 focus-visible:ring-emerald-500"
              />
            </div>
          </div>

          <Button type="submit" className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-white font-medium">
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