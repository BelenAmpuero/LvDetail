import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../firebase/db";
import { useParams } from "react-router";
import Skeleton from "./Skeleton";


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

// getProducts()
// .then(prods => { setItems(prods);

// setLoading(false);
// })
// .catch(() => {
//     setLoading(false);
// });
// getProductsByCategory(id)
// }, [id]);


if (loading) {
    return(
        <Skeleton/>
    )
}

    return <ItemList items = {items} />   
}



export default ItemListContainer;