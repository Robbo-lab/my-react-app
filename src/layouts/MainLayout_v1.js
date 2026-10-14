import React from "react";
import { NavLink, Outlet } from "react-router";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/nasa-api", label: "NASA API" },
  { to: "/styled", label: "Styled Component" },
  { to: "/accordion", label: "Accordion" },
  { to: "/gallery", label: "Gallery" },
  { to: "/users", label: "User List" },
  { to: "/people", label: "People List" },
];

export default function MainLayout() {
  return (
    <section className="hero is-fullheight is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Our work in a SPA</h1>
          <h2 className="subtitle">
            All of our components in a Single Page React App
          </h2>
          <nav aria-label="Main navigation">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `button is-normal m-1 ${isActive ? "is-info" : "is-link"}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <Outlet />
        </div>
      </div>
    </section>
  );
}
