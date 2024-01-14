import ContactForm from "../contactForm/ContactForm";
import './contactSite.css';

const ContactSite = () => {
  return (
    <div className="contact-site">
      <section className="contact-site__header">
        <h1>Kontakt os på nedenstående formular </h1>
        <p>Vi ser frem til at høre fra dig.</p>
      </section>
      <section className="contact-site__form">
        <ContactForm />
      </section>
      <section className="contact-site__footer">
      </section>
    </div>
  );
};

export default ContactSite;