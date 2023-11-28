import React from 'react';
import './Navbar.modules.css'; // Asegúrate de importar tus estilos CSS correctamente

const Navbar = () => {
    return (
        <div className="colorNavbar">
            <h2 className="colorText">Madre Rustica</h2>
            <div className='botones'>
                <button className='boton'>Productos</button>
                <button className='boton'>Servicios</button>
                <button className='boton'>Sobre Nosotros</button>
            </div>
        </div>
    );
};

export default Navbar;
