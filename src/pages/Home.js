import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero-section/Hero";
import WorkDisplay from "../components/Work-display/Work-display";
import Statistics from "../components/Statistics/Statistics";
import Partnerships from "../components/Partnership/Partnerships";
import Clients from "../components/Clients/Clients";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkDisplay />
      <Statistics />
      <Partnerships />
      <Clients />
    </>
  )
}

export default Home;