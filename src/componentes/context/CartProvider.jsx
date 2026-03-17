import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {

const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart")
  return savedCart ? JSON.parse(savedCart) : []
})

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart))
}, [cart])

// cantidad total
const getQuantity = () =>
  cart.reduce((acc, item) => acc + item.quantity, 0)

// total precio
const getTotal = () =>
  cart.reduce((acc, item) => acc + item.quantity * item.price, 0)

// agregar producto
const addToCart = (product) => {
  setCart(prevCart => {

    const existing = prevCart.find(item => item.id === product.id)

    if (existing) {
      return prevCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      )
    }

    return [...prevCart, product]
  })
}

// sumar unidad
const increaseItem = (id) => {
  setCart(prevCart =>
    prevCart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  )
}

// restar unidad
const decreaseItem = (id) => {
  setCart(prevCart =>
    prevCart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  )
}

// eliminar producto completo
const removeItem = (id) => {
  setCart(prevCart => prevCart.filter(item => item.id !== id))
}

// vaciar carrito
const clearCart = () => {
  setCart([])
}

return (
  <CartContext.Provider
    value={{
      cart,
      addToCart,
      increaseItem,
      decreaseItem,
      removeItem,
      clearCart,
      getQuantity,
      getTotal
    }}
  >
    {children}
  </CartContext.Provider>
)

}

export default CartProvider