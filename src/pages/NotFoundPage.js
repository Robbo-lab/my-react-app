import React from "react";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="box mt-3">
      <h2 className="title is-4">404 — Page not found</h2>
      <p>The requested route does not exist.</p>
      <Link to="/" className="button is-link mt-3">
        Return home
      </Link>
    </div>
  );
}
