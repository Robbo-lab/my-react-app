import React, { useState, useEffect } from "react";

export default function LikesComponent() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDisLikes] = useState(0);
  const [like, setLike] = useState(null);

  function Header() {
    return <h2 className="title is-2">Header</h2>;
  }

  function AlertMessage({ like }) {
    if (like === null) return null;

    return like === 1 ? (
      <div className="notification is-success has-text-black has-text-centered">
        You received a like
      </div>
    ) : (
      <div className="notification is-danger has-text-black has-text-centered">
        You received a dislike
      </div>
    );
  }

  function handleLikeClick() {
    likes == 0 ? setLikes(1) : setLikes(likes + 1);
  }

  function handleDisLikeClick() {
    dislikes == 0 ? setDisLikes(1) : setDisLikes(dislikes + 1);
  }

  useEffect(() => {
    if (likes > 0) {
      setLike(1);
    }
  }, [likes]);

  useEffect(() => {
    if (dislikes > 0) {
      setLike(0);
    }
  }, [dislikes]);

  return (
    <>
      <section className="section">
        <div className="container">
          <Header />
          <div className="box has-text-centered">
            <div className="buttons is-centered mt-4">
              <button className="button is-success" onClick={handleLikeClick}>
                Like: {likes}
              </button>
              <button className="button is-danger" onClick={handleDisLikeClick}>
                Dislike: {dislikes}
              </button>
            </div>
          </div>
        </div>
        {/* <section className="section pt-0"> */}
        {/* <div className="box is-info has-text-centered"> */}
        {/* <div className="notification is-info has-text-centered"> */}
        <AlertMessage like={like} />
        {/* </div> */}
        {/* </div> */}
        {/* </section> */}
      </section>
    </>
  );
}
