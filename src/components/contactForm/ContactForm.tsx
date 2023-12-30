import React, { useState, useEffect } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", description: "" });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const words = event.target.value.split(" ").filter((word) => word !== "");
    if (words.length <= 200) {
      setForm({ ...form, description: event.target.value });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newErrors = validate(form);
    if (Object.values(newErrors).some((error) => error !== "")) return;

    setIsSubmitted(true);
  };

  const validate = (form: {
    name: string;
    email: string;
    description: string;
  }) => {
    const newErrors = { name: "", email: "", description: "" };
    if (form.name.trim() === "") newErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email address.";
    if (form.description.split(" ").filter((word) => word !== "").length === 0)
      newErrors.description = "Please enter a description.";
    setErrors(newErrors);
    return newErrors;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div>
        <label>
          Navn:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
          />
        </label>
        {errors.name && <div className="error">{errors.name}</div>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
          />
        </label>
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label>
          Beskrivelse:
          <textarea
            name="description"
            value={form.description}
            onChange={handleDescriptionChange}
            maxLength={400}
          />
        </label>
        {errors.description && (
          <div className="error">{errors.description}</div>
        )}
        <div>{form.description.length} / 400 characters</div>
      </div>
      <input type="submit" value="Send" />
      {isSubmitted && (
        <div className="success">
          Vi har modtaget din besked og kontakter dig snarest!
        </div>
      )}
    </form>
  );
};

export default ContactForm;
