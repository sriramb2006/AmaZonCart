function ProductCard({
  name,
  price,
  quantity,
  selectedColor,
  deliveryCity,
  setQuantity,
  setSelectedColor,
  setDeliveryCity
}) {
  return (
    <div style={{ border: "2px solid #ff9900", borderRadius: "10px", padding: "20px", margin: "20px auto", maxWidth: "400px" }}>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>Quantity: {quantity}</p>

      <label>Colour: </label>
      <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
        <option value="Black">Black</option>
        <option value="Blue">Blue</option>
        <option value="White">White</option>
      </select>

      <p>Selected Colour: {selectedColor}</p>

      <label>Delivery City: </label>
      <input value={deliveryCity} onChange={(e) => setDeliveryCity(e.target.value)} />

      <p>Total: ₹{quantity * price}</p>
      <p>{quantity === 0 ? "Cart is empty" : "Product added to cart"}</p>

      <button onClick={() => setQuantity(quantity + 1)}>Add to Cart</button>
      <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 0} style={{ marginLeft: "8px" }}>Remove One</button>
      <button onClick={() => setQuantity(0)} style={{ marginLeft: "8px" }}>Reset Cart</button>
    </div>
  );
}

export default ProductCard;
