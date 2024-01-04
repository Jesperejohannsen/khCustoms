import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/header/Header";
import HomeSection from "./components/home/HomeSection";
import Footer from "./components/footer/Footer";
import { homeSectionParagraphs } from "./components/home/HomeSection";
import SearchResult from "./components/searchbar/SearchResult"; 
import SolutionsSite from "./components/solutionSite/SolutionsSite";
import ToldreglerSite from "./components/toldreglerSite/ToldreglerSite";
import ContactSite from "./components/contactSite/ContactSite";

const App: React.FC = () => (
  <Router>
    <Header homeSectionParagraphs={homeSectionParagraphs} /> 
    <Switch>
      <Route path="/" exact component={HomeSection} /> 
      <Route path="/løsninger" component={SolutionsSite} />
      <Route path="/search/:term" component={SearchResult} /> 
      <Route path="/services" component={SolutionsSite} />
      <Route path="/toldregler" component={ToldreglerSite} />
      <Route path="/kontakt" component={ContactSite} />
    </Switch>
    <Footer />
  </Router>
);

export default App;