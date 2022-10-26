import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const coursesData = useLoaderData();
    return (
        <div>
            <h2>This is Course have {coursesData.length}</h2>
        </div>
    );
};

export default Course;