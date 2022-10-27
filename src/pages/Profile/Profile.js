import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../conrtext/AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control readOnly defaultValue={user?.displayName} type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control readOnly defaultValue={user?.photoURL} type="text" placeholder="This is Photo URL"/>
      </Form.Group>
    </Form>
    );
};

export default Profile;