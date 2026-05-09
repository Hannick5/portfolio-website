import { useState } from 'react';
import { Coffee, Clock, MapPin, Heart, Leaf, ChevronRight, Star } from 'lucide-react';
import { IMAGES } from '../../utils/images';

const MENU = [
  { cat: 'Cafés', items: [{ name: 'Espresso', desc: 'Double extraction, grain Éthiopie', price: '2,80€' }, { name: 'Flat White', desc: 'Lait entier texturé, velours en tasse', price: '4,20€' }, { name: 'Matcha Latte', desc: 'Matcha cérémonie, lait d\'avoine', price: '4,80€' }] },
  { cat: 'Brunch', items: [{ name: 'Avocado Toast', desc: 'Pain sourdough, avocat, grenade, graines', price: '12€' }, { name: 'Pancakes', desc: 'Flocons d\'avoine, sirop d\'érable, myrtilles', price: '10€' }, { name: 'Granola Bowl', desc: 'Granola maison, lait de coco, fruits frais', price: '9€' }] },
  { cat: 'Douceurs', items: [{ name: 'Madeleine au beurre', desc: 'Beurre noisette, zeste de citron', price: '2,50€' }, { name: 'Banana Bread', desc: 'Bananes bio, noix de pécan, peu de sucre', price: '3,50€' }] },
];

