import React, { useState } from "react";
import ReactDOM from "react-dom/client"; // Note the change in import path
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ApodPage from "./pages/ApodPage.js";
import DateInputComponent from "./components/DateInputComponent.js";
import Gallery from "./components/Gallery.js";
import GalleryItem from "./components/GalleryItem.js";
import LikesComponent from "./components/LikesComponent.js";
import LifeCycleShared from "./components/LifeCycleShared.js";
import PeopleList from "./components/PeopleList.js";
import PersonPage from "./pages/PersonPage.js";
import StyledComponent from "./components/StyledComponent.js";
import UserProfile from "./components/UserProfile.js";

import MainLayout from "./layouts/MainLayout.js";
import HomePage from "./pages/HomePage.js";
import NotFoundPage from "./pages/NotFoundPage.js";

import user from "./data/user.js";
import sculptureList from "./data/sculptures.js";

import "./assets/styles.css";
import "./App.css";

const APP_BASENAME = "/"; // Change to "/my-react-app" for GitHub Pages

export default function App() {
  return (
    <BrowserRouter basename={APP_BASENAME}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="nasa-api" element={<ApodPage />} />
          <Route path="styled" element={<StyledComponent />} />
          <Route path="likes" element={<LikesComponent />} />
          <Route
            path="gallery"
            element={<Gallery sculptureList={sculptureList} />}
          />
          <Route path="gallery/:id" element={<GalleryItem />} />
          <Route path="users" element={<UserProfile user={user} />} />
          <Route path="people" element={<PeopleList />} />
          <Route path="people/:id" element={<PersonPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
