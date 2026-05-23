import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'framer-motion';
import { STUDIO_INFO, EXHIBIT_ARCHIVE, PRIVATE_LEDGER, INTAKE_PROTOCOL } from './data/demoData';
import { getWhatsAppUrl } from './lib/whatsapp';

const MaterialPlate = ({ src, alt, type = "ink", className = "", style = {} }) => {
  const [error, setError] = useState(false);

  const getFallbackPattern = () => {
    switch(type) {
      case "stencil":
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="stencil-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="var(--accent)" strokeWidth="0.1" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="var(--surface)" />
            <rect width="100" height="100" fill="url(#stencil-grid)" />
            <path d="M 20 20 Q 50 10 80 40 T 20 80" fill="none" stroke="var(--accent)" strokeWidth="0.2" strokeDasharray="2,2" opacity="0.3" />
            <circle cx="20" cy="20" r="1" fill="var(--accent)" opacity="0.5" />
            <circle cx="80" cy="40" r="1" fill="var(--accent)" opacity="0.5" />
          </svg>
        );
      case "skin":
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect width="100" height="100" fill="var(--surface)" />
            <filter id="skin-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100" height="100" filter="url(#skin-noise)" opacity="0.05" />
            <line x1="10" y1="0" x2="10" y2="100" stroke="var(--accent)" strokeWidth="0.1" opacity="0.2" />
            <line x1="0" y1="90" x2="100" y2="90" stroke="var(--accent)" strokeWidth="0.1" opacity="0.2" />
          </svg>
        );
      default: // ink
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect width="100" height="100" fill="var(--bg)" />
            <circle cx="50" cy="50" r="40" fill="var(--accent)" opacity="0.05" />
            <path d="M 0 50 L 100 50" stroke="var(--accent)" strokeWidth="0.05" opacity="0.1" />
            <path d="M 50 0 L 50 100" stroke="var(--accent)" strokeWidth="0.05" opacity="0.1" />
          </svg>
        );
    }
  };

  return (
    <div className={`material-plate ${className}`} style={style}>
      {error ? (
        <div className="material-fallback-svg">
          {getFallbackPattern()}
        </div>
      ) : (
        <div className="plate-img-wrap">
          <img src={src} alt={alt} onError={() => setError(true)} loading="lazy" />
          <div className="plate-overlay">
            <div className="reg-mark reg-top-left" style={{ top: '1rem', left: '1rem' }}></div>
            <div className="reg-mark reg-bottom-right" style={{ bottom: '1rem', right: '1rem' }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

const ReferenceSlip = ({ index = "01", label = "REF_SCAN", variant = "default" }) => (
  <div className={`reference-slip mono slip-variant-${variant}`}>
    <div className="slip-header">
      <span className="slip-label">{label}</span>
      <span className="slip-id">#{index}</span>
    </div>
    <div className="slip-body">
      <div className="bar-code"></div>
      <div className="redacted-block">
        <div className="redacted-line" style={{ width: '80%' }}></div>
        <div className="redacted-line" style={{ width: '40%' }}></div>
      </div>
      <div className="slip-stamp">APPROVED</div>
    </div>
    <div className="slip-footer">
      <span>OBSIDIAN_AUTH</span>
      <div className="registration-tick" style={{ width: '8px', height: '8px' }}></div>
    </div>
  </div>
);

const PlacementMap = ({ area = "BODY_MAPPING" }) => (
  <div className="placement-map">
    <div className="map-meta mono">{area}</div>
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <radialGradient id="map-grad">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#map-grad)" />
      <path d="M50 0 L50 100 M0 50 L100 50" stroke="var(--accent)" strokeWidth="0.1" opacity="0.3" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="var(--accent)" strokeWidth="0.2" strokeDasharray="1,2" opacity="0.5" />
      <path d="M20 20 L80 80 M80 20 L20 80" stroke="var(--accent)" strokeWidth="0.1" opacity="0.3" />
      <rect x="42" y="42" width="16" height="16" fill="none" stroke="var(--accent)" strokeWidth="0.5" />
      <path d="M42 42 L35 35 M58 42 L65 35 M42 58 L35 65 M58 58 L65 65" stroke="var(--accent)" strokeWidth="0.2" />
    </svg>
  </div>
);

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
    <div className="mono nav-meta">Pune — Studio 07</div>
  </nav>
);

const HeroArtifact = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  return (
    <section className="scene hero-artifact">
      <div className="hero-top">
        <div className="mono redacted-note-fragment">
          [ ARTIST-LED / PRIVATE STUDIO / 18.53°N 73.89°E ]
        </div>
        <ReferenceSlip index="00" label="STATION_INIT" variant="header" />
      </div>

      <div className="hero-center">
        <div className="material-shield">
          <motion.div style={{ y, scale, height: '100%' }}>
            <MaterialPlate src={STUDIO_INFO.heroImage} alt="Premium Tattoo Process" type="ink" />
          </motion.div>
          <div className="shield-annotation mono">[ ARCHIVE_REF_01 ]</div>
          <PlacementMap area="PRIMARY_DESIRE" />
        </div>

        <div className="hero-content">
          <h1 className="brand-title">Obsidian</h1>
          <div className="status-plate">
            <div className="plate-item">
              <span className="mono">Location</span>
              <p>Koregaon Park, Pune</p>
            </div>
            <div className="plate-item">
              <span className="mono">Access</span>
              <p>Premium Appointment-Only</p>
            </div>
          </div>
        </div>
      </div>

      <Reveal className="hero-bottom">
        <div className="brand-meta">
          <div className="mono">Archive: Studio 07 / Pune</div>
          <div className="mono" style={{ color: 'var(--accent)' }}>[ {STUDIO_INFO.tagline} ]</div>
        </div>
        <div className="hero-marginalia mono">
          <div>PROTOCOL: ENTRY_VALIDATED</div>
          <div className="registration-tick"></div>
        </div>
      </Reveal>
    </section>
  );
};

const SceneStance = () => (
  <section className="scene technical-stance">
    <div className="stance-body">
      <Reveal className="stance-heading">
        Custom design. <span style={{ color: 'var(--accent)' }}>Technical Precision</span>. No rushed walk-ins.
      </Reveal>
      <div className="stance-details-grid">
        <Reveal className="stance-details" stagger={0.2}>
          Obsidian Ink is a premium tattoo studio in Koregaon Park for style-conscious collectors. Every project begins with a mandatory reference review to ensure technical excellence and custom alignment.
        </Reveal>
        <Reveal className="stance-marks" stagger={0.3}>
          <div className="mark-fragment">
            <span className="mono">Pricing Logic</span>
            <p>Size / Detail / Time</p>
          </div>
          <div className="mark-fragment">
            <span className="mono">Clinic Standard</span>
            <p>Hospital-Grade Sterile</p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const ArchiveStudy = ({ item, index }) => (
  <Reveal
    className="archive-study"
    style={{
      marginTop: (index % 2 === 1 && window.innerWidth >= 768) ? '15vh' : '0',
      '--aspect': item.aspect || '4/5'
    }}
    stagger={index * 0.1}
  >
    <div className="study-surface">
      <MaterialPlate src={item.image} alt={item.title} type={index % 2 === 0 ? "skin" : "stencil"} />
      <div className="study-annotation mono">STUDY_{String(index + 1).padStart(2, '0')}</div>
      {index === 1 && <PlacementMap area="TECHNICAL_STENCIL" />}
    </div>
    <div className="study-meta">
      <div className="study-info">
        <span className="mono study-tag">{item.meta}</span>
        <h3 className="study-title">{item.title}</h3>
      </div>
      <ReferenceSlip index={String(index + 1).padStart(2, '0')} label="ARCHIVE_DATA" />
    </div>
  </Reveal>
);

const SceneExhibit = () => {
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current || !containerRef.current || window.innerWidth < 768) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight && rect.bottom > 0) {
        const totalScrollableDist = rect.height - viewportHeight;
        const currentScrollPos = -rect.top;
        const percentage = Math.max(0, Math.min(1, currentScrollPos / totalScrollableDist));

        const maxScroll = trackRef.current.scrollWidth - trackRef.current.clientWidth;
        trackRef.current.scrollLeft = maxScroll * percentage;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="scene-container-exhibit" ref={containerRef} style={{ height: window.innerWidth >= 768 ? '300vh' : 'auto' }}>
      <section className="scene exhibit-archive">
        <div className="exhibit-header">
          <div className="mono">[ Exhibit 02 — Portfolio / Process Archive ]</div>
        </div>
        <div className="story-track" ref={trackRef}>
          {EXHIBIT_ARCHIVE.map((item, i) => (
            <ArchiveStudy key={i} item={item} index={i} />
          ))}
        </div>
        <div className="exhibit-footer">
          <div className="scroll-indicator-track">
            <div className="scroll-indicator-bar"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

const StudioTrustLedger = () => (
  <section className="scene studio-trust-ledger">
    <div className="ledger-container">
      <div className="mono" style={{ marginBottom: '4rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span>[ Studio Trust & Safety Protocol ]</span>
        <div style={{ height: '1px', flex: 1, background: 'var(--accent)', opacity: 0.2 }}></div>
      </div>
      <div className="ledger-grid">
        {PRIVATE_LEDGER.map((item, i) => (
          <Reveal key={i} className="ledger-item" stagger={i * 0.1}>
            <div className="ledger-sidebar">
              <span className="ledger-num mono">{item.index}</span>
              <div className="registration-tick" style={{ marginTop: '1rem', opacity: 0.3 }}></div>
            </div>
            <div className="ledger-content">
              <h3 className="ledger-title">{item.title}</h3>
              <p className="ledger-copy">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const IntakeProtocolPanel = () => (
  <section className="scene intake-protocol-panel">
    <div className="intake-portal">
      <div className="intake-header">
        <Reveal>
          <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>[ Intake System V.07 ]</div>
          <h2 className="intake-title">Initiate<br />Dialogue.</h2>
        </Reveal>
        <ReferenceSlip index="05" label="INTAKE_AUTH" variant="stamp" />
      </div>

      <div className="intake-grid">
        {INTAKE_PROTOCOL.map((intent, i) => (
          <Reveal key={intent.id} stagger={i * 0.1}>
            <a href={getWhatsAppUrl(intent.message)} className="intake-card">
              <div className="intake-card-top">
                <span className="mono">0{i+1}</span>
                <div className="registration-tick"></div>
              </div>
              <div className="intake-card-content">
                <span className="intake-card-label">{intent.label}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
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
      <Reveal className="portal-heading">Secure Your<br />Consultation.</Reveal>
      <Reveal stagger={0.2}>
        <a href={getWhatsAppUrl(INTAKE_PROTOCOL[0].message)} className="portal-action">
          <span>Start a private concept review</span>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </Reveal>
      <div className="footer-meta">
        <div className="mono">Pune / Koregaon Park</div>
        <div className="mono" style={{ opacity: 0.3 }}>Technical Dialogue Required</div>
      </div>
    </div>
  </section>
);

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="app-root">
      <div className="grain"></div>
      <TechnicalOverlay />
      <Nav />
      <main>
        <HeroArtifact />
        <SceneStance />
        <SceneExhibit />
        <StudioTrustLedger />
        <IntakeProtocolPanel />
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
