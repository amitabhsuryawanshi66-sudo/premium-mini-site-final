import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { STUDIO_INFO, EXHIBIT_ARCHIVE, PRIVATE_LEDGER, INTAKE_PROTOCOL } from './data/demoData';
import { getWhatsAppUrl } from './lib/whatsapp';

const Reveal = ({ children, className = "", stagger = 0, amount = 0.1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: stagger }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Nav = () => (
  <nav>
    <div className="logo">Obsidian</div>
    <div className="mono">Pune — KP</div>
  </nav>
);

const SceneEntry = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  return (
    <section className="scene-entry canvas">
      <div className="ghost-type" style={{ top: '10vh', left: '-5vw' }}>MATERIAL</div>

      <Reveal className="entry-visual" amount={0.01}>
        <motion.img
          src={STUDIO_INFO.heroImage}
          alt="Material Shimmer"
          style={{ y, scale }}
        />
      </Reveal>

      <h1 className="hero-title">Obsidian</h1>

      <div className="entry-protocol">
        {INTAKE_PROTOCOL.map((item, i) => (
          <a key={item.id} href={getWhatsAppUrl(item.message)} className="protocol-tile">
            <span className="mono">0{i+1}</span>
            <span className="label">{item.label}</span>
          </a>
        ))}
      </div>

      <Reveal className="entry-footer">
        <div className="mono">Studio Access: KP / Pune</div>
        <div className="mono" style={{ color: 'var(--fg)', borderBottom: '1px solid var(--accent)' }}>
          By Appointment Only
        </div>
      </Reveal>
    </section>
  );
};

const SceneStance = () => (
  <section className="scene-stance canvas">
    <div className="ghost-type" style={{ bottom: '10vh', right: '-10vw', fontSize: '20vw' }}>TECHNE</div>
    <span className="annotation" style={{ top: '25vh', left: '10vw' }}>[Technical Stance]</span>

    <Reveal className="stance-text">
      The artist leads the dialogue. Pigment as a <span style={{ color: 'var(--accent)' }}>technical instrument</span>.
    </Reveal>

    <Reveal className="stance-sub" stagger={0.2}>
      Obsidian Ink is a sanctuary for style-conscious collectors. We treat tattooing as an anatomical dialogue, mapping every composition to the unique architecture of the body with absolute restraint.
    </Reveal>

    <span className="annotation" style={{ bottom: '20vh', right: '15vw' }}>[Pune 2024]</span>
  </section>
);

const SceneArchive = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [1000, 3000], [0, -150]);
  const y2 = useTransform(scrollY, [1000, 3000], [0, 150]);

  return (
    <section className="scene-archive canvas">
      <div className="exhibit-header">
        <div className="mono">Exhibit 01 — Selected Works</div>
      </div>

      <div className="exhibit-flow">
        {EXHIBIT_ARCHIVE.map((item, i) => {
          const isWhisper1 = item.type === 'whisper-1';
          const isWhisper2 = item.type === 'whisper-2';
          const y = isWhisper1 ? y1 : isWhisper2 ? y2 : 0;

          return (
            <Reveal key={i} className={`plate plate-${item.type}`} amount={0.05} stagger={i * 0.1}>
              <motion.div className="plate-box" style={{
                aspectRatio: item.type === 'scream' ? '16/9' : item.type === 'anchor' ? '16/8' : item.type === 'whisper-1' ? '1/1' : '4/5',
                y
              }}>
                <div className="plate-tag">{item.meta}</div>
                <img src={item.image} alt={item.title} />
              </motion.div>
              <div className="plate-meta">
                <span className="mono">{item.title}</span>
                {item.location && <span className="mono">{item.location}</span>}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

const SceneRitual = () => (
  <section className="scene-ritual canvas">
    <div className="ghost-type" style={{ top: '20vh', left: '20vw', fontSize: '15vw' }}>RITUAL</div>

    <div className="ledger">
      <div className="ledger-line"></div>

      {PRIVATE_LEDGER.map((item, i) => (
        <div key={i} className="ledger-row">
          <Reveal amount={0.2}>
            <span className="mono">{item.index}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Reveal>
        </div>
      ))}
    </div>
  </section>
);

const SceneInquiry = () => (
  <section className="scene-inquiry canvas">
    <div className="inquiry-content">
      <Reveal>
        <h2 className="inquiry-title">Initiate the<br />Dialogue.</h2>
      </Reveal>

      <div className="inquiry-grid">
        <Reveal stagger={0.1}>
          <a href={getWhatsAppUrl(INTAKE_PROTOCOL[0].message)} className="inquiry-portal">
            <span>Start a private concept review</span>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </Reveal>

        <Reveal stagger={0.2}>
          <a href={getWhatsAppUrl(INTAKE_PROTOCOL[1].message)} className="inquiry-portal">
            <span>Check studio availability</span>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </Reveal>
      </div>

      <Reveal className="inquiry-context" stagger={0.3}>
        <div className="mono">Appointment-Only Access</div>
        <div className="mono">Reference Review Required</div>
        <div className="mono">KP / Pune Studio</div>
      </Reveal>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="app-root">
      <div className="grain"></div>
      <Nav />
      <main>
        <SceneEntry />
        <SceneStance />
        <SceneArchive />
        <SceneRitual />
        <SceneInquiry />
      </main>
      <footer style={{ padding: '5rem 0', textAlign: 'center', opacity: 0.3 }}>
        <div className="container">
          <p className="mono">© {new Date().getFullYear()} OBSIDIAN INK STUDIO • KOREGAON PARK • PUNE</p>
        </div>
      </footer>
    </div>
  );
}
