'use client';

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductExplorer.module.css";
import type { Jacket } from "@/data/jackets";

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "rating", label: "Top rated" },
  { id: "savings", label: "Biggest savings" },
  { id: "price-asc", label: "Lowest price" },
  { id: "warmth", label: "Warmest first" },
] as const;

type SortKey = (typeof SORT_OPTIONS)[number]["id"];

type ProductExplorerProps = {
  products: Jacket[];
  budget: number;
};

const warmthScore = {
  High: 3,
  Medium: 2,
  Light: 1,
} satisfies Record<Jacket["warmth"], number>;

const formatPrice = (value: number) =>
  value.toLocaleString("en-IN", { maximumFractionDigits: 0 });

export default function ProductExplorer({
  products,
  budget,
}: ProductExplorerProps) {
  const sliderMax = useMemo(
    () => Math.max(budget, ...products.map((item) => item.price)),
    [budget, products],
  );

  const sliderMin = useMemo(
    () => Math.min(...products.map((item) => item.price)),
    [products],
  );

  const [maxPrice, setMaxPrice] = useState(sliderMax);
  const [query, setQuery] = useState("");
  const [sortId, setSortId] = useState<SortKey>("featured");

  const effectiveMaxPrice = Math.min(maxPrice, sliderMax);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = products.filter((product) => {
      if (product.price > effectiveMaxPrice) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      return (
        product.brand.toLowerCase().includes(normalizedQuery) ||
        product.title.toLowerCase().includes(normalizedQuery) ||
        product.subtitle.toLowerCase().includes(normalizedQuery) ||
        product.highlights.some((highlight) =>
          highlight.toLowerCase().includes(normalizedQuery),
        )
      );
    });

    const withScores = filtered.map((product) => {
      const discountRatio = (product.mrp - product.price) / product.mrp;
      const featuredScore =
        product.rating * 2 +
        discountRatio * 10 +
        warmthScore[product.warmth] * 1.2;

      const scores: Record<SortKey, number> = {
        featured: featuredScore,
        rating: product.rating,
        savings: discountRatio,
        "price-asc": product.price,
        warmth: warmthScore[product.warmth],
      };

      return {
        product,
        scores,
      };
    });

    const sortKey: SortKey = sortId;

    withScores.sort((a, b) => {
      return sortKey === "price-asc"
        ? a.scores[sortKey] - b.scores[sortKey]
        : b.scores[sortKey] - a.scores[sortKey];
    });

    return withScores.map((entry) => entry.product);
  }, [products, effectiveMaxPrice, sortId, query]);

  return (
    <section className={styles.wrapper}>
      <header className={styles.controls}>
        <div>
          <p className={styles.overline}>Fine-tune your shortlist</p>
          <h2 className={styles.title}>
            Filter <span>₹{formatPrice(effectiveMaxPrice)}</span> and under
          </h2>
          <p className={styles.caption}>
            {filteredProducts.length} jacket
            {filteredProducts.length === 1 ? "" : "s"} match your criteria.
          </p>
        </div>

        <div className={styles.controlGroup}>
          <label className={styles.controlLabel} htmlFor="price-range">
            Max price
          </label>
          <input
            id="price-range"
            type="range"
            min={sliderMin}
            max={sliderMax}
            value={effectiveMaxPrice}
            step={50}
            onChange={(event) => setMaxPrice(Number(event.target.value))}
          />
          <div className={styles.rangeLabels}>
            <span>₹{formatPrice(sliderMin)}</span>
            <span>₹{formatPrice(sliderMax)}</span>
          </div>
        </div>

        <div className={styles.controlRow}>
          <label className={styles.controlLabel} htmlFor="search">
            Quick search
          </label>
          <input
            id="search"
            className={styles.search}
            type="search"
            placeholder="Try 'puffer', 'sherpa', 'hooded'..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          <label className={styles.controlLabel} htmlFor="sort">
            Sort by
          </label>
          <select
            id="sort"
            className={styles.select}
            value={sortId}
            onChange={(event) =>
              setSortId(event.target.value as SortKey)
            }
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </header>

      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
