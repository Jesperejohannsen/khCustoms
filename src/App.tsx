import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import HomeSection from "./components/home/HomeSection";
import Footer from "./components/footer/Footer";
import { homeSectionParagraphs } from "./components/home/HomeSection";
import SearchResult from "./components/searchbar/SearchResult"; 

const App: React.FC = () => (
  <Router>
    <Header homeSectionParagraphs={homeSectionParagraphs} /> 
    <Route path="/" exact component={HomeSection} /> 
    <Route path="/search/:term" component={SearchResult} /> 
    <Footer />
  </Router>
);

export default App;