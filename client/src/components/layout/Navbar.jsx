import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          Uni<em>Connect</em>
        </div>

        {/* Desktop + Mobile Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a className="nav-link">Features</a>
          <a className="nav-link">How it works</a>
          <a className="nav-link">Modules</a>
          <a className="nav-link">Stories</a>

          {/* Mobile Buttons */}
          <div className="mobile-cta">
            <button
              className="btn-ghost"
              onClick={() => {
                navigate("/login");
                setMenuOpen(false); // close menu on click
              }}
            >
              Log in
            </button>

            <button className="btn-solid" onClick={()=>{
              navigate("/signup");
              setMenuOpen(false); 
            }}>Get Started</button>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="nav-cta-group desktop-cta">
          <button
            className="btn-ghost"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>

          <button className="btn-solid" onClick={()=> navigate("/signup")}>Get Started</button>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
}