import React from 'react';
import logo from '../assets/og-logo.svg';
import powerLogo from '../assets/powered-by.svg';
import footerVideo from '../assets/footer-video.mp4';
import insta from '../assets/insta.svg'

const Footer = () => {
  return (
    <footer className="zoo-banana-landing">
      {/* Footer Top */}
      <div className="apple-kite-topper">
        <div className="mango-penguin-video">
          <video src={footerVideo} autoPlay muted loop playsInline />
        </div>
        <div className="grape-river-text">
          <div className="frirbiw">Coming Soon</div>
          <h3 className="krje">Scan. Verify. Sip.</h3>
          <p className="dfmkr">Soon, every OG Water bottle will come with a code you can scan to confirm it’s 100% legit.</p>
        </div>
      </div>

      {/* Footer Main */}
      <div className="orange-hammer-section">
        <div className="rabbit-toast-logo">
          <img src={logo} alt="OG Logo" />
        </div>

        <div className="cloud-salsa-mail">
          <h4>Write to us</h4>
          <a href="mailto:hello@ogwaters.com">hello@ogwaters.com</a>
          <a href="mailto:support@ogwaters.com">support@ogwaters.com</a>
          <a href="mailto:collab@ogwaters.com">collab@ogwaters.com</a>
        </div>

        <div className="moon-cabbage-call">
          <h4>Talk to us</h4>
          <a href="tel:+919871169694">+91-9871169694</a>
          <a href="tel:+911140071346">+91-11-40071346</a>
        </div>

        <div className="tiger-bubble-social">
          <h4>Follow us</h4>
          <div className="kiwi-door-links">
            <a href="https://www.instagram.com/og.wtr/" target="_blank" rel="noopener noreferrer">
            <img src={insta} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pillow-hat-bottom">
        <div className="lemon-sugar-legal">
          <p>
            © 2025 OG Water. All Rights Reserved
          </p>
        </div>
        <div className="fox-cement-powered">
          <span>Powered by</span>
          <img src={powerLogo} alt="Powered by" width="129" height="30.63" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
