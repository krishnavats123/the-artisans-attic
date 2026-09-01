import React, { useEffect, useMemo, useState } from "react";

const WHATSAPP_NUMBER = "918218561946"; // Replace with mother's WhatsApp number, digits only.

const products = [
  {
    id: crypto.randomUUID(),
    name: "Royal Blue Shubh Labh Hanging",
    category: "Diwali Décor",
    price: 349,
    tag: "Festive",
    tone: "marigold",
    desc: "Elegant handcrafted festive hanging featuring traditional Shubh and Labh motifs set against a rich blue base, finished with pearl detailing, ornamental accents, and layered tassels for a refined festive look.",
    images: [
      "/products/Shubh labh/S1/1.jpg",
      "/products/Shubh labh/S1/2.jpg",
      "/products/Shubh labh/S1/3.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Floral Shubh Labh Pearl Hanging",
    category: "Diwali Décor",
    price: 399,
    tag: "Festive",
    tone: "marigold",
    desc: "Beautiful handcrafted hanging featuring Shubh and Labh motifs surrounded by vibrant floral embellishments, pearl detailing, and elegant golden accents—perfect for festive entrances and devotional spaces",
    images: ["/products/Shubh labh/S2/1.jpg", "/products/Shubh labh/S2/2.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Shubh Labh Traditional Door Hanging",
    category: "Diwali Décor",
    price: 349,
    tag: "Festive",
    tone: "marigold",
    desc: "Handcrafted festive hanging featuring traditional Shubh and Labh motifs, designed to add an auspicious and vibrant touch to your entrance, pooja space, or festive décor.",
    images: ["/products/Shubh labh/S3/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Lotus & Sacred Cow Shubh Labh Hanging",
    category: "Diwali Décor",
    price: 299,
    tag: "Festive",
    tone: "marigold",
    desc: "A handcrafted festive décor piece combining lotus flowers, sacred cows, and Shubh Labh motifs, perfect for bringing a traditional and auspicious charm to your home.",
    images: ["/products/Shubh labh/S4/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Golden Lotus Shubh Labh Hanging",
    category: "Diwali Décor",
    price: 649,
    tag: "Festive",
    tone: "marigold",
    desc: "Elegant handcrafted hanging adorned with golden lotus details and traditional Shubh Labh accents, ideal for festive entrances, pooja spaces, and traditional home décor.",
    images: ["/products/Shubh labh/S5/1.jpg", "/products/Shubh labh/S5/2.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Lakshmi Ganesh Shubh Labh Hanging",
    category: "Diwali Décor",
    price: 299,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handcrafted décor featuring Lakshmi, Ganesh, and Shubh Labh motifs, created to bring an auspicious and celebratory feel to your entrance or pooja space.",
    images: ["/products/Shubh labh/S6/1.jpg", "/products/Shubh labh/S6/2.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Shubh Labh Peacock Arch Hanging",
    category: "Diwali Décor",
    price: 199,
    tag: "Festive",
    tone: "marigold",
    desc: "Elegant handcrafted hanging featuring vibrant peacock-inspired arches with traditional Shubh and Labh motifs, finished with delicate pearl accents for a festive entrance.",
    images: ["/products/Shubh labh/S7/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sacred Cow Shubh Labh Hanging",
    category: "Diwali Décor",
    price: 199,
    tag: "Festive",
    tone: "marigold",
    desc: "Traditional handcrafted décor featuring beautifully detailed sacred cows with Shubh and Labh motifs, perfect for adding an auspicious touch to your festive space.",
    images: ["/products/Shubh labh/S8/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sea Green Shubh Labh Pearl Hanging",
    category: "Diwali Décor",
    price: 349,
    tag: "Festive",
    tone: "marigold",
    desc: "Graceful handcrafted hanging in a soothing sea-green tone, accented with pearl detailing and Shubh Labh motifs for a refined festive look.",
    images: ["/products/Shubh labh/S9/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Maroon Shubh Labh Mirror Hanging",
    category: "Diwali Décor",
    price: 499,
    tag: "Festive",
    tone: "marigold",
    desc: "Rich maroon handcrafted décor adorned with intricate Shubh and Labh motifs, pearl detailing, and elegant hanging tassels for a luxurious festive finish.",
    images: ["/products/Shubh labh/S10/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Pink Shubh Labh Hanging Set",
    category: "Diwali Décor",
    price: 399,
    tag: "Festive",
    tone: "marigold",
    desc: "Vibrant handcrafted wall décor featuring traditional Shubh and Labh motifs, adorned with colorful detailing, tassels, and pearl accents for a festive entrance.",
    images: ["/products/Shubh labh/S11/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Golden Diamond Shubh Labh Hanging",
    category: "Diwali Décor",
    price: 449,
    tag: "Festive",
    tone: "marigold",
    desc: "Handcrafted diamond-shaped hanging in a warm golden tone, embellished with traditional Shubh motifs, colorful tassels, and intricate decorative detailing.",
    images: ["/products/Shubh labh/S12/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Shubh Labh Decorative Wall Plaque",
    category: "Diwali Décor",
    price: "349 (Each)",
    tag: "Festive",
    tone: "marigold",
    desc: "Beautiful handcrafted wall plaque featuring prominent Shubh Labh lettering, colorful floral borders, and elegant teal tassels—perfect for festive and traditional home décor.",
    images: [
      "/products/Shubh labh/S13/1.jpg",
      "/products/Shubh labh/S13/2.jpg",
      "/products/Shubh labh/S13/3.jpg",
      "/products/Shubh labh/S13/4.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Lotus & Sacred Cow Festive Hanging",
    category: "Diwali Décor",
    price: 299,
    tag: "Festive",
    tone: "marigold",
    desc: "Eye-catching handcrafted hanging combining vibrant lotus motifs, sacred cows, and colorful beadwork, bringing an auspicious and traditional touch to your home.",
    images: [
      "/products/Wall hanging/WH1/1.jpg",
      "/products/Wall hanging/WH1/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Lakshmi Ganesh Lotus Hanging",
    category: "Diwali Décor",
    price: 349,
    tag: "Festive",
    tone: "marigold",
    desc: "Festive handcrafted hanging featuring Lakshmi and Ganesh figures paired with vibrant lotus motifs, designed to bring an auspicious and traditional touch to your home.",
    images: [
      "/products/Wall hanging/WH2/1.jpg",
      "/products/Wall hanging/WH2/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Triple Diamond Festive Hanging",
    category: "Diwali Décor",
    price: 349,
    tag: "Festive",
    tone: "marigold",
    desc: "A colorful handcrafted wall hanging arranged in three diamond-shaped panels, decorated with traditional motifs, pearl accents, and vibrant hanging details.",
    images: [
      "/products/Wall hanging/WH3/1.jpg",
      "/products/Wall hanging/WH3/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Pink Lotus Vertical Hanging",
    category: "Wall hangings",
    price: 549,
    tag: "Festive",
    tone: "marigold",
    desc: "Elegant handcrafted décor featuring three layered pink lotus motifs with intricate detailing and delicate tassels, perfect for festive walls and entrance spaces.",
    images: ["/products/Wall hanging/WH4/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Colorful Star & Tassel Hanging",
    category: "Wall hangings",
    price: 499,
    tag: "Festive",
    tone: "marigold",
    desc: "Vibrant handmade wall décor featuring colorful star-shaped motifs suspended from a traditional wooden rod, finished with bright tassels for a cheerful festive look.",
    images: ["/products/Wall hanging/WH5/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Colorful Star & Tassel Hanging",
    category: "Wall hangings",
    price: 499,
    tag: "Festive",
    tone: "marigold",
    desc: "Vibrant handmade wall décor featuring colorful star-shaped motifs suspended from a traditional wooden rod, finished with bright tassels for a cheerful festive look.",
    images: [
      "/products/Wall hanging/WH6/1.jpg",
      "/products/Wall hanging/WH6/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Colorful Star & Tassel Hanging",
    category: "Wall hangings",
    price: 499,
    tag: "Festive",
    tone: "marigold",
    desc: "Vibrant handmade wall décor featuring colorful star-shaped motifs suspended from a traditional wooden rod, finished with bright tassels for a cheerful festive look.",
    images: [
      "/products/Wall hanging/WH7/1.jpg",
      "/products/Wall hanging/WH7/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Radha Mala",
    category: "Wall hangings",
    price: 499,
    tag: "Festive",
    tone: "crimson",
    desc: "Beautiful handcrafted Radha Shyam mala featuring intricate traditional detailing and vibrant embellishments, perfect for festive décor, devotional spaces, and adding an auspicious touch to your home.",
    images: [
      "/products/Radha mala/RM1/1.jpg",
      "/products/Radha mala/RM1/2.jpg",
      "/products/Radha mala/RM1/3.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Pink Lotus Laddu Gopal Singhasan",
    category: "Krishna's singhasan",
    price: 749,
    tag: "Signature",
    tone: "peacock",
    desc: "Exquisite handcrafted Singhasan for Laddu Gopal, featuring rich pink fabric, an ornate lotus design, pearl embellishments, and delicate hanging details for a regal devotional setting.",
    images: [
      "/products/Krishna's-jhula/Singhasans/Singhasan4/1.jpg",
      "/products/Krishna's-jhula/Singhasans/Singhasan4/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Golden Floral Laddu Gopal Singhasan",
    category: "Krishna's singhasan",
    price: 699,
    tag: "Signature",
    tone: "peacock",
    desc: "Elegant handcrafted Singhasan for Laddu Gopal, adorned with intricate golden floral embellishments, shimmering details, and a beautifully decorated backdrop for a divine presentation.",
    images: ["/products/Krishna's-jhula/Singhasans/Singhasan1/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Royal Pink & Green Laddu Gopal Singhasan",
    category: "Krishna's singhasan",
    price: "Sold out(on demand)",
    tag: "Signature",
    tone: "peacock",
    desc: "Grand handcrafted Singhasan for Laddu Gopal featuring vibrant pink and green fabric, detailed floral embroidery, pearl accents, and ornate traditional embellishments.",
    images: ["/products/Krishna's-jhula/Singhasans/Singhasan2/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Royal Blue Laddu Gopal Singhasan",
    category: "Krishna's singhasan",
    price: 749,
    tag: "Signature",
    tone: "peacock",
    desc: "Exquisite handcrafted Singhasan for Laddu Gopal featuring rich blue fabric, peacock feather detailing, ornate golden embellishments, and traditional decorative borders for a regal devotional setting.",
    images: ["/products/Krishna's-jhula/Singhasans/Singhasan3/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Pink & Blue Canopy Laddu Gopal Bed",
    category: "Krishna's Bed",
    price: 999,
    tag: "Signature",
    tone: "peacock",
    desc: "Beautiful handcrafted bed for Laddu Gopal featuring a vibrant pink-and-blue base, sheer canopy curtains, pearl embellishments, and delicate floral detailing for a charming devotional setup.",
    images: [
      "/products/Krishna's-jhula/Beds/Bed1/1.jpg",
      "/products/Krishna's-jhula/Beds/Bed1/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "White Canopy Laddu Gopal Bed",
    category: "Krishna's Bed",
    price: 699,
    tag: "Signature",
    tone: "peacock",
    desc: "Elegant handcrafted bed for Laddu Gopal with a bright blue base, flowing white canopy curtains, pearl detailing, and a refined design that creates a serene devotional space.",
    images: ["/products/Krishna's-jhula/Beds/Bed2/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Floral Arch Laddu Gopal Singhasan",
    category: "Krishna's singhasan",
    price: 749,
    tag: "Signature",
    tone: "peacock",
    desc: "Grand handcrafted Singhasan for Laddu Gopal featuring a vibrant floral arch, delicate pearl strands, ornate side detailing, and a rich golden base for a royal festive presentation.",
    images: [
      "/products/Krishna's-jhula/Singhasans/Singhasan5/1.jpg",
      "/products/Krishna's-jhula/Singhasans/Singhasan5/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Pink Lotus Royal Laddu Gopal Singhasan",
    category: "Krishna's singhasan",
    price: 599,
    tag: "Signature",
    tone: "peacock",
    desc: "Beautiful handcrafted Singhasan featuring a rich blue velvet seat, vibrant pink upholstery, an elegant lotus backdrop, and intricate pearl and embellishment work for a regal devotional setting.",
    images: [
      "/products/Krishna's-jhula/Singhasans/Singhasan6/1.jpg",
      "/products/Krishna's-jhula/Singhasans/Singhasan6/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Royal Orange & Red Laddu Gopal Singhasan",
    category: "Krishna's singhasan",
    price: 1149,
    tag: "Signature",
    tone: "peacock",
    desc: "Traditional handcrafted Singhasan with a warm orange and red design, detailed golden borders, decorative accents, and rich fabric work for an elegant festive presentation.",
    images: [
      "/products/Krishna's-jhula/Singhasans/Singhasan7/1.jpg",
      "/products/Krishna's-jhula/Singhasans/Singhasan7/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Peacock Fan Laddu Gopal Singhasan",
    category: "Krishna's singhasan",
    price: 1149,
    tag: "Signature",
    tone: "peacock",
    desc: "Vibrant handcrafted Singhasan featuring a striking peacock-inspired fan backdrop, deep blue seating, colorful detailing, and ornate borders for a graceful devotional setup.",
    images: ["/products/Krishna's-jhula/Singhasans/Singhasan8/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Golden Floral Arch Laddu Gopal Singhasan",
    category: "Krishna's singhasan",
    price: "SOLD OUT",
    tag: "Signature",
    tone: "peacock",
    desc: "Luxurious handcrafted Singhasan with a richly embellished golden arch, floral detailing, delicate pearl strands, and a deep red seat, creating a grand and auspicious setting for Laddu Gopal.",
    images: ["/products/Krishna's-jhula/Singhasans/Singhasan9/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Peacock Feather Pink Laddu Gopal Singhasan",
    category: "Krishna's singhasan",
    price: 1149,
    tag: "Signature",
    tone: "peacock",
    desc: "Exquisite handcrafted Singhasan for Laddu Gopal featuring a vibrant pink velvet seat, intricate floral embellishments, rich golden detailing, and elegant peacock feather accents for a regal devotional setting.",
    images: ["/products/Krishna's-jhula/Singhasans/Singhasan10/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Floral Mirror Work Floor Rangoli",
    category: "Rangoli",
    price: 599,
    tag: "Gift Ready",
    tone: "plum",
    desc: "Vibrant handcrafted floor rangoli featuring a beautiful floral pattern, bright pink and yellow detailing, and traditional mirror-work accents that beautifully complement festive and pooja décor.",
    images: ["/products/rangoli/R1/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Swastik Mirror Work Floor Rangoli",
    category: "Rangoli",
    price: 699,
    tag: "Premium",
    tone: "gold",
    desc: "Traditional handcrafted floor rangoli arranged around an auspicious Swastik motif, featuring vibrant pink and yellow detailing with reflective mirror accents for a festive entrance or pooja space.",
    images: ["/products/rangoli/R2/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Royal Round Floral Floor Rangoli",
    category: "Rangoli",
    price: 999,
    tag: "Premium",
    tone: "gold",
    desc: "Elegant handcrafted round rangoli featuring a detailed floral pattern in vibrant pink, yellow, and gold tones, finished with traditional embellishments for a striking festive centerpiece.",
    images: ["/products/rangoli/R3/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Pink Heart Beaded Earrings",
    category: "Jewellery",
    price: 199,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Charming handmade earrings featuring sparkling pink heart-shaped beadwork, designed for a playful and elegant look. Perfect for gifting or adding a touch of color to everyday outfits.",
    images: [
      "/products/Jewellery/Earrings/E1/1.jpg",
      "/products/Jewellery/Earrings/E1/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Pearl Bow Earrings",
    category: "Jewellery",
    price: 149,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Elegant handmade earrings featuring delicate pearl detailing arranged in a graceful bow design, creating a sophisticated and feminine.",
    images: ["/products/Jewellery/Earrings/E2/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Golden Geometric Earrings",
    category: "Jewellery",
    price: 199,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Bold handmade earrings featuring striking golden geometric detailing with a polished finish, perfect for adding a contemporary touch to festive and party looks.",
    images: [
      "/products/Jewellery/Earrings/E3/1.jpg",
      "/products/Jewellery/Earrings/E3/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Green Floral Beaded Earrings",
    category: "Jewellery",
    price: 149,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Vibrant handmade earrings featuring green floral-inspired beadwork with bright yellow accents and mirror details, bringing a fresh and colorful touch to any outfit.",
    images: [
      "/products/Jewellery/Earrings/E4/1.jpg",
      "/products/Jewellery/Earrings/E4/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Multicolor Floral Beaded Earrings",
    category: "Jewellery",
    price: 199,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Vibrant handmade earrings featuring colorful petal-shaped beads arranged around elegant pearl centers, perfect for adding a playful and festive touch to any outfit.",
    images: ["/products/Jewellery/Earrings/E5/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Colorful Mirror Bead Stud Earrings",
    category: "Jewellery",
    price: 249,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Eye-catching handmade stud earrings featuring vibrant circular beadwork with shimmering mirror centers, available in a variety of rich colors for everyday and festive styling.",
    images: ["/products/Jewellery/Earrings/E6/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Gold & Green Beaded Chandelier Earrings",
    category: "Jewellery",
    price: 199,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Elegant statement earrings crafted with intricate gold-toned beadwork and cascading strands, creating a graceful and sophisticated look for festive occasions.",
    images: ["/products/Jewellery/Earrings/E7/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Red Beaded Floral Earrings",
    category: "Jewellery",
    price: 149,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Striking handmade earrings featuring rich red beads arranged in an elegant floral-inspired design, finished with delicate bead accents for a bold traditional look.",
    images: ["/products/Jewellery/Earrings/E8/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Colorful Mirror Work Statement Earrings",
    category: "Jewellery",
    price: 299,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Bold handmade earrings featuring large mirror-work centers surrounded by colorful bead detailing and delicate floral accents, perfect for festive and traditional outfits.",
    images: ["/products/Jewellery/Earrings/E9/1.jpg"],
  },

  {
    id: crypto.randomUUID(),
    name: "Pink & Gold Floral Jewellery Set",
    category: "Jewellery",
    price: 999,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Beautiful handcrafted jewellery set featuring vibrant pink and gold floral motifs, pearl drops, statement earrings, and matching bangles for a coordinated festive look.",
    images: [
      "/products/Jewellery/Jewellery Set/JS1/1.jpg",
      "/products/Jewellery/Jewellery Set/JS1/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Pearl Beaded Necklace Set",
    category: "Jewellery",
    price: 399,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Elegant handcrafted necklace set featuring delicate pearl beadwork with matching floral-inspired earrings, offering a graceful and timeless look for festive occasions.",
    images: ["/products/Jewellery/Jewellery Set/JS2/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Black Mirror Work Bangles",
    category: "Jewellery",
    price: 249,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Unique handcrafted black bangles adorned with intricate mirror-work detailing, creating a bold traditional accessory that pairs beautifully with both festive and ethnic outfits.",
    images: ["/products/Jewellery/Bangles/B1/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Pink & Blue Geometric Thread Bangles",
    category: "Jewellery",
    price: 249,
    tag: "Made to Order",
    tone: "lavender",
    desc: "Handmade bangles featuring vibrant pink and blue threadwork with an intricate geometric pattern, perfect for adding a colorful traditional touch to festive and everyday outfits.",
    images: [
      "/products/Jewellery/Bangles/B2/1.jpg",
      "/products/Jewellery/Bangles/B2/2.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Multicolor Mirror & Shell Bangles",
    category: "Jewellery",
    price: "179 Each",
    tag: "Made to Order",
    tone: "lavender",
    desc: "Handmade statement bangles combining vibrant fabric, mirror embellishments, and traditional shell detailing in contrasting colors for a unique and eye-catching ethnic look.",
    images: ["/products/Jewellery/Bangles/B3/1.jpg"],
  },

  {
    id: crypto.randomUUID(),
    name: "Jagannath Lippan Art Mirror",
    category: "Lippan Art",
    price: 1199,
    tag: "Best Seller",
    tone: "terracotta",
    desc: "Handcrafted Lippan artwork featuring the iconic Lord Jagannath motif, framed with intricate white mirror work and traditional red detailing. A striking piece for devotional spaces and traditional home décor.",
    images: ["/products/lippan arts/L1/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Peacock Lippan Art Mirror",
    category: "Lippan Art",
    price: 1199,
    tag: "Best Seller",
    tone: "terracotta",
    desc: "Beautiful handcrafted Lippan artwork featuring an elegant peacock surrounded by vibrant green and floral detailing, enhanced with traditional mirror work for a colorful and artistic wall accent.",
    images: ["/products/lippan arts/L2/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Traditional Welcome Lippan Art Mirror",
    category: "Lippan Art",
    price: 999,
    tag: "Best Seller",
    tone: "terracotta",
    desc: "Handcrafted Lippan artwork featuring an intricate floral mandala with a traditional WELCOME centerpiece, vibrant earthy tones, and delicate mirror detailing—perfect for entryways and living spaces.",
    images: ["/products/lippan arts/L3/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Geometric Lippan Art Mirror Panel",
    category: "Lippan Art",
    price: 1399,
    tag: "Best Seller",
    tone: "terracotta",
    desc: "Striking handcrafted Lippan artwork featuring symmetrical geometric patterns, vibrant red and purple tones, traditional motifs, and fine mirror embellishments for a contemporary ethnic look.",
    images: ["/products/lippan arts/L4/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Floral Border Round Lippan Mirror",
    category: "Lippan Art",
    price: 999,
    tag: "Best Seller",
    tone: "terracotta",
    desc: "Elegant circular Lippan mirror surrounded by a detailed floral and leaf-inspired border, combining vibrant red and white tones with traditional mirror work for a beautiful wall accent.",
    images: ["/products/lippan arts/L5/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Om Mandala Lippan Art Mirror",
    category: "Lippan Art",
    price: 1399,
    tag: "Best Seller",
    tone: "terracotta",
    desc: "Auspicious handcrafted Lippan artwork featuring the sacred Om symbol at its center, surrounded by layered floral mandala patterns and intricate mirror detailing for a serene devotional touch.",
    images: ["/products/lippan arts/L6/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Radha Lippan Art Mirror",
    category: "Lippan Art",
    price: 1199,
    tag: "Best Seller",
    tone: "terracotta",
    desc: "Beautiful handcrafted Lippan artwork featuring the graceful Radha motif at the center, surrounded by a detailed floral mandala, traditional patterns, and delicate mirror embellishments.",
    images: ["/products/lippan arts/L7/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Floral Mirror Lippan Art",
    category: "Lippan Art",
    price: 999,
    tag: "Best Seller",
    tone: "terracotta",
    desc: "Vibrant handcrafted Lippan wall décor featuring a striking red floral design with a central mirror, accented with traditional white detailing for a bold and artistic look.",
    images: ["/products/lippan arts/L8/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Geometric Mandala Lippan Art",
    category: "Lippan Art",
    price: 1199,
    tag: "Best Seller",
    tone: "terracotta",
    desc: "Intricate handcrafted Lippan artwork featuring layered geometric and mandala patterns in vibrant shades of purple, pink, orange, and blue, finished with traditional mirror detailing.",
    images: ["/products/lippan arts/L9/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Radha Green Mandala Lippan Art",
    category: "Lippan Art",
    price: 1199,
    tag: "Best Seller",
    tone: "terracotta",
    desc: "Elegant handcrafted Lippan artwork featuring a central Radha motif surrounded by flowing floral patterns and delicate mirror work on a rich green and yellow backdrop.",
    images: ["/products/lippan arts/L10/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Lotus Diya Lippan Art Panel",
    category: "Lippan Art",
    price: 999,
    tag: "Best Seller",
    tone: "terracotta",
    desc: "Handcrafted Lippan artwork featuring a vibrant lotus and diya-inspired centerpiece, surrounded by intricate floral motifs and delicate mirror detailing. A beautiful choice for festive and devotional décor.",
    images: ["/products/lippan arts/L11/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Black & Gold Ornate Lippan Mirror",
    category: "Lippan Art",
    price: 2999,
    tag: "Best Seller",
    tone: "terracotta",
    desc: "Elegant handcrafted Lippan mirror featuring an intricate black-and-white ornamental border with a classic central mirror, combining traditional craftsmanship with a sophisticated contemporary look.",
    images: ["/products/lippan arts/L12/1.png"],
  },
  {
    id: crypto.randomUUID(),
    name: "Shubh Labh Lippan Wall Plaque",
    category: "Lippan Art",
    price: 1399,
    tag: "Best Seller",
    tone: "terracotta",
    desc: "Traditional handcrafted Lippan wall plaque featuring Shubh Labh lettering, surrounded by colorful geometric borders and intricate mirror detailing—perfect for entrances and festive spaces.",
    images: ["/products/lippan arts/L13/1.jpg"],
  },

  {
    id: crypto.randomUUID(),
    name: "Royal Blue Hand-Painted Decorative Bottle",
    category: "Glass Bottle Painting",
    price: 899,
    tag: "Popular",
    tone: "rose",
    desc: "Upcycled glass bottle transformed with rich blue hand-painted detailing, ornate golden embellishments, and traditional decorative patterns, making it a distinctive accent for shelves and tabletops.",
    images: ["/products/bottles/B1/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Green Basket Floral Decorative Bottle",
    category: "Glass Bottle Painting",
    price: 999,
    tag: "Unique",
    tone: "mustard",
    desc: "Upcycled glass bottle handcrafted in vibrant green, featuring a traditional woven basket motif with colorful beadwork and floral detailing. A unique accent piece for shelves, tables, or festive corners.",
    images: ["/products/bottles/B2/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Blue Floral Handcrafted Bottle",
    category: "Glass Bottle Painting",
    price: 999,
    tag: "Unique",
    tone: "mustard",
    desc: "Beautifully handcrafted decorative bottle finished in deep blue, adorned with colorful floral and leafy embellishments for a charming artistic touch. Perfect for adding character to any home décor.",
    images: ["/products/bottles/B3/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Colorful Thread-Wrapped Decorative Bottle Set",
    category: "Glass Bottle Painting",
    price: 699,
    tag: "Unique",
    tone: "mustard",
    desc: "Set of three handcrafted bottles wrapped in vibrant red, orange, and yellow thread, accented with pearl details and decorative tassels for a cheerful traditional look.",
    images: ["/products/bottles/B4/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Rajasthani Mirror Work Tea Light Holder Set",
    category: "tea light holder",
    price: "399 PAIR",
    tag: "Unique",
    tone: "mustard",
    desc: "Pair of handcrafted rectangular tea light holders featuring vibrant pink and orange fabric, traditional mirror work, and intricate decorative detailing—perfect for creating a warm festive glow.",
    images: ["/products/teaholder/TH1/1.jpg", "/products/teaholder/TH1/2.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Orange & Pink Mirror Tea Light Holder",
    category: "tea light holder",
    price: "199 each",
    tag: "Unique",
    tone: "mustard",
    desc: "Handcrafted circular tea light holder featuring vibrant orange and pink geometric patterns, finished with traditional mirror detailing for a warm and festive glow.",
    images: ["/products/teaholder/TH2/1.png","/products/teaholder/TH2/2.png"],
  },
  {
    id: crypto.randomUUID(),
    name: "Red & Yellow Square Tea Light Holder",
    category: "tea light holder",
    price: "199 each",
    tag: "Unique",
    tone: "mustard",
    desc: "Elegant handcrafted square tea light holder combining rich red and yellow tones with intricate floral patterns and mirror accents, perfect for festive table and home décor.",
    images: ["/products/teaholder/TH3/1.png","/products/teaholder/TH3/2.png"],
  },
  {
    id: crypto.randomUUID(),
    name: "Orange Octagonal Mirror Tea Light Holder",
    category: "tea light holder",
    price: "199 each",
    tag: "Unique",
    tone: "mustard",
    desc: "Unique handcrafted octagonal tea light holder featuring bold orange tones, layered geometric patterns, and traditional mirror work for a striking festive centerpiece.",
    images: ["/products/teaholder/TH4/1.png","/products/teaholder/TH4/2.png"],
  },
  
  {
    id: crypto.randomUUID(),
    name: "Custom Photo Lippan Art Frame",
    category: "Custom",
    price: "on demand",
    tag: "Unique",
    tone: "mustard",
    desc: "Personalized handcrafted Lippan artwork featuring your cherished photograph within an ornate floral and mirror-work design. A meaningful keepsake for weddings, anniversaries, and special occasions.",
    images: ["/products/custom/c1/1.jpg"],
  },
  {
    id: crypto.randomUUID(),
    name: "Custom Photo Lippan Art Frame",
    category: "Custom",
    price: "on demand",
    tag: "Unique",
    tone: "mustard",  
    desc: "Personalized handcrafted Lippan artwork featuring your cherished photograph within an ornate floral and mirror-work design. A meaningful keepsake for weddings, anniversaries, and special occasions.",
    images: [
      "/products/custom/c2/1.jpg",
      "/products/custom/c2/2.jpg",
      "/products/custom/c2/3.jpg",
      "/products/custom/c2/4.jpg",
    ],
  },
];

const categories = [
  "All",
  "Lippan Art",
  "Glass Bottle Painting",
  "Diwali Décor",
  "Krishna's Bed",
  "Krishna's singhasan",
  "Rangoli",
  "Jewellery",
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
