import React, { useState, useEffect } from "react";

export default function App() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const scrolled = (scrollY / totalHeight) * 100;
      const bar = document.getElementById('scroll-bar');
      if (bar) bar.style.width = `${scrolled}%`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transition = `all 0.7s ease-out ${index * 100}ms`;
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('section *:not(h2)').forEach((sec, index) => {
      sec.style.opacity = 0;
      sec.style.transform = 'translateY(50px)';
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const section = document.getElementById(activeTab);
    if (section) {
      section.style.opacity = 0;
      section.style.transition = "none";
      section.style.transform = "translateX(50px)";
      setTimeout(() => {
        section.style.transition = "all 0.6s ease";
        section.style.opacity = 1;
        section.style.transform = "translateX(0)";
      }, 100);
    }
  }, [activeTab]);

  const tabStyle = (id) => ({
    padding: "0.75rem 1.25rem",
    margin: "0 0.5rem",
    backgroundColor: activeTab === id ? "#1a73e8" : "#ffffff",
    color: activeTab === id ? "#ffffff" : "#1a73e8",
    border: "2px solid #1a73e8",
    borderRadius: "999px",
    cursor: "pointer",
    transition: "all 0.3s ease"
  });

  const [darkMode, setDarkMode] = useState(false);

  const divider = () => <hr style={{ border: 0, height: '1px', background: 'linear-gradient(to right, transparent, #ccc, transparent)', margin: '3rem 0' }} />;

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', background: darkMode ? '#121212' : 'linear-gradient(to bottom right, #f0f4fc, #ffffff)', minHeight: '100vh', color: darkMode ? '#e0e0e0' : '#202124', display: 'flex', flexDirection: 'column' }}>
      <button onClick={() => setDarkMode(!darkMode)} style={{ position: 'fixed', top: 10, right: 10, zIndex: 1000, background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#333', border: '1px solid #ccc', borderRadius: '5px', padding: '0.5rem 1rem', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
        {darkMode ? '☀️ Light' : '🌙 Dark'} Mode
      </button>

            <header style={{
        backgroundColor: '#1a73e8',
        color: 'white',
        padding: '1.5rem 1rem',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(135deg, #1a73e8, #3c8ce7, #6a11cb)',
        backgroundSize: '200% 200%',
        animation: 'pulseHeader 10s ease-in-out infinite, gradientShift 12s linear infinite',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        borderBottomLeftRadius: '2rem',
        borderBottomRightRadius: '2rem',
        overflow: 'hidden',
        position: 'relative'
      }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: '-10%',
        width: '120%',
        height: '100%',
        background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1), transparent 70%)',
        zIndex: 0,
        animation: 'floatBg 5s ease-in-out infinite'
      }}></div>
      <h1 style={{ fontSize: '3rem', margin: '0.25rem 0', position: 'relative', zIndex: 1, transition: 'transform 0.5s ease', background: 'linear-gradient(90deg, #ffffff, #dfe9f3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>Yogeshwar Nair</h1>
        <p style={{ fontSize: '1.25rem', marginTop: '0.25rem', position: 'relative', zIndex: 1 }}>Lead React Native & React Developer</p>
      
<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0 }}>
  {Array.from({ length: 5 }).map((_, i) => (
    <div key={`bubble-${i}`} style={{
      position: 'absolute',
      width: '20px', height: '20px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(4px)', boxShadow: '0 0 12px rgba(255,255,255,0.3)',
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animation: 'bubbleFloat 12s ease-in-out infinite',
      animationDelay: `${Math.random() * 5}s`
    }} />
  ))}
