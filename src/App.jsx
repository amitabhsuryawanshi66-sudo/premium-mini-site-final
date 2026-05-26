import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'framer-motion';
import { STUDIO_INFO, EXHIBIT_ARCHIVE, PRIVATE_LEDGER, INTAKE_PROTOCOL } from './data/demoData';
import { getWhatsAppUrl } from './lib/whatsapp';

const MaterialPlate = ({ src, alt, variant = "inkCraft", mode = "photo", className = "", style = {} }) => {
  const [error, setError] = useState(false);
  const isArtifact = mode === "artifact" || !src;
  const isHybrid = mode === "hybrid" && src;

  const getDesignedPattern = () => {
    switch(variant) {
      case "fineLine":
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect width="100" height="100" fill="#0A0A0A" />
            <rect x="30" y="8" width="40" height="84" rx="20" fill="#B98773" opacity="0.16" />
            {/* Skin flow mapping */}
            <path d="M 20 0 Q 30 50 20 100" fill="none" stroke="#F0D6C8" strokeWidth="0.12" opacity="0.26" />
            <path d="M 80 0 Q 70 50 80 100" fill="none" stroke="#F0D6C8" strokeWidth="0.12" opacity="0.26" />

            {/* Illustrative Fine-Line Study */}
            <g transform="translate(50, 45) scale(0.8)">
              <path d="M -15 -15 C -5 -15 5 -25 15 -25 C 25 -25 35 -15 25 -5 C 15 5 -15 5 -25 15 C -35 25 -25 35 -15 35 C -5 35 5 25 15 25"
                    fill="none" stroke="#F7E4DA" strokeWidth="0.45" opacity="0.92" />
              <circle cx="-15" cy="-15" r="0.8" fill="#F7E4DA" />
              <circle cx="15" cy="25" r="0.8" fill="#F7E4DA" />
              <path d="M 0 -10 L 0 10 M -10 0 L 10 0" stroke="#F7E4DA" strokeWidth="0.12" opacity="0.45" />
              {/* Precision stippling */}
              {[...Array(20)].map((_, i) => (
                <circle key={i} cx={Math.cos(i) * 20} cy={Math.sin(i) * 20} r="0.18" fill="#F7E4DA" opacity="0.55" />
              ))}
            </g>
            <text x="4" y="96" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="1.2" opacity="0.18">STUDY_FL_V.07 / PRECISION_PATH</text>
          </svg>
        );
      case "stencil":
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect width="100" height="100" fill="#0D0D12" />
            {/* Stencil blue tint overlay */}
            <rect width="100" height="100" fill="#3B82F6" opacity="0.02" />
            <defs>
              <pattern id="stencil-dot-grid" width="4" height="4" patternUnits="userSpaceOnUse">
                <circle cx="0.5" cy="0.5" r="0.2" fill="var(--accent)" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#stencil-dot-grid)" />

            {/* Stencil Transfer Graphic */}
            <g transform="translate(50, 45) scale(0.9)">
              <rect x="-25" y="-30" width="50" height="60" rx="1" fill="#3B82F6" opacity="0.08" stroke="#7DB2FF" strokeWidth="0.22" />
              <path d="M -20 -20 L 20 -20 L 20 20 L -20 20 Z" fill="none" stroke="#9BC5FF" strokeWidth="0.45" opacity="0.85" strokeDasharray="1,1" />
              <path d="M -15 0 L 15 0 M 0 -15 L 0 15" stroke="#9BC5FF" strokeWidth="0.22" opacity="0.75" />
              <path d="M -12 -8 C -4 -18 14 -14 14 0 C 14 12 -6 13 -14 21" fill="none" stroke="#D7E8FF" strokeWidth="0.35" opacity="0.82" />
              {/* Registration Marks */}
              <circle cx="-25" cy="-30" r="1.4" stroke="#9BC5FF" strokeWidth="0.25" fill="none" />
              <circle cx="25" cy="30" r="1.4" stroke="#9BC5FF" strokeWidth="0.25" fill="none" />
            </g>
            <text x="4" y="96" fill="#3B82F6" fontFamily="var(--font-mono)" fontSize="1.2" opacity="0.2">STENCIL_TRANSFER_REF_3B82</text>
          </svg>
        );
      case "blackwork":
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect width="100" height="100" fill="#050505" />

            {/* Bold Blackwork Study */}
            <g transform="translate(50, 50)">
              <path d="M -40 -40 L 0 -40 L 40 40 L 0 40 Z" fill="#F2F2F2" opacity="0.18" />
              <path d="M -20 -40 L 20 -40 L 40 -20 L 40 20 L 20 40 L -20 40 L -40 20 L -40 -20 Z" fill="none" stroke="#F2F2F2" strokeWidth="1.4" opacity="0.72" />
              <rect x="-12" y="-12" width="24" height="24" fill="#F2F2F2" opacity="0.24" />
              <path d="M -36 -24 L 35 28" stroke="var(--accent)" strokeWidth="2.4" opacity="0.48" />
              {/* Density Gradient Check */}
              {[...Array(5)].map((_, i) => (
                <rect key={i} x={-35 + i * 15} y="35" width="10" height="2.8" fill="#F2F2F2" opacity={0.18 + i * 0.13} />
              ))}
            </g>
            <text x="4" y="96" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="1.2" opacity="0.18">BW_SATURATION_CHECK / 100%_DEPTH</text>
          </svg>
        );
      case "clinicalTattoo":
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect width="100" height="100" fill="#0A0A0A" />

            {/* Sterile Tray Layout */}
            <g transform="translate(50, 45) scale(0.8)">
              <rect x="-40" y="-35" width="80" height="70" rx="3" fill="#FFFFFF" opacity="0.05" stroke="#F2F2F2" strokeWidth="0.25" />
              {/* Ink Caps */}
              <circle cx="-25" cy="-20" r="4.5" fill="#F2F2F2" opacity="0.1" stroke="#F2F2F2" strokeWidth="0.35" />
              <circle cx="-15" cy="-20" r="4.5" fill="#F2F2F2" opacity="0.1" stroke="#F2F2F2" strokeWidth="0.35" />
              <circle cx="-5" cy="-20" r="4.5" fill="#F2F2F2" opacity="0.1" stroke="#F2F2F2" strokeWidth="0.35" />

              {/* Needle Pack (Simplified) */}
              <rect x="10" y="-20" width="25" height="40" rx="1" fill="#F2F2F2" opacity="0.06" stroke="#F2F2F2" strokeWidth="0.22" />
              <path d="M 15 -10 L 30 -10 M 15 0 L 30 0 M 15 10 L 30 10" stroke="#F2F2F2" strokeWidth="0.12" opacity="0.45" />

              {/* Tool Silhouette */}
              <rect x="-30" y="5" width="30" height="20" rx="2" fill="var(--accent)" opacity="0.18" stroke="#F2F2F2" strokeWidth="0.18" />
              <path d="M -36 30 L 36 30" stroke="#F2F2F2" strokeWidth="0.22" opacity="0.42" />
            </g>
            <text x="4" y="96" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="1.2" opacity="0.18">STERILE_STATION_SETUP_PROTOCOL</text>
          </svg>
        );
      case "customPlacement":
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect width="100" height="100" fill="#0D0D0D" />

            {/* Anatomical Wireframe (Forearm/Arm focus) */}
            <g transform="translate(50, 50) scale(0.9)">
              <path d="M -15 -50 C -20 -20 -20 20 -15 50 L 15 50 C 20 20 20 -20 15 -50 Z"
                    fill="#B98773" stroke="#F0D6C8" strokeWidth="0.28" opacity="0.38" />
              {/* Flow Arrows */}
              <path d="M -10 -30 L 0 -40 L 10 -30" fill="none" stroke="#F0D6C8" strokeWidth="0.35" opacity="0.72" />
              <path d="M -10 30 L 0 40 L 10 30" fill="none" stroke="#F0D6C8" strokeWidth="0.35" opacity="0.72" />
              {/* Placement Zone */}
              <rect x="-11" y="-16" width="22" height="32" rx="2" fill="var(--accent)" opacity="0.24" stroke="#F7E4DA" strokeWidth="0.24" strokeDasharray="1,1" />
              <path d="M -25 0 L 25 0" stroke="#F7E4DA" strokeWidth="0.14" opacity="0.45" />
            </g>
            <text x="4" y="96" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="1.2" opacity="0.18">ANATOMY_MAPPING_V.07_LIMB</text>
          </svg>
        );
      case "inkCraft":
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect width="100" height="100" fill="#0D0D0D" />

            {/* Material Study: Pigment & Tool Calibration */}
            <g transform="translate(50, 45) scale(0.85)">
              {/* Ink Bottle Silhouette */}
              <path d="M -10 20 L -10 -15 L -5 -20 L 5 -20 L 10 -15 L 10 20 Z" fill="#F2F2F2" stroke="#F2F2F2" strokeWidth="0.22" opacity="0.16" />
              <rect x="-4" y="-28" width="8" height="8" rx="0.5" fill="#F2F2F2" stroke="#F2F2F2" strokeWidth="0.18" opacity="0.18" />

              {/* Calibration Scale */}
              <path d="M 20 -20 L 20 20" stroke="#F2F2F2" strokeWidth="0.22" opacity="0.55" />
              {[...Array(9)].map((_, i) => (
                <path key={i} d={`M 20 ${-20 + i * 5} L 24 ${-20 + i * 5}`} stroke="#F2F2F2" strokeWidth="0.16" opacity="0.48" />
              ))}

              {/* Pigment Drop */}
              <path d="M -25 10 C -25 15 -20 20 -15 20 C -10 20 -5 15 -5 10 C -5 5 -15 -10 -15 -10 C -15 -10 -25 5 -25 10 Z"
                    fill="var(--accent)" opacity="0.42" />
              <circle cx="-15" cy="15" r="1.5" fill="#F7E4DA" opacity="0.78" />
            </g>
            <text x="4" y="96" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="1.2" opacity="0.18">MATERIAL_LEDGER_CRAFT_STUDY</text>
          </svg>
        );
    }
  };

  const ArtifactOverlay = () => (
    <div className="plate-overlay">
      <div className="artifact-designed-content" style={{ position: 'absolute', inset: 0 }}>
        {getDesignedPattern()}
      </div>
    </div>
  );

  return (
    <div className={`material-plate ${className} mode-${mode}`} style={style}>
      {isArtifact ? (
        <ArtifactOverlay />
      ) : (
        <div className="plate-img-wrap">
          <img src={src} alt={alt} onError={() => setError(true)} loading="lazy" />
          {error && <ArtifactOverlay />}
          {!error && isHybrid && (
            <div className="hybrid-overlay" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
               <div className="hybrid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4, mixBlendMode: 'overlay' }}>
                 {getDesignedPattern()}
               </div>
               <div className="reg-mark reg-top-left" style={{ top: '1rem', left: '1rem' }}></div>
               <div className="reg-mark reg-bottom-right" style={{ bottom: '1rem', right: '1rem' }}></div>
            </div>
          )}
          {!error && !isHybrid && (
            <div className="plate-overlay">
              <div className="reg-mark reg-top-left" style={{ top: '1rem', left: '1rem' }}></div>
              <div className="reg-mark reg-bottom-right" style={{ bottom: '1rem', right: '1rem' }}></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ReferenceSlip = ({ index = "01", label = "REF_SCAN", variant = "default" }) => (
  <div className={`reference-slip mono slip-variant-${variant}`}>
    <div className="slip-header">
      <span className="slip-label" style={{ opacity: 0.5 }}>{label}</span>
      <span className="slip-id">#{index}</span>
    </div>
    <div className="slip-body">
      <div className="bar-code" style={{ opacity: 0.3 }}></div>
      <div className="redacted-block">
        <div className="redacted-line" style={{ width: '80%', opacity: 0.1 }}></div>
        <div className="redacted-line" style={{ width: '40%', opacity: 0.1 }}></div>
      </div>
      <div className="slip-stamp" style={{ opacity: 0.7 }}>APPROVED</div>
    </div>
    <div className="slip-footer">
      <span style={{ opacity: 0.3 }}>OBSIDIAN_AUTH</span>
      <div className="registration-tick" style={{ width: '8px', height: '8px', opacity: 0.2 }}></div>
    </div>
  </div>
);

const PlacementMap = ({ area = "BODY_MAPPING" }) => (
  <div className="placement-map">
    <div className="map-meta mono" style={{ fontSize: '7px', opacity: 0.3 }}>{area}</div>
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

const Reveal = ({ children, className = "", stagger = 0, amount = 0.1, style }) => {
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
      style={style}
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
            <MaterialPlate src={STUDIO_INFO.heroImage} alt="Premium Tattoo Process" variant="inkCraft" mode="hybrid" />
          </motion.div>
          <div className="shield-annotation mono" style={{ fontSize: '8px', opacity: 0.4 }}>[ ARCHIVE_REF_01 ]</div>
          <PlacementMap area="PRIMARY_DESIRE" />
        </div>

        <div className="hero-content">
          <h1 className="brand-title-desktop">Obsidian</h1>
          <h1 className="brand-title-mobile-forced">
            <span className="title-part">OBSID</span>
            <span className="title-part">IAN</span>
            <span className="title-suffix">INK STUDIO</span>
          </h1>
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

const ArchiveStudy = ({ item, index }) => {
  const isLarge = index === 0 || index === 3;
  const isSmall = index === 1 || index === 4;

  return (
    <Reveal
      className={`archive-study study-rank-${index} ${isLarge ? 'study-large' : ''} ${isSmall ? 'study-small' : ''}`}
      style={{
        '--aspect': item.aspect || '4/5',
        '--rotation': `${(index % 2 === 0 ? 1 : -1) * (index * 0.5)}deg`
      }}
      stagger={index * 0.1}
    >
      <div className="study-surface">
        <MaterialPlate
          src={item.image}
          alt={item.title}
          mode={item.visualMode || "hybrid"}
          variant={item.visualVariant || "inkCraft"}
          className="archive-material"
        />
        <div className="study-annotation mono">ARCHIVE_ITEM_{String(index + 1).padStart(2, '0')}</div>
        {item.visualVariant === "stencil" && <PlacementMap area="TECHNICAL_STENCIL" />}
        {item.visualVariant === "customPlacement" && <PlacementMap area="BODY_FLOW" />}

        <div className="study-surface-meta">
          <span className="mono">ENTRY_{String(index + 1).padStart(2, '0')} // {item.meta}</span>
        </div>
      </div>

      <div className="study-meta-editorial">
        <div className="study-info">
          <h3 className="study-title">{item.title}</h3>
          <p className="study-value mono">{item.serviceValue}</p>
        </div>
        <div className="archive-badge-clinical mono">
          <div className="registration-tick"></div>
          <span>AUTHENTICATED</span>
        </div>
      </div>
    </Reveal>
  );
};

const SceneExhibit = () => {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      if (!trackRef.current || !containerRef.current || window.innerWidth < 768) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Enhanced precision scroll mapping for editorial track
      if (rect.top <= 0 && rect.bottom >= viewportHeight) {
        const totalScrollableDist = rect.height - viewportHeight;
        const currentScrollPos = -rect.top;

        const scrollRange = Math.max(totalScrollableDist, 1);
        const percentage = Math.max(0, Math.min(1, currentScrollPos / scrollRange));

        const maxScroll = trackRef.current.scrollWidth - trackRef.current.clientWidth;
        trackRef.current.scrollLeft = maxScroll * percentage;
      } else if (rect.top > 0) {
        trackRef.current.scrollLeft = 0;
      } else if (rect.bottom < viewportHeight) {
        trackRef.current.scrollLeft = trackRef.current.scrollWidth - trackRef.current.clientWidth;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="scene-container-exhibit" ref={containerRef} style={{ height: isDesktop ? '250vh' : 'auto' }}>
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
      <Reveal className="portal-heading">Secure<br />Session.</Reveal>
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
