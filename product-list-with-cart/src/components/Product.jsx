/* eslint-disable react/prop-types */


import increment from '../assets/increment.svg'
import decrement from '../assets/decrement.svg'

import { useEffect, useRef } from 'react';



/**
 * Component for displaying a product with the option to add to cart.
 * 
 * @param {Object} props - The props object containing information about the product.
 * @param {Array} props.cart - The array of items in the cart.
 * @param {number} props.id - The unique identifier of the product.
 * @param {string} props.img - The image filename of the product.
 * @param {string} props.category - The category of the product.
 * @param {string} props.name - The name of the product.
 * @param {number} props.price - The price of the product.
 * @param {Object} props.desert - The dessert object to be added to the cart.
 * @param {Object} existingDesert - The existing dessert object in the cart matching the product.
 * @param {Function} props.add - The function to add a product to the cart.
 * @param {Function} props.remove - The function to remove a product from the cart.
 * @returns {JSX.Element} A JSX element representing the product with add to cart functionality.
 */

export default function Product(props) {

    const existingDessert = props.cart.find(item => item.id === props.id);
    const incrementButtonRef = useRef(null);

    const handleKeyDown = (event) => {
        if (existingDessert) {
            if (event.key === 'ArrowUp') {
                event.preventDefault(); // Prevent scrolling
                props.add(props.desert); // Increment quantity
            } else if (event.key === 'ArrowDown') {
                event.preventDefault(); // Prevent scrolling
                props.remove(props.id); // Decrement quantity
            }
        }
    };

    useEffect(() => {
        const button = incrementButtonRef.current;
        if (button) {
            button.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            if (button) {
                button.removeEventListener('keydown', handleKeyDown);
            }
        };
    }, [existingDessert]);

    return (
        <div className='product-container'>
            <div className="product-image">
                <img
                    className={existingDessert ? "active-product" : ''}
                    src={`./images/${props.img}`}
                    alt="product"
                />

                {
                    existingDessert ?
                        <button className='add-btn active-btn' ref={incrementButtonRef}>
                            <img
                                className='decrement-icon'
                                onClick={() => props.remove(props.id)}
                                src={decrement} alt="decrement-icon" />
                            {existingDessert.quantity}
                            <img
                                className='increment-icon'
                                onClick={() => props.add(props.desert)}
                                src={increment}
                                alt="increment-icon" />
                        </button>
                        :
                        <button
                            className='add-btn'
                            onClick={() => props.add(props.desert)}
                        ><img src="./images/icon-add-to-cart.svg" className='add-icon' alt="add-icon" /> Add to Cart</button>
                }

            </div>


            <h5 className='category'>{props.category}</h5>
            <h5 className='name'>{props.name}</h5>
            <h5 className='price'>${props.price}</h5>
        </div>

    )
}