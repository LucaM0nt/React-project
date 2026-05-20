export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Demo shop test</p>
      <small>&copy; {year}</small>
    </footer>
  );
}
