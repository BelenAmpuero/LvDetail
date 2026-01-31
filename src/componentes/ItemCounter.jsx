import { useState, useContext } from "react"
import { CartContext } from "./context/CartContext"
import toast, { Toaster } from 'react-hot-toast'




function ItemCounter({product}) {
  const [count, setCount] = useState(0)
  const { addToCart } = useContext (CartContext)
  const handleAddToCart = () => {
        if (count < 1) return
  addToCart ({...product, quantity : count})
  toast(`Se agregó ${product.title} al carrito`)}
  


  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-xl shadow-sm w-64">
      <p className="text-lg font-semibold">
        Cantidad: <span className="font-bold">{count}</span>
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => setCount(Math.max(0, count - 1))}
          className="px-4 py-2 rounded-lg bg-[#6D28D9] hover:bg-gray-300 active:scale-95 transition"
        >
          −
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 rounded-lg bg-[#6D28D9] hover:bg-gray-300 active:scale-95 transition"
        >
          +
        </button>
      </div>

      <button
        className="mt-2 w-full py-2 rounded-lg bg-black text-white hover:bg-gray-800 active:scale-95 transition font-medium"
      onClick={handleAddToCart}
      >
        Agregar al carrito
      </button>
              <Toaster />

    </div>
  )
}

export default ItemCounter