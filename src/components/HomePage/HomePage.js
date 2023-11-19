import React from "react";
import "./homepage.css";
import ContactFavorites from "./ContactFavorites";
import Greeting from "./Greeting";
import Gallery from "./Gallery";

const HomePage = () => {
  return (
    <section id="homepage">
      <ContactFavorites />
      <div className="gallery-greeting">
        <Greeting />
        <Gallery />
      </div>
    </section>
  );
};

export default HomePage;
