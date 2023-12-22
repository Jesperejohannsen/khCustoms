import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import HomeSection from './components/home/HomeSection';

const App: React.FC = () => (
  <Router>
    <Header />
    <HomeSection />
  </Router>
);

export default App;