import { useState } from 'react';
import { Scissors, Sparkles, Phone, Clock, MapPin, Star, ChevronRight, Zap } from 'lucide-react';
import { IMAGES } from '../../utils/images';

const SERVICES = [
  { name: 'Color Expert', tag: 'TENDANCE', desc: 'Balayage, mèches, ombré, tie-dye. On maîtrise tout.', price: 'Dès 80€', color: '#7C3AED' },
  { name: 'Coupe & Style', tag: 'SIGNATURE', desc: 'Coupe sur-mesure, blow-dry, lissage naturel.', price: 'Dès 45€', color: '#F59E0B' },
  { name: 'Kératine & Lissage', tag: 'PREMIUM', desc: 'Brésilien, japonais, protéiné. Résultat durable.', price: 'Dès 120€', color: '#7C3AED' },
  { name: 'Soins & Nutrition', tag: 'SOIN', desc: 'Masques professionnels, traitement anti-casse, brillance.', price: 'Dès 30€', color: '#F59E0B' },
];

const TEAM = [
  { name: 'Lucas', role: 'Directeur Artistique', img: IMAGES.team.man1, spec: 'Coloriste expert' },
  { name: 'Camille', role: 'Color Specialist', img: IMAGES.team.woman1, spec: 'Balayage & ombré' },
  { name: 'Jade', role: 'Styliste', img: IMAGES.team.woman2, spec: 'Coupe & styling' },
];

