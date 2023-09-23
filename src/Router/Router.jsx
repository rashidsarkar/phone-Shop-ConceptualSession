import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Login from "../pages/Login";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/phones.json"),
      },
      {
        path: "/favorite",
        element: <Favorite></Favorite>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default myCreateRouter;
