import { useState } from 'react';
import { ShoppingBag, Clock, MapPin, Heart, ChevronRight, Plus } from 'lucide-react';
import { IMAGES } from '../../utils/images';

const PRODUITS = [
  { name: 'Pain de Campagne', desc: 'Farine T80, levain naturel, 24h de fermentation', price: '4,50€', img: IMAGES.bakery.bread, tag: 'Signature' },
  { name: 'Croissant Pur Beurre', desc: 'Beurre AOP Charentes-Poitou, feuilletage maison', price: '1,80€', img: IMAGES.bakery.croissant, tag: 'Bestseller' },
  { name: 'Tarte Citron', desc: 'Citrons de Menton, meringue italienne légère', price: '3,50€', img: IMAGES.bakery.tarte, tag: 'Saison' },
  { name: 'Pain au Chocolat', desc: 'Chocolat Valrhona 64%, feuilleté pur beurre', price: '2,20€', img: IMAGES.bakery.products, tag: null },
];

export default function BakeryModernTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [activeTag, setActiveTag] = useState('Tout');
  const { primaryColor, accentColor, name, tagline } = project;

  const nav = ['accueil', 'produits', 'atelier', 'contact'];

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"DM Sans", sans-serif', background: '#FFFFFF', color: '#1A1A1A' }}>

      {/* NAV — minimal top bar */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #F0F0F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', height: 60, flexShrink: 0 }}>
        <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.5, color: '#1A1A1A' }}>{name}</div>
        <div style={{ display: 'flex', gap: 32 }}>
          {nav.map(s => (
            <button key={s} onClick={() => setSection(s)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 14, fontWeight: section === s ? 700 : 400,
              color: section === s ? accentColor : '#999',
              textTransform: 'capitalize', letterSpacing: 0.2,
              borderBottom: section === s ? `2px solid ${accentColor}` : '2px solid transparent',
              paddingBottom: 2,
            }}>{s}</button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ fontSize: 12, color: '#999', fontWeight: 600 }}>Ouvert aujourd'hui jusqu'à 19h30</div>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E' }} />
        </div>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {section === 'accueil' && (
          <div>
            {/* HERO — full bleed, text overlaid at bottom */}
            <div style={{ position: 'relative', height: 400 }}>
              <img src={IMAGES.bakery.interior} alt="boulangerie" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 52px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <div style={{ color: accentColor, fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 10 }}>Boulangerie Contemporaine</div>
                  <h1 style={{ fontSize: 48, fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1.1, letterSpacing: -1 }}>{tagline}</h1>
                </div>
                <button onClick={() => setSection('produits')} style={{ background: '#fff', color: '#1A1A1A', border: 'none', padding: '14px 28px', fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                  Commander <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* INFO STRIP */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#1A1A1A', color: '#fff' }}>
              {[{ Icon: Clock, title: 'Horaires', val: 'Mar–Sam 7h–19h30 • Dim 7h–13h' }, { Icon: MapPin, title: 'Adresse', val: '24 rue des Artisans, Paris 11e' }, { Icon: ShoppingBag, title: 'Commande', val: 'Retrait en boutique • Click & Collect' }].map(({ Icon, title, val }) => (
                <div key={title} style={{ padding: '20px 28px', borderRight: title !== 'Commande' ? '1px solid #333' : 'none', display: 'flex', gap: 14, alignItems: 'center' }}>
                  <Icon size={18} color={accentColor} />
                  <div>
                    <div style={{ fontSize: 11, color: '#666', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 2 }}>{title}</div>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* PRODUCTS PREVIEW */}
            <div style={{ padding: '52px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
                <h2 style={{ fontSize: 32, fontWeight: 800, margin: 0, letterSpacing: -0.5 }}>Nos créations</h2>
                <button onClick={() => setSection('produits')} style={{ background: 'none', border: 'none', color: accentColor, fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                  Tout voir <ChevronRight size={14} />
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 20 }}>
                {PRODUITS.map(p => (
                  <div key={p.name} style={{ cursor: 'pointer' }}>
                    <div style={{ position: 'relative', marginBottom: 12, overflow: 'hidden' }}>
                      <img src={p.img} alt={p.name} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }} />
                      {p.tag && <div style={{ position: 'absolute', top: 10, left: 10, background: accentColor, color: '#fff', padding: '3px 10px', fontSize: 11, fontWeight: 700, letterSpacing: 0.5 }}>{p.tag}</div>}
                      <button style={{ position: 'absolute', bottom: 10, right: 10, background: '#1A1A1A', border: 'none', color: '#fff', width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <Plus size={14} />
                      </button>
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: '#999', lineHeight: 1.5, marginBottom: 6 }}>{p.desc}</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: accentColor }}>{p.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* MANIFESTO */}
            <div style={{ background: '#F7F7F7', padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 11, color: accentColor, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Notre philosophie</div>
                <h2 style={{ fontSize: 36, fontWeight: 800, margin: '0 0 20px', letterSpacing: -0.5, lineHeight: 1.2 }}>Moins, mais mieux.</h2>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, margin: '0 0 20px' }}>
                  Nous ne faisons pas 50 références. Nous en faisons 12, parfaitement. Chaque recette est réfléchie, testée, ajustée jusqu'à ce qu'elle soit juste.
                </p>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, margin: 0 }}>
                  Farines biologiques de meuniers locaux. Beurre AOP. Levain naturel. Aucun additif. C'est aussi simple que ça.
                </p>
              </div>
              <img src={IMAGES.bakery.hero} alt="boulangerie" style={{ width: '100%', height: 300, objectFit: 'cover' }} />
            </div>
          </div>
        )}

        {section === 'produits' && (
          <div style={{ padding: '52px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
              <h2 style={{ fontSize: 36, fontWeight: 800, margin: 0, letterSpacing: -0.5 }}>La Carte</h2>
              <div style={{ display: 'flex', gap: 8 }}>
                {['Tout', 'Pains', 'Viennoiseries', 'Pâtisseries'].map(tag => (
                  <button key={tag} onClick={() => setActiveTag(tag)} style={{
                    background: activeTag === tag ? '#1A1A1A' : '#F0F0F0',
                    color: activeTag === tag ? '#fff' : '#666',
                    border: 'none', padding: '7px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer',
                    borderRadius: 100,
                  }}>{tag}</button>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              {PRODUITS.map(p => (
                <div key={p.name} style={{ display: 'flex', gap: 20, borderBottom: '1px solid #F0F0F0', paddingBottom: 24 }}>
                  <img src={p.img} alt={p.name} style={{ width: 100, height: 100, objectFit: 'cover', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                      <div style={{ fontSize: 17, fontWeight: 700 }}>{p.name}</div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: accentColor, flexShrink: 0, marginLeft: 12 }}>{p.price}</div>
                    </div>
                    <div style={{ fontSize: 13, color: '#999', lineHeight: 1.6, marginBottom: 10 }}>{p.desc}</div>
                    <button style={{ background: '#1A1A1A', color: '#fff', border: 'none', padding: '7px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Plus size={12} /> Ajouter
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'atelier' && (
          <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 11, color: accentColor, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>L'atelier</div>
              <h2 style={{ fontSize: 36, fontWeight: 800, margin: '0 0 20px', letterSpacing: -0.5 }}>Derrière le comptoir</h2>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 20 }}>
                Notre équipe arrive chaque matin à 4h pour que vous trouviez votre pain frais à l'ouverture. Pas de congélateur, pas de pré-mix : tout est fait à la main, chaque jour.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 32 }}>
                {[['4h', 'heure de début'], ['0', 'additif utilisé'], ['100%', 'bio & local'], ['12', 'références au total']].map(([val, lab]) => (
                  <div key={lab} style={{ borderLeft: `3px solid ${accentColor}`, paddingLeft: 16 }}>
                    <div style={{ fontSize: 28, fontWeight: 900, color: '#1A1A1A', letterSpacing: -1 }}>{val}</div>
                    <div style={{ fontSize: 12, color: '#999', fontWeight: 600 }}>{lab}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <img src={IMAGES.bakery.bread} alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
              <img src={IMAGES.bakery.croissant} alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
              <img src={IMAGES.bakery.interior} alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
              <img src={IMAGES.bakery.tarte} alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
            </div>
          </div>
        )}

        {section === 'contact' && (
          <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52 }}>
            <div>
              <h2 style={{ fontSize: 36, fontWeight: 800, margin: '0 0 32px', letterSpacing: -0.5 }}>Informations</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[{ Icon: Clock, title: 'Horaires', detail: ['Mar – Ven : 7h – 19h30', 'Sam – Dim : 7h – 13h', 'Lundi : Fermé'] }, { Icon: MapPin, title: 'Adresse', detail: ['24 rue des Artisans', '75011 Paris', 'Métro Voltaire'] }].map(({ Icon, title, detail }) => (
                  <div key={title} style={{ display: 'flex', gap: 16 }}>
                    <div style={{ flexShrink: 0, paddingTop: 2 }}><Icon size={18} color={accentColor} /></div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{title}</div>
                      {detail.map(d => <div key={d} style={{ fontSize: 13, color: '#666', lineHeight: 2 }}>{d}</div>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 24, letterSpacing: -0.5 }}>Commande spéciale</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {['Votre prénom', 'Téléphone', 'Votre commande'].map((label, i) => (
                  <div key={label}>
                    <label style={{ fontSize: 12, fontWeight: 700, color: '#999', letterSpacing: 1, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>{label}</label>
                    {i < 2
                      ? <input type="text" style={{ width: '100%', border: '1px solid #E5E5E5', padding: '12px 14px', fontSize: 14, boxSizing: 'border-box', outline: 'none', fontFamily: '"DM Sans", sans-serif', borderBottom: `2px solid ${accentColor}` }} />
                      : <textarea rows={4} style={{ width: '100%', border: '1px solid #E5E5E5', padding: '12px 14px', fontSize: 14, boxSizing: 'border-box', resize: 'none', outline: 'none', fontFamily: '"DM Sans", sans-serif', borderBottom: `2px solid ${accentColor}` }} />
                    }
                  </div>
                ))}
                <button style={{ background: '#1A1A1A', color: '#fff', border: 'none', padding: '14px 0', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: '"DM Sans", sans-serif' }}>
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
