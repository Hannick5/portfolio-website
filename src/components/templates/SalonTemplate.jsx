import { useState } from 'react';

const prestations = [
  { cat: 'Coupe', items: [{ name: 'Coupe femme', price: '45€' }, { name: 'Coupe homme', price: '25€' }, { name: 'Coupe enfant', price: '18€' }] },
  { cat: 'Coloration', items: [{ name: 'Couleur complète', price: '75€' }, { name: 'Balayage', price: '95€' }, { name: 'Mèches', price: '85€' }] },
  { cat: 'Soin', items: [{ name: 'Soin kératine', price: '120€' }, { name: 'Brushing', price: '35€' }, { name: 'Lissage brésilien', price: '180€' }] },
];

const team = [
  { name: 'Sophie L.', role: 'Directrice & coloriste', emoji: '👩‍🦰' },
  { name: 'Marc D.', role: 'Coiffeur styliste', emoji: '👨‍🦱' },
  { name: 'Léa M.', role: 'Spécialiste kératine', emoji: '👩‍🦳' },
];

export default function SalonTemplate({ project }) {
  const [activeSection, setActiveSection] = useState('accueil');
  const [rdvData, setRdvData] = useState({ nom: '', tel: '', prestation: '', date: '' });
  const [rdvConfirmed, setRdvConfirmed] = useState(false);
  const { primaryColor, accentColor, name, tagline } = project;

  const isBarber = project.template === 'barber';

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <nav style={{ backgroundColor: primaryColor, padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <div style={{ color: accentColor, fontWeight: 800, fontSize: 19 }}>{isBarber ? '✂️' : '💇‍♀️'} {name}</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {['accueil', 'prestations', 'équipe', 'réserver'].map(item => (
            <button key={item} onClick={() => setActiveSection(item)}
              style={{ background: activeSection === item ? accentColor : 'rgba(255,255,255,0.1)', color: activeSection === item ? primaryColor : '#fff', border: 'none', padding: '7px 16px', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer', textTransform: 'capitalize' }}>
              {item}
            </button>
          ))}
        </div>
      </nav>

      <div style={{ flex: 1, overflow: 'auto', background: isBarber ? '#1c1917' : '#fdf2f8' }}>
        {activeSection === 'accueil' && (
          <div>
            <div style={{ background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`, padding: '70px 40px', textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: 72, marginBottom: 16 }}>{isBarber ? '💈' : '✨'}</div>
              <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 12, letterSpacing: -1 }}>{name}</h1>
              <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32 }}>{tagline}</p>
              <button onClick={() => setActiveSection('réserver')}
                style={{ background: '#fff', color: primaryColor, border: 'none', padding: '14px 40px', borderRadius: 40, fontWeight: 800, fontSize: 16, cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                Prendre rendez-vous
              </button>
            </div>
            <div style={{ padding: 40 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {[{ icon: '⭐', title: 'Note Google', val: '4.9/5' }, { icon: '👥', title: 'Clients fidèles', val: '1200+' }, { icon: '🎓', title: 'Années d\'expérience', val: '10 ans' }, { icon: '🕐', title: 'Sur RDV', val: '& sans attente' }].map((s, i) => (
                  <div key={i} style={{ background: isBarber ? '#292524' : '#fff', padding: 24, borderRadius: 12, textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <div style={{ fontSize: 28, marginBottom: 6 }}>{s.icon}</div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: accentColor }}>{s.val}</div>
                    <div style={{ fontSize: 12, color: isBarber ? '#a8a29e' : '#6b7280', marginTop: 4 }}>{s.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'prestations' && (
          <div style={{ padding: 40 }}>
            <h2 style={{ color: accentColor, fontSize: 28, marginBottom: 28, textAlign: 'center' }}>Nos Prestations</h2>
            {prestations.map((cat, i) => (
              <div key={i} style={{ marginBottom: 28 }}>
                <h3 style={{ color: isBarber ? '#d6d3d1' : primaryColor, fontWeight: 700, fontSize: 16, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>{cat.cat}</h3>
                <div style={{ background: isBarber ? '#292524' : '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  {cat.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 20px', borderBottom: j < cat.items.length - 1 ? `1px solid ${isBarber ? '#44403c' : '#f3e8ff'}` : 'none' }}>
                      <span style={{ color: isBarber ? '#e7e5e4' : '#374151', fontWeight: 500 }}>{item.name}</span>
                      <span style={{ fontWeight: 700, color: accentColor }}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'équipe' && (
          <div style={{ padding: 40 }}>
            <h2 style={{ color: accentColor, fontSize: 28, marginBottom: 28, textAlign: 'center' }}>Notre Équipe</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
              {team.map((m, i) => (
                <div key={i} style={{ background: isBarber ? '#292524' : '#fff', borderRadius: 16, padding: 28, textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: 64, marginBottom: 12 }}>{m.emoji}</div>
                  <div style={{ fontWeight: 700, color: isBarber ? '#fff' : '#111', marginBottom: 6 }}>{m.name}</div>
                  <div style={{ fontSize: 13, color: isBarber ? '#a8a29e' : '#6b7280' }}>{m.role}</div>
                  <button onClick={() => setActiveSection('réserver')}
                    style={{ marginTop: 16, background: accentColor, color: primaryColor, border: 'none', padding: '8px 20px', borderRadius: 20, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
                    Réserver avec {m.name.split(' ')[0]}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'réserver' && (
          <div style={{ padding: 40, maxWidth: 520, margin: '0 auto' }}>
            <h2 style={{ color: accentColor, fontSize: 28, marginBottom: 28, textAlign: 'center' }}>Réserver en ligne</h2>
            {rdvConfirmed ? (
              <div style={{ background: isBarber ? '#292524' : '#fff', borderRadius: 16, padding: 40, textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                <p style={{ color: accentColor, fontWeight: 800, fontSize: 20 }}>RDV confirmé !</p>
                <p style={{ color: isBarber ? '#a8a29e' : '#6b7280', marginTop: 12 }}>Vous recevrez un SMS de confirmation.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setRdvConfirmed(true); }}
                style={{ background: isBarber ? '#292524' : '#fff', padding: 32, borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                {[['nom', 'Votre nom'], ['tel', 'Téléphone']].map(([f, l]) => (
                  <div key={f} style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: isBarber ? '#d6d3d1' : '#374151', fontSize: 14 }}>{l}</label>
                    <input required value={rdvData[f]} onChange={e => setRdvData({ ...rdvData, [f]: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', border: `2px solid ${isBarber ? '#44403c' : '#e5e7eb'}`, borderRadius: 8, fontSize: 14, background: isBarber ? '#1c1917' : '#fff', color: isBarber ? '#fff' : '#111', outline: 'none' }} />
                  </div>
                ))}
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: isBarber ? '#d6d3d1' : '#374151', fontSize: 14 }}>Prestation</label>
                  <select value={rdvData.prestation} onChange={e => setRdvData({ ...rdvData, prestation: e.target.value })} required
                    style={{ width: '100%', padding: '10px 14px', border: `2px solid ${isBarber ? '#44403c' : '#e5e7eb'}`, borderRadius: 8, fontSize: 14, background: isBarber ? '#1c1917' : '#fff', color: isBarber ? '#fff' : '#111', outline: 'none' }}>
                    <option value="">Choisissez...</option>
                    {prestations.flatMap(c => c.items).map((it, i) => <option key={i} value={it.name}>{it.name} — {it.price}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: isBarber ? '#d6d3d1' : '#374151', fontSize: 14 }}>Date souhaitée</label>
                  <input type="date" required value={rdvData.date} onChange={e => setRdvData({ ...rdvData, date: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', border: `2px solid ${isBarber ? '#44403c' : '#e5e7eb'}`, borderRadius: 8, fontSize: 14, background: isBarber ? '#1c1917' : '#fff', color: isBarber ? '#fff' : '#111', outline: 'none' }} />
                </div>
                <button type="submit" style={{ background: accentColor, color: primaryColor, border: 'none', width: '100%', padding: '14px', borderRadius: 8, fontWeight: 800, fontSize: 16, cursor: 'pointer' }}>
                  Confirmer mon rendez-vous ✓
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
