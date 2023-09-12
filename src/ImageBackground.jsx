import React from "react";

const ImageBackground = ({
  backgroundImage,
  header,
  description,
  featuredItems = [],
}) => {
  return (
    <div
      className="image-background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <div className="top-section">
          <h2>{header}</h2>
          <p>{description}</p>
        </div>
        <div className="bottom-section">
          {featuredItems.length > 0 && (
            <ul className="feature-items">
              {featuredItems.map(({ title, description }) => (
                <li key={title}>
                  <h6>{title}</h6>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          )}
          <div>
            <button>Order Now</button>
            <button>Demo Drive</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBackground;
