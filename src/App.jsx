import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Plans from "./components/Plans";
import About from "./components/About";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BMI from "./components/BMICalculater"

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="plans">
          <Plans />
        </div>

        <div id="plans">
          <BMI />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="trainers">
          <Trainers />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
