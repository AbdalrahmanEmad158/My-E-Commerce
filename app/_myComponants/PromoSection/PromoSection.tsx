"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaFire } from "react-icons/fa";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PromoSection() {
  return (
    <div className="container py-10">
      <div className="grid md:grid-cols-2 gap-8">

        {/* Left Card */}
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <Card className="relative overflow-hidden rounded-3xl border-0 bg-gradient-to-r from-emerald-500 to-emerald-700 p-12 text-white">

            {/* circles */}
            <div className="absolute -top-12 -right-10 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-12 -left-10 w-32 h-32 rounded-full bg-white/10" />

            <div className="space-y-8 relative z-10">

              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2">
                <FaFire />
                <span className="font-medium">
                  Deal of the Day
                </span>
              </div>

              <div>
                <h2 className="text-5xl font-bold">
                  Fresh Organic Fruits
                </h2>

                <p className="mt-4 text-lg text-white/80">
                  Get up to 40% off on selected organic fruits
                </p>
              </div>

              <div className="flex items-center gap-5 flex-wrap">

                <h3 className="text-5xl font-bold">
                  40% OFF
                </h3>

                <span className="text-xl">
                  Use code:
                  <span className="font-bold ml-2">
                    ORGANIC40
                  </span>
                </span>

              </div>

             <Link href={'/Products'}>
              <Button
                className="hover:cursor-pointer rounded-full bg-white text-emerald-600 hover:bg-slate-100 px-8 py-7"
              >
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5"/>
              </Button></Link>

            </div>
          </Card>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ x: 250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: .2
          }}
        >
          <Card className="relative overflow-hidden rounded-3xl border-0 bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 p-12 text-white">

            <div className="absolute -top-12 -right-10 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-12 -left-10 w-32 h-32 rounded-full bg-white/10" />

            <div className="space-y-8 relative z-10">

              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2">
                <Sparkles size={18}/>
                <span className="font-medium">
                  New Arrivals
                </span>
              </div>

              <div>
                <h2 className="text-5xl font-bold">
                  Exotic Vegetables
                </h2>

                <p className="mt-4 text-lg text-white/80">
                  Discover our latest collection of premium vegetables
                </p>
              </div>

              <div className="flex items-center gap-5 flex-wrap">

                <h3 className="text-5xl font-bold">
                  25% OFF
                </h3>

                <span className="text-xl">
                  Use code:
                  <span className="font-bold ml-2">
                    FRESH25
                  </span>
                </span>

              </div>

          <Link href={'/Products'}>
              <Button
                className="hover:cursor-pointer rounded-full bg-white text-orange-500 hover:bg-slate-100 px-8 py-7"
              >
                Explore Now
                <ArrowRight className="ml-2 w-5 h-5"/>
              </Button>
              </Link>

            </div>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}