export default function CafeTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [activeCat, setActiveCat] = useState('Cafés');
  const { primaryColor, accentColor, name, tagline } = project;

  const nav = ['accueil', 'menu', 'histoire', 'contact'];
  const cream = '#F9F4EF';
  const terra = accentColor;
  const dark = '#2C1810';

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"DM Sans", sans-serif', background: cream, color: dark }}>

      {/* NAV — scandi clean */}
      <nav style={{ background: cream, borderBottom: '1px solid rgba(44,24,16,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', height: 60, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Coffee size={18} color={terra} />
          <span style={{ fontSize: 20, fontWeight: 700, color: dark, letterSpacing: -0.3 }}>{name}</span>
        </div>
        <div style={{ display: 'flex', gap: 28 }}>
          {nav.map(s => (
            <button key={s} onClick={() => setSection(s)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 14, fontWeight: section === s ? 700 : 400,
              color: section === s ? terra : 'rgba(44,24,16,0.5)',
              borderBottom: section === s ? `2px solid ${terra}` : '2px solid transparent',
              paddingBottom: 2, textTransform: 'capitalize',
            }}>{s}</button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(44,24,16,0.5)', fontWeight: 500 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E' }} />
          Ouvert • Ferme à 18h
        </div>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {section === 'accueil' && (
          <div>
            {/* HERO split */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 360 }}>
              <div style={{ padding: '64px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <Coffee size={14} color={terra} />
                  <span style={{ fontSize: 12, color: terra, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>Café de spécialité</span>
                </div>
                <h1 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.1, margin: '0 0 20px', letterSpacing: -1, color: dark }}>
                  Le café<br />comme<br /><em style={{ fontWeight: 300, letterSpacing: -0.5 }}>{tagline}</em>
                </h1>
                <p style={{ fontSize: 15, color: 'rgba(44,24,16,0.6)', lineHeight: 1.8, marginBottom: 32, maxWidth: 340 }}>
                  Un espace calme pour travailler, lire, ou simplement savourer. Du café sourcé directement chez les producteurs.
                </p>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => setSection('menu')} style={{ background: dark, color: cream, border: 'none', padding: '12px 28px', fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                    Voir la carte <ChevronRight size={14} />
                  </button>
                  <button onClick={() => setSection('histoire')} style={{ background: 'transparent', color: dark, border: `1px solid rgba(44,24,16,0.25)`, padding: '12px 28px', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
                    Notre histoire
                  </button>
                </div>
              </div>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={IMAGES.restaurant.cafe} alt="café" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            {/* INFOS */}
            <div style={{ background: dark, color: cream, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '0' }}>
              {[{ Icon: Clock, title: 'Horaires', val: 'Lun–Ven 8h–18h • Sam–Dim 9h–17h' }, { Icon: MapPin, title: 'Adresse', val: '7 rue Lumière, Paris 9e' }, { Icon: Leaf, title: 'Engagement', val: 'Café bio, lait local, zéro gaspi' }].map(({ Icon, title, val }, i) => (
                <div key={title} style={{ padding: '20px 28px', borderRight: i < 2 ? '1px solid rgba(249,244,239,0.1)' : 'none', display: 'flex', gap: 14, alignItems: 'center' }}>
                  <Icon size={16} color={terra} />
                  <div>
                    <div style={{ fontSize: 11, color: 'rgba(249,244,239,0.4)', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 2 }}>{title}</div>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* HIGHLIGHTS */}
            <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
              {[
                { Icon: Coffee, title: 'Café de Spécialité', desc: 'Sourcing direct, torréfaction artisanale, extraction soignée.' },
                { Icon: Heart, title: 'Brunch Maison', desc: 'Préparé chaque matin, ingrédients de saison, recettes végétales.' },
                { Icon: Leaf, title: 'Espace de Travail', desc: 'Wi-Fi, prises, lumière naturelle. Réservation longue durée.' },
              ].map(({ Icon, title, desc }) => (
                <div key={title} style={{ textAlign: 'center' }}>
                  <div style={{ width: 52, height: 52, background: `${terra}15`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Icon size={20} color={terra} />
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: dark }}>{title}</div>
                  <div style={{ fontSize: 14, color: 'rgba(44,24,16,0.55)', lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>

            {/* AVIS */}
            <div style={{ background: `${terra}10`, padding: '48px 52px' }}>
              <div style={{ display: 'flex', gap: 2, marginBottom: 8, justifyContent: 'center' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} color={terra} fill={terra} />)}
              </div>
              <div style={{ textAlign: 'center', fontSize: 22, fontStyle: 'italic', fontWeight: 300, color: dark, marginBottom: 8, maxWidth: 480, margin: '0 auto 16px' }}>
                "Le meilleur flat white de Paris, dans un cadre qui invite à s'attarder."
              </div>
              <div style={{ textAlign: 'center', fontSize: 13, color: 'rgba(44,24,16,0.5)', fontWeight: 600 }}>— Marie T., Google</div>
            </div>
          </div>
        )}

        {section === 'menu' && (
          <div style={{ padding: '52px' }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, margin: '0 0 8px', letterSpacing: -0.5, color: dark }}>La Carte</h2>
            <div style={{ width: 40, height: 3, background: terra, marginBottom: 32, borderRadius: 2 }} />
            <div style={{ display: 'flex', gap: 8, marginBottom: 40 }}>
              {MENU.map(({ cat }) => (
                <button key={cat} onClick={() => setActiveCat(cat)} style={{
                  background: activeCat === cat ? dark : 'transparent',
                  color: activeCat === cat ? cream : 'rgba(44,24,16,0.5)',
                  border: `1px solid rgba(44,24,16,0.2)`,
                  padding: '8px 20px', fontSize: 14, fontWeight: 600, cursor: 'pointer', borderRadius: 100, transition: 'all 0.15s',
                }}>{cat}</button>
              ))}
            </div>
            {MENU.filter(m => m.cat === activeCat).map(({ items }) => (
              <div key={activeCat} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {items.map(item => (
                  <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid rgba(44,24,16,0.08)' }}>
                    <div>
                      <div style={{ fontSize: 17, fontWeight: 700, color: dark, marginBottom: 4 }}>{item.name}</div>
                      <div style={{ fontSize: 13, color: 'rgba(44,24,16,0.5)' }}>{item.desc}</div>
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: terra, marginLeft: 20, flexShrink: 0 }}>{item.price}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {section === 'histoire' && (
          <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <img src={IMAGES.restaurant.cafe} alt="café" style={{ width: '100%', height: 360, objectFit: 'cover' }} />
            <div>
              <div style={{ fontSize: 12, color: terra, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Notre histoire</div>
              <h2 style={{ fontSize: 36, fontWeight: 800, margin: '0 0 20px', letterSpacing: -0.5, color: dark }}>Né d'une passion<br />pour le bon café</h2>
              <p style={{ fontSize: 15, color: 'rgba(44,24,16,0.6)', lineHeight: 1.8, marginBottom: 20 }}>
                Café Lumière est né en 2018 de la conviction que le café mérite autant d'attention que le vin. Chaque grain est sélectionné, chaque tasse est une expérience.
              </p>
              <p style={{ fontSize: 15, color: 'rgba(44,24,16,0.6)', lineHeight: 1.8, marginBottom: 32 }}>
                Notre brunch a suivi naturellement — une invitation à ralentir, à manger bien, à repartir nourri de l'intérieur.
              </p>
              <div style={{ display: 'flex', gap: 32 }}>
                {[['2018', 'Ouverture'], ['12', 'Origines de café'], ['100%', 'Fait maison']].map(([val, lab]) => (
                  <div key={lab}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: terra }}>{val}</div>
                    <div style={{ fontSize: 12, color: 'rgba(44,24,16,0.5)', fontWeight: 600 }}>{lab}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {section === 'contact' && (
          <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52 }}>
            <div>
              <h2 style={{ fontSize: 36, fontWeight: 800, margin: '0 0 32px', letterSpacing: -0.5, color: dark }}>Nous trouver</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[{ Icon: Clock, val: 'Lun – Ven : 8h – 18h • Week-end : 9h – 17h' }, { Icon: MapPin, val: '7 rue Lumière, 75009 Paris • Métro Pigalle' }, { Icon: Coffee, val: 'contact@cafelumiere.fr' }].map(({ Icon, val }) => (
                  <div key={val} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <div style={{ background: `${terra}15`, padding: 10, borderRadius: 8, flexShrink: 0, marginTop: 2 }}><Icon size={16} color={terra} /></div>
                    <span style={{ fontSize: 15, color: 'rgba(44,24,16,0.7)', lineHeight: 1.5, paddingTop: 10 }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: dark, marginBottom: 24 }}>Nous écrire</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {['Prénom', 'Email', 'Message'].map((f, i) => (
                  <div key={f}>
                    <label style={{ fontSize: 12, fontWeight: 700, color: 'rgba(44,24,16,0.5)', letterSpacing: 0.5, display: 'block', marginBottom: 6, textTransform: 'uppercase' }}>{f}</label>
                    {i < 2
                      ? <input type="text" style={{ width: '100%', border: 'none', borderBottom: `2px solid rgba(44,24,16,0.15)`, padding: '10px 0', fontSize: 15, fontFamily: '"DM Sans", sans-serif', color: dark, background: 'transparent', boxSizing: 'border-box', outline: 'none' }} />
                      : <textarea rows={4} style={{ width: '100%', border: 'none', borderBottom: `2px solid rgba(44,24,16,0.15)`, padding: '10px 0', fontSize: 15, fontFamily: '"DM Sans", sans-serif', color: dark, background: 'transparent', boxSizing: 'border-box', resize: 'none', outline: 'none' }} />
                    }
                  </div>
                ))}
                <button style={{ background: dark, color: cream, border: 'none', padding: '13px 0', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: '"DM Sans", sans-serif' }}>
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
