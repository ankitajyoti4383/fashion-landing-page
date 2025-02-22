import { useEffect, useState } from "react";

const FeaturesSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 500);
  }, []);

  const styles = {
    section: {
      padding: "50px 20px",
      textAlign: "center",
      background: "#fff",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "30px",
      color: "#333",
    },
    featuresContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      justifyContent: "center",
      alignItems: "center",
    },
    featureCard: {
      background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
      transition: "transform 0.3s ease-in-out",
      color: "#fff",
      opacity: fadeIn ? 1 : 0,
      transform: fadeIn ? "translateY(0)" : "translateY(20px)",
    },
    featureIcon: {
      fontSize: "3rem",
      marginBottom: "10px",
    },
    featureTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    featureDesc: {
      fontSize: "1rem",
      marginTop: "10px",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Why Choose Us?</h2>
      <div style={styles.featuresContainer}>
        <div
          style={styles.featureCard}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div style={styles.featureIcon}>🛍️</div>
          <h3 style={styles.featureTitle}>Exclusive Styles</h3>
          <p style={styles.featureDesc}>Stay ahead with the latest fashion trends.</p>
        </div>
        <div
          style={styles.featureCard}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div style={styles.featureIcon}>🌱</div>
          <h3 style={styles.featureTitle}>Sustainable Fashion</h3>
          <p style={styles.featureDesc}>Eco-friendly materials for a better future.</p>
        </div>
        <div
          style={styles.featureCard}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div style={styles.featureIcon}>🚀</div>
          <h3 style={styles.featureTitle}>Fast Shipping</h3>
          <p style={styles.featureDesc}>Get your orders delivered quickly and safely.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

