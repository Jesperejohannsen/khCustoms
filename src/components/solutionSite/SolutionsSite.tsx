import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip, faTruck, faPlane } from "@fortawesome/free-solid-svg-icons";
import compliancePicture from "../../assets/compliance.png";
import "./solutionsSite.css";

const SolutionsSite = () => {
  return (
    <div className="solutions-site">
      <div className="solutionsSectionOne">
        <div className="solutionImage">
          <h1>Vores løsninger</h1>
          <p>
            We provide custom clearance services for import/export of cargo from
            all around the world.
          </p>
          <img src={compliancePicture} alt="" />
        </div>
        <div className="solutionList">
          <h3>
            Vi kan hjælpe dig med følgende:
            <ul>
              <li>Toldklarering indenfor sø, vej og luft</li>
              <li>Gennemgang af dine toldforhold og tolddokumenter</li>
              <li>Vejledning om toldregler i EU</li>
              <li>Assistance i forhold til varekoder</li>
              <li>Toldoplags vejledning og regnskab</li>
              <li>
                Etablering af kontakt til toldstyrelsen, samt hjælpe ved
                revision og bevillingstilsyn
              </li>
              <li>Hjælp til ansøgning om toldbevillinger</li>
              <li>Vejledning om besparelser på told og afgifter</li>
              <li>Vejledning omkring Brexit og de engelske toldregler</li>
              <li>Rettelsesangivelser og manuelle toldopkrævninger</li>
            </ul>
          </h3>
        </div>
      </div>
      <div className="solutions-details">
        <div>
          <h2>Sø Fragt</h2>
          <p>
            We offer comprehensive sea freight solutions with a focus on
            cost-effectiveness and efficient handling.
          </p>
          <FontAwesomeIcon id="faShip" icon={faShip} size="3x" />
        </div>
        <div>
          <h2>Land Fragt</h2>
          <p>
            We provide reliable and efficient land freight services to ensure
            your goods reach their destination on time.
          </p>
          <FontAwesomeIcon id="faTruck" icon={faTruck} size="3x" />
        </div>
        <div>
          <h2>Luft Fragt</h2>
          <p>
            We provide fast and secure air freight services to meet your urgent
            shipping needs.
          </p>
          <FontAwesomeIcon id="faPlane" icon={faPlane} size="3x" />
        </div>
      </div>
      <div className="new-section">
        <h2 className="new-section-header">Hvad kan vi gøre for dig?</h2>
        <div className="new-section-content">
          <div className="new-section-div">
            <h5>Toldrådgivning og Overensstemmelsesstyring:</h5>
            <p>
              Hos KH Customs tilbyder vi omfattende toldrådgivning, der guider
              virksomheder gennem kompleksiteten af toldlovgivningen. Vores
              tjenester omfatter klassificering af varer, vurdering af
              toldafgifter og afgifter samt udvikling af strategier for at
              optimere toldomkostningerne. Fordele: Ved at samarbejde med KH
              Customs opnår vores kunder ikke kun juridisk overensstemmelse, men
              reducerer også risikoen for toldbøder og maksimerer
              toldoptimeringen ved hjælp af skræddersyede strategier.
            </p>
          </div>
          <div className="new-section-div">
            <h5>Automatiseret Toldbehandling:</h5>
            <p>
              KH Customs tilbyder en state-of-the-art automatiseret
              toldbehandlingstjeneste, der integrerer avancerede teknologier som
              automatiseret klassificering, digitale toldplatforme og
              elektronisk informationsudveksling med toldmyndigheder. Fordele:
              Vores automatiseringsløsning øger effektiviteten, reducerer
              risikoen for fejl og fremskynder toldklareringen, hvilket
              resulterer i hurtigere og mere problemfrie leverancer for vores
              kunder.
            </p>
          </div>
          <div className="new-section-div">
            <h5>Global Toldstyring og Harmonisering:</h5>
            <p>
              KH Customs tilbyder en unik løsning, der harmoniserer
              toldprocesserne på tværs af grænser og regioner. Vi skaber
              standardiserede procedurer, implementerer ensartede it-systemer og
              koordinerer toldaktiviteter globalt. Fordele: Vores globale
              toldstyringsløsning giver virksomheder, der opererer
              internationalt, den fordel af ensartede og standardiserede
              toldprocesser. Dette resulterer i forbedret styring, øget
              synlighed og konsistens i toldhåndteringen på tværs af alle
              grænser.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSite;
