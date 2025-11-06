import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";
import type { Jacket } from "@/data/jackets";

type ProductCardProps = {
  product: Jacket;
};

const warmthCopy: Record<Jacket["warmth"], string> = {
  High: "Built for cold evenings",
  Medium: "Everyday winter ready",
  Light: "Ideal for mild winters",
};

const formatPrice = (value: number) =>
  value.toLocaleString("en-IN", { maximumFractionDigits: 0 });

export default function ProductCard({ product }: ProductCardProps) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <article className={styles.card}>
      <div className={styles.mediaWrapper}>
        <Image
          src={product.image}
          alt={`${product.brand} ${product.title}`}
          width={420}
          height={560}
          className={styles.image}
        />
        <span className={styles.warmthTag}>{product.warmth} warmth</span>
        {discount > 0 ? (
          <span className={styles.discountTag}>Save {discount}%</span>
        ) : null}
      </div>

      <div className={styles.content}>
        <div className={styles.heading}>
          <span className={styles.brand}>{product.brand}</span>
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.subtitle}>{product.subtitle}</p>
        </div>

        <div className={styles.pricing}>
          <span className={styles.price}>₹{formatPrice(product.price)}</span>
          <span className={styles.mrp}>MRP ₹{formatPrice(product.mrp)}</span>
          <span className={styles.rating}>
            ★ {product.rating.toFixed(1)} ({product.ratingCount} reviews)
          </span>
        </div>

        <ul className={styles.highlightList}>
          {product.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className={styles.footer}>
          <div>
            <p className={styles.warmth}>{warmthCopy[product.warmth]}</p>
            <p className={styles.sizes}>
              Sizes: {product.availableSizes.join(", ")}
            </p>
          </div>

          <div className={styles.actions}>
            <Link
              href={product.myntraUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryAction}
            >
              View on Myntra
            </Link>
            <Link
              href={product.searchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryAction}
            >
              Full search
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
