import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import ErrorPage from "../layout/Main/ErrorPage";
import Home from "../Component/Home/Home";
import Contact from "../Component/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
