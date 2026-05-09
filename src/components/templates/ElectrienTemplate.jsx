import { useState } from 'react';
import { Zap, Phone, Clock, Shield, CheckCircle, Cpu, Wifi, Home, ChevronRight, AlertTriangle } from 'lucide-react';
import { IMAGES } from '../../utils/images';

const SERVICES = [
  { Icon: Zap, title: 'Mise aux normes', desc: 'Tableau électrique, disjoncteurs, prises de terre. Conformité NF C 15-100.', price: 'Sur devis' },
  { Icon: AlertTriangle, title: 'Dépannage urgent', desc: 'Panne de courant, court-circuit, disjoncteur qui saute. Intervention en 1h.', price: 'Dès 79€', urgent: true },
  { Icon: Home, title: 'Rénovation électrique', desc: 'Redistribution des circuits, ajout de prises, câblage neuf.', price: 'Sur devis' },
  { Icon: Cpu, title: 'Tableau connecté', desc: 'Remplacement tableau vétuste, disjoncteurs différentiels, protection optimale.', price: 'Dès 390€' },
  { Icon: Wifi, title: 'Points lumineux', desc: 'Spots encastrés, LED, interrupteurs variateurs, éclairage architectural.', price: 'Dès 59€/point' },
  { Icon: Shield, title: 'Contrôle & diagnostic', desc: 'Bilan électrique complet, détection défauts, rapport certifié.', price: 'Dès 120€' },
];

const STATS = [
  { value: '24/7', label: 'Disponibilité' },
  { value: '<1h', label: 'Délai urgence' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '12ans', label: "D'expérience" },
];

