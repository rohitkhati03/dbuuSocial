import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("features");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Smooth scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const sections = ["features", "how", "modules", "testimonials", "cta"];

    const handleScroll = () => {
      let current = "features";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);

      // Navbar shrink
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      
      {/* LOGO */}
      <div className="nav-brand" onClick={() => navigate("/")}>
        Uni<em>Connect</em>
      </div>

      {/* LINKS */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <button
          className={`nav-link ${active === "features" ? "active" : ""}`}
          onClick={() => scrollToSection("features")}
        >
          Features
        </button>

        <button
          className={`nav-link ${active === "how" ? "active" : ""}`}
          onClick={() => scrollToSection("how")}
        >
          How it works
        </button>

        <button
          className={`nav-link ${active === "modules" ? "active" : ""}`}
          onClick={() => scrollToSection("modules")}
        >
          Modules
        </button>

        <button
          className={`nav-link ${active === "testimonial" ? "active" : ""}`}
          onClick={() => scrollToSection("testimonials")}
        >
          Stories
        </button>
        <button
          className={`nav-link ${active === "cta" ? "active" : ""}`}
          onClick={() => scrollToSection("cta")}
        >
          Contact
        </button>

        {/* MOBILE CTA */}
        <div className="mobile-cta">
          <Link to="/login" className="btn-ghost" onClick={() => setMenuOpen(false)}>
            Log in
          </Link>

          <Link to="/signup" className="btn-solid" onClick={() => setMenuOpen(false)}>
            Get Started
          </Link>
        </div>
      </div>

      {/* DESKTOP CTA */}
      <div className="nav-cta-group desktop-cta">
        <Link to="/login" className="btn-ghost">Log in</Link>
        <Link to="/signup" className="btn-solid">Get Started</Link>
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}