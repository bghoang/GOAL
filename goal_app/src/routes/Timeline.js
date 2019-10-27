import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/header";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from "../components/Footer/footer";

const Timeline = () =>{
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
};

export default Timeline;
