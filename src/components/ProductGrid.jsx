import ProductCard from "./ProductCard";
import styles from "@/styles/plp.module.css";

export default function ProductGrid({ products }) {
  return (
    <section className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
