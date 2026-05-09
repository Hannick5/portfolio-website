import { useState } from 'react';
import { IMAGES } from '../../utils/images';

// ══ SÉCURITÉ MAXIMALE ══
// Aesthetic: Industrial brutalism — pitch black, acid yellow, zero decoration
// Font: Bebas Neue (ALL CAPS display) + Courier Prime (mono data)
// Layout: VERTICAL SIDEBAR — structurally opposite to every other template

const SERVICES = [
  { num: '01', title: 'OUVERTURE DE PORTE', desc: 'Porte claquée, clé cassée, serrure bloquée.', price: '49€', urgent: true },
  { num: '02', title: 'CHANGEMENT DE SERRURE', desc: 'Toutes marques, certification A2P recommandée.', price: '89€', urgent: false },
  { num: '03', title: 'PORTE BLINDÉE', desc: 'Installation complète, certificat fourni.', price: 'Devis', urgent: false },
  { num: '04', title: 'SERRURE MULTIPOINTS', desc: 'Pose et remplacement, main-d\'œuvre incluse.', price: '149€', urgent: false },
  { num: '05', title: 'REPRODUCTION DE CLÉS', desc: 'Original ou par code. Délai immédiat.', price: '5€', urgent: false },
  { num: '06', title: 'SÉCURISATION PRO', desc: 'Audit sécurité locaux commerciaux.', price: 'Devis', urgent: false },
];

