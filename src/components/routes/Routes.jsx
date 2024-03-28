import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Home from "../Home/Home";
import ViewRecipes from "../ViewRecipes/ViewRecipes";
import Blog from "../Blog/Blog";
import Login from "../UserInfo/Login";
import Register from "../UserInfo/Register";
import ViewSingleRecipe from "../viewSingleRecipe/ViewSingleRecipe";
import ProtectedRoutes from "./ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipes",
        element: <ViewRecipes />,
        loader: () => fetch(`http://localhost:5000/recipes`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "recipes/:id",
        element:<ProtectedRoutes><ViewSingleRecipe /></ProtectedRoutes> ,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipes/${params.id}`),
      },
    ],
  },
]);

export default router;