</div>
</header>

      <nav style={{
  marginTop: '2rem',
  padding: '0 1rem',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1rem',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none'
}}>
  <style>{`
  nav::-webkit-scrollbar {
    display: none;
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes floatBg {
    0% { transform: translateY(0); opacity: 0.5; }
    50% { transform: translateY(-10px); opacity: 0.7; }
    100% { transform: translateY(0); opacity: 0.5; }
  }

  @keyframes bubbleFloat {
    0% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0); }
  }

  @keyframes pulseHeader {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.015); }
  }

  @keyframes scrollProgress {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }

  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(40px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`}</style>
  {['about', 'experience', 'skills', 'certifications', 'projects', 'contact'].map(tab => (
    <button
      key={tab}
      style={{ padding: '0.75rem 1.25rem', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'capitalize',
        background: activeTab === tab ? 'linear-gradient(145deg, #1a73e8, #3c8ce7)' : '#ffffff',
        color: activeTab === tab ? '#ffffff' : '#1a73e8',
        border: activeTab === tab ? '2px solid #1a73e8' : '2px solid #d2e3fc',
        borderRadius: '999px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        flex: '0 0 auto'
      }}
      onClick={() => setActiveTab(tab)}
    >
      {tab.charAt(0).toUpperCase() + tab.slice(1)}
    </button>
  ))}
</nav>

      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '4px', background: 'rgba(0,0,0,0.1)', zIndex: 999 }}>
  <div id="scroll-bar" style={{ height: '100%', width: '0%', background: '#1a73e8', transformOrigin: 'left', transform: 'scaleX(0)', animation: 'scrollProgress 0.25s ease-out forwards' }}></div>
