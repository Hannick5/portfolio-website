import { useState } from 'react';
import { Leaf, Heart, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';
import { IMAGES } from '../../utils/images';

const COLLECTIONS = [
  { title: 'Bouquets du Marché', desc: 'Compositions fraîches, inspirées des saisons et des couleurs du moment.', price: 'À partir de 25€', img: IMAGES.fleuriste.bouquet },
  { title: 'Mariage & Cérémonie', desc: 'Bouquets de mariée, boutonnières, arches florales et centres de table.', price: 'Sur devis', img: IMAGES.fleuriste.wedding },
  { title: 'Plantes Vertes', desc: 'Sélection de plantes d\'intérieur et compositions botaniques.', price: 'À partir de 18€', img: IMAGES.fleuriste.plants },
  { title: 'Créations sur Mesure', desc: 'Un événement unique mérite des fleurs uniques. Parlons de votre vision.', price: 'Sur devis', img: IMAGES.fleuriste.work },
];

export default function FleuristeTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [activeCol, setActiveCol] = useState(0);
  const { primaryColor, accentColor, name, tagline } = project;

  const nav = ['accueil', 'collections', 'galerie', 'histoire', 'contact'];

  const sageGreen = primaryColor;
  const blushRose = accentColor;

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"DM Serif Display", serif', background: '#FDFAF7', color: '#2A2018' }}>

      {/* NAV — centré, délicat */}
      <nav style={{ background: '#FDFAF7', borderBottom: '1px solid rgba(61,90,77,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', height: 60, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Leaf size={18} color={sageGreen} />
          <span style={{ fontSize: 22, fontStyle: 'italic', color: sageGreen, letterSpacing: 1 }}>{name}</span>
        </div>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {nav.map(s => (
            <button key={s} onClick={() => setSection(s)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: '"Nunito", sans-serif', fontSize: 13, fontWeight: section === s ? 700 : 500,
              color: section === s ? sageGreen : '#6B7568',
              borderBottom: section === s ? `2px solid ${sageGreen}` : '2px solid transparent',
              paddingBottom: 2, textTransform: 'capitalize', transition: 'all 0.2s', letterSpacing: 0.5,
            }}>{s}</button>
          ))}
        </div>
        <button style={{ background: sageGreen, color: '#fff', border: 'none', padding: '8px 20px', fontFamily: '"Nunito", sans-serif', fontSize: 13, fontWeight: 700, cursor: 'pointer', borderRadius: 2, letterSpacing: 0.5 }}>
          Commander
        </button>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto' }}>

        {section === 'accueil' && (
          <div>
            {/* HERO split */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: 360 }}>
              <div style={{ padding: '60px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#F5EEE6' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                  <div style={{ height: 1, width: 32, background: blushRose }} />
                  <span style={{ fontFamily: '"Nunito", sans-serif', fontSize: 12, color: blushRose, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase' }}>Fleuriste Artisan</span>
                </div>
                <h1 style={{ fontSize: 42, lineHeight: 1.2, fontStyle: 'italic', margin: '0 0 20px', color: '#2A2018' }}>{tagline}</h1>
                <p style={{ fontFamily: '"Nunito", sans-serif', fontSize: 14, lineHeight: 1.7, color: '#6B7568', marginBottom: 28 }}>
                  Des compositions florales qui racontent une histoire. Chaque bouquet est créé avec soin, choisi selon la saison et votre sensibilité.
                </p>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => setSection('collections')} style={{ background: sageGreen, color: '#fff', border: 'none', padding: '11px 24px', fontFamily: '"Nunito", sans-serif', fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, letterSpacing: 0.5 }}>
                    Voir les collections <ChevronRight size={14} />
                  </button>
                  <button onClick={() => setSection('contact')} style={{ background: 'transparent', color: sageGreen, border: `1px solid ${sageGreen}`, padding: '11px 24px', fontFamily: '"Nunito", sans-serif', fontSize: 14, fontWeight: 600, cursor: 'pointer', letterSpacing: 0.5 }}>
                    Commande sur mesure
                  </button>
                </div>
              </div>
              <img src={IMAGES.fleuriste.hero} alt="bouquets" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* INFOS STRIP */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 0, borderBottom: '1px solid rgba(61,90,77,0.12)', background: '#fff' }}>
              {[
                { Icon: Clock, text: 'Mar – Sam : 9h – 19h' },
                { Icon: MapPin, text: '12 rue des Lilas, Paris 11e' },
                { Icon: Phone, text: '01 42 00 12 34' },
                { Icon: Heart, text: 'Livraison disponible' },
              ].map(({ Icon, text }, i) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 32px', borderRight: i < 3 ? '1px solid rgba(61,90,77,0.12)' : 'none' }}>
                  <Icon size={14} color={sageGreen} />
                  <span style={{ fontFamily: '"Nunito", sans-serif', fontSize: 13, color: '#6B7568', fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* COLLECTIONS PREVIEW */}
            <div style={{ padding: '52px 48px' }}>
              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 12 }}>
                  <div style={{ height: 1, flex: 1, maxWidth: 60, background: 'rgba(61,90,77,0.2)' }} />
                  <Leaf size={14} color={sageGreen} />
                  <div style={{ height: 1, flex: 1, maxWidth: 60, background: 'rgba(61,90,77,0.2)' }} />
                </div>
                <h2 style={{ fontSize: 34, fontStyle: 'italic', margin: 0, color: '#2A2018' }}>Nos Collections</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {COLLECTIONS.slice(0, 4).map(col => (
                  <div key={col.title} style={{ cursor: 'pointer', overflow: 'hidden', background: '#F5EEE6' }} onClick={() => setSection('collections')}>
                    <img src={col.img} alt={col.title} style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
                    <div style={{ padding: '16px 20px' }}>
                      <div style={{ fontSize: 18, fontStyle: 'italic', marginBottom: 4 }}>{col.title}</div>
                      <div style={{ fontFamily: '"Nunito", sans-serif', fontSize: 12, color: sageGreen, fontWeight: 700 }}>{col.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {section === 'collections' && (
          <div style={{ padding: '48px' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <h2 style={{ fontSize: 38, fontStyle: 'italic', margin: '0 0 8px', color: '#2A2018' }}>Collections</h2>
              <div style={{ fontFamily: '"Nunito", sans-serif', fontSize: 14, color: '#6B7568' }}>Chaque création, une histoire singulière</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {COLLECTIONS.map((col, i) => (
                <div key={col.title} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1.4fr' : '1.4fr 1fr', gap: 40, alignItems: 'center' }}>
                  {i % 2 === 0 && <img src={col.img} alt={col.title} style={{ width: '100%', height: 220, objectFit: 'cover' }} />}
                  <div style={{ padding: '0 8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                      <div style={{ height: 1, width: 40, background: blushRose }} />
                      <Leaf size={12} color={blushRose} />
                    </div>
                    <h3 style={{ fontSize: 28, fontStyle: 'italic', margin: '0 0 12px', color: '#2A2018' }}>{col.title}</h3>
                    <p style={{ fontFamily: '"Nunito", sans-serif', fontSize: 14, color: '#6B7568', lineHeight: 1.7, margin: '0 0 20px' }}>{col.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontFamily: '"Nunito", sans-serif', fontSize: 15, fontWeight: 700, color: sageGreen }}>{col.price}</span>
                      <button onClick={() => setSection('contact')} style={{ background: 'none', border: `1px solid ${sageGreen}`, color: sageGreen, padding: '8px 20px', fontFamily: '"Nunito", sans-serif', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                        Commander <ChevronRight size={13} />
                      </button>
                    </div>
                  </div>
                  {i % 2 !== 0 && <img src={col.img} alt={col.title} style={{ width: '100%', height: 220, objectFit: 'cover' }} />}
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'galerie' && (
          <div style={{ padding: '48px' }}>
            <h2 style={{ fontSize: 38, fontStyle: 'italic', textAlign: 'center', margin: '0 0 40px', color: '#2A2018' }}>Galerie</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '200px 200px', gap: 12 }}>
              <img src={IMAGES.fleuriste.hero} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', gridRow: 'span 2' }} />
              <img src={IMAGES.fleuriste.bouquet} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <img src={IMAGES.fleuriste.wedding} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <img src={IMAGES.fleuriste.plants} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <img src={IMAGES.fleuriste.work} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        )}

        {section === 'histoire' && (
          <div style={{ padding: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <img src={IMAGES.fleuriste.work} alt="atelier" style={{ width: '100%', height: 400, objectFit: 'cover' }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ height: 1, width: 40, background: blushRose }} />
                <span style={{ fontFamily: '"Nunito", sans-serif', fontSize: 12, color: blushRose, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase' }}>Notre histoire</span>
              </div>
              <h2 style={{ fontSize: 36, fontStyle: 'italic', margin: '0 0 24px', color: '#2A2018' }}>Une passion, une vocation</h2>
              <p style={{ fontFamily: '"Nunito", sans-serif', fontSize: 14, lineHeight: 1.8, color: '#6B7568', marginBottom: 20 }}>
                Depuis plus de quinze ans, nous cultivons l'art floral avec une conviction : chaque fleur mérite d'être mise en valeur, chaque bouquet doit raconter une histoire unique.
              </p>
              <p style={{ fontFamily: '"Nunito", sans-serif', fontSize: 14, lineHeight: 1.8, color: '#6B7568', marginBottom: 32 }}>
                Notre atelier travaille en direct avec des producteurs locaux et de saison, pour des compositions fraîches, responsables et sincèrement belles.
              </p>
              <div style={{ display: 'flex', gap: 32 }}>
                {[['15+', 'Ans d\'expérience'], ['2000+', 'Créations par an'], ['98%', 'Clients satisfaits']].map(([val, lab]) => (
                  <div key={lab}>
                    <div style={{ fontSize: 28, fontStyle: 'italic', color: sageGreen, fontWeight: 700 }}>{val}</div>
                    <div style={{ fontFamily: '"Nunito", sans-serif', fontSize: 12, color: '#6B7568', fontWeight: 500 }}>{lab}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {section === 'contact' && (
          <div style={{ padding: '48px', maxWidth: 600, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <h2 style={{ fontSize: 38, fontStyle: 'italic', margin: '0 0 8px', color: '#2A2018' }}>Commander</h2>
              <div style={{ fontFamily: '"Nunito", sans-serif', fontSize: 14, color: '#6B7568' }}>Un projet floral ? Parlez-nous de votre occasion</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { label: 'Votre prénom', key: 'nom', type: 'text' },
                { label: 'Téléphone', key: 'tel', type: 'tel' },
                { label: 'Type de commande', key: 'type', type: 'text' },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ fontFamily: '"Nunito", sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: 1, color: sageGreen, display: 'block', marginBottom: 6, textTransform: 'uppercase' }}>{f.label}</label>
                  <input type={f.type} style={{ width: '100%', border: '1px solid rgba(61,90,77,0.25)', padding: '12px 16px', fontFamily: '"Nunito", sans-serif', fontSize: 14, color: '#2A2018', boxSizing: 'border-box', background: '#fff', outline: 'none' }} />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: '"Nunito", sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: 1, color: sageGreen, display: 'block', marginBottom: 6, textTransform: 'uppercase' }}>Votre message</label>
                <textarea rows={4} style={{ width: '100%', border: '1px solid rgba(61,90,77,0.25)', padding: '12px 16px', fontFamily: '"Nunito", sans-serif', fontSize: 14, color: '#2A2018', boxSizing: 'border-box', resize: 'none', background: '#fff', outline: 'none' }} />
              </div>
              <button style={{ background: sageGreen, color: '#fff', border: 'none', padding: '14px 0', fontFamily: '"Nunito", sans-serif', fontSize: 15, fontWeight: 700, cursor: 'pointer', letterSpacing: 1 }}>
                Envoyer ma demande
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
