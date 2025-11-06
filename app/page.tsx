import Link from "next/link";
import ProductExplorer from "@/components/ProductExplorer";
import { JACKETS } from "@/data/jackets";
import styles from "./page.module.css";

const BUDGET_CAP = 2000;

const warmthOrder = {
  High: 3,
  Medium: 2,
  Light: 1,
} as const;

const formatPrice = (value: number) =>
  value.toLocaleString("en-IN", { maximumFractionDigits: 0 });

const jacketsUnderBudget = JACKETS.filter((jacket) => jacket.price <= BUDGET_CAP);

const rankedJackets = [...jacketsUnderBudget].sort((a, b) => {
  const discountA = (a.mrp - a.price) / a.mrp;
  const discountB = (b.mrp - b.price) / b.mrp;
  const scoreA = a.rating * 2 + discountA * 10 + warmthOrder[a.warmth] * 1.2;
  const scoreB = b.rating * 2 + discountB * 10 + warmthOrder[b.warmth] * 1.2;
  return scoreB - scoreA;
});

const topPick = rankedJackets[0];

const averageRating =
  jacketsUnderBudget.reduce((sum, jacket) => sum + jacket.rating, 0) /
  jacketsUnderBudget.length;

const biggestSavings = jacketsUnderBudget.reduce(
  (best, jacket) => {
    const discountRatio = (jacket.mrp - jacket.price) / jacket.mrp;
    if (discountRatio > best.ratio) {
      return { ratio: discountRatio, jacket };
    }
    return best;
  },
  { ratio: -Infinity, jacket: jacketsUnderBudget[0] },
);

const warmthFocus = (() => {
  const counts = jacketsUnderBudget.reduce(
    (acc, jacket) => {
      acc[jacket.warmth] += 1;
      return acc;
    },
    { High: 0, Medium: 0, Light: 0 },
  );

  if (counts.High >= counts.Medium && counts.High >= counts.Light) {
    return "High warmth layers dominate this list.";
  }
  if (counts.Medium >= counts.Light) {
    return "Balanced mix of mid-weight layers.";
  }
  return "Light warmth styles lead the curation.";
})();

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroHeader}>
          <span className={styles.badge}>Budget ceiling ₹{BUDGET_CAP}</span>
          <h1 className={styles.heroTitle}>
            Book the <span>best winter jackets</span> on Myntra without breaking
            ₹{formatPrice(BUDGET_CAP)}
          </h1>
          <p className={styles.heroSubtitle}>
            Curated picks optimized for warmth, reviews, and discounts. Compare the
            stand-out options, then jump straight to Myntra to place your order in
            seconds.
          </p>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <span className={styles.metricValue}>
                {jacketsUnderBudget.length} curated
              </span>
              <span className={styles.metricLabel}>
                Only jackets currently listed at ₹{formatPrice(BUDGET_CAP)} or
                under.
              </span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>
                ★ {averageRating.toFixed(1)}
              </span>
              <span className={styles.metricLabel}>
                Average customer rating across the shortlist.
              </span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>
                Save {Math.round(biggestSavings.ratio * 100)}%
              </span>
              <span className={styles.metricLabel}>
                Biggest discount spotted ({biggestSavings.jacket.brand}).
              </span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>Warmth mix</span>
              <span className={styles.metricLabel}>{warmthFocus}</span>
            </div>
          </div>

          <div className={styles.heroCard}>
            <p className={styles.heroCardTitle}>
              Top pick: {topPick.brand} {topPick.title}
            </p>
            <p className={styles.heroCardSubtitle}>
              ₹{formatPrice(topPick.price)} · {topPick.warmth} warmth · ★{" "}
              {topPick.rating.toFixed(1)} ({topPick.ratingCount} reviews)
            </p>
            <ul className={styles.heroBulletList}>
              {topPick.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className={styles.heroActions}>
              <Link
                href={topPick.myntraUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                Open Myntra listing
              </Link>
              <Link
                href={topPick.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ghostButton}
              >
                Compare similar fits
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProductExplorer products={rankedJackets} budget={BUDGET_CAP} />

      <section className={styles.tips}>
        <h2>How to book the right winter jacket on Myntra</h2>
        <ul className={styles.tipsList}>
          <li>
            <strong>Lock your size quickly:</strong> add your size filter on Myntra,
            then use the product cards above to open the jacket in a new tab. Sizes
            for popular puffers sell out fast in peak season.
          </li>
          <li>
            <strong>Check delivery &amp; returns:</strong> confirm express delivery is
            available in your pin code before you place the order. Every product card
            links to the official Myntra page for up-to-date fulfillment info.
          </li>
          <li>
            <strong>Stack coupons:</strong> once on Myntra, tap “Apply Coupons” to pair
            bank offers or SuperCoins. Most of these jackets go below ₹1700 with
            seasonal drops.
          </li>
        </ul>
      </section>
    </main>
  );
}
