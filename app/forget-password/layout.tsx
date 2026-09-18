import { Mail, Lock, ShieldCheck } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl border border-slate-100 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* JUZ' LEFT - FIXED SIDEBAR (SERVER COMPONENT) */}
        <div className="bg-emerald-50/60 p-8 lg:p-12 flex flex-col justify-between items-center text-center relative border-r border-slate-100">
          <div className="w-full my-auto flex flex-col items-center justify-center">
            
            {/* Visual Graphic Illustration */}
            <div className="relative w-full max-w-xs h-48 bg-gradient-to-br from-emerald-100/50 to-emerald-200/40 rounded-2xl p-6 flex items-center justify-center mb-6 overflow-hidden">
              <div className="absolute top-2 left-2 w-20 h-20 bg-emerald-200/50 rounded-full blur-xl" />
              <div className="absolute bottom-2 right-2 w-24 h-24 bg-emerald-300/40 rounded-full blur-2xl" />

              <div className="relative z-10 flex items-center justify-center gap-2">
                <div className="bg-white p-3 rounded-xl shadow-md -rotate-12">
                  <Mail className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="bg-emerald-100/90 border-2 border-white p-5 rounded-2xl shadow-lg z-20 scale-110">
                  <Lock className="w-8 h-8 text-emerald-600 fill-emerald-600" />
                </div>
                <div className="bg-white p-3 rounded-xl shadow-md rotate-12">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
            </div>

            {/* Pagination Indicators */}
            <div className="flex gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-300" />
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 w-4 transition-all" />
            </div>

            {/* Content Text */}
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Reset Your Password
            </h2>
            <p className="text-sm text-slate-500 max-w-sm mb-6 leading-relaxed">
              Don't worry, it happens to the best of us. We'll help you get back into your account in no time.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span>Email Verification</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Secure Reset</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-emerald-600" />
                <span>Encrypted</span>
              </div>
            </div>
          </div>
        </div>

        {/* JUZ' RIGHT - DYNAMIC CONTENT AREA */}
        <div className="p-8 lg:p-12 flex flex-col justify-between">
          {children}
        </div>

      </div>
    </div>
  );
}