import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const styles = {
    section: {
      padding: "60px 20px",
      textAlign: "center",
      background: "#ff758c",
      color: "#fff",
      borderRadius: "15px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "400px",
      margin: "auto",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      borderRadius: "5px",
      border: "none",
      fontSize: "16px",
    },
    button: {
      backgroundColor: "#fff",
      color: "#ff758c",
      padding: "12px 20px",
      borderRadius: "25px",
      fontWeight: "bold",
      cursor: "pointer",
      border: "none",
      transition: "all 0.3s ease-in-out",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Get in Touch</h2>
      <p>Have questions? Contact us now!</p>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          style={styles.input}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          style={styles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          style={{ ...styles.input, height: "100px" }}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          {submitted ? "Sent! 🎉" : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;

