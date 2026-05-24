'use client';

import { useEffect, useRef } from 'react';

export default function SakthiEnterpriseWebsite() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const particles = [];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1
      });
    }

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const dxMouse = p.x - mouse.x;
        const dyMouse = p.y - mouse.y;
        const mouseDist = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (mouseDist < 160) {
          p.x += dxMouse * 0.01;
          p.y += dyMouse * 0.01;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#FFD700';
        ctx.fill();

        particles.forEach((p2, j) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255,215,0,${1 - dist / 120})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div
      style={{
        background: '#000',
        minHeight: '100vh',
        overflowX: 'hidden',
        color: 'white',
        fontFamily: 'Inter, Arial, sans-serif',
        position: 'relative'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.8
        }}
      />

      <div
        style={{
          position: 'fixed',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,215,0,0.18), transparent 70%)',
          top: '-200px',
          right: '-200px',
          filter: 'blur(40px)',
          zIndex: 0
        }}
      />

      <nav
        style={{
          position: 'fixed',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '92%',
          padding: '20px 35px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid rgba(255,215,0,0.15)',
          background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(14px)',
          borderRadius: '22px',
          zIndex: 1000,
          boxShadow: '0 0 30px rgba(255,215,0,0.08)'
        }}
      >
        <h1
          style={{
            color: '#FFD700',
            fontSize: '34px',
            margin: 0,
            fontWeight: 700
          }}
        >
          Sri Sakthi Enterprise
        </h1>

        <div style={{ display: 'flex', gap: '28px' }}>
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '16px'
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section
        id="home"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 2,
          padding: '120px 8%'
        }}
      >
        <div style={{ maxWidth: '700px' }}>
          <div
            style={{
              display: 'inline-block',
              border: '1px solid rgba(255,215,0,0.2)',
              padding: '12px 24px',
              borderRadius: '50px',
              color: '#FFD700',
              marginBottom: '30px',
              background: 'rgba(255,215,0,0.05)'
            }}
          >
            TRUSTED ENTERPRISE SOLUTIONS
          </div>

          <h1
            style={{
              fontSize: '90px',
              lineHeight: '0.95',
              marginBottom: '30px',
              fontWeight: 800
            }}
          >
            Building Modern
            <br />
            <span style={{ color: '#FFD700' }}>Business Solutions</span>
          </h1>

          <p
            style={{
              color: '#cfcfcf',
              fontSize: '21px',
              lineHeight: '1.8',
              marginBottom: '45px'
            }}
          >
            Advertising Films • IT Solutions • Digital Marketing • Branding & Design
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <button
              style={{
                padding: '18px 40px',
                borderRadius: '14px',
                background: '#FFD700',
                border: 'none',
                color: '#000',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
                boxShadow: '0 0 35px rgba(255,215,0,0.35)'
              }}
            >
              Get Started
            </button>

            <button
              style={{
                padding: '18px 40px',
                borderRadius: '14px',
                background: 'transparent',
                border: '1px solid rgba(255,215,0,0.3)',
                color: '#FFD700',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        <div
          style={{
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            border: '2px solid rgba(255,215,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: '0 0 80px rgba(255,215,0,0.15)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,215,0,0.25), transparent 70%)',
              filter: 'blur(30px)'
            }}
          />

          <h1
            style={{
              fontSize: '180px',
              color: '#FFD700',
              zIndex: 2,
              textShadow: '0 0 45px rgba(255,215,0,0.55)'
            }}
          >
            S
          </h1>
        </div>
      </section>

      <section
        id="services"
        style={{
          padding: '80px 8%',
          position: 'relative',
          zIndex: 2
        }}
      >
        <h2
          style={{
            fontSize: '58px',
            textAlign: 'center',
            marginBottom: '60px'
          }}
        >
          Solutions That Drive <span style={{ color: '#FFD700' }}>Real Results</span>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: '30px'
          }}
        >
          {[
            ['🎬', 'Advertising Films', 'Brand films, TV commercials and cinematic promotional videos.'],
            ['💻', 'Web Solutions', 'Modern websites, applications and powerful digital platforms.'],
            ['📈', 'Business Strategy', 'Strategic planning, consulting and marketing growth systems.']
          ].map((card, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,215,0,0.12)',
                borderRadius: '26px',
                padding: '40px',
                backdropFilter: 'blur(12px)',
                transition: '0.3s',
                boxShadow: '0 0 25px rgba(255,215,0,0.06)'
              }}
            >
              <div style={{ fontSize: '55px', marginBottom: '20px' }}>{card[0]}</div>
              <h3 style={{ color: '#FFD700', fontSize: '32px', marginBottom: '18px' }}>
                {card[1]}
              </h3>
              <p style={{ color: '#cccccc', lineHeight: '1.8', fontSize: '17px' }}>
                {card[2]}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
