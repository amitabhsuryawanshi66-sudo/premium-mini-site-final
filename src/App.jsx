import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'framer-motion';
import { getSelectedSitePreset, getSitePreset } from './data/sitePresets';
import { getWhatsAppUrl } from './lib/whatsapp';
import {
  LUME_JOURNEY,
  LUME_TRANSFORMATION_PROOF,
  LUME_TREATMENT_INTENTS,
  LUME_TRUST_CUES,
} from './data/lumeValeData';

const MaterialPlate = ({ src, alt, variant = "inkCraft", mode = "photo", className = "", style = {} }) => {
  const [error, setError] = useState(false);
  const isArtifact = mode === "artifact" || !src;
  const isHybrid = mode === "hybrid" && src;

  const getDesignedPattern = () => {
    switch(variant) {
      case "spatialLight":
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect width="100" height="100" fill="var(--artifact-ground, #090909)" />
            <rect x="14" y="16" width="72" height="64" fill="var(--artifact-surface, #151311)" stroke="var(--artifact-line, #CFC4B6)" strokeWidth="0.22" opacity="0.7" />
            <path d="M 58 16 L 86 16 L 64 80 L 34 80 Z" fill="var(--artifact-light, #CFC4B6)" opacity="0.16" />
            <path d="M 20 72 L 76 72" stroke="var(--artifact-line, #CFC4B6)" strokeWidth="0.35" opacity="0.48" />
            <rect x="24" y="28" width="18" height="44" fill="var(--artifact-stone, #6E6257)" opacity="0.52" />
            <rect x="48" y="42" width="18" height="30" fill="var(--artifact-warm, #A88F78)" opacity="0.28" />
            <path d="M 18 84 C 34 78 50 78 82 84" fill="none" stroke="var(--accent)" strokeWidth="0.24" opacity="0.5" />
            <text x="4" y="96" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="1.2" opacity="0.2">LIGHT_WELL_SPATIAL_STUDY</text>
          </svg>
        );
      case "materialStudy":
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect width="100" height="100" fill="var(--artifact-ground, #0B0A09)" />
            <rect x="12" y="15" width="22" height="70" fill="var(--artifact-stone, #B8AA99)" opacity="0.34" stroke="var(--artifact-line-soft, #E7DED2)" strokeWidth="0.2" />
            <rect x="39" y="15" width="22" height="70" fill="var(--artifact-shadow, #5B5047)" opacity="0.72" stroke="var(--artifact-line, #CFC4B6)" strokeWidth="0.18" />
            <rect x="66" y="15" width="22" height="70" fill="var(--artifact-fabric, #D7D0C4)" opacity="0.22" stroke="var(--artifact-line-soft, #E7DED2)" strokeWidth="0.18" />
            {[...Array(8)].map((_, i) => (
              <path key={i} d={`M 14 ${22 + i * 7} C 22 ${20 + i * 7} 27 ${24 + i * 7} 34 ${22 + i * 7}`} stroke="var(--artifact-line-soft, #E7DED2)" strokeWidth="0.12" opacity="0.28" fill="none" />
            ))}
            <circle cx="50" cy="50" r="15" fill="none" stroke="var(--accent)" strokeWidth="0.25" opacity="0.34" />
            <text x="4" y="96" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="1.2" opacity="0.2">TACTILE_MATERIAL_BOARD</text>
          </svg>
        );
      case "planGridInterior":
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect width="100" height="100" fill="var(--artifact-ground, #080808)" />
            {[20, 40, 60, 80].map((line) => (
              <g key={line} opacity="0.14">
                <path d={`M ${line} 8 L ${line} 92`} stroke="var(--artifact-line, #CFC4B6)" strokeWidth="0.12" />
                <path d={`M 8 ${line} L 92 ${line}`} stroke="var(--artifact-line, #CFC4B6)" strokeWidth="0.12" />
              </g>
            ))}
            <path d="M 18 24 L 82 24 L 82 74 L 58 74 L 58 54 L 40 54 L 40 74 L 18 74 Z" fill="none" stroke="var(--artifact-line-soft, #E7DED2)" strokeWidth="0.75" opacity="0.82" />
            <path d="M 40 24 L 40 54 M 58 24 L 58 54 M 18 48 L 40 48 M 58 48 L 82 48" stroke="var(--artifact-line-soft, #E7DED2)" strokeWidth="0.35" opacity="0.56" />
            <path d="M 24 64 C 38 34 62 34 76 64" fill="none" stroke="var(--accent)" strokeWidth="0.45" opacity="0.7" />
            <text x="4" y="96" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="1.2" opacity="0.2">INTERIOR_PLAN_FLOW_MAP</text>
          </svg>
        );
      case "courtyardShadow":
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect width="100" height="100" fill="var(--artifact-ground, #090908)" />
            <rect x="14" y="22" width="72" height="54" fill="var(--artifact-surface, #171513)" stroke="var(--artifact-line, #CFC4B6)" strokeWidth="0.2" opacity="0.68" />
            <rect x="24" y="32" width="18" height="34" fill="var(--artifact-shadow, #5E554C)" opacity="0.78" />
            <rect x="46" y="26" width="28" height="40" fill="var(--artifact-surface-2, #302B26)" opacity="0.88" />
            <path d="M 14 22 L 86 22 L 56 76 L 14 76 Z" fill="var(--artifact-light, #D8C9B8)" opacity="0.12" />
            <path d="M 24 66 L 78 66" stroke="var(--artifact-line-soft, #E7DED2)" strokeWidth="0.18" opacity="0.38" />
            <circle cx="74" cy="34" r="4" fill="var(--accent)" opacity="0.28" />
            <text x="4" y="96" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="1.2" opacity="0.2">COURTYARD_LIGHT_SHADOW</text>
          </svg>
        );
      case "joineryDetail":
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect width="100" height="100" fill="var(--artifact-ground, #0A0908)" />
            <rect x="18" y="20" width="64" height="60" fill="var(--artifact-timber, #4A3A2F)" opacity="0.72" stroke="var(--artifact-line, #CFC4B6)" strokeWidth="0.22" />
            <path d="M 18 40 L 82 40 M 18 60 L 82 60 M 38 20 L 38 80 M 62 20 L 62 80" stroke="var(--artifact-line, #CFC4B6)" strokeWidth="0.2" opacity="0.48" />
            <path d="M 38 40 L 50 52 L 62 40 M 38 60 L 50 48 L 62 60" fill="none" stroke="var(--accent)" strokeWidth="0.45" opacity="0.58" />
            {[...Array(7)].map((_, i) => (
              <path key={i} d={`M 22 ${27 + i * 7} C 34 ${24 + i * 7} 48 ${30 + i * 7} 78 ${26 + i * 7}`} stroke="var(--artifact-line-soft, #E7DED2)" strokeWidth="0.1" opacity="0.22" fill="none" />
            ))}
            <text x="4" y="96" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="1.2" opacity="0.2">JOINERY_DETAIL_CRAFT</text>
          </svg>
        );
      case "thresholdStudy":
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect width="100" height="100" fill="var(--artifact-ground, #080808)" />
            <rect x="20" y="16" width="60" height="68" fill="var(--artifact-surface, #11100F)" stroke="var(--artifact-line, #CFC4B6)" strokeWidth="0.22" opacity="0.74" />
            <rect x="35" y="26" width="30" height="58" fill="var(--artifact-surface-2, #28231F)" stroke="var(--artifact-line-soft, #E7DED2)" strokeWidth="0.2" opacity="0.72" />
            <path d="M 65 26 L 80 16 L 80 84 L 65 84 Z" fill="var(--artifact-light, #D8C9B8)" opacity="0.16" />
            <path d="M 35 84 L 78 84" stroke="var(--artifact-line-soft, #E7DED2)" strokeWidth="0.28" opacity="0.42" />
            <path d="M 28 52 L 72 52" stroke="var(--accent)" strokeWidth="0.24" opacity="0.54" />
            <text x="4" y="96" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="1.2" opacity="0.2">THRESHOLD_LIGHT_SECTION</text>
          </svg>
        );
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

