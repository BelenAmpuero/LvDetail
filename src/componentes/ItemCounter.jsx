import { useState, useContext } from "react"
import { CartContext  } from "./context/CartContext"
import toast, { Toaster } from "react-hot-toast"

function ItemCounter({ product }) {
  const [count, setCount] = useState(1)
  const { addToCart } = useContext(CartContext)

  const increment = () => {
    if (count < product.stock) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: count })
    toast(`Se agregó ${product.name} al carrito`)
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-xl shadow-sm w-64">
      <p className="text-lg font-semibold">
        Cantidad: <span className="font-bold">{count}</span>
      </p>

      <div className="flex gap-3">
        <button
          onClick={decrement}
          disabled={count === 1}
          className="px-4 py-2 rounded-lg bg-[#6D28D9] disabled:opacity-40"
        >
          −
        </button>

        <button
          onClick={increment}
          disabled={count === product.stock}
          className="px-4 py-2 rounded-lg bg-[#6D28D9] disabled:opacity-40"
        >
          +
        </button>
      </div>

      <button
        disabled={product.stock === 0}
        onClick={handleAddToCart}
        className="mt-2 w-full py-2 rounded-lg bg-black text-white disabled:opacity-40"
      >
        Agregar al carrito
      </button>

      <p className="text-sm text-gray-500">
        Stock disponible: {product.stock}
      </p>

      <Toaster />
    </div>
  )
}

export default ItemCounter