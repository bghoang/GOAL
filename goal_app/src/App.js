import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
//import Header from "./components/Header/header";
//import UserProfile from "./components/UserProfile/userprofile";
//import Footer from "./components/Footer/footer";
//import MainBlock from "./components/MainBlock/mainblock";

import PrivateRoute from "./auth/PrivateRoute";
import {AuthProvider} from "./auth/Auth";
import Home from "./routes/Home";
import Login from "./routes/LogIn";
import SignUp from './routes/SignUp';

function App() {
  return (
      <AuthProvider>
        <Router>
            <div>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
            </div>
        </Router>
      </AuthProvider>
  );
}


/** function App() {
  return (
    <div className="App">
      <Header />
      <UserProfile />
      <MainBlock />
      <Footer />
    </div>
  );
}
**/
export default App; 
