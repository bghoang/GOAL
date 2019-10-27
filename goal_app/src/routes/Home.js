import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/header";
import UserProfile from "../components/UserProfile/userprofile";
import Footer from "../components/Footer/footer";
import MainBlock from "../components/MainBlock/mainblock";

const Home = () =>{
  return (
    <div className="App">
      <Header />
      <UserProfile />
      <MainBlock />
      <Footer />
    </div>
  );
};

export default Home;
