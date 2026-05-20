import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, ChevronRight, PenTool, Maximize, Crown, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { STUDIO_INFO, CONSULTATION_OPTIONS, REASSURANCES, TRUST_CARDS, CONCEPT_WALL } from './data/demoData';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from './lib/whatsapp';
import { transitions, variants } from './lib/motion';

const IconMap = {
  PenTool: <PenTool size={20} />,
  Maximize: <Maximize size={20} />,
  Crown: <Crown size={20} />,
};

export default function App() {
  return (
    <div className="app-container">
      {/* Editorial Hero */}
      <section className="hero">
        <div className="container hero-content">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitions.smooth, delay: 0.1 }}
            className="hero-tagline"
          >
            {STUDIO_INFO.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitions.smooth, delay: 0.2 }}
          >
            Obsidian<br />Ink Studio
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hero-location"
          >
            <MapPin size={14} /> {STUDIO_INFO.location}
          </motion.div>

          {/* Premium Decision Dock */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...transitions.smooth, delay: 0.5 }}
            className="decision-dock"
          >
            <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.IDEA)} className="intent-chip">Send My Tattoo Idea</a>
            <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.CONSULTATION)} className="intent-chip">Check Availability</a>
            <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.FINE_LINE)} className="intent-chip">Ask Fine-Line Price</a>
            <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.REFERENCE)} className="intent-chip">Share Reference</a>
            <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.COVER_UP)} className="intent-chip">Ask Cover-Up Question</a>
          </motion.div>
        </div>

        {/* Floating Accent Panel (Cinematic Layer) */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="hero-accent-line"
        />
      </section>

      <main className="container">
        {/* Consultation Options */}
        <section className="section">
          <div className="section-header">
            <span className="section-subtitle">Entry Points</span>
            <h2>The Consultation</h2>
          </div>
          <div className="grid">
            {CONSULTATION_OPTIONS.map((option, index) => (
              <motion.a
                key={index}
                href={getWhatsAppUrl(WHATSAPP_MESSAGES[option.whatsappKey])}
                className="premium-card"
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div className="card-icon">
                  {IconMap[option.icon]}
                </div>
                <h3>{option.title}</h3>
                <p className="card-desc">{option.description}</p>

                <div className="card-meta">
                  <div className="meta-block">
                    <span className="card-meta-label">Intent</span>
                    <div className="card-meta-value">{option.forWho}</div>
                  </div>

                  <div className="meta-block">
                    <span className="card-meta-label">What to Send</span>
                    <div className="card-meta-value">{option.whatToSend}</div>
                  </div>

                  <div className="meta-block highlighted">
                    <span className="card-meta-label">Next Step</span>
                    <div className="card-meta-value next-step-value">
                      {option.whatHappensNext} <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Reassurance & Trust */}
        <section className="section reassurance-section">
          <div className="trust-bar">
            {TRUST_CARDS.map((stat, i) => (
              <div key={i} className="trust-stat">
                <span className="value">{stat.value}</span>
                <span className="label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="reassurance-grid">
            {REASSURANCES.map((item, i) => (
              <motion.div
                key={i}
                className="reassurance-card"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="reassurance-header">
                  <ShieldCheck size={16} className="reassurance-icon" />
                  <h4>{item.q}</h4>
                </div>
                <p>{item.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CSS-Driven Concept Wall / Studio Board */}
        <section className="section">
          <div className="section-header">
            <span className="section-subtitle">Visual Story</span>
            <h2>Concept Wall</h2>
          </div>
          <div className="studio-board">
            {CONCEPT_WALL.map((item, i) => (
              <motion.div
                key={i}
                className={`board-panel panel-${i}`}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="panel-content">
                  <div className="panel-header">
                    <span className="category">{item.category}</span>
                    <span className="mood">{item.mood}</span>
                  </div>
                  <h3>{item.label}</h3>
                  <div className="panel-details">
                    <div className="detail-item">
                      <span className="detail-label">Note</span>
                      <span className="detail-value">{item.placementNote}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Spec</span>
                      <span className="detail-value">{item.detail}</span>
                    </div>
                  </div>
                  <div className="style-tags">
                    {item.styleTags.map((tag, j) => (
                      <span key={j} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final Intent-Specific WhatsApp CTA */}
        <section className="section final-cta-section">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cta-content">
              <span className="cta-subtitle">Ready to Begin?</span>
              <h2>Start Your Story</h2>
              <p>Direct access to our lead artist. High-priority response for custom work.</p>

              <div className="cta-actions">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.IDEA)}
                  className="btn btn-primary"
                >
                  <MessageCircle size={18} />
                  Send My Tattoo Idea
                </motion.a>

                <div className="cta-secondary">
                  <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.CONSULTATION)} className="secondary-link">
                    Check Availability
                  </a>
                  <span className="divider">•</span>
                  <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.COVER_UP)} className="secondary-link">
                    Ask Cover-Up Question
                  </a>
                </div>
              </div>
            </div>
            <div className="cta-footer-marker">
              <CheckCircle2 size={14} /> Licensed & Sterile Studio
            </div>
          </motion.div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-line" />
          <p className="copyright">© {new Date().getFullYear()} {STUDIO_INFO.name}</p>
          <p className="footer-location">{STUDIO_INFO.niche} • {STUDIO_INFO.location}</p>
        </div>
      </footer>
    </div>
  );
}
