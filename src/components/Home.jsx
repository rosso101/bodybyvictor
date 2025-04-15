import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  const handleScrollToPlans = () => {
    const plansSection = document.getElementById("plans");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-row justify-between md:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center">
        <h1 className="text-8xl font-semibold md:text-start text-center md:w-2/3">
          Find Yourself, Be yourself.
        </h1>

        <div className="w-full md:w-2/4 mt-5 flex flex-row justify-center">
          <Button title="Checkout Plans" onClick={handleScrollToPlans} />
        </div>
      </div>
    </div>
  );
};

export default Home;