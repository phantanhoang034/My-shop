import React from 'react'
import { Link } from 'react-router-dom';
const Menu = (active) => {
    const check = () => {
        active.setActive(!active.active);
    }
    return (
        <form className={active.active ? "menu" : "menu menu-close"}> 
            <div className='menu-menu'>
                <ul>
                <li><Link to="/Boy" className='link'>NAM</Link></li>
                <li><Link to="/Girl" className='link'>NỮ</Link></li>
                <li><Link to="/" className='link'>NEW ARRIVALS</Link></li>
                <li><Link to="/" className='link'>COLLECTION</Link></li>
                <li><Link to="/" className='link'>SUMMER SALE</Link></li>
                </ul>
            </div>
            <i 
                className="fa-solid fa-xmark"
                onClick={() => check ()}
            ></i>

        </form>
    )
}

export default Menu