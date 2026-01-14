import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders((prev) => [
      ...prev,
      {
        id: Date.now(),
        status: "Pending",
        ...order,
      },
    ]);
  };

  const updateOrderStatus = (id, status) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  return (
    <OrderContext.Provider
      value={{ orders, addOrder, updateOrderStatus }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrderContext);
}
