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
import RecipesApp from "./Componet/Recipes_App/RecipesApp";
import HomePage from "./Componet/GoogleSearch_HomePage/HomePage";
import CapsOps from "./Componet/CapsOps/CapsOps";
import RecipePage from "./Componet/Recipes_App/RecipePage";
import MacClone from "./Componet/Mac-Clone/MacClone";
import NewsApp from "./Componet/NewsApp/NewsApp";
import Checkresponsive from "./Componet/IamResponsive/checkresponsive";
import Youtube from "./Componet/YoutubeClone/youtube";
import AIProject from "./Componet/GenrativeAI/AIProject";
import RandomValue from "./Componet/RandomCall/randomValue";
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
          <Route path="/recipeApp" element={<RecipesApp/>} />
          <Route path="/recipeApp/:id" element={<RecipePage/>} />
          <Route path="/capsOps" element={<CapsOps/>} />
          <Route path="/homePage" element={<HomePage/>} />
          <Route path="/Mac" element={<MacClone/>} />
          <Route path="/News" element={<NewsApp/>} />
          <Route path="/Checkresponsive" element={<Checkresponsive/>} />
          <Route path="/Youtube" element={<Youtube/>} />
          <Route path="/AIGenrator" element={<AIProject/>} />
          <Route path="/RandomValue" element={<RandomValue/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
