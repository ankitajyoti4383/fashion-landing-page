

const Footer = () => {
  return (
    <footer style={styles.footer} className="slide-up">
      <p style={styles.text}>© 2025 Your Company | All Rights Reserved</p>
      <div style={styles.socialIcons}>
        <a href="#" style={styles.icon}>🌍</a>
        <a href="#" style={styles.icon}>📘</a>
        <a href="#" style={styles.icon}>🐦</a>
        <a href="#" style={styles.icon}>📸</a>
      </div>
    </footer>
  );
};


const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#222",
    color: "#fff",
    marginTop: "20px",
    animation: "slideUp 1s ease-in-out",
  },
  text: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  icon: {
    textDecoration: "none",
    fontSize: "20px",
    color: "#fff",
    transition: "0.3s ease-in-out",
  },
};

export default Footer;
