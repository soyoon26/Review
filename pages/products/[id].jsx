import { fetchProductById } from "@/api";
import ProductHeader from "@/components/ProductHeader";
import axios from "axios";
import React from "react";

export default function ProductInfoPage({ message, productInfo }) {
  return (
    <div>
      <ProductHeader title="상품 상세 정보 페이지" />
      ProductInfoPage : {message}
      <p>{productInfo.name}</p>
    </div>
  );
}
export async function getServerSideProps(context) {
  const id = context.params.id;
  const response = await fetchProductById(id);
  return {
    props: {
      message: "서버에서 보내준 메세지",
      productInfo: response.data,
    },
  };
}
