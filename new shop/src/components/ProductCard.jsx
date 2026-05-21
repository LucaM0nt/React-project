export default function ProductCard({ name, price, category, image }) {
  return (
    <>
      <div>
        <img src={image} alt={name} />
        <p className="category">{category}</p>
        <h3 className="name">{name}</h3>
        <p className="price">${price.toFixed(2)}</p>
      </div>
    </>
  );
}
