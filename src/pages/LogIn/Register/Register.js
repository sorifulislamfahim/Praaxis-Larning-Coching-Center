import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='from-container'>
            <h2 className='from-title'>Register</h2>
            <form>
                <div className="from-control">
                    <label htmlFor="text">Name</label>
                    <input type="text" name="name" placeholder='enter your full name' required />
                </div>
                <div className="from-control">
                    <label htmlFor="text">Photo URL</label>
                    <input type="text" name="photoURL" placeholder='Enter Your Photo URL' required />
                </div>
                <div className="from-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='enter your email' required />
                </div>
                <div className="from-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='enter your password' required />
                </div>
                
                <p className='text-error'> </p>
                <input className='btn-login' type="submit" value="Register" />
                <p className='external'>Alredy have an acount?<Link to='/login'> Login</Link></p>
            </form>
        </div>
    );
};

export default Register;