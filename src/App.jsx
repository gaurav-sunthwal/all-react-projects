import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Componet/Home";
import "./Style/Genural.css";
import Wrapper from "./Componet/Wrapper/Wrapper";
import RandomColour from "./Componet/RandomColour/RandomColour";
import Star from "./Componet/HoveringStar/Star";
import Slider from "./Componet/Slider/Slider";
import LoadProduct from "./Componet/LodeMoreProduct/LoadProduct";
import QRCodeGenrater from "./Componet/QRCode/QRCodeGenrater";
import HaderScroller from "./Componet/HaderScroller/HaderScroller";
import GitHubCard from "./Componet/GITHubCard/GitHubCard";
import WeartherApp from "./Componet/WeatherApp/WeartherApp";
function App() {
  return (
    <>
      <Router>
        <HaderScroller/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Accordion" element={<Wrapper />} />
          <Route path="/RandomColour" element={<RandomColour />} />
          <Route path="/Star" element={<Star/>} />
          <Route path="/Slider" element={<Slider/>} />
          <Route path="/LoadMore" element={<LoadProduct/>} />
          <Route path="/qr-code" element={<QRCodeGenrater/>} />
          <Route path="/gitHubCard" element={<GitHubCard/>} />
          <Route path="/weatherApp" element={<WeartherApp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
