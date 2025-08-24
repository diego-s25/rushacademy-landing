export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row" style={{ padding: "28px 0" }}>
        <div>© {new Date().getFullYear()} CryptoRush</div>
        <div style={{ display: "flex", gap: 22 }}>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
