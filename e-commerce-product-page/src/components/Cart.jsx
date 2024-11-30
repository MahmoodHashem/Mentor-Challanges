
import { useState } from "react"
import CheckoutModal from "./checkout/CheckoutModal"

const Cart = ({ isOpen, items, onRemoveItem }) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)


  
  return (
    <>
      <div className={`absolute z-20 top-20 right-0 md:right-4 lg:right-20 w-full md:w-[360px] bg-white rounded-lg shadow-2xl ${!isOpen && 'hidden'} `}>
        <div className="p-6 border-b">
          <h3 className="font-bold text-veryDarkBlue">Cart</h3>
        </div>
        
        <div className="p-6 content-center min-h-[188px]">
          {items.length === 0 ? (
            <div className="h-full flex   items-center justify-center">
              <p className="text-darkGrayishBlue font-bold">Your cart is empty.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded" />
                  <div className="flex-1">
                    <p className="text-darkGrayishBlue">{item.name}</p>
                    <p className="text-darkGrayishBlue">
                      ${item.price.toFixed(2)} x {item.quantity}{' '}
                      <span className="font-bold text-veryDarkBlue">
                        ${total.toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <button onClick={onRemoveItem}>
                    <img src="/images/icon-delete.svg" alt="delete" className="hover:opacity-75" />
                  </button>
                </div>
              ))}
              <button 
              className="w-full bg-Orange text-white py-4 rounded-lg hover:opacity-75"
              onClick={() => setIsCheckoutOpen(true)}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
       <CheckoutModal 
       isOpen={isCheckoutOpen}
       onClose={() => setIsCheckoutOpen(false)}
       onRemoveItem={onRemoveItem}
       total={total}
     />
     </>
    )
  }
  
  export default Cart
  