import React from "react";
import Header from "./Header";
import ImageBackground from "./ImageBackground";
import modeXImage from "./assets/model-x.jpg";
import cybertruckImage from "./assets/cybertruck.jpg";
import ImageBackgroundNoText from "./ImageBackgroundNoText";
import ImageGrid from "./ImageGrid";

const featuredItems = [
  { title: "2.3s 0-60", description: "Very fast" },
  { title: "4.3s 0-60", description: "Fast" },
  { title: "2s 0-60", description: "Very fast" },
  { title: "5s 0-60", description: "Medium fast" },
  { title: "2.6s 0-60", description: "Very fast" },
];

const ModelX = () => {
  return (
    <div className="container">
      <Header />
      <section className="section">
        <ImageBackground
          header={"Model X"}
          description={"View inventory"}
          backgroundImage={modeXImage}
          featuredItems={featuredItems}
        />
      </section>
      <section className="section">
        <ImageBackgroundNoText backgroundImage={modeXImage} />
      </section>
      <section className="section">
        <ImageGrid
          image1={cybertruckImage}
          image2={modeXImage}
          text1="Stay Connected - Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
          text2="Sublime Sound - A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
        />
      </section>
    </div>
  );
};

export default ModelX;
