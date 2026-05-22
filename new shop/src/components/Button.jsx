export default function Button({
  children,
  onClick,
  className = "",
  variant = "accent",
  type = "button",
}) {
  const variantClass = variant === "accent" ? "btn-accent" : "btn-outline";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variantClass} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
