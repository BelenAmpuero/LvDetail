import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const products = [
    {id: 1, nombre: "Tox Shine Shampoo Active Foam", precio: 8500, imagen: "/img/shampoo-active-foam.jpg", categoria: "shampoo"},
    {id: 2,nombre: "Tox Shine Shampoo pH Neutro", precio: 7900, imagen: "/img/shampoo-ph-neutro.jpg",categoria: "shampoo"},
    {id: 3, nombre: "Tox Shine Limpiador Multiuso Interior", precio: 9200, imagen: "/img/limpiador-multiuso.jpg", categoria: "limpiadores"},
    {id: 4, nombre: "Tox Shine Limpiador de Llantas Pro", precio: 9800, imagen: "/img/limpiador-llantas.jpg", categoria: "limpiadores"},
    {id: 5, nombre: "Tox Shine Acondicionador de Plásticos Satinado", precio: 8700, imagen: "/img/acondicionador-plasticos.jpg", categoria: "acondicionadores"},
    {id: 6, nombre: "Tox Shine Acondicionador de Cuero Premium", precio: 10500, imagen: "/img/acondicionador-cuero.jpg", categoria: "acondicionadores"},
    {id: 7, nombre: "Tox Shine Perfume Auto Fresh Citrus", precio: 5600, imagen: "/img/perfume-citrus.jpg", categoria: "perfumes"},
    {id: 8, nombre: "Tox Shine Cera Líquida Carnauba Shine", precio: 11200, imagen: "/img/cera-liquida.jpg", categoria: "ceras"},
    {id: 9, nombre: "Tox Shine Cera en Pasta Extreme Gloss", precio: 12500, imagen: "/img/cera-pasta.jpg", categoria: "ceras"},
    {id: 10, nombre: "Tox Shine Shampoo Concentrado Galón 5L", precio: 26500, imagen: "/img/shampoo-galon-5l.jpg", categoria: "galones"},
    {id: 11, nombre: "Tox Shine Aerosol Brillo Rápido", precio: 6200, imagen: "/img/aerosol-brillo.jpg", categoria: "aerosoles"}
];

function ItemListContainer (){ 
    const [items, setItems] = useState([])

const getItems = () => new Promise ((resolve) => {
    setTimeout (() => {
        resolve(products)
    },3000)
})

useEffect(()=> {
    getItems()
    .then(res => setItems(res))
}, [])

    return <ItemList items = {items} />   
    
}

export default ItemListContainer;