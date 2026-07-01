import { getUserCart } from '@/services/getUserCart'
import CartWrapper from '../_myComponants/CartWrapper/CartWrapper'
import  Link  from 'next/link';
import { Button } from '@/components/ui/button';
import ClearAllProductFromCart from '../_myComponants/ClearAllProductFromCart/ClearAllProductFromCart'

 export default async function cart() {
  const cartRes = await getUserCart()

  const {
    cartId,
    numOfCartItems,
    data: { totalCartPrice, products ,cartOwner} 
  } = cartRes || {}

  return (
    <div className="container mx-auto py-10">
      
     <div className='flex justify-between items-center'>
     <div> 
        <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
      <p className="text-gray-500 mb-8">
        You have <span className="text-green-500">{numOfCartItems}  items </span> in your cart
      </p>
     </div>
     <ClearAllProductFromCart/>
     </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-4">
          <CartWrapper products={products} />
        </div>

        {/* RIGHT SIDE */}
        <div className="h-fit sticky top-20 bg-white border rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-white bg-black p-6">Order Summary</h2>

        <div className='p-6 rounded-xl shadow-sm"'>
            <div className="flex justify-between mb-2">
            <span className=' text-gray-600'>Subtotal ( {numOfCartItems} Items)</span>
            <span>{totalCartPrice} EGP</span>
          </div>

          <div className="flex justify-between mb-6 text-green-600">
            <span className=' text-gray-600'>Shipping</span>
            <span>Calculated at checkout</span>
          </div>

          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Estimated Total</span>
            <span className='text-2xl text-green-600'>{totalCartPrice} EGP</span>
          </div>

          <Link href={`/cart/CheakOut/${cartId}`}>
            <Button className="w-full bg-green-600 hover:bg-green-700">
             Checkout
            </Button>
          </Link>
        </div>
        </div>

      </div>
    </div>
  )
}
