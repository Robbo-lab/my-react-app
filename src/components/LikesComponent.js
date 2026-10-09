import React, { useState, useEffect } from "react";

export default function LikesComponent() {
  console.log("Like Component Connected");
  const [likes, setLikes] = useState();
  const [dislikes, setDisLikes] = useState();

  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  function Header() {
    return <h2 className="title is-2">Header</h2>;
  }

  function AlertMessage({ like }) {
    return !like ? (
      <div></div>
    ) : like == 1 ? (
      <div className="notification is-success">You recieved a like</div>
    ) : (
      <div className="notification is-danger">You recieved a dislike</div>
    );
  }

  function handleLikeClick() {
    !likes ? setLikes(1) : setLikes(likes + 1);
  }

  useEffect(() => {
    <AlertMessage like={1} />;
  }, [likes]);

  function handleDisLikeClick() {
    !dislikes ? setDisLikes(1) : setDisLikes(dislikes + 1);
  }

  useEffect(() => {
    <AlertMessage like={0} />;
  }, [dislikes]);

  console.log(likes);

  return (
    <>
      <section className="section">
        <div className="container">
          <Header />
          <div className="box has-text-centered">
            <div className="content">
              <ul>
                {names.map((name) => (
                  <li key={name}>
                    <span className="tag is-primary is-medium">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="buttons is-centered mt-4">
              <button className="button is-success" onClick={handleLikeClick}>
                Like
              </button>
              <button className="button is-danger" onClick={handleDisLikeClick}>
                Dislike
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="container">
          <div className="notification is-info is-light has-text-centered">
            <AlertMessage />
          </div>
        </div>
      </section>
    </>
  );
}