export default function ElectrienTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [form, setForm] = useState({ nom: '', tel: '', type: '', message: '' });
  const { primaryColor, accentColor, name, tagline } = project;

  const nav = ['accueil', 'urgence', 'services', 'réalisations', 'contact'];

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"Barlow Condensed", sans-serif', background: primaryColor, color: '#fff' }}>

      {/* TOP URGENCE BANNER */}
      <div style={{ background: accentColor, color: '#000', padding: '7px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0, fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Zap size={14} fill="#000" />
          URGENCE ÉLECTRIQUE 24H/24 — 7J/7
        </div>
        <a href="tel:0612345678" style={{ color: '#000', textDecoration: 'none', fontWeight: 900, letterSpacing: 2, fontSize: 16 }}>01 23 45 67 89</a>
      </div>

      {/* NAV */}
      <nav style={{ background: 'rgba(255,255,255,0.05)', borderBottom: `2px solid ${accentColor}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', height: 52, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ background: accentColor, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)' }}>
            <Zap size={16} color="#000" fill="#000" />
          </div>
          <span style={{ fontSize: 20, fontWeight: 900, letterSpacing: 3, textTransform: 'uppercase', color: '#fff' }}>{name}</span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {nav.map(s => (
            <button key={s} onClick={() => setSection(s)} style={{
              background: section === s ? accentColor : 'transparent',
              color: section === s ? '#000' : 'rgba(255,255,255,0.7)',
              border: 'none', cursor: 'pointer',
              padding: '6px 14px', fontSize: 13, fontWeight: 700,
              letterSpacing: 1.5, textTransform: 'uppercase',
              clipPath: section === s ? 'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)' : 'none',
              transition: 'all 0.2s',
            }}>{s}</button>
          ))}
        </div>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {section === 'accueil' && (
          <div>
            {/* HERO — image avec overlay diagonal */}
            <div style={{ position: 'relative', height: 380, overflow: 'hidden' }}>
              <img src={IMAGES.electricien.hero} alt="électricien" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }} />
              {/* Diagonal overlay */}
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(105deg, ${primaryColor} 45%, transparent 45%)` }} />
              <div style={{ position: 'absolute', inset: 0, padding: '60px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ color: accentColor, fontSize: 13, fontWeight: 700, letterSpacing: 4, marginBottom: 16, textTransform: 'uppercase' }}>Électricien Certifié</div>
                <h1 style={{ fontSize: 56, fontWeight: 900, lineHeight: 1, letterSpacing: 2, textTransform: 'uppercase', margin: 0, maxWidth: 420 }}>{tagline}</h1>
                <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
                  <button style={{ background: accentColor, color: '#000', border: 'none', padding: '12px 28px', fontFamily: '"Barlow Condensed", sans-serif', fontSize: 15, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer', clipPath: 'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)' }}>
                    Urgence
                  </button>
                  <button onClick={() => setSection('services')} style={{ background: 'transparent', color: '#fff', border: `2px solid rgba(255,255,255,0.4)`, padding: '12px 28px', fontFamily: '"Barlow Condensed", sans-serif', fontSize: 15, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer' }}>
                    Nos services
                  </button>
                </div>
              </div>
            </div>

            {/* STATS BAR */}
            <div style={{ background: accentColor, display: 'flex', justifyContent: 'space-around', padding: '20px 48px' }}>
              {STATS.map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: '#000', letterSpacing: 2 }}>{s.value}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(0,0,0,0.6)', letterSpacing: 1, textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* SERVICES GRID */}
            <div style={{ padding: '48px 48px' }}>
              <h2 style={{ fontSize: 38, fontWeight: 900, letterSpacing: 3, textTransform: 'uppercase', margin: '0 0 32px', borderLeft: `4px solid ${accentColor}`, paddingLeft: 16 }}>Nos Interventions</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                {SERVICES.slice(0, 6).map(({ Icon, title, desc, price, urgent }) => (
                  <div key={title} style={{ background: urgent ? `rgba(${accentColor},0.1)` : 'rgba(255,255,255,0.05)', border: urgent ? `1px solid ${accentColor}` : '1px solid rgba(255,255,255,0.1)', padding: 20 }}>
                    <Icon size={24} color={accentColor} />
                    <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginTop: 12, marginBottom: 8 }}>{title}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, marginBottom: 12 }}>{desc}</div>
                    <div style={{ color: accentColor, fontWeight: 800, fontSize: 15 }}>{price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* WORK IMAGE STRIP */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: 220, padding: '0 48px 48px', gap: 16 }}>
              <img src={IMAGES.electricien.panel} alt="tableau" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <img src={IMAGES.electricien.work} alt="travail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        )}

        {section === 'urgence' && (
          <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 48px', textAlign: 'center' }}>
            <div style={{ color: accentColor, fontSize: 13, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 24 }}>Urgence Électrique</div>
            <div style={{ fontSize: 100, fontWeight: 900, lineHeight: 1, letterSpacing: 4, color: accentColor, textShadow: `0 0 60px ${accentColor}50` }}>01 23</div>
            <div style={{ fontSize: 100, fontWeight: 900, lineHeight: 1, letterSpacing: 4, color: accentColor, textShadow: `0 0 60px ${accentColor}50`, marginBottom: 24 }}>45 67 89</div>
            <div style={{ fontSize: 22, fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: 2, marginBottom: 48 }}>INTERVENTION EN MOINS D'UNE HEURE</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, width: '100%', maxWidth: 700 }}>
              {['Panne de courant', 'Court-circuit', 'Disjoncteur qui saute'].map((t, i) => (
                <div key={t} style={{ border: `1px solid ${accentColor}`, padding: '20px 16px', textAlign: 'center' }}>
                  <div style={{ color: accentColor, fontSize: 28, fontWeight: 900, marginBottom: 8 }}>0{i + 1}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>{t}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'services' && (
          <div style={{ padding: '48px' }}>
            <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: 3, textTransform: 'uppercase', margin: '0 0 8px' }}>Services</h2>
            <div style={{ width: 60, height: 4, background: accentColor, marginBottom: 40 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {SERVICES.map(({ Icon, title, desc, price }) => (
                <div key={title} style={{ border: '1px solid rgba(255,255,255,0.15)', padding: '28px 24px', display: 'flex', gap: 20, alignItems: 'flex-start', transition: 'border-color 0.2s' }}>
                  <div style={{ background: accentColor, padding: 10, flexShrink: 0 }}>
                    <Icon size={18} color="#000" />
                  </div>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>{title}</div>
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 12 }}>{desc}</div>
                    <div style={{ color: accentColor, fontWeight: 800, fontSize: 16 }}>{price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'réalisations' && (
          <div style={{ padding: '48px' }}>
            <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: 3, textTransform: 'uppercase', margin: '0 0 8px' }}>Réalisations</h2>
            <div style={{ width: 60, height: 4, background: accentColor, marginBottom: 40 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {[
                { img: IMAGES.electricien.panel, title: 'Mise aux normes tableau', lieu: 'Paris 18e', tag: 'Tableau électrique' },
                { img: IMAGES.electricien.work, title: 'Rénovation électrique complète', lieu: 'Levallois-Perret', tag: 'Rénovation' },
                { img: IMAGES.electricien.smart, title: 'Installation domotique', lieu: 'Neuilly-sur-Seine', tag: 'Domotique' },
                { img: IMAGES.electricien.hero, title: 'Câblage tertiaire', lieu: 'La Défense', tag: 'Tertiaire' },
              ].map(r => (
                <div key={r.title} style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
                  <img src={r.img} alt={r.title} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', filter: 'brightness(0.6)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                    <div style={{ color: accentColor, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>{r.tag}</div>
                    <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: 1 }}>{r.title}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{r.lieu}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'contact' && (
          <div style={{ padding: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: 3, textTransform: 'uppercase', margin: '0 0 8px' }}>Contact</h2>
              <div style={{ width: 60, height: 4, background: accentColor, marginBottom: 32 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[{ Icon: Phone, label: '01 23 45 67 89' }, { Icon: Clock, label: 'Lun – Sam : 7h30 – 20h • Urgences 24/7' }, { Icon: Shield, label: 'Certifié RGE Qualibat' }].map(({ Icon, label }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ background: accentColor, padding: 10 }}><Icon size={16} color="#000" /></div>
                    <span style={{ fontSize: 15, fontWeight: 600 }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {['nom', 'tel', 'message'].map(f => (
                  <div key={f}>
                    <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: accentColor, display: 'block', marginBottom: 6 }}>{f}</label>
                    {f === 'message'
                      ? <textarea rows={4} value={form[f]} onChange={e => setForm(p => ({ ...p, [f]: e.target.value }))} style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(255,255,255,0.2)`, color: '#fff', padding: '10px 12px', fontFamily: '"Barlow Condensed", sans-serif', fontSize: 15, resize: 'none', boxSizing: 'border-box' }} />
                      : <input type="text" value={form[f]} onChange={e => setForm(p => ({ ...p, [f]: e.target.value }))} style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(255,255,255,0.2)`, color: '#fff', padding: '10px 12px', fontFamily: '"Barlow Condensed", sans-serif', fontSize: 15, boxSizing: 'border-box' }} />
                    }
                  </div>
                ))}
                <button style={{ background: accentColor, color: '#000', border: 'none', padding: '14px 0', fontFamily: '"Barlow Condensed", sans-serif', fontSize: 16, fontWeight: 900, letterSpacing: 3, textTransform: 'uppercase', cursor: 'pointer' }}>
                  Envoyer ma demande
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
