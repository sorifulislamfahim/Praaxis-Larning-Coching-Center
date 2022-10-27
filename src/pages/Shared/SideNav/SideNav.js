import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://praxis-server.vercel.app/all-courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h2>Our Courses: {courses.length} </h2>
            <div>
                {
                    courses.map(course => <div key={course.id} className='mb-3 fs-2'>
                        <Link to={`/courses/${course.id}`} >{course.name}</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SideNav;