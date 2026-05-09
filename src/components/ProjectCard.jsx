export default function ProjectCard({ project, sector, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: '#111827', border: '1px solid #1f2937', borderRadius: 14,
        overflow: 'hidden', cursor: 'pointer', transition: 'all 0.25s ease',
        position: 'relative', group: true,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = sector.color;
        e.currentTarget.style.boxShadow = `0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px ${sector.color}`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = '#1f2937';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Fake browser preview */}
      <div style={{ background: project.primaryColor, height: 160, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
        {/* Browser bar mockup */}
        <div style={{ background: 'rgba(0,0,0,0.4)', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: 4 }}>
            {['#ef4444', '#f59e0b', '#22c55e'].map(c => <div key={c} style={{ width: 7, height: 7, borderRadius: '50%', background: c }} />)}
          </div>
          <div style={{ flex: 1, background: 'rgba(255,255,255,0.15)', borderRadius: 4, height: 14, marginLeft: 4 }} />
        </div>
        {/* Preview content */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 40 }}>{sector.icon}</div>
          <div style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700, fontSize: 14, textAlign: 'center', padding: '0 16px' }}>{project.name}</div>
          <div style={{ width: 36, height: 3, background: project.accentColor, borderRadius: 2 }} />
        </div>
        {/* Hover overlay */}
        <div style={{
          position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0, transition: 'opacity 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = 0}
        >
          <div style={{ background: '#fff', color: '#111', padding: '10px 24px', borderRadius: 24, fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span>▶</span> Voir le site
          </div>
        </div>
      </div>

      <div style={{ padding: '16px 18px 18px' }}>
        <div style={{ fontWeight: 700, fontSize: 15, color: '#f1f5f9', marginBottom: 4 }}>{project.name}</div>
        <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.5 }}>{project.tagline}</div>
        <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ background: sector.color + '20', color: sector.color, padding: '3px 10px', borderRadius: 20, fontSize: 11, fontWeight: 600 }}>
            {sector.icon} {sector.label}
          </span>
          <span style={{ color: sector.color, fontSize: 12, fontWeight: 600, marginLeft: 'auto' }}>Voir →</span>
        </div>
      </div>
    </div>
  );
}
