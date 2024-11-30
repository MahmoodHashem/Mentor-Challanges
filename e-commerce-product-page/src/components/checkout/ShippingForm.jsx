import { useState } from 'react'

const ShippingForm = ({ onNext }) => {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    zipCode: '',
    phone: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'City is required'
    }
    
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP code is required'
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Invalid ZIP code format'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format'
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
          name="address"
          value={formData.address}
          onChange={handleChange}
          className={`w-full border p-2 rounded ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Street Address"
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>

      <div>
        <input 
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={`w-full border p-2 rounded ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="City"
        />
        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
      </div>

      <div>
        <input 
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          className={`w-full border p-2 rounded ${errors.zipCode ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="ZIP Code"
        />
        {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
      </div>

      <div>
        <input 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full border p-2 rounded ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Phone Number"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <button 
        type="submit" 
        className="w-full bg-Orange text-white py-3 rounded hover:opacity-90 transition-opacity"
      >
        Continue to Payment
      </button>
    </form>
  )
}

export default ShippingForm
