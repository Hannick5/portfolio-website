import { useState } from 'react';
import { IMAGES } from '../../utils/images';

// ══ ATELIER BEAUTÉ ══
// Aesthetic: Parisian haute couture — maximum whitespace, hairlines, near-zero decoration
// Font: Cormorant Garamond (refined italic) + Jost (featherlight)
// Layout: Full-bleed imagery, asymmetric grid, editorial fashion magazine

const PRESTATIONS = [
  { cat: 'Coupe', items: [['Coupe femme + brushing','65€','1h'],['Coupe homme','35€','45min'],['Coupe enfant','25€','30min']] },
  { cat: 'Couleur', items: [['Couleur complète','85€','2h'],['Balayage californien','115€','2h30'],['Tie & dye','100€','2h']] },
  { cat: 'Soin', items: [['Kératine lissante','145€','3h'],['Lissage brésilien','210€','3h30'],['Soin Olaplex','90€','2h']] },
];

const TEAM = [
  { nom: 'Sophie', role: 'Directrice artistique', years: '14 ans', img: IMAGES.salon.team1 },
  { nom: 'Marc', role: 'Coloriste expert', years: '9 ans', img: IMAGES.salon.team2 },
  { nom: 'Léa', role: 'Spécialiste kératine', years: '6 ans', img: IMAGES.salon.team3 },
];

