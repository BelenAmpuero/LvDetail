import NavbarContainer from "./componentes/NavbarContainer.jsx"
import ItemListContainer from "./componentes/ItemListContainer.jsx"
import CartContainer from "./componentes/CartContainer.jsx"
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
  return (
    <main>
      <BrowserRouter>
      <NavbarContainer />
      <Routes>
        <Route path='/' element= {<ItemListContainer />} />
        <Route path="/cart" element={<CartContainer/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        </Routes>
</BrowserRouter>
</main>
  )
}

export default App
