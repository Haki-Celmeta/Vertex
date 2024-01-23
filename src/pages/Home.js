import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero-section/Hero";
import WorkDisplay from "../components/Work-display/Work-display";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkDisplay />
    </>
  )
}

export default Home;