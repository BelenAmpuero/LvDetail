import { useContext } from "react"
import { Link } from "react-router"
import { CartContext } from "./context/CartContext"
import CartItem from "./CartItem"
import CheckoutForm from "./CheckOutForm"
import { createOrder } from "../firebase/db"

function CartContainer() {

  const { cart, getTotal } = useContext(CartContext)
  const total = getTotal()

  const handleCreateOrder = async (userData) => {
    try {
      const orderId = await createOrder(userData, cart, total)
      console.log("Orden creada con ID:", orderId)
    } catch (error) {
      console.error("Error al crear la orden:", error)
    }
  }

  if (cart.length < 1) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-4">

        <div className="text-6xl opacity-30">
          🛒
        </div>

        <h2 className="text-2xl font-semibold text-gray-700">
          Tu carrito está vacío
        </h2>

        <p className="text-gray-500 max-w-sm">
          Todavía no agregaste artículos. Explorá nuestros productos y empezá a armar tu compra.
        </p>

        <Link
          to="/"
          className="mt-4 px-6 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition"
        >
          Ver productos
        </Link>

      </div>
    )
  }

  return (

    <div className="max-w-7xl mx-auto mt-20 px-6 flex flex-col lg:flex-row gap-12">

      {/* PRODUCTOS */}
      <div className="lg:w-2/3">

        <h2 className="text-3xl font-bold mb-10">
          Tu carrito
        </h2>

        {cart.map(prod => (
          <CartItem
            key={prod.id}
            id={prod.id}
            name={prod.name}
            quantity={prod.quantity}
            url={prod.url}
          />
        ))}

      </div>


      {/* CHECKOUT */}
      <div className="lg:w-1/3 bg-gray-[#364153] p-8 rounded-2xl h-fit sticky top-24">

        <p className="text-3xl font-semibold mb-10">
          TOTAL: ${total}
        </p>

        <CheckoutForm onConfirm={handleCreateOrder} />

        <div className="mt-6 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#4A3568] text-white font-medium transition-all duration-200 hover:bg-gray-800 hover:scale-[1.02] active:scale-95"
          >
            Ver más productos
          </Link>
        </div>

      </div>

    </div>
  )
}

export default CartContainer