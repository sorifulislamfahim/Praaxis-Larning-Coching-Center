import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import './LogIn.css'
import { AuthContext } from '../../../conrtext/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const LogIn = () => {
    const [error, setError] = useState('');
    const {providerLogIn, logInUser} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error('error', error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
            setError('');
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
            form.reset();
        })
    }

    return (
        <div className='from-container'>
            <h2 className='from-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="from-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='enter your email' required />
                </div>
                <div className="from-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='enter your password' required />
                </div>
                <p className='text-danger'>{error}</p>
                <input className='btn-login' type="submit" value="Login" />
                <p className='external'>New to this site<Link to='/register'> Create New Account</Link></p>      
            </form>
                <button onClick={handleGoogleSignIn} className='extra-logIn-button'><FaGoogle></FaGoogle> Login With Google</button>
                <br />
                <button className='extra-logIn-button'><FaGithub></FaGithub> Login With Github</button>
        </div>
    );
};

export default LogIn;