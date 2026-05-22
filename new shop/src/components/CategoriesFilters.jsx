import styles from "./CategoriesFilters.module.css";

export default function CategoriesFilters({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className={styles.filters}>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? styles.active : ""}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
