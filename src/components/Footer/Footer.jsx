import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3>Solex</h3>
          <p>
            Helping students plan smarter, stay organized,
            and avoid burnout.
          </p>
        </div>

        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#waitlist">Waitlist</a>
        </div>

        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} Solex. All rights reserved.</small>
        </div>

      </div>

    </footer>
  );
}

export default Footer;