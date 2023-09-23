import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import PhoneDetails from "../Components/Phones/PhoneDetails";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFoundPage></NotFoundPage>,
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
      {
        path: "/phones/:idx",
        element: <PhoneDetails></PhoneDetails>,
        loader: () => fetch("/public/phones.json"),
      },
    ],
  },
]);

export default myCreateRouter;
