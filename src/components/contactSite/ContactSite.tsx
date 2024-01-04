import ContactForm from "../contactForm/ContactForm";
import './contactSite.css';

const ContactSite = () => {
  return (
    <div className="contact-site">
      <section className="contact-site__header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
      </section>
      <section className="contact-site__form">
        <ContactForm />
      </section>
      <section className="contact-site__footer">
        <p>Alternatively, you can reach us at (123) 456-7890 or email us at info@example.com.</p>
      </section>
    </div>
  );
};

export default ContactSite;