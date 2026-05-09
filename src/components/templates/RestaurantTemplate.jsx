import { useState } from 'react';
import { IMAGES } from '../../utils/images';

// ══ L'ARDOISE ══
// Aesthetic: French brasserie, Art Déco — deep wine, parchment, antique gold
// Font: IM Fell English (old-style italic) + Cinzel (roman inscriptions)
// Layout: Centered symmetry, ornamental CSS dividers, real menu card feel

const MENU = {
  'Entrées': [
    { n:'Velouté de butternut', d:'Crème de châtaigne, huile de truffe', p:'12', img:IMAGES.restaurant.dish1 },
    { n:'Saint-Jacques rôties', d:'Citron caviar, purée de topinambour', p:'22', img:IMAGES.restaurant.dish2 },
    { n:'Foie gras maison', d:'Brioche toastée, chutney de figues', p:'24', img:IMAGES.restaurant.dish3 },
  ],
  'Plats': [
    { n:'Magret de canard', d:'Jus aux cerises, gratin dauphinois', p:'32', img:IMAGES.restaurant.dish2 },
    { n:'Sole meunière', d:'Beurre noisette, câpres, haricots fins', p:'28', img:IMAGES.restaurant.dish1 },
    { n:'Côte de veau Rossini', d:'Foie gras poêlé, jus corsé', p:'42', img:IMAGES.restaurant.dish3 },
  ],
  'Desserts': [
    { n:'Soufflé Grand Marnier', d:'Crème anglaise à la vanille', p:'14', img:IMAGES.restaurant.dish1 },
    { n:'Mille-feuille revisité', d:'Crème diplomate, caramel beurre salé', p:'12', img:IMAGES.restaurant.dish2 },
    { n:'Chocolat Valrhona', d:'Cœur coulant, éclats de pralinés', p:'11', img:IMAGES.restaurant.dish3 },
  ],
};

const Ornament = ({ color }) => (
  <div style={{ textAlign:'center', color, fontSize:18, lineHeight:1, margin:'8px 0', userSelect:'none' }}>
    ◆ ─────── ◆ ─────── ◆
  </div>
);

