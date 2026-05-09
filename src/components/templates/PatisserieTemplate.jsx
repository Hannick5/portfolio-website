import { useState } from 'react';
import { Heart, Star, Phone, MapPin, Clock, ChevronRight, Gift } from 'lucide-react';
import { IMAGES } from '../../utils/images';

const CREATIONS = [
  { name: 'Éclair Rose', desc: 'Pâte à choux, crème diplomate rose, glaçage miroir', price: '4,80€', img: IMAGES.bakery.tarte },
  { name: 'Tarte Framboise', desc: 'Pâte sablée maison, crème citron, framboises fraîches', price: '5,20€', img: IMAGES.bakery.products },
  { name: 'Paris-Brest', desc: 'Praliné noisettes, choux feuilletés, éclats de caramel', price: '5,50€', img: IMAGES.bakery.croissant },
  { name: 'Entremet Chocolat', desc: 'Mousse Valrhona 70%, biscuit Joconde, cœur caramel', price: '6,20€', img: IMAGES.bakery.bread },
];

export default function PatisserieTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [form, setForm] = useState({ prenom: '', tel: '', occasion: '', detail: '' });
  const [sent, setSent] = useState(false);
  const { primaryColor, accentColor, name, tagline } = project;

  const nav = ['accueil', 'créations', 'commandes', 'contact'];
  const rose = accentColor;
  const prune = primaryColor;

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"Cormorant Garamond", serif', background: '#FDF8F5', color: '#2E1A2E' }}>

      {/* TOP — ultra fine */}
      <div style={{ background: rose, color: '#fff', textAlign: 'center', padding: '7px', fontSize: 12, fontStyle: 'italic', letterSpacing: 1.5 }}>
        Livraison Paris intra-muros • Commandes sur mesure pour vos événements
      </div>

      {/* NAV */}
      <nav style={{ background: '#FDF8F5', borderBottom: '1px solid rgba(232,160,192,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 44px', height: 64, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Heart size={16} color={rose} fill={rose} />
          <span style={{ fontSize: 24, fontStyle: 'italic', fontWeight: 700, color: prune, letterSpacing: 1 }}>{name}</span>
        </div>
        <div style={{ display: 'flex', gap: 28 }}>
          {nav.map(s => (
            <button key={s} onClick={() => setSection(s)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: '"Cormorant Garamond", serif', fontSize: 17, fontWeight: section === s ? 700 : 400,
              fontStyle: 'italic', color: section === s ? rose : 'rgba(46,26,46,0.5)',
              borderBottom: section === s ? `1px solid ${rose}` : '1px solid transparent',
              paddingBottom: 2, textTransform: 'capitalize', transition: 'all 0.2s',
            }}>{s}</button>
          ))}
        </div>
        <button style={{ background: rose, color: '#fff', border: 'none', padding: '9px 22px', fontFamily: '"Cormorant Garamond", serif', fontSize: 16, fontStyle: 'italic', cursor: 'pointer' }}>
          Commander
        </button>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {section === 'accueil' && (
          <div>
            {/* HERO — image droite, texte gauche avec fond rose pâle */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 360 }}>
              <div style={{ background: 'linear-gradient(135deg, #FDE8F0 0%, #FDF8F5 100%)', padding: '64px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <div style={{ height: 1, width: 40, background: rose, opacity: 0.5 }} />
                  <span style={{ fontSize: 13, color: rose, fontStyle: 'italic', letterSpacing: 1 }}>Pâtisserie Artisanale</span>
                </div>
                <h1 style={{ fontSize: 44, fontWeight: 700, fontStyle: 'italic', lineHeight: 1.2, margin: '0 0 20px', color: prune }}>
                  {tagline}
                </h1>
                <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 17, fontStyle: 'italic', color: 'rgba(46,26,46,0.6)', lineHeight: 1.8, marginBottom: 32, maxWidth: 340 }}>
                  Chaque pièce est créée comme une œuvre, pensée pour vous émerveiller et vous faire partager un moment de grâce sucrée.
                </p>
                <div style={{ display: 'flex', gap: 14 }}>
                  <button onClick={() => setSection('créations')} style={{ background: prune, color: '#fff', border: 'none', padding: '12px 28px', fontFamily: '"Cormorant Garamond", serif', fontSize: 17, fontStyle: 'italic', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                    Découvrir <ChevronRight size={14} />
                  </button>
                  <button onClick={() => setSection('commandes')} style={{ background: 'transparent', color: prune, border: `1px solid ${rose}`, padding: '12px 28px', fontFamily: '"Cormorant Garamond", serif', fontSize: 17, fontStyle: 'italic', cursor: 'pointer' }}>
                    Commande sur mesure
                  </button>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <img src={IMAGES.bakery.tarte} alt="pâtisserie" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 24, left: -20, background: '#fff', padding: '14px 20px', boxShadow: '0 8px 32px rgba(232,160,192,0.3)' }}>
                  <div style={{ display: 'flex', gap: 2, marginBottom: 4 }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} color={rose} fill={rose} />)}
                  </div>
                  <div style={{ fontSize: 12, fontStyle: 'italic', color: prune, fontWeight: 600 }}>4.9 — 200+ avis</div>
                </div>
              </div>
            </div>

            {/* STRIP */}
            <div style={{ background: prune, display: 'flex', justifyContent: 'space-around', padding: '24px 48px' }}>
              {[{ Icon: Heart, text: 'Ingrédients Premium' }, { Icon: Gift, text: 'Coffrets Cadeaux' }, { Icon: Star, text: 'Créations sur Mesure' }, { Icon: Clock, text: 'Mardi–Samedi 9h–19h' }].map(({ Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon size={14} color={rose} fill={rose} />
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, fontStyle: 'italic' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* CREATIONS PREVIEW */}
            <div style={{ padding: '60px 52px' }}>
              <div style={{ textAlign: 'center', marginBottom: 44 }}>
                <div style={{ fontSize: 13, color: rose, fontStyle: 'italic', letterSpacing: 1.5, marginBottom: 12 }}>Notre sélection</div>
                <h2 style={{ fontSize: 38, fontWeight: 700, fontStyle: 'italic', color: prune, margin: 0 }}>Créations du Moment</h2>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 12 }}>
                  <div style={{ height: 1, width: 80, background: 'rgba(232,160,192,0.4)' }} />
                  <Heart size={12} color={rose} fill={rose} />
                  <div style={{ height: 1, width: 80, background: 'rgba(232,160,192,0.4)' }} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 24 }}>
                {CREATIONS.map(c => (
                  <div key={c.name} style={{ cursor: 'pointer', textAlign: 'center' }}>
                    <div style={{ position: 'relative', marginBottom: 16, overflow: 'hidden' }}>
                      <img src={c.img} alt={c.name} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }} />
                      <div style={{ position: 'absolute', inset: 0, background: `${prune}00`, transition: 'background 0.3s' }} />
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 700, fontStyle: 'italic', color: prune, marginBottom: 6 }}>{c.name}</div>
                    <div style={{ fontSize: 13, color: 'rgba(46,26,46,0.5)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: 8 }}>{c.desc}</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: rose }}>{c.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {section === 'créations' && (
          <div style={{ padding: '52px' }}>
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <h2 style={{ fontSize: 40, fontWeight: 700, fontStyle: 'italic', color: prune, margin: 0 }}>Nos Créations</h2>
              <div style={{ fontSize: 16, fontStyle: 'italic', color: rose, marginTop: 8 }}>Faites à la main, chaque matin</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {CREATIONS.map((c, i) => (
                <div key={c.name} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 2fr' : '2fr 1fr', gap: 40, alignItems: 'center' }}>
                  {i % 2 === 0 && <img src={c.img} alt={c.name} style={{ width: '100%', height: 200, objectFit: 'cover' }} />}
                  <div style={{ textAlign: i % 2 === 0 ? 'left' : 'right' }}>
                    <div style={{ fontSize: 11, color: rose, fontStyle: 'italic', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>Pâtisserie Fine</div>
                    <h3 style={{ fontSize: 30, fontWeight: 700, fontStyle: 'italic', color: prune, margin: '0 0 12px' }}>{c.name}</h3>
                    <p style={{ fontSize: 16, fontStyle: 'italic', color: 'rgba(46,26,46,0.6)', lineHeight: 1.7, margin: '0 0 16px' }}>{c.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 20, justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end' }}>
                      <span style={{ fontSize: 22, fontWeight: 700, color: rose }}>{c.price}</span>
                      <button onClick={() => setSection('commandes')} style={{ background: 'none', border: `1px solid ${rose}`, color: rose, padding: '8px 20px', fontFamily: '"Cormorant Garamond", serif', fontSize: 16, fontStyle: 'italic', cursor: 'pointer' }}>
                        Commander
                      </button>
                    </div>
                  </div>
                  {i % 2 !== 0 && <img src={c.img} alt={c.name} style={{ width: '100%', height: 200, objectFit: 'cover' }} />}
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'commandes' && (
          <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'start' }}>
            <div style={{ background: 'linear-gradient(135deg, #FDE8F0, #FDF8F5)', padding: '40px' }}>
              <Heart size={28} color={rose} fill={rose} style={{ marginBottom: 20 }} />
              <h2 style={{ fontSize: 36, fontWeight: 700, fontStyle: 'italic', color: prune, margin: '0 0 16px' }}>Commandes sur Mesure</h2>
              <p style={{ fontSize: 16, fontStyle: 'italic', color: 'rgba(46,26,46,0.65)', lineHeight: 1.8, marginBottom: 24 }}>
                Anniversaire, mariage, baptême, occasion professionnelle… Créons ensemble la pièce qui vous ressemble.
              </p>
              {[['Entretien gratuit', 'Échange de 15 min pour cerner vos envies'], ['Devis sous 24h', 'Proposition détaillée et transparente'], ['Livraison possible', 'Paris intra-muros, sur demande']].map(([titre, detail]) => (
                <div key={titre} style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                  <Heart size={14} color={rose} fill={rose} style={{ flexShrink: 0, marginTop: 4 }} />
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, fontStyle: 'italic', color: prune, marginBottom: 2 }}>{titre}</div>
                    <div style={{ fontSize: 14, fontStyle: 'italic', color: 'rgba(46,26,46,0.55)' }}>{detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[{ label: 'Votre prénom', key: 'prenom' }, { label: 'Téléphone', key: 'tel' }, { label: 'Occasion', key: 'occasion' }].map(f => (
                  <div key={f.key}>
                    <label style={{ fontSize: 13, fontStyle: 'italic', color: rose, display: 'block', marginBottom: 6 }}>{f.label}</label>
                    <input type="text" value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} style={{ width: '100%', border: 'none', borderBottom: `1px solid rgba(232,160,192,0.5)`, padding: '10px 0', fontFamily: '"Cormorant Garamond", serif', fontSize: 17, fontStyle: 'italic', color: prune, background: 'transparent', boxSizing: 'border-box', outline: 'none' }} />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 13, fontStyle: 'italic', color: rose, display: 'block', marginBottom: 6 }}>Votre idée</label>
                  <textarea rows={4} value={form.detail} onChange={e => setForm(p => ({ ...p, detail: e.target.value }))} style={{ width: '100%', border: 'none', borderBottom: `1px solid rgba(232,160,192,0.5)`, padding: '10px 0', fontFamily: '"Cormorant Garamond", serif', fontSize: 17, fontStyle: 'italic', color: prune, background: 'transparent', boxSizing: 'border-box', resize: 'none', outline: 'none' }} />
                </div>
                {sent
                  ? <div style={{ textAlign: 'center', fontSize: 18, fontStyle: 'italic', color: rose, padding: '20px' }}>
                    <Heart size={24} fill={rose} color={rose} style={{ marginBottom: 8 }} /><br />
                    Merci ! Nous vous répondrons sous 24h.
                  </div>
                  : <button onClick={() => setSent(true)} style={{ background: prune, color: '#fff', border: 'none', padding: '14px 0', fontFamily: '"Cormorant Garamond", serif', fontSize: 18, fontStyle: 'italic', cursor: 'pointer' }}>
                    Envoyer ma demande
                  </button>
                }
              </div>
            </div>
          </div>
        )}

        {section === 'contact' && (
          <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52 }}>
            <div>
              <h2 style={{ fontSize: 38, fontWeight: 700, fontStyle: 'italic', color: prune, margin: '0 0 32px' }}>Nous trouver</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[{ Icon: Clock, val: 'Mar – Sam : 9h – 19h • Dim : 9h – 13h' }, { Icon: MapPin, val: '8 rue Élise, Paris 3e' }, { Icon: Phone, val: '01 42 00 00 00' }].map(({ Icon, val }) => (
                  <div key={val} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <Icon size={16} color={rose} />
                    <span style={{ fontSize: 17, fontStyle: 'italic', color: 'rgba(46,26,46,0.7)' }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
            <img src={IMAGES.bakery.products} alt="créations" style={{ width: '100%', height: 280, objectFit: 'cover' }} />
          </div>
        )}
      </div>
    </div>
  );
}
