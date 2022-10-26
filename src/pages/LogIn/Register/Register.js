import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../conrtext/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [acepted, setAcepted] = useState(false);
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
            setError('');
            navigate('/login')
            handleUpdateUserProfile(name, photoURL)

        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
    }

    const handleAcepted = (event) => {
        setAcepted(event.target.checked)
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then( () => {})
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
                <p className='text-danger'>{error} </p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" 
                    onClick={handleAcepted}
                    label={<>Acept Our <Link to='/condition'>Condition</Link></>}/>
                </Form.Group>
                <input disabled={!acepted} className='btn-login' type="submit" value="Register" />
                <p className='external'>Alredy have an acount?<Link to='/login'> Login</Link></p>
            </form>
        </div>
    );
};

export default Register;