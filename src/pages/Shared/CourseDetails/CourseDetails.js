import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEye, FaPrint, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const detailsData = useLoaderData();
    const {title, details, author, image_url, total_view, rating} = detailsData;
    return (
        <Card className="mb-5">
        <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className="d-flex">
                <Image
                    roundedCircle
                    src={author?.img}
                    style={{height: '60px'}}
                    className="me-3"
                ></Image>
                <div>
                    <p className='m-0'>{author?.name}</p>
                    <p>{author?.published_date}</p>
                </div>
            </div>
            <div >
               <FaPrint className='fs-1'></FaPrint>
            </div>
        </Card.Header>
        <Card.Body>
            <Card.Title className='fs-2'>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
            <Card.Text className='fs-4'>
            {details}
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

export default CourseDetails;