import { useState } from 'react';

const menuItems = {
  entrées: [
    { name: 'Soupe à l\'oignon gratinée', price: '9€', desc: 'Tradition française' },
    { name: 'Foie gras maison', price: '16€', desc: 'Chutney de figues' },
    { name: 'Salade de chèvre chaud', price: '11€', desc: 'Miel, noix, roquette' },
  ],
  plats: [
    { name: 'Entrecôte sauce béarnaise', price: '28€', desc: 'Frites maison' },
    { name: 'Filet de bar en croûte', price: '26€', desc: 'Légumes de saison' },
    { name: 'Confit de canard', price: '22€', desc: 'Pommes sarladaises' },
  ],
  desserts: [
    { name: 'Crème brûlée', price: '8€', desc: 'Vanille Bourbon' },
    { name: 'Tarte Tatin', price: '9€', desc: 'Crème fraîche' },
    { name: 'Moelleux au chocolat', price: '8€', desc: 'Cœur coulant' },
  ],
};

export default function RestaurantTemplate({ project }) {
  const [activeSection, setActiveSection] = useState('accueil');
  const [activeMenuCat, setActiveMenuCat] = useState('entrées');
  const [resaData, setResaData] = useState({ nom: '', tel: '', date: '', personnes: '2' });
  const [resaOk, setResaOk] = useState(false);
  const { primaryColor, accentColor, name, tagline } = project;
  const isCafe = project.template === 'cafe';

  return (
    <div style={{ fontFamily: 'Georgia, serif', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <nav style={{ backgroundColor: primaryColor, padding: '14px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <div style={{ color: accentColor, fontWeight: 700, fontSize: 20 }}>{isCafe ? '☕' : '🍽️'} {name}</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {['accueil', 'menu', 'réserver'].map(item => (
            <button key={item} onClick={() => setActiveSection(item)}
              style={{ background: activeSection === item ? accentColor : 'transparent', color: activeSection === item ? primaryColor : '#fff', border: activeSection === item ? 'none' : '1px solid rgba(255,255,255,0.3)', padding: '8px 20px', borderRadius: 4, fontSize: 14, cursor: 'pointer', textTransform: 'capitalize' }}>
              {item}
            </button>
          ))}
        </div>
      </nav>

      <div style={{ flex: 1, overflow: 'auto', background: '#faf8f5' }}>
        {activeSection === 'accueil' && (
          <div>
            <div style={{ background: `linear-gradient(to bottom, ${primaryColor}, rgba(0,0,0,0.7))`, padding: '80px 40px', textAlign: 'center', color: '#fff', position: 'relative' }}>
              <div style={{ fontSize: 64, marginBottom: 20 }}>{isCafe ? '☕' : '🥗'}</div>
              <h1 style={{ fontSize: 42, fontWeight: 700, marginBottom: 12, fontStyle: 'italic' }}>{name}</h1>
              <p style={{ fontSize: 18, opacity: 0.85, marginBottom: 32 }}>{tagline}</p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                <button onClick={() => setActiveSection('menu')}
                  style={{ background: accentColor, color: primaryColor, border: 'none', padding: '13px 32px', borderRadius: 4, fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
                  Voir le menu
                </button>
                <button onClick={() => setActiveSection('réserver')}
                  style={{ background: 'transparent', color: '#fff', border: '2px solid #fff', padding: '13px 32px', borderRadius: 4, fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
                  Réserver une table
                </button>
              </div>
            </div>
            <div style={{ padding: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
              {[{ icon: '📍', title: 'Adresse', val: '5 Rue du Faubourg, Paris 11e' }, { icon: '⏰', title: 'Horaires', val: 'Mar—Sam : 12h—14h30 & 19h—22h30' }, { icon: '📞', title: 'Réservation', val: '01 43 56 78 90' }].map((i, idx) => (
                <div key={idx} style={{ background: '#fff', padding: 24, borderRadius: 8, textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{i.icon}</div>
                  <div style={{ fontWeight: 700, color: '#333', marginBottom: 6 }}>{i.title}</div>
                  <div style={{ fontSize: 13, color: '#666' }}>{i.val}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'menu' && (
          <div style={{ padding: 40 }}>
            <h2 style={{ color: primaryColor, fontSize: 30, textAlign: 'center', marginBottom: 8, fontStyle: 'italic' }}>Notre Carte</h2>
            <p style={{ textAlign: 'center', color: '#888', marginBottom: 28, fontSize: 14 }}>Produits frais du marché</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 28 }}>
              {Object.keys(menuItems).map(cat => (
                <button key={cat} onClick={() => setActiveMenuCat(cat)}
                  style={{ background: activeMenuCat === cat ? primaryColor : '#fff', color: activeMenuCat === cat ? '#fff' : '#333', border: `2px solid ${activeMenuCat === cat ? primaryColor : '#e5e7eb'}`, padding: '8px 22px', borderRadius: 4, fontSize: 14, cursor: 'pointer', fontFamily: 'Georgia, serif', textTransform: 'capitalize' }}>
                  {cat}
                </button>
              ))}
            </div>
            <div style={{ maxWidth: 580, margin: '0 auto' }}>
              {menuItems[activeMenuCat].map((item, i) => (
                <div key={i} style={{ background: '#fff', padding: '20px 24px', borderRadius: 8, marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
                  <div>
                    <div style={{ fontWeight: 700, color: '#222', marginBottom: 4 }}>{item.name}</div>
                    <div style={{ fontSize: 13, color: '#888', fontStyle: 'italic' }}>{item.desc}</div>
                  </div>
                  <div style={{ fontWeight: 700, color: accentColor, fontSize: 18, marginLeft: 16, flexShrink: 0 }}>{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'réserver' && (
          <div style={{ padding: 40, maxWidth: 500, margin: '0 auto' }}>
            <h2 style={{ color: primaryColor, fontSize: 28, textAlign: 'center', marginBottom: 28, fontStyle: 'italic' }}>Réserver une table</h2>
            {resaOk ? (
              <div style={{ background: '#fff', borderRadius: 12, padding: 40, textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>🍷</div>
                <p style={{ color: primaryColor, fontWeight: 700, fontSize: 20 }}>Réservation confirmée !</p>
                <p style={{ color: '#888', marginTop: 12, fontStyle: 'italic' }}>À très vite autour d'une bonne table.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setResaOk(true); }}
                style={{ background: '#fff', padding: 32, borderRadius: 12, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                {[['nom', 'Nom & prénom', 'text'], ['tel', 'Téléphone', 'tel']].map(([f, l, t]) => (
                  <div key={f} style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: '#444', fontSize: 14 }}>{l}</label>
                    <input type={t} required value={resaData[f]} onChange={e => setResaData({ ...resaData, [f]: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: 6, fontSize: 14 }} />
                  </div>
                ))}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: '#444', fontSize: 14 }}>Date</label>
                    <input type="date" required value={resaData.date} onChange={e => setResaData({ ...resaData, date: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: 6, fontSize: 14 }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: '#444', fontSize: 14 }}>Personnes</label>
                    <select value={resaData.personnes} onChange={e => setResaData({ ...resaData, personnes: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: 6, fontSize: 14, background: '#fff' }}>
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} personne{n > 1 ? 's' : ''}</option>)}
                    </select>
                  </div>
                </div>
                <button type="submit" style={{ background: primaryColor, color: '#fff', border: 'none', width: '100%', padding: '14px', borderRadius: 6, fontWeight: 700, fontSize: 16, cursor: 'pointer', fontFamily: 'Georgia, serif' }}>
                  Réserver ma table →
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
