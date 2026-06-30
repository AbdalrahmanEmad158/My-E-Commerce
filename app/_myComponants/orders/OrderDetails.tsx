// components/orders/OrderDetails.tsx

import { userOrderData } from "@/interfaces/getAllOrder.interface"
import { CartItem } from "@/interfaces/getUserOrder.interface"
import Image from "next/image"

export default function OrderDetails({
  order
}: {order : userOrderData}) {
  return (
    <div className="mt-10 space-y-6">

      <h2 className="font-semibold text-xl">
        Order Items
      </h2>

      {order.cartItems.map((item:CartItem )=>(
        <div
          key={item._id}
          className="flex justify-between items-center border rounded-2xl p-4"
        >
          <div className="flex gap-4">

            <Image
              src={item.product.imageCover}
              width={80}
              height={80}
              alt=""
              className="rounded-xl"
            />

            <div>
              <h3>
                {item.product.title}
              </h3>

              <p className="text-muted-foreground">
                {item.count} × {item.price} EGP
              </p>

            </div>
          </div>

          <div className="font-bold">
            {item.count * item.price} EGP
          </div>
        </div>
      ))}

      <div className="grid md:grid-cols-2 gap-5">

        <div className="border rounded-2xl p-5">
          <div className="flex items-center gap-3">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="8" fill="#DCFCE7"/>
<path d="M7.50039 10.4203C7.50039 7.97813 9.51602 6 12.0004 6C14.4848 6 16.5004 7.97813 16.5004 10.4203C16.5004 13.2164 13.6832 16.568 12.5066 17.8453C12.2301 18.1453 11.7684 18.1453 11.4918 17.8453C10.3152 16.568 7.49805 13.2164 7.49805 10.4203H7.50039ZM12.0004 12C12.3982 12 12.7797 11.842 13.0611 11.5607C13.3424 11.2794 13.5004 10.8978 13.5004 10.5C13.5004 10.1022 13.3424 9.72064 13.0611 9.43934C12.7797 9.15804 12.3982 9 12.0004 9C11.6026 9 11.221 9.15804 10.9397 9.43934C10.6584 9.72064 10.5004 10.1022 10.5004 10.5C10.5004 10.8978 10.6584 11.2794 10.9397 11.5607C11.221 11.842 11.6026 12 12.0004 12Z" fill="#155DFC"/>
</svg>

  <h3 className="font-semibold">
            Delivery Address
          </h3>
          </div>
        
 <p className="mt-3 mb-3 ">
            
            {order.shippingAddress?.city ||
              ""}
          </p>

          <p className="mb-2 text-gray-500">
            
            {order.shippingAddress?.details ||
              ""}
          </p>



<div className="flex items-center g-3">
  <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.25484 0.586223C5.06968 0.143254 4.58687 -0.0911211 4.12749 0.0330976L3.99859 0.0682539C2.48452 0.480754 1.19077 1.94794 1.56812 3.73388C2.43765 7.83544 5.66499 11.0628 9.76655 11.9323C11.5548 12.312 13.0197 11.0159 13.4322 9.50185L13.4673 9.37294C13.5939 8.91122 13.3572 8.42841 12.9166 8.2456L10.6361 7.29638C10.2494 7.13466 9.80171 7.24716 9.53452 7.57294L8.62984 8.67919C6.98218 7.86122 5.65562 6.49247 4.8939 4.812L5.92984 3.96825C6.25562 3.70341 6.36577 3.25575 6.2064 2.86669L5.25484 0.586223Z" fill="#99A1AF"/>
</svg>

<p>
            {order.shippingAddress?.phone}
          </p>

</div>
          
        </div>

        <div className={`rounded-2xl p-5 ${order.isPaid ? 'bg-blue-100' : 'bg-orange-100'}`}>
          <h3 className="font-semibold">
            Order Summary
          </h3>

          <div className="space-y-2 mt-4">

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>
                {order.shippingPrice}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Tax</span>
              <span>
                {order.taxPrice}
              </span>
            </div>

            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span>
                {order.totalOrderPrice}
              </span>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}