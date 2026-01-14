import {
  collection,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../lib/firebase";

const orderRef = collection(db, "orders");

// ➕ TAMBAH ORDER
export const createOrder = async (order) => {
  await addDoc(orderRef, {
    ...order,
    status: "Pending",
    createdAt: serverTimestamp(),
  });
};

// 🔄 UPDATE STATUS ORDER
export const updateOrderStatus = async (id, status) => {
  const orderDoc = doc(db, "orders", id);
  await updateDoc(orderDoc, { status });
};
