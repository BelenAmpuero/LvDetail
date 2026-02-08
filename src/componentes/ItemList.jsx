import Item from "./Item"

function ItemList ({items}) {  
return (
<div className="flex m-25 flex-wrap gap-3">
        {items.map (prod => <Item key = {prod.id} prod={prod}/>)}
        </div>
) 
}

export default ItemList