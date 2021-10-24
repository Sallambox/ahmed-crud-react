import http from "../utils/http";

const getAll = () => {
  return http.get("/products");
};
const getOne = (id) => {
  return http.get(`/products/${id}`);
};


const AddAll = (product) => {
  return http.post("/products",product);
};
const updateOne = (id,product) => {
  return http.put(`/products/${id}`,product);
};
const deleteOne = (id) => {
  return http.delete(`/products/${id}`);
};

const ProductService = {
  getAll,
  getOne,
  AddAll,
  updateOne,
  deleteOne
};

export default ProductService;