import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>KH Customs, Fredericiavej 55, 7100 Vejle Danmark</p>
      <p>Tlf: 30 74 17 29</p>
      <p>CVR: 44 12 96 63</p>
      <a href="https://www.linkedin.com/company/kh-customs-aps/" target="_blank" rel="noopener noreferrer">
       <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
      </a>
    </footer>
  );
}

export default Footer;