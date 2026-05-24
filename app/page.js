export default function SakthiEnterpriseWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide text-yellow-400">
            Sakthi Enterprise
          </h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#home" className="hover:text-yellow-400 transition">Home</a>
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#services" className="hover:text-yellow-400 transition">Services</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-black to-black" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="inline-block px-4 py-2 mb-6 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-300 text-sm">
            Trusted Enterprise Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Building Modern
            <span className="text-yellow-400"> Business Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
            Sakthi Enterprise delivers innovative services, digital solutions,
            and business growth strategies for companies and creators.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 rounded-2xl bg-yellow-400 text-black font-bold hover:scale-105 transition">
              Get Started
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/20 hover:border-yellow-400 hover:text-yellow-400 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-yellow-400">Us</span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Sakthi Enterprise is focused on delivering high-quality business
              services with professionalism, innovation, and reliability.
              We help brands, startups, and creators grow through smart digital
              solutions and strategic support.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our mission is to create long-term value for clients by combining
              technology, creativity, and strong customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-4xl font-black text-yellow-400 mb-2">50+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-4xl font-black text-yellow-400 mb-2">24/7</h3>
              <p className="text-gray-300">Support Available</p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-4xl font-black text-yellow-400 mb-2">100%</h3>
              <p className="text-gray-300">Client Focused</p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-4xl font-black text-yellow-400 mb-2">5★</h3>
              <p className="text-gray-300">Professional Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-yellow-400">Services</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            Professional solutions designed to help businesses grow faster and
            operate smarter.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-zinc-900 border border-white/10 hover:border-yellow-400/40 transition hover:-translate-y-2">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-gray-400 leading-relaxed">
                Social media growth, branding, promotions, and online presence
                management.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900 border border-white/10 hover:border-yellow-400/40 transition hover:-translate-y-2">
              <div className="text-5xl mb-6">💻</div>
              <h3 className="text-2xl font-bold mb-4">Web Solutions</h3>
              <p className="text-gray-400 leading-relaxed">
                Modern websites, business platforms, landing pages, and digital
                systems.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900 border border-white/10 hover:border-yellow-400/40 transition hover:-translate-y-2">
              <div className="text-5xl mb-6">📈</div>
              <h3 className="text-2xl font-bold mb-4">Business Growth</h3>
              <p className="text-gray-400 leading-relaxed">
                Strategic planning and consulting solutions for startups and
                enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-14">
            Why Choose <span className="text-yellow-400">Sakthi Enterprise</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-3xl bg-black border border-white/10">
              <h3 className="text-xl font-bold mb-4">Professional Team</h3>
              <p className="text-gray-400">
                Skilled experts focused on delivering quality and efficiency.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-black border border-white/10">
              <h3 className="text-xl font-bold mb-4">Modern Technology</h3>
              <p className="text-gray-400">
                We use modern tools and innovative strategies to maximize
                results.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-black border border-white/10">
              <h3 className="text-xl font-bold mb-4">Customer First</h3>
              <p className="text-gray-400">
                Every project is tailored to client goals and long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Contact <span className="text-yellow-400">Us</span>
          </h2>

          <p className="text-gray-400 mb-12">
            Ready to work with us? Reach out today and let's build something
            amazing together.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-3xl bg-zinc-900 border border-white/10">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">contact@sakthienterprise.com</p>
            </div>

            <div className="p-6 rounded-3xl bg-zinc-900 border border-white/10">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">+91 98765 43210</p>
            </div>

            <div className="p-6 rounded-3xl bg-zinc-900 border border-white/10">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-gray-400 text-sm">Chennai, Tamil Nadu</p>
            </div>
          </div>

          <form className="grid gap-6 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-2xl bg-zinc-900 border border-white/10 outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-2xl bg-zinc-900 border border-white/10 outline-none focus:border-yellow-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-4 rounded-2xl bg-zinc-900 border border-white/10 outline-none focus:border-yellow-400"
            />

            <button className="px-8 py-4 rounded-2xl bg-yellow-400 text-black font-bold hover:scale-105 transition w-full md:w-fit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Sakthi Enterprise. All rights reserved.
      </footer>
    </div>
  );
}
