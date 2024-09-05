// src/components/Header.js
import React from "react";

function Header() {
  return (
    <div className="container">
      <header className="navbar is-primary">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            My React App
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
