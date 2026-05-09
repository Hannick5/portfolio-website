import { useState } from 'react';
import { Wrench, Zap, Shield, Clock, Phone, MapPin, ChevronRight, CheckCircle, Settings } from 'lucide-react';
import { IMAGES } from '../../utils/images';

const SERVICES = [
  { title: 'Révision & Entretien', desc: 'Vidange, filtres, courroie de distribution. Devis transparent avant intervention.', price: 'Dès 89€', Icon: Settings },
  { title: 'Freinage', desc: 'Plaquettes, disques, liquide de frein. Contrôle gratuit inclus.', price: 'Dès 79€', Icon: Shield },
  { title: 'Diagnostic Électronique', desc: 'Lecture de codes défauts toutes marques, reset, réparation.', price: 'Dès 49€', Icon: Zap },
  { title: 'Embrayage & Boîte', desc: 'Remplacement embrayage, boîte automatique. Garantie 2 ans.', price: 'Sur devis', Icon: Wrench },
  { title: 'Pneumatiques', desc: 'Montage, équilibrage, permutation. Toutes marques disponibles.', price: 'Dès 15€/pneu', Icon: Settings },
  { title: 'Contrôle Technique', desc: 'Contre-visite, mise en conformité avant passage au CT.', price: 'Sur devis', Icon: CheckCircle },
];

