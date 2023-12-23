import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import HomeSection from "./components/home/HomeSection";
import Footer from "./components/footer/Footer";

const App: React.FC = () => (
  <Router>
    <Header />
    <HomeSection />
    <Footer />
  </Router>
);

export default App;
