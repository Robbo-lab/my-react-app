import React from "react";
import { users } from "../data/users.js";

export function usersLoader() {
  return users;
}

export function userLoader({ params }) {
  const user = users.find((entry) => String(entry.id) === params.id);
  if (!user) {
    throw new Response("user not found", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return user;
}
