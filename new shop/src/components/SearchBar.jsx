import styles from "./SearchBar.module.css";

export default function SearchBar({ value, onChange }) {
  return (
    <div className={`${styles.searchbar} row`}>
      <input
        className={`${styles.input} input`}
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
