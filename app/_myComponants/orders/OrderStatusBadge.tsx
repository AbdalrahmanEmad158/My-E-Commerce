// components/orders/OrderStatusBadge.tsx

import { Badge } from "@/components/ui/badge"
import { Truck, Clock3, Check } from "lucide-react"

export default function OrderStatusBadge({
  isPaid,
  isDelivered,
}: {
  isPaid: boolean
  isDelivered: boolean
}) {
  if (isDelivered)
    return (
      <Badge className="bg-green-100 text-green-700">
        <Check size={14}/>
        Delivered
      </Badge>
    )

  if (isPaid)
    return (
      <Badge className="bg-blue-100 text-blue-700">
        <Truck size={14}/>
        On the way
      </Badge>
    )

  return (
    <Badge className="bg-orange-100 text-orange-700">
      <Clock3 size={14}/>
      Processing
    </Badge>
  )
}