import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import UserProfile from "./components/UserProfile/userprofile";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <UserProfile />
      <Footer />
    </div>
  );
}

export default App;
