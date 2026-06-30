import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
 
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">

        {Array.from({ length: 10 }).map((_, i) => (
          <Card key={i} className="w-full max-w-sm mx-auto">

            {/* image skeleton */}
            <Skeleton className="h-[200px] w-full rounded-t-lg" />

            <CardHeader>
              <Skeleton className="h-5 w-[80%] mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-[90%]" />
            </CardHeader>

            <CardContent>
              <Skeleton className="h-4 w-[60%]" />
            </CardContent>

            <CardFooter>
              <Skeleton className="h-10 w-full rounded-md" />
            </CardFooter>

          </Card>
        ))}

      </div>
    </div>
  )
}