import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Intro from "./introduction";
const App = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Intro></Intro>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default App;
