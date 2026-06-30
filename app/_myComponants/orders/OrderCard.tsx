"use client"

import {
  Card,
  CardContent
} from "@/components/ui/card"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible"

import Image from "next/image"

import {
  Calendar,
  Package,
  ChevronDown
} from "lucide-react"

import { useState } from "react"

import OrderDetails from "./OrderDetails"
import OrderStatusBadge from "./OrderStatusBadge"
import { userOrderData } from "@/interfaces/getAllOrder.interface"

export default function OrderCard({ order }: {order : userOrderData}) {
  const [open,setOpen]=useState(false)
  const numberofCartItem = order.cartItems.length

  return (
    <Card className="rounded-3xl">
      <CardContent className="p-6">

        <Collapsible
          open={open}
          onOpenChange={setOpen}
        >

          <div className="flex flex-col lg:flex-row gap-6 justify-between">

            <div className="flex gap-5">

              <div className="relative">
                <Image
                src={order.cartItems[0].product.imageCover}
                width={120}
                height={120}
                alt="order.cartItems[0].product.imageCover"
                className="rounded-xl border"
              />

              <span className="rounded bg-black absolute top-1 right-1 text-white">+ {numberofCartItem}</span>
              </div>

              <div className="space-y-4">

                <OrderStatusBadge
                  isPaid={order.isPaid}
                  isDelivered={order.isDelivered}
                />

                <h2 className="font-bold text-3xl">
                  #{order.id}
                </h2>

                <div className="flex items-center gap-4 text-muted-foreground">

                  <div className="flex gap-2 items-center">
                    <Calendar size={16}/>
                    {new Date(
                      order.createdAt
                    ).toLocaleDateString()}
                  </div>

                  <div className="flex gap-2 items-center">
                    <Package size={16}/>
                    {order.cartItems.length} items
                  </div>

                  <div className="flex gap-2 items-center">
                   
                    <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.00234375 4.42031C0.00234375 1.97813 2.01797 0 4.50234 0C6.98672 0 9.00234 1.97813 9.00234 4.42031C9.00234 7.21641 6.18516 10.568 5.00859 11.8453C4.73203 12.1453 4.27031 12.1453 3.99375 11.8453C2.81719 10.568 0 7.21641 0 4.42031H0.00234375ZM4.50234 6C4.90017 6 5.2817 5.84196 5.563 5.56066C5.84431 5.27936 6.00234 4.89782 6.00234 4.5C6.00234 4.10218 5.84431 3.72064 5.563 3.43934C5.2817 3.15804 4.90017 3 4.50234 3C4.10452 3 3.72299 3.15804 3.44168 3.43934C3.16038 3.72064 3.00234 4.10218 3.00234 4.5C3.00234 4.89782 3.16038 5.27936 3.44168 5.56066C3.72299 5.84196 4.10452 6 4.50234 6Z" fill="#99A1AF"/>
</svg>
{order.shippingAddress?.city}

                  </div>

                </div>

                <h3 className="font-bold text-4xl">
                  {order.totalOrderPrice} EGP
                </h3>

              </div>

            </div>

            <CollapsibleTrigger asChild>
              <button className="h-12 px-6 rounded-xl bg-secondary flex items-center gap-2">
                Details
                <ChevronDown size={18}/>
              </button>
            </CollapsibleTrigger>

          </div>

          <CollapsibleContent>
            <OrderDetails order={order}/>
          </CollapsibleContent>

        </Collapsible>

      </CardContent>
    </Card>
  )
}