import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/programs/Programs";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Campus from "./components/campus/Campus";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="What We Offer" subTitle="Our Program" />
        <Programs />
        <About />
        <Title title="Gallery" subTitle="Campus Photos" />
        <Campus />
        <Title title="TESTIMONIALS" subTitle="What Student Says" />
        <Testimonials />
        <Title title="Contact Us" subTitle="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
