import { useNavigate } from "react-router"

function Item({prod}) {
    const navigate = useNavigate()
    return (
        <div key={prod.id} className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10  h-60 flex items-center justify-center">
            <img
            src={prod.url}
            alt={prod.name}
            className="rounded-xl"
        />
        </figure>

        <div className="card-body items-center text-center flex flex-col justify-between">
        <div>
        <h2 className="card-title">{prod.name}</h2>
        <p>${prod.price}</p>
</div>
        <div className="card-actions">
        <button 
        className="btn bg-[#6D28D9]  hover:bg-gray-800 active:scale-95 transition"
        onClick={() => navigate (`/item/${prod.id}`)}>Comprar</button>
        </div>
        </div>
        </div>
    )
    
}

export default Item