export default function LocksmithTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [form, setForm] = useState({ nom: '', tel: '', type: '', message: '' });
  const [sent, setSent] = useState(false);
  const { accentColor, name } = project;

  const ac = accentColor || '#FFE500';

  const NAV = [
    { id: 'accueil', label: 'ACCUEIL' },
    { id: 'urgence', label: '▶ URGENCE' },
    { id: 'services', label: 'SERVICES' },
    { id: 'avis', label: 'AVIS' },
    { id: 'devis', label: 'DEVIS' },
  ];

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', fontFamily: '"Courier Prime", "Courier New", monospace', background: '#000' }}>

      {/* SIDEBAR — vertical, brutale */}
      <div style={{ width: 180, background: '#000', borderRight: `3px solid ${ac}`, display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
        {/* Logo */}
        <div style={{ borderBottom: `2px solid ${ac}`, padding: '20px 16px' }}>
          <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 24, color: ac, letterSpacing: 2, lineHeight: 1.1 }}>
            {name.toUpperCase().split(' ').map((w, i) => <div key={i}>{w}</div>)}
          </div>
          <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 10, color: '#555', marginTop: 6 }}>SERRURERIE</div>
        </div>
        {/* Nav items */}
        <nav style={{ flex: 1 }}>
          {NAV.map((item, i) => (
            <button key={item.id} onClick={() => setSection(item.id)} style={{
              width: '100%', textAlign: 'left', padding: '14px 16px',
              background: section === item.id ? ac : 'transparent',
              color: section === item.id ? '#000' : '#666',
              border: 'none', borderBottom: '1px solid #1A1A1A',
              fontFamily: '"Bebas Neue", sans-serif', fontSize: 16, letterSpacing: 2,
              cursor: 'pointer', transition: 'background 0.1s',
            }}>
              {item.label}
            </button>
          ))}
        </nav>
        {/* Phone — bas sidebar */}
        <div style={{ borderTop: `2px solid ${ac}`, padding: '16px 12px' }}>
          <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 10, color: '#555', marginBottom: 4 }}>URGENCE 24/7</div>
          <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 20, color: ac, letterSpacing: 1 }}>06 12 34 56</div>
          <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 20, color: ac, letterSpacing: 1 }}>78</div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, overflow: 'auto', background: '#000' }}>

        {/* ─── ACCUEIL ─── */}
        {section === 'accueil' && (
          <div>
            {/* Hero — photo avec overlay brutal */}
            <div style={{ position: 'relative', height: 280 }}>
              <img src={IMAGES.locksmith.hero} alt="serrurerie" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3) contrast(1.3) grayscale(0.8)' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 40px' }}>
                <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 11, color: ac, letterSpacing: 3, marginBottom: 12 }}>
                  [ DISPONIBLE MAINTENANT ]
                </div>
                <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 72, color: '#FFF', lineHeight: 0.9, letterSpacing: 2 }}>
                  {name.toUpperCase()}
                </div>
                <div style={{ width: '100%', height: 3, background: ac, margin: '16px 0' }} />
                <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 14, color: '#888' }}>
                  Intervention garantie en moins de 20 minutes
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderBottom: `1px solid #1A1A1A` }}>
              {[['&lt;20 MIN','DÉLAI MAX'],['10 ANS','EXPÉRIENCE'],['2400+','CLIENTS'],['A2P','CERTIFIÉ']].map(([v,l],i) => (
                <div key={i} style={{ padding: '20px 24px', borderRight: i<3?'1px solid #1A1A1A':'none' }}>
                  <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 28, color: ac, letterSpacing: 1 }} dangerouslySetInnerHTML={{__html: v}} />
                  <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 10, color: '#555', letterSpacing: 1, marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>

            {/* Services preview */}
            <div style={{ padding: '32px 40px' }}>
              <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 11, color: '#555', letterSpacing: 3, marginBottom: 20 }}>// INTERVENTIONS PRINCIPALES</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                {SERVICES.slice(0, 4).map((s, i) => (
                  <div key={i} style={{ background: '#000', padding: '20px 24px', cursor: 'pointer' }} onClick={() => setSection('services')}>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 8 }}>
                      <span style={{ fontFamily: '"Courier Prime", monospace', fontSize: 10, color: '#555', marginTop: 2 }}>{s.num}</span>
                      <div>
                        <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 18, color: s.urgent ? ac : '#FFF', letterSpacing: 1 }}>{s.title}</div>
                        <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 12, color: '#555', lineHeight: 1.5, marginTop: 4 }}>{s.desc}</div>
                      </div>
                    </div>
                    <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 20, color: ac }}>{s.price}</div>
                  </div>
                ))}
              </div>
              <button onClick={() => setSection('services')} style={{ marginTop: 16, background: 'transparent', border: `1px solid #333`, color: '#555', padding: '10px 20px', fontFamily: '"Courier Prime", monospace', fontSize: 12, cursor: 'pointer', letterSpacing: 1 }}>
                [ VOIR TOUS LES SERVICES ]
              </button>
            </div>

            {/* Photos */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#1A1A1A', margin: '0 40px 40px' }}>
              <img src={IMAGES.locksmith.work1} alt="intervention" style={{ width:'100%', height:160, objectFit:'cover', filter:'grayscale(0.6) contrast(1.2)' }} />
              <img src={IMAGES.locksmith.door} alt="serrure" style={{ width:'100%', height:160, objectFit:'cover', filter:'grayscale(0.6) contrast(1.2)' }} />
            </div>
          </div>
        )}

        {/* ─── URGENCE ─── */}
        {section === 'urgence' && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100%', padding: '60px 40px', textAlign: 'center' }}>
            <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 11, color: '#F00', letterSpacing: 3, marginBottom: 24 }}>
              ● DISPONIBLE MAINTENANT
            </div>
            <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 88, color: '#FFF', letterSpacing: 2, lineHeight: 0.9, marginBottom: 12 }}>
              06 12
            </div>
            <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 88, color: ac, letterSpacing: 2, lineHeight: 0.9, marginBottom: 32 }}>
              34 56 78
            </div>
            <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 14, color: '#555', marginBottom: 40 }}>
              Intervention 7j/7 · 24h/24 · Île-de-France
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: '#1A1A1A', maxWidth: 500, width: '100%' }}>
              {[['1','APPEL'],['2','CONFIRMATION'],['3','INTERVENTION']].map(([n,t]) => (
                <div key={n} style={{ background:'#000', padding:'20px', textAlign:'center' }}>
                  <div style={{ fontFamily:'"Bebas Neue", sans-serif', fontSize:36, color:ac }}>{n}</div>
                  <div style={{ fontFamily:'"Courier Prime", monospace', fontSize:10, color:'#555', letterSpacing:1, marginTop:4 }}>{t}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── SERVICES ─── */}
        {section === 'services' && (
          <div style={{ padding: '32px 40px' }}>
            <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 40, color: '#FFF', letterSpacing: 2, marginBottom: 4 }}>SERVICES</div>
            <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 11, color: '#555', letterSpacing: 2, marginBottom: 28 }}>// DEVIS GRATUIT — FACTURATION TRANSPARENTE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: '#1A1A1A' }}>
              {SERVICES.map((s, i) => (
                <div key={i} style={{ background: '#000', padding: '20px 28px', display: 'flex', alignItems: 'center', gap: 24 }}>
                  <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 12, color: '#555', minWidth: 28 }}>{s.num}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 22, color: s.urgent ? ac : '#FFF', letterSpacing: 1, marginBottom: 4 }}>{s.title}</div>
                    <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 12, color: '#555' }}>{s.desc}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 24, color: ac }}>{s.price}</div>
                    <button onClick={() => setSection('devis')} style={{ background: 'transparent', border: `1px solid ${ac}`, color: ac, padding: '6px 14px', fontFamily: '"Courier Prime", monospace', fontSize: 11, cursor: 'pointer', letterSpacing: 1 }}>
                      DEVIS
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── AVIS ─── */}
        {section === 'avis' && (
          <div style={{ padding: '32px 40px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
              <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 40, color: '#FFF', letterSpacing: 2 }}>AVIS CLIENTS</div>
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 12, color: ac }}>4.9 / 5 — 184 AVIS</div>
            </div>
            {[
              { nom: 'THOMAS A.', texte: 'Arrivé en 18 minutes. Porte ouverte sans dommage. Professionnel impeccable.', date: '2024-11-03' },
              { nom: 'NADIA B.', texte: 'Devis respecté à l\'euro près. Porte blindée posée en une matinée.', date: '2024-10-17' },
              { nom: 'LAURENT C.', texte: 'Disponible un dimanche à 23h. Cette équipe mérite 6 étoiles.', date: '2024-09-28' },
            ].map((a, i) => (
              <div key={i} style={{ borderTop: i===0 ? `2px solid ${ac}` : '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A', padding: '20px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 16, color: '#FFF', letterSpacing: 2 }}>{a.nom}</span>
                  <span style={{ fontFamily: '"Courier Prime", monospace', fontSize: 11, color: '#555' }}>{a.date}</span>
                </div>
                <p style={{ fontFamily: '"Courier Prime", monospace', fontSize: 13, color: '#888', lineHeight: 1.7 }}>"{a.texte}"</p>
              </div>
            ))}
          </div>
        )}

        {/* ─── DEVIS ─── */}
        {section === 'devis' && (
          <div style={{ padding: '32px 40px', maxWidth: 560 }}>
            <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 40, color: '#FFF', letterSpacing: 2, marginBottom: 4 }}>DEVIS GRATUIT</div>
            <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 11, color: '#555', letterSpacing: 2, marginBottom: 28 }}>// RÉPONSE SOUS 30 MINUTES</div>
            {sent ? (
              <div style={{ border: `1px solid ${ac}`, padding: 40, textAlign: 'center' }}>
                <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 40, color: ac, letterSpacing: 2, marginBottom: 12 }}>ENVOYÉ</div>
                <p style={{ fontFamily: '"Courier Prime", monospace', fontSize: 13, color: '#888' }}>Nous vous rappelons dans les 30 minutes.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 1, background: '#1A1A1A' }}>
                {[['nom','NOM COMPLET','text'],['tel','TÉLÉPHONE','tel']].map(([f,l,t]) => (
                  <div key={f} style={{ background: '#000', padding: '16px 20px' }}>
                    <label style={{ display: 'block', fontFamily: '"Courier Prime", monospace', fontSize: 10, color: '#555', letterSpacing: 2, marginBottom: 6 }}>{l}</label>
                    <input type={t} required value={form[f]} onChange={e=>setForm({...form,[f]:e.target.value})}
                      style={{ width:'100%', background:'transparent', border:'none', borderBottom:`1px solid #333`, padding:'6px 0', fontFamily:'"Courier Prime", monospace', fontSize:15, color:'#FFF', outline:'none' }} />
                  </div>
                ))}
                <div style={{ background: '#000', padding: '16px 20px' }}>
                  <label style={{ display: 'block', fontFamily: '"Courier Prime", monospace', fontSize: 10, color: '#555', letterSpacing: 2, marginBottom: 6 }}>TYPE D'INTERVENTION</label>
                  <select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} required
                    style={{ width:'100%', background:'#000', border:'none', borderBottom:`1px solid #333`, padding:'6px 0', fontFamily:'"Courier Prime", monospace', fontSize:14, color:'#FFF', outline:'none' }}>
                    <option value="">--</option>
                    {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
                <div style={{ background: '#000', padding: '16px 20px' }}>
                  <label style={{ display: 'block', fontFamily: '"Courier Prime", monospace', fontSize: 10, color: '#555', letterSpacing: 2, marginBottom: 6 }}>DESCRIPTION (OPTIONNEL)</label>
                  <textarea rows={3} value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                    style={{ width:'100%', background:'transparent', border:'none', borderBottom:`1px solid #333`, padding:'6px 0', fontFamily:'"Courier Prime", monospace', fontSize:13, color:'#888', outline:'none', resize:'none' }} />
                </div>
                <button type="submit" style={{ background: ac, color: '#000', border: 'none', padding: '18px', fontFamily: '"Bebas Neue", sans-serif', fontSize: 22, letterSpacing: 3, cursor: 'pointer' }}>
                  ENVOYER LA DEMANDE
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
