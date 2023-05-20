import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error=> console.log(error))
    }
    return (
        <nav className='header'>
            <div>
                <Link to='/'><a><img src={logo} alt="" /></a></Link>
            </div>
            <div>
                <Link className='right-menu' to="/shop">Shop</Link>
                <Link className='right-menu' to="/order">Orders</Link>
                <Link className='right-menu' to="/inventory">Inventory</Link>
                <Link className='right-menu' to="/login">Login</Link>
                <Link className='right-menu' to="/sign-up">Sign Up</Link>
                <Link>
                    {
                        user && <p style={{ color: 'white' }}>Welcome {user.displayName} to our website! <button onClick={handleLogOut}>Sign Out</button></p>
                    }
                </Link>
            </div>
        </nav>
    );
};

export default Header;