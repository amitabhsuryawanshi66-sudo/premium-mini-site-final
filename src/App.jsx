import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, ChevronRight, PenTool, Maximize, Crown, ArrowUpRight } from 'lucide-react';
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

          {/* High-Impact Decision Dock */}
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
          style={{
            position: 'absolute',
            bottom: '20%',
            right: 0,
            width: '40%',
            height: '2px',
            background: 'var(--accent-color)',
            originX: 1
          }}
        />
      </section>

      <main className="container">
        {/* Trust Bar */}
        <section className="trust-bar">
          {TRUST_CARDS.map((stat, i) => (
            <div key={i} className="trust-stat">
              <span className="value">{stat.value}</span>
              <span className="label">{stat.label}</span>
            </div>
          ))}
        </section>

        {/* Consultation Options */}
        <section className="section">
          <h2 style={{ marginBottom: '2.5rem', fontSize: '1.5rem' }}>The Consultation</h2>
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
                <div style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
                  {IconMap[option.icon]}
                </div>
                <h3>{option.title}</h3>
                <p>{option.description}</p>

                <div className="card-meta">
                  <span className="card-meta-label">For</span>
                  <div className="card-meta-value" style={{ marginBottom: '1rem' }}>{option.intent}</div>

                  <span className="card-meta-label">Next Step</span>
                  <div className="card-meta-value" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary-accent)' }}>
                    {option.next} <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Visual Story Board (Concept Wall) */}
        <section className="section">
          <h2 style={{ marginBottom: '2.5rem', fontSize: '1.5rem' }}>Aesthetic Identity</h2>
          <div className="concept-wall">
            {CONCEPT_WALL.map((item, i) => (
              <motion.div
                key={i}
                className="concept-panel"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="category">{item.category}</span>
                <span className="label">{item.label}</span>
                <p style={{ fontSize: '0.7rem', color: '#555', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Reassurance (Objections) */}
        <section className="section">
          <h2 style={{ marginBottom: '2.5rem', fontSize: '1.5rem' }}>The Commitment</h2>
          <div className="reassurance-grid">
            {REASSURANCES.map((item, i) => (
              <motion.div
                key={i}
                className="reassurance-item"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final WhatsApp CTA */}
        <section className="section" style={{ paddingBottom: '8rem' }}>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.CONSULTATION)}
            className="btn btn-primary"
          >
            <MessageCircle size={18} style={{ marginRight: '10px' }} />
            Book Private Consultation
          </motion.a>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} {STUDIO_INFO.name}</p>
          <p style={{ marginTop: '0.5rem', opacity: 0.5 }}>{STUDIO_INFO.niche} • Pune</p>
        </div>
      </footer>
    </div>
  );
}
