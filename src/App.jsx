import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'framer-motion';
import { STUDIO_INFO, EXHIBIT_ARCHIVE, PRIVATE_LEDGER, INTAKE_PROTOCOL } from './data/demoData';
import { getWhatsAppUrl } from './lib/whatsapp';

const SmartImage = ({ src, alt, className = "", style = {} }) => {
  const [error, setError] = useState(false);
  return (
    <div className={`smart-image-container ${className}`} style={style}>
      {error ? (
        <div className="material-fallback">
          <div className="fallback-grid"></div>
          <span className="mono">MATERIAL_MISSING</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          loading="lazy"
        />
      )}
    </div>
  );
};

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
    <div className="mono">Pune — Koregaon Park — Studio 07</div>
  </nav>
);

const SceneArrival = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  return (
    <section className="scene brand-threshold">
      <div className="material-shield">
        <motion.div style={{ y, scale, height: '100%' }}>
          <SmartImage src={STUDIO_INFO.heroImage} alt="Premium Tattoo Process" className="hero-img" />
        </motion.div>
      </div>
      <div className="hero-content">
        <span className="annotation">[ Premium Appointment-Only Studio ]</span>
        <h1 className="brand-title">Obsidian</h1>
      </div>
      <Reveal className="brand-meta">
        <div className="mono">Pune / Studio 07 / India</div>
        <div className="mono" style={{ color: 'var(--accent)' }}>[ Custom Design • Artist-Led ]</div>
      </Reveal>
    </section>
  );
};

const SceneStance = () => (
  <section className="scene technical-stance">
    <div className="stance-body">
      <Reveal className="stance-heading">
        Clinical precision. <span style={{ color: 'var(--accent)' }}>Anatomical dialogue</span>. Selective commissions only.
      </Reveal>
      <div className="stance-details-grid">
        <Reveal className="stance-details" stagger={0.2}>
          Every project begins with a concept audit. We treat pigment as a technical material, mapping custom compositions to the architecture of the body with absolute restraint. No rushed walk-ins.
        </Reveal>
        <Reveal className="stance-marks" stagger={0.3}>
          <div className="mark-fragment">
            <span className="mono">Studio Access</span>
            <p>Private Studio, KP</p>
          </div>
          <div className="mark-fragment">
            <span className="mono">Safety Protocol</span>
            <p>Hospital-Grade Sterile</p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const SceneExhibit = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.parentElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight && rect.bottom > 0) {
        const scrolled = viewportHeight - rect.top;
        const total = viewportHeight + rect.height;
        const percentage = scrolled / total;
        const maxScroll = trackRef.current.scrollWidth - trackRef.current.clientWidth;
        trackRef.current.scrollLeft = maxScroll * Math.min(1.2, percentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="scene exhibit-archive">
      <div className="exhibit-header">
        <div className="mono">Exhibit 02 — Portfolio / Process Archive</div>
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
              <SmartImage src={item.image} alt={item.title} />
              <div className="plate-stencil-mark"></div>
            </div>
            <div className="plate-meta">
              <div className="plate-info">
                <span className="mono">{item.meta}</span>
                <h3>{item.title}</h3>
              </div>
              <span className="mono">{item.location}</span>
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
      <div className="mono" style={{ marginBottom: '4rem', color: 'var(--accent)' }}>[ The Intake Protocol ]</div>
      {PRIVATE_LEDGER.map((item, i) => (
        <Reveal key={i} className="ledger-item" stagger={i * 0.1}>
          <span className="ledger-num mono">{item.index}</span>
          <div className="ledger-content">
            <h3 className="ledger-title">{item.title}</h3>
            <p className="ledger-copy">{item.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

const SceneIntake = () => (
  <section className="scene scene-intake">
    <div className="intake-portal">
      <Reveal>
        <span className="mono" style={{ color: 'var(--accent)' }}>Technical Intake</span>
        <h2 className="intake-title">Initiate<br />Dialogue.</h2>
      </Reveal>

      <div className="intake-grid">
        {INTAKE_PROTOCOL.map((intent, i) => (
          <Reveal key={intent.id} stagger={i * 0.1}>
            <a href={getWhatsAppUrl(intent.message)} className="intake-card">
              <div className="intake-card-top">
                <span className="mono">0{i+1}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <span className="intake-card-label">{intent.label}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const SceneThreshold = () => (
  <section className="scene portal-threshold">
    <div className="portal-body">
      <Reveal className="portal-heading">Secure Your<br />Session.</Reveal>
      <Reveal stagger={0.2}>
        <a href={getWhatsAppUrl(INTAKE_PROTOCOL[0].message)} className="portal-action">
          <span>Start a private concept review</span>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </Reveal>
      <div className="footer-meta">
        <div className="mono">Pune / Studio 07 / India</div>
        <div className="mono" style={{ opacity: 0.3 }}>By Appointment Only • No Walk-Ins</div>
      </div>
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
        <SceneIntake />
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
