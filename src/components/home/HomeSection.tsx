import "./homeSection.css";
import customsPicture from "../../assets/customsPicture.png";
import compliancePicture from "../../assets/compliance.png";
import Button from "../button/Button";
import ContactForm from "../contactForm/ContactForm";

export const homeSectionParagraphs = [
  "KH-Customs tilbyder en lang række af services i forbindelse med told ved import og/eller eksport Med mange års erfaring, står KH-Customs klar til at vejlede dig om de toldregler, der gør sig gældende for netop dine sendinger. Vi står klar til at hjælpe hvad enten det er toldklarering til import eller eksport, tilladelser, licenser, eller certifikater. Vi kan hjælpe dig gennem hele processen og sørger for, at al dokumentation lever op til de nødvendige krav, og sørger for altid at være opdaterede på de nyeste ændringer på området. Vi står altid klar til at svare på dine spørgsmål, og give dig den bedste service.",
  "Vi kan hjælpe dig med følgende:",
];

const HomeSection = () => {
  return (
    <>
      <section className="home-section home-section-customs">
        <div className="home-section-content">
          <h2 className="home-section-title">KH Customs</h2>
          <p className="home-section-text">{homeSectionParagraphs[0]}</p>
          <Button to="/omKhCustoms">Læs mere</Button>
        </div>
        <div className="home-section-image">
          <img src={customsPicture} alt="Customs" />
        </div>
      </section>

      <section className="home-section home-section-services">
        <div className="home-section-content">
          <h2 className="home-section-title">Vores løsninger</h2>
          <p className="home-section-text">{homeSectionParagraphs[1]}</p>
          <Button className="read-more-button" to="/services">
            Læs mere
          </Button>
        </div>
        <div className="home-section-image">
          <img src={compliancePicture} alt="Services" />
        </div>
      </section>

      <section className="home-section home-section-about">
        <div className="contactForm">
          <h2 className="contactFormHeader">Kontakt os</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default HomeSection;
