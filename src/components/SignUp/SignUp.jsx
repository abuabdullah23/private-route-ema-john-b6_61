import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');

    const { createUser } = useContext(AuthContext);
    // for sign Up
    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email, password, confirmPassword);

        // reset error
        setError('');

        if (password !== confirmPassword) {
            alert('Password did not matched!');
            return;
        } else if (password.length < 6) {
            alert('Password must be 6 characters.');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    return (
        <div className='form-container'>
            <div>
                <h3>Please Sign Up</h3>
                <form onSubmit={handleSignUp}>
                    <p>Email</p>
                    <input className='input-field' required type="email" name="email" id="email" placeholder='Your Email' />

                    <p>Password</p>
                    <input className='input-field' required type="password" name="password" id="password" placeholder='Password' />

                    <p>Confirm Password</p>
                    <input className='input-field' required type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />
                    <br />
                    <input className='submit' type="submit" value="Sign Up" />
                    <br />
                    <p><small>Already have an account? <Link to='/login'><span>Login</span></Link></small></p>
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

export default SignUp;