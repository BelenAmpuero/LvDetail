import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../firebase/db";
import { useParams } from "react-router";
import Skeleton from "./Skeleton";
import banner from "../assets/baner1000.png";
import AboutUs from "./AboutUs";


function ItemListContainer (){ 

    const [items, setItems] = useState([])
    const {id} = useParams()
    const [loading, setLoading] = useState(true);
    
useEffect(()=> {
    setLoading(true);

     const fetchData = async () => {
    try {
      const prods = id
        ? await getProductsByCategory(id)
        : await getProducts();

      setItems(prods);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [id]);

if (loading) {
    return(
        <Skeleton/>
    )
}

    return (
      <>
      <img src={banner} className="w-full h-[400px] object-cover"/>
    <ItemList items = {items} /> 
     <AboutUs/>
    </>  
    
 )
}

export default ItemListContainer;