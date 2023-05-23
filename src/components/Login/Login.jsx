import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false);

    const { signIn } = useContext(AuthContext);

    // redirect target page after login
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';

    // sign Up
    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className='form-container'>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleSignIn}>
                    <p>Email</p>
                    <input className='input-field' required type="email" name="email" id="email" placeholder='Your Email' />

                    <p>Password</p>
                    <input className='input-field' required type={show ? "text" : "password"} name="password" id="password" placeholder='Password' />
                    <p onClick={() => setShow(!show)}><small>
                        {
                            show ? <span>Hide Password</span> : <span>Show Password</span>
                        }
                    </small></p>

                    <input className='submit' type="submit" value="Login" />
                    <br />
                    <p><small>New to Ema-John? <Link to='/sign-up'><span>Create New Account</span></Link></small></p>
                    <div className='or'>
                        <div>
                            <hr />
                        </div>
                        <div>
                            <p><small>or</small></p>
                        </div>
                        <div>
                            <hr />
                        </div>
                    </div>

                    <div className='social-container'>
                        <button>
                            <img className='social-logo' src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="google logo" />
                            <p><small>Continue with Google</small></p>
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Login;