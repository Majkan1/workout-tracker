export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div>
        <p>© {year} workout tracker</p>
        <p>This site was created by Mikołaj Michalak</p>
      </div>
    </footer>
  );
}
