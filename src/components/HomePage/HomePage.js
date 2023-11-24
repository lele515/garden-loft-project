import React from "react";
import "./homepage.css";
import ContactFavorites from "./ContactFavorites";
import Greeting from "./Greeting";
import Gallery from "./Gallery";

const HomePage = () => {
  return (
    <section id="homepage">
      <Greeting />
      
      <div className="gallery-greeting">
        <ContactFavorites />
      
        <Gallery />
      </div>
    </section>
  );
};

export default HomePage;
