import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Creator from "../pages/Contact/Creator/Creator";
import Gallery from "../pages/Contact/Gallery/Gallery";
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
      {
        path: "contact",
        element: <Contact />,
        children: [
          {
            path: "creator",
            element: <Creator />,
          },
          {
            path: "gallery",
            element: <Gallery />,
          },
        ],
      },
    ],
  },
]);

export default router;
