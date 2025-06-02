export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="p-6 border-b shadow-sm flex justify-between items-center">
        <h1 className="text-2xl font-bold">LaunchCore Limited</h1>
        <nav className="space-x-6 text-sm">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-24 px-6 text-center bg-gray-50">
        <h2 className="text-4xl font-bold mb-4">Where bold ideas meet performance marketing</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          LaunchCore is a performance-driven agency helping eCommerce brands grow with precision. Based in Hong Kong, operating globally.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-10 text-center">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div>
            <h4 className="font-bold text-lg mb-2">Facebook Ads</h4>
            <p>ROI-focused campaigns with creative testing, scaling, and funnel strategy.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Email Marketing</h4>
            <p>Klaviyo flows & campaigns that convert new customers and retain existing ones.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">eCommerce Consulting</h4>
            <p>Data-backed strategies to grow your brand efficiently across channels.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">About LaunchCore</h3>
          <p>
            Founded in Hong Kong, LaunchCore empowers modern eCommerce brands by combining performance marketing with sharp creative execution. Our mission is to make growth predictable and scalable.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-8 text-gray-600">Want to grow your brand? Reach out to us for a free consultation.</p>
          <a
            href="mailto:support@launchcore.com"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LaunchCore Limited. All rights reserved.
      </footer>
    </main>
  );
}

