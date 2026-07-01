'use client'
import { Button } from '@/components/ui/button'

import { updateItemCartCount } from '../../cart/cart.action'

type UpdateItemCartCountProps = {
  newid: string;
  count: number;
};

export default function UpdateItemCartCount({newid , count}: UpdateItemCartCountProps) {
  return (
    <div>
      
        
        <Button disabled={count<=1} className='bg-green-500 me-2' onClick={()=>updateItemCartCount(newid,count-1)}>-</Button>
        <span className='me-2'>{count}</span>
          <Button className='bg-green-500' onClick={()=>updateItemCartCount(newid,count+1)}>+</Button>
    </div>
  )
}
