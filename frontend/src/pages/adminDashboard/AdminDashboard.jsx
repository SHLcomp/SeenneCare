import { useState } from "react";
import "./AdminDashboard.scss";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "Skincare",
    subCategory: "",
    description: "",
    price: "",
    stock: "",
    imageSrc: "",
    rating: "",
    slug: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productData = {
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
        rating: Number(formData.rating),
      };

      const response = await fetch(
        "http://localhost:5000/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to add product"
        );
      }

      console.log("Created product:", data);

      setMessage("Product added successfully!");

      setFormData({
        name: "",
        brand: "",
        category: "Skincare",
        subCategory: "",
        description: "",
        price: "",
        stock: "",
        imageSrc: "",
        rating: "",
        slug: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setMessage(error.message);
    }
  };

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>

      <div className="add-product">
        <h2>Add Product</h2>

        <form onSubmit={handleSubmit}>

          {/* Product name & slug */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Product Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Product name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="slug">Product Slug</label>
              <input
                id="slug"
                type="text"
                name="slug"
                placeholder="product-slug"
                value={formData.slug}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Brand & category */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="brand">Brand</label>
              <input
                id="brand"
                type="text"
                name="brand"
                placeholder="Brand"
                value={formData.brand}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>

              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="Skincare">Skincare</option>
                <option value="Makeup">Makeup</option>
              </select>
            </div>
          </div>

          {/* Sub-category */}
          <div className="form-group">
            <label htmlFor="subCategory">
              Sub-category
            </label>

            <input
              id="subCategory"
              type="text"
              name="subCategory"
              placeholder="e.g. Serum, Moisturizer, Cleanser"
              value={formData.subCategory}
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">
              Description
            </label>

            <textarea
              id="description"
              name="description"
              placeholder="Product description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Price, stock & rating */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="price">Price (JOD)</label>

              <input
                id="price"
                type="number"
                name="price"
                placeholder="0.00"
                value={formData.price}
                onChange={handleChange}
                step="0.01"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="stock">Stock</label>

              <input
                id="stock"
                type="number"
                name="stock"
                placeholder="0"
                value={formData.stock}
                onChange={handleChange}
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating</label>

              <input
                id="rating"
                type="number"
                name="rating"
                placeholder="0 - 5"
                value={formData.rating}
                onChange={handleChange}
                min="0"
                max="5"
                step="0.1"
              />
            </div>
          </div>

          {/* Image */}
          <div className="form-group">
            <label htmlFor="imageSrc">
              Product Image URL
            </label>

            <input
              id="imageSrc"
              type="url"
              name="imageSrc"
              placeholder="https://example.com/product-image.jpg"
              value={formData.imageSrc}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">
            Add Product
          </button>
        </form>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Dashboard;

