import { useState } from 'react';
import { Heart, Star, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';
import { IMAGES } from '../../utils/images';

const COLLECTIONS = [
  { name: 'Bouquet de Mariée', desc: 'Roses blanches, pivoines, gypsophile. Composition romantique et intemporelle.', price: 'Dès 180€', img: IMAGES.fleuriste.wedding },
  { name: 'Arche Florale', desc: 'Structure en bois naturel, fleurs fraîches, feuillage. Installation incluse.', price: 'Dès 850€', img: IMAGES.fleuriste.bouquet },
  { name: 'Centres de Table', desc: 'Compositions en hauteur ou basse, personnalisées aux couleurs de votre mariage.', price: 'Dès 65€/pièce', img: IMAGES.fleuriste.work },
  { name: 'Boutonnières & Couronne', desc: 'Pour le marié, les témoins et les invités d\'honneur.', price: 'Dès 25€', img: IMAGES.fleuriste.plants },
];

export default function FleuristeEventsTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const { primaryColor, accentColor, name, tagline } = project;

  const nav = ['accueil', 'mariage', 'autres événements', 'contact'];
  const dark = primaryColor;
  const gold = accentColor;
  const cream = '#FDFBF7';

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"Cormorant Garamond", serif', background: cream, color: dark }}>

      {/* TOP */}
      <div style={{ background: dark, color: 'rgba(255,255,255,0.6)', padding: '8px 44px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0, fontSize: 12, fontStyle: 'italic', letterSpacing: 0.5 }}>
        <span>Design Floral Événementiel — Paris & Île-de-France</span>
        <div style={{ display: 'flex', gap: 2, color: gold }}>
          {[...Array(5)].map((_, i) => <Star key={i} size={10} fill={gold} color={gold} />)}
          <span style={{ marginLeft: 6, fontStyle: 'normal' }}>4.9</span>
        </div>
      </div>

      {/* NAV */}
      <nav style={{ background: cream, borderBottom: '1px solid rgba(26,26,26,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 44px', height: 68, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Heart size={16} color={gold} fill={gold} />
          <div>
            <div style={{ fontSize: 22, fontWeight: 700, fontStyle: 'italic', color: dark, letterSpacing: 1 }}>{name}</div>
            <div style={{ fontSize: 11, color: gold, letterSpacing: 2, fontFamily: '"DM Sans", sans-serif', textTransform: 'uppercase' }}>Fleurs & Événements</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 28 }}>
          {nav.map(s => (
            <button key={s} onClick={() => setSection(s)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: '"Cormorant Garamond", serif', fontSize: 16, fontWeight: section === s ? 700 : 400,
              fontStyle: 'italic', color: section === s ? gold : 'rgba(26,26,26,0.45)',
              borderBottom: section === s ? `1px solid ${gold}` : '1px solid transparent',
              paddingBottom: 3, transition: 'all 0.2s', textTransform: 'capitalize',
            }}>{s}</button>
          ))}
        </div>
        <button onClick={() => setSection('contact')} style={{ background: dark, color: cream, border: 'none', padding: '10px 24px', fontFamily: '"Cormorant Garamond", serif', fontSize: 17, fontStyle: 'italic', cursor: 'pointer' }}>
          Demande de devis
        </button>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {section === 'accueil' && (
          <div>
            {/* HERO — très épuré */}
            <div style={{ position: 'relative', height: 400 }}>
              <img src={IMAGES.fleuriste.wedding} alt="mariage floral" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.55)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,26,26,0.2) 0%, rgba(26,26,26,0.6) 100%)' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
                <div style={{ color: gold, fontSize: 13, fontStyle: 'italic', letterSpacing: 3, marginBottom: 20 }}>Design Floral d'Exception</div>
                <h1 style={{ fontSize: 60, fontWeight: 400, fontStyle: 'italic', color: '#fff', margin: '0 0 16px', lineHeight: 1.1, letterSpacing: 2 }}>
                  {name}
                </h1>
                <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.75)', margin: '0 0 40px', fontWeight: 300, fontStyle: 'italic', letterSpacing: 1 }}>
                  {tagline}
                </p>
                <div style={{ display: 'flex', gap: 20 }}>
                  <button onClick={() => setSection('mariage')} style={{ background: 'transparent', color: '#fff', border: `1px solid ${gold}`, padding: '14px 36px', fontFamily: '"Cormorant Garamond", serif', fontSize: 18, fontStyle: 'italic', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                    Mariage <ChevronRight size={16} />
                  </button>
                  <button onClick={() => setSection('contact')} style={{ background: gold, color: '#fff', border: 'none', padding: '14px 36px', fontFamily: '"Cormorant Garamond", serif', fontSize: 18, fontStyle: 'italic', cursor: 'pointer' }}>
                    Consultation gratuite
                  </button>
                </div>
              </div>
            </div>

            {/* STRIP dorée */}
            <div style={{ background: dark, padding: '20px 52px', display: 'flex', justifyContent: 'center', gap: 52 }}>
              {[{ Icon: Heart, text: 'Sur mesure exclusivement' }, { Icon: Star, text: '250+ mariages réalisés' }, { Icon: Clock, text: 'Consultation 7j/7' }].map(({ Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon size={14} color={gold} fill={gold} />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, fontStyle: 'italic', letterSpacing: 0.5 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* COLLECTIONS */}
            <div style={{ padding: '60px 52px' }}>
              <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 16 }}>
                  <div style={{ height: 1, width: 80, background: `${gold}40` }} />
                  <Heart size={14} color={gold} fill={gold} />
                  <div style={{ height: 1, width: 80, background: `${gold}40` }} />
                </div>
                <h2 style={{ fontSize: 40, fontWeight: 400, fontStyle: 'italic', margin: 0, color: dark }}>Nos créations pour votre mariage</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                {COLLECTIONS.map(c => (
                  <div key={c.name} style={{ cursor: 'pointer' }}>
                    <img src={c.img} alt={c.name} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', marginBottom: 16 }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <div style={{ height: 1, width: 24, background: gold }} />
                      <div style={{ fontSize: 22, fontWeight: 600, fontStyle: 'italic', color: dark }}>{c.name}</div>
                    </div>
                    <div style={{ fontSize: 14, fontStyle: 'italic', color: 'rgba(26,26,26,0.55)', lineHeight: 1.7, marginBottom: 10 }}>{c.desc}</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: gold }}>{c.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {section === 'mariage' && (
          <div style={{ padding: '52px' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontSize: 40, fontWeight: 400, fontStyle: 'italic', margin: '0 0 8px', color: dark }}>Mariage</h2>
              <div style={{ fontSize: 16, fontStyle: 'italic', color: gold }}>De la consultation à la pose, nous orchestrons votre floral</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {COLLECTIONS.map((c, i) => (
                <div key={c.name} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1.5fr' : '1.5fr 1fr', gap: 48, alignItems: 'center' }}>
                  {i % 2 === 0 && <img src={c.img} alt={c.name} style={{ width: '100%', height: 220, objectFit: 'cover' }} />}
                  <div>
                    <div style={{ fontSize: 12, color: gold, letterSpacing: 2, fontFamily: '"DM Sans", sans-serif', textTransform: 'uppercase', marginBottom: 12 }}>Design floral</div>
                    <h3 style={{ fontSize: 30, fontWeight: 600, fontStyle: 'italic', color: dark, margin: '0 0 12px' }}>{c.name}</h3>
                    <p style={{ fontSize: 15, fontStyle: 'italic', color: 'rgba(26,26,26,0.55)', lineHeight: 1.8, margin: '0 0 20px' }}>{c.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                      <span style={{ fontSize: 22, fontWeight: 700, color: gold }}>{c.price}</span>
                      <button onClick={() => setSection('contact')} style={{ background: 'none', border: `1px solid ${gold}`, color: gold, padding: '8px 20px', fontFamily: '"Cormorant Garamond", serif', fontSize: 16, fontStyle: 'italic', cursor: 'pointer' }}>
                        Demander
                      </button>
                    </div>
                  </div>
                  {i % 2 !== 0 && <img src={c.img} alt={c.name} style={{ width: '100%', height: 220, objectFit: 'cover' }} />}
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'autres événements' && (
          <div style={{ padding: '52px' }}>
            <h2 style={{ fontSize: 40, fontWeight: 400, fontStyle: 'italic', margin: '0 0 40px', color: dark }}>Autres Événements</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28 }}>
              {[
                { title: 'Baptêmes', desc: 'Compositions douces et aériennes pour fêter l\'arrivée de bébé.', img: IMAGES.fleuriste.bouquet },
                { title: 'Anniversaires', desc: 'Tables décorées, centres floraux, arches personnalisées.', img: IMAGES.fleuriste.work },
                { title: 'Événements d\'entreprise', desc: 'Décoration de gala, lancement, soirée d\'entreprise.', img: IMAGES.fleuriste.hero },
              ].map(e => (
                <div key={e.title}>
                  <img src={e.img} alt={e.title} style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block', marginBottom: 16 }} />
                  <h3 style={{ fontSize: 24, fontWeight: 600, fontStyle: 'italic', color: dark, margin: '0 0 10px' }}>{e.title}</h3>
                  <p style={{ fontSize: 14, fontStyle: 'italic', color: 'rgba(26,26,26,0.55)', lineHeight: 1.7, margin: 0 }}>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'contact' && (
          <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52 }}>
            <div>
              <h2 style={{ fontSize: 38, fontWeight: 400, fontStyle: 'italic', margin: '0 0 20px', color: dark }}>Consultation gratuite</h2>
              <p style={{ fontSize: 15, fontStyle: 'italic', color: 'rgba(26,26,26,0.55)', lineHeight: 1.9, marginBottom: 28 }}>
                Chaque mariage est unique. Rencontrons-nous pour parler de votre vision, de vos couleurs, de votre lieu. Nous créerons ensemble un univers floral à votre image.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[{ Icon: Phone, val: '01 42 00 00 00' }, { Icon: Clock, val: 'Consultations Mar–Sam 10h–18h' }, { Icon: MapPin, val: 'Atelier : 8 rue des Fleurs, Paris 3e' }].map(({ Icon, val }) => (
                  <div key={val} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <Icon size={15} color={gold} />
                    <span style={{ fontSize: 15, fontStyle: 'italic', color: 'rgba(26,26,26,0.65)' }}>{val}</span>
                  </div>
                ))}
              </div>
              <img src={IMAGES.fleuriste.wedding} alt="mariage" style={{ width: '100%', height: 200, objectFit: 'cover', marginTop: 28 }} />
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {['Prénom', 'Téléphone', 'Date du mariage', 'Nombre d\'invités', 'Votre vision'].map((f, i) => (
                  <div key={f}>
                    <label style={{ fontSize: 13, fontStyle: 'italic', color: gold, display: 'block', marginBottom: 6 }}>{f}</label>
                    {i < 4
                      ? <input type="text" style={{ width: '100%', border: 'none', borderBottom: `1px solid rgba(26,26,26,0.15)`, padding: '10px 0', fontFamily: '"Cormorant Garamond", serif', fontSize: 17, fontStyle: 'italic', color: dark, background: 'transparent', boxSizing: 'border-box', outline: 'none' }} />
                      : <textarea rows={4} style={{ width: '100%', border: 'none', borderBottom: `1px solid rgba(26,26,26,0.15)`, padding: '10px 0', fontFamily: '"Cormorant Garamond", serif', fontSize: 17, fontStyle: 'italic', color: dark, background: 'transparent', boxSizing: 'border-box', resize: 'none', outline: 'none' }} />
                    }
                  </div>
                ))}
                <button style={{ background: dark, color: cream, border: 'none', padding: '14px 0', fontFamily: '"Cormorant Garamond", serif', fontSize: 18, fontStyle: 'italic', cursor: 'pointer' }}>
                  Demander une consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
