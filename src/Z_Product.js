import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [cost, setCost] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ProductName: productName,
      Price: price,
      Cost: cost,
      StockQuantity: stockQuantity,
      Category: category,
    };

    axios.post("http://localhost:3001/products", newProduct)
      .then(() => {
        alert("บันทึกข้อมูลเรียบร้อยแล้ว ✅");
        navigate("/"); // กลับไปหน้ารายการสินค้า
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาดในการบันทึก:", error);
      });
  };

  return (
    <div>
      <h2>เพิ่มสินค้าใหม่</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ชื่อสินค้า: </label>
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        </div>
        <div>
          <label>ราคา: </label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>ต้นทุน: </label>
          <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} required />
        </div>
        <div>
          <label>จำนวนคงเหลือ: </label>
          <input type="number" value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} required />
        </div>
        <div>
          <label>หมวดหมู่: </label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <button type="submit">บันทึก</button>
      </form>
    </div>
  );
}

export default AddProduct;
