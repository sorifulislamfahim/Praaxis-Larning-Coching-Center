import React from 'react';
import { Link } from 'react-router-dom';

const ChackCondition = () => {
    return (
        <div>
            <h3>Heare is Our Conditions</h3>
            <p>Go Back to: <Link to='/register'>Registration</Link></p>
        </div>
    );
};

export default ChackCondition;