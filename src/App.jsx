import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle, MapPin, ChevronRight, PenTool, Maximize, Crown,
  ArrowUpRight, ShieldCheck, CheckCircle2, Activity, Zap, Search, Heart
} from 'lucide-react';
import { STUDIO_INFO, CONSULTATION_OPTIONS, REASSURANCES, TRUST_CARDS, CONCEPT_WALL } from './data/demoData';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from './lib/whatsapp';
import { transitions, variants } from './lib/motion';

const IconMap = {
  PenTool: <PenTool size={20} />,
  Maximize: <Maximize size={20} />,
  Crown: <Crown size={20} />,
  ShieldCheck: <ShieldCheck size={18} />,
  Activity: <Activity size={18} />,
  Zap: <Zap size={18} />,
  Search: <Search size={18} />,
  Heart: <Heart size={18} />,
};

export default function App() {
  return (
    <div className="app-container">
      {/* Editorial Hero */}
      <section className="hero">
        <div className="container hero-layout">
          <div className="hero-text">
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
              className="hero-location-bar"
            >
              <div className="location-chip">
                <MapPin size={12} /> {STUDIO_INFO.location}
              </div>
              <div className="availability-chip">
                <span className="pulse-dot"></span> Appointment Only
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="hero-cta-group"
            >
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.IDEA)} className="btn btn-primary hero-btn">
                <MessageCircle size={18} />
                Start My Tattoo Story
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...transitions.smooth, delay: 0.3 }}
          >
            <div className="media-panel">
              <img src={STUDIO_INFO.heroImage} alt="Premium Tattoo Studio" className="hero-img" />
              <div className="media-overlay"></div>

              <motion.div
                className="floating-card"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...transitions.soft, delay: 0.7 }}
              >
                <div className="stat-row">
                  <span className="stat-val">100%</span>
                  <span className="stat-label">Sterile Environment</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Premium Decision Dock (Floating Overlay Effect) */}
        <div className="decision-dock-wrapper">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitions.smooth, delay: 0.6 }}
              className="decision-dock"
            >
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.IDEA)} className="intent-chip">Send My Tattoo Idea</a>
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.CONSULTATION)} className="intent-chip">Check Availability</a>
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.FINE_LINE)} className="intent-chip">Ask Fine-Line Price</a>
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.REFERENCE)} className="intent-chip">Share Reference</a>
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.COVER_UP)} className="intent-chip">Ask Cover-Up Question</a>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="container">
        {/* Consultation Options */}
        <section className="section">
          <div className="section-header">
            <span className="section-subtitle">The Pathways</span>
            <h2>Curated Consultations</h2>
          </div>
          <div className="grid">
            {CONSULTATION_OPTIONS.map((option, index) => (
              <motion.a
                key={index}
                href={getWhatsAppUrl(WHATSAPP_MESSAGES[option.whatsappKey])}
                className="consultation-card"
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="consult-img-slot">
                  <img src={option.image} alt={option.title} className="consult-img" />
                  <div className="consult-icon-badge">
                    {IconMap[option.icon]}
                  </div>
                </div>
                <div className="consult-content">
                  <h3>{option.title}</h3>
                  <p className="consult-desc">{option.description}</p>

                  <div className="consult-meta">
                    <div className="meta-item">
                      <span className="meta-label">For</span>
                      <div className="meta-value">{option.forWho}</div>
                    </div>

                    <div className="meta-item highlighted">
                      <span className="meta-label">Next Step</span>
                      <div className="meta-value next-step">
                        {option.whatHappensNext} <ArrowUpRight size={14} />
                      </div>
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
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="reassurance-header">
                  <div className="reassurance-icon">
                    {IconMap[item.icon]}
                  </div>
                  <h4>{item.q}</h4>
                </div>
                <p>{item.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Visual Story Board (Concept Wall) */}
        <section className="section">
          <div className="section-header">
            <span className="section-subtitle">Aesthetic Identity</span>
            <h2>Concept Board</h2>
          </div>
          <div className="studio-board">
            {CONCEPT_WALL.map((item, i) => (
              <motion.div
                key={i}
                className={`board-item item-${i}`}
                whileInView={{ opacity: 1, scale: 1, rotate: (i % 2 === 0 ? -1 : 1) }}
                initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="board-card">
                  <img src={item.image} alt={item.label} className="board-img" />
                  <div className="board-overlay">
                    <div className="board-header">
                      <span className="category">{item.category}</span>
                      <span className="mood">{item.mood}</span>
                    </div>
                    <h3>{item.label}</h3>
                    <div className="board-meta">
                      <div className="meta-line">
                        <span className="label">Note</span>
                        <span className="val">{item.placementNote}</span>
                      </div>
                      <div className="meta-line">
                        <span className="label">Spec</span>
                        <span className="val">{item.detail}</span>
                      </div>
                    </div>
                    <div className="board-tags">
                      {item.styleTags.map((tag, j) => (
                        <span key={j} className="tag">{tag}</span>
                      ))}
                    </div>
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
              <span className="cta-subtitle">Secure Your Session</span>
              <h2>Start Your Piece</h2>
              <p>Direct communication with our lead artist for bespoke designs and availability.</p>

              <div className="cta-actions">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.IDEA)}
                  className="btn btn-white"
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
              <CheckCircle2 size={14} /> Certified Luxury Studio • Pune
            </div>
          </motion.div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-line" />
          <p className="copyright">© {new Date().getFullYear()} {STUDIO_INFO.name}</p>
          <p className="footer-meta">{STUDIO_INFO.niche} • {STUDIO_INFO.location}</p>
        </div>
      </footer>
    </div>
  );
}
