import { useState } from 'react';
import { Utensils, Clock, MapPin, Phone, ChevronRight } from 'lucide-react';
import { IMAGES } from '../../utils/images';

const MENU_SECTIONS = [
  {
    cat: 'Entrées', items: [
      { name: 'Edamame', jp: '枝豆', desc: 'Fèves de soja vapeur, fleur de sel', price: '6€' },
      { name: 'Tataki de thon', jp: '鮪のたたき', desc: 'Thon saisí, gingembre, sésame grillé', price: '14€' },
      { name: 'Gyoza maison', jp: '餃子', desc: 'Porc & chou, sauce ponzu', price: '10€' },
    ]
  },
  {
    cat: 'Plats', items: [
      { name: 'Ramen Tonkotsu', jp: 'とんこつラーメン', desc: 'Bouillon 24h, chashu, œuf mollet, nori', price: '18€' },
      { name: 'Chirashi Zen', jp: 'ちらし寿司', desc: 'Sashimis assortis sur riz vinaigré', price: '22€' },
      { name: 'Bœuf Wagyu', jp: '和牛', desc: 'Entrecôte A4, sauce teriyaki, légumes', price: '34€' },
    ]
  },
  {
    cat: 'Desserts', items: [
      { name: 'Mochi glacé', jp: '餅アイス', desc: 'Matcha, sésame noir, yuzu', price: '7€' },
      { name: 'Crème brûlée Thé', jp: '抹茶ブリュレ', desc: 'Crème au thé vert, caramel biscuité', price: '8€' },
    ]
  },
];

