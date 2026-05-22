import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'framer-motion';
import { STUDIO_INFO, EXHIBIT_ARCHIVE, PRIVATE_LEDGER, INTAKE_PROTOCOL } from './data/demoData';
import { getWhatsAppUrl } from './lib/whatsapp';

const Reveal = ({ children, className = "", stagger = 0, amount = 0.1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      animate={shouldReduceMotion ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : {})}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: stagger }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const TechnicalOverlay = () => (
  <div className="technical-overlay">
    <div className="reg-mark reg-top-left"></div>
    <div className="reg-mark reg-bottom-right"></div>
    <div className="axis-line axis-y"></div>
    {[20, 40, 60, 80].map(top => (
      <div key={top} className="axis-line axis-x-tick" style={{ top: `${top}vh` }}></div>
    ))}
  </div>
);

const Nav = () => (
  <nav>
    <div className="logo">Obsidian</div>
    <div className="mono">Pune — KP Studio 07</div>
  </nav>
);

const SceneArrival = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  return (
    <section className="scene brand-threshold">
      <div className="material-shield">
        <motion.img
          src={STUDIO_INFO.heroImage}
          alt="Material Tension"
          style={{ y, scale }}
        />
      </div>
      <h1 className="brand-title">Obsidian</h1>
      <Reveal className="brand-meta">
        <div className="mono">Private Access: Studio 07</div>
        <div className="mono" style={{ color: 'var(--accent)' }}>[ Appointment Only ]</div>
      </Reveal>
    </section>
  );
};

const SceneStance = () => (
  <section className="scene technical-stance">
    <div className="stance-body">
      <Reveal className="stance-heading">
        Technical dialogue. Anatomical flow. <span style={{ color: 'var(--accent)' }}>High-conviction</span> ink.
      </Reveal>
      <Reveal className="stance-details" stagger={0.2}>
        Obsidian Ink is an artist-led collective for the style-conscious. We treat pigment as a structural instrument, mapping every line to the architecture of the human body with absolute restraint and clinical precision.
      </Reveal>
    </div>
  </section>
);

const SceneExhibit = () => {
  const trackRef = useRef(null);
  const { scrollY } = useScroll();

  // Custom horizontal scroll logic based on vertical scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.parentElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // If the section is in view, map vertical scroll to horizontal
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const scrolled = viewportHeight - rect.top;
        const total = viewportHeight + rect.height;
        const percentage = scrolled / total;
        const maxScroll = trackRef.current.scrollWidth - trackRef.current.clientWidth;
        trackRef.current.scrollLeft = maxScroll * percentage;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="scene exhibit-archive">
      <div className="exhibit-header">
        <div className="mono">Exhibit 02 — Record Archive</div>
      </div>
      <div className="story-track" ref={trackRef}>
        {EXHIBIT_ARCHIVE.map((item, i) => (
          <Reveal
            key={i}
            className="exhibit-plate"
            style={{ marginTop: i % 2 === 1 ? '15vh' : i === 3 ? '-10vh' : '0' }}
            stagger={i * 0.1}
          >
            <div className="plate-surface">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="plate-meta">
              <span className="mono">{item.title}</span>
              <span className="mono">{item.location || '2024'}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

const SceneRitual = () => (
  <section className="scene protocol-ritual">
    <div className="ledger-container">
      {PRIVATE_LEDGER.map((item, i) => (
        <Reveal key={i} className="ledger-item" stagger={i * 0.1}>
          <span className="ledger-num mono">{item.index || `Protocol 0${i+1}`}</span>
          <div className="ledger-content">
            <h3 className="ledger-title">{item.title}</h3>
            <p className="ledger-copy">{item.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

const SceneThreshold = () => (
  <section className="scene portal-threshold">
    <div className="portal-body">
      <Reveal className="portal-heading">Initiate the<br />Dialogue.</Reveal>
      <Reveal stagger={0.2}>
        <a href={getWhatsAppUrl(INTAKE_PROTOCOL[0].message)} className="portal-action">
          <span>Start a private concept review</span>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </Reveal>
      <div className="mono" style={{ marginTop: '8rem', opacity: 0.5 }}>Obsidian Ink — Pune / India</div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="app-root">
      <div className="grain"></div>
      <TechnicalOverlay />
      <Nav />
      <main>
        <SceneArrival />
        <SceneStance />
        <SceneExhibit />
        <SceneRitual />
        <SceneThreshold />
      </main>
      <footer style={{ padding: '5rem 0', textAlign: 'center', opacity: 0.3 }}>
        <div className="container">
          <p className="mono">© {new Date().getFullYear()} OBSIDIAN INK STUDIO • KOREGAON PARK • PUNE</p>
        </div>
      </footer>
    </div>
  );
}
