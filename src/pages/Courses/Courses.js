import React, { useState } from 'react';
import { useEffect } from 'react';
import Card from '../Card/Card';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://praxis-server.vercel.app/all-courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <h4>All Course In this catagory {courses.length}</h4>
            <div className='courses-container '>
                {
                    courses.map(course => <Card
                        key={course.id}
                        course={course}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Courses;