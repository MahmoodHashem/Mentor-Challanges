import { useState } from 'react'

const PaymentForm = ({ onNext, total }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    cardHolder: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required'
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Invalid card number'
    }
    
    
    if (!formData.expiry.trim()) {
      newErrors.expiry = 'Expiry date is required'
    } else if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(formData.expiry)) {
      newErrors.expiry = 'Invalid expiry date (MM/YY)'
    }
    
  
    if (!formData.cvc.trim()) {
      newErrors.cvc = 'CVC is required'
    } else if (!/^\d{3,4}$/.test(formData.cvc)) {
      newErrors.cvc = 'Invalid CVC'
    }

   
    if (!formData.cardHolder.trim()) {
      newErrors.cardHolder = 'Card holder name is required'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      onNext(formData)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input 
          name="cardHolder"
          value={formData.cardHolder}
          onChange={handleChange}
          className={`w-full border p-2 rounded ${errors.cardHolder ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Card Holder Name"
        />
        {errors.cardHolder && <p className="text-red-500 text-sm mt-1">{errors.cardHolder}</p>}
      </div>

      <div>
        <input 
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          maxLength="16"
          className={`w-full border p-2 rounded ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Card Number"
        />
        {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <input 
            name="expiry"
            value={formData.expiry}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${errors.expiry ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="MM/YY"
          />
          {errors.expiry && <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>}
        </div>

        <div className="flex-1">
          <input 
            name="cvc"
            value={formData.cvc}
            onChange={handleChange}
            maxLength="4"
            className={`w-full border p-2 rounded ${errors.cvc ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="CVC"
          />
          {errors.cvc && <p className="text-red-500 text-sm mt-1">{errors.cvc}</p>}
        </div>
      </div>

      <div className="text-lg font-bold mb-4">Total: ${total}</div>

      <button 
        type="submit" 
        className="w-full bg-Orange text-white py-3 rounded hover:opacity-90 transition-opacity"
      >
        Pay ${total}
      </button>
    </form>
  )
}

export default PaymentForm
