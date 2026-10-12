import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Cpu, Server, Mail, Phone, Menu, ArrowRight, ChevronLeft, ChevronRight, Maximize2, Award, X, Sparkles, Layers } from 'lucide-react';
import { WorksWheel as ShadcnWorksWheel } from '@/components/ui/works-wheel';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

function Loader() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', backgroundColor: '#000000' }}>
      <div className="cube-loader-container">
        <div className="cube-loader">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face right"></div>
          <div className="cube-face left"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.8, repeatType: 'reverse' }}
        style={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-mono)', fontSize: '1rem', letterSpacing: '6px', marginTop: '60px' }}
      >
        LOADING...
      </motion.div>
    </div>
  );
}

function IntroScreen() {
  return (
    <div style={{ textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <p style={{ color: '#000000', letterSpacing: '0.2em', marginBottom: '1rem', fontSize: '1.2rem', fontFamily: 'serif' }}>
          WELCOME TO THE PORTFOLIO OF
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
      >
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          margin: 0,
          color: '#000000',
          fontFamily: 'serif',
          fontWeight: 'normal'
        }}>
          Purin Chiwhakan
        </h1>
      </motion.div>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="logo">PORTFOLIO</div>
      <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
        <Menu />
      </button>
      <ul className={isOpen ? 'active' : ''}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home">
      {/* รูปพื้นหลัง และ อะตอมลอยบนมือ อยู่ใน container เดียวกัน เพื่อให้ลูกบอลล็อกติดกับมือเสมอทุกขนาดหน้าจอ */}
      <div className="hero-photo-container">
        <img src="/profile.png" alt="" className="hero-bg-photo" aria-hidden="true" />
        <div className="hero-photo-gradient" aria-hidden="true"></div>
        <div className="atom-wrapper">
          <div className="atom-scene">
            <div className="nucleus-core"></div>
            <div className="orbit-path path1">
              <div className="electron-wrap counter1">
                <div className="electron-icon"><Monitor size={22} /></div>
              </div>
            </div>
            <div className="orbit-path path2">
              <div className="electron-wrap counter2">
                <div className="electron-icon"><Cpu size={22} /></div>
              </div>
            </div>
            <div className="orbit-path path3">
              <div className="electron-wrap counter3">
                <div className="electron-icon"><Server size={22} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ชื่อเล่นพื้นหลังวิ่งแบบป้ายไฟ Marquee เหมือนโฆษณา */}
      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          <span>Purin Chiwhakan</span>
          <span className="marquee-dot"></span>
          <span>Purin Chiwhakan</span>
          <span className="marquee-dot"></span>
          <span>Purin Chiwhakan</span>
          <span className="marquee-dot"></span>
          <span>Purin Chiwhakan</span>
          <span className="marquee-dot"></span>
        </div>
        <div className="hero-marquee-track" aria-hidden="true">
          <span>Purin Chiwhakan</span>
          <span className="marquee-dot"></span>
          <span>Purin Chiwhakan</span>
          <span className="marquee-dot"></span>
          <span>Purin Chiwhakan</span>
          <span className="marquee-dot"></span>
          <span>Purin Chiwhakan</span>
          <span className="marquee-dot"></span>
        </div>
      </div>

      {/* ข้อความ overlay ล่างซ้าย */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="tagline">Hello, I'm</div>
        <h1>ภูรินทร์ ชิวหากาญจน์</h1>
        <h2>Don’t say you can’t do it if you haven’t even tried.</h2>
        <p className="desc">
          ผมชื่อภูรินทร์ นักเรียนชั้น ม.6 ที่สนใจด้าน AI,
          <br />ชอบเขียนโค้ดเพื่อแก้ไขปัญหาในชีวิตประจำวัน
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View selected projects ↗</a>
          <a href="#about" className="btn-secondary">About me →</a>
        </div>
      </motion.div>

      {/* info bar ด้านล่าง */}
      <div className="hero-bottom-bar">
        <div className="hero-bottom-left">
          <strong>M.6 Student</strong>
          <p>AI, Robotics &amp; Embedded Systems</p>
          <p>Nakhon Si Thammarat, Thailand</p>
        </div>
        <div className="hero-scroll">
          SCROLL TO EXPLORE ↓
        </div>
        <div className="hero-bottom-right">
          <p>Portfolio 2026</p>
          <strong>Purin Chiwhakan</strong>
        </div>
      </div>
    </section>
  );
}


function SplineSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const hideWatermark = () => {
      const viewer = containerRef.current?.querySelector('spline-viewer');
      if (viewer && viewer.shadowRoot) {
        if (!viewer.shadowRoot.querySelector('#hide-spline-logo-style')) {
          const style = document.createElement('style');
          style.id = 'hide-spline-logo-style';
          style.textContent = `
            #logo {
              display: none !important;
              opacity: 0 !important;
              pointer-events: none !important;
              visibility: hidden !important;
              width: 0 !important;
              height: 0 !important;
              overflow: hidden !important;
            }
          `;
          viewer.shadowRoot.appendChild(style);
        }
        const logo = viewer.shadowRoot.querySelector('#logo');
        if (logo) {
          logo.style.setProperty('display', 'none', 'important');
          logo.remove();
        }
      }
    };

    hideWatermark();
    const interval = setInterval(hideWatermark, 100);
    const timeout = setTimeout(() => clearInterval(interval), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section id="robot-scene" className="spline-fullscreen-section" ref={containerRef}>
      <spline-viewer url="https://prod.spline.design/t9IlFAfFGTt6p8Hj/scene.splinecode"></spline-viewer>
      <div className="spline-blur-top" aria-hidden="true"></div>
      <div className="spline-fade-top" aria-hidden="true"></div>
      <div className="spline-blur-bottom" aria-hidden="true"></div>
      <div className="spline-fade-bottom" aria-hidden="true"></div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="container">
      <h2 className="section-title">01. AboutMe & Education</h2>
      <div className="grid">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 style={{ marginBottom: '1rem', color: '#ffffff' }}>ประวัติย่อ</h3>
          <p>ผมชื่อ นายภูรินทร์ ชิวหากาญจน์ กำลังศึกษาอยู่ชั้นมัธยมศึกษาปีที่ 6 โรงเรียนพรหมคีรีพิทยาคม แผนการเรียนวิทย์-คณิต </p>
          <br />
          <p><strong>จุดแข็ง / สิ่งที่ชอบทำ:</strong> ชอบเขียนโค้ดเพื่อแก้ไขปัญหาในชีวิตประจำวัน, สนใจด้าน AI หรือ Web Development, ชอบเรียนรู้เทคโนโลยีใหม่ๆ</p>
          <br />
          <h3 style={{ marginBottom: '0.5rem', marginTop: '1rem', color: '#ffffff' }}>
            Statement of Purpose
          </h3>
          <p>ผมสนใจคอมพิวเตอร์และการเขียนโปรแกรม ชอบเรียนรู้ผ่านการลงมือทำและแก้ปัญหาด้วยตนเอง มีประสบการณ์พัฒนาโครงงาน DriverCare อุปกรณ์ช่วยแจ้งเตือนอาการง่วงขณะขับรถ และระบบจองห้องประชุมสำหรับโรงเรียน ผมมีความตั้งใจศึกษาต่อสาขาวิทยาการคอมพิวเตอร์ เพื่อพัฒนาความรู้ด้านซอฟต์แวร์ AI และCybersecurity โดยมุ่งหวังที่จะสร้างเทคโนโลยีที่ใช้งานได้จริงและเป็นประโยชน์ต่อผู้อื่น</p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 style={{ marginBottom: '1.5rem', color: '#ffffff' }}>ประวัติการศึกษา</h3>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">202X - Present</span>
              <h4>โรงเรียนพรหมคีรีพิทยาคม</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>แผนการเรียน: วิทยาศาสตร์ - คณิตศาสตร์</p>
              <p style={{ marginTop: '0.5rem' }}><strong>GPAX:</strong> 3.60</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}></p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">201X - 202X</span>
              <h4>โรงเรียนพรหมคีรีพิทยาคม</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>ระดับชั้นมัธยมศึกษาตอนต้น</p>
              <p style={{ marginTop: '0.5rem' }}><strong>GPAX:</strong> 3.51</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'ระบบจองห้องประชุมออนไลน์',
      desc: 'ระบบจองห้องประชุมออนไลน์ สร้างเพื่อเพิ่มความสะดวกในการจองห้องประชุมเเละลดขั้นตอนในการจอง',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      link: 'ดูผลงาน',
      url: 'https://my-booking-system-xi.vercel.app',
      image: '/project-booking.png'
    },
    {
      title: 'DriverCare',
      desc: 'อุปกรณ์เเจ้งเตือนเพื่อป้องกันอุบัติเหตุหลับในขณะขับรถ',
      tech: ['Python', 'OpenCV', 'Raspberry Pi'],
      link: 'ดูผลงาน (GitHub)',
      url: 'https://github.com/chiwhakanpurin-alt/DriverCare',
      image: '/project-drivercare.jpg'
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">02. Projects</h2>
      <div className="grid">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            {proj.image ? (
              <img src={proj.image} alt={proj.title} className="project-img" />
            ) : (
              <div className="project-img">[Project {i + 1} Screenshot]</div>
            )}
            <h3>{proj.title}</h3>
            <p style={{ fontSize: '0.95rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
              {proj.desc}
            </p>
            <div className="tech-stack">
              {proj.tech.map((t, idx) => (
                <span key={idx} className="tech-chip">{t}</span>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <a
                href={proj.url || '#'}
                target={proj.url && proj.url !== '#' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.92rem', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'all 0.25s ease' }}
              >
                <ArrowRight size={16} /> {proj.link}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const CERTIFICATES_DATA = [
  {
    id: 1,
    title: 'Thai Science Camp #18 (Participation)',
    org: 'สมาคมวิทยาศาสตร์แห่งประเทศไทยฯ ร่วมกับ อพวช.',
    badge: 'ค่ายระดับประเทศ',
    date: '31 พ.ค. - 3 มิ.ย. 2569',
    image: '/certificates/cert-1.png',
    href: '#cert-1',
  },
  {
    id: 2,
    title: 'รางวัลการนำเสนอดีเด่น (BrainSole)',
    org: 'สาขา ปัญญาประดิษฐ์ (AI) | Thai Science Camp #18',
    badge: 'รางวัลนำเสนอดีเด่น',
    date: '3 มิ.ย. 2569',
    image: '/certificates/cert-2.png',
    href: '#cert-2',
  },
  {
    id: 3,
    title: 'รางวัลเหรียญทอง ชนะเลิศ (ระดับชาติ)',
    org: 'สิ่งประดิษฐ์ทางวิทยาศาสตร์ ม.4 - ม.6 (สพม. นศ.)',
    badge: 'ชนะเลิศ เหรียญทอง',
    date: 'งานศิลปหัตถกรรมนักเรียน ครั้งที่ 72',
    image: '/certificates/cert-3.jpg',
    href: '#cert-3',
  },
  {
    id: 4,
    title: 'Outstanding Project Presenting',
    org: 'Thailand-Japan Student Science Fair 2025 (TJSSF)',
    badge: 'ระดับนานาชาติ (TJSSF)',
    date: '16 - 20 December 2025',
    image: '/certificates/cert-4.jpg',
    href: '#cert-4',
  },
  {
    id: 5,
    title: 'รางวัลเหรียญทอง ชนะเลิศ (ระดับชาติ)',
    org: 'สิ่งประดิษฐ์ทางวิทยาศาสตร์ ม.4 - ม.6 (สพม. นศ.)',
    badge: 'ชนะเลิศ เหรียญทอง',
    date: 'งานศิลปหัตถกรรมนักเรียน ครั้งที่ 71',
    image: '/certificates/cert-5.jpg',
    href: '#cert-5',
  },
  {
    id: 6,
    title: 'โล่รางวัลเกียรติยศ TJSSF 2025',
    org: 'Thailand - Japan Youth Friendship Trophy',
    badge: 'โล่รางวัลเกียรติยศ',
    date: 'Princess Chulabhorn Science High School',
    image: '/certificates/cert-6.jpg',
    href: '#cert-6',
  },
];

function WorksWheel() {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleCardClick = (e) => {
    const link = e.target.closest('a');
    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href');
      const item = CERTIFICATES_DATA.find((c) => c.href === href);
      if (item) setSelectedCert(item);
    }
  };

  return (
    <section id="certificates" className="container wheel-compact-section">
      <div className="wheel-compact-header">
        <h2 className="section-title">03. Certificates & Honors</h2>
        <p className="wheel-hint">
          ✦ เลื่อน Scroll Wheel หรือลากนิ้ว/เมาส์เพื่อหมุนดูเกียรติบัตร (คลิกที่ภาพเพื่อดูภาพขยาย)
        </p>
      </div>

      <div className="wheel-compact-wrapper">
        <div className="wheel-compact-stage" onClickCapture={handleCardClick}>
          <ShadcnWorksWheel
            items={CERTIFICATES_DATA}
            label="HONORS '25-26"
            action="Zoom"
            showIndex={false}
            showTitle={false}
            className="h-full w-full"
          />
        </div>
      </div>

      {/* Lightbox Modal for Full Image Zoom */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="cert-modal-content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="cert-modal-close"
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="cert-modal-img"
              />
              <div className="cert-modal-meta">
                <h3>{selectedCert.title}</h3>
                <p>{selectedCert.org || ''}</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                  {selectedCert.date || 'Certificate / Award Archive'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="container">
      <h2 className="section-title">04. Contact</h2>
      <motion.div
        className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
      >
        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Get In Touch</h3>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
          หากสนใจในโปรไฟล์ของผม หรือต้องการสอบถามข้อมูลเพิ่มเติม สามารถติดต่อได้ตามช่องทางด้านล่างนี้เลยครับ
        </p>

        <div className="contact-links" style={{ justifyContent: 'center' }}>
          <a href="mailto:chiwhakanpurin@gmail.com">
            <Mail size={19} /> chiwhakanpurin@gmail.com
          </a>
          <a href="tel:0994272997">
            <Phone size={19} /> 099-427-2997
          </a>
          <a href="https://github.com/chiwhakanpurin-alt" target="_blank" rel="noopener noreferrer">
            <GithubIcon /> chiwhakanpurin-alt
          </a>
          <a href="https://instagram.com/puri.n001" target="_blank" rel="noopener noreferrer">
            <InstagramIcon /> Puri.n001
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function App() {
  const [appState, setAppState] = useState('loading'); // 'loading' | 'intro' | 'home'

  useEffect(() => {
    if (appState === 'loading') {
      const timer = setTimeout(() => {
        setAppState('intro');
      }, 3500);
      return () => clearTimeout(timer);
    } else if (appState === 'intro') {
      const timer = setTimeout(() => {
        setAppState('home');
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [appState]);

  return (
    <>
      <div className="pcb-bg"></div>

      <AnimatePresence>
        {(appState === 'loading' || appState === 'intro') && (
          <motion.div
            key="white-bg"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: 'fixed',
              top: 0, left: 0,
              zIndex: 9999,
              width: '100%',
              height: '100%',
              background: appState === 'loading' ? '#000000' : '#ffffff',
              transition: 'background 0.5s ease',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <AnimatePresence mode="wait">
              {appState === 'loading' && (
                <motion.div
                  key="loader"
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <Loader />
                </motion.div>
              )}
              {appState === 'intro' && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <IntroScreen />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {appState === 'home' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <Hero />
          <SplineSection />
          <About />
          <Projects />
          <WorksWheel />
          <Contact />

          <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <p className="mono">&copy; 2026 ภูรินทร์ ชิวหากาญจน์. Built with React & Vite for CS Application.</p>
          </footer>
        </motion.div>
      )}
    </>
  );
}

export default App;
