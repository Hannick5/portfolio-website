import { useState } from 'react';
import { Phone, Clock, MapPin, Shield, Key, Lock, CheckCircle, Zap, AlertTriangle } from 'lucide-react';
import { IMAGES } from '../../utils/images';

export default function LocksmithSosTemplate({ project }) {
  const [sent, setSent] = useState(false);
  const [tel, setTel] = useState('');
  const { primaryColor, accentColor, name, tagline } = project;

  // This is a single-page emergency site — no nav sections, ultra-focused CTA
  return (
    <div style={{ height: '100%', overflowY: 'auto', fontFamily: '"DM Sans", sans-serif', background: '#0A0A0A', color: '#fff' }}>

      {/* FLASHING URGENCY BANNER */}
      <div style={{ background: primaryColor, color: accentColor, textAlign: 'center', padding: '10px', fontSize: 14, fontWeight: 900, letterSpacing: 2, textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
        <AlertTriangle size={16} fill={accentColor} />
        URGENCE 24H/24 — 7J/7 — INTERVENTION &lt; 20 MIN
        <AlertTriangle size={16} fill={accentColor} />
      </div>

      {/* HERO — fullscreen CTA */}
      <div style={{ position: 'relative', minHeight: 480, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img src={IMAGES.locksmith.door} alt="urgence" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.15)' }} />
        <div style={{ position: 'relative', zIndex: 1, width: '100%', textAlign: 'center', padding: '60px 48px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <div style={{ background: primaryColor, padding: 16, borderRadius: '50%' }}>
              <Lock size={36} color={accentColor} />
            </div>
          </div>
          <h1 style={{ fontSize: 60, fontWeight: 900, lineHeight: 1, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: 2 }}>
            {name}
          </h1>
          <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)', margin: '0 0 48px', fontWeight: 500 }}>{tagline}</p>

          {/* GIANT PHONE */}
          <a href="tel:0800000000" style={{ display: 'inline-flex', alignItems: 'center', gap: 16, background: primaryColor, color: accentColor, textDecoration: 'none', padding: '20px 48px', fontSize: 42, fontWeight: 900, letterSpacing: 3, lineHeight: 1, marginBottom: 32 }}>
            <Phone size={36} fill={accentColor} color={accentColor} />
            01 55 00 00 00
          </a>

          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 32, letterSpacing: 1 }}>
            Appel gratuit — Serrurier certifié — Devis immédiat
          </div>

          {/* Quick callback form */}
          <div style={{ display: 'flex', gap: 0, maxWidth: 440, margin: '0 auto' }}>
            <input
              type="tel"
              placeholder="Votre numéro de téléphone"
              value={tel}
              onChange={e => setTel(e.target.value)}
              style={{ flex: 1, background: '#1A1A1A', border: `2px solid ${primaryColor}`, borderRight: 'none', color: '#fff', padding: '14px 20px', fontSize: 16, fontFamily: '"DM Sans", sans-serif', outline: 'none' }}
            />
            {sent
              ? <div style={{ background: '#22C55E', color: '#fff', padding: '14px 20px', fontSize: 15, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle size={16} /> Rappel confirmé
              </div>
              : <button onClick={() => setSent(true)} style={{ background: primaryColor, color: accentColor, border: 'none', padding: '14px 24px', fontSize: 15, fontWeight: 800, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 1, fontFamily: '"DM Sans", sans-serif' }}>
                Être rappelé
              </button>
            }
          </div>
        </div>
      </div>

      {/* GUARANTEES STRIP */}
      <div style={{ background: primaryColor, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '24px 40px' }}>
        {[
          { Icon: Zap, text: 'Intervention &lt; 20 min' },
          { Icon: Shield, text: 'Sans casse garantie' },
          { Icon: Key, text: 'Toutes serrures' },
          { Icon: Clock, text: 'Disponible 24h/24' },
        ].map(({ Icon, text }) => (
          <div key={text} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Icon size={22} color={accentColor} />
            <span style={{ fontSize: 13, fontWeight: 700, color: accentColor, letterSpacing: 0.5 }} dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <div style={{ padding: '48px 48px', background: '#0A0A0A' }}>
        <h2 style={{ fontSize: 32, fontWeight: 900, textAlign: 'center', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: 2 }}>Nos Interventions</h2>
        <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', marginBottom: 36 }}>Devis gratuit — Prix fixe — Aucune mauvaise surprise</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          {[
            { title: 'Ouverture de porte', price: 'Dès 89€', urgent: true },
            { title: 'Changement serrure', price: 'Dès 120€', urgent: false },
            { title: 'Copie de clé', price: 'Dès 12€', urgent: false },
            { title: 'Blindage porte', price: 'Sur devis', urgent: false },
            { title: 'Coffre-fort', price: 'Sur devis', urgent: false },
            { title: 'Porte claquée', price: 'Dès 89€', urgent: true },
          ].map(s => (
            <div key={s.title} style={{ background: s.urgent ? primaryColor : '#151515', border: s.urgent ? `none` : '1px solid #222', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4, color: s.urgent ? accentColor : '#fff' }}>{s.title}</div>
                {s.urgent && <div style={{ fontSize: 11, color: accentColor, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>Urgence</div>}
              </div>
              <div style={{ fontSize: 18, fontWeight: 900, color: s.urgent ? accentColor : primaryColor, whiteSpace: 'nowrap' }}>{s.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGES */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', height: 160, padding: '0 48px 48px', gap: 12 }}>
        {[IMAGES.locksmith.work, IMAGES.locksmith.keys, IMAGES.locksmith.door].map((img, i) => (
          <img key={i} src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} />
        ))}
      </div>

      {/* ZONE INFO */}
      <div style={{ background: '#111', padding: '32px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `4px solid ${primaryColor}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <MapPin size={20} color={primaryColor} />
          <div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>Zone d'intervention</div>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Paris &amp; Île-de-France — Toutes communes</div>
          </div>
        </div>
        <a href="tel:0155000000" style={{ display: 'flex', alignItems: 'center', gap: 10, background: primaryColor, color: accentColor, textDecoration: 'none', padding: '14px 28px', fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>
          <Phone size={20} fill={accentColor} color={accentColor} />
          Appeler maintenant
        </a>
      </div>
    </div>
  );
}
