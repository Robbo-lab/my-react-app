import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import ApodPage from "./pages/ApodPage";
import Accordion from "./components/Accordian";
import Gallery from "./components/Gallery";
import GalleryItem from "./components/GalleryItem";
import LifeCycleShared from "./components/LifeCycleShared.js";
import LikesComponent from "./components/LikesComponent.js";
import PeopleList from "./components/PeopleList";
import StyledComponent from "./components/StyledComponent";
import UserProfile from "./components/UserProfile";

import { user } from "./data/users.js";

import "bulma/css/bulma.min.css";
import "./App.css";
import "./assets/styles.css";

const App = () => {
  return (
    // Github pages Dev
    // <Router basename="/my-react-app">
    <Router basename="/">
      <section className="hero is-fullheight is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="has-text-centered mb-6">
              <h1 className="title">Our Work in a SPA</h1>
              <h2 className="subtitle">
                All of our components in a Single Page React App
              </h2>
            </div>

            <div className="columns is-multiline is-centered">
              <div className="column is-12-mobile is-6-tablet is-2-desktop">
                <Link className="button is-link is-fullwidth is-medium" to="/">
                  Home
                </Link>
              </div>
              <div className="column is-12-mobile is-6-tablet is-2-desktop">
                <Link
                  className="button is-link is-fullwidth is-medium"
                  to="/nasa-api"
                >
                  NASA API
                </Link>
              </div>
              <div className="column is-12-mobile is-6-tablet is-2-desktop">
                <Link
                  className="button is-link is-fullwidth is-medium"
                  to="/styled"
                >
                  Styled
                </Link>
              </div>
              <div className="column is-12-mobile is-6-tablet is-2-desktop">
                <Link
                  className="button is-link is-fullwidth is-medium"
                  to="/accordion"
                >
                  Accordion
                </Link>
              </div>
              <div className="column is-12-mobile is-6-tablet is-2-desktop">
                <Link
                  className="button is-link is-fullwidth is-medium"
                  to="/gallery"
                >
                  Gallery
                </Link>
              </div>
              <div className="column is-12-mobile is-6-tablet is-2-desktop">
                <Link
                  className="button is-link is-fullwidth is-medium"
                  to="/gallery/1"
                >
                  Gallery Item
                </Link>
              </div>
              <div className="column is-12-mobile is-6-tablet is-2-desktop">
                <Link
                  className="button is-link is-fullwidth is-medium"
                  to="/people"
                >
                  People List
                </Link>
              </div>
              <div className="column is-12-mobile is-6-tablet is-2-desktop">
                <Link
                  className="button is-link is-fullwidth is-medium"
                  to="/users"
                >
                  User Profile
                </Link>
              </div>
              <div className="column is-12-mobile is-6-tablet is-2-desktop">
                <Link
                  className="button is-link is-fullwidth is-medium"
                  to="/shared-state"
                >
                  Shared State
                </Link>
              </div>
              <div className="column is-12-mobile is-6-tablet is-2-desktop">
                <Link
                  className="button is-link is-fullwidth is-medium"
                  to="/likes"
                >
                  useEffect
                </Link>
              </div>
            </div>

            <Routes>
              <Route path="/nasa-api" element={<ApodPage />} />
              <Route path="/styled" element={<StyledComponent />} />
              <Route path="/accordion" element={<Accordion />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/:id" element={<GalleryItem />} />
              <Route path="/people" element={<PeopleList />} />
              <Route path="/users" element={<UserProfile user={user} />} />
              <Route path="/shared-state" element={<LifeCycleShared />} />
              <Route path="/likes" element={<LikesComponent />} />
            </Routes>
          </div>
        </div>
      </section>
    </Router>
  );
};

export default App;
