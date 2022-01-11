import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const login = (formData) => API.post("/auth/login", formData);
export const signUp = (formData) => API.post("/auth/register", formData);
export const addProduct = (formData) => API.post("/product", formData);
export const addOrderItem = (data) => API.post("/order-item", data);
export const addOrder = (data) => API.post("/order", data);
export const addPaymentCard = (data) => API.post("/payment-card", data);

export const getUsers = () => API.get("/user");
export const getProducts = () => API.get("/product");
export const getOrderItems = () => API.get("/order-item");
export const getOrders = () => API.get("/order");
export const getPaymentCards = () => API.get("/payment-card");

export const deleteOrderItem = (id) => API.delete("/order-item/" + id, id);

export const updateOrder = (id, done) => API.patch("/order/" + id, done);
