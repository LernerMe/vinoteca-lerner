import React from 'react';
import CartWidget from '../components/CartWidget';


const NavBar = () => {
    return (
        <nav className="navItem">
            <h1 className="navLogo">Vinoteca</h1>
            <ul >
                <li>
                    <a href='#'>Inicio</a>
                </li>
                <li>
                    <a href='#'>Promociones</a>
                </li>
                <li>
                    <a href='#'>Productos</a>
                </li>
                <li>
                    <a href='#'>Nosotros</a>
                </li>
                <li>
                    <a href='#'>Contacto</a>
                </li>
                <li>
                    <CartWidget/>
                </li>
            </ul>
            
        </nav>
    );
};


export default NavBar;