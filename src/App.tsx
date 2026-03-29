/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Menu, 
  X, 
  Award, 
  Globe, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const departments = [
  { name: 'Bangla', icon: <BookOpen className="w-6 h-6" /> },
  { name: 'English', icon: <BookOpen className="w-6 h-6" /> },
  { name: 'Economics', icon: <Globe className="w-6 h-6" /> },
  { name: 'Political Science', icon: <Users className="w-6 h-6" /> },
  { name: 'Physics', icon: <Award className="w-6 h-6" /> },
  { name: 'Chemistry', icon: <Award className="w-6 h-6" /> },
  { name: 'Mathematics', icon: <Award className="w-6 h-6" /> },
  { name: 'Accounting', icon: <Award className="w-6 h-6" /> },
];

const notices = [
  { date: '25 Mar 2026', title: 'HSC Admission 2026 Notice for Selected Candidates' },
  { date: '22 Mar 2026', title: 'Honours 3rd Year Final Examination Schedule' },
  { date: '18 Mar 2026', title: 'Holiday Notice: Independence Day Celebration' },
  { date: '15 Mar 2026', title: 'Registration for Extra-Curricular Activities' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-college-blue text-white py-2 px-4 text-xs md:text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Phone className="w-3 h-3 mr-1" /> +880 2-9882261</span>
            <span className="flex items-center"><Mail className="w-3 h-3 mr-1" /> info@titumircollege.gov.bd</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-college-gold transition-colors">Student Portal</a>
            <a href="#" className="hover:text-college-gold transition-colors">Admin Login</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-college-blue rounded-full flex items-center justify-center text-white font-bold text-xl">T</div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-college-blue leading-tight">Government Titumir College</h1>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link text-college-blue font-semibold">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#academics" className="nav-link">Academics</a>
            <a href="#notices" className="nav-link">Notices</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button className="bg-college-blue text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-college-blue" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-gray-100 absolute top-full left-0 w-full z-40 shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              <a href="#home" className="text-lg font-medium text-college-blue" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="text-lg font-medium text-gray-600" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#academics" className="text-lg font-medium text-gray-600" onClick={() => setIsMenuOpen(false)}>Academics</a>
              <a href="#notices" className="text-lg font-medium text-gray-600" onClick={() => setIsMenuOpen(false)}>Notices</a>
              <a href="#gallery" className="text-lg font-medium text-gray-600" onClick={() => setIsMenuOpen(false)}>Gallery</a>
              <a href="#contact" className="text-lg font-medium text-gray-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <button className="bg-college-blue text-white px-5 py-3 rounded-lg text-center font-medium">
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/college-campus/1920/1080" 
              alt="Titumir College Campus" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-college-blue/90 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-white">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="inline-block px-3 py-1 bg-college-gold text-college-blue text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                Established 1968
              </span>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Shaping Futures, <br />
                <span className="text-college-gold italic font-serif">Empowering Minds</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
                Welcome to Government Titumir College, one of the most prestigious educational institutions in Bangladesh, dedicated to academic excellence and holistic development.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-college-blue px-8 py-3 rounded-full font-bold hover:bg-college-gold hover:text-white transition-all flex items-center">
                  Explore Programs <ChevronRight className="ml-2 w-4 h-4" />
                </button>
                <button className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all">
                  Virtual Tour
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Students', value: '30,000+' },
                { label: 'Departments', value: '22' },
                { label: 'Faculty Members', value: '250+' },
                { label: 'Campus Area', value: '11 Acres' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-college-blue mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About & Principal Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-college-blue mb-6">Our Legacy</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Government Titumir College is a renowned educational institution located in Mohakhali, Dhaka. Named after the legendary revolutionary Titumir, the college has been a beacon of knowledge since its inception in 1968.
                  </p>
                  <p>
                    We offer a wide range of undergraduate and postgraduate programs under the National University and the University of Dhaka. Our mission is to provide quality education that fosters critical thinking, creativity, and social responsibility.
                  </p>
                  <button className="text-college-blue font-bold flex items-center hover:text-college-gold transition-colors">
                    Read Full History <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-college-gold/10 rounded-full -z-10"></div>
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <img 
                    src="https://picsum.photos/seed/principal/200/200" 
                    alt="Principal" 
                    className="w-32 h-32 rounded-xl object-cover shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-college-blue mb-1">Prof. Dr. [Name]</h3>
                    <p className="text-college-gold font-medium mb-4">Principal, Govt. Titumir College</p>
                    <p className="text-gray-600 italic text-sm leading-relaxed">
                      "Our goal is to nurture the next generation of leaders who will contribute to the progress of our nation. We strive for academic excellence while maintaining a vibrant campus life."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academics Section */}
        <section id="academics" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Academic Departments</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                We offer diverse programs across various disciplines, providing students with a solid foundation for their professional careers.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {departments.map((dept, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="card p-8 text-center flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-college-blue mb-4 group-hover:bg-college-blue group-hover:text-white transition-all">
                    {dept.icon}
                  </div>
                  <h3 className="font-bold text-college-blue">{dept.name}</h3>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="border-2 border-college-blue text-college-blue px-8 py-3 rounded-full font-bold hover:bg-college-blue hover:text-white transition-all">
                View All Departments
              </button>
            </div>
          </div>
        </section>

        {/* Notice Board Section */}
        <section id="notices" className="py-20 bg-college-blue text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2 className="text-4xl font-bold mb-6">Notice Board</h2>
                <p className="text-white/70 mb-8">
                  Stay updated with the latest announcements, examination schedules, and college news.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-college-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Academic Calendar</p>
                    <p className="text-xs text-white/50">Session 2025-2026</p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="space-y-4">
                  {notices.map((notice, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all cursor-pointer flex justify-between items-center group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-college-gold text-college-blue p-2 rounded text-center min-w-[60px]">
                          <p className="text-xs font-bold uppercase">{notice.date.split(' ')[1]}</p>
                          <p className="text-lg font-bold leading-none">{notice.date.split(' ')[0]}</p>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg group-hover:text-college-gold transition-colors">{notice.title}</h3>
                          <p className="text-sm text-white/50 flex items-center mt-1">
                            <Clock className="w-3 h-3 mr-1" /> Posted 2 hours ago
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white" />
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8">
                  <button className="text-college-gold font-bold flex items-center hover:underline">
                    View All Notices <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Campus Life</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                A glimpse into the vibrant and diverse activities that make our campus a home away from home.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { seed: 'campus-1', span: 'col-span-2 row-span-2' },
                { seed: 'campus-2', span: 'col-span-1 row-span-1' },
                { seed: 'campus-3', span: 'col-span-1 row-span-1' },
                { seed: 'campus-4', span: 'col-span-1 row-span-1' },
                { seed: 'campus-5', span: 'col-span-1 row-span-1' },
              ].map((img, i) => (
                <div key={i} className={`${img.span} overflow-hidden rounded-xl group relative`}>
                  <img 
                    src={`https://picsum.photos/seed/${img.seed}/800/600`} 
                    alt="Campus Activity" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-college-blue/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-college-blue p-3 rounded-full shadow-lg">
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold text-college-blue mb-8">Get In Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-college-blue shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Address</h4>
                      <p className="text-gray-600">Bir Uttam AK Khandakar Road, Mohakhali, Dhaka-1212, Bangladesh</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-college-blue shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Phone</h4>
                      <p className="text-gray-600">+880 2-9882261, +880 2-9882262</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-college-blue shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Email</h4>
                      <p className="text-gray-600">info@titumircollege.gov.bd</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {[Facebook, Twitter, Instagram].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-college-blue hover:bg-college-blue hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-college-blue mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-college-blue focus:ring-1 focus:ring-college-blue outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-college-blue focus:ring-1 focus:ring-college-blue outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Subject</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-college-blue focus:ring-1 focus:ring-college-blue outline-none transition-all" placeholder="Admission Inquiry" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-college-blue focus:ring-1 focus:ring-college-blue outline-none transition-all" placeholder="How can we help you?"></textarea>
                  </div>
                  <button className="w-full bg-college-blue text-white py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-college-blue text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-college-blue font-bold text-xl">T</div>
                <h2 className="text-xl font-bold">Govt. Titumir College</h2>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                A premier educational institution dedicated to excellence in teaching, learning, and research.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-college-gold uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Academic Calendar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Exam Results</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Library Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Scholarships</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Alumni Network</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-college-gold uppercase tracking-widest text-sm">Departments</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Faculty of Arts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Faculty of Science</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Faculty of Commerce</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Social Science</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-college-gold uppercase tracking-widest text-sm">Newsletter</h4>
              <p className="text-sm text-white/60 mb-4">Subscribe to get the latest news and notices.</p>
              <div className="flex">
                <input type="email" placeholder="Email" className="bg-white/10 border border-white/10 rounded-l-lg px-4 py-2 outline-none focus:bg-white/20 transition-all w-full" />
                <button className="bg-college-gold text-college-blue px-4 py-2 rounded-r-lg font-bold">Join</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
            <p>© 2026 Government Titumir College. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
