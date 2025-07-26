import React from 'react';
import HeroDesk from '../assets/Hero-desktop.webp';
import HeroMob from '../assets/Hero-mob.webp';

const Hero = () => {
    return (
        <section className="hero-section" id="hero">
            <a href="#next-section" >
                <picture>
                    <source media="(max-width: 768px)" srcSet={HeroMob} />
                    <img src={HeroDesk} alt="Hero Banner" className="hero-image" />
                </picture>
            </a>
        </section>
    );
};

export default Hero;
