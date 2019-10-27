import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/header";

import Footer from "../components/Footer/footer";
import MainBlock from "../components/MainBlock/mainblock";

const Goals = () =>{
  return (
    <div className="App">
      <Header />
      <MainBlock />
      <Footer />
    </div>
  );
};

export default Goals;
