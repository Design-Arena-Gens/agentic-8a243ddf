export type Jacket = {
  id: string;
  brand: string;
  title: string;
  subtitle: string;
  price: number;
  mrp: number;
  rating: number;
  ratingCount: number;
  warmth: "Light" | "Medium" | "High";
  material: string;
  highlights: string[];
  image: string;
  myntraUrl: string;
  searchUrl: string;
  availableSizes: string[];
};

export const JACKETS: Jacket[] = [
  {
    id: "roadster-puffer-olive",
    brand: "Roadster",
    title: "Olive Quilted Puffer Jacket",
    subtitle: "Water-resistant with detachable hood",
    price: 1999,
    mrp: 3999,
    rating: 4.3,
    ratingCount: 865,
    warmth: "High",
    material: "Polyester shell with polyfill insulation",
    highlights: [
      "Medium-length puffer cut keeps core insulated",
      "Detachable faux-fur hood for adaptable styling",
      "Two zippered hand pockets plus inner stash pocket",
    ],
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    myntraUrl:
      "https://www.myntra.com/jackets/roadster?f=Price%3A0.0%20TO%202000.0",
    searchUrl:
      "https://www.myntra.com/winter-jackets?f=Brand%3ARoadster%3A%3APrice%3A0.0%20TO%202000.0",
    availableSizes: ["S", "M", "L", "XL"],
  },
  {
    id: "hrx-athletic-bomber",
    brand: "HRX by Hrithik Roshan",
    title: "Active Thermal Bomber",
    subtitle: "Lightweight warmth for everyday commute",
    price: 1799,
    mrp: 3299,
    rating: 4.2,
    ratingCount: 542,
    warmth: "Medium",
    material: "Polyester dobby with brushed fleece lining",
    highlights: [
      "Moisture-wicking lining prevents clamminess",
      "Ribbed cuffs and hem lock in warmth",
      "Reflective detailing improves visibility at night",
    ],
    image:
      "https://images.unsplash.com/photo-1495121605193-b116b5b09a0d?auto=format&fit=crop&w=800&q=80",
    myntraUrl:
      "https://www.myntra.com/jackets/hrx-by-hrithik-roshan?f=Price%3A0.0%20TO%202000.0",
    searchUrl:
      "https://www.myntra.com/winter-jackets?f=Brand%3AHRX%20by%20Hrithik%20Roshan%3A%3APrice%3A0.0%20TO%202000.0",
    availableSizes: ["S", "M", "L"],
  },
  {
    id: "fort-collins-parka",
    brand: "Fort Collins",
    title: "Synthetic Down Parka",
    subtitle: "Budget parka built for chilly evenings",
    price: 1899,
    mrp: 3599,
    rating: 4.1,
    ratingCount: 418,
    warmth: "High",
    material: "Nylon shell with heavy polyfill",
    highlights: [
      "Longline fit adds extra coverage below the waist",
      "Inner storm placket blocks wind through the zipper",
      "Snap button pockets keep gloves and phone secure",
    ],
    image:
      "https://images.unsplash.com/photo-1491955464593-3e7e4d0694d2?auto=format&fit=crop&w=800&q=80",
    myntraUrl:
      "https://www.myntra.com/jackets/fort-collins?f=Price%3A0.0%20TO%202000.0",
    searchUrl:
      "https://www.myntra.com/winter-jackets?f=Brand%3AFort%20Collins%3A%3APrice%3A0.0%20TO%202000.0",
    availableSizes: ["M", "L", "XL"],
  },
  {
    id: "mast-harbour-sherpa",
    brand: "Mast & Harbour",
    title: "Sherpa Collar Denim Jacket",
    subtitle: "Heritage denim with cozy sherpa lining",
    price: 1699,
    mrp: 2999,
    rating: 4.4,
    ratingCount: 629,
    warmth: "Medium",
    material: "Cotton denim shell with faux-shearling lining",
    highlights: [
      "Sherpa-lined collar and torso add structured warmth",
      "Functional chest and side entry pockets",
      "Pairs with chinos or jeans for smart-casual layering",
    ],
    image:
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=800&q=80",
    myntraUrl:
      "https://www.myntra.com/denim-jackets/mast-&-harbour?f=Price%3A0.0%20TO%202000.0",
    searchUrl:
      "https://www.myntra.com/winter-jackets?f=Brand%3AMast%20%26%20Harbour%3A%3APrice%3A0.0%20TO%202000.0",
    availableSizes: ["S", "M", "L", "XL"],
  },
  {
    id: "here-now-reversible",
    brand: "HERE&NOW",
    title: "Reversible Quilted Jacket",
    subtitle: "Two looks in one with contrast quilting",
    price: 1599,
    mrp: 2899,
    rating: 4.0,
    ratingCount: 312,
    warmth: "Medium",
    material: "Polyester shell with light polyfill",
    highlights: [
      "Reversible design doubles your outfit options",
      "Elasticated cuffs block wind gusts",
      "Snap-button storm guard over main zipper",
    ],
    image:
      "https://images.unsplash.com/photo-1521631210630-0022430fb7a5?auto=format&fit=crop&w=800&q=80",
    myntraUrl:
      "https://www.myntra.com/jackets/here&now?f=Price%3A0.0%20TO%202000.0",
    searchUrl:
      "https://www.myntra.com/winter-jackets?f=Brand%3AHERE%26NOW%3A%3APrice%3A0.0%20TO%202000.0",
    availableSizes: ["XS", "S", "M", "L"],
  },
  {
    id: "anouk-embroidered",
    brand: "Anouk",
    title: "Embroidered Nehru Jacket",
    subtitle: "Festive layering with light insulation",
    price: 1499,
    mrp: 2599,
    rating: 4.5,
    ratingCount: 204,
    warmth: "Light",
    material: "Poly-cotton blend with quilted backing",
    highlights: [
      "Intricate tonal embroidery elevates ethnic outfits",
      "Mandarin collar keeps the silhouette sharp",
      "Hook-and-eye closures maintain clean front placket",
    ],
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80",
    myntraUrl:
      "https://www.myntra.com/nehru-jackets/anouk?f=Price%3A0.0%20TO%202000.0",
    searchUrl:
      "https://www.myntra.com/winter-jackets?f=Brand%3AAnouk%3A%3APrice%3A0.0%20TO%202000.0",
    availableSizes: ["S", "M", "L"],
  },
  {
    id: "ether-packable",
    brand: "ETHER",
    title: "Packable Down Alternative Jacket",
    subtitle: "Lightweight layer that folds into itself",
    price: 1890,
    mrp: 3399,
    rating: 4.1,
    ratingCount: 278,
    warmth: "Medium",
    material: "Nylon ripstop with lightweight polyfill",
    highlights: [
      "Packs into included pouch for travel",
      "Elastic cuffs and hem seal in heat",
      "Full zip front with chin guard prevents abrasion",
    ],
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
    myntraUrl:
      "https://www.myntra.com/jackets/ether?f=Price%3A0.0%20TO%202000.0",
    searchUrl:
      "https://www.myntra.com/winter-jackets?f=Brand%3AETHER%3A%3APrice%3A0.0%20TO%202000.0",
    availableSizes: ["S", "M", "L", "XL"],
  },
  {
    id: "ivy-studio-parka",
    brand: "IVY & OAK Studio",
    title: "Belted Hooded Parka",
    subtitle: "Structured feminine silhouette with belt",
    price: 1990,
    mrp: 3499,
    rating: 4.3,
    ratingCount: 156,
    warmth: "High",
    material: "Polyester twill with plush lining",
    highlights: [
      "Removable belt for cinched or relaxed fit",
      "Extended hood brim shields from drizzle",
      "Deep patch pockets with soft lining",
    ],
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    myntraUrl:
      "https://www.myntra.com/jackets/ivy-+-oak-studio?f=Price%3A0.0%20TO%202000.0",
    searchUrl:
      "https://www.myntra.com/winter-jackets?f=Brand%3AIVY%20%26%20OAK%20Studio%3A%3APrice%3A0.0%20TO%202000.0",
    availableSizes: ["S", "M", "L"],
  },
];
