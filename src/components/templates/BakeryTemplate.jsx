import { useState } from 'react';
import { IMAGES } from '../../utils/images';

// ══ JOURNAL DU FOUR ══
// Aesthetic: French newspaper editorial — warm cream, terracotta, serif headlines
// Font: Playfair Display + Crimson Pro — feels like a 1930s artisan gazette

const PRODUCTS = [
  { name: 'Baguette Tradition', price: '1,20 €', cat: 'Pains', img: IMAGES.bakery.bread },
  { name: 'Pain de Campagne', price: '3,80 €', cat: 'Pains', img: IMAGES.bakery.product1 },
  { name: 'Pain aux Graines', price: '4,20 €', cat: 'Pains', img: IMAGES.bakery.product2 },
  { name: 'Croissant Pur Beurre', price: '1,50 €', cat: 'Viennoiseries', img: IMAGES.bakery.croissant },
  { name: 'Pain au Chocolat', price: '1,60 €', cat: 'Viennoiseries', img: IMAGES.bakery.product3 },
  { name: 'Tarte aux Pommes', price: '3,50 €', cat: 'Pâtisseries', img: IMAGES.bakery.tarte },
];

const AVIS = [
  { nom: 'Marie T.', texte: 'La meilleure baguette du quartier, sans la moindre hésitation. Je viens chaque matin.' },
  { nom: 'Jean-Paul R.', texte: 'Un fournil qui sent bon et des produits qui tiennent leurs promesses. Rare.' },
  { nom: 'Isabelle M.', texte: 'Les croissants sont une institution. Croustillants, beurrés, parfaits.' },
];

const S = {
  wrap: { height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"Crimson Pro", Georgia, serif', background: '#FDF8F0' },
  nav: { background: '#FDF8F0', borderBottom: '3px double #2C1810', padding: '0 32px', flexShrink: 0 },
  navInner: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 },
  logo: { fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: 22, color: '#2C1810', letterSpacing: 1, fontStyle: 'italic' },
  navLinks: { display: 'flex', gap: 0, borderLeft: '1px solid #D4B8A0', borderRight: '1px solid #D4B8A0' },
  accent: { color: '#C8633A', fontFamily: '"Playfair Display", serif', fontStyle: 'italic' },
  content: { flex: 1, overflow: 'auto' },
};

