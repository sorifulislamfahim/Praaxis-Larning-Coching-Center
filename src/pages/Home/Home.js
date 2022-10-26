import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../Shared/CourseSummary/CourseSummary';

const Home = () => {
    const allCourses = useLoaderData()
    return (
        <div>
            {
                allCourses.map(courses => <CourseSummary
                    key={courses._id}
                    courses={courses}
                ></CourseSummary>)
            }
        </div>
    );
};

export default Home;