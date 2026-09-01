export function formatPrice(price) {
  return `₹${price.toLocaleString('en-IN')}`;
}

export function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

export function calculateCount(items) {
  return items.reduce((sum, item) => sum + item.qty, 0);
}