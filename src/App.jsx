import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck, Activity, Zap, Search, Heart, PenTool, Maximize, Crown, ArrowUpRight
} from 'lucide-react';
import { STUDIO_INFO, CONSULTATION_OPTIONS, REASSURANCES, CONCEPT_WALL } from './data/demoData';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from './lib/whatsapp';
import { transitions } from './lib/motion';

const IconMap = {
  PenTool: <PenTool size={16} />,
  Maximize: <Maximize size={16} />,
  Crown: <Crown size={16} />,
  ShieldCheck: <ShieldCheck size={16} />,
  Activity: <Activity size={16} />,
  Zap: <Zap size={16} />,
  Search: <Search size={16} />,
  Heart: <Heart size={16} />,
};

const Hero = () => (
  <section className="hero-poster">
    <div className="poster-bg">
      <img src={STUDIO_INFO.heroImage} alt="Obsidian Primary" className="poster-img-primary" />
      <motion.div
        className="poster-img-secondary-wrap"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <img src={STUDIO_INFO.secondaryHeroImage} alt="Obsidian Detail" className="poster-img-secondary" />
      </motion.div>
    </div>

    <div className="editorial-marker left">PREMIUM CRAFT</div>
    <div className="editorial-marker right">STATUS // ACCEPTING REQUESTS</div>

    <div className="poster-content">
      <motion.div
        className="poster-top"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={transitions.editorial}
      >
        <div className="poster-brand">
          <div className="brand-main">
            <span>OBSIDIAN</span>
            <span className="ink-accent">INK STUDIO</span>
          </div>
          <div className="brand-badge">APPOINTMENT ONLY // KOREGAON PARK</div>
        </div>
        <div className="poster-sub">{STUDIO_INFO.tagline}</div>
      </motion.div>

      <div className="poster-center">
        <div className="poster-control-header">
          <div className="poster-control-label">Protocol Entry</div>
          <div className="trust-pill"><ShieldCheck size={10} /> Hospital Grade</div>
        </div>
        <motion.div
          className="protocol-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitions.mechanical, delay: 0.5 }}
        >
          <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.IDEA)} className="protocol-node">
            <span>Send My Tattoo Idea</span>
            <span className="node-num">[01]</span>
          </a>
          <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.CONSULTATION)} className="protocol-node">
            <span>Check Availability</span>
            <span className="node-num">[02]</span>
          </a>
          <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.FINE_LINE)} className="protocol-node">
            <span>Ask Fine-Line Price</span>
            <span className="node-num">[03]</span>
          </a>
          <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.REFERENCE)} className="protocol-node">
            <span>Share Reference</span>
            <span className="node-num">[04]</span>
          </a>
          <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.COVER_UP)} className="protocol-node">
            <span>Ask Cover-Up Question</span>
            <span className="node-num">[05]</span>
          </a>
        </motion.div>
      </div>

      <div className="poster-bottom">
        <div className="location-marker">
          <div className="marker-dot" />
          <div className="marker-text">
            <b>{STUDIO_INFO.location}</b>
            <span>Pune, India</span>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span>Scroll to Explore</span>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="app-root">
      <Hero />

      <main>
        {/* Pathway Strips */}
        <section className="editorial-panel">
          <div className="container">
            <header className="panel-header">
              <span className="panel-index">PRT_02</span>
              <h2 className="panel-title">Consultation<br />Pathways</h2>
            </header>
          </div>

          <div className="pathway-strips">
            {CONSULTATION_OPTIONS.map((path, i) => (
              <motion.a
                key={i}
                href={getWhatsAppUrl(WHATSAPP_MESSAGES[path.whatsappKey])}
                className={`pathway-strip ${i === 0 ? 'featured' : ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="strip-media">
                  <img src={path.image} alt={path.title} />
                </div>
                <div className="strip-overlay">
                  <div className="strip-top">
                    <span className="strip-tag">Pathway_{i+1}</span>
                    <div className="trust-pill"><Zap size={10} /> Bespoke</div>
                  </div>
                  <h3 className="strip-title">{path.title}</h3>
                  <div className="strip-info">
                    <div className="info-row"><b>FOR:</b> {path.forWho}</div>
                    <div className="info-row"><b>SEND:</b> {path.whatToSend}</div>
                    <div className="info-row"><b>NEXT:</b> {path.whatHappensNext}</div>
                  </div>
                  <div className="strip-action">
                    <span>INITIATE CONCIERGE</span>
                    <ArrowUpRight size={20} color="var(--accent-color)" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Concept Wall - Reference Spread */}
        <section className="editorial-panel" style={{ background: '#080808' }}>
          <div className="container">
            <header className="panel-header">
              <span className="panel-index">REF_03</span>
              <h2 className="panel-title">Studio<br />Reference</h2>
            </header>
          </div>

          <div className="reference-spread">
            <div className="spread-grid">
              {CONCEPT_WALL.map((item, i) => (
                <motion.div
                  key={i}
                  className="spread-item"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...transitions.snappy, delay: i * 0.1 }}
                >
                  <img src={item.image} alt={item.label} className="spread-img" />
                  <div className="spread-caption">
                    <span className="caption-tag">{item.category}</span>
                    <div className="caption-title">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Operational Specs - Reassurance */}
        <section className="editorial-panel">
          <div className="container">
            <header className="panel-header">
              <span className="panel-index">SPEC_04</span>
              <h2 className="panel-title">Operational<br />Security</h2>
            </header>

            <div className="spec-list">
              {REASSURANCES.map((item, i) => (
                <motion.div
                  key={i}
                  className="spec-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="spec-head">
                    <span className="spec-icon">{IconMap[item.icon]}</span>
                    <h4>{item.q}</h4>
                  </div>
                  <p>{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="private-invite">
          <div className="container">
            <div className="invite-badge"><Activity size={14} /> 24/7 Recovery Support</div>
            <h2 className="invite-title">Join the<br />Obsidian Story</h2>
            <motion.a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.IDEA)}
              className="btn-primary-poster"
              whileTap={{ scale: 0.96 }}
            >
              Start Your Piece
            </motion.a>

            <div className="invite-options">
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.CONSULTATION)} className="option-link">Availability</a>
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.COVER_UP)} className="option-link">Cover-Up Review</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p className="footer-stamp">© {new Date().getFullYear()} OBSIDIAN INK STUDIO • KOREGAON PARK • PUNE</p>
        </div>
      </footer>
    </div>
  );
}
