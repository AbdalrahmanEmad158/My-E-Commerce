
import { getUserOrders } from "@/services/getUserOrders.services";

import OrderCard from './../_myComponants/orders/OrderCard';
import { userOrderData } from "@/interfaces/getAllOrder.interface";
import Link from "next/link";

export default async function allOrders() {



  const userOrder = await getUserOrders()
  const numOfItems = userOrder?.length

  return (
    <>
    <div className="container py-8 space-y-5 mx-auto">
      <div className="flex items-center justify-between">


        <div className="flex items-center gap-3">
          <div className="p-3 bg-green-600 rounded-2xl ms-3">
            <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8156 6L20.2078 3.75H9.79688L8.18906 6H21.8156ZM4.5 6.96094C4.5 6.3375 4.69687 5.72813 5.05781 5.21719L7.35469 2.00625C7.91719 1.21875 8.82656 0.75 9.79219 0.75H20.2031C21.1734 0.75 22.0828 1.21875 22.6453 2.00625L24.9375 5.21719C25.3031 5.72813 25.4953 6.3375 25.4953 6.96094L25.5 19.5C25.5 21.1547 24.1547 22.5 22.5 22.5H7.5C5.84531 22.5 4.5 21.1547 4.5 19.5V6.96094Z" fill="white"/>
</svg>

          </div>


        <div>
            <h1 className="text-3xl font-bold">
        My Orders
      </h1>
      <span className="text-gray-400">Track and manage your {numOfItems} orders</span>
        </div>


        </div>
              <Link 
                        href="/"
                        className="text-green-700 hover:text-green-600 font-medium transition block">
       <div className="bg-green-50 hover:bg-green-200 flex justify-center rounded-2xl p-3"> 
  
         <span className="p-2 me-5 inline">
          <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2.625C6 1.79766 6.67266 1.125 7.5 1.125C8.32734 1.125 9 1.79766 9 2.625V3.75H6V2.625ZM4.875 3.75H3.375C2.75391 3.75 2.25 4.25391 2.25 4.875V9.75C2.25 10.9922 3.25781 12 4.5 12H10.5C11.7422 12 12.75 10.9922 12.75 9.75V4.875C12.75 4.25391 12.2461 3.75 11.625 3.75H10.125V2.625C10.125 1.17422 8.95078 0 7.5 0C6.04922 0 4.875 1.17422 4.875 2.625V3.75ZM5.4375 4.875C5.51137 4.875 5.58451 4.88955 5.65276 4.91782C5.721 4.94609 5.78301 4.98752 5.83525 5.03975C5.88748 5.09199 5.92891 5.154 5.95718 5.22224C5.98545 5.29049 6 5.36363 6 5.4375C6 5.51137 5.98545 5.58451 5.95718 5.65276C5.92891 5.721 5.88748 5.78301 5.83525 5.83525C5.78301 5.88748 5.721 5.92891 5.65276 5.95718C5.58451 5.98545 5.51137 6 5.4375 6C5.36363 6 5.29049 5.98545 5.22224 5.95718C5.154 5.92891 5.09199 5.88748 5.03975 5.83525C4.98752 5.78301 4.94609 5.721 4.91782 5.65276C4.88955 5.58451 4.875 5.51137 4.875 5.4375C4.875 5.36363 4.88955 5.29049 4.91782 5.22224C4.94609 5.154 4.98752 5.09199 5.03975 5.03975C5.09199 4.98752 5.154 4.94609 5.22224 4.91782C5.29049 4.88955 5.36363 4.875 5.4375 4.875ZM9 5.4375C9 5.28832 9.05926 5.14524 9.16475 5.03975C9.27024 4.93426 9.41332 4.875 9.5625 4.875C9.71168 4.875 9.85476 4.93426 9.96025 5.03975C10.0657 5.14524 10.125 5.28832 10.125 5.4375C10.125 5.58668 10.0657 5.72976 9.96025 5.83525C9.85476 5.94074 9.71168 6 9.5625 6C9.41332 6 9.27024 5.94074 9.16475 5.83525C9.05926 5.72976 9 5.58668 9 5.4375Z" fill="#16A34A"/>
</svg>
         </span>

          
                        
                      
                        Continue Shopping
                     
        </div>
         </Link>
      </div>

      {userOrder?.map((order : userOrderData) => (
        <OrderCard
          key={order._id}
          order={order}
        />
      ))}
    </div>
  
   
    </>
    

  )
}

