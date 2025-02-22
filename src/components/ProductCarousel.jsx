import { useState } from "react";

const ProductCarousel = () => {
  const [current, setCurrent] = useState(0);
  const products = [
    { id: 1, image: "https://tse3.mm.bing.net/th?id=OIP.d8QjMiDhYsebYaAwpIaaeAHaJ4&pid=Api&P=0&h=180", name: "Trendy Jacket", price: "Rs 1999" },
    { id: 2, image: "https://tse4.mm.bing.net/th?id=OIP.Rr4xfSl3hybpMioA-LLf0wHaNM&pid=Api&P=0&h=180", name: "Summer Dress", price: "Rs 1499" },
    { id: 3, image: "https://tse1.mm.bing.net/th?id=OIP.a0TmVCjRcHZOQHj6CxUCuQHaJ4&pid=Api&P=0&h=180", name: "Casual Sneakers", price: "Rs 1999" },
  ];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % products.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + products.length) % products.length);

  const styles = {
    container: { textAlign: "center", padding: "50px 20px", background: "#fff" },
    slider: { display: "flex", alignItems: "center", justifyContent: "center", position: "relative" },
    button: { fontSize: "1.5rem", cursor: "pointer", margin: "10px" },
    product: { textAlign: "center", transition: "transform 0.5s ease-in-out" },
    img: { width: "250px", height: "350px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" },
  };

  return (
    <section style={styles.container}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#333" }}>Featured Fashion</h2>
      <div style={styles.slider}>
        <span style={styles.button} onClick={prevSlide}>⬅</span>
        <div style={styles.product}>
          <img src={products[current].image} alt={products[current].name} style={styles.img} />
          <h3>{products[current].name}</h3>
          <p>{products[current].price}</p>
        </div>
        <span style={styles.button} onClick={nextSlide}>➡</span>
      </div>
    </section>
  );
};

export default ProductCarousel;
