import "./Navbar.css";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-content">

        <a href="#" className="logo">
          <span className="logo-text">
            Solex<span className="logo-dots">.</span>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
        </nav>

        <button className="menu-btn" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={26} />
        </button>

      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
          <a href="#waitlist">Join Waitlist</a>
        </div>
      )}
      
    </header>
  );
}

export default Navbar;