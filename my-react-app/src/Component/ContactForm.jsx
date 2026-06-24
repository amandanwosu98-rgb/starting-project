// ContactForm.jsx
import { useState } from "react";

function ContactForm() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Data:", contactData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={contactData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={contactData.email}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Enter your message"
        value={contactData.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;