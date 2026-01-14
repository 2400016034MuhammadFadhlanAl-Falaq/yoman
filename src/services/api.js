import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../lib/firebase";

const BASE_URL = "https://694aebc926e870772066ebf7.mockapi.io/product";

export const decreaseStock = async (productId) => {
  const productRef = doc(db, "products", productId);
  await updateDoc(productRef, {
    stock: increment(-1),
  });
};

export const getProducts = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
};

export const deleteProduct = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};

export const updateProduct = async (id, product) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
};
