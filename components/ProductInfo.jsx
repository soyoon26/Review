import React from "react";

export default function ProductInfo({ productDetail }) {
  return (
    <div>
      <div>
        <img src={productDetail.imageUrl} alt=""></img>
      </div>
      <div>
        <p>{productDetail.name}</p>
        <p>{productDetail.price}</p>
      </div>
    </div>
  );
}
