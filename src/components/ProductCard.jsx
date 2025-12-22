import styles from "@/styles/plp.module.css";

export default function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <img
        src={product.image}
        alt={`Buy ${product.title}`}
        loading="lazy"
      />
      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>
    </article>
  );
}
