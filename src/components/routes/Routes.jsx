import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../../layouts/MainLayout"
import Home from "../Home/Home"
import ViewRecipes from "../ViewRecipes/ViewRecipes"
import Blog from "../Blog/Blog"
import Login from "../UserInfo/Login"
import Register from "../UserInfo/Register"


const router = createBrowserRouter([
    { 
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
               path: '/view-recipes',
               element: <ViewRecipes/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default router