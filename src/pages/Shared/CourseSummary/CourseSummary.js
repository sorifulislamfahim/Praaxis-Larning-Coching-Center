import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseSummary = ({courses}) => {
    const { _id, title, details, image_url} = courses;
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
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    );
};

export default CourseSummary;