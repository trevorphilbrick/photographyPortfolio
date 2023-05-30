import { useState, useEffect, useContext } from "react";
import Hero from "../components/home/Hero";
import Galleries from "../components/home/Galleries";
import About from "../components/home/About";
import { logEvent } from "firebase/analytics";
import { FirebaseAnalyticsContext } from "../App";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const analytics = useContext(FirebaseAnalyticsContext);

  useEffect(() => {
    logEvent(analytics, "page_view", {
      page_title: "Home",
      page_location: "/",
      page_path: "/"
    });
  }, []);

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
