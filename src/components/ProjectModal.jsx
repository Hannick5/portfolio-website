import { useEffect } from 'react';
import BakeryTemplate from './templates/BakeryTemplate';
import BakeryModernTemplate from './templates/BakeryModernTemplate';
import PatisserieTemplate from './templates/PatisserieTemplate';
import LocksmithTemplate from './templates/LocksmithTemplate';
import LocksmithProTemplate from './templates/LocksmithProTemplate';
import LocksmithSosTemplate from './templates/LocksmithSosTemplate';
import SalonTemplate from './templates/SalonTemplate';
import BarberTemplate from './templates/BarberTemplate';
import SalonVibrantTemplate from './templates/SalonVibrantTemplate';
import RestaurantTemplate from './templates/RestaurantTemplate';
import CafeTemplate from './templates/CafeTemplate';
import RestaurantAsianTemplate from './templates/RestaurantAsianTemplate';
import PlumberTemplate from './templates/PlumberTemplate';
import PlumberEcoTemplate from './templates/PlumberEcoTemplate';
import PlumberUrgentTemplate from './templates/PlumberUrgentTemplate';
import ElectrienTemplate from './templates/ElectrienTemplate';
import ElectrienSmartTemplate from './templates/ElectrienSmartTemplate';
import ElectrienLightTemplate from './templates/ElectrienLightTemplate';
import FleuristeTemplate from './templates/FleuristeTemplate';
import FleuristeEventsTemplate from './templates/FleuristeEventsTemplate';
import FleuristeUrbanTemplate from './templates/FleuristeUrbanTemplate';
import GarageTemplate from './templates/GarageTemplate';
import GarageExpressTemplate from './templates/GarageExpressTemplate';
import GarageBodyTemplate from './templates/GarageBodyTemplate';

const templateMap = {
  // Boulangerie
  bakery: BakeryTemplate,
  'bakery-modern': BakeryModernTemplate,
  patisserie: PatisserieTemplate,
  // Serrurerie
  locksmith: LocksmithTemplate,
  'locksmith-pro': LocksmithProTemplate,
  'locksmith-sos': LocksmithSosTemplate,
  // Coiffure
  salon: SalonTemplate,
  barber: BarberTemplate,
  'salon-vibrant': SalonVibrantTemplate,
  // Restaurant
  restaurant: RestaurantTemplate,
  cafe: CafeTemplate,
  'restaurant-asian': RestaurantAsianTemplate,
  // Plomberie
  plumber: PlumberTemplate,
  'plumber-eco': PlumberEcoTemplate,
  'plumber-urgent': PlumberUrgentTemplate,
  // Électricité
  electricien: ElectrienTemplate,
  'electricien-smart': ElectrienSmartTemplate,
  'electricien-light': ElectrienLightTemplate,
  // Fleuriste
  fleuriste: FleuristeTemplate,
  'fleuriste-events': FleuristeEventsTemplate,
  'fleuriste-urban': FleuristeUrbanTemplate,
  // Garage
  garage: GarageTemplate,
  'garage-express': GarageExpressTemplate,
  'garage-body': GarageBodyTemplate,
};

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const Template = templateMap[project.template] || BakeryTemplate;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '40px 20px',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 900, height: '85vh',
          background: '#fff', borderRadius: 16,
          overflow: 'hidden', display: 'flex', flexDirection: 'column',
          boxShadow: '0 25px 80px rgba(0,0,0,0.6)',
          animation: 'slideUp 0.25s ease',
          position: 'relative',
        }}
      >
        {/* Browser chrome mockup */}
        <div style={{
          background: '#1e293b', padding: '10px 16px',
          display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0,
        }}>
          {/* Window buttons */}
          <div style={{ display: 'flex', gap: 6 }}>
            <button onClick={onClose} style={{ width: 13, height: 13, borderRadius: '50%', background: '#ef4444', border: 'none', cursor: 'pointer' }} title="Fermer" />
            <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#f59e0b' }} />
            <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#22c55e' }} />
          </div>
          {/* Fake URL bar */}
          <div style={{
            flex: 1, background: '#0f172a', borderRadius: 6, padding: '5px 12px',
            color: '#94a3b8', fontSize: 13, fontFamily: 'monospace',
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <span style={{ color: '#22c55e', fontSize: 11 }}>🔒</span>
            www.{project.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.fr
          </div>
          <button onClick={onClose}
            style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#94a3b8', borderRadius: 6, padding: '6px 14px', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>
            ✕ Fermer
          </button>
        </div>

        {/* Actual site content */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <Template project={project} />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      `}</style>
    </div>
  );
}
