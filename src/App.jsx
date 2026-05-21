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
  PenTool: <PenTool size={14} />,
  Maximize: <Maximize size={14} />,
  Crown: <Crown size={14} />,
  ShieldCheck: <ShieldCheck size={14} />,
  Activity: <Activity size={14} />,
  Zap: <Zap size={14} />,
  Search: <Search size={14} />,
  Heart: <Heart size={14} />,
};

const HeroPoster = () => (
  <section className="hero-poster">
    <div className="poster-bg">
      <img src={STUDIO_INFO.heroImage} alt="Obsidian Primary" className="poster-img-primary" />
      <motion.div
        className="poster-img-secondary-wrap"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <img src={STUDIO_INFO.secondaryHeroImage} alt="Obsidian Detail" className="poster-img-secondary" />
      </motion.div>
    </div>

    <div className="editorial-marker left">PREMIUM CRAFT</div>
    <div className="editorial-marker right">STATUS // ACCEPTING REQUESTS</div>

    <div className="poster-content">
      <motion.div
        className="poster-top"
        initial={{ opacity: 0, x: -20 }}
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
        <div className="poster-sub">PREMIUM TATTOO CONCIERGE</div>
      </motion.div>

      <div className="poster-center">
        <div className="poster-control-header">
          <div className="poster-control-label">Studio Protocol v1.2</div>
          <div className="trust-pill"><ShieldCheck size={10} /> Hospital Grade Sterile</div>
        </div>
        <motion.div
          className="poster-controls"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitions.mechanical, delay: 0.4 }}
        >
          <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.IDEA)} className="poster-btn">
            <span className="btn-label">Send My Tattoo Idea</span>
            <span className="btn-num">[01]</span>
          </a>
          <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.CONSULTATION)} className="poster-btn">
            <span className="btn-label">Check Availability</span>
            <span className="btn-num">[02]</span>
          </a>
          <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.FINE_LINE)} className="poster-btn">
            <span className="btn-label">Ask Fine-Line Price</span>
            <span className="btn-num">[03]</span>
          </a>
          <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.REFERENCE)} className="poster-btn">
            <span className="btn-label">Share Reference</span>
            <span className="btn-num">[04]</span>
          </a>
          <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.COVER_UP)} className="poster-btn">
            <span className="btn-label">Ask Cover-Up Question</span>
            <span className="btn-num">[05]</span>
          </a>
        </motion.div>
      </div>

      <div className="poster-bottom">
        <div className="location-marker">
          <div className="marker-dot" />
          <div className="marker-text">
            <b>Koregaon Park</b>
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
    <div className="app-container">
      <HeroPoster />

      <main>
        {/* Pathway Strips */}
        <section className="poster-panel">
          <div className="panel-header">
            <span className="panel-num">REF_02</span>
            <h2>Consultation<br />Protocols</h2>
          </div>

          <div className="protocol-strips">
            {CONSULTATION_OPTIONS.map((path, i) => (
              <motion.a
                key={i}
                href={getWhatsAppUrl(WHATSAPP_MESSAGES[path.whatsappKey])}
                className={`protocol-strip ${i === 0 ? 'featured' : ''}`}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="strip-bg">
                  <img src={path.image} alt={path.title} />
                </div>
                <div className="strip-content">
                  <div className="strip-top">
                    <div className="strip-label">Pathway_{i+1}</div>
                    <div className="strip-trust"><PenTool size={10} /> Bespoke Only</div>
                  </div>
                  <h3>{path.title}</h3>
                  <div className="strip-footer">
                    <div className="strip-meta">
                      <div className="meta-item"><b>FOR:</b> {path.forWho}</div>
                      <div className="meta-item"><b>SEND:</b> {path.whatToSend}</div>
                      <div className="meta-item"><b>NEXT:</b> {path.whatHappensNext}</div>
                    </div>
                    <div className="strip-action">
                      <span>OPEN CONCIERGE</span>
                      <ArrowUpRight size={18} color="var(--accent-color)" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Studio Board - Reference Spread */}
        <section className="poster-panel" style={{ background: '#080808' }}>
          <div className="panel-header">
            <span className="panel-num">REF_03</span>
            <h2>Studio<br />Reference</h2>
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
                  <div className="spread-overlay">
                    <span className="spread-tag">{item.category}</span>
                    <div className="spread-title">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs - Reassurance */}
        <section className="poster-panel">
          <div className="panel-header">
            <span className="panel-num">REF_04</span>
            <h2>Operational<br />Security</h2>
          </div>

          <div className="container">
            <div className="technical-spec">
              {REASSURANCES.map((item, i) => (
                <motion.div
                  key={i}
                  className="spec-row"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="spec-header">
                    <span className="spec-icon">{IconMap[item.icon]}</span>
                    <h4>{item.q}</h4>
                  </div>
                  <p>{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Private Invite */}
        <section className="private-invite">
          <div className="container">
            <span className="panel-num">REF_05</span>
            <div className="trust-integrated"><Zap size={14} /> 24/7 Healing Support Included</div>
            <h2>Join the<br />Obsidian Story</h2>
            <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.IDEA)} className="cta-poster">
              Start Your Piece
            </a>

            <div className="invite-footer">
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.CONSULTATION)} className="footer-link">Check Availability</a>
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.COVER_UP)} className="footer-link">Ask Cover-Up Question</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="container" style={{ padding: '4rem 1.5rem', opacity: 0.2, textAlign: 'center' }}>
        <p style={{ fontSize: '0.5rem', letterSpacing: '0.4em' }}>© {new Date().getFullYear()} OBSIDIAN INK STUDIO • KOREGAON PARK • PUNE</p>
      </footer>
    </div>
  );
}
