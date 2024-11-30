import { useState } from 'react'
import Cart from './Cart'
import MobileMenu from './MobileMenu'
import AnimatedNavLink from './AnimatedNavLink'

const Navbar = ({ cartItems, setCartItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  const handleRemoveItem = (id) => {
    setCartItems([])
    setIsCartOpen(false)
  }

  return (
    <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-20 py-8 border-b">
      <div className="flex items-center gap-4 lg:gap-12">  
      <button 
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <img src="/images/icon-menu.svg" alt="menu" />
        </button>
        <img src="/images/logo.svg" alt="sneakers" />
        <div className="hidden lg:flex items-center gap-8">
          <AnimatedNavLink href="#">Collections</AnimatedNavLink>
          <AnimatedNavLink href="#">Men</AnimatedNavLink>
          <AnimatedNavLink href="#">Women</AnimatedNavLink>
          <AnimatedNavLink href="#">About</AnimatedNavLink>
          <AnimatedNavLink href="#">Contact</AnimatedNavLink>
        </div>

      </div>
      
      <div className="flex items-center gap-8">
        <button 
          className="relative"
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <img src="/images/icon-cart.svg" alt="cart" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-Orange text-white text-xs rounded-full px-2">
              {totalItems}
            </span>
          )}
        </button>
        <img 
          src="/images/image-avatar.png" 
          alt="avatar" 
          className="w-12 h-12 rounded-full border-2 border-transparent hover:border-Orange cursor-pointer" 
        />
      </div>

      <Cart 
        isOpen={isCartOpen}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
      />
        <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  )
}

export default Navbar