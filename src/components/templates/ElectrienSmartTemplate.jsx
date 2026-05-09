import { useState } from 'react';
import { Cpu, Wifi, Shield, Home, Smartphone, Zap, Phone, ChevronRight, CheckCircle } from 'lucide-react';
import { IMAGES } from '../../utils/images';

const SOLUTIONS = [
  { Icon: Home, title: 'Domotique complète', desc: 'Éclairage, volets, chauffage, sécurité — tout centralisé sur une application.', price: 'Sur devis' },
  { Icon: Shield, title: 'Alarme connectée', desc: 'Détection intrusion, caméras HD, alerte smartphone. Télésurveillance 24/7.', price: 'Dès 890€' },
  { Icon: Wifi, title: 'Réseau & Fibre', desc: 'Câblage structuré, prises RJ45, Wi-Fi 6 mesh, serveur NAS maison.', price: 'Dès 390€' },
  { Icon: Cpu, title: 'Box Domotique', desc: 'Home Assistant, Apple HomeKit, Google Home. Installation et configuration.', price: 'Dès 490€' },
  { Icon: Smartphone, title: 'Tableau connecté', desc: 'Tableau avec gestionnaire d\'énergie, monitoring consommation, délestage.', price: 'Dès 590€' },
  { Icon: Zap, title: 'Recharge VE', desc: 'Borne IRVE certifiée pour véhicule électrique. Avec pilotage intelligent.', price: 'Dès 790€' },
];

