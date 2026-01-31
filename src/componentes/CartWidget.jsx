import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

function CartWidget({ text }) {
const navigate = useNavigate()
const {getQuantity} = useContext (CartContext)
const total = getQuantity ()

return (
    <button className="relative m-4 flex items-center gap-2" onClick= {() => navigate('/cart')}>
    <ShoppingCart />
    {total > 0 && ( <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{total}</span>)}
    {text}
    </button>
);
}

export default CartWidget