export default function RestaurantAsianTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [activeCat, setActiveCat] = useState('Plats');
  const { primaryColor, accentColor, name, tagline } = project;

  const nav = ['accueil', 'menu', 'à propos', 'réserver'];
  const noir = primaryColor;
  const rouge = accentColor;

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"Noto Serif", "DM Serif Display", serif', background: '#FAFAF8', color: noir }}>

      {/* NAV — very minimal, centered */}
      <nav style={{ background: '#FAFAF8', borderBottom: '1px solid rgba(10,10,10,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px', height: 64, flexShrink: 0 }}>
        <div style={{ width: 120 }} />
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {nav.map((s, i) => {
            if (i === 2) return (
              <div key="logo" style={{ display: 'flex', alignItems: 'center', gap: 12, marginRight: 16, marginLeft: 16 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: 4, color: noir, lineHeight: 1, textTransform: 'uppercase' }}>{name}</div>
                  <div style={{ fontSize: 11, color: rouge, letterSpacing: 2, marginTop: 2, fontStyle: 'italic' }}>cuisine japonaise</div>
                </div>
              </div>
            );
            return (
              <button key={s} onClick={() => setSection(s)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 13, fontWeight: section === s ? 700 : 400, letterSpacing: 2,
                color: section === s ? rouge : 'rgba(10,10,10,0.45)',
                textTransform: 'lowercase', fontStyle: 'italic', transition: 'color 0.2s',
              }}>{s}</button>
            );
          })}
        </div>
        <div style={{ width: 120, display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={() => setSection('réserver')} style={{ background: noir, color: '#fff', border: 'none', padding: '8px 18px', fontSize: 12, fontWeight: 600, letterSpacing: 1.5, cursor: 'pointer', fontFamily: '"Noto Serif", serif', textTransform: 'uppercase' }}>
            Réserver
          </button>
        </div>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {section === 'accueil' && (
          <div>
            {/* HERO — full width, minimal text */}
            <div style={{ position: 'relative', height: 400 }}>
              <img src={IMAGES.restaurant.dish1} alt="sushi" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.45)' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
                <div style={{ fontSize: 12, color: rouge, letterSpacing: 4, fontStyle: 'italic', marginBottom: 20, textTransform: 'lowercase' }}>authentique</div>
                <h1 style={{ fontSize: 58, fontWeight: 400, color: '#fff', margin: '0 0 8px', letterSpacing: 8, textTransform: 'uppercase', lineHeight: 1 }}>
                  {name}
                </h1>
                <div style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', margin: '0 0 40px', fontWeight: 300, letterSpacing: 2 }}>
                  {tagline}
                </div>
                <button onClick={() => setSection('menu')} style={{ background: 'transparent', color: '#fff', border: `1px solid rgba(255,255,255,0.4)`, padding: '12px 36px', fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', cursor: 'pointer', fontFamily: '"Noto Serif", serif', display: 'flex', alignItems: 'center', gap: 12 }}>
                  Découvrir la carte <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* INFOS — minimal strip */}
            <div style={{ background: noir, display: 'flex', justifyContent: 'center', gap: 60, padding: '20px 48px' }}>
              {[{ Icon: Clock, val: 'Mar–Sam 12h–14h30 & 19h–22h30' }, { Icon: MapPin, val: '18 rue du Temple, Paris 4e' }, { Icon: Phone, val: '01 44 00 00 00' }].map(({ Icon, val }) => (
                <div key={val} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon size={13} color={rouge} />
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', letterSpacing: 0.5 }}>{val}</span>
                </div>
              ))}
            </div>

            {/* SIGNATURE DISHES */}
            <div style={{ padding: '60px 52px' }}>
              <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <div style={{ fontSize: 11, color: rouge, letterSpacing: 4, fontStyle: 'italic', textTransform: 'lowercase', marginBottom: 12 }}>plats signatures</div>
                <h2 style={{ fontSize: 36, fontWeight: 400, margin: 0, letterSpacing: 4, textTransform: 'uppercase' }}>La Cuisine</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40 }}>
                {[
                  { img: IMAGES.restaurant.dish1, name: 'Chirashi', jp: 'ちらし寿司', price: '22€' },
                  { img: IMAGES.restaurant.dish2, name: 'Ramen', jp: 'ラーメン', price: '18€' },
                  { img: IMAGES.restaurant.dish3, name: 'Wagyu', jp: '和牛', price: '34€' },
                ].map(d => (
                  <div key={d.name} style={{ textAlign: 'center', cursor: 'pointer' }}>
                    <img src={d.img} alt={d.name} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', marginBottom: 20, display: 'block' }} />
                    <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 4 }}>{d.name}</div>
                    <div style={{ fontSize: 14, color: 'rgba(10,10,10,0.35)', fontStyle: 'italic', letterSpacing: 2, marginBottom: 8 }}>{d.jp}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: rouge }}>{d.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CHEF SECTION */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#F0EDEA' }}>
              <img src={IMAGES.restaurant.chef} alt="chef" style={{ width: '100%', height: 300, objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 11, color: rouge, letterSpacing: 4, fontStyle: 'italic', marginBottom: 16, textTransform: 'lowercase' }}>le chef</div>
                <h2 style={{ fontSize: 32, fontWeight: 400, letterSpacing: 3, textTransform: 'uppercase', margin: '0 0 20px' }}>Takeshi Mori</h2>
                <p style={{ fontSize: 15, fontStyle: 'italic', fontWeight: 300, color: 'rgba(10,10,10,0.6)', lineHeight: 1.9, margin: 0 }}>
                  Formé au Japon pendant 12 ans, Takeshi apporte une rigueur absolue dans chaque geste. Chaque plat est une méditation sur la pureté du goût.
                </p>
              </div>
            </div>
          </div>
        )}

        {section === 'menu' && (
          <div style={{ padding: '52px', maxWidth: 700, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <h2 style={{ fontSize: 36, fontWeight: 400, letterSpacing: 6, textTransform: 'uppercase', margin: '0 0 8px' }}>Menu</h2>
              <div style={{ fontSize: 14, color: rouge, fontStyle: 'italic', letterSpacing: 2 }}>carte de saison</div>
            </div>
            <div style={{ display: 'flex', gap: 0, justifyContent: 'center', borderBottom: '1px solid rgba(10,10,10,0.1)', marginBottom: 40 }}>
              {MENU_SECTIONS.map(({ cat }) => (
                <button key={cat} onClick={() => setActiveCat(cat)} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 13, letterSpacing: 2, textTransform: 'uppercase',
                  color: activeCat === cat ? rouge : 'rgba(10,10,10,0.4)',
                  fontStyle: 'italic', padding: '0 24px 16px',
                  borderBottom: activeCat === cat ? `2px solid ${rouge}` : '2px solid transparent',
                  fontFamily: '"Noto Serif", serif',
                }}>{cat}</button>
              ))}
            </div>
            {MENU_SECTIONS.filter(m => m.cat === activeCat).map(({ items }) => (
              <div key={activeCat} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {items.map(item => (
                  <div key={item.name} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 20, padding: '24px 0', borderBottom: '1px solid rgba(10,10,10,0.06)' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
                        <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: 1 }}>{item.name}</span>
                        <span style={{ fontSize: 12, color: rouge, fontStyle: 'italic', letterSpacing: 1 }}>{item.jp}</span>
                      </div>
                      <div style={{ fontSize: 14, color: 'rgba(10,10,10,0.45)', fontStyle: 'italic' }}>{item.desc}</div>
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: noir, alignSelf: 'center', letterSpacing: 1 }}>{item.price}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {section === 'à propos' && (
          <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 11, color: rouge, letterSpacing: 4, fontStyle: 'italic', textTransform: 'lowercase', marginBottom: 20 }}>notre philosophie</div>
              <h2 style={{ fontSize: 36, fontWeight: 400, letterSpacing: 4, textTransform: 'uppercase', margin: '0 0 24px', lineHeight: 1.3 }}>La Pureté<br />du Goût</h2>
              <p style={{ fontSize: 15, fontStyle: 'italic', fontWeight: 300, color: 'rgba(10,10,10,0.6)', lineHeight: 1.9, marginBottom: 20 }}>
                Sushi Zen est né d'une conviction : la cuisine japonaise est avant tout un art de la retenue. Moins de couleurs, moins de gras, moins de bruit — mais plus de précision, plus de soin, plus de respect du produit.
              </p>
              <p style={{ fontSize: 15, fontStyle: 'italic', fontWeight: 300, color: 'rgba(10,10,10,0.6)', lineHeight: 1.9 }}>
                Nos poissons arrivent chaque matin de Rungis. Notre riz est cuisiné selon une méthode apprise à Osaka. Rien n'est laissé au hasard.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[IMAGES.restaurant.dish1, IMAGES.restaurant.dish2, IMAGES.restaurant.interior, IMAGES.restaurant.chef].map((img, i) => (
                <img key={i} src={img} alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
              ))}
            </div>
          </div>
        )}

        {section === 'réserver' && (
          <div style={{ padding: '52px', maxWidth: 520, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <h2 style={{ fontSize: 36, fontWeight: 400, letterSpacing: 6, textTransform: 'uppercase', margin: '0 0 8px' }}>Réserver</h2>
              <div style={{ fontSize: 14, color: rouge, fontStyle: 'italic', letterSpacing: 2 }}>table pour ce soir</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {['Nom & Prénom', 'Téléphone', 'Date', 'Nombre de convives'].map(f => (
                <div key={f}>
                  <label style={{ fontSize: 11, fontWeight: 600, color: 'rgba(10,10,10,0.4)', letterSpacing: 3, textTransform: 'uppercase', fontStyle: 'italic', display: 'block', marginBottom: 8 }}>{f}</label>
                  <input type="text" style={{ width: '100%', border: 'none', borderBottom: '1px solid rgba(10,10,10,0.2)', padding: '10px 0', fontSize: 16, fontFamily: '"Noto Serif", serif', color: noir, background: 'transparent', boxSizing: 'border-box', outline: 'none' }} />
                </div>
              ))}
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, color: 'rgba(10,10,10,0.4)', letterSpacing: 3, textTransform: 'uppercase', fontStyle: 'italic', display: 'block', marginBottom: 8 }}>Demande spéciale</label>
                <textarea rows={3} style={{ width: '100%', border: 'none', borderBottom: '1px solid rgba(10,10,10,0.2)', padding: '10px 0', fontSize: 16, fontFamily: '"Noto Serif", serif', color: noir, background: 'transparent', boxSizing: 'border-box', resize: 'none', outline: 'none' }} />
              </div>
              <button style={{ background: noir, color: '#fff', border: 'none', padding: '16px 0', fontSize: 13, letterSpacing: 4, textTransform: 'uppercase', cursor: 'pointer', fontFamily: '"Noto Serif", serif', marginTop: 12 }}>
                Confirmer la réservation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
