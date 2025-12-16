import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ApodPage from "./pages/ApodPage";
import Accordion from "./components/Accordian";
import Gallery from "./components/Gallery";
import GalleryItem from "./components/GalleryItem";
import PeopleList from "./components/PeopleList";
import StyledComponent from "./components/StyledComponent";
import "bulma/css/bulma.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <section className="hero is-fullheight is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Our work in a SPA</h1>
            <h2 className="subtitle">
              All of our components in a Single Page React App
            </h2>
            <Link className="button is-link is-normal m-1" to="/">
              Home
            </Link>
            <Link className="button is-link is-normal m-1" to="/nasa-api">
              NASA API
            </Link>
            <Link className="button is-link is-normal m-1" to="/styled">
              Styled Component
            </Link>
            <Link className="button is-link is-normal m-1" to="/accordion">
              Accordian
            </Link>
            <Link className="button is-link is-normal m-1" to="/gallery">
              Gallery
            </Link>
            <Link className="button is-link is-normal m-1" to="/gallery/1">
              Gallery Item
            </Link>
            <Link className="button is-link is-normal mr-1" to="/people">
              People List
            </Link>

            {/* Routing Setup */}
            <Routes>
              <Route path="/nasa-api" element={<ApodPage />} />
              <Route path="/styled" element={<StyledComponent />} />
              <Route path="/accordion" element={<Accordion />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/:id" element={<GalleryItem />} />
              <Route path="/people" element={<PeopleList />} />
            </Routes>
          </div>
        </div>
      </section>
    </Router>
  );
};

export default App;
