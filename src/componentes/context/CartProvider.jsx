import { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider({children}) {
const [cart, setCart, ] = useState ([])

const getQuantity = () =>cart.reduce((acc, current) => acc + current.quantity, 0)

const addToCart = (product) => setCart(prevCart =>{
const existingProduct = prevCart.some(
    item => item.id === product.id)


if (existingProduct){
    return prevCart.map(item =>
        item.id === product.id
        ? {...item, quantity: item.quantity + product.quantity}
        : item
    );
}
    return [...prevCart, product];

});

const getTotal = () => {
    const total = cart.reduce((acc, current) => acc + (current.quantity*current.price), 0)
    return total.toFixed(2)
}

const removeItem = (id) => {
    setCart(prevCart => prevCart.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item).filter (item => item.quantity > 0))
}


    return(
        <CartContext.Provider value = {{cart, getQuantity, addToCart, getTotal, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;