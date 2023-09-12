import React from "react";
import Header from "./Header";
import HomeVideo from "./HomeVideo";
import ImageBackground from "./ImageBackground";
import modeSImage from "./assets/model-s.jpg";
import modeXImage from "./assets/model-x.jpg";
import cybertruckImage from "./assets/cybertruck.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="section">
          <HomeVideo />
        </div>
        <section className="section">
          <ImageBackground
            header={"Model S"}
            description={"View inventory"}
            backgroundImage={modeSImage}
          />
        </section>
        <section className="section">
          <ImageBackground
            header={"Model X"}
            description={"View inventory"}
            backgroundImage={modeXImage}
          />
        </section>
        <section className="section">
          <ImageBackground
            header={"CyberTruck"}
            description={"View inventory"}
            backgroundImage={cybertruckImage}
          />
        </section>
      </div>
    </>
  );
};

export default Home;
