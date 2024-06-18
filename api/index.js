import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

// 상품 목록 조회
function fetchProducts() {
  return instance.get("/products");
}

// 특정 상품 조회하는 api 함수
function fetchProductById(id) {
  return instance.get(`/products/${id}`);
}

export { instance, fetchProducts, fetchProductById };
