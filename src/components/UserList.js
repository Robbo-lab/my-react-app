import React from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

export default function UserList() {
  const user = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const filtered = user.filter((user) =>
    user.firstName.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="box mt-3">
      <h2 className="title is-4 has-text-light">User List</h2>
      <label htmlFor="user-search">Filter user</label>
      <input
        id="user-search"
        className="input mb-3"
        value={query}
        onChange={(event) => {
          const value = event.target.value;
          setSearchParams(value ? { q: value } : {}, { replace: true });
        }}
        placeholder="Type a name"
      />
      {filtered.length === 0 && <p>No matching user.</p>}
      <ul>
        {filtered.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.firstName}</Link> — age{" "}
            {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
