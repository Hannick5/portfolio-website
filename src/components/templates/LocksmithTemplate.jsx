import { useState } from 'react';

const services = [
  { icon: '🚪', title: 'Ouverture de porte', desc: 'Claquée, coincée, perdu vos clés ? On arrive.', price: 'Dès 49€' },
  { icon: '🔒', title: 'Changement de serrure', desc: 'Remplacement toutes marques, toutes gammes.', price: 'Dès 89€' },
  { icon: '🛡️', title: 'Porte blindée', desc: 'Installation et renforcement de portes blindées.', price: 'Sur devis' },
  { icon: '🔑', title: 'Double de clé', desc: 'Reproduction rapide en boutique ou sur place.', price: 'Dès 5€' },
  { icon: '🏢', title: 'Serrure pro', desc: 'Sécurisation locaux commerciaux et bureaux.', price: 'Sur devis' },
  { icon: '⚡', title: 'Urgence 24/7', desc: 'Intervention garantie en moins de 20 minutes.', price: 'Dès 79€' },
];

export default function LocksmithTemplate({ project }) {
  const [activeSection, setActiveSection] = useState('accueil');
  const [formData, setFormData] = useState({ nom: '', tel: '', message: '' });
  const [sent, setSent] = useState(false);
  const { primaryColor, accentColor, name, tagline } = project;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Urgency banner */}
      <div style={{ background: accentColor, color: primaryColor, textAlign: 'center', padding: '8px', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
        ⚡ Intervention rapide 24h/24 — 7j/7 — Appelez le 06 12 34 56 78
      </div>

      {/* Nav */}
      <nav style={{ backgroundColor: primaryColor, padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <div style={{ color: accentColor, fontWeight: 800, fontSize: 20 }}>🔑 {name}</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {['accueil', 'services', 'contact'].map(item => (
            <button key={item} onClick={() => setActiveSection(item)}
              style={{ background: activeSection === item ? accentColor : 'rgba(255,255,255,0.1)', color: activeSection === item ? primaryColor : '#fff', border: 'none', padding: '8px 18px', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer', textTransform: 'capitalize' }}>
              {item}
            </button>
          ))}
        </div>
      </nav>

      <div style={{ flex: 1, overflow: 'auto', backgroundColor: '#f8fafc' }}>
        {activeSection === 'accueil' && (
          <div>
            <div style={{ background: `linear-gradient(135deg, ${primaryColor} 0%, #334155 100%)`, padding: '60px 40px', color: '#fff' }}>
              <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
                <div style={{ fontSize: 72, marginBottom: 16 }}>🔐</div>
                <h1 style={{ fontSize: 38, fontWeight: 800, marginBottom: 12 }}>{name}</h1>
                <p style={{ fontSize: 18, opacity: 0.85, marginBottom: 32 }}>{tagline}</p>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={() => setActiveSection('services')}
                    style={{ background: accentColor, color: primaryColor, border: 'none', padding: '14px 36px', borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>
                    Nos services
                  </button>
                  <button onClick={() => setActiveSection('contact')}
                    style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid rgba(255,255,255,0.4)', padding: '14px 36px', borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>
                    Devis gratuit
                  </button>
                </div>
              </div>
            </div>
            <div style={{ padding: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
              {[{ icon: '⏱️', stat: '< 20 min', label: 'Délai intervention' }, { icon: '✅', stat: '2500+', label: 'Clients satisfaits' }, { icon: '🏅', stat: '15 ans', label: "D'expérience" }].map((s, i) => (
                <div key={i} style={{ background: '#fff', padding: 28, borderRadius: 12, textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: primaryColor }}>{s.stat}</div>
                  <div style={{ fontSize: 13, color: '#666', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'services' && (
          <div style={{ padding: 40 }}>
            <h2 style={{ color: primaryColor, fontSize: 28, marginBottom: 8, textAlign: 'center' }}>Nos Services</h2>
            <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 32 }}>Devis gratuit — Sans engagement</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {services.map((s, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderLeft: `4px solid ${accentColor}` }}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{s.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: '#1e293b', marginBottom: 6 }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: '#64748b', marginBottom: 12 }}>{s.desc}</div>
                  <div style={{ background: primaryColor, color: accentColor, display: 'inline-block', padding: '4px 12px', borderRadius: 20, fontSize: 13, fontWeight: 700 }}>{s.price}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div style={{ padding: 40, maxWidth: 520, margin: '0 auto' }}>
            <h2 style={{ color: primaryColor, fontSize: 28, marginBottom: 8, textAlign: 'center' }}>Demande de devis</h2>
            <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 28 }}>Gratuit & sans engagement</p>
            {sent ? (
              <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 12, padding: 32, textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
                <p style={{ color: '#166534', fontWeight: 700, fontSize: 18 }}>Message envoyé !</p>
                <p style={{ color: '#4ade80', marginTop: 8 }}>Nous vous rappelons dans les 30 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 32, borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                {[['nom', 'Votre nom', 'text'], ['tel', 'Votre téléphone', 'tel']].map(([field, label, type]) => (
                  <div key={field} style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: '#374151', fontSize: 14 }}>{label}</label>
                    <input type={type} value={formData[field]} onChange={e => setFormData({ ...formData, [field]: e.target.value })} required
                      style={{ width: '100%', padding: '10px 14px', border: '2px solid #e5e7eb', borderRadius: 8, fontSize: 14, outline: 'none' }} />
                  </div>
                ))}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: '#374151', fontSize: 14 }}>Votre problème</label>
                  <textarea value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} rows={3}
                    style={{ width: '100%', padding: '10px 14px', border: '2px solid #e5e7eb', borderRadius: 8, fontSize: 14, outline: 'none', resize: 'vertical' }} />
                </div>
                <button type="submit" style={{ background: primaryColor, color: '#fff', border: 'none', width: '100%', padding: '14px', borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>
                  Envoyer ma demande →
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
