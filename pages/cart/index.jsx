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
  return (
    <div style={{ color: "pink" }}>
      상품 목록 페이지
      <ul>
        {products &&
          products.map((product) => {
            return <li key={product.id}>{products.name}</li>;
          })}
        {/* key를 적어줘야 함 */}
      </ul>
    </div>
  );
}
export default ProductPage;
