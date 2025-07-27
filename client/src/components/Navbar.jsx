import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isShrunk ? "navbar-shrink" : ""}`}>
      <img
        src="/assets/og-logo.svg"
        alt="OG Waters"
        className={`navbar-logo ${isShrunk ? "logo-shrink" : ""}`}
      />
    </header>
  );
};

export default Navbar;