</div>
<main style={{ flex: 1, padding: '2rem 1.5rem' }}>
        {activeTab === "about" && (
          <section id="about" style={sectionStyle()}>
            <h2 style={sectionHeading()}>About Me</h2>
            <p style={paragraphStyle()}>
             I bring a solid 9 years of experience in designing and developing complex web and mobile applications using React, React Native, and other modern technologies. I have contributed to and led high-impact projects for leading fintech companies such as NIUM, PhonePe, Kotak, PATRONAS, Kroo, and Shawbrook. 

My leadership has played a key role in delivering scalable, production-ready applications that have set benchmarks and successfully launched on both the App Store and Google Play.
            </p>
          </section>
        )}

        {activeTab === "experience" && (
          <section id="experience" style={sectionStyle()}>
            <h2 style={sectionHeading()}>Experience</h2>
            <ul style={listStyle()}>
              <li><strong>Lead Consultant @ Xebia</strong> – Improved scan & pay for major bank (30% user growth).</li>
              <li><strong>Senior Consultant @ Quinnox</strong> – Created 50+ reusable components for Neo Bank app.</li>
              <li><strong>Software Engineer @ GEP Worldwide</strong> – CI/CD + Firebase; UI enhancements.</li>
              <li><strong>Software Engineer @ NIUM</strong> – PCI DSS compliant secure mobile platform.</li>
              <li><strong>App Developer @ Prodio</strong> – Built 10+ apps from scratch in React/Native/Android.</li>
            </ul>
          </section>
        )}

        {activeTab === "skills" && (
          <section id="skills" style={sectionStyle()}>
  <h2 style={sectionHeading()}>Skills</h2>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', padding: '1.5rem 0' }}>
    {[
      {
        title: 'Frontend',
        color: '#1a73e8',
        skills: {
          'React': { level: 95, icon: '⚛️' },
          'React Native': { level: 90, icon: '📱' },
          'Expo': { level: 85, icon: '🚀' },
          'React Navigation': { level: 80, icon: '🧭' }
        }
      },
      {
        title: 'Tooling & Testing',
        color: '#34a853',
        skills: {
          'TypeScript': { level: 90, icon: '📘' },
          'Jest': { level: 85, icon: '🧪' },
          'Storybook': { level: 80, icon: '📖' },
          'ESLint': { level: 75, icon: '🔍' },
          'CI/CD': { level: 70, icon: '🔄' }
        }
      },
      {
        title: 'Data & API',
        color: '#fbbc05',
        skills: {
          'Redux': { level: 90, icon: '🔁' },
          'React Query': { level: 85, icon: '📡' },
          'GraphQL': { level: 75, icon: '🕸️' },
          'AsyncStorage': { level: 70, icon: '💾' },
          'Firebase': { level: 80, icon: '🔥' }
        }
      }
    ].map(group => (
      <div key={group.title}>
        <h3 style={{ color: group.color, marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600', textAlign: 'center', textTransform: 'uppercase' }}>{group.title}</h3>
        {Object.entries(group.skills).map(([skill, { level, icon }], index) => (
          <div key={skill} style={{
            marginBottom: '0.75rem',
            opacity: 0,
            transform: 'translateY(40px)',
            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
          }}>
            <div style={{ background: '#ffffff', border: `1px solid ${group.color}`, fontSize: '0.95rem', fontWeight: '500', padding: '0.5rem', borderRadius: '0.5rem', textAlign: 'center', color: group.color, boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              {icon} {skill}
            </div>
            <div style={{ height: '6px', background: '#dfe9f3', borderRadius: '3px', marginTop: '0.5rem', width: '100%' }}>
              <div style={{ width: `${level}%`, height: '100%', background: group.color, borderRadius: '3px' }}></div>
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
</section>
        )}

        {activeTab === "certifications" && (
          <section id="certifications" style={sectionStyle()}>
            <h2 style={sectionHeading()}>Certifications</h2>
            <ul style={listStyle()}>
              <li>Dale Carnegie Certification</li>
              <li>Do Agile Be Agile Training</li>
              <li>Master React.js with AI</li>
              <li>Google Project Management – Coursera</li>
            </ul>
          </section>
        )}

        {activeTab === "projects" && (
          <section id="projects" style={sectionStyle()}>
            <h2 style={sectionHeading()}>Projects</h2>
            <p style={paragraphStyle()}>
              <strong>React Boilerplate:</strong> Modular React template using atomic design, Jest, and Storybook.<br />
              <a href="https://github.com/yoginair/react-boilerplate" style={linkStyle()} target="_blank" rel="noreferrer">View on GitHub</a>
            </p>
          </section>
        )}

        {activeTab === "contact" && (
          <section id="contact" style={{ ...sectionStyle(), textAlign: 'center' }}>
            <h2 style={sectionHeading()}>Contact</h2>
            <p>Email: <a href="mailto:yogeshwar.m.nair@gmail.com" style={linkStyle()}>yogeshwar.m.nair@gmail.com</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/yogeshwar-nair-b0b83aaa" style={linkStyle()} target="_blank" rel="noreferrer">linkedin.com/in/yogeshwar-nair</a></p>
            <p>GitHub: <a href="https://github.com/yoginair" style={linkStyle()} target="_blank" rel="noreferrer">github.com/yoginair</a></p>
          </section>
        )}
      </main>

      <footer style={{ textAlign: 'center', fontSize: '0.875rem', color: '#6b7280', padding: '1.5rem 0', backgroundColor: '#e3edff', marginTop: 'auto' }}>
        © {new Date().getFullYear()} Yogeshwar Nair. All rights reserved.
      </footer>
    </div>
  );

  function sectionStyle() {
    return {
      marginBottom: '1.5rem',
      padding: '0.75rem 1rem',
      
      borderLeft: 'none',
            transition: 'all 0.5s ease-in-out',
      overflow: 'hidden'
    };
  }

  function sectionHeading() {
    return {
      fontSize: '2rem',
      marginBottom: '1rem',
      color: '#1a73e8',
      borderBottom: '2px solid #e0e0e0',
      paddingBottom: '0.5rem',
      fontWeight: '600',
      letterSpacing: '0.5px'
    };
  }

function paragraphStyle() {
  return {
    fontSize: '1.05rem',
    lineHeight: '1.6'
  };
}

function listStyle() {
  return {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    paddingLeft: '1rem'
  };
}

function linkStyle() {
  return {
    color: '#1a73e8',
    textDecoration: 'none'
  };
}

function pillStyle() {
  return {
    background: 'linear-gradient(135deg, #e8f0fe, #d2e3fc)',
    padding: '0.5rem 1rem',
    borderRadius: '999px',
    fontSize: '0.95rem',
    boxShadow: '0 4px 12px rgba(26,115,232,0.15)'
  };
}
  }

