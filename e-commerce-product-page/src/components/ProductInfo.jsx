import { useState } from 'react'
import { toast } from 'react-hot-toast'


const ProductInfo = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0)

  const handleIncrement = () => {
    setQuantity(prev => prev + 1)
    
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1)
    }
  }

  const handleAddToCart = () => {
    if (quantity === 0) {
      toast.error('Please select at least one item', {
        style: {
          border: '1px solid #ff7d1a',
          padding: '16px',
          color: '#1D2025',
        },
        iconTheme: {
          primary: '#ff7d1a',
          secondary: '#FFFAEE',
        },
      })
      return
    }
    onAddToCart(quantity)
    setQuantity(0)
  }

  return (
    <div className="lg:w-1/2 p-8">
      <h2 className="text-Orange uppercase tracking-wider font-bold text-sm mb-4">Sneaker Company</h2>
      <h1 className="font-bold text-4xl lg:text-5xl mb-8 text-veryDarkBlue"> Fall Limited Edition Sneakers</h1>
      <p className="text-darkGrayishBlue mb-8">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, theyll withstand everything the weather can offer.
      </p>
      <div className="flex items-center gap-4 ">
        <span className="text-3xl font-bold">$125.00</span>
        <span className="bg-paleOrange text-Orange px-2 rounded font-bold">50%</span>
      </div>
      <h3 className='mt-2 mb-4 line-through text-gray-500 ' >$250.00</h3>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex items-center justify-between bg-lightGrayishBlue rounded-lg p-4 lg:w-1/3">
          <button 
            className="text-Orange font-bold text-2xl hover:opacity-75"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="font-bold">{quantity}</span>
          <button 
            className="text-Orange font-bold text-2xl hover:opacity-75"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <button 
          className="bg-Orange text-white py-4 px-8 rounded-lg flex items-center justify-center gap-4 hover:opacity-75 lg:flex-1"
          onClick={handleAddToCart}
        >
          <img src="/images/icon-cart.svg" alt="cart" className="filter brightness-0 invert" />
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductInfo
