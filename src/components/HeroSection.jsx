import { useEffect, useState } from "react";

const HeroSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 500);
  }, []);

  const styles = {
    hero: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      background: "url('https://wallpapertag.com/wallpaper/full/d/0/a/982168-amazing-fashion-desktop-backgrounds-2880x1800-images.jpg')",
      color: "white",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "20px",
      transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
      transform: fadeIn ? "translateY(0)" : "translateY(20px)",
      opacity: fadeIn ? 1 : 0,
    },
    title: {
      fontSize: "3.5rem",
      fontWeight: "bold",
      textShadow: "2px 2px 10px rgba(0,0,0,0.2)",
    },
    subtitle: {
      fontSize: "1.5rem",
      marginTop: "10px",
      opacity: 0.9,
    },
    button: {
      marginTop: "20px",
      padding: "12px 25px",
      fontSize: "1.2rem",
      backgroundColor: "white",
      color: "#ff5f6d",
      borderRadius: "30px",
      border: "none",
      cursor: "pointer",
      transition: "transform 0.3s ease, background 0.3s ease",
    },
    buttonHover: {
      transform: "scale(1.1)",
      backgroundColor: "#ff5f6d",
      color: "white",
    },
  };

  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>Discover Your Style</h1>
      <p style={styles.subtitle}>Trendy. Stylish. Timeless.</p>
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style = { ...styles.button, ...styles.buttonHover })}
        onMouseLeave={(e) => (e.target.style = styles.button)}
      >
        Shop Now
      </button>
    </section>
  );
};

export default HeroSection;