export default function SalonVibrantTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const { primaryColor, accentColor, name, tagline } = project;

  const nav = ['accueil', 'services', 'équipe', 'réserver'];
  const purple = primaryColor;
  const amber = accentColor;

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"DM Sans", sans-serif', background: '#0F0A1E', color: '#fff' }}>

      {/* TOP STRIP — gradient */}
      <div style={{ background: `linear-gradient(90deg, ${purple}, ${amber})`, padding: '8px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0, fontSize: 13, fontWeight: 700 }}>
        <span style={{ color: '#fff', letterSpacing: 0.5 }}>Ouvert jusqu'à 20h aujourd'hui</span>
        <a href="tel:0612345678" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}><Phone size={13} /> 06 12 34 56 78</a>
      </div>

      {/* NAV */}
      <nav style={{ background: '#130E24', borderBottom: '1px solid rgba(124,58,237,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 36px', height: 60, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ background: `linear-gradient(135deg, ${purple}, ${amber})`, padding: '7px 10px', borderRadius: 8 }}>
            <Scissors size={16} color="#fff" />
          </div>
          <span style={{ fontSize: 20, fontWeight: 900, letterSpacing: -0.5, background: `linear-gradient(90deg, ${purple}, ${amber})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{name}</span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {nav.map(s => (
            <button key={s} onClick={() => setSection(s)} style={{
              background: section === s ? `linear-gradient(135deg, ${purple}, ${amber})` : 'transparent',
              color: section === s ? '#fff' : 'rgba(255,255,255,0.5)',
              border: 'none', cursor: 'pointer',
              padding: '8px 16px', borderRadius: 6, fontSize: 13, fontWeight: 700,
              textTransform: 'capitalize', transition: 'all 0.15s',
            }}>{s}</button>
          ))}
        </div>
        <button onClick={() => setSection('réserver')} style={{ background: `linear-gradient(135deg, ${purple}, ${amber})`, color: '#fff', border: 'none', borderRadius: 6, padding: '10px 22px', fontSize: 14, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, letterSpacing: 0.5 }}>
          <Zap size={14} /> RDV Express
        </button>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {section === 'accueil' && (
          <div>
            {/* HERO */}
            <div style={{ position: 'relative', height: 400, overflow: 'hidden' }}>
              <img src={IMAGES.salon.color} alt="salon" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)' }} />
              {/* gradient overlay */}
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${purple}99 0%, transparent 60%), linear-gradient(225deg, ${amber}60 0%, transparent 50%)` }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '6px 16px', borderRadius: 100, marginBottom: 20, backdropFilter: 'blur(8px)' }}>
                  <Sparkles size={12} color={amber} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: 1.5, textTransform: 'uppercase' }}>Studio de colorisation</span>
                </div>
                <h1 style={{ fontSize: 62, fontWeight: 900, lineHeight: 1.05, margin: '0 0 16px', letterSpacing: -1 }}>
                  Couleur.<br />
                  <span style={{ background: `linear-gradient(90deg, ${purple}, ${amber})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Signature.</span>
                </h1>
                <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', margin: '0 0 36px', maxWidth: 400, lineHeight: 1.6 }}>{tagline}</p>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => setSection('réserver')} style={{ background: `linear-gradient(135deg, ${purple}, ${amber})`, color: '#fff', border: 'none', borderRadius: 6, padding: '14px 32px', fontSize: 16, fontWeight: 800, cursor: 'pointer' }}>
                    Réserver maintenant
                  </button>
                  <button onClick={() => setSection('services')} style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 6, padding: '14px 32px', fontSize: 16, fontWeight: 600, cursor: 'pointer', backdropFilter: 'blur(8px)' }}>
                    Découvrir
                  </button>
                </div>
              </div>
            </div>

            {/* STATS */}
            <div style={{ background: '#1A1030', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '24px' }}>
              {[['500+', 'Colorations/mois'], ['4.9', 'Note moyenne'], ['8 ans', "D'expérience"], ['3', 'Experts dédiés']].map(([val, lab], i) => (
                <div key={lab} style={{ textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(124,58,237,0.2)' : 'none', padding: '0 16px' }}>
                  <div style={{ fontSize: 30, fontWeight: 900, background: `linear-gradient(90deg, ${purple}, ${amber})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.1 }}>{val}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4, fontWeight: 600, letterSpacing: 0.5 }}>{lab}</div>
                </div>
              ))}
            </div>

            {/* SERVICES GRID */}
            <div style={{ padding: '48px' }}>
              <h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: -0.5, margin: '0 0 8px' }}>Nos Expertises</h2>
              <div style={{ width: 60, height: 3, background: `linear-gradient(90deg, ${purple}, ${amber})`, marginBottom: 36, borderRadius: 2 }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {SERVICES.map(s => (
                  <div key={s.name} style={{ background: '#1A1030', border: `1px solid rgba(124,58,237,0.2)`, borderRadius: 12, padding: '28px 24px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${purple}, ${amber})` }} />
                    <div style={{ display: 'inline-block', background: `linear-gradient(135deg, ${purple}30, ${amber}30)`, border: `1px solid ${s.color}40`, color: s.color, padding: '3px 10px', borderRadius: 100, fontSize: 11, fontWeight: 800, letterSpacing: 1.5, marginBottom: 14 }}>{s.tag}</div>
                    <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8, letterSpacing: -0.3 }}>{s.name}</div>
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</div>
                    <div style={{ fontSize: 22, fontWeight: 900, background: `linear-gradient(90deg, ${purple}, ${amber})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* TEAM PREVIEW */}
            <div style={{ padding: '0 48px 48px' }}>
              <h2 style={{ fontSize: 36, fontWeight: 900, margin: '0 0 32px', letterSpacing: -0.5 }}>L'Équipe</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
                {TEAM.map(m => (
                  <div key={m.name} style={{ background: '#1A1030', borderRadius: 10, overflow: 'hidden' }}>
                    <img src={m.img} alt={m.name} style={{ width: '100%', height: 160, objectFit: 'cover', filter: 'brightness(0.9)' }} />
                    <div style={{ padding: '16px 20px' }}>
                      <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 2 }}>{m.name}</div>
                      <div style={{ fontSize: 12, color: amber, fontWeight: 700, letterSpacing: 0.5, marginBottom: 4 }}>{m.role}</div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{m.spec}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {section === 'services' && (
          <div style={{ padding: '48px' }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -0.5, margin: '0 0 40px' }}>Tous nos Services</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {SERVICES.map(s => (
                <div key={s.name} style={{ background: '#1A1030', borderRadius: 10, padding: '28px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(124,58,237,0.2)' }}>
                  <div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                      <span style={{ fontSize: 20, fontWeight: 800 }}>{s.name}</span>
                      <span style={{ background: `${purple}20`, color: purple, padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 800, letterSpacing: 1 }}>{s.tag}</span>
                    </div>
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', maxWidth: 400 }}>{s.desc}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 24 }}>
                    <div style={{ fontSize: 28, fontWeight: 900, background: `linear-gradient(90deg, ${purple}, ${amber})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.price}</div>
                    <button onClick={() => setSection('réserver')} style={{ background: 'none', border: 'none', color: amber, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: '"DM Sans", sans-serif', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
                      Réserver <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'équipe' && (
          <div style={{ padding: '48px' }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, margin: '0 0 40px', letterSpacing: -0.5 }}>Notre Équipe</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
              {TEAM.map(m => (
                <div key={m.name} style={{ background: '#1A1030', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(124,58,237,0.2)' }}>
                  <img src={m.img} alt={m.name} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
                  <div style={{ padding: '20px 24px' }}>
                    <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{m.name}</div>
                    <div style={{ fontSize: 13, color: amber, fontWeight: 700, letterSpacing: 0.5, marginBottom: 8 }}>{m.role}</div>
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{m.spec}</div>
                    <div style={{ display: 'flex', gap: 2, marginTop: 16 }}>
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} color={amber} fill={amber} />)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'réserver' && (
          <div style={{ padding: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            <div>
              <h2 style={{ fontSize: 40, fontWeight: 900, margin: '0 0 8px', letterSpacing: -0.5 }}>Réserver</h2>
              <div style={{ width: 60, height: 3, background: `linear-gradient(90deg, ${purple}, ${amber})`, marginBottom: 28, borderRadius: 2 }} />
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 32 }}>
                Réservez votre créneau en quelques secondes. Confirmation immédiate par SMS.
              </p>
              <img src={IMAGES.salon.color} alt="salon" style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 8 }} />
            </div>
            <div style={{ background: '#1A1030', borderRadius: 12, padding: '32px', border: '1px solid rgba(124,58,237,0.2)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {['Prénom & Nom', 'Téléphone', 'Prestation', 'Date souhaitée'].map(f => (
                  <div key={f}>
                    <label style={{ fontSize: 11, fontWeight: 800, color: purple, letterSpacing: 2, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>{f}</label>
                    <input type="text" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(124,58,237,0.3)`, borderRadius: 6, color: '#fff', padding: '11px 14px', fontSize: 15, fontFamily: '"DM Sans", sans-serif', boxSizing: 'border-box', outline: 'none' }} />
                  </div>
                ))}
                <button style={{ background: `linear-gradient(135deg, ${purple}, ${amber})`, color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 800, cursor: 'pointer', fontFamily: '"DM Sans", sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <Zap size={16} /> Confirmer le RDV
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
