import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import './LogIn.css'

const LogIn = () => {
    return (
        <div className='from-container'>
            <h2 className='from-title'>Login</h2>
            <form>
                <div className="from-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='enter your email' required />
                </div>
                <div className="from-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='enter your password' required />
                </div>
                <input className='btn-login' type="submit" value="Login" />
                <p className='external'>New to this site<Link to='/register'> Create New Account</Link></p>
                <br />
                <button className='extra-logIn-button'><FaGoogle></FaGoogle> Login With Google</button>
                <br />
                <button className='extra-logIn-button'><FaGithub></FaGithub> Login With Github</button>
            </form>
        </div>
    );
};

export default LogIn;