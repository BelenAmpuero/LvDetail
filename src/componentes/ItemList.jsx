import Item from "./Item"

function ItemList ({items}) {  
return (
<div className="flex flex-wrap gap-4">
        {items.map(prod => <Item key = {prod.id} prod={prod}/>)}
        </div>
) 
}

export default ItemList