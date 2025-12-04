import { ShoppingCart } from "lucide-react";

function Button({ text }) {
return (
    <button className="flex items-center gap-2">
    <ShoppingCart />
    {text}
    </button>
);
}

export default Button;