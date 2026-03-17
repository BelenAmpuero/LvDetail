import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail"
import Skeleton from "./Skeleton";
import { getDetail } from "../firebase/db";


function ItemDetailContainer() {
    const [detail, setDetail] = useState ()
    const {id} = useParams ()

    useEffect (() =>{


getDetail(id)
      .then(prod => setDetail(prod))
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