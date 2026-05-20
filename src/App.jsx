import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle, MapPin, ArrowUpRight, ShieldCheck,
  Activity, Zap, Search, Heart, PenTool, Maximize, Crown, ChevronRight
} from 'lucide-react';
import { STUDIO_INFO, CONSULTATION_OPTIONS, REASSURANCES, CONCEPT_WALL } from './data/demoData';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from './lib/whatsapp';
import { transitions, variants } from './lib/motion';

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

const BrandMark = () => (
  <motion.div
    className="brand-mark"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={transitions.editorial}
  >
    <span className="brand-obsidian">OBSIDIAN</span>
    <span className="brand-ink">INK STUDIO</span>
    <span className="brand-studio">APPOINTMENT ONLY • KOREGAON PARK</span>
  </motion.div>
);

const ControlPanel = () => (
  <motion.div
    className="control-panel-wrapper"
    variants={variants.slideUp}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    transition={transitions.mechanical}
  >
    <div className="control-panel">
      <div className="panel-header">
        <span className="panel-title">Concierge Control v1.0</span>
        <div className="status-indicator">
          <span className="blink-dot"></span>
          Accepting Requests
        </div>
      </div>
      <div className="intent-grid">
        <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.IDEA)} className="control-btn">
          Send My Tattoo Idea <span>[01]</span>
        </a>
        <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.CONSULTATION)} className="control-btn">
          Check Availability <span>[02]</span>
        </a>
        <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.FINE_LINE)} className="control-btn">
          Ask Fine-Line Price <span>[03]</span>
        </a>
        <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.REFERENCE)} className="control-btn">
          Share Reference <span>[04]</span>
        </a>
        <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.COVER_UP)} className="control-btn">
          Ask Cover-Up Question <span>[05]</span>
        </a>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const featuredPathway = CONSULTATION_OPTIONS[0];
  const secondaryPathways = CONSULTATION_OPTIONS.slice(1);

  return (
    <div className="app-container">
      <section className="hero container">
        <BrandMark />

        <div className="hero-collage">
          <motion.div
            className="collage-main"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ ...transitions.editorial, delay: 0.2 }}
          >
            <img src={STUDIO_INFO.heroImage} alt="Studio" className="collage-img" />
            <div className="hero-overlay-text">
              <div className="editorial-tag">Premium Craft</div>
            </div>
          </motion.div>

          <motion.div
            className="collage-secondary"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ ...transitions.soft, delay: 0.5 }}
          >
            <img src={STUDIO_INFO.secondaryHeroImage} alt="Process" className="collage-img" />
          </motion.div>
        </div>

        <ControlPanel />
      </section>

      <main className="container">
        {/* Consultation Strips */}
        <section className="section">
          <div className="section-header">
            <span className="section-subtitle">Consultation Pathways</span>
            <h2>The Journey</h2>
          </div>

          <div className="pathways-container">
            {/* Featured Strip */}
            <motion.a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES[featuredPathway.whatsappKey])}
              className="featured-pathway pathway-strip"
              whileTap={{ scale: 0.99 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={transitions.mechanical}
            >
              <div className="strip-media">
                <img src={featuredPathway.image} alt={featuredPathway.title} />
              </div>
              <div className="strip-content">
                <span className="pathway-num">SEQUENCE_01</span>
                <h3>{featuredPathway.title}</h3>
                <p className="consult-desc">{featuredPathway.description}</p>

                <div className="strip-meta">
                  <div className="meta-row">
                    <span className="label">For</span>
                    <span className="val">{featuredPathway.forWho}</span>
                  </div>
                  <div className="meta-row">
                    <span className="label">Next Step</span>
                    <span className="val">{featuredPathway.whatHappensNext} <ArrowUpRight size={14} /></span>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Secondary Grid */}
            <div className="secondary-pathways">
              {secondaryPathways.map((path, i) => (
                <motion.a
                  key={i}
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES[path.whatsappKey])}
                  className="mini-pathway"
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...transitions.mechanical, delay: i * 0.1 }}
                >
                  <div className="mini-media">
                    <img src={path.image} alt={path.title} />
                  </div>
                  <div className="mini-content">
                    <h3>{path.title}</h3>
                    <div className="meta-row" style={{ marginTop: '1rem', border: 'none', padding: 0 }}>
                      <span className="label">Flow</span>
                      <span className="val" style={{ fontSize: '0.7rem' }}>{path.whatHappensNext}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Physical Board */}
        <section className="section">
          <div className="section-header">
            <span className="section-subtitle">Visual Identity</span>
            <h2>Studio Board</h2>
          </div>

          <div className="board-container">
            <div className="physical-board">
              {CONCEPT_WALL.map((item, i) => (
                <motion.div
                  key={i}
                  className="board-scrap"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...transitions.snappy, delay: i * 0.1 }}
                >
                  <img src={item.image} alt={item.label} className="scrap-img" />
                  <div className="scrap-overlay">
                    <span className="scrap-label">{item.category}</span>
                    <h3 className="scrap-title">{item.label}</h3>
                    <div className="scrap-note">{item.placementNote}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reassurance Panel */}
        <section className="section">
          <div className="section-header">
            <span className="section-subtitle">Standard of Care</span>
            <h2>Professional Reassurance</h2>
          </div>

          <div className="reassurance-panel">
            {REASSURANCES.map((item, i) => (
              <motion.div
                key={i}
                className="reassurance-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ color: 'var(--accent-color)' }}>{IconMap[item.icon]}</span>
                  <h4>{item.q}</h4>
                </div>
                <p>{item.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final Invite */}
        <section className="section">
          <motion.div
            className="final-invite"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="invite-bg-text">OBSIDIAN</div>
            <span className="section-subtitle">Private Session</span>
            <h2>Start Your Piece</h2>
            <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.IDEA)} className="cta-mechanical">
              <MessageCircle size={18} />
              Begin Consultation
            </a>

            <div className="secondary-actions">
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.CONSULTATION)} className="action-link">Check Dates</a>
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.COVER_UP)} className="action-link">Cover-Up Query</a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="container" style={{ paddingBottom: '4rem', textAlign: 'center', opacity: 0.3 }}>
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em' }}>© {new Date().getFullYear()} OBSIDIAN INK STUDIO • KOREGAON PARK</p>
      </footer>
    </div>
  );
}
