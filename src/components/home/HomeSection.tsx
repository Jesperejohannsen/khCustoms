import './homeSection.css';
import customsPicture from  '../../assets/customsPicture.png';

const HomeSection = () => {
  return (
    <section className="home-section">
      <div className="home-section-content">
        <p className="home-section-text">
          We provide high quality services to our customers.
        </p>
        <button className="home-section-button">Learn More</button>
      </div>
      <div className="home-section-image">
        <img src={customsPicture} alt="Customs" />
      </div>
    </section>
  );
};

export default HomeSection;