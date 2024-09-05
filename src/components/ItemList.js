import React from "react";

function ItemList({ items }) {
  //   Your code goes here to return JSX
  return (
    <>
      <h2>My List</h2>
      <ol>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>
    </>
  );
}

export default ItemList;
