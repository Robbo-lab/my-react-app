import React from "react";

// template
const ApodContent = ({ apodData }) => {
  if (!apodData) {
    return (
      <p className="has-text-centered">
        Please enter parameters and click "Fetch APOD".
      </p>
    );
  }

  return (
    <div>
      {apodData.map((data, index) => {
        if (data.media_type === "image") {
          return (
            <div key={index} className="box">
              <figure className="image is-4by3">
                <img src={data.url} alt={data.title} />
              </figure>
              <h2 className="title is-4">{data.title}</h2>
              <p>{data.explanation}</p>
            </div>
          );
        } else {
          return (
            <div key={index} className="box">
              <div className="video-container">
                <video width="640" height="360" controls>
                  <source src={data.url} type="video/mp4"></source>
                  Your browser does not support the video tag
                </video>
              </div>
              <h2 className="title is-4">{data.title}</h2>
              <p>{data.explanation}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ApodContent;
