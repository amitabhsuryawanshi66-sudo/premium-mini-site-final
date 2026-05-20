import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, PenTool, Maximize, Crown, ChevronRight } from 'lucide-react';
import { STUDIO_INFO, SERVICES, TRUST_CARDS, OBJECTIONS, STYLE_GALLERY } from './data/demoData';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from './lib/whatsapp';
import { transitions, variants } from './lib/motion';

const IconMap = {
  PenTool: <PenTool size={24} />,
  Maximize: <Maximize size={24} />,
  Crown: <Crown size={24} />,
};

export default function App() {
  return (
    <div className="app-container">
      {/* Cinematic Hero */}
      <section className="hero">
        <motion.div
          initial={variants.fadeIn.initial}
          animate={variants.fadeIn.animate}
          transition={transitions.smooth}
          className="container"
        >
          <h1>{STUDIO_INFO.name}</h1>
          <p>{STUDIO_INFO.tagline}</p>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.CONSULTATION)}
            className="btn btn-primary"
          >
            Start Your Story <ChevronRight size={18} />
          </motion.a>
        </motion.div>
      </section>

      <main className="container">
        {/* Intent Buttons */}
        <section className="section">
          <div className="grid">
            <motion.a
              whileTap={{ scale: 0.98 }}
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.ENQUIRY)}
              className="card btn-secondary"
              style={{ textAlign: 'center' }}
            >
               Direct Enquiry via WhatsApp
            </motion.a>
          </div>
        </section>

        {/* Services/Consultation Cards */}
        <section className="section">
          <h2>The Craft</h2>
          <motion.div
            className="grid"
            variants={variants.staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                className="card"
                variants={variants.fadeIn}
              >
                <div className="icon-wrap" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>
                  {IconMap[service.icon]}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Visual Story / Style Cards */}
        <section className="section">
          <h2>Our Aesthetic</h2>
          <div className="style-grid">
            {STYLE_GALLERY.map((style, index) => (
              <motion.div
                key={index}
                className="style-card"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
              >
                <img src={style.image} alt={style.label} />
                <div className="style-label">{style.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Proof/Trust Cards */}
        <section className="section">
          <div className="trust-grid">
            {TRUST_CARDS.map((card, index) => (
              <div key={index} className="trust-item">
                <span>{card.value}</span>
                <label>{card.label}</label>
              </div>
            ))}
          </div>
        </section>

        {/* Objection Cards */}
        <section className="section">
          <h2>Expertise</h2>
          <div className="grid">
            {OBJECTIONS.map((obj, index) => (
              <div key={index} className="card">
                <h3 style={{ fontSize: '0.9rem', color: 'var(--secondary-accent)' }}>{obj.q}</h3>
                <p style={{ fontSize: '0.9rem' }}>{obj.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final WhatsApp CTA */}
        <section className="section" style={{ textAlign: 'center' }}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.MEMBERSHIP)}
            className="btn btn-primary btn-large"
          >
            <MessageCircle size={20} style={{ marginRight: '8px' }} />
            Book Private Consultation
          </motion.a>
        </section>
      </main>

      <footer>
        <p>{STUDIO_INFO.location}</p>
        <p style={{ marginTop: '0.5rem' }}>Premium Mini Site — Clean Foundation</p>
      </footer>
    </div>
  );
}
