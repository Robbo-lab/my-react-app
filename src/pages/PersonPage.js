import React from "react";
import { Link, useParams } from "react-router";
import { people } from "../data/people.js";

export default function PersonPage() {
  const { id } = useParams();
  const person = people.find((person) => String(person.id) === id);

  if (!person) {
    return (
      <div className="box mt-3">
        <p>Person not found.</p>
        <Link to="/people">Back to people</Link>
      </div>
    );
  }

  return (
    <div className="box mt-3">
      <h2 className="title is-4 has-text-info">{person.name}</h2>
      <p>Age: {person.age}</p>
      <Link to="/people">Back to people</Link>
    </div>
  );
}
