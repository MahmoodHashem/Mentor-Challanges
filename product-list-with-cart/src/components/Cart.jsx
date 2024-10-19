/* eslint-disable react/prop-types */




/**
 * Component for rendering the shopping cart.
 * 
 * @param {Array} cart - The list of items in the cart.
 * @param {Function} remove - Function to remove an item from the cart.
 * @param {Function} openModal - Function to open the modal for confirming the order.
 * @returns {JSX.Element} JSX element representing the shopping cart with items, total, and order confirmation button.
 */
export default function Cart({ cart, remove, openModal }) {
    return (
        <div className="cart">
            <h2 className="cartTitle">Your Cart({cart.length})</h2>
            {
                cart.length ?
                <>
                    <ul>
                        {cart.map(item => (
                            <li
                                key={item.id}
                                className="list">
                                <div>
                                    <h4>{item.name}</h4>
                                    <p className="assembled"> <span className="quantity">{item.quantity}x</span> <span className="price2"> @ ${item.price}</span>  <span className="total"> ${item.total}</span>  </p>
                                </div>
                                <div className="cross">
                                    <img onClick={() => remove(item.id)} src="./images/icon-remove-item.svg" className="remove-icon" alt="remove-icon" />
                                </div>
                            </li>

                        ))}
                    </ul>
                    <div className="grand-total">
                        <p>Order Total</p>
                        <h3>
                         $
                        {cart.reduce((total, item) => total + item.total, 0)}
                    </h3>
                    </div>
                    <div className="carbon">
                        <img src="./images/icon-carbon-neutral.svg" alt="carbon-icon" />
                        <p>This is a <b>carbon-neutral</b> delivery</p>
                    </div>
                    <button className="confirm-btn" onClick={openModal} >Confirm Order</button>
                </>
                :
                <div className="empty">
                    <img src="./images/illustration-empty-cart.svg" alt="" />
                    <h3>Your added items will apear here</h3>
                </div>
            }

            

        </div>
    )
}