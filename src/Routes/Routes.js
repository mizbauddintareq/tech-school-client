import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registration />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "courses",
        loader: () => fetch("http://localhost:5000/courses"),
        element: <Courses />,
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
        element: <CourseDetails />,
      },
    ],
  },
]);
