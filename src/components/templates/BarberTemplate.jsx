import { useState } from 'react';
import { Scissors, Clock, MapPin, Phone, Star, ChevronRight, Instagram } from 'lucide-react';
import { IMAGES } from '../../utils/images';

const PRESTATIONS = [
  { name: 'Coupe Homme', desc: 'Consultation, coupe ciseau ou tondeuse, finitions rasoir', duree: '45 min', price: '28€' },
  { name: 'Barbe Complète', desc: 'Taille, mise en forme, rasage à l\'ancienne serviette chaude', duree: '35 min', price: '22€' },
  { name: 'Coupe + Barbe', desc: 'Le duo incontournable — résultat garanti impeccable', duree: '70 min', price: '45€' },
  { name: 'Rasage Traditionnel', desc: 'Blaireau, mousse chaude, rasoir droit, finitions huile', duree: '40 min', price: '30€' },
  { name: 'Coupe Enfant', desc: 'Moins de 12 ans — coupe adaptée, patience garantie', duree: '30 min', price: '18€' },
  { name: 'Soins Barbe & Cheveux', desc: 'Masque, huile, baume — entretien professionnel', duree: '25 min', price: '20€' },
];

export default function BarberTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const { primaryColor, accentColor, name, tagline } = project;

  const nav = ['accueil', 'prestations', 'galerie', 'réserver'];

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"DM Sans", sans-serif', background: primaryColor, color: '#fff' }}>

      {/* NAV */}
      <nav style={{ background: 'rgba(0,0,0,0.4)', borderBottom: `1px solid rgba(212,168,67,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 36px', height: 64, flexShrink: 0 }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: 4, textTransform: 'uppercase', color: accentColor, lineHeight: 1 }}>{name}</div>
          <div style={{ fontSize: 11, color: 'rgba(212,168,67,0.6)', letterSpacing: 2, textTransform: 'uppercase' }}>Barbershop Since 2018</div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {nav.map(s => (
            <button key={s} onClick={() => setSection(s)} style={{
              background: section === s ? accentColor : 'transparent',
              color: section === s ? '#000' : 'rgba(255,255,255,0.6)',
              border: section === s ? 'none' : '1px solid rgba(212,168,67,0.2)',
              cursor: 'pointer', padding: '8px 16px', fontSize: 13, fontWeight: 700,
              letterSpacing: 1.5, textTransform: 'uppercase', transition: 'all 0.15s',
            }}>{s}</button>
          ))}
        </div>
        <a href="tel:0612345678" style={{ display: 'flex', alignItems: 'center', gap: 8, color: accentColor, textDecoration: 'none', fontSize: 14, fontWeight: 700, letterSpacing: 1 }}>
          <Phone size={14} />
          06 12 34 56 78
        </a>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {section === 'accueil' && (
          <div>
            {/* HERO */}
            <div style={{ position: 'relative', height: 420 }}>
              <img src={IMAGES.salon.barber} alt="barbershop" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4) sepia(0.3)' }} />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(120deg, ${primaryColor}CC 40%, transparent 40%)` }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px 56px' }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 20 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} color={accentColor} fill={accentColor} />)}
                  <span style={{ color: accentColor, fontSize: 13, marginLeft: 8, fontWeight: 700 }}>5.0 — 300+ avis</span>
                </div>
                <h1 style={{ fontSize: 54, fontWeight: 900, lineHeight: 1.05, letterSpacing: -1, margin: '0 0 12px', maxWidth: 440 }}>
                  L'art du rasage<br /><span style={{ color: accentColor }}>traditionnel.</span>
                </h1>
                <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', margin: '0 0 32px', maxWidth: 360, lineHeight: 1.6 }}>{tagline}</p>
                <div style={{ display: 'flex', gap: 14 }}>
                  <button onClick={() => setSection('réserver')} style={{ background: accentColor, color: '#000', border: 'none', padding: '13px 32px', fontSize: 15, fontWeight: 800, cursor: 'pointer', letterSpacing: 1, textTransform: 'uppercase', fontFamily: '"DM Sans", sans-serif' }}>
                    Prendre RDV
                  </button>
                  <button onClick={() => setSection('prestations')} style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '13px 32px', fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: '"DM Sans", sans-serif' }}>
                    Nos services
                  </button>
                </div>
              </div>
            </div>

            {/* INFOS BAR */}
            <div style={{ background: accentColor, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '0' }}>
              {[{ Icon: Clock, title: 'Horaires', val: 'Lun – Sam : 9h – 20h' }, { Icon: MapPin, title: 'Adresse', val: '34 rue du Faubourg, Paris 10e' }, { Icon: Phone, title: 'Réservation', val: '06 12 34 56 78' }].map(({ Icon, title, val }, i) => (
                <div key={title} style={{ padding: '18px 28px', borderRight: i < 2 ? '1px solid rgba(0,0,0,0.15)' : 'none', display: 'flex', gap: 12, alignItems: 'center' }}>
                  <Icon size={18} color="#000" />
                  <div>
                    <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.5)', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 1 }}>{title}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#000' }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* SERVICES PREVIEW */}
            <div style={{ padding: '52px 52px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 36 }}>
                <h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: -0.5, margin: 0 }}>Nos Services</h2>
                <div style={{ height: 2, flex: 1, background: `linear-gradient(90deg, ${accentColor}30, transparent)`, margin: '0 24px', marginBottom: 6 }} />
                <button onClick={() => setSection('prestations')} style={{ background: 'none', border: 'none', color: accentColor, fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0, fontFamily: '"DM Sans", sans-serif' }}>
                  Voir tout <ChevronRight size={14} />
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
                {PRESTATIONS.slice(0, 3).map(p => (
                  <div key={p.name} style={{ border: `1px solid rgba(212,168,67,0.2)`, padding: '28px 24px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: accentColor }} />
                    <Scissors size={20} color={accentColor} style={{ marginBottom: 14 }} />
                    <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, letterSpacing: -0.2 }}>{p.name}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: 14 }}>{p.desc}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, fontWeight: 600 }}>{p.duree}</span>
                      <span style={{ color: accentColor, fontSize: 22, fontWeight: 900 }}>{p.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GALERIE STRIP */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', height: 200, padding: '0 52px 52px', gap: 12 }}>
              <img src={IMAGES.salon.barber} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.2) brightness(0.8)' }} />
              <img src={IMAGES.salon.barbercut} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.2) brightness(0.8)' }} />
              <img src={IMAGES.salon.cut} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.2) brightness(0.8)' }} />
            </div>
          </div>
        )}

        {section === 'prestations' && (
          <div style={{ padding: '52px' }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -0.5, margin: '0 0 8px' }}>Prestations</h2>
            <div style={{ width: 48, height: 3, background: accentColor, marginBottom: 40 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {PRESTATIONS.map((p, i) => (
                <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', borderBottom: `1px solid rgba(212,168,67,0.15)` }}>
                  <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                    <div style={{ width: 40, height: 40, border: `1px solid rgba(212,168,67,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 900, color: accentColor }}>
                      0{i + 1}
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{p.name}</div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{p.desc}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 20 }}>
                    <div style={{ fontSize: 26, fontWeight: 900, color: accentColor, lineHeight: 1 }}>{p.price}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{p.duree}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'galerie' && (
          <div style={{ padding: '52px' }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -0.5, margin: '0 0 8px' }}>Galerie</h2>
            <div style={{ width: 48, height: 3, background: accentColor, marginBottom: 40 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '200px 200px', gap: 12 }}>
              <img src={IMAGES.salon.barber} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.15)' }} />
              <img src={IMAGES.salon.barbercut} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.15)', gridRow: 'span 2' }} />
              <img src={IMAGES.salon.cut} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.15)' }} />
              <img src={IMAGES.salon.interior} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.15)' }} />
              <img src={IMAGES.salon.color} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.15)' }} />
            </div>
          </div>
        )}

        {section === 'réserver' && (
          <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -0.5, margin: '0 0 8px' }}>Réserver</h2>
              <div style={{ width: 48, height: 3, background: accentColor, marginBottom: 28 }} />
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 28 }}>
                Réservez en ligne ou appelez directement. Confirmation par SMS sous 2h.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {PRESTATIONS.slice(0, 4).map(p => (
                  <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', border: '1px solid rgba(212,168,67,0.2)', cursor: 'pointer' }}>
                    <span style={{ fontSize: 15, fontWeight: 600 }}>{p.name}</span>
                    <span style={{ color: accentColor, fontWeight: 800 }}>{p.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {['Prénom', 'Téléphone', 'Prestation souhaitée', 'Date souhaitée'].map(f => (
                <div key={f}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: accentColor, letterSpacing: 2, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>{f}</label>
                  <input type="text" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(212,168,67,0.2)', color: '#fff', padding: '12px 14px', fontSize: 15, fontFamily: '"DM Sans", sans-serif', boxSizing: 'border-box', outline: 'none' }} />
                </div>
              ))}
              <button style={{ background: accentColor, color: '#000', border: 'none', padding: '14px 0', fontSize: 16, fontWeight: 900, cursor: 'pointer', letterSpacing: 1, textTransform: 'uppercase', fontFamily: '"DM Sans", sans-serif' }}>
                Confirmer le RDV
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
