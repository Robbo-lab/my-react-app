import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Accordion from "./components/Accordian.js";
import Gallery from "./components/Gallery.js";
import GalleryItem from "./components/GalleryItem.js";
import PeopleList from "./components/PeopleList.js";
import StyledComponent from "./components/StyledComponent.js";
import UserList from "./components/UserList.js";

import MainLayout from "./layouts/MainLayout.js";

import HomePage from "./pages/HomePage.js";
import ApodPage from "./pages/ApodPage.js";
import UserPage from "./pages/UserPage.js";

import NotFoundPage from "./pages/NotFoundPage.js";
import RouteError from "./pages/RouteError.js";

import { usersLoader, userLoader } from "./loaders/userLoaders.js";

import "bulma/css/bulma.min.css";
import "./App.css";

const APP_BASENAME = "/"; // Use "/my-react-app" for the existing GitHub Pages subpath.

const router = createBrowserRouter(
  [
    {
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "nasa-api", element: <ApodPage /> },
        { path: "styled", element: <StyledComponent /> },
        { path: "accordion", element: <Accordion /> },
        { path: "gallery", element: <Gallery /> },
        { path: "gallery/:id", element: <GalleryItem /> },
        { path: "people", element: <PeopleList /> },
        { path: "users", loader: usersLoader, element: <UserList /> },
        {
          path: "user/:id",
          loader: userLoader,
          element: <UserPage />,
          errorElement: <RouteError />,
        },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  { basename: APP_BASENAME },
);

export default function App() {
  return <RouterProvider router={router} />;
}
