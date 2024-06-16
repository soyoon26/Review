import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios.get("http://localhost:4000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  console.log(products);

  return (
    <div>
      ProductList
      <ul>
        {products &&
          products.map((product) => {
            return <li key={product.id}>{product.name}</li>;
          })}
        {/* key를 적어줘야 함 */}
      </ul>
    </div>
  );
}
export default ProductList;
