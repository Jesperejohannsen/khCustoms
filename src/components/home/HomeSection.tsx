import './homeSection.css';
import customsPicture from  '../../assets/customsPicture.png';
import compliancePicture from '../../assets/compliance.png';
import transportationPicture from '../../assets/transportationMethods.png';
import Button from '../button/Button';
import ContactForm from '../contactForm/ContactForm';

const HomeSection = () => {
  return (
    <>
    <section className="home-section home-section-customs">
      <div className="home-section-content">
        <p className="home-section-text">
        KH-Customs tilbyde en lang række af services i forbindelse med told ved import og/eller eksport

Med mange års erfaring, står KH-Customs klar til at vejlede dig om de toldregler, der gør sig gældende for netop dine sendinger. Vi står klar til at hjælpe hvad enten det er toldklarering til import eller eksport, tilladelser, licenser, eller certifikater. Vi kan hjælpe dig gennem hele processen og sørger for, at al dokumentation lever op til de nødvendige krav, og sørger for altid at være opdaterede på de nyeste ændringer på området. Vi står altid klar til at svare på dine spørgsmål, og give dig den bedste service.
        </p>
        <Button to="/services">Learn More</Button>
      </div>
      <div className="home-section-image">
        <img src={customsPicture} alt="Customs" />
      </div>
    </section>

    <section className="home-section home-section-services">
        <div className="home-section-content">
          <h2 className="home-section-title">Vores løsninger</h2>
          <p className="home-section-text">
          Vi kan hjælpe dig med følgende:

- Toldklarering indenfor sø, luft og vej

- Gennemgang af dine toldforhold og tolddokumenter

- Vejledning om toldregler i EU

- Assistance i forhold til varekoder

- Toldoplags vejledning og regnskab

- Etablering af kontakt til toldstyrelsen, samt hjælpe ved revision og bevillingstilsyn

- Hjælp til ansøgning om toldbevillinger

- Vejledning om besparelser på told og afgifter

- Vejledning omkring Brexit og de engelske toldregler

- Rettelsesangivelser og manuelle toldopkrævninger
          </p>
          <Button to="/solutions">Learn More</Button>
        </div>
        <div className="home-section-image">
          <img src={compliancePicture} alt="Services" />
        </div>
      </section>

      <section className="home-section home-section-about">
        <div className="home-section-content">
          <h2 className="home-section-title">Kontakt os</h2>
          <ContactForm />
        </div>
      </section>


    </>
  );
};

export default HomeSection;