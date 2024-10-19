import Product from "./components/Product"

import products from './assets/data.js'


import { useEffect, useState } from 'react'
import Cart from "./components/Cart.jsx";
import Modal from "./components/Modal.jsx";


/**
 * React component representing an app for managing a dessert list and cart.
 * Manages adding, decrementing, and removing items from the cart.
 * Provides functionality to start over the cart and display a modal.
 * 
 * @function App
 * @returns {JSX.Element} JSX element representing the app interface
 * 
 * @function addToCart
 * @param {Object} dessert - The dessert object to add to the cart
 * 
 * @function decrementItem
 * @param {string} id - The id of the dessert item to decrement in the cart
 * 
 * @function removeFromCart
 * @param {string} id - The id of the dessert item to remove from the cart
 * 
 * @function startOver - Resets the cart and closes the modal
 * 
 * @constant productsList - List of JSX elements representing products to display
 * @constant cart - Array containing the items in the cart
 * @constant isModalOpen - Boolean indicating if the modal is open
 * @useEffect - Listens for window resize events and updates the width state to update the image of the product
 */
function App() {

  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [width, setWidth] = useState(window.innerWidth); 




  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setWidth(window.innerWidth)
    })
    
  }, [width])


  console.log(width)


  const addToCart = (dessert) => {
    setCart((prevCart) => {
      const existingDessert = prevCart.find(item => item.id === dessert.id);

      if (existingDessert) {
        return prevCart.map(item =>
          item.id === dessert.id
            ? { ...item, quantity: item.quantity + 1, total: item.total + dessert.price }
            : item
        );
      } else {

        return [...prevCart, { ...dessert, quantity: 1, total: dessert.price }];
      }
    });

  };

  const decrementItem = (id) => {
    setCart((prevCart) => {
      const existingDessert = prevCart.find(item => item.id === id);
      if (existingDessert) {
        if (existingDessert.quantity > 1) {
          return prevCart.map(item =>
            item.id === id
              ? {
                ...item,
                quantity: item.quantity - 1,
                total: item.total - existingDessert.price,
              }
              : item
          );
        } else {
          // Remove item if quantity is 1
          return prevCart.filter(item => item.id !== id);
        }
      }
      return prevCart;
    });
  };

  function removeFromCart (id)  {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };


  function startOver(){
    setIsModalOpen(false)
    setCart([])
  }

   
  const productsList = products.map((product) => {
    return <Product
        id={product.id}
        key={product.id}
        desert={product}
        img={width > 750 ? product.image.desktop : product.image.mobile}
        name={product.name}
        category = {product.category}
        price={product.price}
        add={addToCart}
        remove={decrementItem}
        cart={cart}
    />
})
  return (
    <>
    <Modal open={isModalOpen} close={startOver} cart={cart}/>
      <div className="main">
        <h1>Deserts</h1>
        <div className="products">
          {productsList}
        </div>
        
        <Cart cart={cart} remove = {removeFromCart} openModal={()=> setIsModalOpen(true)} />
      </div>
    </>

  )
}

export default App
