import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const product = { name: "Wireless Mouse", price: 499 };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Header />

      <div style={{ textAlign: "center", margin: "15px" }}>
        <button onClick={() => setShowProduct(!showProduct)}>
          {showProduct ? "Hide Product" : "Show Product"}
        </button>
      </div>

      {showProduct && (
        <ProductCard
          name={product.name}
          price={product.price}
          quantity={quantity}
          selectedColor={selectedColor}
          deliveryCity={deliveryCity}
          setQuantity={setQuantity}
          setSelectedColor={setSelectedColor}
          setDeliveryCity={setDeliveryCity}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
