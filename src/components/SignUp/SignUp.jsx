import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
            <div>
                <h3>Please Sign Up</h3>
                <form action="">
                    <p>Email</p>
                    <input className='input-field' required type="email" name="email" id="email" placeholder='Your Email' />

                    <p>Password</p>
                    <input className='input-field' required type="password" name="password" id="password" placeholder='Password' />

                    <p>Confirm Password</p>
                    <input className='input-field' required type="password" name="password" id="password" placeholder='Confirm Password' />
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