export default function BakeryTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [activeCat, setActiveCat] = useState('Tous');
  const [form, setForm] = useState({ nom: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const { primaryColor, accentColor, name, tagline } = project;

  const navBtn = (id, label) => (
    <button key={id} onClick={() => setSection(id)} style={{
      background: 'none', border: 'none', padding: '0 20px', height: 52,
      fontFamily: '"Crimson Pro", serif', fontSize: 16, fontWeight: section === id ? 600 : 400,
      color: section === id ? accentColor : '#2C1810',
      borderBottom: section === id ? `2px solid ${accentColor}` : '2px solid transparent',
      cursor: 'pointer', letterSpacing: 0.3,
    }}>{label}</button>
  );

  const filtered = activeCat === 'Tous' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCat);

  return (
    <div style={S.wrap}>
      {/* MASTHEAD — style journal */}
      <div style={{ background: '#FDF8F0', borderBottom: '1px solid #D4B8A0', padding: '8px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
        <span style={{ fontFamily: '"Crimson Pro", serif', fontSize: 12, color: '#9A7A6A', letterSpacing: 0.5 }}>Fondé en 1982 · Artisan Boulanger</span>
        <span style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: 28, color: '#2C1810', letterSpacing: -0.5, textTransform: 'uppercase' }}>{name}</span>
        <span style={{ fontFamily: '"Crimson Pro", serif', fontSize: 12, color: '#9A7A6A', letterSpacing: 0.5 }}>Ouvert 7j/7 · 6h30 → 20h</span>
      </div>

      {/* NAV */}
      <div style={S.nav}>
        <div style={S.navInner}>
          <div style={{ fontFamily: '"Crimson Pro", serif', fontSize: 12, color: '#9A7A6A', fontStyle: 'italic' }}>
            «&nbsp;{tagline}&nbsp;»
          </div>
          <div style={{ display: 'flex' }}>
            {[['accueil','Accueil'],['boutique','Boutique'],['galerie','Galerie'],['histoire','Notre Histoire'],['contact','Contact']].map(([id,l]) => navBtn(id,l))}
          </div>
          <div style={{ fontFamily: '"Crimson Pro", serif', fontSize: 13, color: '#C8633A', fontWeight: 600 }}>
            ☎ 01 23 45 67 89
          </div>
        </div>
      </div>

      <div style={S.content}>

        {/* ─── ACCUEIL ─── */}
        {section === 'accueil' && (
          <div style={{ background: '#FDF8F0' }}>
            {/* Hero — full image avec bandeau */}
            <div style={{ position: 'relative', height: 320 }}>
              <img src={IMAGES.bakery.hero} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(15%) brightness(0.9)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,24,16,0.85) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: 28, left: 0, right: 0, textAlign: 'center' }}>
                <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 15, color: 'rgba(255,255,255,0.8)', marginBottom: 6, letterSpacing: 2 }}>ARTISAN BOULANGER</p>
                <h1 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: 46, color: '#FDF8F0', letterSpacing: -1, lineHeight: 1 }}>{name}</h1>
                <div style={{ width: 60, height: 2, background: accentColor, margin: '12px auto 0' }} />
              </div>
            </div>

            {/* Newspaper grid 3 colonnes */}
            <div style={{ padding: '40px 32px', display: 'grid', gridTemplateColumns: '1fr 2px 1fr 2px 1fr', gap: '0 20px' }}>
              {/* Col 1 */}
              <div>
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 20, fontWeight: 700, color: '#2C1810', borderBottom: `2px solid ${accentColor}`, paddingBottom: 6, marginBottom: 14 }}>
                  À la une
                </h2>
                <img src={IMAGES.bakery.bread} alt="pain" style={{ width: '100%', height: 140, objectFit: 'cover', marginBottom: 10, filter: 'sepia(10%)' }} />
                <p style={{ fontFamily: '"Crimson Pro", serif', fontSize: 15, lineHeight: 1.8, color: '#4A3328' }}>
                  Chaque matin dès 3h, notre fournil s'éveille. Les farines bio, issues de moulins locaux, sont pétries à la main. Notre baguette Tradition a remporté le prix du département deux années consécutives.
                </p>
              </div>
              {/* Séparateur */}
              <div style={{ background: '#D4B8A0' }} />
              {/* Col 2 */}
              <div>
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 20, fontWeight: 700, color: '#2C1810', borderBottom: `2px solid ${accentColor}`, paddingBottom: 6, marginBottom: 14 }}>
                  Nos spécialités
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {PRODUCTS.slice(0, 4).map((p, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dotted #C8A890', paddingBottom: 8 }}>
                      <span style={{ fontFamily: '"Crimson Pro", serif', fontSize: 15, color: '#4A3328' }}>{p.name}</span>
                      <span style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 15, color: accentColor }}>{p.price}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setSection('boutique')} style={{ marginTop: 14, background: 'none', border: `1px solid ${accentColor}`, color: accentColor, padding: '8px 20px', fontFamily: '"Crimson Pro", serif', fontSize: 14, cursor: 'pointer', fontStyle: 'italic' }}>
                  Voir toute la boutique →
                </button>
              </div>
              {/* Séparateur */}
              <div style={{ background: '#D4B8A0' }} />
              {/* Col 3 */}
              <div>
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 20, fontWeight: 700, color: '#2C1810', borderBottom: `2px solid ${accentColor}`, paddingBottom: 6, marginBottom: 14 }}>
                  Ce qu'ils en disent
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {AVIS.map((a, i) => (
                    <div key={i} style={{ borderLeft: `3px solid ${accentColor}`, paddingLeft: 12 }}>
                      <p style={{ fontFamily: '"Crimson Pro", serif', fontSize: 14, fontStyle: 'italic', color: '#4A3328', lineHeight: 1.6, marginBottom: 4 }}>"{a.texte}"</p>
                      <span style={{ fontFamily: '"Playfair Display", serif', fontSize: 12, fontWeight: 700, color: '#9A7A6A' }}>— {a.nom}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bandeau terracotta */}
            <div style={{ background: accentColor, padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: '"Playfair Display", serif', fontSize: 18, fontStyle: 'italic', color: '#fff' }}>Commandez vos pâtisseries sur mesure</span>
              <button onClick={() => setSection('contact')} style={{ background: '#fff', color: accentColor, border: 'none', padding: '10px 24px', fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
                Nous contacter
              </button>
            </div>
          </div>
        )}

        {/* ─── BOUTIQUE ─── */}
        {section === 'boutique' && (
          <div style={{ padding: '40px 32px', background: '#FDF8F0' }}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 34, fontWeight: 900, color: '#2C1810', fontStyle: 'italic' }}>Notre Boutique</h2>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 0, marginTop: 16, border: '1px solid #D4B8A0', width: 'fit-content', margin: '16px auto 0' }}>
                {['Tous', 'Pains', 'Viennoiseries', 'Pâtisseries'].map(cat => (
                  <button key={cat} onClick={() => setActiveCat(cat)} style={{ background: activeCat === cat ? '#2C1810' : 'transparent', color: activeCat === cat ? '#FDF8F0' : '#2C1810', border: 'none', borderRight: '1px solid #D4B8A0', padding: '8px 20px', fontFamily: '"Crimson Pro", serif', fontSize: 15, cursor: 'pointer' }}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {filtered.map((p, i) => (
                <div key={i} style={{ background: '#fff', border: '1px solid #E8D8C8' }}>
                  <img src={p.img} alt={p.name} style={{ width: '100%', height: 160, objectFit: 'cover', filter: 'sepia(8%)' }} />
                  <div style={{ padding: '14px 16px' }}>
                    <div style={{ fontFamily: '"Crimson Pro", serif', fontSize: 11, color: '#9A7A6A', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>{p.cat}</div>
                    <div style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 16, color: '#2C1810', marginBottom: 8 }}>{p.name}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 18, color: accentColor, fontWeight: 700 }}>{p.price}</span>
                      <button style={{ background: '#2C1810', color: '#FDF8F0', border: 'none', padding: '6px 14px', fontFamily: '"Crimson Pro", serif', fontSize: 13, cursor: 'pointer' }}>Commander</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── GALERIE ─── */}
        {section === 'galerie' && (
          <div style={{ padding: '40px 32px', background: '#FDF8F0' }}>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 34, fontWeight: 900, color: '#2C1810', fontStyle: 'italic', textAlign: 'center', marginBottom: 32 }}>Notre Galerie</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '200px 200px', gap: 12 }}>
              <img src={IMAGES.bakery.interior} alt="fournil" style={{ gridRow: '1/3', width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(12%)' }} />
              {[IMAGES.bakery.croissant, IMAGES.bakery.tarte, IMAGES.bakery.product1, IMAGES.bakery.product3].map((src,i) => (
                <img key={i} src={src} alt={`galerie${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(8%)' }} />
              ))}
            </div>
            <p style={{ fontFamily: '"Crimson Pro", serif', fontStyle: 'italic', fontSize: 15, color: '#9A7A6A', textAlign: 'center', marginTop: 24 }}>
              Les coulisses de notre fournil, chaque matin depuis 1982.
            </p>
          </div>
        )}

        {/* ─── HISTOIRE ─── */}
        {section === 'histoire' && (
          <div style={{ background: '#FDF8F0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 320 }}>
              <img src={IMAGES.bakery.interior} alt="fournil" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(20%)' }} />
              <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontFamily: '"Crimson Pro", serif', fontSize: 12, letterSpacing: 2, color: accentColor, textTransform: 'uppercase', marginBottom: 12 }}>Notre Histoire</p>
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 32, fontWeight: 900, color: '#2C1810', marginBottom: 20, lineHeight: 1.1 }}>40 ans de passion,<br /><span style={{ fontStyle: 'italic' }}>une recette</span></h2>
                <p style={{ fontFamily: '"Crimson Pro", serif', fontSize: 16, color: '#4A3328', lineHeight: 1.9 }}>
                  Fondée en 1982 par Marcel Dupont, notre boulangerie perpétue les recettes transmises de génération en génération. Farines biologiques, fermentation longue, cuisson au four à sole — rien n'a changé depuis quarante ans.
                </p>
              </div>
            </div>
            <div style={{ padding: '40px 32px', borderTop: '3px double #2C1810' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
                {[['1982','Ouverture du fournil'],['1998','Médaille du Meilleur Artisan'],['2012','Reprise 2e génération'],['2023','Label Bio & Local']].map(([y,t]) => (
                  <div key={y} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: 28, color: accentColor, fontStyle: 'italic' }}>{y}</div>
                    <div style={{ fontFamily: '"Crimson Pro", serif', fontSize: 14, color: '#4A3328', marginTop: 6, lineHeight: 1.5 }}>{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── CONTACT ─── */}
        {section === 'contact' && (
          <div style={{ padding: '40px 32px', background: '#FDF8F0' }}>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 34, fontWeight: 900, color: '#2C1810', fontStyle: 'italic', textAlign: 'center', marginBottom: 36 }}>Nous Trouver</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, maxWidth: 760, margin: '0 auto' }}>
              <div>
                <div style={{ border: '1px solid #D4B8A0', padding: 24, marginBottom: 20 }}>
                  {[['Adresse','12 rue de la Paix, 75001 Paris'],['Téléphone','01 23 45 67 89'],['Email',`contact@${name.toLowerCase().replace(/\s/g,'')}.fr`]].map(([l,v]) => (
                    <div key={l} style={{ marginBottom: 14 }}>
                      <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 11, fontWeight: 700, color: '#9A7A6A', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>{l}</div>
                      <div style={{ fontFamily: '"Crimson Pro", serif', fontSize: 15, color: '#2C1810' }}>{v}</div>
                    </div>
                  ))}
                </div>
                <div style={{ border: '1px solid #D4B8A0', padding: 24 }}>
                  <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 11, fontWeight: 700, color: '#9A7A6A', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12 }}>Horaires</div>
                  {[['Lun — Ven','7h — 19h30'],['Samedi','6h30 — 20h'],['Dimanche','7h — 13h']].map(([j,h]) => (
                    <div key={j} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dotted #D4B8A0', padding: '8px 0' }}>
                      <span style={{ fontFamily: '"Crimson Pro", serif', fontSize: 15, color: '#4A3328' }}>{j}</span>
                      <span style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 14, color: accentColor }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ border: '1px solid #D4B8A0', padding: 24 }}>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 18, fontWeight: 700, color: '#2C1810', marginBottom: 20, fontStyle: 'italic' }}>Envoyer un message</div>
                {sent ? (
                  <div style={{ textAlign: 'center', padding: '32px 0' }}>
                    <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 22, fontStyle: 'italic', color: accentColor }}>Message envoyé !</div>
                    <p style={{ fontFamily: '"Crimson Pro", serif', fontSize: 14, color: '#9A7A6A', marginTop: 8 }}>Nous vous répondrons dans les 24h.</p>
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
                    {[['nom','Votre nom'],['email','Votre email']].map(([f,l]) => (
                      <div key={f} style={{ marginBottom: 14 }}>
                        <label style={{ display: 'block', fontFamily: '"Crimson Pro", serif', fontSize: 13, color: '#9A7A6A', marginBottom: 4 }}>{l}</label>
                        <input type={f==='email'?'email':'text'} required value={form[f]} onChange={e=>setForm({...form,[f]:e.target.value})}
                          style={{ width:'100%', padding:'9px 12px', border:'1px solid #D4B8A0', background:'#FEFBF7', fontFamily:'"Crimson Pro", serif', fontSize:15, color:'#2C1810', outline:'none' }} />
                      </div>
                    ))}
                    <div style={{ marginBottom: 18 }}>
                      <label style={{ display: 'block', fontFamily: '"Crimson Pro", serif', fontSize: 13, color: '#9A7A6A', marginBottom: 4 }}>Message</label>
                      <textarea rows={3} required value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                        style={{ width:'100%', padding:'9px 12px', border:'1px solid #D4B8A0', background:'#FEFBF7', fontFamily:'"Crimson Pro", serif', fontSize:15, color:'#2C1810', outline:'none', resize:'none' }} />
                    </div>
                    <button type="submit" style={{ width:'100%', background:'#2C1810', color:'#FDF8F0', border:'none', padding:'12px', fontFamily:'"Playfair Display", serif', fontSize:15, fontWeight:700, cursor:'pointer', letterSpacing:0.5 }}>
                      Envoyer
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
