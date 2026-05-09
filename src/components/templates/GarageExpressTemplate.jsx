import { useState } from 'react';
import { Zap, Clock, CheckCircle, Phone, MapPin, ChevronRight, Settings } from 'lucide-react';
import { IMAGES } from '../../utils/images';

const SERVICES = [
  { title: 'Vidange Express', time: '30 min', price: '49€', hot: true },
  { title: 'Diagnostic', time: '20 min', price: '39€', hot: false },
  { title: 'Freins', time: '45 min', price: '79€', hot: false },
  { title: 'Pneus', time: '30 min', price: 'Dès 15€', hot: false },
  { title: 'Batterie', time: '15 min', price: '89€', hot: false },
  { title: 'Climatisation', time: '30 min', price: '59€', hot: false },
];

export default function GarageExpressTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [form, setForm] = useState({ nom: '', tel: '', immat: '', service: '' });
  const [sent, setSent] = useState(false);
  const { primaryColor, accentColor, name, tagline } = project;

  const nav = ['accueil', 'services', 'réserver', 'contact'];
  const dark = primaryColor;
  const orange = accentColor;
  const white = '#FFFFFF';

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"DM Sans", sans-serif', background: white, color: dark }}>

      {/* TOP STRIP */}
      <div style={{ background: orange, color: white, padding: '8px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0, fontSize: 13, fontWeight: 800 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Zap size={13} fill={white} />
          SANS RENDEZ-VOUS — RÉSULTAT EN 30 MIN
        </div>
        <a href="tel:0612345678" style={{ color: white, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
          <Phone size={13} /> 06 12 34 56 78
        </a>
      </div>

      {/* NAV */}
      <nav style={{ background: dark, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', height: 60, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ background: orange, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <Zap size={16} color={white} fill={white} />
            <span style={{ fontSize: 17, fontWeight: 900, color: white, letterSpacing: 1, textTransform: 'uppercase' }}>{name}</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 0 }}>
          {nav.map(s => (
            <button key={s} onClick={() => setSection(s)} style={{
              background: section === s ? orange : 'transparent',
              color: section === s ? white : 'rgba(255,255,255,0.6)',
              border: 'none', cursor: 'pointer',
              padding: '0 20px', height: 40, fontSize: 13, fontWeight: 700,
              letterSpacing: 1.5, textTransform: 'uppercase', transition: 'all 0.15s',
              fontFamily: '"DM Sans", sans-serif',
            }}>{s}</button>
          ))}
        </div>
        <button onClick={() => setSection('réserver')} style={{ background: orange, color: white, border: 'none', padding: '10px 22px', fontSize: 14, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, letterSpacing: 1, textTransform: 'uppercase', fontFamily: '"DM Sans", sans-serif' }}>
          RDV Express <ChevronRight size={14} />
        </button>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto', background: '#F8F8F8' }}>
        {section === 'accueil' && (
          <div>
            {/* HERO */}
            <div style={{ position: 'relative', height: 360, overflow: 'hidden' }}>
              <img src={IMAGES.garage.hero} alt="garage" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(105deg, ${dark}EE 40%, transparent 40%)` }} />
              <div style={{ position: 'absolute', inset: 0, padding: '52px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: orange, padding: '6px 16px', marginBottom: 20, width: 'fit-content' }}>
                  <Zap size={12} color={white} fill={white} />
                  <span style={{ color: white, fontSize: 12, fontWeight: 900, letterSpacing: 2, textTransform: 'uppercase' }}>Révision Express</span>
                </div>
                <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.05, margin: '0 0 12px', color: white, letterSpacing: -1, textTransform: 'uppercase' }}>
                  Votre voiture<br />
                  <span style={{ color: orange }}>prête en 30 min.</span>
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, margin: '0 0 32px', maxWidth: 380, lineHeight: 1.6 }}>{tagline}</p>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => setSection('réserver')} style={{ background: orange, color: white, border: 'none', padding: '13px 28px', fontSize: 15, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, letterSpacing: 1, textTransform: 'uppercase', fontFamily: '"DM Sans", sans-serif' }}>
                    <Zap size={14} fill={white} /> Prendre RDV
                  </button>
                  <button onClick={() => setSection('services')} style={{ background: white, color: dark, border: 'none', padding: '13px 28px', fontSize: 15, fontWeight: 700, cursor: 'pointer', letterSpacing: 1, textTransform: 'uppercase', fontFamily: '"DM Sans", sans-serif' }}>
                    Nos tarifs
                  </button>
                </div>
              </div>
            </div>

            {/* STATS */}
            <div style={{ background: dark, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
              {[['30 min', 'Durée moyenne'], ['0', 'RDV nécessaire'], ['Ouvert', 'Sam & Dim'], ['Toutes', 'Marques']].map(([val, lab], i) => (
                <div key={lab} style={{ padding: '18px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                  <div style={{ fontSize: 24, fontWeight: 900, color: orange, textTransform: 'uppercase' }}>{val}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 3, fontWeight: 600 }}>{lab}</div>
                </div>
              ))}
            </div>

            {/* SERVICES */}
            <div style={{ padding: '48px', background: white }}>
              <h2 style={{ fontSize: 32, fontWeight: 900, textTransform: 'uppercase', letterSpacing: -0.5, margin: '0 0 8px', color: dark }}>Services & Tarifs</h2>
              <div style={{ width: 48, height: 4, background: orange, marginBottom: 36 }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                {SERVICES.map(s => (
                  <div key={s.title} style={{ background: s.hot ? orange : '#F0F0F0', padding: '20px 20px', borderTop: s.hot ? 'none' : `3px solid ${orange}` }}>
                    <div style={{ display: 'flex', justify: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                      <Settings size={16} color={s.hot ? white : orange} />
                      {s.hot && <div style={{ fontSize: 10, fontWeight: 900, color: white, background: 'rgba(0,0,0,0.2)', padding: '2px 8px', letterSpacing: 1 }}>BESTSELLER</div>}
                    </div>
                    <div style={{ fontSize: 17, fontWeight: 800, color: s.hot ? white : dark, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 }}>{s.title}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Clock size={11} color={s.hot ? 'rgba(255,255,255,0.7)' : '#999'} />
                        <span style={{ fontSize: 12, color: s.hot ? 'rgba(255,255,255,0.7)' : '#999', fontWeight: 600 }}>{s.time}</span>
                      </div>
                      <div style={{ fontSize: 24, fontWeight: 900, color: s.hot ? white : orange }}>{s.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HOW IT WORKS */}
            <div style={{ background: '#F0F0F0', padding: '48px' }}>
              <h2 style={{ fontSize: 28, fontWeight: 900, textTransform: 'uppercase', letterSpacing: -0.5, margin: '0 0 32px', color: dark }}>Comment ça marche ?</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28 }}>
                {['Vous arrivez sans RDV', 'Notre tech diagnostic en 5 min', 'Votre voiture est prête'].map((step, i) => (
                  <div key={step} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ background: orange, color: white, width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 900, flexShrink: 0 }}>{i + 1}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: dark, paddingTop: 8 }}>{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {section === 'services' && (
          <div style={{ padding: '48px', background: white }}>
            <h2 style={{ fontSize: 36, fontWeight: 900, textTransform: 'uppercase', letterSpacing: -0.5, margin: '0 0 8px', color: dark }}>Tous les Services</h2>
            <div style={{ width: 48, height: 4, background: orange, marginBottom: 40 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {SERVICES.map(s => (
                <div key={s.title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid #F0F0F0' }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <div style={{ width: 40, height: 40, background: s.hot ? orange : '#F0F0F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Settings size={16} color={s.hot ? white : orange} />
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: dark, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 }}>{s.title}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Clock size={12} color="#999" />
                        <span style={{ fontSize: 12, color: '#999', fontWeight: 600 }}>Environ {s.time}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 26, fontWeight: 900, color: orange }}>{s.price}</div>
                    <div style={{ fontSize: 12, color: '#999', fontWeight: 600 }}>TTC</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'réserver' && (
          <div style={{ padding: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, background: white }}>
            <div>
              <h2 style={{ fontSize: 36, fontWeight: 900, textTransform: 'uppercase', letterSpacing: -0.5, margin: '0 0 8px', color: dark }}>Réserver</h2>
              <div style={{ width: 48, height: 4, background: orange, marginBottom: 28 }} />
              <p style={{ fontSize: 15, color: '#666', lineHeight: 1.7, marginBottom: 28 }}>
                Vous pouvez aussi venir directement sans rendez-vous. Nous vous accueillons du lundi au samedi de 8h à 18h30.
              </p>
              <img src={IMAGES.garage.interior} alt="garage" style={{ width: '100%', height: 200, objectFit: 'cover', marginBottom: 20 }} />
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <MapPin size={14} color={orange} />
                  <span style={{ fontSize: 13, color: '#555' }}>47 av. du Garage, Paris 20e</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Clock size={14} color={orange} />
                  <span style={{ fontSize: 13, color: '#555' }}>Lun–Sam 8h–18h30</span>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[{ label: 'Nom', key: 'nom' }, { label: 'Téléphone', key: 'tel' }, { label: 'Immatriculation', key: 'immat' }, { label: 'Service souhaité', key: 'service' }].map(f => (
                  <div key={f.key}>
                    <label style={{ fontSize: 12, fontWeight: 800, color: dark, letterSpacing: 1.5, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>{f.label}</label>
                    <input type="text" value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} style={{ width: '100%', border: `2px solid #EEE`, borderBottom: `2px solid ${orange}`, padding: '11px 14px', fontSize: 15, fontFamily: '"DM Sans", sans-serif', color: dark, boxSizing: 'border-box', outline: 'none', background: '#FAFAFA' }} />
                  </div>
                ))}
                {sent
                  ? <div style={{ background: '#F0FFF4', border: '2px solid #22C55E', color: '#166534', padding: '14px', textAlign: 'center', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    <CheckCircle size={16} /> RDV confirmé !
                  </div>
                  : <button onClick={() => setSent(true)} style={{ background: orange, color: white, border: 'none', padding: '14px 0', fontSize: 16, fontWeight: 900, cursor: 'pointer', letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: '"DM Sans", sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    <Zap size={16} fill={white} /> Confirmer le RDV
                  </button>
                }
              </div>
            </div>
          </div>
        )}

        {section === 'contact' && (
          <div style={{ padding: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, background: white }}>
            <div>
              <h2 style={{ fontSize: 36, fontWeight: 900, textTransform: 'uppercase', letterSpacing: -0.5, margin: '0 0 32px', color: dark }}>Contact</h2>
              {[{ Icon: Phone, val: '06 12 34 56 78' }, { Icon: Clock, val: 'Lun – Sam : 8h – 18h30' }, { Icon: MapPin, val: '47 avenue du Garage, Paris 20e' }].map(({ Icon, val }) => (
                <div key={val} style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 20 }}>
                  <div style={{ background: orange, padding: 10 }}><Icon size={16} color={white} /></div>
                  <span style={{ fontSize: 15, fontWeight: 600, color: dark }}>{val}</span>
                </div>
              ))}
            </div>
            <img src={IMAGES.garage.tools} alt="outils" style={{ width: '100%', height: 280, objectFit: 'cover' }} />
          </div>
        )}
      </div>
    </div>
  );
}
