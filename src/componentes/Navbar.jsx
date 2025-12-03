import logo from '../assets/logoSinFondo.png';

function Navbar (){
    return (
        <header className='p-3 flex justify-between'>
            <h1 className='text-3xl'>LvDetail</h1>
            <img src={logo} className='4px'/>
            <nav className='flex gap-5'>
                <a href="">Productos</a>
                <a href="">Contacto</a>
            </nav>
            <button></button>
        </header>
    );
}

export default Navbar
