import logo from '../assets/logoSinFondo.png';
import Button from "./Button";


function Navbar (){
    return (
        <header className='bg-black text-white p-3 flex justify-between items-center'>
            <div className='flex flex-row gap-x-4 items-center'>
            <h1 className='text-3xl'>LvDetail</h1>
            <img src={logo} className='w-15'/>
            </div>
            <nav className='flex gap-5'>
                <a href="">Shampoo</a>
                <a href="">Limpiadores</a>
                <a href="">Acondicionadores</a>
                <a href="">Perfumes</a>
                <a href="">Ceras</a>
                <a href="">Galones</a>
                <a href="">Aerosoles</a>

            </nav>
            <Button text='2' />
        </header>
    );
}

export default Navbar
