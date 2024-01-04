import { useState } from "react";
import "./toldReglerSite.css";
import Footer from "../footer/Footer";

const ToldreglerSite = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleOpen = () =>
    setOpenAccordion(openAccordion !== "accordion1" ? "accordion1" : null);
  const toggleOpen1 = () =>
    setOpenAccordion(openAccordion !== "accordion2" ? "accordion2" : null);
  const toggleOpen2 = () =>
    setOpenAccordion(openAccordion !== "accordion3" ? "accordion3" : null);
  const toggleOpen3 = () =>
    setOpenAccordion(openAccordion !== "accordion4" ? "accordion4" : null);

  return (
    <div className="toldregler-site">
      <header className="site-header">Information omkring toldregler</header>
      <main className="site-main">
        <h1>Toldregler</h1>
        <div className="accordion">
          <div className="accordion-buttons">
            <button
              onClick={toggleOpen}
              className={`accordion-button ${
                openAccordion === "accordion1" ? "active" : ""
              }`}
            >
              {openAccordion === "accordion1" ? "Hide" : "Show"} MIO
            </button>
            <button
              onClick={toggleOpen1}
              className={`accordion-button ${
                openAccordion === "accordion2" ? "active" : ""
              }`}
            >
              {openAccordion === "accordion2" ? "Hide" : "Show"} Jern og stål
            </button>
            <button
              onClick={toggleOpen2}
              className={`accordion-button ${
                openAccordion === "accordion3" ? "active" : ""
              }`}
            >
              {openAccordion === "accordion3" ? "Hide" : "Show"} rules 2
            </button>
            <button
              onClick={toggleOpen3}
              className={`accordion-button ${
                openAccordion === "accordion4" ? "active" : ""
              }`}
            >
              {openAccordion === "accordion4" ? "Hide" : "Show"} rules 3
            </button>
          </div>
          {openAccordion === "accordion1" && (
            <p className="accordion-content">
              Proceduren for midlertidig import er en særlig procedure, der gør
              det muligt at importere ikke-EU-varer til midlertidig anvendelse i
              EU's toldområde med fuldstændig eller delvis toldfritagelse
              forudsat, at varerne reeksporteres efter anvendelsen. Formålet med
              proceduren for midlertidig import af transportmidler og varer er
              at fremme økonomiske, humanitære, kulturelle, sociale og
              turistmæssige målsætninger gennem en forenkling og harmonisering
              af toldproceduren. Ved anvendelse af proceduren kan der gives
              fuldstændig eller delvis toldfritagelse for transportmidler samt
              for en række varer til nærmere bestemte formål, når de importeres
              fra lande uden for EU og er bestemt til reeksport. Der kan ansøges
              om midlertidig import på toldangivelsen ved grænsetoldstedet,
              sammen med en blanket til midlertidig import.
            </p>
          )}
          {openAccordion === "accordion2" && (
            <p className="accordion-content">
              Er du klar over hvilken certifikat kode, som din virksomhed skal
              bruge, når i importerer varer af jern og stål med de nye regler?
              De nye regler omkring import af jern- og stålvarer, gør at du som
              virksomhed skal kunne dokumentere, at dine varer IKKE indeholder
              jern- eller ståldele af russisk oprindelse. Hvordan du
              dokumenterer, er op til den enkelte importør, da der ikke er nogle
              regler for, hvilke dokumenter du skal fremvise. Når du kan
              fremvise dokumentation for, at det importerede produkt IKKE
              indeholder jern- eller ståldele af russisk oprindelse, skal du
              indsætte certifikatkoden Y824 i fortoldningen på de omfattede
              varer. Varer, der er indført i EU's toldområde og frembudt for
              myndighederne før ikrafttrædelsen eller anvendelsesdatoen for
              denne sanktion, skal der bruges certifikatkode Y859
            </p>
          )}
          {openAccordion === "accordion3" && (
            <p className="accordion-content">// Content for accordion 3</p>
          )}
          {openAccordion === "accordion4" && (
            <p className="accordion-content">// Content for accordion 4</p>
          )}
          <div className="section">
            <h2 className="section-title">Section 1</h2>
            <p className="section-content">Content for section 1</p>
          </div>

          <div className="section">
            <h2 className="section-title">Section 2</h2>
            <p className="section-content">Content for section 2</p>
          </div>

          <div className="section">
            <h2 className="section-title">Section 3</h2>
            <p className="section-content">Content for section 3</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ToldreglerSite;
