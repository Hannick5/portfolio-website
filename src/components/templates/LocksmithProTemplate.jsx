import { useState } from 'react';
import { Shield, Phone, Clock, MapPin, CheckCircle, Key, Lock, ChevronRight, Award, Users } from 'lucide-react';
import { IMAGES } from '../../utils/images';

const SERVICES = [
  { Icon: Lock, title: 'Ouverture sans casse', desc: 'Technique non destructive. Aucun dommage sur votre porte, garantie écrite.', price: 'Dès 89€' },
  { Icon: Key, title: 'Remplacement de serrure', desc: 'Toutes marques : Vachette, Mul-T-Lock, Fichet. Pose et réglage inclus.', price: 'Dès 120€' },
  { Icon: Shield, title: 'Blindage de porte', desc: 'Renforcement anti-effraction, plaque de blindage, garnitures de protection.', price: 'Sur devis' },
  { Icon: Award, title: 'Installation coffre-fort', desc: 'Scellé ou encastré. Toutes tailles, toutes résistances. Certification A2P.', price: 'Sur devis' },
  { Icon: Users, title: 'Copie de clés', desc: 'Duplication sur mesure, clés magnétiques, badges de résidence.', price: 'Dès 12€' },
  { Icon: Lock, title: 'Urgences 24h/24', desc: 'Intervention en moins de 30 minutes sur Paris et proche banlieue.', price: 'Dès 149€' },
];

const CERTIFS = ['RGE Qualibat', 'APSAD', 'Syndicat National', 'Garantie décennale'];

