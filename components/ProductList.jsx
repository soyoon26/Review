import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ProductList.module.css";

function ProductList() {
  const [products, setProducts] = useState([]);
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
            return (
              <li key={product.id} className={styles.item}>
                <div>
                  <Image
                    src={product.imageUrl}
                    width={300}
                    height={250}
                    alt={product.name}
                  ></Image>
                </div>
                <div>{product.name}</div>
                <div>{product.price}</div>
              </li>
            );
          })}
        {/* key를 적어줘야 함 */}
      </ul>
    </div>
  );
}
export default ProductList;
