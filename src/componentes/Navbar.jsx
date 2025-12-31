import logo from '../assets/logoSinFondo.png'
import Button from "./Button"
import { Link } from 'react-router'


function Navbar ({categories}){

    return (
        <header className='bg-black text-white p-3 flex justify-between items-center'>
            <div className='flex flex-row gap-x-4 items-center'>
            <Link className='text-3xl' to='/'>LvDetail</Link>
            <img src={logo} className='w-15'/>
            </div>
            <nav className='flex gap-5'>
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1">Categorias</div>
                <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-96 p-2 shadow-sm  grid grid-cols-2 gap-2">
                    
            {categories.map(cat => (
            <li key = {cat}>
            <Link to= {`/category/${cat}`}>{cat}</Link>
            </li>
    ))}
        </ul>
</div>
            </nav>
            <Button text='2' />
        </header>
    );
}

export default Navbar
