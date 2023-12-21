import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';

const App: React.FC = () => (
  <Router>
    <Header />
    {/* Other components */}
  </Router>
);

export default App;