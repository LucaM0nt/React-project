import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={`${styles.footer}`}>
      <div className="container row">
        <div className="row">
          <p>Demo shop test</p>
          <small>&copy; {year}</small>
        </div>
      </div>
    </footer>
  );
}
