import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blogs from "../../pages/Blogs/Blogs";
import Course from "../../pages/Course/Course";
import Courses from "../../pages/Courses/Courses";
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/LogIn/LogIn/LogIn";
import Register from "../../pages/LogIn/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>, 
        children: [
            {
                path: '/', 
                element: <Home></Home>
            },
            {
                path: '/courses', 
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                element: <Course></Course>
            },
            {
                path: '/course/:id', 
                element: <Course></Course>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            }, 
            {
                path: '/register', 
                element: <Register></Register>
            },
            {
                path: '/blogs', 
                element: <Blogs></Blogs>
            }
        ]
    }
])