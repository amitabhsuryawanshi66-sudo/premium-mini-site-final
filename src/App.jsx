import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, ChevronRight, Lock, ScanLine, ShieldCheck, SlidersHorizontal } from 'lucide-react';
import { getSelectedSitePreset, getSitePreset } from './data/sitePresets';
import { LUME_VALE_CONCERNS, LUME_VALE_IMAGES, LUME_VALE_PRIVATE_LEDGER } from './data/lumeValeData';
import { getWhatsAppUrl } from './lib/whatsapp';

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

const getCanvasVariant = (src = "") => (src.startsWith("generated-canvas:") ? src.split(":")[1] : null);

const createSeededRandom = (seed) => {
  let value = seed;
  return () => {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };
};

const roundRectPath = (ctx, x, y, width, height, radius) => {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
};

const fillRoundRect = (ctx, x, y, width, height, radius, fill, stroke) => {
  roundRectPath(ctx, x, y, width, height, radius);
  ctx.fillStyle = fill;
  ctx.fill();
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.stroke();
  }
};

const drawLumeCanvas = (canvas, variant) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const portrait = variant === "lume-light-sheet" || variant === "lume-handset-calibration";
  const square = variant === "lume-macro-texture";
  canvas.width = square ? 1100 : portrait ? 950 : 1400;
  canvas.height = square ? 1100 : portrait ? 1300 : 900;
  const { width, height } = canvas;
  const random = createSeededRandom(variant.length * 997);
  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "#171b20");
  bg.addColorStop(0.45, "#0a0c10");
  bg.addColorStop(1, "#283036");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 2600; i += 1) {
    ctx.fillStyle = `rgba(238, 243, 244, ${0.018 + random() * 0.028})`;
    ctx.fillRect(random() * width, random() * height, random() * 1.8, random() * 1.8);
  }

  if (variant === "lume-light-sheet") {
    const light = ctx.createRadialGradient(width * 0.5, height * 0.32, 20, width * 0.5, height * 0.32, width * 0.48);
    light.addColorStop(0, "rgba(159, 247, 235, 0.42)");
    light.addColorStop(1, "rgba(159, 247, 235, 0)");
    ctx.fillStyle = light;
    ctx.fillRect(0, 0, width, height);
    fillRoundRect(ctx, width * 0.2, height * 0.58, width * 0.6, height * 0.2, 34, "rgba(232, 237, 240, 0.16)", "rgba(232, 237, 240, 0.35)");
    fillRoundRect(ctx, width * 0.28, height * 0.22, width * 0.44, height * 0.38, 180, "rgba(232, 237, 240, 0.14)", "rgba(159, 247, 235, 0.48)");
    for (let row = 0; row < 8; row += 1) {
      for (let col = 0; col < 7; col += 1) {
        ctx.beginPath();
        ctx.arc(width * (0.36 + col * 0.047), height * (0.31 + row * 0.032), 4.5, 0, Math.PI * 2);
        ctx.fillStyle = row % 2 ? "rgba(159, 247, 235, 0.42)" : "rgba(238, 243, 244, 0.62)";
        ctx.fill();
      }
    }
    ctx.strokeStyle = "rgba(238, 243, 244, 0.28)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width * 0.12, height * 0.8);
    ctx.lineTo(width * 0.88, height * 0.8);
    ctx.stroke();
  }

  if (variant === "lume-clinic-room") {
    ctx.fillStyle = "#dfe5e7";
    ctx.fillRect(0, 0, width, height);
    const wall = ctx.createLinearGradient(0, 0, width, height);
    wall.addColorStop(0, "#edf1f2");
    wall.addColorStop(1, "#a9b3b7");
    ctx.fillStyle = wall;
    ctx.fillRect(0, 0, width, height * 0.66);
    ctx.fillStyle = "#737f85";
    ctx.fillRect(0, height * 0.66, width, height * 0.34);
    fillRoundRect(ctx, width * 0.1, height * 0.52, width * 0.52, height * 0.13, 34, "#f1f4f4", "#98a5aa");
    fillRoundRect(ctx, width * 0.17, height * 0.42, width * 0.26, height * 0.08, 24, "#eef2f3", "#a3adb1");
    fillRoundRect(ctx, width * 0.72, height * 0.26, width * 0.18, height * 0.36, 18, "#c7d0d3", "#879397");
    ctx.fillStyle = "#11161b";
    ctx.fillRect(width * 0.755, height * 0.31, width * 0.11, height * 0.12);
    ctx.strokeStyle = "rgba(53, 215, 199, 0.72)";
    ctx.lineWidth = 3;
    ctx.strokeRect(width * 0.77, height * 0.335, width * 0.08, height * 0.055);
    fillRoundRect(ctx, width * 0.68, height * 0.62, width * 0.26, height * 0.09, 18, "#e3e8ea", "#8d9a9f");
    ctx.strokeStyle = "rgba(9, 10, 13, 0.14)";
    for (let x = 0; x < width; x += width / 8) {
      ctx.beginPath();
      ctx.moveTo(x, height * 0.66);
      ctx.lineTo(x + width * 0.12, height);
      ctx.stroke();
    }
  }

  if (variant === "lume-parameter-review") {
    fillRoundRect(ctx, width * 0.18, height * 0.12, width * 0.64, height * 0.66, 26, "#10151a", "rgba(232, 237, 240, 0.36)");
    fillRoundRect(ctx, width * 0.24, height * 0.19, width * 0.52, height * 0.3, 16, "#05080b", "rgba(159, 247, 235, 0.32)");
    ctx.strokeStyle = "rgba(159, 247, 235, 0.54)";
    ctx.lineWidth = 2;
    for (let i = 0; i < 7; i += 1) {
      ctx.beginPath();
      ctx.moveTo(width * 0.29, height * (0.27 + i * 0.028));
      ctx.lineTo(width * (0.38 + random() * 0.3), height * (0.27 + i * 0.028));
      ctx.stroke();
    }
    for (let i = 0; i < 5; i += 1) {
      ctx.beginPath();
      ctx.arc(width * (0.31 + i * 0.095), height * 0.6, 28, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(232, 237, 240, 0.42)";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(width * (0.31 + i * 0.095), height * 0.6, 9, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(159, 247, 235, 0.42)";
      ctx.fill();
    }
    fillRoundRect(ctx, width * 0.03, height * 0.62, width * 0.24, height * 0.12, 50, "#d8dcdd", "rgba(9, 10, 13, 0.18)");
  }

  if (variant === "lume-handset-calibration") {
    const skin = ctx.createLinearGradient(0, height * 0.52, width, height);
    skin.addColorStop(0, "#7f6658");
    skin.addColorStop(0.5, "#b38f7f");
    skin.addColorStop(1, "#d3aa96");
    ctx.fillStyle = skin;
    ctx.fillRect(0, height * 0.54, width, height * 0.46);
    fillRoundRect(ctx, width * 0.15, height * 0.12, width * 0.68, height * 0.32, 34, "#cfd7da", "#eef3f4");
    fillRoundRect(ctx, width * 0.28, height * 0.35, width * 0.44, height * 0.14, 42, "#e9eef0", "#98a5aa");
    ctx.fillStyle = "rgba(159, 247, 235, 0.28)";
    ctx.fillRect(width * 0.35, height * 0.49, width * 0.3, height * 0.08);
    ctx.strokeStyle = "rgba(238, 243, 244, 0.5)";
    ctx.lineWidth = 2;
    for (let i = 0; i < 8; i += 1) {
      ctx.beginPath();
      ctx.moveTo(width * (0.18 + i * 0.08), height * 0.63);
      ctx.lineTo(width * (0.3 + i * 0.07), height * 0.84);
      ctx.stroke();
    }
  }

  if (variant === "lume-macro-texture") {
    const skin = ctx.createLinearGradient(0, 0, width, height);
    skin.addColorStop(0, "#9a7465");
    skin.addColorStop(0.48, "#c29482");
    skin.addColorStop(1, "#e0b29d");
    ctx.fillStyle = skin;
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < 520; i += 1) {
      const x = random() * width;
      const y = random() * height;
      ctx.strokeStyle = `rgba(245, 230, 219, ${0.18 + random() * 0.28})`;
      ctx.lineWidth = 1 + random() * 2.2;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + (random() - 0.5) * 90, y + (random() - 0.5) * 90);
      ctx.stroke();
    }
    for (let i = 0; i < 420; i += 1) {
      ctx.beginPath();
      ctx.arc(random() * width, random() * height, 1 + random() * 2.6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(72, 45, 40, ${0.1 + random() * 0.18})`;
      ctx.fill();
    }
  }
};

const LumeGeneratedCanvas = ({ src, alt, className = "" }) => {
  const canvasRef = useRef(null);
  const variant = getCanvasVariant(src);

  useEffect(() => {
    if (!variant || !canvasRef.current) return;
    drawLumeCanvas(canvasRef.current, variant);
  }, [variant]);

  if (!variant) {
    return <img src={src} alt={alt} loading="lazy" draggable="false" />;
  }

  return <canvas ref={canvasRef} className={className} role="img" aria-label={alt} />;
};

const LumeImage = ({ src, alt, className = "" }) => (
  <div className={`lume-image ${className}`}>
    <LumeGeneratedCanvas src={src} alt={alt} />
  </div>
);

const LumeCta = ({ href, children, variant = "primary", className = "" }) => (
  <a className={`lume-cta lume-cta-${variant} ${className}`} href={href}>
    <span>{children}</span>
    <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
  </a>
);

const LumeHero = () => (
  <section className="lume-hero" id="lume-top">
    <div className="lume-hero-copy">
      <p className="lume-kicker">Private diagnostic skin atelier</p>
      <h1>Skin plans under clinical light.</h1>
      <p className="lume-hero-text">
        Lume Vale maps glow, pigment, acne marks, hair and subtle refinement before treatment is booked.
      </p>
      <div className="lume-hero-actions">
        <LumeCta href={getWhatsAppUrl(LUME_VALE_CONCERNS[6].message)}>WhatsApp private consult</LumeCta>
        <LumeCta href="#lume-diagnostics" variant="secondary">Explore treatments</LumeCta>
      </div>
    </div>

    <div className="lume-hero-stage" aria-label="LED skin-light diagnostic environment">
      <LumeImage src={LUME_VALE_IMAGES.hero} alt="LED light mask in a quiet skin treatment room" className="lume-hero-image" />
      <div className="lume-hero-panel">
        <div>
          <span>Review lens</span>
          <strong>Light / texture / tolerance</strong>
        </div>
        <div>
          <span>Access</span>
          <strong>Private consult first</strong>
        </div>
      </div>
    </div>
  </section>
);

const LumeDiagnosticTheatre = () => {
  const [activeId, setActiveId] = useState("pigmentation");
  const active = LUME_VALE_CONCERNS.find((concern) => concern.id === activeId) ?? LUME_VALE_CONCERNS[0];

  return (
    <section className="lume-section lume-diagnostic" id="lume-diagnostics">
      <div className="lume-section-heading">
        <p className="lume-kicker">Diagnostic theatre</p>
        <h2>Choose the concern, then read the plan.</h2>
      </div>

      <div className="lume-diagnostic-grid">
        <div className="lume-concern-selector" aria-label="Select a skin concern">
          {LUME_VALE_CONCERNS.map((concern) => (
            <button
              className={`lume-concern-row ${activeId === concern.id ? "is-active" : ""}`}
              key={concern.id}
              type="button"
              onClick={() => setActiveId(concern.id)}
            >
              <span>{concern.label}</span>
              <small>{concern.short}</small>
            </button>
          ))}
        </div>

        <div className="lume-planning-surface">
          <div className="lume-scan-media">
            <LumeImage src={LUME_VALE_IMAGES.scanDevice} alt="Clinical device interface used for treatment setting review" />
            <div className="lume-scan-reticle" aria-hidden="true"></div>
          </div>
          <div className="lume-plan-readout">
            <div className="lume-readout-title">
              <ScanLine size={22} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <span>Active concern</span>
                <strong>{active.label}</strong>
              </div>
            </div>
            <dl>
              <div>
                <dt>Scan inputs</dt>
                <dd>{active.scan}</dd>
              </div>
              <div>
                <dt>Planning route</dt>
                <dd>{active.plan}</dd>
              </div>
              <div>
                <dt>Typical timeline</dt>
                <dd>{active.timeline}</dd>
              </div>
              <div>
                <dt>Prep note</dt>
                <dd>{active.prep}</dd>
              </div>
            </dl>
            <LumeCta href={getWhatsAppUrl(active.message)} className="lume-plan-cta">Send this intent</LumeCta>
          </div>
        </div>
      </div>
    </section>
  );
};

const LumeComparison = () => {
  const [position, setPosition] = useState(48);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef(null);

  const updatePosition = (clientX) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(8, Math.min(92, next)));
  };

  const handlePointerDown = (event) => {
    setDragging(true);
    event.currentTarget.setPointerCapture?.(event.pointerId);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event) => {
    if (!dragging) return;
    updatePosition(event.clientX);
  };

  const stopDrag = () => setDragging(false);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((value) => Math.max(8, value - 4));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((value) => Math.min(92, value + 4));
    }
    if (event.key === "Home") {
      event.preventDefault();
      setPosition(8);
    }
    if (event.key === "End") {
      event.preventDefault();
      setPosition(92);
    }
  };

  return (
    <section className="lume-section lume-reveal-section">
      <div className="lume-section-heading">
        <p className="lume-kicker">Tactile reveal</p>
        <h2>Not before-after theatre. A concern-to-plan overlay.</h2>
      </div>

      <div
        className={`lume-comparison ${dragging ? "is-dragging" : ""}`}
        ref={frameRef}
        style={{ "--lume-reveal": `${position}%` }}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        onPointerLeave={stopDrag}
      >
        <LumeGeneratedCanvas src={LUME_VALE_IMAGES.skinMacro} alt="Macro skin texture before diagnostic planning overlay" />
        <div className="lume-comparison-plan">
          <LumeGeneratedCanvas src={LUME_VALE_IMAGES.skinMacro} alt="Macro skin texture with diagnostic planning overlay" />
          <div className="lume-plan-overlay" aria-hidden="true">
            <span className="lume-zone zone-one">pigment cluster</span>
            <span className="lume-zone zone-two">barrier watch</span>
            <span className="lume-zone zone-three">texture field</span>
          </div>
        </div>
        <button
          className="lume-reveal-handle"
          type="button"
          role="slider"
          aria-label="Reveal diagnostic plan overlay"
          aria-valuemin={8}
          aria-valuemax={92}
          aria-valuenow={Math.round(position)}
          onPointerDown={handlePointerDown}
          onKeyDown={handleKeyDown}
        >
          <SlidersHorizontal size={18} strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>
      <p className="lume-reveal-note">
        Drag or use arrow keys. The overlay explains planning zones and does not claim a treatment result.
      </p>
    </section>
  );
};

const LumeIntentRouter = () => (
  <section className="lume-section lume-router">
    <div className="lume-section-heading">
      <p className="lume-kicker">Treatment intent router</p>
      <h2>Send the clinic the right first sentence.</h2>
    </div>
    <div className="lume-router-list">
      {LUME_VALE_CONCERNS.map((concern, index) => (
        <a className="lume-router-row" href={getWhatsAppUrl(concern.message)} key={concern.id}>
          <span className="lume-router-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="lume-router-label">{concern.label}</span>
          <span className="lume-router-copy">{concern.short}</span>
          <ChevronRight size={20} strokeWidth={1.6} aria-hidden="true" />
        </a>
      ))}
    </div>
  </section>
);

const LumeConsultationPath = () => (
  <section className="lume-section lume-path">
    <div className="lume-path-media">
      <LumeImage src={LUME_VALE_IMAGES.clinicRoom} alt="Private sterile aesthetic clinic room prepared for consultation" />
    </div>
    <div className="lume-path-copy">
      <p className="lume-kicker">Private consultation path</p>
      <h2>Scan, plan, treat, maintain.</h2>
      <div className="lume-path-steps">
        {LUME_VALE_PRIVATE_LEDGER.map((step) => (
          <div className="lume-path-step" key={step.index}>
            <span>{step.index}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LumeProof = () => (
  <section className="lume-section lume-proof">
    {[
      ["Privacy", "Photos and history are used for clinical planning, not public proof walls.", Lock],
      ["Clinician review", "Suitability, contraindications, and downtime are checked before procedures.", ShieldCheck],
      ["Realistic outcomes", "Progress is framed by intervals, maintenance, and aftercare.", Check],
    ].map(([title, copy, Icon]) => (
      <div className="lume-proof-item" key={title}>
        <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>
    ))}
  </section>
);

const LumeFinalCta = () => (
  <section className="lume-final">
    <div>
      <p className="lume-kicker">Quiet first step</p>
      <h2>Ask for a private skin plan.</h2>
    </div>
    <LumeCta href={getWhatsAppUrl(LUME_VALE_CONCERNS[6].message)}>WhatsApp Lume Vale</LumeCta>
  </section>
);

const LumeValePage = ({ site }) => (
  <div className="app-root lume-root" data-site={site.id}>
    <div className="lume-noise"></div>
    <Nav site={site} />
    <main>
      <LumeHero />
      <LumeDiagnosticTheatre />
      <LumeComparison />
      <LumeIntentRouter />
      <LumeConsultationPath />
      <LumeProof />
      <LumeFinalCta />
    </main>
    <footer className="lume-footer">
      <p>{site.copy.footer.text}</p>
    </footer>
  </div>
);

const getInitialSitePreset = () => {
  if (typeof window === 'undefined') {
    return getSitePreset();
  }

  return getSelectedSitePreset(window.location.search);
};

export default function App() {
  const site = getInitialSitePreset();

  if (site.id === "lume-vale") {
    return <LumeValePage site={site} />;
  }

  return (
    <div className="app-root" data-site={site.id}>
      <div className="grain"></div>
      <TechnicalOverlay />
      <Nav site={site} />
      <main>
        <HeroArtifact site={site} />
        <SceneStance site={site} />
        <SceneExhibit site={site} />
        <StudioTrustLedger site={site} />
        <IntakeProtocolPanel site={site} />
        <SceneThreshold site={site} />
      </main>
      <footer style={{ padding: '5rem 0', textAlign: 'center', opacity: 0.3 }}>
        <div className="container">
          <p className="mono">© {new Date().getFullYear()} {site.copy.footer.text}</p>
        </div>
      </footer>
    </div>
  );
}