const ReferenceSlip = ({ index = "01", label = "REF_SCAN", variant = "default", authLabel = "STUDIO_REVIEW", stampLabel = "REVIEWED" }) => (
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
      <div className="slip-stamp" style={{ opacity: 0.7 }}>{stampLabel}</div>
    </div>
    <div className="slip-footer">
      <span style={{ opacity: 0.3 }}>{authLabel}</span>
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

const Nav = ({ site }) => (
  <nav>
    <div className="logo">{site.copy.nav.logo}</div>
    <div className="mono nav-meta">{site.copy.nav.meta}</div>
  </nav>
);

const HeroArtifact = ({ site }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);
  const [isMobile, setIsMobile] = useState(false);
  const { hero } = site.copy;

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
          {hero.topNote}
        </div>
        <ReferenceSlip {...hero.referenceSlip} authLabel={site.referenceAuthLabel} />
      </div>

      <div className="hero-center">
        <div className="material-shield">
          <motion.div style={{ y, scale, height: '100%' }}>
            <MaterialPlate
              src={site.studioInfo.heroImage}
              alt={hero.materialAlt}
              variant={hero.materialVariant}
              mode={hero.materialMode}
            />
          </motion.div>
          <div className="shield-annotation mono" style={{ fontSize: '8px', opacity: 0.4 }}>{hero.shieldAnnotation}</div>
          <PlacementMap area={hero.placementArea} />
        </div>

        <div className="hero-content">
          <h1 className="brand-title-desktop">{hero.desktopTitle}</h1>
          <h1 className="brand-title-mobile-forced">
            {hero.mobileTitleParts.map((part) => (
              <span className="title-part" key={part}>{part}</span>
            ))}
            <span className="title-suffix">{hero.mobileTitleSuffix}</span>
          </h1>
          <div className="status-plate">
            {hero.statusItems.map((item) => (
              <div className="plate-item" key={item.label}>
                <span className="mono">{item.label}</span>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
          <a href={getWhatsAppUrl(site.intakeProtocol[0].message)} className="hero-inquiry-link mono">
            {hero.inquiryLabel || site.copy.threshold.ctaLabel}
          </a>
        </div>
      </div>

      <Reveal className="hero-bottom">
        <div className="brand-meta">
          <div className="mono">{hero.archiveLabel}</div>
          <div className="mono" style={{ color: 'var(--accent)' }}>{hero.taglineLabel || `[ ${site.studioInfo.tagline} ]`}</div>
        </div>
        <div className="hero-marginalia mono">
          <div>{hero.protocolStatus}</div>
          <div className="registration-tick"></div>
        </div>
      </Reveal>
    </section>
  );
};

const SceneStance = ({ site }) => {
  const { stance } = site.copy;

  return (
    <section className="scene technical-stance">
      <div className="stance-body">
        <Reveal className="stance-heading">
          {stance.headingStart} <span style={{ color: 'var(--accent)' }}>{stance.headingAccent}</span>. {stance.headingEnd}
        </Reveal>
        <div className="stance-details-grid">
          <Reveal className="stance-details" stagger={0.2}>
            {stance.description}
          </Reveal>
          <Reveal className="stance-marks" stagger={0.3}>
            {stance.marks.map((mark) => (
              <div className="mark-fragment" key={mark.label}>
                <span className="mono">{mark.label}</span>
                <p>{mark.value}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

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
          <span>Reviewed</span>
        </div>
      </div>
    </Reveal>
  );
};

const SceneExhibit = ({ site }) => {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    let animationFrame = null;

    const syncStoryTrack = () => {
      if (!trackRef.current || !containerRef.current) return;

      if (window.innerWidth < 768) {
        trackRef.current.scrollLeft = 0;
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollableDist = Math.max(rect.height - viewportHeight, 1);
      const currentScrollPos = Math.max(0, Math.min(totalScrollableDist, -rect.top));
      const percentage = currentScrollPos / totalScrollableDist;
      const maxScroll = Math.max(0, trackRef.current.scrollWidth - trackRef.current.clientWidth);

      if (rect.top > 0) {
        trackRef.current.scrollLeft = 0;
      } else if (rect.bottom < viewportHeight) {
        trackRef.current.scrollLeft = maxScroll;
      } else {
        trackRef.current.scrollLeft = maxScroll * percentage;
      }
    };

    const scheduleStoryTrackSync = () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(syncStoryTrack);
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
      scheduleStoryTrackSync();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', scheduleStoryTrackSync, { passive: true });
    scheduleStoryTrackSync();

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', scheduleStoryTrackSync);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="scene-container-exhibit" ref={containerRef} style={{ height: isDesktop ? '260vh' : 'auto' }}>
      <section className="scene exhibit-archive">
        <div className="exhibit-header">
          <div className="mono">{site.copy.exhibit.eyebrow}</div>
        </div>
        <div className="story-track" ref={trackRef}>
          {site.exhibitArchive.map((item, i) => (
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

const StudioTrustLedger = ({ site }) => (
  <section className="scene studio-trust-ledger">
    <div className="ledger-container">
      <div className="mono" style={{ marginBottom: '4rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span>{site.copy.ledger.eyebrow}</span>
        <div style={{ height: '1px', flex: 1, background: 'var(--accent)', opacity: 0.2 }}></div>
      </div>
      <div className="ledger-grid">
        {site.privateLedger.map((item, i) => (
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

const IntakeProtocolPanel = ({ site }) => (
  <section className="scene intake-protocol-panel">
    <div className="intake-portal">
      <div className="intake-header">
        <Reveal>
          <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{site.copy.intake.eyebrow}</div>
          <h2 className="intake-title">{site.copy.intake.titleLines[0]}<br />{site.copy.intake.titleLines[1]}</h2>
        </Reveal>
        <ReferenceSlip {...site.copy.intake.referenceSlip} authLabel={site.referenceAuthLabel} />
      </div>

      <div className="intake-grid">
        {site.intakeProtocol.map((intent, i) => (
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

const SceneThreshold = ({ site }) => (
  <section className="scene portal-threshold">
    <div className="portal-body">
      <Reveal className="portal-heading">{site.copy.threshold.headingLines[0]}<br />{site.copy.threshold.headingLines[1]}</Reveal>
      <Reveal stagger={0.2}>
        <a href={getWhatsAppUrl(site.intakeProtocol[0].message)} className="portal-action">
          <span>{site.copy.threshold.ctaLabel}</span>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </Reveal>
      <div className="footer-meta">
        <div className="mono">{site.copy.threshold.footerLocation}</div>
        <div className="mono" style={{ opacity: 0.3 }}>{site.copy.threshold.footerNote}</div>
      </div>
    </div>
  </section>
);

const LumeSkinPlate = ({ variant = "diagnostic", className = "" }) => {
  const isIntent = variant === "intent";
  const isAftercare = variant === "aftercare";
  const glowColor = isIntent ? "var(--lume-coral)" : isAftercare ? "var(--lume-sage)" : "var(--lume-celadon)";
  const lineColor = isAftercare ? "var(--lume-ink)" : "var(--lume-graphite)";

  return (
    <div className={`lume-skin-plate ${className}`} aria-hidden="true">
      <svg viewBox="0 0 240 320" preserveAspectRatio="none">
        <defs>
          <radialGradient id={`lume-glow-${variant}`} cx="50%" cy="36%" r="62%">
            <stop offset="0%" stopColor={glowColor} stopOpacity="0.58" />
            <stop offset="48%" stopColor="var(--lume-veil)" stopOpacity="0.42" />
            <stop offset="100%" stopColor="var(--lume-ground)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`lume-layer-${variant}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--lume-pearl)" stopOpacity="0.72" />
            <stop offset="52%" stopColor={glowColor} stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--lume-ink)" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect width="240" height="320" fill="var(--lume-ground)" />
        <path d="M18 26 C76 -4 169 10 220 70 C198 111 204 172 228 223 C170 312 56 304 15 244 C42 188 40 87 18 26 Z" fill={`url(#lume-glow-${variant})`} />
        <path d="M48 50 C96 24 159 35 195 82 C174 129 179 178 202 225 C158 273 90 278 47 236 C69 174 69 105 48 50 Z" fill={`url(#lume-layer-${variant})`} opacity="0.86" />
        <path d="M68 82 C111 62 154 68 178 101 C162 132 164 177 183 210 C148 239 100 246 70 214 C88 168 88 121 68 82 Z" fill="var(--lume-blush)" opacity="0.34" />
        {[0, 1, 2, 3, 4].map((line) => (
          <path
            key={line}
            d={`M ${38 + line * 12} ${92 + line * 19} C ${89 + line * 7} ${64 + line * 11} ${156 - line * 3} ${82 + line * 18} ${207 - line * 9} ${132 + line * 21}`}
            fill="none"
            stroke={lineColor}
            strokeWidth="0.5"
            opacity={0.1 + line * 0.035}
          />
        ))}
        {isIntent && (
          <g opacity="0.72">
            <circle cx="70" cy="98" r="12" fill="none" stroke="var(--lume-coral)" strokeWidth="1" />
            <circle cx="158" cy="154" r="18" fill="none" stroke="var(--lume-celadon)" strokeWidth="1" />
            <circle cx="116" cy="224" r="14" fill="none" stroke="var(--lume-sage)" strokeWidth="1" />
            <path d="M82 98 L140 150 M151 170 L124 212" stroke="var(--lume-graphite)" strokeWidth="0.7" opacity="0.32" />
          </g>
        )}
        {isAftercare && (
          <g opacity="0.55">
            {[54, 84, 114, 144, 174].map((x) => (
              <path key={x} d={`M ${x} 72 L ${x + 34} 252`} stroke="var(--lume-sage)" strokeWidth="0.5" />
            ))}
            {[92, 132, 172, 212].map((y) => (
              <path key={y} d={`M 44 ${y} C 92 ${y - 16} 156 ${y + 14} 204 ${y - 8}`} stroke="var(--lume-ink)" strokeWidth="0.38" opacity="0.42" />
            ))}
          </g>
        )}
      </svg>
    </div>
  );
};

const LumeHero = ({ site }) => (
  <section className="lume-hero">
    <div className="lume-hero-copy">
      <div className="lume-kicker">Private skin atelier for Pune and Mumbai</div>
      <h1>Lume Vale Skin Atelier</h1>
      <p>
        Precision-led skin, hair, and subtle aesthetic plans for clients who want visible improvement without overdone clinic theatre.
      </p>
      <div className="lume-hero-actions">
        <a className="lume-primary-cta" href={getWhatsAppUrl(site.intakeProtocol[0].message)}>
          Book a private skin consult
        </a>
        <a className="lume-secondary-cta" href="#lume-treatments">
          Explore treatments
        </a>
      </div>
    </div>
    <div className="lume-hero-visual">
      <LumeSkinPlate />
      <div className="lume-visual-note">
        <span>Light-layer diagnostic</span>
        <strong>Concern to plan, not promise to perfection.</strong>
      </div>
    </div>
  </section>
);

const LumeTrustStrip = () => (
  <section className="lume-trust-strip" aria-label="Lume Vale trust cues">
    {LUME_TRUST_CUES.map((cue) => (
      <article key={cue.title}>
        <span>{cue.title}</span>
        <p>{cue.detail}</p>
      </article>
    ))}
  </section>
);

const LumeTreatmentMap = () => (
  <section className="lume-section lume-treatment-map" id="lume-treatments">
    <div className="lume-section-header">
      <span>Concern-led treatment map</span>
      <h2>Choose the concern. The clinic shapes the sequence.</h2>
    </div>
    <div className="lume-treatment-grid">
      {LUME_TREATMENT_INTENTS.map((intent, index) => (
        <a
          className="lume-treatment-card"
          href={getWhatsAppUrl(intent.message)}
          key={intent.id}
          style={{ '--tone': index % 3 }}
        >
          <span>{intent.label}</span>
          <h3>{intent.title}</h3>
          <p>{intent.detail}</p>
        </a>
      ))}
    </div>
  </section>
);

const LumeRevealSection = () => {
  const [position, setPosition] = useState(58);
  const [active, setActive] = useState(false);
  const revealRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const updatePosition = (clientX) => {
    const rect = revealRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(18, Math.min(82, next)));
  };

  const handlePointerMove = (event) => {
    if (!active || shouldReduceMotion) return;
    updatePosition(event.clientX);
  };

  return (
    <section className="lume-section lume-reveal-section">
      <div className="lume-section-header">
        <span>Lume Reveal</span>
        <h2>A treatment preview built around gradual, realistic change.</h2>
      </div>
      <div className="lume-reveal-layout">
        <div
          className={`lume-reveal ${shouldReduceMotion ? 'is-reduced' : ''}`}
          ref={revealRef}
          onPointerDown={(event) => {
            if (shouldReduceMotion) return;
            setActive(true);
            event.currentTarget.setPointerCapture(event.pointerId);
            updatePosition(event.clientX);
          }}
          onPointerMove={handlePointerMove}
          onPointerUp={() => setActive(false)}
          onPointerCancel={() => setActive(false)}
          style={{ '--reveal-position': `${position}%` }}
          role="img"
          aria-label="Privacy-safe treatment reveal showing calmer tone and smoother skin texture over time"
        >
          <div className="lume-reveal-state lume-reveal-before">
            <LumeSkinPlate variant="intent" />
            <span>Concern state</span>
          </div>
          <div className="lume-reveal-state lume-reveal-after">
            <LumeSkinPlate />
            <span>After planned care</span>
          </div>
          {!shouldReduceMotion && (
            <button
              className="lume-reveal-handle"
              type="button"
              aria-label="Drag treatment reveal"
              style={{ left: `${position}%` }}
              onKeyDown={(event) => {
                if (event.key === 'ArrowLeft') setPosition((value) => Math.max(18, value - 6));
                if (event.key === 'ArrowRight') setPosition((value) => Math.min(82, value + 6));
              }}
            />
          )}
        </div>
        <div className="lume-reveal-copy">
          <span>What the motion is for</span>
          <p>
            The reveal explains staged improvement: less visible redness, smoother texture, clearer light reflection. It avoids miracle before-after claims and keeps the CTA close to the concern.
          </p>
          <a href={getWhatsAppUrl(LUME_TREATMENT_INTENTS[1].message)}>Ask about a skin plan</a>
        </div>
      </div>
    </section>
  );
};

const LumeJourney = () => (
  <section className="lume-section lume-journey">
    <div className="lume-section-header">
      <span>Private consultation journey</span>
      <h2>From first message to maintenance, the path stays quiet and specific.</h2>
    </div>
    <div className="lume-journey-grid">
      {LUME_JOURNEY.map((step) => (
        <article key={step.index}>
          <span>{step.index}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </article>
      ))}
    </div>
  </section>
);

const LumeProof = () => (
  <section className="lume-section lume-proof">
    <div className="lume-proof-visual">
      <LumeSkinPlate variant="aftercare" />
    </div>
    <div className="lume-proof-copy">
      <div className="lume-section-header">
        <span>Privacy-safe proof</span>
        <h2>Transformation stories are framed by goal, timeline, and aftercare.</h2>
      </div>
      <div className="lume-proof-list">
        {LUME_TRANSFORMATION_PROOF.map((item) => (
          <article key={item.title}>
            <span>{item.timeline}</span>
            <h3>{item.title}</h3>
            <p>{item.goal}</p>
            <small>{item.cue}</small>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const LumeBooking = ({ site }) => (
  <section className="lume-booking" id="lume-booking">
    <div>
      <span>Consultation intent</span>
      <h2>Start with the concern you actually want solved.</h2>
      <p>
        Each option opens WhatsApp with a private consultation message. The clinic can then ask for lighting-safe photos, routine notes, and timing constraints.
      </p>
    </div>
    <div className="lume-booking-grid">
      {site.intakeProtocol.map((intent) => (
        <a href={getWhatsAppUrl(intent.message)} key={intent.id}>
          {intent.label}
        </a>
      ))}
    </div>
  </section>
);

const LumeMobileCta = ({ site }) => (
  <a className="lume-mobile-cta" href={getWhatsAppUrl(site.intakeProtocol[0].message)}>
    Book consult
  </a>
);

const LumeValeSite = ({ site }) => (
  <main className="lume-main">
    <LumeHero site={site} />
    <LumeTrustStrip />
    <LumeTreatmentMap />
    <LumeRevealSection />
    <LumeJourney />
    <LumeProof />
    <LumeBooking site={site} />
    <LumeMobileCta site={site} />
  </main>
);

const getInitialSitePreset = () => {
  if (typeof window === 'undefined') {
    return getSitePreset();
  }

  return getSelectedSitePreset(window.location.search);
};

export default function App() {
  const site = getInitialSitePreset();

  useEffect(() => {
    if (site.id === 'lume-vale') {
      document.title = 'Lume Vale Skin Atelier | Private Skin Consultation';
      return;
    }

    if (site.id === 'velour-house') {
      document.title = 'Velour House | Interior Architecture Studio';
      return;
    }

    document.title = 'Obsidian Ink Studio | Premium Tattoo Concierge';
  }, [site.id]);

  return (
    <div className="app-root" data-site={site.id}>
      <div className="grain"></div>
      <TechnicalOverlay />
      <Nav site={site} />
      {site.id === 'lume-vale' ? (
        <LumeValeSite site={site} />
      ) : (
        <main>
          <HeroArtifact site={site} />
          <SceneStance site={site} />
          <SceneExhibit site={site} />
          <StudioTrustLedger site={site} />
          <IntakeProtocolPanel site={site} />
          <SceneThreshold site={site} />
        </main>
      )}
      <footer style={{ padding: '5rem 0', textAlign: 'center', opacity: 0.3 }}>
        <div className="container">
          <p className="mono">© {new Date().getFullYear()} {site.copy.footer.text}</p>
        </div>
      </footer>
    </div>
  );
}
