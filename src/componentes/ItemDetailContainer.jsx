import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail"
import Skeleton from "./Skeleton";


function ItemDetailContainer() {
    const [detail, setDetail] = useState ()
    const {id} = useParams ()

    useEffect (() =>{
fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then(data => setDetail(data));
}, [id])

if (!detail) {

  return(
    <Skeleton/>
  )
  
}

return (
<ItemDetail detail = {detail}/> 
)
}

export default ItemDetailContainer