import { useState } from 'react';
import { Shield, Award, Phone, MapPin, Clock, ChevronRight, CheckCircle, Star } from 'lucide-react';
import { IMAGES } from '../../utils/images';

const PRESTATIONS = [
  { title: 'Débosselage sans peinture', desc: 'Technique PDR non-invasive. Résultat parfait, finition d\'usine, sans repeinture.', price: 'Dès 120€' },
  { title: 'Peinture complète', desc: 'Cabine haute précision, peinture fabricant, garantie 5 ans contre cloquage.', price: 'Sur devis' },
  { title: 'Réparation choc', desc: 'Remplacement ou redressage d\'éléments. Soudure carrosserie. Garantie totale.', price: 'Sur devis' },
  { title: 'Polissage & Lustrage', desc: 'Correction de peinture, polissage machine, protection céramique.', price: 'Dès 250€' },
  { title: 'Film de protection', desc: 'PPF auto-cicatrisant, film teinté homologué. Pose certifiée.', price: 'Sur devis' },
  { title: 'Traitement céramique', desc: 'Coating 9H, brillance extrême, protection 5 ans. Hydrophobie garantie.', price: 'Dès 490€' },
];

export default function GarageBodyTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [form, setForm] = useState({ nom: '', tel: '', marque: '', message: '' });
  const [sent, setSent] = useState(false);
  const { primaryColor, accentColor, name, tagline } = project;

  const nav = ['accueil', 'prestations', 'galerie', 'devis'];
  const dark = primaryColor;
  const silver = accentColor;

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"DM Sans", sans-serif', background: '#0D0D12', color: '#fff' }}>

      {/* TOP */}
      <div style={{ background: '#080810', padding: '8px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0, fontSize: 12, borderBottom: '1px solid rgba(192,192,192,0.1)' }}>
        <div style={{ color: 'rgba(255,255,255,0.4)', display: 'flex', gap: 20 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Award size={12} color={silver} /> Certifié Constructeur</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Star size={12} color={silver} fill={silver} /> Agréé assurances</span>
        </div>
        <a href="tel:0612345678" style={{ color: silver, textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
          <Phone size={12} /> 06 12 34 56 78
        </a>
      </div>

      {/* NAV */}
      <nav style={{ background: '#0D0D12', borderBottom: '1px solid rgba(192,192,192,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', height: 64, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 36, height: 36, background: `linear-gradient(135deg, ${silver}, rgba(192,192,192,0.3))`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Shield size={18} color="#0D0D12" />
          </div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: -0.3 }}>{name}</div>
            <div style={{ fontSize: 11, color: silver, letterSpacing: 1, fontWeight: 600 }}>{tagline}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {nav.map(s => (
            <button key={s} onClick={() => setSection(s)} style={{
              background: section === s ? 'rgba(192,192,192,0.1)' : 'transparent',
              color: section === s ? '#fff' : 'rgba(255,255,255,0.4)',
              border: section === s ? '1px solid rgba(192,192,192,0.3)' : '1px solid transparent',
              cursor: 'pointer', padding: '8px 18px', fontSize: 13, fontWeight: 600,
              textTransform: 'capitalize', transition: 'all 0.15s',
            }}>{s}</button>
          ))}
        </div>
        <button onClick={() => setSection('devis')} style={{ background: `linear-gradient(135deg, ${silver}, rgba(180,180,180,0.7))`, color: '#0D0D12', border: 'none', padding: '11px 24px', fontSize: 14, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
          Devis gratuit <ChevronRight size={14} />
        </button>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {section === 'accueil' && (
          <div>
            {/* HERO */}
            <div style={{ position: 'relative', height: 400, overflow: 'hidden' }}>
              <img src={IMAGES.garage.body} alt="carrosserie" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4) saturate(0.8)' }} />
              {/* Metallic overlay */}
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, rgba(13,13,18,0.95) 0%, rgba(13,13,18,0.4) 60%, rgba(13,13,18,0.8) 100%)` }} />
              <div style={{ position: 'absolute', inset: 0, padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
                  {['Agréé assurances', 'Certifié constructeur', 'Garantie 5 ans'].map(badge => (
                    <span key={badge} style={{ background: 'rgba(192,192,192,0.15)', border: '1px solid rgba(192,192,192,0.25)', color: silver, padding: '4px 12px', fontSize: 11, fontWeight: 700, letterSpacing: 0.5 }}>{badge}</span>
                  ))}
                </div>
                <h1 style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.1, margin: '0 0 16px', letterSpacing: -1, maxWidth: 520 }}>
                  Votre carrosserie<br />
                  <span style={{ background: `linear-gradient(90deg, ${silver}, rgba(255,255,255,0.7))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    restituée à l'état neuf.
                  </span>
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, margin: '0 0 36px', maxWidth: 400, lineHeight: 1.7 }}>{tagline}</p>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => setSection('devis')} style={{ background: `linear-gradient(135deg, ${silver}, rgba(180,180,180,0.8))`, color: '#0D0D12', border: 'none', padding: '14px 32px', fontSize: 15, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                    Demander un devis <ChevronRight size={14} />
                  </button>
                  <button onClick={() => setSection('prestations')} style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', padding: '14px 32px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>
                    Nos prestations
                  </button>
                </div>
              </div>
            </div>

            {/* METRICS */}
            <div style={{ background: '#111118', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', borderBottom: '1px solid rgba(192,192,192,0.08)' }}>
              {[['25 ans', "D'expertise carrosserie"], ['Agréé', 'Toutes assurances'], ['5 ans', 'Garantie peinture'], ['4.9/5', 'Note Google']].map(([val, lab], i) => (
                <div key={lab} style={{ padding: '22px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(192,192,192,0.08)' : 'none' }}>
                  <div style={{ fontSize: 26, fontWeight: 800, background: `linear-gradient(90deg, ${silver}, rgba(255,255,255,0.6))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 }}>{val}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 4, fontWeight: 600, letterSpacing: 0.5 }}>{lab}</div>
                </div>
              ))}
            </div>

            {/* PRESTATIONS */}
            <div style={{ padding: '52px' }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: '0 0 8px', letterSpacing: -0.5 }}>Nos Prestations</h2>
              <div style={{ width: 48, height: 2, background: `linear-gradient(90deg, ${silver}, transparent)`, marginBottom: 36 }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                {PRESTATIONS.map(p => (
                  <div key={p.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(192,192,192,0.12)', padding: '24px 20px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, ${silver}60, transparent)` }} />
                    <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{p.title}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: 14 }}>{p.desc}</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: silver }}>{p.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE STRIP */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', height: 200, padding: '0 52px 52px', gap: 16 }}>
              <img src={IMAGES.garage.body} alt="carrosserie" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7) saturate(0.7)' }} />
              <img src={IMAGES.garage.engine} alt="moteur" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7) saturate(0.7)' }} />
            </div>
          </div>
        )}

        {section === 'prestations' && (
          <div style={{ padding: '52px' }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, margin: '0 0 8px', letterSpacing: -0.5 }}>Prestations</h2>
            <div style={{ width: 48, height: 2, background: `linear-gradient(90deg, ${silver}, transparent)`, marginBottom: 40 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {PRESTATIONS.map(p => (
                <div key={p.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(192,192,192,0.12)', padding: '28px 24px' }}>
                  <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{p.title}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 18, fontWeight: 800, color: silver }}>{p.price}</span>
                    <button onClick={() => setSection('devis')} style={{ background: 'none', border: `1px solid rgba(192,192,192,0.3)`, color: silver, padding: '7px 16px', fontSize: 12, cursor: 'pointer', fontWeight: 700, fontFamily: '"DM Sans", sans-serif', letterSpacing: 0.5, display: 'flex', alignItems: 'center', gap: 4 }}>
                      Devis <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'galerie' && (
          <div style={{ padding: '52px' }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, margin: '0 0 8px', letterSpacing: -0.5 }}>Galerie</h2>
            <div style={{ width: 48, height: 2, background: `linear-gradient(90deg, ${silver}, transparent)`, marginBottom: 40 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '200px 200px', gap: 12 }}>
              <img src={IMAGES.garage.body} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', gridRow: 'span 2', filter: 'saturate(0.6)' }} />
              <img src={IMAGES.garage.engine} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.6)' }} />
              <img src={IMAGES.garage.hero} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.6)' }} />
              <img src={IMAGES.garage.tools} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.6)' }} />
              <img src={IMAGES.garage.interior} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.6)' }} />
            </div>
          </div>
        )}

        {section === 'devis' && (
          <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52 }}>
            <div>
              <h2 style={{ fontSize: 36, fontWeight: 800, margin: '0 0 8px', letterSpacing: -0.5 }}>Devis Gratuit</h2>
              <div style={{ width: 48, height: 2, background: `linear-gradient(90deg, ${silver}, transparent)`, marginBottom: 28 }} />
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 28 }}>
                Un expert carrossier vous contacte sous 2h pour évaluer vos dommages et établir un devis précis. Entretien possible sur photo ou en atelier.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[['Agréé assurances'], ['Devis sans engagement'], ['Véhicule de prêt possible'], ['Garantie 5 ans peinture']].map(([v]) => (
                  <div key={v} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <CheckCircle size={15} color={silver} />
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{v}</span>
                  </div>
                ))}
              </div>
              <img src={IMAGES.garage.body} alt="carrosserie" style={{ width: '100%', height: 180, objectFit: 'cover', marginTop: 28, filter: 'brightness(0.6) saturate(0.6)' }} />
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(192,192,192,0.12)', padding: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[{ label: 'Nom', key: 'nom' }, { label: 'Téléphone', key: 'tel' }, { label: 'Marque & Modèle', key: 'marque' }].map(f => (
                  <div key={f.key}>
                    <label style={{ fontSize: 11, fontWeight: 700, color: silver, letterSpacing: 2, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>{f.label}</label>
                    <input type="text" value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(192,192,192,0.2)', color: '#fff', padding: '11px 14px', fontSize: 15, fontFamily: '"DM Sans", sans-serif', boxSizing: 'border-box', outline: 'none' }} />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: silver, letterSpacing: 2, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Description des dommages</label>
                  <textarea rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(192,192,192,0.2)', color: '#fff', padding: '11px 14px', fontSize: 15, fontFamily: '"DM Sans", sans-serif', boxSizing: 'border-box', resize: 'none', outline: 'none' }} />
                </div>
                {sent
                  ? <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid #22C55E', color: '#22C55E', padding: '12px', textAlign: 'center', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    <CheckCircle size={16} /> Demande envoyée !
                  </div>
                  : <button onClick={() => setSent(true)} style={{ background: `linear-gradient(135deg, ${silver}, rgba(180,180,180,0.8))`, color: '#0D0D12', border: 'none', padding: '14px', fontSize: 15, fontWeight: 800, cursor: 'pointer', fontFamily: '"DM Sans", sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                    Envoyer ma demande de devis <ChevronRight size={14} />
                  </button>
                }
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
