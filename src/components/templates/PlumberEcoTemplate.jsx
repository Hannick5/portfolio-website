import { useState } from 'react';
import { Leaf, Droplets, Sun, Thermometer, Shield, Phone, Clock, MapPin, CheckCircle, ChevronRight } from 'lucide-react';
import { IMAGES } from '../../utils/images';

const SERVICES = [
  { Icon: Sun, title: 'Chauffe-eau solaire', desc: 'Installation, raccordement, mise en service. Éligible MaPrimeRénov\'.', price: 'Sur devis', eco: true },
  { Icon: Thermometer, title: 'Pompe à chaleur', desc: 'PAC air/eau, air/air. Certification RGE. Jusqu\'à 70% d\'économies.', price: 'Sur devis', eco: true },
  { Icon: Droplets, title: 'Récupération eau de pluie', desc: 'Cuve enterrée, filtre, distribution intérieure. Arrosage & WC.', price: 'Sur devis', eco: true },
  { Icon: Leaf, title: 'Économiseurs d\'eau', desc: 'Réducteurs de débit, mousseurs, chasse double flux. ROI immédiat.', price: 'Dès 45€', eco: false },
  { Icon: Shield, title: 'Diagnostic énergétique', desc: 'Audit complet installation. Identification des pertes. Rapport certifié.', price: 'Dès 120€', eco: false },
  { Icon: Droplets, title: 'Plomberie sanitaire', desc: 'Rénovation salle de bain éco-responsable. Produits labellisés.', price: 'Sur devis', eco: false },
];

