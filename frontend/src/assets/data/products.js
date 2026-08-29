const products = [
  {
    id: "skn-001",
    name: "Golden Glow Vitamin C Serum",
    slug: "golden-glow-vitamin-c-serum",

    brand: "Luna Beauty",

    category: "Skincare",
    subCategory: "Serum",

    description:
      "Brightening serum formulated with Vitamin C and Hyaluronic Acid.",

    price: 34.99,
    discountPrice: 29.99,

    stock: 145,
    imageSrc: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
    images: [
      "/images/products/vitamin-c-1.jpg",
      "/images/products/vitamin-c-2.jpg",
    ],

    ingredients: ["Vitamin C", "Hyaluronic Acid", "Niacinamide", "Glycerin"],

    skinTypes: ["Dry", "Normal", "Combination", "Oily"],

    concerns: ["Dullness", "Hyperpigmentation", "Uneven Skin Tone"],

    tags: ["Brightening", "Hydrating", "Bestseller"],

    rating: 4.8,
    reviewCount: 1287,

    purchaseCount: 5231,
    likesCount: 2140,

    launchDate: "2026-04-12",

    featured: true,
    isNewArrival: true,

    status: "active",
    eyebrow: ["best-seller"],
    currency: "JOD",
  },

  {
    id: "skn-002",
    name: "Deep Hydration Barrier Cream",
    slug: "deep-hydration-barrier-cream",

    brand: "Luna Beauty",

    category: "Skincare",
    subCategory: "Moisturizer",

    description:
      "Rich moisturizer that supports the skin barrier and locks in moisture.",

    price: 28.99,
    discountPrice: null,

    stock: 89,
    imageSrc:
      "https://images.pexels.com/photos/7321499/pexels-photo-7321499.jpeg",
    images: ["/images/products/barrier-cream-1.jpg"],

    ingredients: ["Ceramides", "Squalane", "Panthenol", "Shea Butter"],

    skinTypes: ["Dry", "Sensitive", "Normal"],

    concerns: ["Dryness", "Sensitivity", "Redness"],

    tags: ["Hydrating", "Barrier Repair"],

    rating: 4.9,
    reviewCount: 932,

    purchaseCount: 4720,
    likesCount: 1822,

    launchDate: "2025-11-10",

    featured: false,
    isNewArrival: false,

    status: "active",
    eyebrow: ["best-seller"],
    currency: "JOD",
  },

  //new
  {
    id: "skn-003",
    name: "Pure Balance Niacinamide Serum",
    slug: "pure-balance-niacinamide-serum",

    brand: "Luna Beauty",

    category: "Skincare",
    subCategory: "Serum",

    description:
      "Lightweight balancing serum designed to refine pores and improve skin texture.",

    price: 31.99,
    discountPrice: 27.99,

    stock: 132,

    imageSrc:
      "https://images.pexels.com/photos/5938592/pexels-photo-5938592.jpeg",
    images: ["/images/products/niacinamide-1.jpg"],

    ingredients: ["Niacinamide", "Zinc PCA", "Hyaluronic Acid", "Aloe Vera"],

    skinTypes: ["Oily", "Combination", "Normal"],

    concerns: ["Large Pores", "Excess Oil", "Uneven Texture"],

    tags: ["Balancing", "Pore Care", "Trending"],

    rating: 4.7,
    reviewCount: 864,

    purchaseCount: 3890,
    likesCount: 1720,

    launchDate: "2026-01-15",

    featured: true,
    isNewArrival: false,

    status: "active",
    eyebrow: [],
    currency: "JOD",
  },

  {
    id: "skn-004",
    name: "Midnight Repair Retinol Serum",
    slug: "midnight-repair-retinol-serum",

    brand: "Luna Beauty",

    category: "Skincare",
    subCategory: "Serum",

    description:
      "Night serum formulated to support smoother, healthier-looking skin.",

    price: 39.99,
    discountPrice: 34.99,

    stock: 96,

    imageSrc:
      "https://images.pexels.com/photos/8534273/pexels-photo-8534273.jpeg",
    images: ["/images/products/retinol-1.jpg"],

    ingredients: ["Retinol", "Peptides", "Vitamin E", "Jojoba Oil"],

    skinTypes: ["Normal", "Combination", "Dry"],

    concerns: ["Fine Lines", "Texture", "Dullness"],

    tags: ["Anti-Aging", "Night Care", "Premium"],

    rating: 4.8,
    reviewCount: 645,

    purchaseCount: 2780,
    likesCount: 1432,

    launchDate: "2026-02-20",

    featured: false,
    isNewArrival: true,

    status: "active",
    eyebrow: [],
    currency: "JOD",
  },

  {
    id: "skn-005",
    name: "Hydra Cloud Hyaluronic Essence",
    slug: "hydra-cloud-hyaluronic-essence",

    brand: "Luna Beauty",

    category: "Skincare",
    subCategory: "Essence",

    description:
      "Refreshing essence that delivers deep hydration and a natural glow.",

    price: 25.99,
    discountPrice: null,

    stock: 210,

    imageSrc:
      "https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg",
    images: ["/images/products/essence-1.jpg"],

    ingredients: [
      "Hyaluronic Acid",
      "Green Tea Extract",
      "Glycerin",
      "Panthenol",
    ],

    skinTypes: ["Dry", "Normal", "Sensitive"],

    concerns: ["Dehydration", "Dullness", "Dry Texture"],

    tags: ["Hydrating", "Glow", "Daily Care"],

    rating: 4.6,
    reviewCount: 510,

    purchaseCount: 2140,
    likesCount: 980,

    launchDate: "2025-12-05",

    featured: false,
    isNewArrival: false,

    status: "active",
    eyebrow: [],
    currency: "JOD",
  },

  {
    id: "skn-006",
    name: "Gentle Rose Cleansing Foam",
    slug: "gentle-rose-cleansing-foam",

    brand: "Luna Beauty",

    category: "Skincare",
    subCategory: "Cleanser",

    description:
      "Soft foaming cleanser that removes impurities while maintaining moisture.",

    price: 19.99,
    discountPrice: 16.99,

    stock: 300,

    imageSrc:
      "https://images.pexels.com/photos/7755221/pexels-photo-7755221.jpeg",
    images: ["/images/products/cleanser-1.jpg"],

    ingredients: ["Rose Water", "Glycerin", "Chamomile", "Aloe Vera"],

    skinTypes: ["Sensitive", "Dry", "Normal"],

    concerns: ["Sensitivity", "Dryness", "Redness"],

    tags: ["Gentle", "Clean Beauty", "Daily Essential"],

    rating: 4.9,
    reviewCount: 1102,

    purchaseCount: 6020,
    likesCount: 2640,

    launchDate: "2025-10-18",

    featured: true,
    isNewArrival: false,

    status: "active",
    eyebrow: [],
    currency: "JOD",
  },

  {
    id: "skn-007",
    name: "Mineral Glow Sunscreen SPF 50",
    slug: "mineral-glow-sunscreen-spf-50",

    brand: "Luna Beauty",

    category: "Skincare",
    subCategory: "Sunscreen",

    description:
      "Lightweight mineral sunscreen providing daily UV protection with a glowing finish.",

    price: 22.99,
    discountPrice: null,

    stock: 178,

    imageSrc:
      "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
    images: ["/images/products/sunscreen-1.jpg"],

    ingredients: ["Zinc Oxide", "Vitamin E", "Aloe Vera", "Squalane"],

    skinTypes: ["All Skin Types"],

    concerns: ["Sun Protection", "Dullness", "Dryness"],

    tags: ["SPF", "Glow", "Daily Protection"],

    rating: 4.8,
    reviewCount: 934,

    purchaseCount: 4310,
    likesCount: 1900,

    launchDate: "2026-05-01",

    featured: true,
    isNewArrival: true,

    status: "active",
    eyebrow: [],
    currency: "JOD",
  },

  {
    id: "skn-008",
    name: "Cica Calm Recovery Balm",
    slug: "cica-calm-recovery-balm",

    brand: "Luna Beauty",

    category: "Skincare",
    subCategory: "Treatment",

    description:
      "Soothing recovery balm designed for stressed and sensitive skin.",

    price: 29.99,
    discountPrice: 24.99,

    stock: 75,

    imageSrc:
      "https://images.pexels.com/photos/7796524/pexels-photo-7796524.jpeg",
    images: ["/images/products/cica-balm-1.jpg"],

    ingredients: [
      "Centella Asiatica",
      "Panthenol",
      "Ceramides",
      "Madecassoside",
    ],

    skinTypes: ["Sensitive", "Dry", "Normal"],

    concerns: ["Redness", "Irritation", "Damaged Barrier"],

    tags: ["Calming", "Barrier Repair", "Sensitive Skin"],

    rating: 4.9,
    reviewCount: 788,

    purchaseCount: 3650,
    likesCount: 1540,

    launchDate: "2026-03-10",

    featured: false,
    isNewArrival: true,

    status: "active",
    eyebrow: [],
    currency: "JOD",
  },

  //new up


  //new down
  {
    id: "skn-009",
    name: "Pearl Bright Eye Recovery Cream",
    slug: "pearl-bright-eye-recovery-cream",

    brand: "Luna Beauty",

    category: "Skincare",
    subCategory: "Eye Care",

    description:
      "Lightweight eye cream that hydrates and refreshes the delicate eye area.",

    price: 26.99,
    discountPrice: 22.99,

    stock: 120,

    imageSrc:
      "https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg",
    images: ["/images/products/eye-cream-1.jpg"],

    ingredients: ["Caffeine", "Peptides", "Vitamin C", "Hyaluronic Acid"],

    skinTypes: ["All Skin Types"],

    concerns: ["Dark Circles", "Dryness", "Fine Lines"],

    tags: ["Brightening", "Eye Care", "Hydrating"],

    rating: 4.7,
    reviewCount: 624,

    purchaseCount: 2910,
    likesCount: 1310,

    launchDate: "2026-02-14",

    featured: false,
    isNewArrival: false,

    status: "active",
    eyebrow: [],
    currency: "JOD",
  },

  {
    id: "skn-010",
    name: "Velvet Skin Exfoliating Polish",
    slug: "velvet-skin-exfoliating-polish",

    brand: "Luna Beauty",

    category: "Skincare",
    subCategory: "Exfoliator",

    description:
      "Gentle exfoliating polish that removes dead skin and improves smoothness.",

    price: 23.99,
    discountPrice: null,

    stock: 155,

    imageSrc:
      "https://images.pexels.com/photos/6621328/pexels-photo-6621328.jpeg",
    images: ["/images/products/exfoliator-1.jpg"],

    ingredients: ["Lactic Acid", "Rice Powder", "Aloe Vera", "Vitamin E"],

    skinTypes: ["Normal", "Combination", "Oily"],

    concerns: ["Texture", "Dullness", "Uneven Skin"],

    tags: ["Exfoliating", "Smooth Skin", "Glow"],

    rating: 4.6,
    reviewCount: 432,

    purchaseCount: 1840,
    likesCount: 820,

    launchDate: "2025-09-20",

    featured: false,
    isNewArrival: false,

    status: "active",
    eyebrow: [],
    currency: "JOD",
  },

  {
    id: "skn-011",
    name: "Golden Hour Face Oil",
    slug: "golden-hour-face-oil",

    brand: "Luna Beauty",

    category: "Skincare",
    subCategory: "Face Oil",

    description:
      "Nourishing facial oil blend that leaves skin soft and naturally radiant.",

    price: 35.99,
    discountPrice: 31.99,

    stock: 84,

    imageSrc:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
    images: ["/images/products/face-oil-1.jpg"],

    ingredients: ["Rosehip Oil", "Jojoba Oil", "Argan Oil", "Vitamin E"],

    skinTypes: ["Dry", "Normal", "Combination"],

    concerns: ["Dryness", "Dullness", "Loss of Glow"],

    tags: ["Luxury", "Glow", "Nourishing"],

    rating: 4.8,
    reviewCount: 710,

    purchaseCount: 3025,
    likesCount: 1445,

    launchDate: "2026-01-08",

    featured: true,
    isNewArrival: false,

    status: "active",
    eyebrow: ["new"],
    currency: "JOD",
  },

  {
    id: "skn-012",
    name: "Cloud Touch Sleeping Mask",
    slug: "cloud-touch-sleeping-mask",

    brand: "Luna Beauty",

    category: "Skincare",
    subCategory: "Face Mask",

    description:
      "Overnight hydration mask that helps restore softness while you sleep.",

    price: 32.99,
    discountPrice: 28.99,

    stock: 110,

    imageSrc:
      "https://images.pexels.com/photos/3735616/pexels-photo-3735616.jpeg",
    images: ["/images/products/sleep-mask-1.jpg"],

    ingredients: ["Hyaluronic Acid", "Peptides", "Shea Butter", "Ceramides"],

    skinTypes: ["Dry", "Normal", "Sensitive"],

    concerns: ["Dehydration", "Dryness", "Dullness"],

    tags: ["Night Care", "Hydrating", "Luxury"],

    rating: 4.9,
    reviewCount: 845,

    purchaseCount: 3990,
    likesCount: 1820,

    launchDate: "2026-04-01",

    featured: true,
    isNewArrival: true,

    status: "active",
    eyebrow: ["new"],
    currency: "JOD",
  },


  {
    id: "mkp-003",
    name: "Silk Touch Cream Blush",
    slug: "silk-touch-cream-blush-peach",

    brand: "Aura Cosmetics",

    category: "Makeup",
    subCategory: "Blush",

    shade: "Peach Glow",

    description:
      "Cream blush with a soft finish that blends seamlessly into the skin.",

    price: 16.99,

    stock: 260,

    imageSrc:
      "https://images.pexels.com/photos/3373721/pexels-photo-3373721.jpeg",
    images: ["/images/products/blush-1.jpg"],

    ingredients: ["Vitamin E", "Jojoba Oil", "Shea Butter"],

    skinTypes: ["All Skin Types"],

    tags: ["Natural", "Cream Formula", "Glow"],

    rating: 4.7,
    reviewCount: 812,

    purchaseCount: 4600,
    likesCount: 2200,

    launchDate: "2026-05-15",

    featured: true,
    isNewArrival: true,

    status: "active",
    eyebrow: ["new"],
    currency: "JOD",
  },

  {
    id: "mkp-004",
    name: "Luminous Highlighter Palette",
    slug: "luminous-highlighter-palette",

    brand: "Aura Cosmetics",

    category: "Makeup",
    subCategory: "Highlighter",

    description:
      "Multi-shade highlighting palette for a radiant, dimensional finish.",

    price: 27.99,

    stock: 140,

    imageSrc:
      "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg",
    images: ["/images/products/highlighter-1.jpg"],

    ingredients: ["Mineral Powders", "Vitamin E", "Mica"],

    skinTypes: ["All Skin Types"],

    tags: ["Glow", "Shimmer", "Makeup Essential"],

    rating: 4.5,
    reviewCount: 391,

    purchaseCount: 1750,
    likesCount: 730,

    launchDate: "2026-03-30",

    featured: false,
    isNewArrival: false,

    status: "active",
    eyebrow: [],
    currency: "JOD",
  },

  {
    id: "mkp-005",
    name: "Precision Brow Definer Pencil",
    slug: "precision-brow-definer-pencil",

    brand: "Aura Cosmetics",

    category: "Makeup",
    subCategory: "Eyebrow",

    shade: "Soft Brown",

    description:
      "Fine-tip eyebrow pencil for natural-looking definition and shape.",

    price: 12.99,

    stock: 350,

    imageSrc:
      "https://images.pexels.com/photos/3373738/pexels-photo-3373738.jpeg",
    images: ["/images/products/brow-pencil-1.jpg"],

    ingredients: ["Vitamin E", "Beeswax", "Castor Oil"],

    skinTypes: ["All Skin Types"],

    tags: ["Precision", "Long Wear", "Natural"],

    rating: 4.6,
    reviewCount: 510,

    purchaseCount: 6200,
    likesCount: 2800,

    launchDate: "2025-08-11",

    featured: false,
    isNewArrival: false,

    status: "active",
    eyebrow: [],
    currency: "JOD",
  },

  {
    id: "mkp-006",
    name: "Volume Lift Mascara",
    slug: "volume-lift-mascara",

    brand: "Aura Cosmetics",

    category: "Makeup",
    subCategory: "Mascara",

    description:
      "Volumizing mascara designed for dramatic lashes without clumping.",

    price: 15.99,

    stock: 290,

    imageSrc:
      "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg",
    images: ["/images/products/mascara-1.jpg"],

    ingredients: ["Beeswax", "Vitamin E", "Aloe Extract"],

    skinTypes: ["All Skin Types"],

    tags: ["Volume", "Long Wear", "Eye Makeup"],

    rating: 4.8,
    reviewCount: 940,

    purchaseCount: 7800,
    likesCount: 3400,

    launchDate: "2026-02-01",

    featured: true,
    isNewArrival: false,

    status: "active",
    eyebrow: ["new"],
    currency: "JOD",
  },

  //new up
  {
    id: "mkp-001",
    name: "Velvet Matte Lipstick",
    slug: "velvet-matte-lipstick-rose",

    brand: "Aura Cosmetics",

    category: "Makeup",
    subCategory: "Lipstick",

    shade: "Rose Nude",

    description: "Long-lasting matte lipstick with comfortable wear.",

    price: 18.99,

    stock: 240,

    imageSrc:
      "https://images.pexels.com/photos/4841460/pexels-photo-4841460.jpeg",
    images: ["/images/products/lipstick-1.jpg"],

    ingredients: ["Jojoba Oil", "Vitamin E", "Beeswax"],

    skinTypes: ["All Skin Types"],

    tags: ["Matte", "Long Wear", "Trending"],

    rating: 4.7,
    reviewCount: 544,

    purchaseCount: 8100,
    likesCount: 3900,

    launchDate: "2026-06-01",

    featured: true,
    isNewArrival: true,

    status: "active",
    eyebrow: [],
    currency: "JOD",
  },

  {
    id: "mkp-002",
    name: "Radiance Liquid Foundation",
    slug: "radiance-liquid-foundation",

    brand: "Aura Cosmetics",

    category: "Makeup",
    subCategory: "Foundation",

    finish: "Natural",
    coverage: "Medium",

    availableShades: 30,

    price: 42.99,

    stock: 175,

    imageSrc:
      "https://images.pexels.com/photos/5113049/pexels-photo-5113049.jpeg",
    images: ["/images/products/foundation-1.jpg"],

    ingredients: ["Niacinamide", "Vitamin E", "Glycerin"],

    skinTypes: ["Normal", "Dry", "Combination"],

    tags: ["Natural Finish", "Buildable Coverage"],

    rating: 4.6,
    reviewCount: 721,

    purchaseCount: 3498,
    likesCount: 1650,

    launchDate: "2026-03-22",

    featured: false,
    isNewArrival: false,

    status: "active",
    eyebrow: ["best-seller"],
    currency: "JOD",
  },

  {
    id: "clcn-001",
    name: "Botanical Renewal Cream",
    slug: "botanical-renewal-cream",

    brand: "Luna Beauty",

    category: "Skincare",
    subCategory: "Moisturizer",

    description:
      "Rich moisturizer that supports the skin barrier and locks in moisture.",

    price: 28.99,
    discountPrice: null,

    stock: 89,

    imageSrc:
      "https://images.pexels.com/photos/29060213/pexels-photo-29060213.jpeg",
    images: ["/images/products/barrier-cream-1.jpg"],

    ingredients: ["Ceramides", "Squalane", "Panthenol", "Shea Butter"],

    skinTypes: ["Dry", "Sensitive", "Normal"],

    concerns: ["Dryness", "Sensitivity", "Redness"],

    tags: ["Hydrating", "Barrier Repair"],

    rating: 4.9,
    reviewCount: 932,

    purchaseCount: 4720,
    likesCount: 1822,

    launchDate: "2025-11-10",

    featured: false,
    isNewArrival: false,

    status: "active",
    eyebrow: ["Collection", "best-seller"],
    currency: "JOD",
  },

  {
    id: "clcn-002",
    name: "Rose Petal Day Cream",
    slug: "rose-petal-day-cream",

    brand: "Luna Beauty",

    category: "Skincare",
    subCategory: "Moisturizer",

    description:
      "Rich moisturizer that supports the skin barrier and locks in moisture.",

    price: 28.99,
    discountPrice: null,

    stock: 89,

    imageSrc:
      "https://images.pexels.com/photos/29060236/pexels-photo-29060236.jpeg",
    images: ["/images/products/barrier-cream-1.jpg"],

    ingredients: ["Ceramides", "Squalane", "Panthenol", "Shea Butter"],

    skinTypes: ["Dry", "Sensitive", "Normal"],

    concerns: ["Dryness", "Sensitivity", "Redness"],

    tags: ["Hydrating", "Barrier Repair"],

    rating: 4.9,
    reviewCount: 932,

    purchaseCount: 4720,
    likesCount: 1822,

    launchDate: "2025-11-10",

    featured: false,
    isNewArrival: false,

    status: "active",
    eyebrow: ["Collection"],
    currency: "JOD",
  },

  {
    id: "clcn-003",
    name: "Ocean Breeze Moisture Gel",
    slug: "ocean-breeze-moisture-gel",

    brand: "Luna Beauty",

    category: "Skincare",
    subCategory: "Moisturizer",

    description:
      "Rich moisturizer that supports the skin barrier and locks in moisture.",

    price: 28.99,
    discountPrice: null,

    stock: 89,

    imageSrc:
      "https://images.pexels.com/photos/6223482/pexels-photo-6223482.jpeg",
    images: ["/images/products/barrier-cream-1.jpg"],

    ingredients: ["Ceramides", "Squalane", "Panthenol", "Shea Butter"],

    skinTypes: ["Dry", "Sensitive", "Normal"],

    concerns: ["Dryness", "Sensitivity", "Redness"],

    tags: ["Hydrating", "Barrier Repair"],

    rating: 4.9,
    reviewCount: 932,

    purchaseCount: 4720,
    likesCount: 1822,

    launchDate: "2025-11-10",

    featured: false,
    isNewArrival: false,

    status: "active",
    eyebrow: ["Collection"],
    currency: "JOD",
  },

  {
    id: "clcn-004",
    name: "Lavender Night Recovery Cream",
    slug: "lavender-night-recovery-cream",

    brand: "Luna Beauty",

    category: "Skincare",
    subCategory: "Moisturizer",

    description:
      "Rich moisturizer that supports the skin barrier and locks in moisture.",

    price: 28.99,
    discountPrice: null,

    stock: 89,

    imageSrc:
      "https://images.pexels.com/photos/33538415/pexels-photo-33538415.png",
    images: ["/images/products/barrier-cream-1.jpg"],

    ingredients: ["Ceramides", "Squalane", "Panthenol", "Shea Butter"],

    skinTypes: ["Dry", "Sensitive", "Normal"],

    concerns: ["Dryness", "Sensitivity", "Redness"],

    tags: ["Hydrating", "Barrier Repair"],

    rating: 4.9,
    reviewCount: 932,

    purchaseCount: 4720,
    likesCount: 1822,

    launchDate: "2025-11-10",

    featured: false,
    isNewArrival: false,

    status: "active",
    eyebrow: ["Collection"],
    currency: "JOD",
  },
   {
    id: "clcn-005",
    name: "Hydrating Glow Serum",
    slug: "hydrating-glow-serum",

    brand: "Luna Beauty",

    category: "Skincare",
    subCategory: "Moisturizer",

    description:
      "Rich moisturizer that supports the skin barrier and locks in moisture.",

    price: 28.99,
    discountPrice: null,

    stock: 89,

    imageSrc:
      "https://images.pexels.com/photos/20377674/pexels-photo-20377674.jpeg",
    images: ["/images/products/barrier-cream-1.jpg"],

    ingredients: ["Ceramides", "Squalane", "Panthenol", "Shea Butter"],

    skinTypes: ["Dry", "Sensitive", "Normal"],

    concerns: ["Dryness", "Sensitivity", "Redness"],

    tags: ["Hydrating", "Barrier Repair"],

    rating: 4.9,
    reviewCount: 932,

    purchaseCount: 4720,
    likesCount: 1822,

    launchDate: "2025-11-10",

    featured: false,
    isNewArrival: false,

    status: "active",
    eyebrow: ["new"],
    currency: "JOD",
  },
];

export default products;
