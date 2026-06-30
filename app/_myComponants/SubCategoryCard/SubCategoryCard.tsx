import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Folder } from "lucide-react"

interface SubCategory {
  _id: string
  name: string
  slug: string
}

export default function SubCategoryCard({ item }: { item: SubCategory }) {
  return (
    <Link href={`/subCtegories/${item._id}`} className="group block">
      <Card className="rounded-2xl border bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        
        <CardContent className="p-6 flex flex-col items-start gap-4">
          
          {/* Icon */}
          <div className="
            w-14 h-14 flex items-center justify-center 
            rounded-xl bg-green-100 text-green-600
            group-hover:bg-green-600 group-hover:text-white
            transition
          ">
            <Folder className="w-6 h-6" />
          </div>

          {/* Title */}
          <h3 className="font-semibold text-base leading-snug group-hover:text-red-400">
            {item.name}
          </h3>

  <p
      className="
        text-xs mt-2 text-white bg-red-600 px-2 py-1 rounded
        opacity-0 translate-y-2
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-300
      "
    >
      Browse Products
    </p>
        </CardContent>

      </Card>
    </Link>
  )
}