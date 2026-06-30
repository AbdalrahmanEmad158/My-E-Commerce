'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { ProductCardItem } from '@/interfaces/getCart.interface'
import CartItemRow from "../CartItem/CartItemRow"


export default function CartTable({ products }: { products: ProductCardItem[] }) {
  return (
    <Table>
      <TableHeader className="hidden md:table-header-group">
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Actions</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map((product) => (
          <CartItemRow key={product._id} product={product} />
        ))}
      </TableBody>
    </Table>
  )
}