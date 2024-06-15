import axios from "axios";
import React, { useEffect, useState } from "react";

function ProductPage() {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios.get("http://localhost:4000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  console.log(products);
  return <div style={{ color: "pink" }}>홈페이지</div>;
}
export default ProductPage;
