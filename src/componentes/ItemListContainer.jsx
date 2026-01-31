import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../firebase/db";
import { useParams } from "react-router";
import Skeleton from "./Skeleton";


function ItemListContainer (){ 
    const [items, setItems] = useState([])
    const {id} = useParams()
    const [loading, setLoading] = useState(true);
    
useEffect(()=> {
    setLoading(true);

// const url = 'https://dummyjson.com/products'
// const urlCategories = `https://dummyjson.com/products/category/${id}`

//     fetch(id ? urlCategories : url)
//     .then(res => res.json())
//     .then(data =>
//     {setItems(data.products);
//     setLoading(false);
//     })
//     .catch(() => {
//         setLoading(false);
//     });
getProducts()
.then(prods => {
    setItems(prods);
setLoading(false);
})
.catch(() => {
    setLoading(false);
});
}, [id]);


if (loading) {
    return(
        <Skeleton/>
    )
}

    return <ItemList items = {items} />   
}



export default ItemListContainer;