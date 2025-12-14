import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      }
    ]
  },
]);

export default router;