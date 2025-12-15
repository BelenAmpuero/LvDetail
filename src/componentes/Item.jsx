function Item({prod}) {
    return (
         <div key={prod.id} className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
            <img
            src={prod.imagen}
            alt={prod.nombre}
            className="rounded-xl"
        />
        </figure>

        <div className="card-body items-center text-center">
        <h2 className="card-title">{prod.nombre}</h2>
        <p>${prod.precio}</p>

        <div className="card-actions">
        <button className="btn btn-primary">Comprar</button>
        </div>
        </div>
        </div>
    )
    
}

export default Item