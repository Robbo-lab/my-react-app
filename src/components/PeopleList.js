import React from "react";
import { Link, useSearchParams } from "react-router";
import { people } from "../data/people.js";

export default function PeopleList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const filtered = people.filter((person) =>
    person.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="box mt-3">
      <h2 className="title is-4 has-text-light">People List</h2>
      <label htmlFor="people-search">Filter people</label>
      <input
        id="people-search"
        className="input mb-3"
        value={query}
        onChange={(event) => {
          const value = event.target.value;
          setSearchParams(value ? { q: value } : {}, { replace: true });
        }}
      />
      {filtered.length === 0 && <p>No matching people.</p>}
      <ul>
        {filtered.map((person) => (
          <li key={person.id}>
            <Link to={`/people/${person.id}`}>{person.name}</Link> — age{" "}
            {person.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
