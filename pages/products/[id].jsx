import { fetchProductById } from "@/api";
import ProductHeader from "@/components/ProductHeader";
import ProductInfo from "@/components/ProductInfo";
import axios from "axios";
import React from "react";

export default function ProductInfoPage({ productDetail }) {
  return (
    <div>
      <ProductHeader title="상품 상세 정보 페이지" />
      {/* <p>{productDetail.name}</p> */}
      <ProductInfo productDetail={productDetail} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const id = context.params.id;
  const { data } = await fetchProductById(id); // ctrl + space = 가져올 수 있는 항목들을 볼 수 있음
  return {
    props: {
      productDetail: data,
    },
  };
}
