import { Star } from 'iconsax-reactjs'
import React from 'react'
import { FaRegStar,FaStar , FaStarHalf } from 'react-icons/fa'
export default function Rating({rate}:{rate:number}) {
  return (
   <div className='flex text-yellow-400'>
  {[1,2,3,4,5].map((star)=>{
    if (rate>=star) {
        return <FaStar key={star}/>
    }
     else if (rate>=star-0.5) {
        return <FaStarHalf key={star}/>
    }

      else  {
        return <FaRegStar key={star}/>
    }
  })
}
   </div>
  )
}
