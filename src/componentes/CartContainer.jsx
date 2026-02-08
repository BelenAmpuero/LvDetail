import { useContext } from "react"
import { Link } from "react-router"
import { CartContext } from "./context/CartContext"
import CartItem from "./CartItem"
import CheckoutForm from "./CheckOutForm"


function CartContainer(params) {

    const { cart, getTotal } = useContext(CartContext)
    const total = getTotal()

    if (cart.length < 1){
        return (
            <div className = "flex flex-col items-center justify-center min-h-[60vh] text-center gap-4">
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

    return(
        <div className="flex flex-col justify-center mt-20 lg:flex-row">
    <div className = 'w-11/12 lg: w-1/3 p-3 text-xl font-semibold'>
{      cart.map(prod => <CartItem  key={prod.id} name={prod.name} quantity={prod.quantity} img={prod.url}/>)}
    </div>
<div className="w-11/12 lg:w-1/3 p-3">
<p className="text-3xl mb-10">TOTAL: ${total}</p>

<CheckoutForm/>

<div className="m-6 flex justify-center"><Link
to = "/"
className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#4A3568] text-white font-medium transition-all duration-200 hover:bg-gray-800 hover:scale-[1.02] active:scale-95">
Ver más productos
</Link></div>

</div>
</div>
    )
    

}

export default CartContainer