const WHATSAPP_NUMBER = '918218561946';

export function buildOrderMessage(cart, total) {
  const lines = cart
    .map((x) => `• ${x.name} × ${x.qty} — ₹${x.price * x.qty}`)
    .join('%0A');
  return `Hello! I'd like to order:%0A${lines}%0A%0ATotal: ₹${total}%0A%0APlease share availability, delivery charges and payment details.`;
}

export function buildProductMessage(productName) {
  return `Hello! I'm interested in ${encodeURIComponent(productName)}.`;
}

export function buildCustomMessage() {
  return 'Hello! I have a custom handmade art idea.';
}

export function openWhatsApp(text) {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
}

export function openWhatsAppDirect() {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
}