
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Properties from "./components/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";
import News from "./components/News";
import NewsDetails from "./pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "properties",
        element: <Properties />,
      },
      {
        path: "properties/:id",
        element: <PropertyDetails />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news/:id",
        element: <NewsDetails />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

export { router };