export default function SalonTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [activeCat, setActiveCat] = useState(0);
  const [rdv, setRdv] = useState({ nom:'', tel:'', prestation:'', date:'', heure:'' });
  const [rdvOk, setRdvOk] = useState(false);
  const { primaryColor, accentColor, name, tagline } = project;
  const isBarber = project.template === 'barber';
  const gold = isBarber ? '#D4A843' : (accentColor || '#B8A07A');

  return (
    <div style={{ height:'100%', overflow:'hidden', display:'flex', flexDirection:'column', fontFamily:'"Jost", sans-serif', background: isBarber ? '#0D0D0D' : '#FAFAF8' }}>

      {/* NAV — ultra-minimaliste, hairline */}
      <nav style={{ background: isBarber ? '#0D0D0D' : '#FAFAF8', borderBottom: `1px solid ${isBarber ? '#222' : '#E0D8D0'}`, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 40px', height:60, flexShrink:0 }}>
        <span style={{ fontFamily:'"Cormorant Garamond", serif', fontWeight:300, fontSize:13, letterSpacing:4, textTransform:'uppercase', color: isBarber ? '#888' : '#9A8A7A' }}>
          {isBarber ? 'Barbershop · Paris' : 'Salon de Coiffure · Paris'}
        </span>
        <span style={{ fontFamily:'"Cormorant Garamond", serif', fontWeight:600, fontStyle:'italic', fontSize:20, color: isBarber ? '#FFF' : primaryColor, letterSpacing:-0.5 }}>{name}</span>
        <div style={{ display:'flex', gap:24 }}>
          {['accueil','prestations','galerie','équipe','réserver'].map(s => (
            <button key={s} onClick={() => setSection(s)} style={{ background:'none', border:'none', fontFamily:'"Jost", sans-serif', fontSize:12, fontWeight:300, letterSpacing:2, textTransform:'uppercase', color: section===s ? gold : (isBarber ? '#555' : '#9A8A7A'), cursor:'pointer', borderBottom: section===s ? `1px solid ${gold}` : '1px solid transparent', paddingBottom:2 }}>
              {s}
            </button>
          ))}
        </div>
      </nav>

      <div style={{ flex:1, overflow:'auto' }}>

        {/* ─── ACCUEIL ─── */}
        {section === 'accueil' && (
          <div>
            {/* Hero split — photo + giant text */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', height:400 }}>
              <div style={{ position:'relative', overflow:'hidden' }}>
                <img src={isBarber ? IMAGES.salon.barber : IMAGES.salon.hero} alt={name} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                <div style={{ position:'absolute', inset:0, background: isBarber ? 'rgba(0,0,0,0.4)' : 'rgba(250,250,248,0.1)' }} />
              </div>
              <div style={{ background: isBarber ? '#0D0D0D' : '#FAFAF8', display:'flex', flexDirection:'column', justifyContent:'center', padding:'48px 52px' }}>
                <div style={{ fontFamily:'"Cormorant Garamond", serif', fontWeight:300, fontSize:11, letterSpacing:4, textTransform:'uppercase', color: isBarber ? '#555' : '#C0B0A0', marginBottom:20 }}>
                  {isBarber ? 'The art of the cut' : 'L\'art de votre beauté'}
                </div>
                <h1 style={{ fontFamily:'"Cormorant Garamond", serif', fontWeight:600, fontStyle:'italic', fontSize:54, color: isBarber ? '#FFF' : primaryColor, lineHeight:1, marginBottom:20, letterSpacing:-1 }}>
                  {isBarber ? 'Barber\nKing.' : name.split(' ').join('\n')}
                </h1>
                <div style={{ width:40, height:1, background:gold, marginBottom:20 }} />
                <p style={{ fontFamily:'"Jost", sans-serif', fontWeight:300, fontSize:14, color: isBarber ? '#777' : '#8A7A6A', lineHeight:1.8 }}>{tagline}</p>
                <div style={{ display:'flex', gap:12, marginTop:28 }}>
                  <button onClick={() => setSection('réserver')} style={{ background:gold, color: isBarber ? '#000' : '#FFF', border:'none', padding:'12px 28px', fontFamily:'"Jost", sans-serif', fontSize:12, fontWeight:500, letterSpacing:2, textTransform:'uppercase', cursor:'pointer' }}>
                    Réserver
                  </button>
                  <button onClick={() => setSection('prestations')} style={{ background:'transparent', color: isBarber ? '#777' : '#8A7A6A', border:`1px solid ${isBarber ? '#333' : '#D0C8C0'}`, padding:'12px 28px', fontFamily:'"Jost", sans-serif', fontSize:12, letterSpacing:2, textTransform:'uppercase', cursor:'pointer' }}>
                    Tarifs
                  </button>
                </div>
              </div>
            </div>

            {/* Stats hairline */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', borderTop:`1px solid ${isBarber ? '#222' : '#E0D8D0'}`, borderBottom:`1px solid ${isBarber ? '#222' : '#E0D8D0'}` }}>
              {[['4.9 ★','Google Reviews'],['1200+','Clients fidèles'],['10 ans','Expertise'],['3','Stylistes']].map(([v,l],i) => (
                <div key={i} style={{ padding:'22px 32px', textAlign:'center', borderRight: i<3 ? `1px solid ${isBarber ? '#222' : '#E0D8D0'}` : 'none' }}>
                  <div style={{ fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', fontSize:24, fontWeight:600, color:gold }}>{v}</div>
                  <div style={{ fontFamily:'"Jost", sans-serif', fontWeight:300, fontSize:11, letterSpacing:1.5, textTransform:'uppercase', color: isBarber ? '#555' : '#9A8A7A', marginTop:4 }}>{l}</div>
                </div>
              ))}
            </div>

            {/* Équipe preview */}
            <div style={{ padding:'52px 40px', background: isBarber ? '#0D0D0D' : '#FAFAF8' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:36 }}>
                <h2 style={{ fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', fontSize:36, fontWeight:600, color: isBarber ? '#FFF' : primaryColor, letterSpacing:-0.5 }}>Notre équipe</h2>
                <button onClick={() => setSection('équipe')} style={{ background:'none', border:'none', fontFamily:'"Jost", sans-serif', fontSize:11, fontWeight:300, letterSpacing:2, textTransform:'uppercase', color:gold, cursor:'pointer' }}>Voir tout →</button>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24 }}>
                {TEAM.map((m,i) => (
                  <div key={i} onClick={() => setSection('équipe')} style={{ cursor:'pointer' }}>
                    <div style={{ position:'relative', overflow:'hidden', marginBottom:12 }}>
                      <img src={m.img} alt={m.nom} style={{ width:'100%', height:280, objectFit:'cover', filter: isBarber ? 'grayscale(0.4)' : 'none', transition:'transform 0.4s' }}
                        onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
                        onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
                    </div>
                    <div style={{ fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', fontSize:18, color: isBarber ? '#FFF' : primaryColor }}>{m.nom}</div>
                    <div style={{ fontFamily:'"Jost", sans-serif', fontWeight:300, fontSize:11, letterSpacing:1.5, color: isBarber ? '#555' : '#9A8A7A', textTransform:'uppercase', marginTop:3 }}>{m.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── PRESTATIONS ─── */}
        {section === 'prestations' && (
          <div style={{ padding:'52px 40px', background: isBarber ? '#0D0D0D' : '#FAFAF8' }}>
            <h2 style={{ fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', fontSize:40, fontWeight:600, color: isBarber ? '#FFF' : primaryColor, letterSpacing:-0.5, marginBottom:40 }}>Prestations & Tarifs</h2>
            <div style={{ display:'flex', gap:0, marginBottom:36, borderBottom:`1px solid ${isBarber ? '#222' : '#E0D8D0'}` }}>
              {PRESTATIONS.map((p,i) => (
                <button key={i} onClick={() => setActiveCat(i)} style={{ background:'none', border:'none', padding:'12px 32px', fontFamily:'"Jost", sans-serif', fontSize:12, fontWeight:400, letterSpacing:2, textTransform:'uppercase', color: activeCat===i ? gold : (isBarber ? '#555' : '#9A8A7A'), cursor:'pointer', borderBottom: activeCat===i ? `2px solid ${gold}` : '2px solid transparent', marginBottom:-1 }}>
                  {p.cat}
                </button>
              ))}
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
              {PRESTATIONS[activeCat].items.map(([n,p,d],i) => (
                <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'18px 0', borderBottom:`1px solid ${isBarber ? '#1A1A1A' : '#E8E0D8'}` }}>
                  <div>
                    <div style={{ fontFamily:'"Cormorant Garamond", serif', fontSize:18, fontWeight:400, color: isBarber ? '#DDD' : '#1A1A1A' }}>{n}</div>
                    <div style={{ fontFamily:'"Jost", sans-serif', fontWeight:300, fontSize:11, color: isBarber ? '#444' : '#9A8A7A', marginTop:2, letterSpacing:1 }}>{d}</div>
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:20 }}>
                    <span style={{ fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', fontSize:22, color:gold, fontWeight:600 }}>{p}</span>
                    <button onClick={() => setSection('réserver')} style={{ background:'none', border:`1px solid ${isBarber ? '#333' : '#E0D8D0'}`, color: isBarber ? '#777' : '#9A8A7A', padding:'6px 16px', fontFamily:'"Jost", sans-serif', fontSize:11, letterSpacing:1.5, textTransform:'uppercase', cursor:'pointer' }}>
                      Réserver
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── GALERIE ─── */}
        {section === 'galerie' && (
          <div style={{ padding:'52px 40px', background: isBarber ? '#0D0D0D' : '#FAFAF8' }}>
            <h2 style={{ fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', fontSize:40, fontWeight:600, color: isBarber ? '#FFF' : primaryColor, letterSpacing:-0.5, marginBottom:36 }}>Galerie</h2>
            <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gridTemplateRows:'220px 220px', gap:8 }}>
              <img src={isBarber ? IMAGES.salon.barber : IMAGES.salon.hero} alt="g0" style={{ gridRow:'1/3', width:'100%', height:'100%', objectFit:'cover' }} />
              {[IMAGES.salon.cut, IMAGES.salon.color, IMAGES.salon.interior, IMAGES.salon.barbercut].slice(0,4).map((src,i) => (
                <img key={i} src={src} alt={`g${i+1}`} style={{ width:'100%', height:'100%', objectFit:'cover', filter: isBarber ? 'grayscale(0.2)' : 'none' }} />
              ))}
            </div>
          </div>
        )}

        {/* ─── ÉQUIPE ─── */}
        {section === 'équipe' && (
          <div style={{ padding:'52px 40px', background: isBarber ? '#0D0D0D' : '#FAFAF8' }}>
            <h2 style={{ fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', fontSize:40, fontWeight:600, color: isBarber ? '#FFF' : primaryColor, letterSpacing:-0.5, marginBottom:40 }}>Notre équipe</h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:32 }}>
              {TEAM.map((m,i) => (
                <div key={i}>
                  <img src={m.img} alt={m.nom} style={{ width:'100%', height:320, objectFit:'cover', marginBottom:16, filter: isBarber ? 'grayscale(0.3)' : 'none' }} />
                  <div style={{ fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', fontSize:22, color: isBarber ? '#FFF' : primaryColor, marginBottom:4 }}>{m.nom}</div>
                  <div style={{ fontFamily:'"Jost", sans-serif', fontWeight:300, fontSize:11, letterSpacing:1.5, textTransform:'uppercase', color:gold, marginBottom:8 }}>{m.role}</div>
                  <div style={{ fontFamily:'"Jost", sans-serif', fontWeight:300, fontSize:12, color: isBarber ? '#555' : '#9A8A7A' }}>{m.years} d'expérience</div>
                  <button onClick={() => setSection('réserver')} style={{ marginTop:14, background:gold, color: isBarber ? '#000' : '#FFF', border:'none', padding:'10px 24px', fontFamily:'"Jost", sans-serif', fontSize:11, fontWeight:500, letterSpacing:2, textTransform:'uppercase', cursor:'pointer', width:'100%' }}>
                    Réserver
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── RÉSERVER ─── */}
        {section === 'réserver' && (
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'100%' }}>
            {/* Left — image + info */}
            <div style={{ position:'relative', overflow:'hidden' }}>
              <img src={isBarber ? IMAGES.salon.barber : IMAGES.salon.cut} alt="salon" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.5)', display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:40 }}>
                <div style={{ fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', fontSize:32, color:'#FFF', marginBottom:8 }}>
                  Réservation en ligne
                </div>
                <div style={{ fontFamily:'"Jost", sans-serif', fontWeight:300, fontSize:13, color:'rgba(255,255,255,0.7)', marginBottom:24 }}>
                  Confirmation SMS immédiate
                </div>
                {[['Lun — Sam','9h → 20h'],['Dimanche','Fermé'],['Tél','01 23 45 67 89']].map(([l,v]) => (
                  <div key={l} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid rgba(255,255,255,0.1)' }}>
                    <span style={{ fontFamily:'"Jost", sans-serif', fontWeight:300, fontSize:12, letterSpacing:1.5, textTransform:'uppercase', color:'rgba(255,255,255,0.5)' }}>{l}</span>
                    <span style={{ fontFamily:'"Cormorant Garamond", serif', fontSize:15, color:'#FFF', fontStyle:'italic' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right — form */}
            <div style={{ background: isBarber ? '#0D0D0D' : '#FAFAF8', padding:'52px 44px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
              {rdvOk ? (
                <div style={{ textAlign:'center' }}>
                  <div style={{ fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', fontSize:44, color:gold, marginBottom:12 }}>Confirmé</div>
                  <p style={{ fontFamily:'"Jost", sans-serif', fontWeight:300, fontSize:14, color: isBarber ? '#555' : '#9A8A7A' }}>Un SMS de confirmation vous a été envoyé.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setRdvOk(true); }}>
                  <h3 style={{ fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', fontSize:28, color: isBarber ? '#FFF' : primaryColor, marginBottom:32, fontWeight:400 }}>Vos informations</h3>
                  {[['nom','Nom complet','text'],['tel','Téléphone','tel']].map(([f,l,t]) => (
                    <div key={f} style={{ marginBottom:20 }}>
                      <label style={{ display:'block', fontFamily:'"Jost", sans-serif', fontWeight:300, fontSize:10, letterSpacing:2, textTransform:'uppercase', color: isBarber ? '#555' : '#9A8A7A', marginBottom:6 }}>{l}</label>
                      <input type={t} required value={rdv[f]} onChange={e=>setRdv({...rdv,[f]:e.target.value})}
                        style={{ width:'100%', background:'transparent', border:'none', borderBottom:`1px solid ${isBarber ? '#333' : '#D8D0C8'}`, padding:'8px 0', fontFamily:'"Cormorant Garamond", serif', fontSize:17, color: isBarber ? '#FFF' : '#1A1A1A', outline:'none' }} />
                    </div>
                  ))}
                  <div style={{ marginBottom:20 }}>
                    <label style={{ display:'block', fontFamily:'"Jost", sans-serif', fontWeight:300, fontSize:10, letterSpacing:2, textTransform:'uppercase', color: isBarber ? '#555' : '#9A8A7A', marginBottom:6 }}>Prestation</label>
                    <select required value={rdv.prestation} onChange={e=>setRdv({...rdv,prestation:e.target.value})}
                      style={{ width:'100%', background: isBarber ? '#0D0D0D' : '#FAFAF8', border:'none', borderBottom:`1px solid ${isBarber ? '#333' : '#D8D0C8'}`, padding:'8px 0', fontFamily:'"Cormorant Garamond", serif', fontSize:16, color: isBarber ? '#FFF' : '#1A1A1A', outline:'none' }}>
                      <option value="">—</option>
                      {PRESTATIONS.flatMap(c => c.items.map(([n,p]) => <option key={n} value={n}>{n} — {p}</option>))}
                    </select>
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:32 }}>
                    {[['date','Date','date'],['heure','Heure','time']].map(([f,l,t]) => (
                      <div key={f}>
                        <label style={{ display:'block', fontFamily:'"Jost", sans-serif', fontWeight:300, fontSize:10, letterSpacing:2, textTransform:'uppercase', color: isBarber ? '#555' : '#9A8A7A', marginBottom:6 }}>{l}</label>
                        <input type={t} required value={rdv[f]} onChange={e=>setRdv({...rdv,[f]:e.target.value})}
                          style={{ width:'100%', background:'transparent', border:'none', borderBottom:`1px solid ${isBarber ? '#333' : '#D8D0C8'}`, padding:'8px 0', fontFamily:'"Cormorant Garamond", serif', fontSize:16, color: isBarber ? '#FFF' : '#1A1A1A', outline:'none' }} />
                      </div>
                    ))}
                  </div>
                  <button type="submit" style={{ width:'100%', background:gold, color: isBarber ? '#000' : '#FFF', border:'none', padding:'16px', fontFamily:'"Jost", sans-serif', fontSize:12, fontWeight:500, letterSpacing:3, textTransform:'uppercase', cursor:'pointer' }}>
                    Confirmer le rendez-vous
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
