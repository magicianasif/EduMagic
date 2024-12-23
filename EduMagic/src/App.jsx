import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/programs/Programs";
import Title from "./components/title/Title";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="What We Offer" subTitle="Our Program" />
        <Programs />
      </div>
    </div>
  );
}

export default App;
