import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ConfirmationStep from './ConfimationStep'
import PaymentForm from './PaymentForm'
import ShippingForm from './ShippingForm'

const CheckoutModal = ({ isOpen, onClose, total, onRemoveItem }) => {
  const [step, setStep] = useState(1)
  
  function handleClosingCheckout(){
    onClose()
    setStep(1)
    onRemoveItem()
  }

  const steps = {
    1: <ShippingForm onNext={() => setStep(2)} />,
    2: <PaymentForm onNext={() => setStep(3)} total={total} />,
    3: <ConfirmationStep onClose={handleClosingCheckout} />
  }


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center px-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-lg p-8 max-w-md w-full"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Checkout</h2>
              <button onClick={onClose}>
                <img src="/images/icon-close.svg" alt="close icom" />
              </button>
            </div>
            
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map(num => (
                <div 
                  key={num}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= num ? 'bg-Orange text-white' : 'bg-gray-200'
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>

            {steps[step]}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}




export default CheckoutModal