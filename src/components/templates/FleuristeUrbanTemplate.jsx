import { useState } from 'react';
import { Leaf, Phone, MapPin, Clock, ChevronRight, Plus, ShoppingBag } from 'lucide-react';
import { IMAGES } from '../../utils/images';

const PLANTES = [
  { name: 'Monstera Deliciosa', cat: 'TROPICAL', price: '38€', entretien: 'Facile', img: IMAGES.fleuriste.plants },
  { name: 'Pothos Doré', cat: 'SUSPENDUE', price: '18€', entretien: 'Très facile', img: IMAGES.fleuriste.bouquet },
  { name: 'Figuier Lyre', cat: 'STATEMENT', price: '89€', entretien: 'Moyen', img: IMAGES.fleuriste.hero },
  { name: 'Cactus & Succulentes', cat: 'ZEN', price: '22€', entretien: 'Très facile', img: IMAGES.fleuriste.work },
];

const SERVICES_DOMICILE = [
  { title: 'Consultation plantes', desc: 'Un expert vient chez vous diagnostiquer vos plantes et vous conseiller.', price: '49€' },
  { title: 'Rempotage & Entretien', desc: 'Rempotage, taille, traitement. Tout le matériel fourni.', price: 'Dès 35€' },
  { title: 'Livraison & Mise en place', desc: 'Sélection, livraison et installation des plantes dans votre intérieur.', price: 'Dès 15€' },
];

