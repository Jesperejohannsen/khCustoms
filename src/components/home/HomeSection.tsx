import './homeSection.css';

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
        {/* You can replace this with an actual image */}
        <img src="path-to-your-image.jpg" alt="About us" />
      </div>
    </section>
  );
};

export default HomeSection;