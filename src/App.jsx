import React, { useEffect, useMemo, useState } from "react";

const WHATSAPP_NUMBER = "918218561946"; // Replace with mother's WhatsApp number, digits only.

const products = [
  {
    id: crypto.randomUUID(),
    name: "Lippan Art Mirror",
    category: "Lippan Art",
    price: 1499,
    tag: "Best Seller",
    tone: "terracotta",
    desc: "Hand-finished mud and mirror artwork for elegant statement walls.",
    images: ["/products/lippan arts/Mirror/1.png"],
  },
  {
    id: crypto.randomUUID(),
    name: "Peacock Lippan Panel",
    category: "Lippan Art",
    price: 1899,
    tag: "Handmade",
    tone: "indigo",
    desc: "Traditional Indian motif with raised detailing and mirror work.",
  },
  {
    id: crypto.randomUUID(),
    name: "Floral Glass Bottle",
    category: "Glass Bottle Painting",
    price: 899,
    tag: "Popular",
    tone: "rose",
    desc: "Upcycled glass bottle painted by hand with delicate floral details.",
  },
  {
    id: crypto.randomUUID(),
    name: "Mandala Bottle",
    category: "Glass Bottle Painting",
    price: 999,
    tag: "Unique",
    tone: "mustard",
    desc: "Decorative painted bottle designed to glow beautifully as décor.",
  },
  {
    id: crypto.randomUUID(),
    name: "Lotus Wall Hanging",
    category: "Wall Hangings",
    price: 799,
    tag: "New",
    tone: "sage",
    desc: "Lightweight handmade hanging for entryways, bedrooms and pooja spaces.",
  },
  {
    id: crypto.randomUUID(),
    name: "Boho Mirror Hanging",
    category: "Wall Hangings",
    price: 1299,
    tag: "Handmade",
    tone: "sand",
    desc: "Textured wall décor combining earthy tones, mirrors and handcrafted details.",
  },
  {
    id: crypto.randomUUID(),
    name: "Diwali Shubh Labh Set",
    category: "Diwali Décor",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: [
      "/products/Shubh labh/S1/1.jpg",
      "/products/Shubh labh/S1/2.jpg",
      "/products/Shubh labh/S1/3.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Diwali Shubh Labh Set",
    category: "Diwali Décor",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: ["/products/Shubh labh/S2/1.jpg", "/products/Shubh labh/S2/2.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Diwali Shubh Labh Set",
    category: "Diwali Décor",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: ["/products/Shubh labh/S3/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Diwali Shubh Labh Set",
    category: "Diwali Décor",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: ["/products/Shubh labh/S4/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Diwali Shubh Labh Set",
    category: "Diwali Décor",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: ["/products/Shubh labh/S5/1.jpg", "/products/Shubh labh/S5/2.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Diwali Shubh Labh Set",
    category: "Diwali Décor",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: ["/products/Shubh labh/S6/1.jpg", "/products/Shubh labh/S6/2.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Diwali Shubh Labh Set",
    category: "Diwali Décor",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: ["/products/Shubh labh/S7/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Diwali Shubh Labh Set",
    category: "Diwali Décor",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: ["/products/Shubh labh/S8/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Diwali Shubh Labh Set",
    category: "Diwali Décor",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: ["/products/Shubh labh/S9/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Diwali Shubh Labh Set",
    category: "Diwali Décor",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: ["/products/Shubh labh/S10/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Diwali Shubh Labh Set",
    category: "Diwali Décor",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: ["/products/Shubh labh/S11/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Diwali Shubh Labh Set",
    category: "Diwali Décor",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: ["/products/Shubh labh/S12/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Diwali Shubh Labh Set",
    category: "Diwali Décor",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: [
      "/products/Shubh labh/S13/1.jpg",
      "/products/Shubh labh/S13/2.jpg",
      "/products/Shubh labh/S13/3.jpg",
      "/products/Shubh labh/S13/4.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Wall hanging",
    category: "Diwali Décor",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: [
      "/products/Wall hanging/WH1/1.jpg",
      "/products/Wall hanging/WH1/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Wall hanging",
    category: "Diwali Décor",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: [
      "/products/Wall hanging/WH2/1.jpg",
      "/products/Wall hanging/WH2/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Wall hanging",
    category: "Diwali Décor",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: [
      "/products/Wall hanging/WH3/1.jpg",
      "/products/Wall hanging/WH3/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Wall hanging",
    category: "Wall hangings",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: ["/products/Wall hanging/WH4/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Wall hanging",
    category: "Wall hangings",
    price: 699,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handmade décor for your entrance, mandir or gifting table.",
    images: ["/products/Wall hanging/WH5/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Radha mala",
    category: "Wall hangings",
    price: 1099,
    tag: "Festive",
    tone: "crimson",
    desc: "Decorative diya arrangement made for warm festive evenings.",
    images: [
      "/products/Radha mala/1.jpg",
      "/products/Radha mala/2.jpg",
      "/products/Radha mala/3.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Krishna's singhasan",
    category: "Krishna's singhasan",
    price: 1299,
    tag: "Signature",
    tone: "peacock",
    desc: "Hand-decorated jhula for Laddu Gopal with intricate festive detailing.",
    images: [
      "/products/Krishna's-jhula/Singhasans/Singhasan4/1.jpg",
      "/products/Krishna's-jhula/Singhasans/Singhasan4/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Krishna's singhasan",
    category: "Krishna's singhasan",
    price: 1499,
    tag: "Signature",
    tone: "peacock",
    desc: "Hand-decorated jhula for Laddu Gopal with intricate festive detailing.",
    images: ["/products/Krishna's-jhula/Singhasans/Singhasan1/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Krishna's singhasan",
    category: "Krishna's singhasan",
    price: 799,
    tag: "Signature",
    tone: "peacock",
    desc: "Hand-decorated jhula for Laddu Gopal with intricate festive detailing.",
    images: ["/products/Krishna's-jhula/Singhasans/Singhasan2/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Krishna's singhasan",
    category: "Krishna's singhasan",
    price: 999,
    tag: "Signature",
    tone: "peacock",
    desc: "Hand-decorated jhula for Laddu Gopal with intricate festive detailing.",
    images: ["/products/Krishna's-jhula/Singhasans/Singhasan3/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Krishna's Bed",
    category: "Krishna's Bed",
    price: 1599,
    tag: "Signature",
    tone: "peacock",
    desc: "Hand-decorated jhula for Laddu Gopal with intricate festive detailing.",
    images: [
      "/products/Krishna's-jhula/Beds/Bed1/1.jpg",
      "/products/Krishna's-jhula/Beds/Bed1/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Krishna's Bed",
    category: "Krishna's Bed",
    price: 1499,
    tag: "Signature",
    tone: "peacock",
    desc: "Hand-decorated jhula for Laddu Gopal with intricate festive detailing.",
    images: ["/products/Krishna's-jhula/Beds/Bed2/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Krishna's singhasan",
    category: "Krishna's singhasan",
    price: 1499,
    tag: "Signature",
    tone: "peacock",
    desc: "Hand-decorated jhula for Laddu Gopal with intricate festive detailing.",
    images: [
      "/products/Krishna's-jhula/Singhasans/Singhasan5/1.jpg",
      "/products/Krishna's-jhula/Singhasans/Singhasan5/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Krishna's singhasan",
    category: "Krishna's singhasan",
    price: 1499,
    tag: "Signature",
    tone: "peacock",
    desc: "Hand-decorated jhula for Laddu Gopal with intricate festive detailing.",
    images: [
      "/products/Krishna's-jhula/Singhasans/Singhasan6/1.jpg",
      "/products/Krishna's-jhula/Singhasans/Singhasan6/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Krishna's singhasan",
    category: "Krishna's singhasan",
    price: 1499,
    tag: "Signature",
    tone: "peacock",
    desc: "Hand-decorated jhula for Laddu Gopal with intricate festive detailing.",
    images: [
      "/products/Krishna's-jhula/Singhasans/Singhasan7/1.jpg",
      "/products/Krishna's-jhula/Singhasans/Singhasan7/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Krishna's singhasan",
    category: "Krishna's singhasan",
    price: 1499,
    tag: "Signature",
    tone: "peacock",
    desc: "Hand-decorated jhula for Laddu Gopal with intricate festive detailing.",
    images: ["/products/Krishna's-jhula/Singhasans/Singhasan8/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Krishna's singhasan",
    category: "Krishna's singhasan",
    price: 1499,
    tag: "Signature",
    tone: "peacock",
    desc: "Hand-decorated jhula for Laddu Gopal with intricate festive detailing.",
    images: ["/products/Krishna's-jhula/Singhasans/Singhasan9/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Krishna's singhasan",
    category: "Krishna's singhasan",
    price: 1499,
    tag: "Signature",
    tone: "peacock",
    desc: "Hand-decorated jhula for Laddu Gopal with intricate festive detailing.",
    images: ["/products/Krishna's-jhula/Singhasans/Singhasan10/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Floor Rangoli",
    category: "Rangoli",
    price: 1599,
    tag: "Gift Ready",
    tone: "plum",
    desc: "Curated handmade pieces packed beautifully for festivals and occasions.",
    images: ["/products/rangoli/R1/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Swastik Floor Rangoli",
    category: "Rangoli",
    price: 2199,
    tag: "Premium",
    tone: "gold",
    desc: "A thoughtful handmade hamper for housewarming, pooja and celebrations.",
    images: ["/products/rangoli/R2/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Round Rangoli",
    category: "Rangoli",
    price: 2199,
    tag: "Premium",
    tone: "gold",
    desc: "A thoughtful handmade hamper for housewarming, pooja and celebrations.",
    images: ["/products/rangoli/R3/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name : "Earrings" , 
    category : "Jewellery",
    price: 1999,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Personalised wall décor created around your name, initials or occasion.",
    images: [
      "/products/Jewellery/Earrings/E1/1.jpg",
      "/products/Jewellery/Earrings/E1/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name : "Earrings" , 
    category : "Jewellery",
    price: 1999,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Personalised wall décor created around your name, initials or occasion.",
    images: [
      "/products/Jewellery/Earrings/E2/1.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name : "Earrings" , 
    category : "Jewellery",
    price: 1999,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Personalised wall décor created around your name, initials or occasion.",
    images: [
      "/products/Jewellery/Earrings/E3/1.jpg",
      "/products/Jewellery/Earrings/E3/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name : "Earrings" , 
    category : "Jewellery",
    price: 1999,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Personalised wall décor created around your name, initials or occasion.",
    images: [
      "/products/Jewellery/Earrings/E4/1.jpg",
      "/products/Jewellery/Earrings/E4/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name : "Earrings" , 
    category : "Jewellery",
    price: 1999,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Personalised wall décor created around your name, initials or occasion.",
    images: [
      "/products/Jewellery/Earrings/E5/1.jpg"
    ],
  },
  {
    id: crypto.randomUUID(),
    name : "Earrings" , 
    category : "Jewellery",
    price: 1999,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Personalised wall décor created around your name, initials or occasion.",
    images: [
      "/products/Jewellery/Earrings/E6/1.jpg"
    ],
  },
  {
    id: crypto.randomUUID(),
    name : "Earrings" , 
    category : "Jewellery",
    price: 1999,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Personalised wall décor created around your name, initials or occasion.",
    images: [
      "/products/Jewellery/Earrings/E7/1.jpg"
    ],
  },
  {
    id: crypto.randomUUID(),
    name : "Earrings" , 
    category : "Jewellery",
    price: 1999,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Personalised wall décor created around your name, initials or occasion.",
    images: [
      "/products/Jewellery/Earrings/E8/1.jpg"
    ],
  },
  {
    id: crypto.randomUUID(),
    name : "Earrings" , 
    category : "Jewellery",
    price: 1999,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Personalised wall décor created around your name, initials or occasion.",
    images: [
      "/products/Jewellery/Earrings/E9/1.jpg"
    ],
  },
 
  {
    id: crypto.randomUUID(),
    name : "Jewellery Set" , 
    category : "Jewellery",
    price: 1999,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Personalised wall décor created around your name, initials or occasion.",
    images: [
      "/products/Jewellery/Jewellery Set/JS1/1.jpg",
      "/products/Jewellery/Jewellery Set/JS1/2.jpg"
    ],
  },
  {
    id: crypto.randomUUID(),
    name : "Jewellery Set" , 
    category : "Jewellery",
    price: 1999,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Personalised wall décor created around your name, initials or occasion.",
    images: [
      "/products/Jewellery/Jewellery Set/JS2/1.jpg"
    ],
  },
  {
    id: crypto.randomUUID(),
    name : "Bangles" , 
    category : "Jewellery",
    price: 1999,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Personalised wall décor created around your name, initials or occasion.",
    images: [
      "/products/Jewellery/Bangles/B1/1.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name : "Bangles" , 
    category : "Jewellery",
    price: 1999,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Personalised wall décor created around your name, initials or occasion.",
    images: [
      "/products/Jewellery/Bangles/B2/1.jpg",
      "/products/Jewellery/Bangles/B2/2.jpg"
    ],
  },
  {
    id: crypto.randomUUID(),
    name : "Bangles" , 
    category : "Jewellery",
    price: 1999,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Personalised wall décor created around your name, initials or occasion.",
    images: [
      "/products/Jewellery/Bangles/B3/1.jpg"
    ],
  },
 
];

const categories = [
  "All",
  "Lippan Art",
  "Glass Bottle Painting",
  "Wall Hangings",
  "Diwali Décor",
  "Krishna's Bed",
  "Krishna's singhasan",
  "Rangoli",
  "Jewellery",
  "Hampers",
  "Custom",
];

function Icon({ name, size = 20 }) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const paths = {
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    bag: (
      <>
        <path d="M6 8h12l1 12H5L6 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    heart: (
      <path d="M20.8 8.9c0 5.5-8.8 10.2-8.8 10.2S3.2 14.4 3.2 8.9A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.7Z" />
    ),
  };
  return <svg {...p}>{paths[name]}</svg>;
}

function ProductVisual({ product }) {
  const images = product.images;

  if (images?.length) {
    return <ProductCardGallery product={product} images={images} />;
  }
  function ProductCardGallery({ product, images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = (e) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const previousImage = (e) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
      <div
        className={`product-visual product-visual--gallery ${
          product.id === 12 ? "product-visual--custom" : ""
        }`}
      >
        <div className="product-card-carousel">
          <button
            type="button"
            className="product-card-carousel__arrow product-card-carousel__arrow--left"
            onClick={previousImage}
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            src={images[currentIndex]}
            alt={`${product.name} — image ${currentIndex + 1} of ${
              images.length
            }`}
            className="product-card-carousel__image"
          />

          <button
            type="button"
            className="product-card-carousel__arrow product-card-carousel__arrow--right"
            onClick={nextImage}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="product-card-carousel__counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-visual">
      <div className={`visual-placeholder ${product.tone}`}>
        <div className="visual-orbit" />
        <div className="visual-shape">
          <span>
            {product.category === "Lippan Art"
              ? "◌"
              : product.category === "Diwali Décor"
              ? "✦"
              : product.category === "Hampers"
              ? "□"
              : product.category === "Krishna's Jhula"
              ? "♢"
              : "✺"}
          </span>
        </div>
        <small>{product.category}</small>
      </div>
    </div>
  );
}

function ProductGallery({ product }) {
  const images = product.images || [];
  const [current, setCurrent] = useState(0);

  if (!images.length) {
    return <ProductVisual product={product} />;
  }

  const previous = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <div className="custom-gallery">
      <div className="custom-gallery-main">
        <img src={images[current]} alt={`${product.name} ${current + 1}`} />

        {images.length > 1 && (
          <>
            <button
              className="custom-gallery-arrow custom-gallery-prev"
              onClick={previous}
            >
              ‹
            </button>

            <button
              className="custom-gallery-arrow custom-gallery-next"
              onClick={next}
            >
              ›
            </button>

            <span className="custom-gallery-count">
              {current + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      <div className="custom-gallery-thumbs">
        {images.map((image, index) => (
          <button
            key={image}
            className={index === current ? "selected" : ""}
            onClick={() => setCurrent(index)}
          >
            <img src={image} alt={`${product.name} — thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
function App() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quick, setQuick] = useState(null);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("mitti-rang-cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);
  useEffect(
    () => localStorage.setItem("mitti-rang-cart", JSON.stringify(cart)),
    [cart]
  );
  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(""), 2200);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          p.name.toLowerCase().includes(query.toLowerCase())
      ),
    [category, query]
  );
  const count = cart.reduce((a, x) => a + x.qty, 0);
  const total = cart.reduce((a, x) => a + x.price * x.qty, 0);

  function add(p) {
    setCart((c) => {
      const old = c.find((x) => x.id === p.id);
      return old
        ? c.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x))
        : [...c, { ...p, qty: 1 }];
    });
    setToast(`${p.name} added to your bag`);
  }
  function remove(id) {
    setCart((c) => c.filter((x) => x.id !== id));
  }
  function checkout() {
    if (!cart.length) return;
    const lines = cart
      .map((x) => `• ${x.name} × ${x.qty} — ₹${x.price * x.qty}`)
      .join("%0A");
    const text = `Hello! I'd like to order:%0A${lines}%0A%0ATotal: ₹${total}%0A%0APlease share availability, delivery charges and payment details.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  }
  function go(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }

  return (
    <div className="site">
      <div className="announcement">
        Handmade with love in India <span>•</span> Custom orders available
      </div>
      <header className="nav">
        <button
          className="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <Icon name={mobileOpen ? "close" : "menu"} />
        </button>
        <button className="brand" onClick={() => go("home")}>
          <span className="brand-mark">✦</span>
          <span>The Artisan's Attic</span>
        </button>
        <nav className={mobileOpen ? "nav-links open" : "nav-links"}>
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("shop")}>Shop</button>
          <button onClick={() => go("story")}>Our Story</button>
          <button onClick={() => go("custom")}>Custom Orders</button>
        </nav>
        <div className="nav-actions">
          <button
            onClick={() =>
              document.querySelector(".search-wrap input")?.focus()
            }
            aria-label="Search"
          >
            <Icon name="search" />
          </button>
          <button
            className="bag"
            onClick={() => setCartOpen(true)}
            aria-label="Shopping bag"
          >
            <Icon name="bag" />
            <b>{count}</b>
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Handmade Indian Art • Since 2026</p>
            <h1>
              Art that makes
              <br />
              <em>home feel yours.</em>
            </h1>
            <p className="hero-text">
              Thoughtfully handcrafted lippan art, painted bottles, wall décor,
              festive creations and gifts — made one piece at a time.
            </p>
            <div className="hero-buttons">
              <button className="btn dark" onClick={() => go("shop")}>
                Explore the collection <Icon name="arrow" size={17} />
              </button>
              <button className="text-btn" onClick={() => go("story")}>
                Meet the maker
              </button>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-circle c1" />
            <div className="hero-circle c2" />
            <div className="hero-card">
              <span>✦</span>
              <strong>HANDMADE</strong>
              <small>with patience & love</small>
            </div>
            <div className="hero-tag">
              LIPPAN
              <br />
              ART
            </div>
          </div>
          <div className="scroll-note">
            Scroll to explore <span>↓</span>
          </div>
        </section>

        <section className="intro-strip">
          <p>Every piece is a little different.</p>
          <span>That is the point.</span>
          <p>Small-batch • Hand-painted • Made in India</p>
        </section>

        <section id="shop" className="shop-section">
          <div className="section-head">
            <div>
              <p className="eyebrow">The collection</p>
              <h2>
                Made for <em>meaningful</em> spaces.
              </h2>
            </div>
            <div className="search-wrap">
              <Icon name="search" size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search handmade pieces..."
              />
            </div>
          </div>
          <div className="filters">
            {categories.map((c) => (
              <button
                key={c}
                className={category === c ? "active" : ""}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="product-grid">
            {filtered.map((p) => (
              <article
                className="product-card"
                key={p.id}
                onClick={() => setQuick(p)}
              >
                <button
                  className="wishlist"
                  aria-label="Wishlist"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon name="heart" size={18} />
                </button>
                <ProductVisual product={p} />
                <div className="product-info">
                  <div>
                    <span className="product-tag">{p.tag}</span>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                  </div>
                  <div className="product-bottom">
                    <strong>₹{p.price.toLocaleString("en-IN")}</strong>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        add(p);
                      }}
                    >
                      Add to bag
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {!filtered.length && (
            <div className="empty">
              No pieces found. Try another search or category.
            </div>
          )}
        </section>

        <section className="feature-banner">
          <div>
            <p className="eyebrow">For celebrations & everyday beauty</p>
            <h2>
              Give something
              <br />
              <em>made by hand.</em>
            </h2>
            <button className="btn light" onClick={() => go("custom")}>
              Create a custom gift <Icon name="arrow" size={17} />
            </button>
          </div>
          <div className="banner-motif">
            ✦<span>ॐ</span>✦
          </div>
        </section>

        <section id="story" className="story">
          <div className="story-art">
            <div className="story-tile">✺</div>
            <div className="story-note">
              Made slowly.
              <br />
              Made sincerely.
            </div>
          </div>
          <div className="story-copy">
            <p className="eyebrow">Our story</p>
            <h2>
              A mother's hands.
              <br />
              <em>A family's little studio.</em>
            </h2>
            <p>
              What started as a love for decorating our own home grew into a
              collection of handmade pieces for other homes. Each item is
              shaped, painted, assembled or finished by hand — with the small
              imperfections that make handmade work feel alive.
            </p>
            <p>
              We believe décor should carry a little warmth, not just fill a
              wall.
            </p>
            <button className="text-btn" onClick={() => go("custom")}>
              Talk to us about a custom piece <Icon name="arrow" size={16} />
            </button>
          </div>
        </section>

        <section id="custom" className="custom">
          <div className="custom-inner">
            <p className="eyebrow">Made for you</p>
            <h2>
              Have an idea?
              <br />
              <em>Let's make it real.</em>
            </h2>
            <p>
              Names, colours, sizes, themes, wedding favours, festive hampers
              and special gifting — tell us what you have in mind.
            </p>
            <a
              className="btn dark"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello!%20I%20have%20a%20custom%20handmade%20art%20idea.`}
              target="_blank"
              rel="noreferrer"
            >
              Start a WhatsApp conversation <Icon name="arrow" size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">✦</span>
          <strong>The Artisan's Attic</strong>
          <p>Handmade art for homes, hearts & celebrations.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <button onClick={() => go("shop")}>Shop</button>
          <button onClick={() => go("story")}>Our Story</button>
          <button onClick={() => go("custom")}>Custom Orders</button>
        </div>
        <div>
          <h4>Categories</h4>
          <button
            onClick={() => {
              setCategory("Lippan Art");
              go("shop");
            }}
          >
            Lippan Art
          </button>
          <button
            onClick={() => {
              setCategory("Diwali Décor");
              go("shop");
            }}
          >
            Festive Décor
          </button>
          <button
            onClick={() => {
              setCategory("Hampers");
              go("shop");
            }}
          >
            Hampers
          </button>
        </div>
        <div>
          <h4>Contact</h4>
          <p>WhatsApp orders</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
          >
            Chat with us ↗
          </a>
          <p>Made in India</p>
        </div>
        <div className="copyright">
          © 2026 The Artisan's Attic. All handmade, all heart.
        </div>
      </footer>

      {cartOpen && (
        <div className="overlay" onClick={() => setCartOpen(false)}>
          <aside className="cart" onClick={(e) => e.stopPropagation()}>
            <div className="cart-head">
              <h2>Your bag</h2>
              <button onClick={() => setCartOpen(false)}>
                <Icon name="close" />
              </button>
            </div>
            {!cart.length ? (
              <div className="cart-empty">
                <div>✦</div>
                <h3>Your bag is waiting.</h3>
                <p>Add a handmade piece you love.</p>
                <button
                  className="btn dark"
                  onClick={() => {
                    setCartOpen(false);
                    go("shop");
                  }}
                >
                  Explore pieces
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((x) => (
                    <div className="cart-item" key={x.id}>
                      <ProductVisual product={x} />
                      <div>
                        <h3>{x.name}</h3>
                        <p>
                          ₹{x.price.toLocaleString("en-IN")} × {x.qty}
                        </p>
                        <button onClick={() => remove(x.id)}>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-total">
                  <span>Total</span>
                  <strong>₹{total.toLocaleString("en-IN")}</strong>
                </div>
                <button className="checkout" onClick={checkout}>
                  Order on WhatsApp <Icon name="arrow" size={17} />
                </button>
                <p className="cart-note">
                  We'll confirm availability, delivery charges and payment
                  details with you on WhatsApp.
                </p>
              </>
            )}
          </aside>
        </div>
      )}
      {quick && (
        <div className="product-modal-overlay" onClick={() => setQuick(null)}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="product-modal-close"
              onClick={() => setQuick(null)}
              aria-label="Close"
            >
              ×
            </button>

            <ProductGallery product={quick} />

            <div className="product-modal-info">
              <span className="product-tag">{quick.tag}</span>

              <h2>{quick.name}</h2>

              <p>{quick.desc}</p>

              <div className="product-modal-price">
                ₹{quick.price.toLocaleString("en-IN")}
              </div>

              <div className="product-modal-actions">
                <button
                  className="btn dark"
                  onClick={() => {
                    add(quick);
                    setQuick(null);
                    setCartOpen(true);
                  }}
                >
                  Add to bag
                </button>

                <a
                  className="btn whatsapp-btn"
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello!%20I'm%20interested%20in%20${encodeURIComponent(
                    quick.name
                  )}.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default App;
