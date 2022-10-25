import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../conrtext/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
            navigate('/login')

        })
        .catch(error => console.error(error))
    }
    return (
        <div className='from-container'>
            <h2 className='from-title'>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="from-control">
                    <label htmlFor="text">Name</label>
                    <input type="text" name="name" placeholder='Enter your full name' required />
                </div>
                <div className="from-control">
                    <label htmlFor="text">Photo URL</label>
                    <input type="text" name="photoURL" placeholder='Enter Your Photo URL'/>
                </div>
                <div className="from-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Enter your email' required />
                </div>
                <div className="from-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Enter your password' required />
                </div>
                
                <p className='text-error'> </p>
                <input className='btn-login' type="submit" value="Register" />
                <p className='external'>Alredy have an acount?<Link to='/login'> Login</Link></p>
            </form>
        </div>
    );
};

export default Register;