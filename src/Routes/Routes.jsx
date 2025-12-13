import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        Component: Home,
      }
    ]
  },
]);

export default router;