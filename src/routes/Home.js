import { useState, useEffect } from "react";
import Hero from "../components/home/Hero";
import Galleries from "../components/home/Galleries";
import About from "../components/home/About";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log(isLoaded);
  }, [isLoaded]);
  return (
    <>
      <Hero isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      <Galleries />
      <About />
    </>
  );
};

export default Home;
