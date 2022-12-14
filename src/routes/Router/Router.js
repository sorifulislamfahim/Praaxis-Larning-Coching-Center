import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blogs from "../../pages/Blogs/Blogs";
import ChackCondition from "../../pages/ChakCondition/ChackCondition";
import Course from "../../pages/Course/Course";
import Courses from "../../pages/Courses/Courses";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/LogIn/LogIn/LogIn";
import Register from "../../pages/LogIn/Register/Register";
import Profile from "../../pages/Profile/Profile";
import CourseDetails from "../../pages/Shared/CourseDetails/CourseDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>, 
        children: [
            {
                path: '/', 
                element: <Home></Home>,
                loader: () => fetch(`https://praxis-server.vercel.app/home`)
            },
            {
                path: '/courses', 
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`https://praxis-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/course/:id', 
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://praxis-server.vercel.app/course/${params.id}`)

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
                path: '/condition',
                element: <ChackCondition></ChackCondition>
            },
            {
                path: '/profile', 
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/blogs', 
                element: <Blogs></Blogs>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
        
    }
])