export default function ElectrienSmartTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [form, setForm] = useState({ nom: '', tel: '', projet: '', message: '' });
  const [sent, setSent] = useState(false);
  const { primaryColor, accentColor, name, tagline } = project;

  const nav = ['accueil', 'solutions', 'réalisations', 'contact'];
  const dark = primaryColor;
  const blue = accentColor;

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"Space Grotesk", "DM Sans", sans-serif', background: dark, color: '#fff' }}>

      {/* TOP */}
      <div style={{ background: `${blue}15`, borderBottom: `1px solid ${blue}30`, padding: '8px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0, fontSize: 13 }}>
        <div style={{ color: blue, fontWeight: 600, letterSpacing: 0.5 }}>Domotique • Alarme • Réseau • Électricité</div>
        <a href="tel:0612345678" style={{ color: blue, textDecoration: 'none', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Phone size={13} /> 06 12 34 56 78
        </a>
      </div>

      {/* NAV */}
      <nav style={{ background: `${dark}F0`, backdropFilter: 'blur(12px)', borderBottom: `1px solid rgba(56,189,248,0.15)`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 36px', height: 60, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ background: `linear-gradient(135deg, ${blue}, #0EA5E9)`, padding: 8, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Cpu size={16} color="#fff" />
          </div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, color: '#fff', letterSpacing: -0.3 }}>{name}</div>
            <div style={{ fontSize: 11, color: blue, letterSpacing: 0.5 }}>{tagline}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {nav.map(s => (
            <button key={s} onClick={() => setSection(s)} style={{
              background: section === s ? `${blue}20` : 'transparent',
              color: section === s ? blue : 'rgba(255,255,255,0.5)',
              border: section === s ? `1px solid ${blue}40` : '1px solid transparent',
              cursor: 'pointer', borderRadius: 6, padding: '7px 16px', fontSize: 14, fontWeight: 600,
              textTransform: 'capitalize', transition: 'all 0.15s',
            }}>{s}</button>
          ))}
        </div>
        <button onClick={() => setSection('contact')} style={{ background: blue, color: '#fff', border: 'none', borderRadius: 6, padding: '10px 20px', fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
          Devis gratuit <ChevronRight size={14} />
        </button>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {section === 'accueil' && (
          <div>
            {/* HERO */}
            <div style={{ position: 'relative', height: 380, overflow: 'hidden' }}>
              <img src={IMAGES.electricien.smart} alt="smart home" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.25)' }} />
              {/* Glowing gradient */}
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 30% 50%, ${blue}25 0%, transparent 60%)` }} />
              {/* Grid lines */}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${blue}10 1px, transparent 1px), linear-gradient(90deg, ${blue}10 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
              <div style={{ position: 'absolute', inset: 0, padding: '60px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${blue}20`, border: `1px solid ${blue}40`, padding: '6px 16px', borderRadius: 100, marginBottom: 24, width: 'fit-content', backdropFilter: 'blur(8px)' }}>
                  <Wifi size={12} color={blue} />
                  <span style={{ fontSize: 12, color: blue, fontWeight: 700, letterSpacing: 1.5 }}>EXPERT DOMOTIQUE CERTIFIÉ</span>
                </div>
                <h1 style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.1, margin: '0 0 16px', letterSpacing: -1 }}>
                  Votre maison,<br />
                  <span style={{ color: blue }}>intelligente.</span>
                </h1>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', margin: '0 0 36px', maxWidth: 400, lineHeight: 1.7 }}>{tagline}</p>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => setSection('contact')} style={{ background: blue, color: '#fff', border: 'none', borderRadius: 6, padding: '13px 28px', fontSize: 15, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                    Étude gratuite <ChevronRight size={14} />
                  </button>
                  <button onClick={() => setSection('solutions')} style={{ background: `rgba(255,255,255,0.08)`, color: '#fff', border: `1px solid rgba(255,255,255,0.2)`, borderRadius: 6, padding: '13px 28px', fontSize: 15, fontWeight: 600, cursor: 'pointer', backdropFilter: 'blur(8px)' }}>
                    Nos solutions
                  </button>
                </div>
              </div>
            </div>

            {/* METRICS */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', background: `${blue}10`, borderTop: `1px solid ${blue}20`, borderBottom: `1px solid ${blue}20` }}>
              {[['200+', 'Installations domotique'], ['4.9', 'Note Google'], ['Partenaire', 'Home Assistant'], ['Certifié', 'IRVE & RGE']].map(([val, lab], i) => (
                <div key={lab} style={{ padding: '20px', textAlign: 'center', borderRight: i < 3 ? `1px solid ${blue}15` : 'none' }}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: blue }}>{val}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 4, fontWeight: 600, letterSpacing: 0.5 }}>{lab}</div>
                </div>
              ))}
            </div>

            {/* SOLUTIONS */}
            <div style={{ padding: '48px' }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: '0 0 8px', letterSpacing: -0.5 }}>Nos Solutions</h2>
              <div style={{ width: 48, height: 3, background: blue, borderRadius: 2, marginBottom: 36 }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                {SOLUTIONS.map(({ Icon, title, desc, price }) => (
                  <div key={title} style={{ background: `rgba(255,255,255,0.04)`, border: `1px solid ${blue}20`, borderRadius: 10, padding: '24px 20px', cursor: 'pointer', transition: 'border-color 0.2s' }}>
                    <div style={{ background: `${blue}20`, padding: 10, borderRadius: 8, display: 'inline-flex', marginBottom: 14 }}>
                      <Icon size={18} color={blue} />
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{title}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 14 }}>{desc}</div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: blue }}>{price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div style={{ height: 200, padding: '0 48px 48px' }}>
              <img src={IMAGES.electricien.smart} alt="smart home" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10, filter: 'brightness(0.8)' }} />
            </div>
          </div>
        )}

        {section === 'solutions' && (
          <div style={{ padding: '48px' }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, margin: '0 0 8px', letterSpacing: -0.5 }}>Solutions Connectées</h2>
            <div style={{ width: 48, height: 3, background: blue, borderRadius: 2, marginBottom: 40 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {SOLUTIONS.map(({ Icon, title, desc, price }) => (
                <div key={title} style={{ background: `rgba(255,255,255,0.04)`, border: `1px solid ${blue}20`, borderRadius: 10, padding: '28px 24px', display: 'flex', gap: 20 }}>
                  <div style={{ background: `${blue}20`, padding: 12, borderRadius: 8, height: 'fit-content', flexShrink: 0 }}>
                    <Icon size={22} color={blue} />
                  </div>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{title}</div>
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 14 }}>{desc}</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: blue }}>{price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'réalisations' && (
          <div style={{ padding: '48px' }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, margin: '0 0 8px', letterSpacing: -0.5 }}>Réalisations</h2>
            <div style={{ width: 48, height: 3, background: blue, borderRadius: 2, marginBottom: 40 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {[
                { img: IMAGES.electricien.smart, title: 'Domotique complète', lieu: 'Villa — Neuilly-sur-Seine', desc: '28 points de contrôle, scénarios automatiques' },
                { img: IMAGES.electricien.panel, title: 'Tableau connecté', lieu: 'Appartement — Paris 16e', desc: 'Monitoring temps réel, alertes surcharge' },
                { img: IMAGES.electricien.work, title: 'Réseau fibre & Wi-Fi mesh', lieu: 'Loft — Paris 10e', desc: 'Couverture 280m², 4 points d\'accès Wi-Fi 6' },
                { img: IMAGES.electricien.hero, title: 'Borne IRVE + solaire', lieu: 'Maison — Versailles', desc: 'Recharge intelligente couplée panneaux solaires' },
              ].map(r => (
                <div key={r.title} style={{ background: `rgba(255,255,255,0.04)`, border: `1px solid ${blue}20`, borderRadius: 10, overflow: 'hidden' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={r.img} alt={r.title} style={{ width: '100%', height: 160, objectFit: 'cover', filter: 'brightness(0.6)' }} />
                    <div style={{ position: 'absolute', top: 12, left: 12, background: `${blue}30`, border: `1px solid ${blue}50`, padding: '3px 10px', borderRadius: 100, backdropFilter: 'blur(8px)' }}>
                      <span style={{ fontSize: 11, color: blue, fontWeight: 700, letterSpacing: 0.5 }}>{r.lieu}</span>
                    </div>
                  </div>
                  <div style={{ padding: '16px 20px' }}>
                    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{r.title}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'contact' && (
          <div style={{ padding: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            <div>
              <h2 style={{ fontSize: 36, fontWeight: 800, margin: '0 0 8px', letterSpacing: -0.5 }}>Étude Gratuite</h2>
              <div style={{ width: 48, height: 3, background: blue, borderRadius: 2, marginBottom: 28 }} />
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 28 }}>
                Décrivez votre projet. Un technicien expert vous rappelle sous 24h pour étudier vos besoins et établir un devis personnalisé.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                {[['Certification RGE'], ['Devis sans engagement'], ['SAV 2 ans inclus'], ['Mise en service + formation']].map(([val]) => (
                  <div key={val} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <CheckCircle size={16} color={blue} />
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>{val}</span>
                  </div>
                ))}
              </div>
              <img src={IMAGES.electricien.panel} alt="tableau" style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 8, opacity: 0.8 }} />
            </div>
            <div style={{ background: `rgba(56,189,248,0.08)`, border: `1px solid ${blue}25`, borderRadius: 12, padding: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[{ label: 'Nom', key: 'nom' }, { label: 'Téléphone', key: 'tel' }, { label: 'Type de projet', key: 'projet' }].map(f => (
                  <div key={f.key}>
                    <label style={{ fontSize: 11, fontWeight: 700, color: blue, letterSpacing: 2, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>{f.label}</label>
                    <input type="text" value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} style={{ width: '100%', background: `rgba(255,255,255,0.06)`, border: `1px solid ${blue}30`, borderRadius: 6, color: '#fff', padding: '11px 14px', fontSize: 15, fontFamily: '"DM Sans", sans-serif', boxSizing: 'border-box', outline: 'none' }} />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: blue, letterSpacing: 2, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Description</label>
                  <textarea rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} style={{ width: '100%', background: `rgba(255,255,255,0.06)`, border: `1px solid ${blue}30`, borderRadius: 6, color: '#fff', padding: '11px 14px', fontSize: 15, fontFamily: '"DM Sans", sans-serif', boxSizing: 'border-box', resize: 'none', outline: 'none' }} />
                </div>
                {sent
                  ? <div style={{ background: `${blue}20`, border: `1px solid ${blue}40`, color: blue, padding: '12px', borderRadius: 6, textAlign: 'center', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    <CheckCircle size={16} /> Demande reçue !
                  </div>
                  : <button onClick={() => setSent(true)} style={{ background: blue, color: '#fff', border: 'none', borderRadius: 8, padding: '13px', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: '"DM Sans", sans-serif' }}>
                    Envoyer ma demande
                  </button>
                }
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
