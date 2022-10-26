import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({course}) => {
    const {name, image} = course;
    return (
        <div className='card-container'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <Link to={`/courses/${course.id}`}>Larn More</Link>
        </div>
    );
};

export default Card;