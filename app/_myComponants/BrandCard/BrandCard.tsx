import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { dataOfBrands, getAllBrandsData } from "@/interfaces/getAllBrands.interface"



export default function BrandCard({ brand }: { brand: dataOfBrands}) {
  return (
    <Link href={`/Brands/${brand._id}`}>
 <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
  <CardContent className="flex flex-col items-center justify-center p-6">
        <div className="relative w-20 h-20 mb-4">
      <Image
        src={brand.image}
        alt={brand.name}
        fill
        className="object-contain transition-transform duration-300 group-hover:scale-110 pointer-events-none"
      />
    </div>

    <h3 className="text-sm font-semibold text-center group-hover:text-red-400">
      {brand.name}
    </h3>

    <p
      className="
        text-xs mt-2 text-white bg-red-600 px-2 py-1 rounded
        opacity-0 translate-y-2
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-300
      "
    >
      View Products
    </p>

  </CardContent>
</Card>
    </Link>
  )
}