import { useState, useEffect } from "react";

const PricingSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 500);
  }, []);

  const styles = {
    section: {
      padding: "60px 20px",
      textAlign: "center",
      background: "#f8f8f8",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "30px",
      color: "#333",
    },
    pricingContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      justifyContent: "center",
      alignItems: "center",
    },
    pricingCard: {
      background: "linear-gradient(to right, #ff758c, #ff7eb3)",
      padding: "25px",
      borderRadius: "15px",
      boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
      transition: "transform 0.3s ease-in-out",
      color: "#fff",
      opacity: fadeIn ? 1 : 0,
      transform: fadeIn ? "translateY(0)" : "translateY(20px)",
    },
    price: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    planName: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    planFeatures: {
      fontSize: "1rem",
      marginTop: "10px",
    },
    button: {
      marginTop: "15px",
      padding: "10px 20px",
      backgroundColor: "#fff",
      color: "#ff758c",
      borderRadius: "25px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.3s",
      border: "none",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Fashion Pricing Plans</h2>
      <div style={styles.pricingContainer}>
        <div
          style={styles.pricingCard}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <h3 style={styles.planName}>Basic</h3>
          <p style={styles.price}> Rs 2000</p>
          <p style={styles.planFeatures}>• Trendy Casual Wear<br />• Free Shipping<br />• 24/7 Support</p>
          <button style={styles.button}>Get Started</button>
        </div>
        <div
          style={styles.pricingCard}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <h3 style={styles.planName}>Premium</h3>
          <p style={styles.price}>Rs 3999</p>
          <p style={styles.planFeatures}>• Designer Outfits<br />• Priority Shipping<br />• VIP Customer Support</p>
          <button style={styles.button}>Get Started</button>
        </div>
        <div
          style={styles.pricingCard}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <h3 style={styles.planName}>Luxury</h3>
          <p style={styles.price}> Rs 4999</p>
          <p style={styles.planFeatures}>• Exclusive Luxury Brands<br />• Same-Day Delivery<br />• Personal Stylist</p>
          <button style={styles.button}>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

