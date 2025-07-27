const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <a href="#next-section">
        <picture>
          <source media="(max-width: 768px)" srcSet="/assets/Hero-mob.webp" />
          <img
            src="/assets/Hero-desktop.webp"
            alt="Hero Banner"
            className="hero-image"
          />
        </picture>
      </a>
    </section>
  );
};

export default Hero;
