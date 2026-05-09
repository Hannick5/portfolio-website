import { useState } from 'react';
import { sectors } from './data/projects';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';

const NAV_LINKS = ['Services', 'Projets', 'Process', 'Tarifs', 'Contact'];

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSector, setActiveSector] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ nom: '', email: '', secteur: '', message: '' });
  const [contactSent, setContactSent] = useState(false);

  const allProjects = sectors.flatMap(s => s.projects.map(p => ({ ...p, sector: s })));
  const filteredProjects = activeSector === 'all'
    ? allProjects
    : allProjects.filter(p => p.sector.id === activeSector);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a' }}>
      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1e293b', padding: '0 5%',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          <div style={{ fontWeight: 800, fontSize: 22, color: '#fff', letterSpacing: -0.5 }}>
            <span style={{ color: '#2563eb' }}>Web</span>Craft
          </div>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {NAV_LINKS.map(link => (
              <button key={link} onClick={() => scrollTo(link.toLowerCase())}
                style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: 14, fontWeight: 500, cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}>
                {link}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')}
              style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '9px 22px', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
              Devis gratuit
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', padding: '80px 5%', position: 'relative', overflow: 'hidden' }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <div style={{ maxWidth: 720 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1e3a5f', color: '#60a5fa', padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              Disponible — 3 places ce mois-ci
            </div>
            <h1 style={{ fontSize: 62, fontWeight: 900, lineHeight: 1.1, marginBottom: 24, letterSpacing: -2 }}>
              Votre site web
              <span style={{ display: 'block', background: 'linear-gradient(90deg, #2563eb, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                clés en main
              </span>
              pour votre commerce
            </h1>
            <p style={{ fontSize: 19, color: '#94a3b8', lineHeight: 1.7, marginBottom: 40 }}>
              Je crée des sites web professionnels pour les artisans et commerçants locaux. Boulangeries, serrureries, salons de coiffure… Livré en 7 jours, sans jargon technique.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button onClick={() => scrollTo('projets')}
                style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '16px 36px', borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => e.target.style.background = '#1d4ed8'}
                onMouseLeave={e => e.target.style.background = '#2563eb'}>
                Voir mes réalisations →
              </button>
              <button onClick={() => scrollTo('contact')}
                style={{ background: 'transparent', color: '#fff', border: '2px solid #334155', padding: '16px 36px', borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
                Devis gratuit
              </button>
            </div>
            {/* Social proof */}
            <div style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex' }}>
                {['🧑‍🍳', '💇‍♀️', '🔑', '🍽️', '🔧'].map((e, i) => (
                  <div key={i} style={{ width: 36, height: 36, borderRadius: '50%', background: '#1e293b', border: '2px solid #0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: i > 0 ? -10 : 0, fontSize: 16 }}>
                    {e}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', gap: 2, marginBottom: 2 }}>
                  {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#f59e0b', fontSize: 14 }}>★</span>)}
                </div>
                <div style={{ color: '#64748b', fontSize: 13 }}>+50 commerçants satisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: '80px 5%', borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 42, fontWeight: 800, marginBottom: 16, letterSpacing: -1 }}>Ce que j'inclus dans chaque projet</h2>
            <p style={{ color: '#64748b', fontSize: 17 }}>Tout ce dont votre commerce a besoin pour être visible en ligne.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { icon: '⚡', title: 'Site rapide & moderne', desc: 'Temps de chargement optimisé, design soigné adapté à votre image.', color: '#f59e0b' },
              { icon: '📱', title: 'Adapté mobile', desc: 'Parfait sur smartphone, tablette et ordinateur. 70% des visites viennent du mobile.', color: '#22c55e' },
              { icon: '🔍', title: 'SEO local', desc: 'Référencement Google optimisé pour votre ville et votre secteur.', color: '#3b82f6' },
              { icon: '📞', title: 'Prise de RDV / Contact', desc: 'Formulaire, réservation en ligne, lien téléphone — vos clients vous contactent.', color: '#ec4899' },
              { icon: '🖼️', title: 'Galerie & menu', desc: 'Photos de vos produits, menu, catalogue — tout ce qui convainc.', color: '#a78bfa' },
              { icon: '🔒', title: 'Hébergement inclus', desc: '1 an d\'hébergement, nom de domaine et certificat SSL inclus.', color: '#06b6d4' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#111827', border: '1px solid #1e293b', borderRadius: 16, padding: 32, transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = s.color}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#1e293b'}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{s.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 10, color: '#f1f5f9' }}>{s.title}</div>
                <div style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJETS ── */}
      <section id="projets" style={{ padding: '80px 5%', borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 42, fontWeight: 800, marginBottom: 16, letterSpacing: -1 }}>Mes Réalisations</h2>
            <p style={{ color: '#64748b', fontSize: 17 }}>Cliquez sur un projet pour voir le site en action.</p>
          </div>

          {/* Sector filter */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
            <button onClick={() => setActiveSector('all')}
              style={{ background: activeSector === 'all' ? '#2563eb' : '#111827', color: activeSector === 'all' ? '#fff' : '#94a3b8', border: `1px solid ${activeSector === 'all' ? '#2563eb' : '#1e293b'}`, padding: '9px 20px', borderRadius: 24, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
              Tous les secteurs
            </button>
            {sectors.map(s => (
              <button key={s.id} onClick={() => setActiveSector(s.id)}
                style={{ background: activeSector === s.id ? s.color + '25' : '#111827', color: activeSector === s.id ? s.color : '#94a3b8', border: `1px solid ${activeSector === s.id ? s.color : '#1e293b'}`, padding: '9px 20px', borderRadius: 24, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
                {s.icon} {s.label}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                sector={project.sector}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" style={{ padding: '80px 5%', borderTop: '1px solid #1e293b', background: '#080f1c' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 42, fontWeight: 800, marginBottom: 16, letterSpacing: -1 }}>Comment ça marche ?</h2>
            <p style={{ color: '#64748b', fontSize: 17 }}>Votre site en ligne en moins de 7 jours.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { num: '01', title: 'Appel découverte', desc: '30 min pour comprendre votre activité et vos besoins.', icon: '📞' },
              { num: '02', title: 'Maquette & design', desc: 'Je vous présente la maquette pour validation.', icon: '🎨' },
              { num: '03', title: 'Développement', desc: 'Je code votre site en 3 à 5 jours ouvrés.', icon: '💻' },
              { num: '04', title: 'Mise en ligne', desc: 'Lancement + formation de 30 min pour gérer votre site.', icon: '🚀' },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ background: '#1e293b', width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 28, border: '2px solid #334155' }}>
                  {step.icon}
                </div>
                <div style={{ color: '#2563eb', fontWeight: 800, fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>ÉTAPE {step.num}</div>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 10, color: '#f1f5f9' }}>{step.title}</div>
                <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIFS ── */}
      <section id="tarifs" style={{ padding: '80px 5%', borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 42, fontWeight: 800, marginBottom: 16, letterSpacing: -1 }}>Tarifs transparents</h2>
            <p style={{ color: '#64748b', fontSize: 17 }}>Pas de mauvaises surprises. Prix fixe, tout inclus.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
            {[
              {
                name: 'Starter', price: '490€', period: 'paiement unique',
                features: ['1 page vitrine', 'Design sur mesure', 'Formulaire contact', 'Responsive mobile', 'SEO de base'],
                cta: 'Commencer', highlight: false,
              },
              {
                name: 'Pro', price: '890€', period: 'paiement unique',
                features: ['5 pages', 'Design premium', 'Réservation en ligne', 'Galerie photos', 'SEO avancé', 'Google Maps', '1 an hébergement inclus'],
                cta: 'Choisir Pro', highlight: true,
              },
              {
                name: 'Business', price: '1490€', period: 'paiement unique',
                features: ['10+ pages', 'Boutique en ligne', 'Blog / Actualités', 'Espace client', 'Analytics', 'Formation 1h', 'Support 6 mois'],
                cta: 'Nous contacter', highlight: false,
              },
            ].map((plan, i) => (
              <div key={i} style={{
                background: plan.highlight ? 'linear-gradient(145deg, #1e3a5f, #1e293b)' : '#111827',
                border: `2px solid ${plan.highlight ? '#2563eb' : '#1e293b'}`,
                borderRadius: 16, padding: 32,
                position: 'relative', overflow: 'hidden',
              }}>
                {plan.highlight && (
                  <div style={{ position: 'absolute', top: 16, right: 16, background: '#2563eb', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 20 }}>
                    POPULAIRE
                  </div>
                )}
                <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8, color: plan.highlight ? '#60a5fa' : '#f1f5f9' }}>{plan.name}</div>
                <div style={{ fontSize: 40, fontWeight: 900, marginBottom: 4, color: '#fff', letterSpacing: -1 }}>{plan.price}</div>
                <div style={{ color: '#64748b', fontSize: 13, marginBottom: 24 }}>{plan.period}</div>
                <div style={{ borderTop: '1px solid #1e293b', paddingTop: 24, marginBottom: 28 }}>
                  {plan.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: '#22c55e', flexShrink: 0, marginTop: 1 }}>✓</span>
                      <span style={{ fontSize: 14, color: '#94a3b8' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => scrollTo('contact')}
                  style={{ width: '100%', background: plan.highlight ? '#2563eb' : '#1e293b', color: '#fff', border: `1px solid ${plan.highlight ? '#2563eb' : '#334155'}`, padding: '13px', borderRadius: 8, fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: '80px 5%', borderTop: '1px solid #1e293b', background: '#080f1c' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 42, fontWeight: 800, marginBottom: 16, letterSpacing: -1 }}>Parlons de votre projet</h2>
            <p style={{ color: '#64748b', fontSize: 17 }}>Devis gratuit, réponse sous 24h.</p>
          </div>
          {contactSent ? (
            <div style={{ background: '#111827', border: '1px solid #166534', borderRadius: 16, padding: 48, textAlign: 'center' }}>
              <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
              <div style={{ fontWeight: 800, fontSize: 22, color: '#22c55e', marginBottom: 12 }}>Message envoyé !</div>
              <div style={{ color: '#64748b' }}>Je vous réponds dans les 24h pour discuter de votre projet.</div>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setContactSent(true); }}
              style={{ background: '#111827', border: '1px solid #1e293b', borderRadius: 16, padding: 40 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                {[['nom', 'Votre nom', 'text'], ['email', 'Votre email', 'email']].map(([f, l, t]) => (
                  <div key={f}>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: '#94a3b8', fontSize: 14 }}>{l}</label>
                    <input type={t} required value={contactForm[f]} onChange={e => setContactForm({ ...contactForm, [f]: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', background: '#0f172a', border: '1px solid #1e293b', borderRadius: 8, fontSize: 14, color: '#fff', outline: 'none' }} />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: '#94a3b8', fontSize: 14 }}>Votre secteur d'activité</label>
                <select value={contactForm.secteur} onChange={e => setContactForm({ ...contactForm, secteur: e.target.value })} required
                  style={{ width: '100%', padding: '12px 14px', background: '#0f172a', border: '1px solid #1e293b', borderRadius: 8, fontSize: 14, color: '#fff', outline: 'none' }}>
                  <option value="">Choisissez votre secteur</option>
                  {sectors.map(s => <option key={s.id} value={s.label}>{s.icon} {s.label}</option>)}
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: '#94a3b8', fontSize: 14 }}>Décrivez votre projet</label>
                <textarea rows={4} required value={contactForm.message} onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="Dites-moi ce que vous faites, ce que vous souhaitez sur votre site…"
                  style={{ width: '100%', padding: '12px 14px', background: '#0f172a', border: '1px solid #1e293b', borderRadius: 8, fontSize: 14, color: '#fff', outline: 'none', resize: 'vertical' }} />
              </div>
              <button type="submit"
                style={{ width: '100%', background: '#2563eb', color: '#fff', border: 'none', padding: '16px', borderRadius: 10, fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>
                Envoyer ma demande →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: '32px 5%', borderTop: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontWeight: 800, fontSize: 18, color: '#fff' }}>
          <span style={{ color: '#2563eb' }}>Web</span>Craft
        </div>
        <div style={{ color: '#64748b', fontSize: 14 }}>© 2025 WebCraft — Tous droits réservés</div>
        <div style={{ display: 'flex', gap: 20 }}>
          {['Mentions légales', 'CGV', 'Contact'].map(l => (
            <span key={l} style={{ color: '#64748b', fontSize: 13, cursor: 'pointer' }}>{l}</span>
          ))}
        </div>
      </footer>

      {/* ── MODAL ── */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
