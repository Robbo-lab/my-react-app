import React from "react";
import { Link, useParams } from "react-router";
import sculptureList from "../data/sculptures.js";

export default function GalleryItem() {
  const { id } = useParams();
  const index = sculptureList.findIndex((item) => String(item.id) === id);

  if (index === -1) {
    return (
      <div className="box mt-3">
        <p>Sculpture not found.</p>
        <Link className="button is-link mt-3" to="/gallery">
          Back to gallery
        </Link>
      </div>
    );
  }

  const sculpture = sculptureList[index];
  const next = sculptureList[(index + 1) % sculptureList.length];

  return (
    <div className="box mt-3">
      <h2 className="title is-5">
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <Link className="button is-info m-1" to={`/gallery/${next.id}`}>
        Next
      </Link>
      <Link className="button is-link m-1" to="/gallery">
        Gallery
      </Link>
      <h3 className="subtitle is-6">
        {index + 1} of {sculptureList.length}
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </div>
  );
}
