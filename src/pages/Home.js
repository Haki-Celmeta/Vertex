import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero-section/Hero";
import WorkDisplay from "../components/Work-display/Work-display";
import Statistics from "../components/Statistics/Statistics";
import Partnerships from "../components/Partnership/Partnerships";
import Clients from "../components/Clients/Clients";
import About from "../components/About-us/About-us";
import Advantages from "../components/Advantages/Advantages";
import Blogs from "../components/Blogs/Blogs";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WorkDisplay />
      <Advantages />
      <Statistics />
      <Clients />
      <Partnerships />
      <Blogs />
      <Footer />
    </>
  )
}

export default Home;