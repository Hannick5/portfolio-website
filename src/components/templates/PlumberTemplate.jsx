import { useState } from 'react';

const services = [
  { icon: '🚨', title: 'Urgence fuite', desc: 'Coupure eau, tuyau percé, dégât des eaux.', badge: 'Urgence 24/7' },
  { icon: '🚿', title: 'Salle de bain', desc: 'Rénovation complète ou réparation ciblée.', badge: 'Devis gratuit' },
  { icon: '🔥', title: 'Chaudière & radiateurs', desc: 'Entretien, dépannage, remplacement.', badge: 'Certifié RGE' },
  { icon: '🌡️', title: 'Climatisation', desc: 'Installation et maintenance clim réversible.', badge: '' },
  { icon: '🚽', title: 'Sanitaires', desc: 'WC bouché, lavabo, baignoire, ballon d\'eau.', badge: '' },
  { icon: '🏗️', title: 'Rénovation', desc: 'Travaux de plomberie pour constructions neuves.', badge: '' },
];

export default function PlumberTemplate({ project }) {
  const [activeSection, setActiveSection] = useState('accueil');
  const [form, setForm] = useState({ nom: '', tel: '', type: '', message: '' });
  const [sent, setSent] = useState(false);
  const { primaryColor, accentColor, name, tagline } = project;

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Top urgency bar */}
      <div style={{ background: '#dc2626', color: '#fff', textAlign: 'center', padding: '7px', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
        🚨 URGENCE PLOMBERIE 24h/24 — 06 98 76 54 32
      </div>

      <nav style={{ backgroundColor: primaryColor, padding: '13px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <div style={{ color: accentColor, fontWeight: 800, fontSize: 18 }}>🔧 {name}</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {['accueil', 'services', 'devis'].map(item => (
            <button key={item} onClick={() => setActiveSection(item)}
              style={{ background: activeSection === item ? accentColor : 'rgba(255,255,255,0.1)', color: activeSection === item ? primaryColor : '#fff', border: 'none', padding: '7px 16px', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer', textTransform: 'capitalize' }}>
              {item}
            </button>
          ))}
        </div>
      </nav>

      <div style={{ flex: 1, overflow: 'auto', background: '#f0f9ff' }}>
        {activeSection === 'accueil' && (
          <div>
            <div style={{ background: `linear-gradient(135deg, ${primaryColor} 0%, #1e3a5f 100%)`, padding: '65px 40px', textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: 72, marginBottom: 16 }}>🔧</div>
              <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 10 }}>{name}</h1>
              <p style={{ fontSize: 17, opacity: 0.85, marginBottom: 32 }}>{tagline}</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
                <a href="tel:0698765432" style={{ background: '#dc2626', color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 800, fontSize: 15, display: 'inline-block' }}>
                  📞 Urgence — Appeler
                </a>
                <button onClick={() => setActiveSection('devis')}
                  style={{ background: accentColor, color: primaryColor, border: 'none', padding: '14px 32px', borderRadius: 8, fontWeight: 800, fontSize: 15, cursor: 'pointer' }}>
                  Devis gratuit
                </button>
              </div>
            </div>
            <div style={{ padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
              {[{ icon: '⚡', val: '30 min', label: 'Intervention max' }, { icon: '✅', val: 'Certifié RGE', label: 'Professionnel' }, { icon: '💰', val: 'Devis gratuit', label: 'Sans engagement' }, { icon: '🛡️', val: '10 ans', label: 'Garantie travaux' }].map((s, i) => (
                <div key={i} style={{ background: '#fff', padding: 20, borderRadius: 10, textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: 26, marginBottom: 6 }}>{s.icon}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: primaryColor }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'services' && (
          <div style={{ padding: 40 }}>
            <h2 style={{ color: primaryColor, fontSize: 28, marginBottom: 8, textAlign: 'center' }}>Nos Interventions</h2>
            <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 32 }}>Tous corps d'état de la plomberie</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {services.map((s, i) => (
                <div key={i} style={{ background: '#fff', padding: 24, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderTop: `3px solid ${accentColor}` }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 32 }}>{s.icon}</span>
                    {s.badge && <span style={{ background: primaryColor, color: accentColor, fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 10 }}>{s.badge}</span>}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: '#1e293b', marginBottom: 6 }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: '#64748b' }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'devis' && (
          <div style={{ padding: 40, maxWidth: 520, margin: '0 auto' }}>
            <h2 style={{ color: primaryColor, fontSize: 28, marginBottom: 8, textAlign: 'center' }}>Demande de devis</h2>
            <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 28 }}>Gratuit — Réponse sous 1h</p>
            {sent ? (
              <div style={{ background: '#fff', borderRadius: 12, padding: 40, textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                <p style={{ color: '#166534', fontWeight: 700, fontSize: 18 }}>Demande envoyée !</p>
                <p style={{ color: '#4ade80', marginTop: 8 }}>Nous vous contactons dans l'heure.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }}
                style={{ background: '#fff', padding: 32, borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                {[['nom', 'Nom complet', 'text'], ['tel', 'Téléphone', 'tel']].map(([f, l, t]) => (
                  <div key={f} style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: '#374151', fontSize: 14 }}>{l}</label>
                    <input type={t} required value={form[f]} onChange={e => setForm({ ...form, [f]: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', border: '2px solid #e5e7eb', borderRadius: 8, fontSize: 14, outline: 'none' }} />
                  </div>
                ))}
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: '#374151', fontSize: 14 }}>Type d'intervention</label>
                  <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} required
                    style={{ width: '100%', padding: '10px 14px', border: '2px solid #e5e7eb', borderRadius: 8, fontSize: 14, background: '#fff', outline: 'none' }}>
                    <option value="">Choisissez...</option>
                    {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: '#374151', fontSize: 14 }}>Description du problème</label>
                  <textarea rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
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
