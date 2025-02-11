import React, { useState } from 'react';
import { Instagram, Mail, MapPin, Phone, Clock, Palette, Shield, Sparkles, MessageCircle, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80"
            alt="Tattoo Studio"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30">
          <nav className="container mx-auto px-6 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl md:text-3xl font-bold animate-fade-in">ROKUBI</h1>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:flex gap-8">
                <a href="#about" className="hover:text-gray-300 transition-colors duration-300">About</a>
                <a href="#services" className="hover:text-gray-300 transition-colors duration-300">Services</a>
                <a href="#gallery" className="hover:text-gray-300 transition-colors duration-300">Gallery</a>
                <a href="#contact" className="hover:text-gray-300 transition-colors duration-300">Contact</a>
              </div>

              {/* Mobile Menu */}
              <div className={`fixed inset-0 bg-black/95 z-40 md:hidden transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
                  <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300 transition-colors duration-300">About</a>
                  <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300 transition-colors duration-300">Services</a>
                  <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300 transition-colors duration-300">Gallery</a>
                  <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300 transition-colors duration-300">Contact</a>
                </div>
              </div>
            </div>
          </nav>
          <div className="container mx-auto px-6 h-[calc(100vh-88px)] flex items-center">
            <div className="max-w-2xl animate-slide-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">ROKUBI TATTOO</h2>
              <p className="text-lg md:text-xl mb-8">Premium tattoo studio in Kharkiv, where art meets skin.</p>
              <a 
                href="#contact" 
                className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 animate-pulse-slow"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <Palette className="w-12 h-12 animate-float" />
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Designs</h3>
              <p className="text-gray-400">Unique artwork tailored to your vision and personality</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <Shield className="w-12 h-12 animate-float" />
              </div>
              <h3 className="text-xl font-bold mb-4">Safety First</h3>
              <p className="text-gray-400">Sterile environment and professional equipment</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <Sparkles className="w-12 h-12 animate-float" />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Artists</h3>
              <p className="text-gray-400">Experienced professionals with unique styles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80" alt="Tattoo 1" className="w-full h-80 object-cover rounded-lg" />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1560707854-fb9a10eed19f?auto=format&fit=crop&q=80" alt="Tattoo 2" className="w-full h-80 object-cover rounded-lg" />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1612459284970-e8f027596582?auto=format&fit=crop&q=80" alt="Tattoo 3" className="w-full h-80 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                <MapPin className="w-6 h-6" />
                <p>Kharkiv, Ukraine</p>
              </div>
              <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                <Phone className="w-6 h-6" />
                <p>+380 XX XXX XXXX</p>
              </div>
              <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                <Mail className="w-6 h-6" />
                <p>info@rokubi.com</p>
              </div>
              <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                <Clock className="w-6 h-6" />
                <p>Mon-Sat: 11:00 - 20:00</p>
              </div>
              <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                <Instagram className="w-6 h-6" />
                <a href="https://instagram.com" className="hover:text-gray-300">@rokubi.tattoo</a>
              </div>
            </div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors duration-300"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors duration-300"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Rokubi Tattoo Studio. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating Telegram Button */}
      <a
        href="https://t.me/Bobby0_0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#0088cc] p-4 rounded-full shadow-lg hover:bg-[#0077b5] transition-all duration-300 transform hover:scale-110 hover:rotate-12 z-50 animate-float"
        aria-label="Contact on Telegram"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;