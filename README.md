# Mitti & Rang — Handmade Art Studio

A responsive React/Vite storefront for handmade Lippan art, glass bottle painting, wall hangings, Diwali décor, Krishna's Jhula, hampers and custom orders.

## Run locally

1. Install Node.js 18+.
2. In this folder run:

```bash
npm install
npm run dev
```

3. Open the local URL printed by Vite.

## Before publishing

Open `src/App.jsx` and replace:

```js
const WHATSAPP_NUMBER = '91XXXXXXXXXX';
```

with the mother's WhatsApp number, digits only.

Then replace the sample product visuals with real product photos. The current visual blocks are intentional placeholders so the website works immediately without external image files.

## What is included

- Responsive mobile/tablet/desktop layout
- Sticky navigation
- Product categories and search
- Product cards with pricing
- LocalStorage shopping bag
- WhatsApp checkout flow
- Custom-order CTA
- Story/about section
- Festive gifting section
- No backend required for the first version

For a production ecommerce store, add a backend/payment provider and an admin panel for products, inventory, orders and delivery charges.
