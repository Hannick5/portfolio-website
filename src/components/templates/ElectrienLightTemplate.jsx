import { useState } from 'react';
import { Sun, Zap, Settings, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';
import { IMAGES } from '../../utils/images';

const REALISATIONS = [
  { title: 'Éclairage villa provençale', desc: 'Spots LED encastrés, projecteurs jardin, ruban LED piscine. Scénarios automatisés.', img: IMAGES.electricien.hero, tag: 'Résidentiel prestige' },
  { title: 'Showroom mode Paris 8e', desc: 'Éclairage vitrine, rail de spots orientables, mise en valeur collection.', img: IMAGES.electricien.panel, tag: 'Commerce' },
  { title: 'Restaurant gastronomique', desc: 'Ambiance tamisée, éclairage table, décor lumineux personnalisé.', img: IMAGES.electricien.work, tag: 'Restauration' },
];

export default function ElectrienLightTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const { primaryColor, accentColor, name, tagline } = project;

  const nav = ['accueil', 'réalisations', 'services', 'contact'];
  const dark = primaryColor;
  const gold = accentColor;

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"Cormorant Garamond", serif', background: '#FAF8F4', color: dark }}>

      {/* TOP LINE */}
      <div style={{ background: dark, color: 'rgba(255,255,255,0.6)', padding: '7px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0, fontSize: 12, fontStyle: 'italic', letterSpacing: 0.5 }}>
        <span>Éclairage Architectural & LED — Paris & Région</span>
        <a href="tel:0612345678" style={{ color: gold, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, fontStyle: 'normal', fontWeight: 600 }}>
          <Phone size={12} /> 06 12 34 56 78
        </a>
      </div>

      {/* NAV — élégant centré */}
      <nav style={{ background: '#FAF8F4', borderBottom: '1px solid rgba(28,25,23,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px', height: 64, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Sun size={18} color={gold} />
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, fontStyle: 'italic', color: dark, letterSpacing: 1 }}>{name}</div>
            <div style={{ fontSize: 11, color: gold, letterSpacing: 2, fontStyle: 'normal', fontFamily: '"DM Sans", sans-serif', textTransform: 'uppercase' }}>Éclairage & LED</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 28 }}>
          {nav.map(s => (
            <button key={s} onClick={() => setSection(s)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: '"Cormorant Garamond", serif', fontSize: 17, fontWeight: section === s ? 700 : 400,
              fontStyle: 'italic', color: section === s ? gold : 'rgba(28,25,23,0.45)',
              borderBottom: section === s ? `1px solid ${gold}` : '1px solid transparent',
              paddingBottom: 3, transition: 'all 0.2s',
            }}>{s}</button>
          ))}
        </div>
        <button onClick={() => setSection('contact')} style={{ background: dark, color: '#fff', border: 'none', padding: '10px 22px', fontFamily: '"Cormorant Garamond", serif', fontSize: 17, fontStyle: 'italic', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
          Devis <ChevronRight size={14} />
        </button>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {section === 'accueil' && (
          <div>
            {/* HERO — image plein largeur avec texte centré */}
            <div style={{ position: 'relative', height: 380 }}>
              <img src={IMAGES.electricien.hero} alt="éclairage" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }} />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 30%, ${dark}90 100%)` }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
                <div style={{ color: gold, fontSize: 13, fontStyle: 'italic', letterSpacing: 3, marginBottom: 20 }}>Architecture lumineuse</div>
                <h1 style={{ fontSize: 56, fontWeight: 700, fontStyle: 'italic', color: '#fff', margin: '0 0 16px', lineHeight: 1.1 }}>
                  La lumière qui<br />révèle vos espaces.
                </h1>
                <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', margin: '0 0 36px', fontWeight: 300, maxWidth: 440 }}>{tagline}</p>
                <button onClick={() => setSection('réalisations')} style={{ background: 'transparent', color: '#fff', border: `1px solid ${gold}`, padding: '13px 36px', fontFamily: '"Cormorant Garamond", serif', fontSize: 18, fontStyle: 'italic', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  Voir nos réalisations <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* INTRO */}
            <div style={{ padding: '60px 80px', textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 20 }}>
                <div style={{ height: 1, flex: 1, maxWidth: 80, background: `${gold}40` }} />
                <Sun size={16} color={gold} />
                <div style={{ height: 1, flex: 1, maxWidth: 80, background: `${gold}40` }} />
              </div>
              <h2 style={{ fontSize: 36, fontWeight: 400, fontStyle: 'italic', color: dark, margin: '0 0 20px' }}>L'art de l'éclairage</h2>
              <p style={{ fontSize: 17, fontStyle: 'italic', fontWeight: 300, color: 'rgba(28,25,23,0.6)', lineHeight: 1.9, maxWidth: 560, margin: '0 auto' }}>
                Depuis quinze ans, nous concevons des projets lumineux sur mesure pour l'habitat de prestige, les commerces et les restaurants. Chaque espace mérite une lumière pensée pour lui.
              </p>
            </div>

            {/* PILIERS */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, borderTop: '1px solid rgba(28,25,23,0.08)', borderBottom: '1px solid rgba(28,25,23,0.08)' }}>
              {[
                { Icon: Sun, title: 'Éclairage LED', desc: 'Spots, rails, rubans, projecteurs. Calcul photométrique précis.' },
                { Icon: Settings, title: 'Gradation & Contrôle', desc: 'Variation d\'intensité, scénarios lumineux, télécommande.' },
                { Icon: Zap, title: 'Installation complète', desc: 'Câblage, tableaux, mise en service. Garantie 3 ans.' },
              ].map(({ Icon, title, desc }, i) => (
                <div key={title} style={{ padding: '40px 36px', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(28,25,23,0.08)' : 'none', background: i === 1 ? `${gold}05` : 'transparent' }}>
                  <div style={{ width: 52, height: 52, borderRadius: '50%', border: `1px solid ${gold}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <Icon size={20} color={gold} />
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 700, fontStyle: 'italic', color: dark, marginBottom: 10 }}>{title}</div>
                  <div style={{ fontSize: 14, fontStyle: 'italic', color: 'rgba(28,25,23,0.5)', lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>

            {/* REALISATIONS PREVIEW */}
            <div style={{ padding: '60px 52px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
                <h2 style={{ fontSize: 34, fontWeight: 400, fontStyle: 'italic', color: dark, margin: 0 }}>Réalisations récentes</h2>
                <button onClick={() => setSection('réalisations')} style={{ background: 'none', border: 'none', color: gold, fontSize: 16, fontStyle: 'italic', cursor: 'pointer', fontFamily: '"Cormorant Garamond", serif', display: 'flex', alignItems: 'center', gap: 4 }}>
                  Tout voir <ChevronRight size={14} />
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
                {REALISATIONS.map(r => (
                  <div key={r.title} style={{ cursor: 'pointer' }}>
                    <div style={{ position: 'relative', marginBottom: 14, overflow: 'hidden' }}>
                      <img src={r.img} alt={r.title} style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
                      <div style={{ position: 'absolute', bottom: 10, left: 10, background: `${dark}CC`, padding: '4px 10px' }}>
                        <span style={{ color: gold, fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', fontFamily: '"DM Sans", sans-serif' }}>{r.tag}</span>
                      </div>
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 600, fontStyle: 'italic', color: dark, marginBottom: 6 }}>{r.title}</div>
                    <div style={{ fontSize: 13, fontStyle: 'italic', color: 'rgba(28,25,23,0.5)', lineHeight: 1.6 }}>{r.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {section === 'réalisations' && (
          <div style={{ padding: '52px' }}>
            <h2 style={{ fontSize: 38, fontWeight: 400, fontStyle: 'italic', margin: '0 0 40px', color: dark }}>Nos Réalisations</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
              {REALISATIONS.map((r, i) => (
                <div key={r.title} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1.5fr 1fr' : '1fr 1.5fr', gap: 48, alignItems: 'center' }}>
                  {i % 2 === 0 && <img src={r.img} alt={r.title} style={{ width: '100%', height: 240, objectFit: 'cover' }} />}
                  <div>
                    <div style={{ fontSize: 12, color: gold, fontWeight: 600, letterSpacing: 2, fontFamily: '"DM Sans", sans-serif', textTransform: 'uppercase', marginBottom: 14 }}>{r.tag}</div>
                    <h3 style={{ fontSize: 28, fontWeight: 600, fontStyle: 'italic', color: dark, margin: '0 0 16px' }}>{r.title}</h3>
                    <p style={{ fontSize: 15, fontStyle: 'italic', color: 'rgba(28,25,23,0.6)', lineHeight: 1.8, margin: 0 }}>{r.desc}</p>
                  </div>
                  {i % 2 !== 0 && <img src={r.img} alt={r.title} style={{ width: '100%', height: 240, objectFit: 'cover' }} />}
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'services' && (
          <div style={{ padding: '52px' }}>
            <h2 style={{ fontSize: 38, fontWeight: 400, fontStyle: 'italic', margin: '0 0 40px', color: dark }}>Services</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              {[
                { title: 'Étude photométrique', desc: 'Simulation 3D de l\'éclairage avant travaux. Visualisation réaliste du rendu final.' },
                { title: 'Rétroéclairage LED', desc: 'Niches, corniches, caissons lumineux. Lumière indirecte et diffuse.' },
                { title: 'Éclairage extérieur', desc: 'Projecteurs, chemins lumineux, éclairage façade, spots engazonnés.' },
                { title: 'Gradateur & Scènes', desc: 'Programmation de scénarios : "cinéma", "dîner", "nuit". Télécommande ou app.' },
              ].map(s => (
                <div key={s.title} style={{ background: '#fff', border: '1px solid rgba(28,25,23,0.1)', padding: '28px', boxShadow: '0 2px 8px rgba(28,25,23,0.04)' }}>
                  <div style={{ fontSize: 20, fontWeight: 600, fontStyle: 'italic', color: dark, marginBottom: 10 }}>{s.title}</div>
                  <div style={{ fontSize: 14, fontStyle: 'italic', color: 'rgba(28,25,23,0.55)', lineHeight: 1.8 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'contact' && (
          <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52 }}>
            <div>
              <h2 style={{ fontSize: 38, fontWeight: 400, fontStyle: 'italic', margin: '0 0 28px', color: dark }}>Parlons de votre projet</h2>
              <p style={{ fontSize: 15, fontStyle: 'italic', color: 'rgba(28,25,23,0.55)', lineHeight: 1.8, marginBottom: 32 }}>
                Chaque projet commence par une conversation. Décrivez-nous votre espace, vos envies, et nous vous proposerons une conception lumineuse sur mesure.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[{ Icon: Phone, val: '06 12 34 56 78' }, { Icon: Clock, val: 'Lun – Ven : 9h – 18h' }, { Icon: MapPin, val: 'Paris & Île-de-France' }].map(({ Icon, val }) => (
                  <div key={val} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <Icon size={15} color={gold} />
                    <span style={{ fontSize: 15, fontStyle: 'italic', color: 'rgba(28,25,23,0.7)' }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {['Prénom', 'Téléphone', 'Type d\'espace', 'Votre projet'].map((f, i) => (
                  <div key={f}>
                    <label style={{ fontSize: 13, fontStyle: 'italic', color: gold, display: 'block', marginBottom: 6 }}>{f}</label>
                    {i < 3
                      ? <input type="text" style={{ width: '100%', border: 'none', borderBottom: `1px solid rgba(28,25,23,0.2)`, padding: '10px 0', fontFamily: '"Cormorant Garamond", serif', fontSize: 17, fontStyle: 'italic', color: dark, background: 'transparent', boxSizing: 'border-box', outline: 'none' }} />
                      : <textarea rows={4} style={{ width: '100%', border: 'none', borderBottom: `1px solid rgba(28,25,23,0.2)`, padding: '10px 0', fontFamily: '"Cormorant Garamond", serif', fontSize: 17, fontStyle: 'italic', color: dark, background: 'transparent', boxSizing: 'border-box', resize: 'none', outline: 'none' }} />
                    }
                  </div>
                ))}
                <button style={{ background: dark, color: '#fff', border: 'none', padding: '14px 0', fontFamily: '"Cormorant Garamond", serif', fontSize: 18, fontStyle: 'italic', cursor: 'pointer' }}>
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
