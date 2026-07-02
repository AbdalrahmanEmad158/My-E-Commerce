import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Data } from "@/interfaces/ProductDeatails.interface"
import { Check, RotateCcw, Shield, Truck } from "lucide-react"
import Rating from "../Rating/Rating"

export function NavTapsProductDetails({product}:{product:Data}) {
  return (
    <Tabs defaultValue="details" className="w-full">
     <TabsList>
        <TabsTrigger value="details"  >details</TabsTrigger>
        <TabsTrigger value="reviews">reviews</TabsTrigger>
        <TabsTrigger value="shipping">shipping</TabsTrigger>
       
      </TabsList>
     
      <TabsContent value="details">

        <div className="border rounded-xl p-6 mt-5">

          <h2 className="text-2xl font-bold mb-6">
            Product Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="space-y-4">

              <div>
                <span className="font-semibold">
                  Product Name:
                </span>{" "}
                {product.title}
              </div>

              <div>
                <span className="font-semibold">
                  Price:
                </span>{" "}
                {product.price} EGP
              </div>

              <div>
                <span className="font-semibold">
                  Brand:
                </span>{" "}
                {product.brand.name}
              </div>

              <div>
                <span className="font-semibold">
                  Category:
                </span>{" "}
                {product.category.name}
              </div>

            </div>

            <div>

              <span className="font-semibold">
                Description:
              </span>

              <p className="text-gray-500 mt-2 leading-7">
                {product.description}
              </p>

            </div>

          </div>

        </div>

      </TabsContent>

      {/* REVIEWS */}
      <TabsContent value="reviews">

        <div className="border rounded-xl p-6 mt-5">

          <div className="flex gap-10 items-center">

            <div className="text-center">

              <h2 className="text-6xl font-bold">
                {product.ratingsAverage}
              </h2>

              <Rating
                rate={product.ratingsAverage}
              />

              <p className="text-gray-500 mt-2">
                Based on {product.ratingsQuantity} reviews
              </p>

            </div>

            <div className="flex-1 space-y-4">

              {[5,4,3,2,1].map((star)=>(
                <div
                  key={star}
                  className="flex items-center gap-3"
                >
                  <span className="w-16">
                    {star} star
                  </span>

                  <div className="flex-1 h-3 bg-gray-200 rounded-full">
                    <div
                      className="h-3 bg-yellow-400 rounded-full"
                      style={{
                        width:`${star*15}%`
                      }}
                    />
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </TabsContent>

      {/* SHIPPING */}
      <TabsContent value="shipping">

        <div className="grid lg:grid-cols-2 gap-6 mt-5">

          <div className="bg-green-50 rounded-xl p-8">

            <div className="flex gap-4 items-center mb-6">

              <div className="bg-green-600 p-4 rounded-full">
                <Truck className="text-white"/>
              </div>

              <h2 className="font-bold text-2xl">
                Shipping Information
              </h2>

            </div>

            <div className="space-y-4">

              {[
                "Free shipping on orders over $50",
                "Standard delivery: 3-5 business days",
                "Express delivery available",
                "Track your order in real-time",
              ].map((item)=>(
                <div
                  key={item}
                  className="flex gap-3"
                >
                  <Check className="text-green-600"/>
                  {item}
                </div>
              ))}

            </div>

          </div>

          <div className="bg-green-50 rounded-xl p-8">

            <div className="flex gap-4 items-center mb-6">

              <div className="bg-green-600 p-4 rounded-full">
                <RotateCcw className="text-white"/>
              </div>

              <h2 className="font-bold text-2xl">
                Returns & Refunds
              </h2>

            </div>

            <div className="space-y-4">

              {[
                "30-day hassle-free returns",
                "Full refund available",
                "Free return shipping",
                "Easy online return process",
              ].map((item)=>(
                <div
                  key={item}
                  className="flex gap-3"
                >
                  <Check className="text-green-600"/>
                  {item}
                </div>
              ))}

            </div>

          </div>

          <div className="col-span-full bg-gray-100 rounded-xl p-6 flex gap-4">

            <div className="bg-white rounded-full p-4">
              <Shield />
            </div>

            <div>
              <h3 className="font-bold text-xl">
                Buyer Protection Guarantee
              </h3>

              <p className="text-gray-500">
                Get a full refund if your order doesn't arrive
                or isn't as described.
              </p>
            </div>

          </div>

        </div>

      </TabsContent>

    </Tabs>
  )
}
