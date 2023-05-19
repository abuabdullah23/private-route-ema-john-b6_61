import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'><a><img src={logo} alt="" /></a></Link>
            <div>
                <Link className='right-menu' to="/shop">Shop</Link>
                <Link className='right-menu' to="/order">Orders</Link>
                <Link className='right-menu' to="/inventory">Inventory</Link>
                <Link className='right-menu' to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;