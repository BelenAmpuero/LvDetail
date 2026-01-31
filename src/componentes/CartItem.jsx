import CheckoutForm from "./CheckOutForm"
import { useContext } from "react"
import { CartContext } from "./context/CartContext"

function CartItem ({id, name, quantity, url}) {

    const { removeItem } = useContext(CartContext)

    return (
        <div className="flex justify-around items-center border-b p-3 mb-3">
            <img src={url} alt={name} className="w-20 h-20"/>
            <p>{name} x {quantity}</p>
            <button onClick={() => removeItem(id)} className="bg-red-900 mt-2 px-3 py-1 text-sm rounded-lg text-white">Eliminar</button>
        </div>
    )

}
export default CartItem