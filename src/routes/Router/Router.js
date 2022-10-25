import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blogs from "../../pages/Blogs/Blogs";
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