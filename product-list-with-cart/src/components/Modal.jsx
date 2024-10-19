/* eslint-disable react/prop-types */


/**
 * Functional component representing a modal for displaying an order confirmation.
 * 
 * @param {Object} props - The properties passed to the Modal component.
 * @param {boolean} props.open - Flag indicating whether the modal is open or not.
 * @param {Array} props.cart - Array of items in the cart to display in the order confirmation.
 * @param {Function} props.close - Function to close the modal and start a new order.
 * @returns {JSX.Element} JSX element representing the order confirmation modal.
 */


import { useRef, useEffect } from "react";

export default function Modal(props) {

    const ref = useRef();

    let isOpen = props.open;

    useEffect(() => {
        if (isOpen) {
            ref.current?.showModal();
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }

    }, [isOpen]);


    return (
        <dialog ref={ref} className="modal">
            <img src="./images/icon-order-confirmed.svg" className="confirm-icon" alt="confirm-icon" />
            <h1>Order Confirmed</h1>
            <p>We hope you enjoy your food!</p>
            <ul>
                {
                    props.cart.map(item => (
                        <li
                            key={item.id}
                            className="order-list">
                            <div className="thumbnail">
                                <img
                                    className="thumbnail-img"
                                    src={`./images/${item.image.thumbnail}`}
                                    alt="product" />
                            </div>
                            <div className="product-details">
                                <h5>{item.name}</h5>
                                <p className="assembled"> <span className="quantity">{item.quantity}x</span> <span className="price2"> @ ${item.price}</span> </p>
                            </div>
                            <h5>
                                ${item.total}
                            </h5>
                        </li>
                    )

                    )
                }
            </ul>

            <div className="grand-total">
                <p>Order Total</p>
                <h3>
                    $
                    {props.cart.reduce((total, item) => total + item.total, 0)}
                </h3>
            </div>
            <button className="confirm-btn" onClick={props.close} >Start new order</button>
        </dialog>
    )


}