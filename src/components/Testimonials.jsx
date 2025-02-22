import { useEffect, useState } from "react";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    { name: "Ankita", text: "Absolutely love this fashion brand! The quality is amazing." },
    { name: "Jyoti", text: "Stylish and affordable, my go-to brand for trendy outfits!" },
    { name: "Rimjhim", text: "Great collection, I get compliments every time I wear their pieces!" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]); 

  return (
    <section style={{ padding: "50px 20px", background: "#f8f8f8", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#333" }}>What Our Customers Say</h2>
      <div style={{ maxWidth: "500px", margin: "auto", padding: "20px", background: "#fff", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
        <p style={{ fontSize: "1.2rem" }}>“{testimonials[current].text}”</p>
        <h4>- {testimonials[current].name}</h4>
      </div>
    </section>
  );
};

export default Testimonials;

