import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CartPage.css'; // Ensure this file contains the CSS styles you provided
import NavBar from '../../component/navbar/NavBar';

function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Fetch cart items from the API
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/cart/');
             console.log(response.data.items);               
 setCartItems(response.data.items);
                calculateTotal(response.data.items);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const calculateTotal = (items) => {
        const total = items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
        setTotal(total);
    };

    const handleQuantityChange = (id, quantity) => {
        // Update quantity in the state and recalculate total
        const updatedItems = cartItems.map(item => 
            item.id === id ? { ...item, quantity: quantity } : item
        );
        setCartItems(updatedItems);
        calculateTotal(updatedItems);
    };

    const handleRemoveItem = async (id) => {
        // Remove item from the state and recalculate total
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
        calculateTotal(updatedItems);
        const response = await axios.post('http://localhost:8080/api/v1/cart/remove?userId=2&cartItemId='+id);
        console.log(response);
    };

    return (
        <>
            <NavBar />
            <div className="cart-container">
                <h1>Your Cart</h1>
                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <div className="product-image">
                            <img src={item.product.img_url} alt="Placholder Image 2" className="product-frame"/>

                                </div>
                                <div className="product-details">
                                    <h1><strong>{item.product.product_name}</strong></h1>
                                    <p>Price: ${item.product.price}</p>
                                    <p>Quantity: 
                                        <input 
                                            type="number" 
                                            value={item.quantity} 
                                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                        />
                                    </p>
                                    <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="summary">
                    <div className="total">
                        <div className="total-title">Total</div>
                        <div className="total-value">${total.toFixed(2)}</div>
                    </div>
                    {/* Additional summary elements here */}
                </div>
            </div>
        </>
    );
}

export default CartPage;
