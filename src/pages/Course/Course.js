import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../Shared/CourseSummary/CourseSummary';

const Course = () => {
    const coursesData = useLoaderData();
    return (
        <div>
            <h2>This is Course have {coursesData.length}</h2>
            {
                coursesData.map(courses => <CourseSummary
                key={courses._id}
                courses={courses}
                ></CourseSummary>)
            }
        </div>
    );
};

export default Course;