export default function PlumberEcoTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [form, setForm] = useState({ nom: '', tel: '', type: '', message: '' });
  const [sent, setSent] = useState(false);
  const { primaryColor, accentColor, name, tagline } = project;

  const nav = ['accueil', 'services', 'certifications', 'contact'];
  const green = primaryColor;
  const lightGreen = accentColor;

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"DM Sans", sans-serif', background: '#F4FAF6', color: '#1A3A20' }}>

      {/* TOP BADGE */}
      <div style={{ background: green, color: '#fff', padding: '8px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0, fontSize: 13 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Leaf size={13} color={lightGreen} />
          <span style={{ fontWeight: 700, color: lightGreen }}>Certifié RGE • MaPrimeRénov\' acceptée</span>
        </div>
        <a href="tel:0612345678" style={{ color: lightGreen, textDecoration: 'none', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Phone size={13} /> 06 12 34 56 78
        </a>
      </div>

      {/* NAV */}
      <nav style={{ background: '#fff', borderBottom: '1px solid rgba(21,128,61,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 36px', height: 60, flexShrink: 0, boxShadow: '0 1px 4px rgba(21,128,61,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ background: green, padding: 8, borderRadius: 8 }}><Leaf size={16} color="#fff" /></div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, color: green }}>{name}</div>
            <div style={{ fontSize: 11, color: '#5A8A65', letterSpacing: 0.3 }}>{tagline}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {nav.map(s => (
            <button key={s} onClick={() => setSection(s)} style={{
              background: section === s ? green : 'transparent',
              color: section === s ? '#fff' : '#5A8A65',
              border: 'none', cursor: 'pointer',
              padding: '8px 16px', borderRadius: 6, fontSize: 14, fontWeight: 600,
              textTransform: 'capitalize', transition: 'all 0.15s',
            }}>{s}</button>
          ))}
        </div>
        <button onClick={() => setSection('contact')} style={{ background: lightGreen, color: '#fff', border: 'none', borderRadius: 6, padding: '10px 20px', fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
          Devis gratuit <ChevronRight size={14} />
        </button>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {section === 'accueil' && (
          <div>
            {/* HERO */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 360 }}>
              <div style={{ background: 'linear-gradient(135deg, #E8F5E9 0%, #F4FAF6 100%)', padding: '60px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                  <Leaf size={14} color={green} />
                  <span style={{ fontSize: 12, color: green, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>Plomberie Éco-Responsable</span>
                </div>
                <h1 style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.15, margin: '0 0 20px', color: '#1A3A20', letterSpacing: -0.5 }}>
                  Économisez l'eau<br />
                  <span style={{ color: green }}>et vos factures.</span>
                </h1>
                <p style={{ fontSize: 15, color: '#5A8A65', lineHeight: 1.7, marginBottom: 28, maxWidth: 360 }}>
                  Solutions éco-responsables pour particuliers et collectivités. Certifiés RGE, nous vous aidons à réduire votre empreinte écologique.
                </p>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => setSection('contact')} style={{ background: green, color: '#fff', border: 'none', borderRadius: 6, padding: '12px 24px', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
                    Bilan gratuit
                  </button>
                  <button onClick={() => setSection('services')} style={{ background: 'transparent', color: green, border: `1px solid ${green}40`, borderRadius: 6, padding: '12px 24px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>
                    Nos solutions
                  </button>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <img src={IMAGES.plumber.bathroom} alt="salle de bain" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 20, right: 20, background: '#fff', padding: '14px 18px', borderRadius: 10, boxShadow: '0 4px 20px rgba(21,128,61,0.15)' }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: green, lineHeight: 1 }}>-70%</div>
                  <div style={{ fontSize: 12, color: '#5A8A65', fontWeight: 600, marginTop: 2 }}>sur la facture énergie</div>
                </div>
              </div>
            </div>

            {/* ECO STATS */}
            <div style={{ background: green, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '0' }}>
              {[['RGE', 'Certifié Qualibat'], ['€5000', 'Aides disponibles'], ['15 ans', "D'expérience"], ['100%', 'Produits éco']].map(([val, lab], i) => (
                <div key={lab} style={{ padding: '20px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                  <div style={{ fontSize: 26, fontWeight: 900, color: lightGreen }}>{val}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 4, fontWeight: 600, letterSpacing: 0.5 }}>{lab}</div>
                </div>
              ))}
            </div>

            {/* SERVICES */}
            <div style={{ padding: '52px' }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: '#1A3A20', margin: '0 0 8px' }}>Nos Solutions</h2>
              <div style={{ width: 48, height: 4, background: lightGreen, marginBottom: 36, borderRadius: 2 }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
                {SERVICES.map(({ Icon, title, desc, price, eco }) => (
                  <div key={title} style={{ background: '#fff', borderRadius: 10, padding: '24px 20px', border: `1px solid ${eco ? green + '30' : '#E5EDE8'}`, position: 'relative' }}>
                    {eco && <div style={{ position: 'absolute', top: 12, right: 12, background: `${lightGreen}20`, color: lightGreen, padding: '2px 8px', borderRadius: 100, fontSize: 10, fontWeight: 800, letterSpacing: 0.5 }}>ECO</div>}
                    <div style={{ background: eco ? `${green}15` : '#F4FAF6', padding: 10, borderRadius: 8, display: 'inline-flex', marginBottom: 14 }}>
                      <Icon size={20} color={eco ? green : '#5A8A65'} />
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#1A3A20', marginBottom: 8 }}>{title}</div>
                    <div style={{ fontSize: 13, color: '#5A8A65', lineHeight: 1.6, marginBottom: 12 }}>{desc}</div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: green }}>{price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGES */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: 200, padding: '0 52px 52px', gap: 16 }}>
              <img src={IMAGES.plumber.boiler} alt="chaudière" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
              <img src={IMAGES.plumber.work} alt="technicien" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
            </div>
          </div>
        )}

        {section === 'services' && (
          <div style={{ padding: '52px' }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#1A3A20', margin: '0 0 8px' }}>Solutions Éco-Plomberie</h2>
            <div style={{ width: 48, height: 4, background: lightGreen, marginBottom: 40, borderRadius: 2 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {SERVICES.map(({ Icon, title, desc, price, eco }) => (
                <div key={title} style={{ background: '#fff', borderRadius: 10, padding: '28px 24px', display: 'flex', gap: 18, border: `1px solid ${eco ? green + '25' : '#E5EDE8'}` }}>
                  <div style={{ background: eco ? `${green}15` : '#F4FAF6', padding: 12, borderRadius: 8, height: 'fit-content', flexShrink: 0 }}>
                    <Icon size={22} color={eco ? green : '#5A8A65'} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                      <span style={{ fontSize: 17, fontWeight: 700, color: '#1A3A20' }}>{title}</span>
                      {eco && <span style={{ background: `${lightGreen}20`, color: lightGreen, padding: '2px 8px', borderRadius: 100, fontSize: 10, fontWeight: 800 }}>ECO</span>}
                    </div>
                    <div style={{ fontSize: 14, color: '#5A8A65', lineHeight: 1.6, marginBottom: 12 }}>{desc}</div>
                    <div style={{ fontWeight: 800, color: green, fontSize: 15 }}>{price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'certifications' && (
          <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: 36, fontWeight: 800, color: '#1A3A20', margin: '0 0 28px' }}>Certifications</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { cert: 'RGE Qualibat', detail: 'Reconnu Garant de l\'Environnement. Permet l\'accès aux aides de l\'État.' },
                  { cert: 'QUALIPAC', detail: 'Certification pompes à chaleur. Garantie qualité d\'installation.' },
                  { cert: 'Qualit\'EnR', detail: 'Spécialiste énergie renouvelable. Solaire thermique & photovoltaïque.' },
                  { cert: 'MaPrimeRénov\'', detail: 'Partenaire agréé pour le montage et le suivi de vos dossiers d\'aides.' },
                ].map(({ cert, detail }) => (
                  <div key={cert} style={{ background: '#fff', borderRadius: 8, padding: '20px 24px', border: '1px solid rgba(21,128,61,0.15)', display: 'flex', gap: 16 }}>
                    <CheckCircle size={20} color={green} style={{ flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: '#1A3A20', marginBottom: 4 }}>{cert}</div>
                      <div style={{ fontSize: 14, color: '#5A8A65', lineHeight: 1.5 }}>{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={IMAGES.plumber.hero} alt="plombier" style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 10, marginBottom: 24 }} />
              <div style={{ background: green, borderRadius: 10, padding: '24px 28px', color: '#fff' }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: lightGreen, marginBottom: 4 }}>Jusqu'à 5 000€</div>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>d'aides disponibles</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  Selon revenus et travaux. On s'occupe de tout le dossier, sans frais supplémentaires.
                </div>
              </div>
            </div>
          </div>
        )}

        {section === 'contact' && (
          <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52 }}>
            <div>
              <h2 style={{ fontSize: 36, fontWeight: 800, color: '#1A3A20', margin: '0 0 8px' }}>Bilan Gratuit</h2>
              <div style={{ width: 48, height: 4, background: lightGreen, marginBottom: 28, borderRadius: 2 }} />
              <p style={{ fontSize: 15, color: '#5A8A65', lineHeight: 1.7, marginBottom: 28 }}>
                Un technicien vient chez vous gratuitement évaluer vos installations et calculer le montant des aides auxquelles vous avez droit.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[{ Icon: Phone, val: '06 12 34 56 78' }, { Icon: Clock, val: 'Lun – Sam : 8h – 18h' }, { Icon: MapPin, val: 'Île-de-France' }].map(({ Icon, val }) => (
                  <div key={val} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <div style={{ background: `${green}15`, padding: 10, borderRadius: 8 }}><Icon size={16} color={green} /></div>
                    <span style={{ fontSize: 15, fontWeight: 600, color: '#1A3A20' }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '32px', border: '1px solid rgba(21,128,61,0.15)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[{ label: 'Nom', key: 'nom' }, { label: 'Téléphone', key: 'tel' }, { label: 'Type de projet', key: 'type' }].map(f => (
                  <div key={f.key}>
                    <label style={{ fontSize: 12, fontWeight: 700, color: '#5A8A65', letterSpacing: 0.5, display: 'block', marginBottom: 6, textTransform: 'uppercase' }}>{f.label}</label>
                    <input type="text" value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} style={{ width: '100%', border: '1px solid rgba(21,128,61,0.2)', borderRadius: 6, padding: '10px 12px', fontSize: 14, boxSizing: 'border-box', outline: 'none', color: '#1A3A20', fontFamily: '"DM Sans", sans-serif' }} />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#5A8A65', letterSpacing: 0.5, display: 'block', marginBottom: 6, textTransform: 'uppercase' }}>Message</label>
                  <textarea rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} style={{ width: '100%', border: '1px solid rgba(21,128,61,0.2)', borderRadius: 6, padding: '10px 12px', fontSize: 14, boxSizing: 'border-box', resize: 'none', outline: 'none', color: '#1A3A20', fontFamily: '"DM Sans", sans-serif' }} />
                </div>
                {sent
                  ? <div style={{ background: '#F0FFF4', border: '1px solid #22C55E', color: green, padding: '12px', borderRadius: 6, textAlign: 'center', fontWeight: 700 }}>
                    <CheckCircle size={16} style={{ display: 'inline', marginRight: 6 }} />
                    Demande envoyée ! On vous rappelle sous 24h.
                  </div>
                  : <button onClick={() => setSent(true)} style={{ background: green, color: '#fff', border: 'none', borderRadius: 6, padding: '13px', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: '"DM Sans", sans-serif' }}>
                    Demander mon bilan
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
