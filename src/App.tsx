import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HeadlineCards from "./components/HeadlineCards/HeadlineCards";
import Foods from "./components/Foods/Foods";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Foods />
      <Categories />
    </Fragment>
  );
}

export default App;
