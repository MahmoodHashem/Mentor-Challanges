import { useState } from 'react'
import Navbar from './Navbar'
import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
import { Toaster } from 'react-hot-toast'


function App() {
  const [cartItems, setCartItems] = useState([])
  const [selectedProductId, setSelectedProductId] = useState(1)

  const products = {
    1: { name: "Fall Limited Edition Sneakers", price: 125.00, image: "/images/image-product-1-thumbnail.jpg" },
    2: { name: "Fall Limited Edition Sneakers", price: 125.00, image: "/images/image-product-2-thumbnail.jpg" },
    3: { name: "Fall Limited Edition Sneakers", price: 125.00, image: "/images/image-product-3-thumbnail.jpg" },
    4: { name: "Fall Limited Edition Sneakers", price: 125.00, image: "/images/image-product-4-thumbnail.jpg" }
  }

  const handleAddToCart = (quantity) => {
    const newItem = {
      id: selectedProductId,
      ...products[selectedProductId],
      quantity
    }
    
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === selectedProductId)
      if (existingItem) {
        return prev.map(item => 
          item.id === selectedProductId 
            ? {...item, quantity: item.quantity + quantity}
            : item
        )
      }
      return [...prev, newItem]
    })
  }

  return (
    <div className="font-Kumb min-h-screen">
       <Toaster position="top-center" />
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <main className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:py-4 lg:py-8">
          <ProductGallery 
            onImageSelect={setSelectedProductId}
          />
          <ProductInfo 
            product={products[selectedProductId]}
            onAddToCart={handleAddToCart}
          />
        </div>
      </main>
    </div>
  )
}


export default App