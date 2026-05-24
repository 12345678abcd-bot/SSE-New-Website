export default function SakthiEnterpriseWebsite() {
  return (
    <div style={{ background: '#050505', color: 'white', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,215,0,0.2)',
        zIndex: 1000,
        padding: '18px 40px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ color: '#FFD700', margin: 0, fontSize: '32px', fontWeight: 'bold' }}>
            Sri Sakthi Enterprise
          </h1>

          <div style={{ display: 'flex', gap: '25px' }}>
            <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
            <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
            <a href="#services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
            <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 20px',
        background: 'linear-gradient(135deg,#000000,#111111,#1a1200)'
      }}>
        <div style={{ maxWidth: '900px' }}>
          <div style={{
            display: 'inline-block',
            padding: '10px 20px',
            border: '1px solid rgba(255,215,0,0.3)',
            borderRadius: '50px',
            color: '#FFD700',
            marginBottom: '25px'
          }}>
            Creative Ideas • Powerful Results
          </div>

          <h1 style={{
            fontSize: '72px',
            marginBottom: '25px',
            lineHeight: '1.1'
          }}>
            We Create <span style={{ color: '#FFD700' }}>Stories That Sell</span>
          </h1>

          <p style={{
            fontSize: '22px',
            color: '#cccccc',
            lineHeight: '1.7',
            marginBottom: '40px'
          }}>
            Advertising Films • IT Solutions • Digital Marketing • Branding & Design
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '16px 35px',
              borderRadius: '14px',
              border: 'none',
              background: '#FFD700',
              color: 'black',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer'
            }}>
              Get Started
            </button>

            <button style={{
              padding: '16px 35px',
              borderRadius: '14px',
              border: '1px solid #FFD700',
              background: 'transparent',
              color: '#FFD700',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer'
            }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section id="about" style={{ padding: '100px 30px', background: '#0b0b0b' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '50px', textAlign: 'center', marginBottom: '25px' }}>
            About <span style={{ color: '#FFD700' }}>Us</span>
          </h2>

          <p style={{
            color: '#bbbbbb',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 60px auto',
            lineHeight: '1.8',
            fontSize: '19px'
          }}>
            Sri Sakthi Enterprise Pvt Ltd delivers premium advertising films, website development,
            branding solutions, social media marketing, promotional campaigns, and creative media production.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
            gap: '25px'
          }}>
            {[
              ['50+', 'Projects Completed'],
              ['24/7', 'Support Available'],
              ['100%', 'Client Satisfaction'],
              ['5★', 'Professional Service']
            ].map((item, i) => (
              <div key={i} style={{
                background: '#111111',
                border: '1px solid rgba(255,215,0,0.2)',
                padding: '35px',
                borderRadius: '22px',
                textAlign: 'center',
                boxShadow: '0 0 25px rgba(255,215,0,0.08)'
              }}>
                <h3 style={{ color: '#FFD700', fontSize: '42px', marginBottom: '10px' }}>{item[0]}</h3>
                <p style={{ color: '#cccccc' }}>{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" style={{ padding: '100px 30px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '50px', textAlign: 'center', marginBottom: '20px' }}>
            Our <span style={{ color: '#FFD700' }}>Services</span>
          </h2>

          <p style={{ textAlign: 'center', color: '#bbbbbb', marginBottom: '60px', fontSize: '18px' }}>
            Premium business and creative solutions designed for modern brands.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: '30px'
          }}>
            {[
              ['🎬', 'Advertising Films', 'Brand films, TV commercials, cinematic production and promotional videos.'],
              ['💻', 'IT Solutions', 'Website development, software systems and app development solutions.'],
              ['📈', 'Digital Marketing', 'Meta Ads, Google Ads, social media growth and lead generation.']
            ].map((service, i) => (
              <div key={i} style={{
                background: '#111111',
                padding: '40px',
                borderRadius: '24px',
                border: '1px solid rgba(255,215,0,0.15)',
                transition: '0.3s',
                boxShadow: '0 0 25px rgba(255,215,0,0.05)'
              }}>
                <div style={{ fontSize: '55px', marginBottom: '20px' }}>{service[0]}</div>
                <h3 style={{ fontSize: '30px', marginBottom: '15px', color: '#FFD700' }}>{service[1]}</h3>
                <p style={{ color: '#cccccc', lineHeight: '1.7' }}>{service[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: '100px 30px', background: '#0b0b0b' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '50px', marginBottom: '20px' }}>
            Contact <span style={{ color: '#FFD700' }}>Us</span>
          </h2>

          <p style={{ color: '#bbbbbb', marginBottom: '50px', fontSize: '18px' }}>
            Ready to build your brand and grow your business?
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
            gap: '25px'
          }}>
            {[
              ['📧', 'abc@gmail.com'],
              ['📞', '+91 73054 99930'],
              ['📍', 'Chennai, Tamil Nadu']
            ].map((contact, i) => (
              <div key={i} style={{
                background: '#111111',
                padding: '35px',
                borderRadius: '22px',
                border: '1px solid rgba(255,215,0,0.2)'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>{contact[0]}</div>
                <p style={{ color: '#cccccc', fontSize: '18px' }}>{contact[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{
        padding: '30px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,215,0,0.1)',
        color: '#888888'
      }}>
        © 2026 Sri Sakthi Enterprise Pvt Ltd • Creative Ideas. Powerful Results.
      </footer>
    </div>
  );
}
