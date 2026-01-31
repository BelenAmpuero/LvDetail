import logo from '../assets/logoSinFondo.png'
import CartWidget from "./CartWidget"
import { Link } from 'react-router'


function Navbar ({categories}){

    return (
        <header className='bg-black text-white p-3 flex justify-between items-center'>
            <div className='flex flex-row gap-x-4 items-center'>
            <Link className='text-3xl' to='/'>LvDetail</Link>
            <img src={logo} className='w-15'/>
            </div>
            <nav className='flex gap-5'>
            <div className="relative group">
                <div tabIndex={0} role="button" className="btn m-1">Categorias</div>
                <ul tabIndex={-1} className="absolute top-full left-0 hidden group-hover:grid bg-base-100 rounded-box w-96 p-2 shadow-sm  grid grid-cols-2 gap-2 z-50">
                    
            {categories.map(cat => (
            <li key = {cat.id}>
            <Link to= {`/category/${cat.name}`}>{cat.name}</Link>
            </li>
    ))}
        </ul>
</div>
            </nav>
            <CartWidget />
        </header>
    );
}

export default Navbar
