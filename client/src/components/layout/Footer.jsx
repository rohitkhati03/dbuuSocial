import React from "react";
import "../styles/footer.css"; // optional if you create separate CSS

const Footer = () => {
  return (
    <footer>
      <div
        className="footer-grid"
        style={{ maxWidth: "1120px", margin: "0 auto" }}
      >
        <div className="footer-brand">
          <div className="brand-name">
            Uni<em>Connect</em>
          </div>
          <p>
            The social platform built exclusively for college communities —
            connecting students, faculty, and opportunities under one verified roof.
          </p>
        </div>

        <div>
          <div className="footer-col-title">Platform</div>
          <a className="footer-link">Home Feed</a>
          <a className="footer-link">Academic Hub</a>
          <a className="footer-link">Career Board</a>
          <a className="footer-link">Events</a>
          <a className="footer-link">Notices</a>
        </div>

        <div>
          <div className="footer-col-title">For Colleges</div>
          <a className="footer-link">Get your college onboard</a>
          <a className="footer-link">Admin dashboard</a>
          <a className="footer-link">Club management</a>
          <a className="footer-link">Placement cell tools</a>
        </div>

        <div>
          <div className="footer-col-title">Company</div>
          <a className="footer-link">About us</a>
          <a className="footer-link">Blog</a>
          <a className="footer-link">Privacy policy</a>
          <a className="footer-link">Terms of service</a>
          <a className="footer-link">Contact</a>
        </div>
      </div>

      <div
        className="footer-bottom"
        style={{ maxWidth: "1120px", margin: "0 auto" }}
      >
        <span>© 2025 UniConnect · Made with ❤️ for students</span>

        <div className="footer-social">
          <div className="social-icon">𝕏</div>
          <div className="social-icon">in</div>
          <div className="social-icon">ig</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;