export default function LocksmithProTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [form, setForm] = useState({ nom: '', tel: '', adresse: '', message: '' });
  const [sent, setSent] = useState(false);
  const { primaryColor, accentColor, name, tagline } = project;

  const nav = ['accueil', 'services', 'expertise', 'avis', 'contact'];

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"DM Sans", sans-serif', background: '#F7F9FC', color: '#1B3A6B' }}>

      {/* TOP BAR */}
      <div style={{ background: primaryColor, color: '#fff', padding: '8px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0, fontSize: 13 }}>
        <div style={{ display: 'flex', gap: 24 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Clock size={12} />Lun–Sam 7h–22h</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Shield size={12} />Urgences 24h/24</span>
        </div>
        <a href="tel:0800000000" style={{ color: accentColor, textDecoration: 'none', fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Phone size={13} /> 01 40 00 00 00
        </a>
      </div>

      {/* NAV */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #E2EAF4', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', height: 64, flexShrink: 0, boxShadow: '0 1px 4px rgba(27,58,107,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ background: primaryColor, padding: 8, borderRadius: 6 }}><Shield size={18} color="#fff" /></div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, color: primaryColor, letterSpacing: 0.5 }}>{name}</div>
            <div style={{ fontSize: 11, color: '#7A9CC4', letterSpacing: 0.5 }}>{tagline}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {nav.map(s => (
            <button key={s} onClick={() => setSection(s)} style={{
              background: section === s ? primaryColor : 'transparent',
              color: section === s ? '#fff' : '#5A7A9C',
              border: 'none', cursor: 'pointer',
              padding: '8px 16px', borderRadius: 6, fontSize: 14, fontWeight: 600,
              textTransform: 'capitalize', transition: 'all 0.15s',
            }}>{s}</button>
          ))}
        </div>
        <button onClick={() => setSection('contact')} style={{ background: accentColor, color: '#fff', border: 'none', borderRadius: 6, padding: '10px 20px', fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
          Devis gratuit <ChevronRight size={14} />
        </button>
      </nav>

      {/* CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {section === 'accueil' && (
          <div>
            {/* HERO — split corporate */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ background: primaryColor, padding: '72px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
                  {CERTIFS.map(c => (
                    <span key={c} style={{ background: 'rgba(74,159,212,0.2)', color: accentColor, padding: '4px 10px', fontSize: 11, fontWeight: 700, borderRadius: 3, letterSpacing: 0.5 }}>{c}</span>
                  ))}
                </div>
                <h1 style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.15, margin: '0 0 20px', color: '#fff' }}>
                  Votre sécurité,<br />
                  <span style={{ color: accentColor }}>notre priorité.</span>
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
                  Experts en serrurerie depuis 15 ans. Devis transparent, intervention rapide, garantie écrite sur toutes nos prestations.
                </p>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => setSection('contact')} style={{ background: accentColor, color: '#fff', border: 'none', borderRadius: 4, padding: '13px 28px', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
                    Demander un devis
                  </button>
                  <button onClick={() => setSection('services')} style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 4, padding: '13px 28px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>
                    Nos services
                  </button>
                </div>
              </div>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={IMAGES.locksmith.hero} alt="serrurier" style={{ width: '100%', height: '100%', minHeight: 380, objectFit: 'cover', display: 'block' }} />
                {/* Professional trust badge */}
                <div style={{ position: 'absolute', bottom: 24, right: 24, background: '#fff', padding: '16px 20px', borderRadius: 8, boxShadow: '0 8px 24px rgba(27,58,107,0.2)', minWidth: 140 }}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: primaryColor, lineHeight: 1 }}>30min</div>
                  <div style={{ fontSize: 12, color: '#7A9CC4', fontWeight: 600, marginTop: 4 }}>délai d'intervention</div>
                </div>
              </div>
            </div>

            {/* STATS STRIP */}
            <div style={{ background: '#fff', borderBottom: '1px solid #E2EAF4', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '28px 52px', gap: 0 }}>
              {[['4000+', 'Interventions/an'], ['4.9/5', 'Note Google'], ['15 ans', "D'expérience"], ['100%', 'Garantie satisfaction']].map(([val, lab], i) => (
                <div key={lab} style={{ textAlign: 'center', borderRight: i < 3 ? '1px solid #E2EAF4' : 'none', padding: '0 24px' }}>
                  <div style={{ fontSize: 30, fontWeight: 900, color: primaryColor }}>{val}</div>
                  <div style={{ fontSize: 12, color: '#7A9CC4', fontWeight: 600, marginTop: 4 }}>{lab}</div>
                </div>
              ))}
            </div>

            {/* SERVICES */}
            <div style={{ padding: '52px', background: '#F7F9FC' }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: primaryColor, margin: '0 0 8px' }}>Nos Expertises</h2>
              <div style={{ width: 48, height: 4, background: accentColor, marginBottom: 36, borderRadius: 2 }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
                {SERVICES.map(({ Icon, title, desc, price }) => (
                  <div key={title} style={{ background: '#fff', borderRadius: 8, padding: '24px 20px', border: '1px solid #E2EAF4', boxShadow: '0 2px 8px rgba(27,58,107,0.04)', cursor: 'pointer' }}>
                    <div style={{ background: '#EEF4FB', padding: 10, borderRadius: 8, display: 'inline-flex', marginBottom: 14 }}>
                      <Icon size={20} color={primaryColor} />
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: '#1B3A6B', marginBottom: 8 }}>{title}</div>
                    <div style={{ fontSize: 13, color: '#7A9CC4', lineHeight: 1.6, marginBottom: 12 }}>{desc}</div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: accentColor }}>{price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {section === 'services' && (
          <div style={{ padding: '52px', background: '#F7F9FC' }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: primaryColor, margin: '0 0 8px' }}>Services & Tarifs</h2>
            <div style={{ width: 48, height: 4, background: accentColor, marginBottom: 40, borderRadius: 2 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {SERVICES.map(({ Icon, title, desc, price }) => (
                <div key={title} style={{ background: '#fff', borderRadius: 8, padding: '28px 24px', display: 'flex', gap: 20, border: '1px solid #E2EAF4' }}>
                  <div style={{ background: '#EEF4FB', padding: 12, borderRadius: 8, height: 'fit-content', flexShrink: 0 }}>
                    <Icon size={22} color={primaryColor} />
                  </div>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: primaryColor, marginBottom: 8 }}>{title}</div>
                    <div style={{ fontSize: 14, color: '#7A9CC4', lineHeight: 1.6, marginBottom: 12 }}>{desc}</div>
                    <div style={{ display: 'inline-block', background: '#EEF4FB', color: accentColor, padding: '6px 14px', borderRadius: 4, fontSize: 15, fontWeight: 800 }}>{price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'expertise' && (
          <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 36, fontWeight: 800, color: primaryColor, margin: '0 0 20px' }}>Notre Expertise</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { title: '15 ans d\'expérience', desc: 'Fondée en 2009, SecurPro est la référence serrurerie sur Paris et Île-de-France.' },
                  { title: 'Techniciens certifiés', desc: 'Chaque technicien suit une formation continue et dispose des certifications professionnelles.' },
                  { title: 'Transparence tarifaire', desc: 'Devis remis avant toute intervention. Aucun supplément caché. Facture détaillée systématique.' },
                  { title: 'Garantie écrite 2 ans', desc: 'Toutes nos interventions sont garanties deux ans pièces et main d\'œuvre.' },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <CheckCircle size={20} color={accentColor} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: primaryColor, marginBottom: 4 }}>{item.title}</div>
                      <div style={{ fontSize: 14, color: '#7A9CC4', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={IMAGES.locksmith.work} alt="expertise" style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 8 }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
                <img src={IMAGES.locksmith.keys} alt="clés" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 6 }} />
                <img src={IMAGES.locksmith.door} alt="porte" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 6 }} />
              </div>
            </div>
          </div>
        )}

        {section === 'avis' && (
          <div style={{ padding: '52px', background: '#F7F9FC' }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: primaryColor, margin: '0 0 8px' }}>Avis clients</h2>
            <div style={{ width: 48, height: 4, background: accentColor, marginBottom: 40, borderRadius: 2 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
              {[
                { name: 'Pierre M.', note: '5/5', text: 'Intervention rapide, professionnel, prix annoncé respecté. Je recommande vivement.' },
                { name: 'Sophie L.', note: '5/5', text: 'Porte blindée installée en une journée. Travail soigné, aucune mauvaise surprise.' },
                { name: 'Thomas R.', note: '5/5', text: 'Serrurier honnête et compétent. Devis clair, pas de frais cachés. Parfait.' },
              ].map(avis => (
                <div key={avis.name} style={{ background: '#fff', borderRadius: 8, padding: '24px', border: '1px solid #E2EAF4' }}>
                  <div style={{ color: '#F59E0B', fontSize: 16, marginBottom: 12 }}>★★★★★</div>
                  <p style={{ fontSize: 14, color: '#5A7A9C', lineHeight: 1.7, margin: '0 0 16px' }}>{avis.text}</p>
                  <div style={{ fontWeight: 700, color: primaryColor, fontSize: 14 }}>{avis.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'contact' && (
          <div style={{ padding: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, background: '#F7F9FC' }}>
            <div>
              <h2 style={{ fontSize: 36, fontWeight: 800, color: primaryColor, margin: '0 0 8px' }}>Nous contacter</h2>
              <div style={{ width: 48, height: 4, background: accentColor, marginBottom: 28, borderRadius: 2 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
                {[{ Icon: Phone, val: '01 40 00 00 00', lab: 'Téléphone' }, { Icon: Clock, val: 'Lun–Sam 7h–22h • Urgences 24h/24', lab: 'Horaires' }, { Icon: MapPin, val: '28 rue de la Paix, Paris 2e', lab: 'Adresse' }].map(({ Icon, val, lab }) => (
                  <div key={lab} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <div style={{ background: '#EEF4FB', padding: 10, borderRadius: 8 }}><Icon size={16} color={primaryColor} /></div>
                    <div>
                      <div style={{ fontSize: 11, color: '#7A9CC4', fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 1 }}>{lab}</div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: primaryColor }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <img src={IMAGES.locksmith.door} alt="porte" style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 8 }} />
            </div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '32px', border: '1px solid #E2EAF4' }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: primaryColor, marginBottom: 24 }}>Demander un devis gratuit</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[{ label: 'Nom', key: 'nom' }, { label: 'Téléphone', key: 'tel' }, { label: 'Adresse d\'intervention', key: 'adresse' }].map(f => (
                  <div key={f.key}>
                    <label style={{ fontSize: 12, fontWeight: 700, color: '#7A9CC4', letterSpacing: 0.5, display: 'block', marginBottom: 6 }}>{f.label}</label>
                    <input type="text" value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} style={{ width: '100%', border: '1px solid #E2EAF4', borderRadius: 6, padding: '10px 12px', fontSize: 14, boxSizing: 'border-box', outline: 'none', color: '#1B3A6B' }} />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#7A9CC4', letterSpacing: 0.5, display: 'block', marginBottom: 6 }}>Votre demande</label>
                  <textarea rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} style={{ width: '100%', border: '1px solid #E2EAF4', borderRadius: 6, padding: '10px 12px', fontSize: 14, boxSizing: 'border-box', resize: 'none', outline: 'none', color: '#1B3A6B' }} />
                </div>
                {sent
                  ? <div style={{ background: '#F0FFF4', border: '1px solid #22C55E', color: '#166534', padding: '12px 16px', borderRadius: 6, fontSize: 14, fontWeight: 600 }}>Devis envoyé ! Nous vous rappelons sous 30 min.</div>
                  : <button onClick={() => setSent(true)} style={{ background: primaryColor, color: '#fff', border: 'none', borderRadius: 6, padding: '13px', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
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
