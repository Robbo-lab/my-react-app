import React, { useState, useEffect } from "react";

export default function StyledComponent() {
  const [animationDuration, setAnimationDuration] = useState(0);

  function handleDurationChange() {
    setAnimationDuration(animationDuration + 1);
  }

  useEffect(() => {
    console.log("State changed");
  }, [animationDuration]);

  return (
    <>
      <section
        className="animatedSection"
        style={{
          animation: `fadeInScale ${animationDuration}s ease-in-out infinite`,
        }}
      >
        This is a styled section with animation
      </section>
      <button className="button is-primary" onClick={handleDurationChange}>
        Click
      </button>
    </>
  );
}
