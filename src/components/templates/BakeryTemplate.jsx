import { useState } from 'react';

const products = [
  { name: 'Baguette Tradition', price: '1,20€', emoji: '🥖' },
  { name: 'Croissant au beurre', price: '1,50€', emoji: '🥐' },
  { name: 'Pain au chocolat', price: '1,60€', emoji: '🍫' },
  { name: 'Tarte aux pommes', price: '3,50€', emoji: '🥧' },
  { name: 'Éclair au café', price: '2,80€', emoji: '☕' },
  { name: 'Brioche maison', price: '4,20€', emoji: '🧁' },
];

export default function BakeryTemplate({ project }) {
  const [activeSection, setActiveSection] = useState('accueil');
  const { primaryColor, accentColor, name, tagline } = project;

  const navItems = ['accueil', 'produits', 'horaires', 'contact'];

  return (
    <div style={{ fontFamily: 'Georgia, serif', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Nav */}
      <nav style={{ backgroundColor: primaryColor, padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <div style={{ color: accentColor, fontWeight: 700, fontSize: 18 }}>🥖 {name}</div>
        <div style={{ display: 'flex', gap: 16 }}>
          {navItems.map(item => (
            <button key={item} onClick={() => setActiveSection(item)}
              style={{ background: activeSection === item ? accentColor : 'transparent', color: activeSection === item ? primaryColor : '#fff', border: 'none', padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: 'pointer', textTransform: 'capitalize' }}>
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <div style={{ flex: 1, overflow: 'auto', backgroundColor: '#fffbf5' }}>
        {activeSection === 'accueil' && (
          <div>
            <div style={{ background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`, padding: '60px 40px', textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: 64, marginBottom: 16 }}>🥐</div>
              <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>{name}</h1>
              <p style={{ fontSize: 18, opacity: 0.9 }}>{tagline}</p>
              <button style={{ marginTop: 24, background: '#fff', color: primaryColor, border: 'none', padding: '12px 32px', borderRadius: 30, fontWeight: 700, fontSize: 15, cursor: 'pointer' }}
                onClick={() => setActiveSection('produits')}>
                Voir nos produits
              </button>
            </div>
            <div style={{ padding: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
              {[{ icon: '⭐', title: 'Qualité Artisanale', desc: 'Fait maison chaque matin dès 4h' },
                { icon: '🌾', title: 'Ingrédients Bio', desc: 'Farines locales et beurre AOP' },
                { icon: '🏆', title: 'Primés', desc: 'Meilleure baguette du département 2023' }].map((f, i) => (
                <div key={i} style={{ background: '#fff', padding: 24, borderRadius: 12, textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <div style={{ fontSize: 36, marginBottom: 8 }}>{f.icon}</div>
                  <div style={{ fontWeight: 700, marginBottom: 6, color: '#333' }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: '#666' }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'produits' && (
          <div style={{ padding: 40 }}>
            <h2 style={{ color: primaryColor, fontSize: 28, marginBottom: 24, textAlign: 'center' }}>Nos Produits</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {products.map((p, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 12, padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: `2px solid transparent`, transition: 'border 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = accentColor}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 32 }}>{p.emoji}</span>
                    <span style={{ fontWeight: 600, color: '#333' }}>{p.name}</span>
                  </div>
                  <span style={{ fontWeight: 700, color: primaryColor, fontSize: 16 }}>{p.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'horaires' && (
          <div style={{ padding: 40, maxWidth: 500, margin: '0 auto' }}>
            <h2 style={{ color: primaryColor, fontSize: 28, marginBottom: 24, textAlign: 'center' }}>Horaires d'ouverture</h2>
            {[['Lundi', '7h - 19h30'], ['Mardi', '7h - 19h30'], ['Mercredi', '7h - 19h30'], ['Jeudi', '7h - 19h30'], ['Vendredi', '7h - 20h'], ['Samedi', '6h30 - 20h'], ['Dimanche', '7h - 13h']].map(([jour, heure], i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 20px', background: i % 2 === 0 ? '#fff' : '#fef9f0', borderRadius: 8, marginBottom: 4 }}>
                <span style={{ fontWeight: 600, color: '#444' }}>{jour}</span>
                <span style={{ color: primaryColor, fontWeight: 700 }}>{heure}</span>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'contact' && (
          <div style={{ padding: 40, maxWidth: 500, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: primaryColor, fontSize: 28, marginBottom: 24 }}>Nous Trouver</h2>
            <div style={{ background: '#fff', padding: 32, borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>📍</div>
              <p style={{ color: '#555', marginBottom: 8 }}>12 rue de la Paix, 75001 Paris</p>
              <p style={{ color: primaryColor, fontWeight: 700, fontSize: 18, marginBottom: 16 }}>📞 01 23 45 67 89</p>
              <div style={{ background: '#f0f9ff', borderRadius: 8, padding: 16, marginBottom: 20 }}>
                <p style={{ color: '#444', fontSize: 14 }}>📧 contact@{name.toLowerCase().replace(/\s/g, '')}.fr</p>
              </div>
              <button style={{ background: primaryColor, color: '#fff', border: 'none', padding: '12px 32px', borderRadius: 24, fontWeight: 700, cursor: 'pointer', width: '100%' }}>
                Nous contacter
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
