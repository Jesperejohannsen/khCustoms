import { useState } from 'react';
import './toldRegler.css';

const ToldreglerSite = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="toldregler-site">
      <header className="site-header">Toldregler Site</header>
      <main className="site-main">
        <h1>Welcome to Toldregler Site</h1>
        <div className="accordion">
          <button onClick={toggleOpen} className="accordion-button">
            {isOpen ? 'Hide' : 'Show'} rules
          </button>
          {isOpen && (
            <p className="accordion-content">
              Here you can find all kind of rules for customs and custom clearance.
            </p>
          )}
        </div>
      </main>
      <footer className="site-footer">© 2022 Toldregler Site</footer>
    </div>
  );
};

export default ToldreglerSite;