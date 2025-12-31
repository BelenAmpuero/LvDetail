import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";


function ItemListContainer (){ 
    const [items, setItems] = useState([])
    const {id} = useParams()

useEffect(()=> {
const url = 'https://dummyjson.com/products'
const urlCategories = `https://dummyjson.com/products/category/${id}`

    fetch(id ? urlCategories : url)
    .then(res => res.json())
    .then(data => setItems(data.products));
}, [])

    return <ItemList items = {items} />   
}



export default ItemListContainer;