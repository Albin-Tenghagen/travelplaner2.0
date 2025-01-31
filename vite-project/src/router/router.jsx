import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/", //  App.jsx är nu föräldern för ALLA routes
    element: <App />,
    children: [
      {
        index: true, //  Gör så att Home.jsx laddas vid "/"
        element: <Home />,
      },
      {
        path: "about", //  /about är nu en child route
        element: <About />,
      },
    ],
  },
]);

export default router;