export default function GarageTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [form, setForm] = useState({ nom: '', tel: '', marque: '', modele: '', type: '', message: '' });
  const [sent, setSent] = useState(false);
  const { primaryColor, accentColor, name, tagline } = project;

  const nav = ['accueil', 'services', 'réalisations', 'devis', 'contact'];

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"Rajdhani", sans-serif', background: '#F2F2F2', color: '#0D0D0D' }}>

      {/* TOP STRIP */}
      <div style={{ background: primaryColor, color: '#fff', padding: '7px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0, fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>
        <div style={{ display: 'flex', gap: 24 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Clock size={12} /> Lun–Sam 8h–18h30</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><MapPin size={12} /> 47 avenue du Garage, Paris 20e</span>
        </div>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Phone size={12} /> 01 43 00 99 88</span>
      </div>

      {/* NAV */}
      <nav style={{ background: primaryColor, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', height: 64, flexShrink: 0, position: 'relative' }}>
        {/* Red diagonal accent */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 4, background: accentColor }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ background: accentColor, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'skewX(-8deg)' }}>
            <Wrench size={20} color="#fff" />
          </div>
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: 3, color: '#fff', textTransform: 'uppercase', lineHeight: 1 }}>{name}</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: 2, textTransform: 'uppercase' }}>{tagline}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 2 }}>
          {nav.map(s => (
            <button key={s} onClick={() => setSection(s)} style={{
              background: section === s ? accentColor : 'transparent',
              color: '#fff',
              border: 'none', cursor: 'pointer',
              padding: '0 18px', height: 40, fontSize: 14, fontWeight: 700,
              letterSpacing: 1.5, textTransform: 'uppercase',
              fontFamily: '"Rajdhani", sans-serif',
              transform: section === s ? 'skewX(-8deg)' : 'none',
              transition: 'all 0.15s',
            }}>
              <span style={{ display: 'inline-block', transform: section === s ? 'skewX(8deg)' : 'none' }}>{s}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto' }}>

        {section === 'accueil' && (
          <div>
            {/* HERO */}
            <div style={{ position: 'relative', height: 380, overflow: 'hidden' }}>
              <img src={IMAGES.garage.hero} alt="garage" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} />
              {/* Diagonal dark overlay */}
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(110deg, ${primaryColor}EE 50%, transparent 50%)` }} />
              <div style={{ position: 'absolute', inset: 0, padding: '64px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <div style={{ height: 3, width: 40, background: accentColor }} />
                  <span style={{ color: accentColor, fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' }}>Garage Automobile</span>
                </div>
                <h1 style={{ fontSize: 58, fontWeight: 900, lineHeight: 1, letterSpacing: 2, textTransform: 'uppercase', margin: '0 0 8px', color: '#fff', maxWidth: 460 }}>
                  Entretien<br /><span style={{ color: accentColor }}>&amp; Réparation</span>
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, fontWeight: 500, marginBottom: 32, maxWidth: 360 }}>{tagline}</p>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => setSection('devis')} style={{ background: accentColor, color: '#fff', border: 'none', padding: '13px 32px', fontFamily: '"Rajdhani", sans-serif', fontSize: 16, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer', transform: 'skewX(-8deg)' }}>
                    <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }}>Devis gratuit</span>
                  </button>
                  <button onClick={() => setSection('services')} style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.4)', padding: '13px 32px', fontFamily: '"Rajdhani", sans-serif', fontSize: 16, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer' }}>
                    Nos services
                  </button>
                </div>
              </div>
            </div>

            {/* STATS BAR */}
            <div style={{ background: primaryColor, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 0 }}>
              {[['Toutes marques', 'Véhicules acceptés'], ['2 ans', 'Garantie pièces'], ['30min', 'Accueil sans RDV'], ['98%', 'Clients satisfaits']].map(([val, lab], i) => (
                <div key={lab} style={{ padding: '20px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                  <div style={{ fontSize: 26, fontWeight: 900, color: accentColor, letterSpacing: 2, textTransform: 'uppercase' }}>{val}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>{lab}</div>
                </div>
              ))}
            </div>

            {/* SERVICES GRID */}
            <div style={{ padding: '52px 52px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
                <h2 style={{ fontSize: 38, fontWeight: 900, letterSpacing: 3, textTransform: 'uppercase', margin: 0 }}>Nos Services</h2>
                <div style={{ height: 4, flex: 1, background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                {SERVICES.map(({ title, desc, price, Icon }) => (
                  <div key={title} style={{ background: '#fff', border: '1px solid #E5E5E5', padding: '24px 20px', cursor: 'pointer', transition: 'border-color 0.2s', borderTop: `3px solid ${accentColor}` }}>
                    <Icon size={22} color={accentColor} />
                    <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', margin: '12px 0 8px' }}>{title}</div>
                    <div style={{ fontSize: 13, color: '#666', lineHeight: 1.5, marginBottom: 14 }}>{desc}</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: accentColor }}>{price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE STRIP */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', height: 200, padding: '0 52px 52px', gap: 12 }}>
              <img src={IMAGES.garage.engine} alt="moteur" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <img src={IMAGES.garage.tools} alt="outils" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <img src={IMAGES.garage.interior} alt="atelier" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        )}

        {section === 'services' && (
          <div style={{ padding: '52px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
              <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: 3, textTransform: 'uppercase', margin: 0 }}>Services</h2>
              <div style={{ height: 4, flex: 1, background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {SERVICES.map(({ title, desc, price, Icon }) => (
                <div key={title} style={{ background: '#fff', border: '1px solid #E5E5E5', padding: '28px 24px', display: 'flex', gap: 20, alignItems: 'flex-start', borderLeft: `4px solid ${accentColor}` }}>
                  <Icon size={24} color={accentColor} style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>{title}</div>
                    <div style={{ fontSize: 14, color: '#666', lineHeight: 1.6, marginBottom: 12 }}>{desc}</div>
                    <div style={{ fontSize: 17, fontWeight: 800, color: accentColor }}>{price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'réalisations' && (
          <div style={{ padding: '52px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
              <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: 3, textTransform: 'uppercase', margin: 0 }}>Réalisations</h2>
              <div style={{ height: 4, flex: 1, background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { img: IMAGES.garage.engine, title: 'Révision moteur V8', marque: 'BMW Série 5', info: 'Remplacement distribution + joints' },
                { img: IMAGES.garage.body, title: 'Carrosserie réparée', marque: 'Renault Clio', info: 'Débosselage & peinture neuve' },
                { img: IMAGES.garage.tools, title: 'Diagnostic électronique', marque: 'Volkswagen Golf', info: 'Remplacement calculateur' },
                { img: IMAGES.garage.interior, title: 'Freinage complet', marque: 'Mercedes Classe A', info: 'Disques + plaquettes 4 roues' },
              ].map(r => (
                <div key={r.title} style={{ background: '#fff', overflow: 'hidden', border: '1px solid #E5E5E5' }}>
                  <img src={r.img} alt={r.title} style={{ width: '100%', height: 170, objectFit: 'cover', display: 'block' }} />
                  <div style={{ padding: '16px 20px' }}>
                    <div style={{ fontSize: 12, color: accentColor, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>{r.marque}</div>
                    <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>{r.title}</div>
                    <div style={{ fontSize: 13, color: '#666' }}>{r.info}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'devis' && (
          <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: 3, textTransform: 'uppercase', margin: '0 0 8px' }}>Devis</h2>
              <div style={{ height: 4, width: 60, background: accentColor, marginBottom: 28 }} />
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7, marginBottom: 28 }}>
                Remplissez ce formulaire, nous vous rappelons sous 2h pour vous donner un devis précis et sans surprise.
              </p>
              <img src={IMAGES.garage.hero} alt="garage" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { label: 'Votre nom', key: 'nom' },
                  { label: 'Téléphone', key: 'tel' },
                  { label: 'Marque du véhicule', key: 'marque' },
                  { label: 'Modèle', key: 'modele' },
                  { label: 'Type de prestation', key: 'type' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#333', display: 'block', marginBottom: 6 }}>{f.label}</label>
                    <input type="text" value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} style={{ width: '100%', border: '1px solid #DDD', borderLeft: `3px solid ${accentColor}`, padding: '10px 12px', fontFamily: '"Rajdhani", sans-serif', fontSize: 15, boxSizing: 'border-box', outline: 'none' }} />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#333', display: 'block', marginBottom: 6 }}>Description du problème</label>
                  <textarea rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} style={{ width: '100%', border: '1px solid #DDD', borderLeft: `3px solid ${accentColor}`, padding: '10px 12px', fontFamily: '"Rajdhani", sans-serif', fontSize: 15, resize: 'none', boxSizing: 'border-box', outline: 'none' }} />
                </div>
                {sent
                  ? <div style={{ background: '#F0FFF4', border: '1px solid #22C55E', color: '#166534', padding: '14px 20px', fontSize: 15, fontWeight: 700 }}>Demande envoyée. On vous rappelle sous 2h !</div>
                  : <button onClick={() => setSent(true)} style={{ background: accentColor, color: '#fff', border: 'none', padding: '14px 0', fontFamily: '"Rajdhani", sans-serif', fontSize: 17, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer' }}>
                    Envoyer ma demande de devis
                  </button>
                }
              </div>
            </div>
          </div>
        )}

        {section === 'contact' && (
          <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52 }}>
            <div>
              <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: 3, textTransform: 'uppercase', margin: '0 0 32px' }}>Contact</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[{ Icon: Phone, text: '01 43 00 99 88', label: 'Téléphone' }, { Icon: Clock, text: 'Lun – Sam : 8h – 18h30', label: 'Horaires' }, { Icon: MapPin, text: '47 avenue du Garage, Paris 20e', label: 'Adresse' }].map(({ Icon, text, label }) => (
                  <div key={label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ background: accentColor, padding: '10px', flexShrink: 0 }}><Icon size={16} color="#fff" /></div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#999', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 2 }}>{label}</div>
                      <div style={{ fontSize: 16, fontWeight: 700 }}>{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img src={IMAGES.garage.interior} alt="atelier" style={{ width: '100%', height: 280, objectFit: 'cover' }} />
          </div>
        )}

      </div>
    </div>
  );
}
