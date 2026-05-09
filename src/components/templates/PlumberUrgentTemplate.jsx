import { useState } from 'react';
import { Zap, Phone, Clock, MapPin, CheckCircle, Wrench, AlertTriangle, Shield } from 'lucide-react';
import { IMAGES } from '../../utils/images';

export default function PlumberUrgentTemplate({ project }) {
  const [tel, setTel] = useState('');
  const [sent, setSent] = useState(false);
  const { primaryColor, accentColor, name, tagline } = project;

  const dark = primaryColor;
  const red = accentColor;

  return (
    <div style={{ height: '100%', overflowY: 'auto', fontFamily: '"DM Sans", sans-serif', background: dark, color: '#fff' }}>

      {/* PULSING URGENCY BAR */}
      <div style={{ background: red, padding: '10px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 900, letterSpacing: 1.5, textTransform: 'uppercase' }}>
          <AlertTriangle size={15} fill="#fff" />
          DÉPANNAGE PLOMBERIE 24H/24 — 7J/7
        </div>
        <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: 2 }}>01 80 00 00 00</div>
      </div>

      {/* HERO */}
      <div style={{ position: 'relative', height: 420 }}>
        <img src={IMAGES.plumber.hero} alt="plombier" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2)' }} />
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at center, ${red}20 0%, transparent 70%)` }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, border: `1px solid ${red}60`, padding: '6px 16px' }}>
            <AlertTriangle size={13} color={red} />
            <span style={{ fontSize: 12, color: red, fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase' }}>Urgence Toutes Plomberies</span>
          </div>
          <h1 style={{ fontSize: 64, fontWeight: 900, lineHeight: 1, margin: '0 0 12px', letterSpacing: -1, textTransform: 'uppercase' }}>
            {name}
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', margin: '0 0 40px', maxWidth: 460 }}>{tagline}</p>

          {/* BIG PHONE */}
          <a href="tel:0180000000" style={{ display: 'inline-flex', alignItems: 'center', gap: 14, background: red, color: '#fff', textDecoration: 'none', padding: '18px 40px', fontSize: 32, fontWeight: 900, letterSpacing: 2, marginBottom: 24 }}>
            <Phone size={28} fill="#fff" color="#fff" />
            01 80 00 00 00
          </a>

          {/* Callback mini-form */}
          <div style={{ display: 'flex', gap: 0, maxWidth: 400 }}>
            <input
              type="tel" placeholder="Votre téléphone"
              value={tel} onChange={e => setTel(e.target.value)}
              style={{ flex: 1, background: '#2A2A2A', border: `2px solid ${red}`, borderRight: 'none', color: '#fff', padding: '13px 16px', fontSize: 15, fontFamily: '"DM Sans", sans-serif', outline: 'none' }}
            />
            {sent
              ? <div style={{ background: '#22C55E', color: '#fff', padding: '13px 16px', fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle size={16} /> OK
              </div>
              : <button onClick={() => setSent(true)} style={{ background: red, color: '#fff', border: 'none', padding: '13px 20px', fontSize: 14, fontWeight: 800, cursor: 'pointer', letterSpacing: 1, textTransform: 'uppercase', fontFamily: '"DM Sans", sans-serif' }}>
                Rappel
              </button>
            }
          </div>
        </div>
      </div>

      {/* GUARANTEES */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', background: red }}>
        {[
          { Icon: Zap, text: 'Intervention < 1h' },
          { Icon: Shield, text: 'Sans casse' },
          { Icon: CheckCircle, text: 'Devis immédiat' },
          { Icon: Clock, text: '24h/24 — 7j/7' },
        ].map(({ Icon, text }) => (
          <div key={text} style={{ padding: '20px', textAlign: 'center', borderRight: text !== '24h/24 — 7j/7' ? '1px solid rgba(255,255,255,0.2)' : 'none' }}>
            <Icon size={22} color="#fff" style={{ marginBottom: 8 }} />
            <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', letterSpacing: 0.5 }}>{text}</div>
          </div>
        ))}
      </div>

      {/* INTERVENTIONS */}
      <div style={{ padding: '48px' }}>
        <h2 style={{ fontSize: 36, fontWeight: 900, margin: '0 0 8px', letterSpacing: -0.5 }}>Interventions</h2>
        <div style={{ width: 48, height: 3, background: red, marginBottom: 36 }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          {[
            { title: 'Fuite eau toutes natures', price: 'Dès 79€', urgent: true },
            { title: 'Tuyau éclaté', price: 'Dès 89€', urgent: true },
            { title: 'Dégât des eaux', price: 'Dès 99€', urgent: true },
            { title: 'WC / évier bouché', price: 'Dès 59€', urgent: false },
            { title: 'Chaudière en panne', price: 'Dès 119€', urgent: false },
            { title: 'Robinetterie / baignoire', price: 'Dès 79€', urgent: false },
          ].map(s => (
            <div key={s.title} style={{ background: s.urgent ? red : '#1E1E1E', border: s.urgent ? 'none' : '1px solid #333', padding: '20px' }}>
              <Wrench size={16} color={s.urgent ? '#fff' : red} style={{ marginBottom: 10 }} />
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{s.title}</div>
              <div style={{ fontSize: 20, fontWeight: 900, color: s.urgent ? '#fff' : red }}>{s.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGES STRIP */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', height: 160, padding: '0 48px 48px', gap: 12 }}>
        {[IMAGES.plumber.work, IMAGES.plumber.bathroom, IMAGES.plumber.boiler].map((img, i) => (
          <img key={i} src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }} />
        ))}
      </div>

      {/* ZONE + CTA */}
      <div style={{ background: '#111', padding: '32px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `4px solid ${red}` }}>
        <div style={{ display: 'flex', gap: 16 }}>
          {[{ Icon: MapPin, val: 'Paris & Île-de-France' }, { Icon: Clock, val: '24h/24 — 7j/7' }].map(({ Icon, val }) => (
            <div key={val} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon size={14} color={red} />
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{val}</span>
            </div>
          ))}
        </div>
        <a href="tel:0180000000" style={{ display: 'flex', alignItems: 'center', gap: 10, background: red, color: '#fff', textDecoration: 'none', padding: '14px 28px', fontSize: 20, fontWeight: 900, letterSpacing: 2 }}>
          <Phone size={18} fill="#fff" color="#fff" />
          Appeler maintenant
        </a>
      </div>
    </div>
  );
}