export default function FleuristeUrbanTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [filter, setFilter] = useState('Tout');
  const { primaryColor, accentColor, name, tagline } = project;

  const nav = ['accueil', 'plantes', 'services', 'contact'];
  const darkGreen = primaryColor;
  const lime = accentColor;

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"DM Sans", sans-serif', background: darkGreen, color: '#fff' }}>

      {/* NAV */}
      <nav style={{ background: 'rgba(0,0,0,0.3)', borderBottom: `1px solid rgba(163,230,53,0.25)`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 36px', height: 60, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ background: lime, padding: '7px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Leaf size={16} color={darkGreen} fill={darkGreen} />
          </div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: 1, color: '#fff', textTransform: 'uppercase' }}>{name}</div>
            <div style={{ fontSize: 11, color: lime, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700 }}>Plantes & Soins</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {nav.map(s => (
            <button key={s} onClick={() => setSection(s)} style={{
              background: section === s ? lime : 'transparent',
              color: section === s ? darkGreen : 'rgba(255,255,255,0.6)',
              border: 'none', cursor: 'pointer', borderRadius: 0,
              padding: '8px 18px', fontSize: 13, fontWeight: 700,
              letterSpacing: 1.5, textTransform: 'uppercase', transition: 'all 0.15s',
            }}>{s}</button>
          ))}
        </div>
        <button onClick={() => setSection('contact')} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'transparent', color: lime, border: `2px solid ${lime}`, padding: '8px 18px', fontSize: 13, fontWeight: 800, cursor: 'pointer', letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: '"DM Sans", sans-serif' }}>
          <Phone size={13} /> Contacter
        </button>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {section === 'accueil' && (
          <div>
            {/* HERO */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 380 }}>
              <div style={{ padding: '64px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'inline-block', background: lime, color: darkGreen, padding: '4px 12px', fontSize: 12, fontWeight: 900, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20 }}>
                  Livraison à domicile
                </div>
                <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.05, margin: '0 0 16px', letterSpacing: -1, textTransform: 'uppercase' }}>
                  Vos plantes,<br />
                  <span style={{ color: lime }}>votre jungle.</span>
                </h1>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 32px', maxWidth: 360 }}>{tagline}</p>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => setSection('plantes')} style={{ background: lime, color: darkGreen, border: 'none', padding: '13px 28px', fontSize: 15, fontWeight: 800, cursor: 'pointer', letterSpacing: 1, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6, fontFamily: '"DM Sans", sans-serif' }}>
                    <ShoppingBag size={14} /> Shop
                  </button>
                  <button onClick={() => setSection('services')} style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.3)', padding: '13px 28px', fontSize: 15, fontWeight: 700, cursor: 'pointer', letterSpacing: 1, textTransform: 'uppercase', fontFamily: '"DM Sans", sans-serif' }}>
                    Services
                  </button>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <img src={IMAGES.fleuriste.plants} alt="plantes" style={{ width: '100%', height: '100%', minHeight: 380, objectFit: 'cover', filter: 'brightness(0.7) hue-rotate(10deg)' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${darkGreen} 0%, transparent 30%)` }} />
                <div style={{ position: 'absolute', bottom: 24, right: 24, background: lime, color: darkGreen, padding: '14px 20px' }}>
                  <div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1 }}>200+</div>
                  <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>espèces</div>
                </div>
              </div>
            </div>

            {/* SERVICES STRIP */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: `3px solid ${lime}` }}>
              {SERVICES_DOMICILE.map(({ title, desc, price }, i) => (
                <div key={title} style={{ padding: '28px 32px', borderRight: i < 2 ? `1px solid rgba(163,230,53,0.2)` : 'none' }}>
                  <div style={{ fontSize: 13, color: lime, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>{price}</div>
                  <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>{title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>

            {/* PLANTES PREVIEW */}
            <div style={{ padding: '48px 48px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
                <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: -0.5, textTransform: 'uppercase', margin: 0 }}>Nos Plantes</h2>
                <button onClick={() => setSection('plantes')} style={{ background: 'none', border: 'none', color: lime, fontSize: 14, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, letterSpacing: 1, textTransform: 'uppercase', fontFamily: '"DM Sans", sans-serif' }}>
                  Voir tout <ChevronRight size={14} />
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 16 }}>
                {PLANTES.map(p => (
                  <div key={p.name} style={{ cursor: 'pointer' }}>
                    <div style={{ position: 'relative', marginBottom: 12, overflow: 'hidden' }}>
                      <img src={p.img} alt={p.name} style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block', filter: 'brightness(0.8)' }} />
                      <div style={{ position: 'absolute', top: 10, left: 10, background: lime, color: darkGreen, padding: '3px 8px', fontSize: 10, fontWeight: 900, letterSpacing: 1, textTransform: 'uppercase' }}>{p.cat}</div>
                      <button style={{ position: 'absolute', bottom: 10, right: 10, background: '#fff', border: 'none', color: darkGreen, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <Plus size={14} />
                      </button>
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 }}>{p.name}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 11, color: lime, fontWeight: 700 }}>{p.entretien}</span>
                      <span style={{ fontSize: 18, fontWeight: 900, color: lime }}>{p.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {section === 'plantes' && (
          <div style={{ padding: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
              <h2 style={{ fontSize: 36, fontWeight: 900, textTransform: 'uppercase', letterSpacing: -0.5, margin: 0 }}>Shop</h2>
              <div style={{ display: 'flex', gap: 8 }}>
                {['Tout', 'Tropical', 'Suspendue', 'Statement', 'Facile'].map(f => (
                  <button key={f} onClick={() => setFilter(f)} style={{
                    background: filter === f ? lime : 'transparent',
                    color: filter === f ? darkGreen : 'rgba(255,255,255,0.6)',
                    border: `1px solid ${filter === f ? lime : 'rgba(255,255,255,0.2)'}`,
                    padding: '6px 14px', fontSize: 12, fontWeight: 700, cursor: 'pointer',
                    letterSpacing: 1, textTransform: 'uppercase', fontFamily: '"DM Sans", sans-serif',
                  }}>{f}</button>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 20 }}>
              {PLANTES.map(p => (
                <div key={p.name} style={{ cursor: 'pointer' }}>
                  <div style={{ position: 'relative', overflow: 'hidden', marginBottom: 14 }}>
                    <img src={p.img} alt={p.name} style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block', filter: 'brightness(0.75)' }} />
                    <div style={{ position: 'absolute', top: 10, left: 10, background: lime, color: darkGreen, padding: '3px 8px', fontSize: 10, fontWeight: 900, letterSpacing: 1, textTransform: 'uppercase' }}>{p.cat}</div>
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>{p.name}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 12, color: lime, fontWeight: 700 }}>Entretien : {p.entretien}</span>
                    <span style={{ fontSize: 20, fontWeight: 900, color: lime }}>{p.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'services' && (
          <div style={{ padding: '48px' }}>
            <h2 style={{ fontSize: 36, fontWeight: 900, textTransform: 'uppercase', letterSpacing: -0.5, margin: '0 0 8px' }}>Services</h2>
            <div style={{ width: 48, height: 4, background: lime, marginBottom: 40 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {SERVICES_DOMICILE.map(s => (
                <div key={s.title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', border: `1px solid rgba(163,230,53,0.2)` }}>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 }}>{s.title}</div>
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', maxWidth: 480 }}>{s.desc}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 24 }}>
                    <div style={{ fontSize: 26, fontWeight: 900, color: lime }}>{s.price}</div>
                    <button onClick={() => setSection('contact')} style={{ background: 'none', border: 'none', color: lime, fontSize: 13, fontWeight: 800, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 1, fontFamily: '"DM Sans", sans-serif', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
                      Réserver <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginTop: 40, height: 180 }}>
              {[IMAGES.fleuriste.plants, IMAGES.fleuriste.bouquet, IMAGES.fleuriste.work].map((img, i) => (
                <img key={i} src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
              ))}
            </div>
          </div>
        )}

        {section === 'contact' && (
          <div style={{ padding: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            <div>
              <h2 style={{ fontSize: 36, fontWeight: 900, textTransform: 'uppercase', letterSpacing: -0.5, margin: '0 0 8px' }}>Contactez-nous</h2>
              <div style={{ width: 48, height: 4, background: lime, marginBottom: 28 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[{ Icon: Phone, val: '06 12 34 56 78' }, { Icon: Clock, val: 'Lun – Sam : 9h – 19h' }, { Icon: MapPin, val: '14 rue Botanique, Paris 19e' }].map(({ Icon, val }) => (
                  <div key={val} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <Icon size={15} color={lime} />
                    <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{val}</span>
                  </div>
                ))}
              </div>
              <img src={IMAGES.fleuriste.hero} alt="plantes" style={{ width: '100%', height: 200, objectFit: 'cover', marginTop: 28, filter: 'brightness(0.7)' }} />
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {['Prénom', 'Téléphone', 'Type de demande'].map(f => (
                  <div key={f}>
                    <label style={{ fontSize: 11, fontWeight: 800, color: lime, letterSpacing: 2, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>{f}</label>
                    <input type="text" style={{ width: '100%', background: 'rgba(255,255,255,0.07)', border: `1px solid rgba(163,230,53,0.3)`, color: '#fff', padding: '12px 14px', fontSize: 15, fontFamily: '"DM Sans", sans-serif', boxSizing: 'border-box', outline: 'none' }} />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 11, fontWeight: 800, color: lime, letterSpacing: 2, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Message</label>
                  <textarea rows={4} style={{ width: '100%', background: 'rgba(255,255,255,0.07)', border: `1px solid rgba(163,230,53,0.3)`, color: '#fff', padding: '12px 14px', fontSize: 15, fontFamily: '"DM Sans", sans-serif', boxSizing: 'border-box', resize: 'none', outline: 'none' }} />
                </div>
                <button style={{ background: lime, color: darkGreen, border: 'none', padding: '14px 0', fontSize: 15, fontWeight: 900, cursor: 'pointer', letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: '"DM Sans", sans-serif' }}>
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
