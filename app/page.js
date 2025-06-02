import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Unlimited performance marketing.<br /> One flat monthly fee.</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          LaunchCore helps DTC brands scale faster with ROI-driven media buying, lifecycle marketing, and high-converting creative.
        </p>
        <a
          href="#contact"
          className="px-8 py-4 bg-white text-black text-lg font-semibold rounded hover:bg-gray-200 transition"
        >
          Get Started →
        </a>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div>
            <h3 className="font-bold text-xl mb-3">Paid Social</h3>
            <p className="text-gray-700">High-ROAS campaigns across Meta, TikTok, and Google. Creative testing, scaling, retargeting.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">Lifecycle Marketing</h3>
            <p className="text-gray-700">Email & SMS strategy and execution. Flows, campaigns, retention tactics powered by Klaviyo.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">CRO & Landing Pages</h3>
            <p className="text-gray-700">Optimize conversions through custom landing pages, A/B testing, and funnel audits.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-gray-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Why LaunchCore?</h2>
          <p className="text-gray-700">
            We're a team of performance marketers and creatives based in Hong Kong, helping eCommerce brands grow profitably. We don't just run ads – we drive results.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-8">Want to scale your brand? Let's talk. We'll audit your current setup and show you what's possible.</p>
          <a
            href="mailto:support@launchcore.com"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 text-lg"
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
