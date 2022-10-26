import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaEye, FaStar } from "react-icons/fa";

const CourseSummary = ({courses}) => {
    const { _id, title, details, image_url, total_view, rating} = courses;
    return (
        <Card className="mb-5">
      <Card.Header> <Card.Title>{title}</Card.Title></Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {
            details.length > 150 ?
            <p>{details.slice(0, 180) + '...'} <Link to={`/course/${_id}`}>Larn More</Link></p>
            : 
            <p>{details}</p>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
            <div>
                <FaStar className="text-warning me-2"></FaStar>
                <span>{rating?.number}</span>
            </div>
            <div>
                <FaEye className="me-2"></FaEye>
                <span>{total_view}</span>
            </div>
        </Card.Footer>
    </Card>
    );
};

export default CourseSummary;