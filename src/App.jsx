import NavbarContainer from "./componentes/NavbarContainer.jsx"
import ItemListContainer from "./componentes/ItemListContainer.jsx"
import CartContainer from "./componentes/CartContainer.jsx"
import ItemDetailContainer from "./componentes/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from 'react-hot-toast';
import CartProvider from "./componentes/context/CartProvider";




function App() {
  return (
    <main>
      <CartProvider>
      <BrowserRouter>
            <Toaster position="top-right" />
      <NavbarContainer />
      <Routes>
        <Route path='/' element= {<ItemListContainer />} />
        <Route path="/cart" element={<CartContainer/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
</BrowserRouter>
</CartProvider>
</main>
  )
}

export default App
