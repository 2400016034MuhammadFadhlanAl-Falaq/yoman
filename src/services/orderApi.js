export async function validateUserOrder(orderId) {
  // simulasi order milik user (nanti ganti backend)
  const userOrders = ["JP123456789", "JT987654321"];
  return userOrders.includes(orderId);
}
