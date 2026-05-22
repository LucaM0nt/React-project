import styles from "./CategoriesFilters.module.css";
import Button from "./Button";

export default function CategoriesFilters({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className={styles.filters}>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "accent" : "outline"}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
