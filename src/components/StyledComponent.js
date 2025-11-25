import React from "react";

export default function StyledComponent() {
    const [looptime, setLoopTime] = React.useState("3000");
    const animatedSection = {
        color: "blue",
        backgroundColor: "lightgray",
        padding: "10px",
        bordeRadius: "5px",
        maxWidth: "100vw",
        animation: `fadeInScale ${looptime}ms ease-in-out infinite`,
    };
    const setLoop = event => {
        setLoopTime(event.target.value);
    };
    return (
        <section className="box mt-3">
            <div className="box">
                <input type="range" className="slider" onChange={setLoop} min={100} max={10000} value={looptime} />
            </div>
            <section className="animatedSection box" style={animatedSection}>
                This is a styled section with animation
            </section>
        </section>
    );
}
