import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  axios.get("http://localhost:3001/products") // ✅ ชี้ไปที่ backend port 3001
    .then((response) => {
      setProducts(response.data);
    })
    .catch((error) => {
      console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
    });
}, []);

  return (
    <div>
      <h2>รายการสินค้า</h2>
      <ul>
        {products.map((item) => (
          <li key={item.ProductID}>
            {item.ProductName} - {item.Price} บาท---
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
