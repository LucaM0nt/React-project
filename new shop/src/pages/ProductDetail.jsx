import { useNavigate, useParams } from "react-router-dom";
import dummyProducts from "../data/dummyData";
import styles from "./ProductDetail.module.css";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = Number(id);
  const product = dummyProducts.find((item) => item.id === productId);

  return (
    <main className="container section">
      <button
        className={`btn btn-outline ${styles.backButton}`}
        onClick={() => navigate(-1)}
      >
        ← Torna indietro
      </button>

      {product ? (
        <div className={styles.detail}>
          <img
            className={styles.image}
            src={product.image}
            alt={product.name}
          />
          <div className={styles.info}>
            <p className={styles.category}>{product.category}</p>
            <h1 className={styles.name}>{product.name}</h1>
            <p className={styles.price}>${product.price.toFixed(2)}</p>
            <p className={styles.description}>
              {product.description ?? "Descrizione non disponibile."}
            </p>
          </div>
        </div>
      ) : (
        <p className={styles.notFound}>Prodotto non trovato.</p>
      )}
    </main>
  );
}
