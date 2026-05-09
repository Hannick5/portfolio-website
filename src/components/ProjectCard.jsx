import { ExternalLink } from 'lucide-react';
import { IMAGES } from '../utils/images';

const SECTOR_IMAGES = {
  boulangerie: IMAGES.bakery.hero,
  serrurerie: IMAGES.locksmith.hero,
  coiffure: IMAGES.salon.hero,
  restaurant: IMAGES.restaurant.hero,
  plomberie: IMAGES.plumber.hero,
};

export default function ProjectCard({ project, sector, onClick }) {
  const bgImage = SECTOR_IMAGES[sector.id];

  return (
    <div
      onClick={onClick}
      style={{
        background: '#111827', border: '1px solid #1f2937', borderRadius: 14,
        overflow: 'hidden', cursor: 'pointer', transition: 'all 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.borderColor = sector.color;
        e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.5)`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = '#1f2937';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Fake browser preview with real image */}
      <div style={{ position: 'relative', height: 168, overflow: 'hidden' }}>
        {/* Browser bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2, background: 'rgba(15,23,42,0.92)', backdropFilter: 'blur(4px)', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ display: 'flex', gap: 4 }}>
            {['#ef4444', '#f59e0b', '#22c55e'].map(c => <div key={c} style={{ width: 7, height: 7, borderRadius: '50%', background: c }} />)}
          </div>
          <div style={{ flex: 1, background: 'rgba(255,255,255,0.07)', borderRadius: 4, height: 14, display: 'flex', alignItems: 'center', paddingLeft: 6 }}>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 9, fontFamily: 'monospace' }}>
              www.{project.name.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 20)}.fr
            </span>
          </div>
        </div>
        {/* Site preview image */}
        <img
          src={bgImage}
          alt={project.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)', transition: 'transform 0.3s, filter 0.3s' }}
          onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; e.target.style.filter = 'brightness(0.5)'; }}
          onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.filter = 'brightness(0.7)'; }}
        />
        {/* Color overlay with brand color */}
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${project.primaryColor}cc 0%, transparent 60%)` }} />
        {/* Project name on image */}
        <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12 }}>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>{project.name}</div>
          <div style={{ width: 24, height: 2, background: project.accentColor, borderRadius: 1, marginTop: 5 }} />
        </div>
        {/* Hover CTA */}
        <div style={{ position: 'absolute', inset: '24px 0 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = 0}>
          <div style={{ background: '#fff', color: '#111', padding: '8px 20px', borderRadius: 20, fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
            <ExternalLink size={13} /> Voir le site
          </div>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '14px 16px 16px' }}>
        <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.5, marginBottom: 10 }}>{project.tagline}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ background: sector.color + '18', color: sector.color, padding: '3px 9px', borderRadius: 20, fontSize: 11, fontWeight: 600 }}>
            {sector.label}
          </span>
          <span style={{ color: sector.color, fontSize: 12, fontWeight: 600 }}>Voir →</span>
        </div>
      </div>
    </div>
  );
}
