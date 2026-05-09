import { useState } from 'react';
import { Wrench, Zap, Shield, ThumbsUp, Phone, CheckCircle, Clock, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { IMAGES } from '../../utils/images';

// Design: clean & corporate, layout en bandes, style "marque de confiance"

const SERVICES = [
  { Icon: Zap, title: 'Urgence fuite / dégât des eaux', desc: 'Coupure d\'eau, tuyau percé, infiltration. Intervention prioritaire toutes urgences.', price: 'Dès 79€', urgent: true, detail: 'Nous localisons la fuite avec du matériel électronique non-invasif, puis effectuons la réparation définitive. Devis remis avant intervention.' },
  { Icon: Wrench, title: 'Salle de bain complète', desc: 'Rénovation partielle ou totale : douche, baignoire, WC, lavabo.', price: 'Sur devis', urgent: false, detail: 'Pose de carrelage, plomberie, robinetterie et sanitaires. Coordination des corps de métier si besoin. Garantie décennale.' },
  { Icon: Shield, title: 'Chaudière & chauffage', desc: 'Installation, entretien annuel, dépannage toutes marques.', price: 'Dès 89€', urgent: false, detail: 'Certifiés RGE Qualibat. Éligible aux aides de l\'État (MaPrimeRénov\'). Devis comparatif gratuit.' },
  { Icon: Wrench, title: 'Climatisation', desc: 'Pose de clim réversible, entretien, remplacement de gaz.', price: 'Sur devis', urgent: false, detail: 'Marques Daikin, Mitsubishi, Atlantic. Installation en 1 journée. Garantie 5 ans pièces et main d\'œuvre.' },
  { Icon: Shield, title: 'Chauffe-eau & ballon', desc: 'Dépannage, remplacement, pose de chauffe-eau thermodynamique.', price: 'Dès 149€', urgent: false, detail: 'Nous intervenons sur tous les types de chauffe-eau. Économies d\'énergie garanties avec les modèles thermodynamiques.' },
  { Icon: Zap, title: 'Débouchage', desc: 'WC, évier, douche, canalisation principale. Hydrocurage disponible.', price: 'Dès 59€', urgent: true, detail: 'Intervention avec furet électrique ou hydrocurage haute pression. Caméra d\'inspection disponible sur demande.' },
];

const REALIZATIONS = [
  { title: 'Rénovation salle de bain', lieu: 'Paris 15e', img: IMAGES.plumber.bathroom, desc: 'Réfection complète en 4 jours' },
  { title: 'Installation chaudière gaz', lieu: 'Boulogne-Billancourt', img: IMAGES.plumber.boiler, desc: 'Chaudière condensation Viessmann' },
  { title: 'Intervention urgence fuite', lieu: 'Paris 11e', img: IMAGES.plumber.work, desc: 'Réparation en 35 minutes' },
];

export default function PlumberTemplate({ project }) {
  const [section, setSection] = useState('accueil');
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ nom: '', tel: '', adresse: '', type: '', urgence: false, message: '' });
  const [sent, setSent] = useState(false);
  const { primaryColor, accentColor, name, tagline } = project;

  const FAQS = [
    { q: 'Intervenez-vous le week-end ?', r: 'Oui, nous assurons les urgences 7j/7 et 24h/24. Un supplément de 30€ est appliqué pour les interventions le dimanche et les jours fériés.' },
    { q: 'Proposez-vous des devis gratuits ?', r: 'Absolument. Le devis est gratuit et sans engagement pour tous les travaux de rénovation et d\'installation. Pour les urgences, le déplacement est facturé à partir de 49€.' },
    { q: 'Êtes-vous certifié RGE ?', r: 'Oui, nous sommes certifiés RGE Qualibat pour les installations de chauffage et de climatisation. Cette certification vous permet de bénéficier des aides de l\'État.' },
    { q: 'Quelle est votre zone d\'intervention ?', r: 'Nous intervenons sur Paris et l\'Île-de-France. Le déplacement est inclus dans le prix pour Paris intra-muros.' },
  ];

  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: '"Inter", sans-serif' }}>
      {/* TOP BAR urgence */}
      <div style={{ background: '#dc2626', color: '#fff', textAlign: 'center', padding: '8px 16px', fontSize: 13, fontWeight: 700, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
        <Zap size={14} fill="#fff" />
        Urgence plomberie 24h/24 — 7j/7
        <a href="tel:0698765432" style={{ color: '#fef08a', fontWeight: 800, textDecoration: 'none' }}>06 98 76 54 32</a>
      </div>

      {/* NAV */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', height: 56, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ background: primaryColor, padding: '7px', borderRadius: 6 }}>
            <Wrench size={16} color="#fff" />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, color: '#111', lineHeight: 1 }}>{name}</div>
            <div style={{ fontSize: 10, color: '#888', letterSpacing: 0.3 }}>Plomberie & Chauffage</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 0 }}>
          {['accueil', 'services', 'réalisations', 'faq', 'devis'].map(s => (
            <button key={s} onClick={() => setSection(s)}
              style={{ background: section === s ? primaryColor : 'none', color: section === s ? '#fff' : '#555', border: 'none', padding: '8px 16px', borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: 'pointer', textTransform: 'capitalize', transition: 'all 0.15s' }}>
              {s}
            </button>
          ))}
        </div>
        <button onClick={() => setSection('devis')}
          style={{ background: accentColor, color: '#fff', border: 'none', padding: '9px 18px', borderRadius: 6, fontSize: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
          <Phone size={12} /> Devis gratuit
        </button>
      </nav>

      <div style={{ flex: 1, overflow: 'auto', background: '#f8fafc' }}>

        {section === 'accueil' && (
          <div>
            {/* Hero */}
            <div style={{ position: 'relative', height: 320 }}>
              <img src={IMAGES.plumber.hero} alt="plombier" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15,30,60,0.9) 40%, rgba(15,30,60,0.4) 100%)', display: 'flex', alignItems: 'center', padding: '0 48px' }}>
                <div>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                    {['Certifié RGE', 'Urgence 24/7', 'Devis gratuit'].map(b => (
                      <span key={b} style={{ background: accentColor, color: '#fff', fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 3, letterSpacing: 0.5, textTransform: 'uppercase' }}>{b}</span>
                    ))}
                  </div>
                  <h1 style={{ color: '#fff', fontSize: 36, fontWeight: 900, marginBottom: 10, lineHeight: 1.1 }}>{name}</h1>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, marginBottom: 28 }}>{tagline}</p>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <a href="tel:0698765432"
                      style={{ background: '#dc2626', color: '#fff', padding: '12px 28px', borderRadius: 6, fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
                      <Phone size={16} /> Urgence — Appeler
                    </a>
                    <button onClick={() => setSection('devis')}
                      style={{ background: accentColor, color: '#fff', border: 'none', padding: '12px 28px', borderRadius: 6, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
                      Devis gratuit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Garanties */}
            <div style={{ background: primaryColor, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {[[ThumbsUp, '10 ans', 'Garantie travaux'], [CheckCircle, 'Certifié RGE', 'Éligible aux aides'], [Clock, '< 30 min', "D'intervention"], [Shield, '100%', 'Transparent']].map(([Icon, val, label], i) => (
                <div key={i} style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 12, borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                  <Icon size={20} color={accentColor} />
                  <div>
                    <div style={{ color: '#fff', fontWeight: 800, fontSize: 15 }}>{val}</div>
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 10 }}>{label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Services preview */}
            <div style={{ padding: '40px 32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#111' }}>Nos interventions</h2>
                <button onClick={() => setSection('services')} style={{ background: 'none', border: 'none', color: primaryColor, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>Tout voir →</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
                {SERVICES.slice(0, 3).map((s, i) => (
                  <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '20px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', borderTop: `3px solid ${s.urgent ? '#dc2626' : accentColor}`, cursor: 'pointer' }}
                    onClick={() => setSection('services')}>
                    <div style={{ background: (s.urgent ? '#dc2626' : primaryColor) + '10', padding: 10, borderRadius: 8, width: 'fit-content', marginBottom: 12 }}>
                      <s.Icon size={20} color={s.urgent ? '#dc2626' : primaryColor} />
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#111', marginBottom: 6 }}>{s.title}</div>
                    <div style={{ fontSize: 12, color: '#888', lineHeight: 1.6, marginBottom: 12 }}>{s.desc}</div>
                    <div style={{ fontWeight: 800, color: primaryColor, fontSize: 14 }}>{s.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Réalisations preview */}
            <div style={{ padding: '0 32px 40px' }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#111', marginBottom: 20 }}>Dernières réalisations</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
                {REALIZATIONS.map((r, i) => (
                  <div key={i} style={{ borderRadius: 10, overflow: 'hidden', background: '#fff', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
                    <img src={r.img} alt={r.title} style={{ width: '100%', height: 140, objectFit: 'cover' }} />
                    <div style={{ padding: '14px 16px' }}>
                      <div style={{ fontWeight: 700, color: '#111', fontSize: 13, marginBottom: 4 }}>{r.title}</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: '#888', fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}><MapPin size={10} />{r.lieu}</span>
                        <span style={{ color: accentColor, fontSize: 11, fontWeight: 600 }}>{r.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {section === 'services' && (
          <div style={{ padding: '36px 32px' }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#111', marginBottom: 6 }}>Tous nos services</h2>
            <p style={{ color: '#64748b', fontSize: 13, marginBottom: 28 }}>Devis gratuit · Facturation au temps passé · Garantie décennale</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SERVICES.map((s, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '20px 24px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', display: 'grid', gridTemplateColumns: '48px 1fr auto', gap: 16, alignItems: 'start', border: s.urgent ? '1px solid #fca5a5' : '1px solid transparent' }}>
                  <div style={{ background: (s.urgent ? '#dc2626' : primaryColor) + '12', padding: 12, borderRadius: 8 }}>
                    <s.Icon size={20} color={s.urgent ? '#dc2626' : primaryColor} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: '#111' }}>{s.title}</span>
                      {s.urgent && <span style={{ background: '#dc2626', color: '#fff', fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 2, textTransform: 'uppercase' }}>Urgent</span>}
                    </div>
                    <p style={{ color: '#888', fontSize: 13, lineHeight: 1.6, marginBottom: 6 }}>{s.desc}</p>
                    <p style={{ color: '#aaa', fontSize: 12, lineHeight: 1.6 }}>{s.detail}</p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontWeight: 800, color: primaryColor, fontSize: 16, marginBottom: 8 }}>{s.price}</div>
                    <button onClick={() => setSection('devis')} style={{ background: primaryColor, color: '#fff', border: 'none', padding: '7px 14px', borderRadius: 6, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                      Devis
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'réalisations' && (
          <div style={{ padding: '36px 32px' }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#111', marginBottom: 28 }}>Nos réalisations</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
              {REALIZATIONS.map((r, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                  <img src={r.img} alt={r.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                  <div style={{ padding: '18px' }}>
                    <div style={{ fontWeight: 700, color: '#111', fontSize: 15, marginBottom: 6 }}>{r.title}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#888', fontSize: 12, marginBottom: 10 }}>
                      <MapPin size={12} /> {r.lieu}
                    </div>
                    <div style={{ background: accentColor + '15', color: accentColor, fontWeight: 600, fontSize: 12, padding: '5px 10px', borderRadius: 4, display: 'inline-block' }}>{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'faq' && (
          <div style={{ padding: '36px 32px', maxWidth: 640 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#111', marginBottom: 28 }}>Questions fréquentes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 10, boxShadow: '0 1px 6px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', padding: '18px 20px', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left' }}>
                    <span style={{ fontWeight: 700, color: '#111', fontSize: 14 }}>{faq.q}</span>
                    {openFaq === i ? <ChevronUp size={18} color="#888" /> : <ChevronDown size={18} color="#888" />}
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 20px 18px' }}>
                      <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.8 }}>{faq.r}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32, background: primaryColor, borderRadius: 12, padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Une autre question ?</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>Notre équipe vous répond en moins de 2h</div>
              </div>
              <button onClick={() => setSection('devis')} style={{ background: accentColor, color: '#fff', border: 'none', padding: '11px 22px', borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
                Nous contacter
              </button>
            </div>
          </div>
        )}

        {section === 'devis' && (
          <div style={{ padding: '36px 32px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 32, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#111', marginBottom: 6 }}>Demande de devis gratuit</h2>
              <p style={{ color: '#64748b', fontSize: 13, marginBottom: 28 }}>Réponse sous 1h · Sans engagement</p>
              {sent ? (
                <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 12, padding: 40, textAlign: 'center' }}>
                  <CheckCircle size={48} color="#22c55e" style={{ marginBottom: 16, margin: '0 auto 16px' }} />
                  <p style={{ color: '#166534', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Demande envoyée !</p>
                  <p style={{ color: '#4ade80', fontSize: 13 }}>Nous vous contactons dans l'heure.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ background: '#fff', padding: '28px', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                    {[['nom', 'Nom complet', 'text'], ['tel', 'Téléphone', 'tel']].map(([f, l, t]) => (
                      <div key={f}>
                        <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 5, textTransform: 'uppercase', letterSpacing: 0.5 }}>{l}</label>
                        <input type={t} required value={form[f]} onChange={e => setForm({ ...form, [f]: e.target.value })}
                          style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: 6, fontSize: 13, outline: 'none' }} />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 5, textTransform: 'uppercase', letterSpacing: 0.5 }}>Adresse</label>
                    <input type="text" value={form.adresse} onChange={e => setForm({ ...form, adresse: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: 6, fontSize: 13, outline: 'none' }} />
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 5, textTransform: 'uppercase', letterSpacing: 0.5 }}>Type d'intervention</label>
                    <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} required
                      style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: 6, fontSize: 13, outline: 'none', background: '#fff' }}>
                      <option value="">Sélectionner...</option>
                      {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <input type="checkbox" id="urgence" checked={form.urgence} onChange={e => setForm({ ...form, urgence: e.target.checked })}
                      style={{ width: 16, height: 16, cursor: 'pointer' }} />
                    <label htmlFor="urgence" style={{ fontSize: 13, color: '#dc2626', fontWeight: 600, cursor: 'pointer' }}>C'est une urgence</label>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 5, textTransform: 'uppercase', letterSpacing: 0.5 }}>Description</label>
                    <textarea rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: 6, fontSize: 13, outline: 'none', resize: 'vertical' }} />
                  </div>
                  <button type="submit" style={{ width: '100%', background: primaryColor, color: '#fff', border: 'none', padding: '13px', borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
                    Envoyer ma demande →
                  </button>
                </form>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ background: '#fff', borderRadius: 12, padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div style={{ fontWeight: 700, color: '#111', fontSize: 14, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Phone size={16} color={primaryColor} /> Contact direct
                </div>
                <a href="tel:0698765432" style={{ display: 'block', background: '#dc2626', color: '#fff', padding: '12px 16px', borderRadius: 8, fontWeight: 800, fontSize: 16, textAlign: 'center', textDecoration: 'none', marginBottom: 10 }}>
                  06 98 76 54 32
                </a>
                <p style={{ color: '#888', fontSize: 11, textAlign: 'center' }}>Urgences 24h/24 · 7j/7</p>
              </div>
              <img src={IMAGES.plumber.work} alt="plombier" style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 12 }} />
              <div style={{ background: primaryColor, borderRadius: 12, padding: '20px' }}>
                {[['✓', 'Devis gratuit & sans engagement'], ['✓', 'Facturation transparente'], ['✓', 'Garantie décennale'], ['✓', 'Certifié RGE Qualibat']].map(([ic, t]) => (
                  <div key={t} style={{ display: 'flex', gap: 10, marginBottom: 10, color: '#fff', fontSize: 13 }}>
                    <span style={{ color: accentColor, fontWeight: 700 }}>{ic}</span> {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
