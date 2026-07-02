'use client'

import { TableCell, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ProductCardItem } from "@/interfaces/getCart.interface"
import UpdateItemCartCount from "../UpdateItemCartCount/UpdateItemCartCount"
import RemoveProductFromCart from "../RemoveProductFromCart/RemoveProductFromCart"

export default function CartItemRow({ product }: { product: ProductCardItem }) {
  const {
    count,
    price,
    product: { imageCover, title, _id: productId }
  } = product

  return (
    <>
      {/* ✅ Desktop Table */}
      <TableRow className="hidden md:table-row">
        
        <TableCell>
          <img
            src={imageCover}
            alt={title}
            className="w-45 h-45 object-cover rounded"
          />
        </TableCell>

        <TableCell>{title.split(' ',9).join(' ')}</TableCell>

        <TableCell>
          <div className="mb-3">
            <UpdateItemCartCount newid={productId} count={count} />
           
          </div>
           
             <RemoveProductFromCart productId={productId}></RemoveProductFromCart>
        </TableCell>

        <TableCell className="text-right">
          {price * count} EGP
        </TableCell>
      </TableRow>

      {/* ✅ Mobile Card */}
      <div className="md:hidden border rounded-lg p-4 mb-4 shadow-sm">
        
        <div className="flex gap-4">
          <img
            src={imageCover}
            alt={title}
            className="w-40 h-40 object-cover rounded"
          />

          <div className="flex-1">
            <h3 className="font-semibold text-sm">{title}</h3>

            <p className="text-green-600 font-bold mt-1">
              {price * count} EGP
            </p>

            <div className="mb-3">
              <UpdateItemCartCount newid={productId} count={count} />

              
            </div>

            <Button variant="destructive" size="sm">
                Remove
              </Button>
          </div>
        </div>

      </div>
    </>
  )
}