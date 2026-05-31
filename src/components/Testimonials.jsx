'use client';

import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Jake H.",
    location: "Panama",
    gig: "Python & Data Scraping",
    initial: "J",
    repeat: true,
    accentColor: "#3b82f6",
    avatarGradient: "linear-gradient(135deg, #2563eb, #60a5fa)",
    cardBg: "linear-gradient(145deg, #0f172a 0%, #0c1a3a 100%)",
    borderColor: "#1e3a5f",
    borderHover: "#3b82f6",
    badgeBg: "#1e3a5f",
    badgeColor: "#60a5fa",
    badgeBorder: "#2d5a9e",
    quote: "I would like to express my utmost appreciation for Muhammad's exceptional skills as a Python developer. His deep understanding, dedication and professionalism has resulted in remarkable outcomes. I wholeheartedly recommend him to anyone seeking a skilled professional who can consistently deliver exceptional results."
  },
  {
    name: "Genesis P.",
    location: "United States",
    gig: "Data Scraping",
    initial: "G",
    repeat: true,
    accentColor: "#8b5cf6",
    avatarGradient: "linear-gradient(135deg, #7c3aed, #a78bfa)",
    cardBg: "linear-gradient(145deg, #0f0f1a 0%, #1a1040 100%)",
    borderColor: "#2d1f5e",
    borderHover: "#8b5cf6",
    badgeBg: "#2d1f5e",
    badgeColor: "#a78bfa",
    badgeBorder: "#4c3a9e",
    quote: "Outstanding developer. This guy is awesome to work with. Once he understands what you need, your job will be done. I will always work with him and his team."
  },
  {
    name: "Evade C.",
    location: "United States",
    gig: "Custom Web Development",
    initial: "E",
    repeat: true,
    accentColor: "#10b981",
    avatarGradient: "linear-gradient(135deg, #059669, #34d399)",
    cardBg: "linear-gradient(145deg, #081a12 0%, #0d2218 100%)",
    borderColor: "#1a3d28",
    borderHover: "#10b981",
    badgeBg: "#0d3320",
    badgeColor: "#34d399",
    badgeBorder: "#1a6040",
    quote: "Always great communication when an obstacle arises. He provides great feedback and insights to all my questions. Overall, I'm happy with my choice to work with him on my project."
  },
  {
    name: "Muhammad M.",
    location: "Pakistan",
    gig: "Full Stack Web Application",
    initial: "M",
    repeat: false,
    accentColor: "#f97316",
    avatarGradient: "linear-gradient(135deg, #ea580c, #fb923c)",
    cardBg: "linear-gradient(145deg, #1a0f05 0%, #261508 100%)",
    borderColor: "#3d2010",
    borderHover: "#f97316",
    badgeBg: "",
    badgeColor: "",
    badgeBorder: "",
    quote: "It was my pleasure working with Hammad. He promptly understood the requirements and completed implementation ahead of time. He incorporated extra changes not previously mentioned and delivered the best possible results."
  },
  {
    name: "Amber S.",
    location: "United States",
    gig: "Data Scraping",
    initial: "A",
    repeat: true,
    accentColor: "#ec4899",
    avatarGradient: "linear-gradient(135deg, #db2777, #f472b6)",
    cardBg: "linear-gradient(145deg, #1a0812 0%, #26101c 100%)",
    borderColor: "#3d1028",
    borderHover: "#ec4899",
    badgeBg: "#2d0f1e",
    badgeColor: "#f472b6",
    badgeBorder: "#5a1a38",
    quote: "It was a great experience once again. He was very knowledgeable with the code and knew exactly what he was doing. I will use him again — definitely recommend."
  },
  {
    name: "Aaron N.",
    location: "United States",
    gig: "Data Scraping",
    initial: "A",
    repeat: false,
    accentColor: "#14b8a6",
    avatarGradient: "linear-gradient(135deg, #0d9488, #2dd4bf)",
    cardBg: "linear-gradient(145deg, #051a18 0%, #0a2622 100%)",
    borderColor: "#0f3530",
    borderHover: "#14b8a6",
    badgeBg: "",
    badgeColor: "",
    badgeBorder: "",
    quote: "I am extremely impressed with the level of service and the quality of the work I received. The expertise, professionalism, and attention to detail were outstanding. Highly recommended."
  }
];

const Testimonials=()=> {
  return (
    <section id="testimonials" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{
            fontSize: '11px', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: '#6b7280', marginBottom: '12px'
          }}>
            Client feedback
          </p>
          <h2 style={{ fontSize: '38px', fontWeight: '700', color: '#fff', marginBottom: '14px' }}>
            What clients say
          </h2>
          <p style={{
            fontSize: '14px', color: '#9ca3af', lineHeight: '1.7',
            maxWidth: '460px', margin: '0 auto 36px'
          }}>
            International clients across the US, Panama, and South Asia —
            several returning for multiple projects.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '36px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '26px', fontWeight: '700', color: '#fff' }}>5.0</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', margin: '4px 0' }}>
                {[...Array(5)].map((_, i) => <FaStar key={i} style={{ color: '#facc15', fontSize: '11px' }} />)}
              </div>
              <div style={{ fontSize: '11px', color: '#6b7280' }}>Avg rating</div>
            </div>
            <div style={{ width: '1px', height: '40px', background: '#1f2937' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '26px', fontWeight: '700', color: '#fff' }}>25+</div>
              <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '8px' }}>Projects delivered</div>
            </div>
            <div style={{ width: '1px', height: '40px', background: '#1f2937' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '26px', fontWeight: '700', color: '#fff' }}>8+</div>
              <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '8px' }}>Repeat clients</div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px'
        }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                background: t.cardBg,
                border: `1px solid ${t.borderColor}`,
                borderRadius: '18px',
                padding: '28px 24px 22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                overflow: 'hidden',
                transition: 'transform 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = t.borderHover;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = t.borderColor;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Glow blob */}
              <div style={{
                position: 'absolute', top: '-40px', right: '-40px',
                width: '120px', height: '120px', borderRadius: '50%',
                background: t.accentColor, opacity: 0.12,
                filter: 'blur(30px)', pointerEvents: 'none'
              }} />

              {/* Repeat badge */}
              {t.repeat && (
                <span style={{
                  position: 'absolute', top: '18px', right: '18px',
                  fontSize: '10px', fontWeight: '600',
                  padding: '3px 10px', borderRadius: '999px',
                  letterSpacing: '0.04em',
                  background: t.badgeBg,
                  color: t.badgeColor,
                  border: `1px solid ${t.badgeBorder}`
                }}>
                  ↩ Repeat client
                </span>
              )}

              {/* Large quote mark */}
              <div style={{
                fontSize: '56px', lineHeight: '1',
                fontFamily: 'Georgia, serif',
                color: t.accentColor, opacity: 0.7,
                marginBottom: '-10px'
              }}>
                "
              </div>

              {/* Quote text */}
              <p style={{
                color: '#d1d5db', fontSize: '13px',
                lineHeight: '1.75', flex: 1
              }}>
                {t.quote}
              </p>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, j) => (
                  <FaStar key={j} style={{ color: '#facc15', fontSize: '11px' }} />
                ))}
              </div>

              {/* Separator */}
              <div style={{
                height: '1px',
                background: t.accentColor,
                opacity: 0.15
              }} />

              {/* Avatar + name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '4px' }}>
                <div style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  background: t.avatarGradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: '700', fontSize: '14px', flexShrink: 0
                }}>
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#fff', marginBottom: '2px' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '11px', color: '#6b7280' }}>
                    {t.location} · {t.gig}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default Testimonials;