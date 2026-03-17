import { useNavigate } from "react-router"

function Item({prod}) {
    const navigate = useNavigate()
if (!prod){
    return (  <h2 className="text-2xl font-semibold text-gray-700">
        Producto no encontrado
    </h2>

)} else {

    return (
        <div key={prod.id} className="card bg-white w-72 shadow-md hover:shadow-xl transition duration-300">
        <figure className="h-56 flex items-center justify-center bg-gray-50">
            <img
            src={prod.url}
            alt={prod.name}
            className="h-full object-contain p-6"
        />
        </figure>

        <div className="card-body items-center text-center flex flex-col gap-3">
        <div>
        <h2 className="card-title text-gray-800">{prod.name}</h2>
        <p>${prod.price}</p>
</div>
        <div className="card-actions w-full">
        <button 
        className="btn btn-outline border-gray-400 text-base-100 hover:bg-accent hover:border-accent hover:text-base-100 w-full transition hover:shadow-[0_0_12px_theme(colors.accent)]"
        onClick={() => navigate (`/item/${prod.id}`)}>Comprar</button>
        </div>
        </div>
        </div>
    )
    
}
}
export default Item