import { useState, useEffect} from 'react'
import { getCategories } from '../firebase/db';
import Navbar from './Navbar';



function NavbarContainer() {
    
    const [categories, setCategories] = useState ([])

useEffect(() => {
//     fetch('https://dummyjson.com/products/category-list')
// .then(res => res.json())
// .then(data => setCategories(data));
getCategories()
.then(cat => setCategories(cat))
}, [])

return(
    <Navbar categories = {categories} />
)
}

export default NavbarContainer