export default function RestaurantTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [menuCat, setMenuCat] = useState('Entrées');
  const [resa, setResa] = useState({ nom:'', tel:'', date:'', heure:'', couverts:'2', occasion:'' });
  const [resaOk, setResaOk] = useState(false);
  const { accentColor, name, tagline } = project;
  const gold = accentColor || '#D4A843';
  const isCafe = project.template === 'cafe';
  const heroImg = isCafe ? IMAGES.restaurant.cafe : IMAGES.restaurant.hero;

  return (
    <div style={{ height:'100%', overflow:'hidden', display:'flex', flexDirection:'column', fontFamily:'"IM Fell English", Georgia, serif', background:'#0E0804' }}>

      {/* NAV — centré, ornements, Art Déco */}
      <nav style={{ background:'#0E0804', borderBottom:`1px solid ${gold}30`, flexShrink:0 }}>
        {/* Tagline top */}
        <div style={{ textAlign:'center', padding:'8px', borderBottom:`1px solid ${gold}20` }}>
          <span style={{ fontFamily:'"Cinzel", serif', fontSize:10, letterSpacing:4, color:`${gold}80`, textTransform:'uppercase' }}>
            {isCafe ? 'Café · Brunch · Spécialité' : 'Cuisine Française · Gastronomique'}
          </span>
        </div>
        {/* Logo */}
        <div style={{ textAlign:'center', padding:'14px 32px 0' }}>
          <div style={{ fontFamily:'"Cinzel", serif', fontWeight:700, fontSize:24, color:gold, letterSpacing:4, textTransform:'uppercase' }}>
            {name}
          </div>
        </div>
        {/* Nav links avec points décoratifs */}
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:0, padding:'0 32px 0' }}>
          {['accueil','menu','à propos','réserver'].map((s, i, arr) => (
            <span key={s} style={{ display:'flex', alignItems:'center' }}>
              <button onClick={() => setSection(s)} style={{ background:'none', border:'none', padding:'14px 24px', fontFamily:'"Cinzel", serif', fontSize:12, letterSpacing:3, textTransform:'uppercase', color: section===s ? gold : '#665544', cursor:'pointer' }}>
                {s}
              </button>
              {i < arr.length-1 && <span style={{ color:`${gold}40`, fontSize:6 }}>◆</span>}
            </span>
          ))}
        </div>
      </nav>

      <div style={{ flex:1, overflow:'auto' }}>

        {/* ─── ACCUEIL ─── */}
        {section === 'accueil' && (
          <div>
            {/* Hero full-bleed */}
            <div style={{ position:'relative', height:340 }}>
              <img src={heroImg} alt={name} style={{ width:'100%', height:'100%', objectFit:'cover', filter:'brightness(0.45) sepia(0.2)' }} />
              <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at center, transparent 30%, rgba(14,8,4,0.8) 100%)` }} />
              <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'0 60px' }}>
                <div style={{ fontFamily:'"Cinzel", serif', fontSize:10, letterSpacing:5, color:gold, marginBottom:16, textTransform:'uppercase' }}>
                  Depuis 1947
                </div>
                <Ornament color={`${gold}60`} />
                <h1 style={{ fontFamily:'"IM Fell English", serif', fontStyle:'italic', fontSize:52, color:'#F5E8D0', lineHeight:1, marginBottom:8, marginTop:8 }}>{name}</h1>
                <Ornament color={`${gold}60`} />
                <p style={{ fontFamily:'"IM Fell English", serif', fontStyle:'italic', fontSize:15, color:'rgba(245,232,208,0.65)', marginTop:12 }}>{tagline}</p>
                <div style={{ display:'flex', gap:16, marginTop:28 }}>
                  <button onClick={() => setSection('réserver')} style={{ background:gold, color:'#0E0804', border:'none', padding:'12px 32px', fontFamily:'"Cinzel", serif', fontSize:11, letterSpacing:2, textTransform:'uppercase', cursor:'pointer' }}>
                    Réserver une table
                  </button>
                  <button onClick={() => setSection('menu')} style={{ background:'transparent', color:gold, border:`1px solid ${gold}60`, padding:'12px 32px', fontFamily:'"Cinzel", serif', fontSize:11, letterSpacing:2, textTransform:'uppercase', cursor:'pointer' }}>
                    Voir la carte
                  </button>
                </div>
              </div>
            </div>

            {/* Infos bar */}
            <div style={{ background:'#1A1208', borderTop:`1px solid ${gold}20`, borderBottom:`1px solid ${gold}20`, display:'grid', gridTemplateColumns:'repeat(3, 1fr)' }}>
              {[['📍','5 rue du Faubourg, Paris 11e'],['🕐','Mar – Sam  ·  12h–14h  ·  19h–22h30'],['☎','01 43 56 78 90']].map(([ic,t],i) => (
                <div key={i} style={{ padding:'16px 24px', display:'flex', alignItems:'center', gap:10, borderRight: i<2 ? `1px solid ${gold}15` : 'none', justifyContent:'center' }}>
                  <span style={{ fontSize:14 }}>{ic}</span>
                  <span style={{ fontFamily:'"Cinzel", serif', fontSize:11, color:`${gold}80`, letterSpacing:0.5 }}>{t}</span>
                </div>
              ))}
            </div>

            {/* Spécialités */}
            <div style={{ padding:'52px 48px' }}>
              <div style={{ textAlign:'center', marginBottom:40 }}>
                <div style={{ fontFamily:'"Cinzel", serif', fontSize:10, letterSpacing:4, color:gold, textTransform:'uppercase', marginBottom:12 }}>Notre sélection du moment</div>
                <h2 style={{ fontFamily:'"IM Fell English", serif', fontStyle:'italic', fontSize:36, color:'#F5E8D0', marginBottom:0 }}>Les incontournables</h2>
                <Ornament color={`${gold}50`} />
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:28 }}>
                {Object.values(MENU).flat().slice(0,3).map((dish,i) => (
                  <div key={i} style={{ cursor:'pointer', textAlign:'center' }} onClick={() => setSection('menu')}>
                    <div style={{ position:'relative', marginBottom:14 }}>
                      <img src={dish.img} alt={dish.n} style={{ width:'100%', height:180, objectFit:'cover', filter:'brightness(0.85) sepia(0.15)' }} />
                      <div style={{ position:'absolute', top:12, right:12, background:gold, color:'#0E0804', fontFamily:'"Cinzel", serif', fontSize:13, fontWeight:700, padding:'4px 10px' }}>{dish.p}€</div>
                    </div>
                    <div style={{ fontFamily:'"IM Fell English", serif', fontStyle:'italic', fontSize:17, color:'#F5E8D0', marginBottom:4 }}>{dish.n}</div>
                    <div style={{ fontFamily:'"IM Fell English", serif', fontSize:12, color:'#665544', fontStyle:'italic' }}>{dish.d}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chef */}
            <div style={{ margin:'0 48px 52px', background:'#1A1208', border:`1px solid ${gold}20`, padding:'36px', display:'grid', gridTemplateColumns:'180px 1fr', gap:32, alignItems:'center' }}>
              <img src={IMAGES.restaurant.chef} alt="chef" style={{ width:180, height:200, objectFit:'cover', filter:'sepia(0.2)' }} />
              <div>
                <div style={{ fontFamily:'"Cinzel", serif', fontSize:10, letterSpacing:4, color:gold, textTransform:'uppercase', marginBottom:12 }}>Le Chef</div>
                <h3 style={{ fontFamily:'"IM Fell English", serif', fontStyle:'italic', fontSize:28, color:'#F5E8D0', marginBottom:14 }}>Thomas Renard</h3>
                <p style={{ fontFamily:'"IM Fell English", serif', fontSize:14, color:'#998877', lineHeight:1.9 }}>
                  Formé dans les grandes maisons étoilées, Thomas Renard perpétue l'art de la cuisine française classique, revisitée avec les produits de saison. Sa philosophie : révéler la vérité des ingrédients.
                </p>
                <Ornament color={`${gold}30`} />
                <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                  {['★ 1 étoile Michelin','Chef de l\'année 2022'].map(b => (
                    <span key={b} style={{ border:`1px solid ${gold}40`, color:`${gold}90`, fontFamily:'"Cinzel", serif', fontSize:10, padding:'4px 12px', letterSpacing:1 }}>{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── MENU ─── */}
        {section === 'menu' && (
          <div style={{ padding:'52px 48px' }}>
            <div style={{ textAlign:'center', marginBottom:40 }}>
              <div style={{ fontFamily:'"Cinzel", serif', fontSize:10, letterSpacing:4, color:gold, textTransform:'uppercase', marginBottom:10 }}>Produits frais du marché</div>
              <h2 style={{ fontFamily:'"IM Fell English", serif', fontStyle:'italic', fontSize:40, color:'#F5E8D0', marginBottom:0 }}>Notre Carte</h2>
              <Ornament color={`${gold}50`} />
            </div>
            {/* Tabs */}
            <div style={{ display:'flex', justifyContent:'center', gap:0, marginBottom:36 }}>
              {Object.keys(MENU).map((cat,i,arr) => (
                <span key={cat} style={{ display:'flex', alignItems:'center' }}>
                  <button onClick={() => setMenuCat(cat)} style={{ background:'none', border:'none', padding:'8px 24px', fontFamily:'"Cinzel", serif', fontSize:12, letterSpacing:2, textTransform:'uppercase', color: menuCat===cat ? gold : '#665544', cursor:'pointer', borderBottom: menuCat===cat ? `1px solid ${gold}` : '1px solid transparent' }}>
                    {cat}
                  </button>
                  {i<arr.length-1 && <span style={{ color:`${gold}30`, fontSize:8 }}>◆</span>}
                </span>
              ))}
            </div>
            {/* Items */}
            <div style={{ maxWidth:600, margin:'0 auto', display:'flex', flexDirection:'column', gap:0 }}>
              {MENU[menuCat].map((dish,i) => (
                <div key={i}>
                  <div style={{ display:'grid', gridTemplateColumns:'72px 1fr auto', gap:18, alignItems:'center', padding:'18px 0' }}>
                    <img src={dish.img} alt={dish.n} style={{ width:72, height:54, objectFit:'cover', filter:'sepia(0.15)' }} />
                    <div>
                      <div style={{ fontFamily:'"IM Fell English", serif', fontStyle:'italic', fontSize:17, color:'#F5E8D0', marginBottom:3 }}>{dish.n}</div>
                      <div style={{ fontFamily:'"IM Fell English", serif', fontSize:12, color:'#665544', fontStyle:'italic' }}>{dish.d}</div>
                    </div>
                    <div style={{ fontFamily:'"Cinzel", serif', fontWeight:700, fontSize:18, color:gold }}>{dish.p}€</div>
                  </div>
                  {i < MENU[menuCat].length-1 && <div style={{ borderBottom:`1px solid ${gold}15` }} />}
                </div>
              ))}
            </div>
            <div style={{ textAlign:'center', marginTop:36 }}>
              <Ornament color={`${gold}30`} />
              <p style={{ fontFamily:'"IM Fell English", serif', fontStyle:'italic', fontSize:13, color:'#554433' }}>Menu dégustation 5 plats · 95 € · Accord mets-vins +45 €</p>
            </div>
          </div>
        )}

        {/* ─── À PROPOS ─── */}
        {section === 'à propos' && (
          <div style={{ padding:'52px 48px' }}>
            <div style={{ textAlign:'center', marginBottom:40 }}>
              <h2 style={{ fontFamily:'"IM Fell English", serif', fontStyle:'italic', fontSize:40, color:'#F5E8D0' }}>Notre Maison</h2>
              <Ornament color={`${gold}50`} />
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'center' }}>
              <img src={IMAGES.restaurant.interior} alt="salle" style={{ width:'100%', height:260, objectFit:'cover', filter:'sepia(0.2) brightness(0.85)' }} />
              <div>
                <p style={{ fontFamily:'"IM Fell English", serif', fontSize:16, color:'#998877', lineHeight:2, marginBottom:20 }}>
                  Depuis 1947, notre brasserie perpétue l'art de recevoir à la française. Fondée par la famille Renard, elle demeure aujourd'hui un sanctuaire de la gastronomie classique parisienne.
                </p>
                <Ornament color={`${gold}30`} />
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, marginTop:20 }}>
                  {[['1947','Fondation de la maison'],['1985','Première étoile Michelin'],['2010','Reprise 3e génération'],['2022','Chef de l\'année']].map(([y,t]) => (
                    <div key={y} style={{ borderLeft:`2px solid ${gold}40`, paddingLeft:14 }}>
                      <div style={{ fontFamily:'"Cinzel", serif', fontWeight:700, fontSize:16, color:gold }}>{y}</div>
                      <div style={{ fontFamily:'"IM Fell English", serif', fontSize:13, color:'#665544', fontStyle:'italic', marginTop:3 }}>{t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── RÉSERVER ─── */}
        {section === 'réserver' && (
          <div style={{ padding:'52px 48px', maxWidth:540, margin:'0 auto' }}>
            <div style={{ textAlign:'center', marginBottom:36 }}>
              <div style={{ fontFamily:'"Cinzel", serif', fontSize:10, letterSpacing:4, color:gold, textTransform:'uppercase', marginBottom:10 }}>Table</div>
              <h2 style={{ fontFamily:'"IM Fell English", serif', fontStyle:'italic', fontSize:36, color:'#F5E8D0', marginBottom:0 }}>Réserver</h2>
              <Ornament color={`${gold}40`} />
            </div>
            {resaOk ? (
              <div style={{ textAlign:'center', padding:'48px', border:`1px solid ${gold}30` }}>
                <Ornament color={gold} />
                <div style={{ fontFamily:'"IM Fell English", serif', fontStyle:'italic', fontSize:28, color:'#F5E8D0', margin:'16px 0 8px' }}>Réservation confirmée</div>
                <p style={{ fontFamily:'"IM Fell English", serif', fontStyle:'italic', fontSize:14, color:'#665544' }}>Nous avons hâte de vous accueillir.</p>
                <Ornament color={gold} />
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setResaOk(true); }} style={{ background:'#1A1208', border:`1px solid ${gold}20`, padding:'36px' }}>
                {[['nom','Nom & Prénom','text'],['tel','Téléphone','tel']].map(([f,l,t]) => (
                  <div key={f} style={{ marginBottom:18 }}>
                    <label style={{ display:'block', fontFamily:'"Cinzel", serif', fontSize:9, letterSpacing:2, textTransform:'uppercase', color:`${gold}60`, marginBottom:6 }}>{l}</label>
                    <input type={t} required value={resa[f]} onChange={e=>setResa({...resa,[f]:e.target.value})}
                      style={{ width:'100%', background:'transparent', border:'none', borderBottom:`1px solid ${gold}25`, padding:'8px 0', fontFamily:'"IM Fell English", serif', fontSize:16, color:'#F5E8D0', outline:'none' }} />
                  </div>
                ))}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:18 }}>
                  {[['date','Date','date'],['heure','Heure','time']].map(([f,l,t]) => (
                    <div key={f}>
                      <label style={{ display:'block', fontFamily:'"Cinzel", serif', fontSize:9, letterSpacing:2, textTransform:'uppercase', color:`${gold}60`, marginBottom:6 }}>{l}</label>
                      <input type={t} required value={resa[f]} onChange={e=>setResa({...resa,[f]:e.target.value})}
                        style={{ width:'100%', background:'transparent', border:'none', borderBottom:`1px solid ${gold}25`, padding:'8px 0', fontFamily:'"IM Fell English", serif', fontSize:15, color:'#F5E8D0', outline:'none' }} />
                    </div>
                  ))}
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:28 }}>
                  <div>
                    <label style={{ display:'block', fontFamily:'"Cinzel", serif', fontSize:9, letterSpacing:2, textTransform:'uppercase', color:`${gold}60`, marginBottom:6 }}>Couverts</label>
                    <select value={resa.couverts} onChange={e=>setResa({...resa,couverts:e.target.value})} style={{ width:'100%', background:'#1A1208', border:'none', borderBottom:`1px solid ${gold}25`, padding:'8px 0', fontFamily:'"IM Fell English", serif', fontSize:15, color:'#F5E8D0', outline:'none' }}>
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} personne{n>1?'s':''}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display:'block', fontFamily:'"Cinzel", serif', fontSize:9, letterSpacing:2, textTransform:'uppercase', color:`${gold}60`, marginBottom:6 }}>Occasion</label>
                    <select value={resa.occasion} onChange={e=>setResa({...resa,occasion:e.target.value})} style={{ width:'100%', background:'#1A1208', border:'none', borderBottom:`1px solid ${gold}25`, padding:'8px 0', fontFamily:'"IM Fell English", serif', fontSize:15, color:'#F5E8D0', outline:'none' }}>
                      <option value="">Standard</option>
                      <option value="anniversaire">Anniversaire</option>
                      <option value="romantique">Dîner romantique</option>
                      <option value="business">Repas d'affaires</option>
                    </select>
                  </div>
                </div>
                <button type="submit" style={{ width:'100%', background:gold, color:'#0E0804', border:'none', padding:'14px', fontFamily:'"Cinzel", serif', fontSize:12, letterSpacing:3, textTransform:'uppercase', cursor:'pointer', fontWeight:700 }}>
                  Confirmer la réservation
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
