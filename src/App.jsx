import React, { useState, useEffect } from 'react';
import profilephoto from './assets/Profile.png';

// --- SVG Icons ---
// Using SVG icons as components for better control and performance.

const MoonIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
);

const SunIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 16a4 4 0 100-8 4 4 0 000 8z"></path></svg>
);

const MenuIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
);

const XIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);


const GithubIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

const LinkedInIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 72 72" id="linkedin">

  <g id="providers-list" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">

    <g id="linkedin">

      <rect id="Rectangle-2" width="72" height="72" x="0" y="0" fill="#117EB8" rx="4"></rect>

      <path id="Shape" fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"></path>

    </g>

  </g>

</svg>

);

const LeetCodeIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="#B3B1B0" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path>

  <path fill="#E7A41F" d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path>

  <path fill="#070706" d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"></path></svg>
);

const CodeforcesIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="#2196F3" d="M13.5,21c0.828,0,1.5-0.672,1.5-1.5v-15C15,3.672,14.328,3,13.5,3h-3C9.673,3,9,3.672,9,4.5v15c0,0.828,0.673,1.5,1.5,1.5H13.5L13.5,21z"></path>

  <path fill="#1D83D4" d="M12,3h-1.5C9.673,3,9,3.672,9,4.5v15c0,0.828,0.673,1.5,1.5,1.5H12V3L12,3z"></path>

  <path fill="#FFC107" d="M0,19.5C0,20.328,0.673,21,1.5,21h3C5.328,21,6,20.328,6,19.5V9c0-0.828-0.672-1.5-1.5-1.5h-3C0.673,7.5,0,8.172,0,9V19.5L0,19.5z"></path>

  <path fill="#DEA806" d="M3.25,7.5H1.5C0.673,7.5,0,8.172,0,9v10.5C0,20.328,0.673,21,1.5,21h1.75V7.5L3.25,7.5z"></path>

  <path fill="#F44336" d="M24,19.5V12c0-0.828-0.672-1.5-1.5-1.5h-3c-0.828,0-1.5,0.672-1.5,1.5v7.5c0,0.828,0.672,1.5,1.5,1.5h3C23.328,21,24,20.328,24,19.5L24,19.5z"></path>

  <path fill="#D43A2F" d="M21,10.5h-1.5c-0.828,0-1.5,0.672-1.5,1.5v7.5c0,0.828,0.672,1.5,1.5,1.5H21V10.5L21,10.5z"></path>
    </svg>
);

const ExternalLinkIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
);

const ChevronLeftIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
);

const ChevronRightIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);

const BriefcaseIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

const CodeIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

const DatabaseIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
);

const DesktopIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
);

const TrendingUpIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);

const BotIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"></path><rect x="4" y="8" width="16" height="12" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
);

const GraduationCapIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"></path></svg>
);

const CalendarIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

const MapPinIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const MailIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const PhoneIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const SendIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);

const TrophyIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L9 5H3v6l5 5v5h8v-5l5-5V5h-6z"></path><path d="M12 18v-5"></path></svg>
);


const ShieldIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

// --- Spotlight Effect Component ---
const SpotlightEffect = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }}
    ></div>
  );
};


// --- Reusable Glassmorphism Card with Gradient Border ---
const GlassCard = ({ children, className }) => (
    <div className={`bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-indigo-500/40 p-0.5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 ${className}`}>
        <div className="bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-2xl h-full w-full rounded-lg p-6">
            {children}
        </div>
    </div>
);

// --- Main App Component ---

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Skills', href: '#skills' },
    { title: 'Education', href: '#education' },
   
  ];
  
  const SectionTitle = ({children}) => (
    <h2 className="text-4xl font-bold text-slate-800 dark:text-white">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            {children}
        </span>
    </h2>
  );

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-sans relative px-4 sm:px-8 lg:px-16">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20800%22%3E%3Crect%20fill%3D%22%230f172a%22%20width%3D%22800%22%20height%3D%22800%22%2F%3E%3Cg%20fill-opacity%3D%220.4%22%3E%3Ccircle%20fill%3D%22%231e293b%22%20cx%3D%22400%22%20cy%3D%22400%22%20r%3D%22600%22%2F%3E%3Ccircle%20fill%3D%22%231e3a8a%22%20cx%3D%22400%22%20cy%3D%22400%22%20r%3D%22500%22%2F%3E%3Ccircle%20fill%3D%22%233b82f6%22%20cx%3D%22400%22%20cy%3D%22400%22%20r%3D%22300%22%2F%3E%3Ccircle%20fill%3D%22%236366f1%22%20cx%3D%22400%22%20cy%3D%22400%22%20r%3D%22200%22%2F%3E%3Ccircle%20fill%3D%22%238b5cf6%22%20cx%3D%22400%22%20cy%3D%22400%22%20r%3D%22100%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] bg-cover bg-no-repeat opacity-20 dark:opacity-50"></div>
      <SpotlightEffect />
      {/* --- Header --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md shadow-slate-900/5 dark:shadow-slate-800/5">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="text-xl font-bold text-slate-800 dark:text-white">
              Yash Katare 
            </a>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.title} href={link.href} className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {link.title}
                </a>
              ))}
              <button onClick={toggleTheme} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">
                {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
              </button>
            </div>
            <div className="md:hidden flex items-center">
               <button onClick={toggleTheme} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mr-4">
                {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-500 dark:text-slate-400">
                {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900/95">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a key={link.title} href={link.href} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800">
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-16 z-10 relative">
        {/* --- Hero Section --- */}
        <section id="home" className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-5xl md:text-10xl font-bold text-slate-800 dark:text-white mb-4">
                  Hi, I'm <br></br>Yash Katare
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  SEO EXPERT <br></br>                  
                  link building | Outreach | Off-Page SEO
                </h2>
                <p className="text-lg mb-8 max-w-xl mx-auto md:mx-0">
                  A professional SEO Specialist and Link Building Expert with 1+ year of experience. I’ve worked on multiple niches, helping clients grow organic traffic and improve keyword rankings. I focus on white-hat link building, smart keyword research, technical SEO, and transparent, result-driven strategies. If you need genuine growth and high-quality backlinks, I’m ready to help.
                </p>
                <div className="flex justify-center md:justify-start gap-4 mb-8">
                  <a href="#projects" className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg transform hover:scale-105">
                    <ChevronLeftIcon className="w-5 h-5 mr-2" /> View My Work <ChevronRightIcon className="w-5 h-5 ml-2" />
                  </a>
                  <a href="https://drive.google.com/file/d/1OM_IzjADJE7lReYKUo9aOpFk47miP2ie/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-all shadow-lg transform hover:scale-105">
                    Download Resume <ExternalLinkIcon className="w-5 h-5 ml-2" />
                  </a>
                </div>
                <div className="flex justify-center md:justify-start gap-6">
                 
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="p-1 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 transition-transform duration-300 hover:scale-105">
                  <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-slate-900">
                    <img src={profilephoto} alt="Yash Katare" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- About Me Section --- */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <SectionTitle>About Me</SectionTitle>
                <p className="text-lg mt-2">Passionate about improving online visibility through clean SEO strategies and quality link building.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <GlassCard>
                    <h3 className="text-2xl font-semibold mb-3 text-slate-800 dark:text-white">Professional Focus </h3>
                    <p>Results-driven SEO Specialist with a strong focus on white-hat link building, technical SEO, and organic growth strategies. I specialize in improving search visibility through authority backlink building, data-driven optimization, and clean on-page practices to deliver long-term ranking results.</p>
                </GlassCard>
                 <GlassCard>
                    <h3 className="text-2xl font-semibold mb-3 text-slate-800 dark:text-white">Current Status</h3>
                    <p>Freelancing as an SEO Link Building Specialist (Indore) — 1 year of practical experience in backlinks, outreach, and SEO optimization. </p>
                </GlassCard>
                 <GlassCard>
                    <h3 className="text-2xl font-semibold mb-3 text-slate-800 dark:text-white">Achievements</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Completed 60+ successful link-building campaigns across multiple niches (SaaS, eCommerce, industrial, business) </li>
                        <li>Improved organic traffic up to 40–70% for multiple client websites through clean white-hat strategies.</li>
                        <li>Built high-authority backlinks (DA/DR 40–70+) using guest posts, niche edits, and outreach.</li>
                        <li>Successfully managed SEO projects for brands like Eddy Pump, Craft.Camp, SmallHousePlan, RemoFirst, and Loganix.</li>
                        <li>Increased keyword rankings for competitive terms using data-driven link building.</li>
                        <li>Achieved consistent outreach success using tools like Ahrefs, Semrush, Hunter, and Apollo.</li>
                    </ul>
                </GlassCard>
              </div>
              <div className="space-y-8">
                <GlassCard>
                     <h3 className="text-2xl font-semibold mb-4 text-center text-slate-800 dark:text-white">Quick Stats</h3>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="text-center bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg">
                            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">60+</p>
                            <p className="text-sm">Quality Backlinks Built</p>
                        </div>
                        <div className="text-center bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg">
                            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">7+</p>
                            <p className="text-sm">Successful SEO & Link-Building Projects</p>
                        </div>
                        <div className="text-center bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg">
                            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</p>
                            <p className="text-sm">Core SEO & Outreach Tools Used</p>
                        </div>
                         <div className="text-center bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg">
                            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4+</p>
                            <p className="text-sm">Professional Certifications & Courses</p>
                        </div>
                     </div>
                </GlassCard>
                 <GlassCard>
                     <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">Location </h3>
                     <div className="space-y-3">
                        <p className="flex items-center"><MapPinIcon className="w-5 h-5 mr-3 text-blue-500"/>Indore, M.P, India</p>
                        
                     </div>
                 </GlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <SectionTitle>Technical Skills</SectionTitle>
                    <p className="text-lg mt-2">Industry-standard expertise across modern SEO, link-building, and digital growth tools.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Languages */}
                    <SkillCard title="SEO & Link-Building Skills" icon={<CodeIcon className="w-8 h-8 text-blue-400"/>} skills={['White-Hat Link Building', 'Guest Posting & Outreach', 'Anchor Text Optimization', 'Keyword Research & Mapping', 'Resource Page Link Building']} />
                    {/* Frontend */}
                    {/* Database & Tools */}
                    <SkillCard title="Off-Page Skills" icon={<DesktopIcon className="w-8 h-8 text-blue-400"/>} skills={['Guest Posting Outreach', 'Q&A Backlinks', 'Authority Prospecting', 'Broken Link Building', 'Resource Page Link Building']} />
                    {/* Database & Tools */}
                    <SkillCard title="On-Page Skills" icon={<DatabaseIcon className="w-8 h-8 text-blue-400"/>} skills={['On-Page Optimization', 'Content Gap Analysis', 'Internal Linking Strategy', 'Schema Markup Basics', 'SEO Auditing']} />
                     {/* Frontend */}
                    <SkillCard title="SEO Tools" icon={<DesktopIcon className="w-8 h-8 text-blue-400"/>} skills={['Ahrefs', 'SEMrush', 'Moz', 'Google Keyword Planner', 'Google Search Console']} />
                    {/* Backend */}
                    <SkillCard title="Outreach & Productivity Tools" icon={<BriefcaseIcon className="w-8 h-8 text-blue-400"/>} skills={['Hunter.io', 'Snov.io', 'Contact out ', 'Apollo.io', 'Lemlist']} />
                   
                </div>
            </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <SectionTitle>Featured Projects</SectionTitle>
                    <p className="text-lg mt-2">A showcase of my SEO expertise through real-world client success</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProjectCard1
                        title="Loganix"
                        description="Worked with Loganix, a well-known SEO and link-building provider, to strengthen their backlink profile through high-authority placements."
                        icon={<TrendingUpIcon className="w-12 h-12 text-white" />}
                        gradient="from-indigo-500 to-purple-600"
                        tags={['Outreach', 'Guest Post', 'SAAS Backlinks', 'Competitor Analysis']}
                        points={[
                            "35+ high-authority contextual backlinks",
                            "Guest posts + link insertions in HR & SAAS blogs",
                            "Competitor backlink gap analysis",
                            "Anchors optimized for service-based keywords"
                        ]}
                    />
                    <ProjectCard2
                        title="Eddy Pump"
                        description="Strengthened the online presence of Eddy Pump, a global leader in slurry pumps and dredging equipment, by building high-quality, niche-relevant backlinks."
                        icon={<BotIcon className="w-12 h-12 text-white" />}
                        gradient="from-green-500 to-teal-600"
                        tags={['Industry Prospecting', 'Technical Niches', 'Niche Edits ', 'Real-time']}
                        points={[
                            "Secured contextual backlinks through guest posts and niche edits on engineering industrial technology websites",
                            "Conducted competitor backlink analysis to uncover strong industry-specific link opportunities",
                            "Built resource-page and directory links from trusted industrial equipment platforms",
                            "Improved link authority for key product and service pages"
                        ]}
                    />
                    <ProjectCard3
                        title="ShedPlans"
                        description="Worked on strengthening ShedPlans’ search visibility by creating targeted backlink strategies for a niche construction and DIY website offering shed and storage-building plans."
                        icon={<BriefcaseIcon className="w-12 h-12 text-white" />}
                        gradient="from-amber-500 to-orange-600"
                        tags={['Link Building', 'Guest Posts', 'Niche Edits', 'Competitor Analysis', 'SEO Strategy']}
                        points={[
                            "Built contextual backlinks from DIY, woodworking, and home-improvement blogs",
                            "Performed competitor backlink analysis for high-authority link opportunities",
                            "Secured resource-page links relevant to construction and blueprint niches",
                            "Improved keyword visibility for shed plans, storage plans, and related queries"
                        ]}
                    />
                     <ProjectCard4
                        title="EasyCoop"
                        description="I worked on link-building for EasyCoop, a cooperative management platform designed to simplify member records, savings, and loan management."
                        icon={<TrendingUpIcon className="w-12 h-12 text-white" />}
                        gradient="from-indigo-500 to-purple-600"
                        tags={['keyword search', 'SAAS Niches', 'Niche Edits', 'Real-time']}
                        points={[
                            "Built high-quality backlinks from fintech, SaaS, and cooperative-management websites",
                            "Ran guest-post outreach campaigns targeting financial and co-op industry blogs",
                            "Conducted competitor backlink analysis to identify strong link prospects",
                            "Secured directory and resource-page links from trusted financial and cooperative directories"
                        ]}
                    />
                     <ProjectCard5
                        title="Business Card Junction"
                        description="I worked on strengthening their SEO presence and building backlinks to improve their domain authority and online visibility."
                        icon={<BotIcon className="w-12 h-12 text-white" />}
                        gradient="from-green-500 to-teal-600"
                        tags={['Industry Prospecting', 'Guest Posts', 'Niche Edits', 'Niche Edits']}
                        points={[
                            "Conducted outreach and guest-posts/link-insertions campaigns on design, printing, business-services and stationery-niche blogs.",
                            "Performed competitor backlink analysis to discover high-quality domains and replicate successful link sources.",
                            "Built resource-page links and directory backlinks targeting printing/design directories to improve niche relevance and trust.",
                            "Accurate order placement and exit logic"
                        ]}
                    />
                </div>
            </div>
        </section>

        {/* --- Certifications & Achievements --- */}
        <section id="certifications" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <SectionTitle>Certifications & Achievements</SectionTitle>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <a href="https://drive.google.com/file/d/18GnfyKuhh7iKinsQQhbFvKMXzWdujAkB/view?usp=sharing"><CertificationCard title="Organic Marketing:" subtitle="Facebook Groups For Small Businesses" icon={<CodeIcon className="w-10 h-10 text-blue-400" />} />
                    </a><a href="https://drive.google.com/file/d/1tnTklsYRh02GXeMgrnowoyIYTk-mLmWv/view?usp=sharing"><CertificationCard title="Microsoft Excel" subtitle="Getting Started with Microsoft Excel" icon={<CodeIcon className="w-10 h-10 text-blue-400" />} />
                    </a><a href="https://drive.google.com/file/d/1sXZlkJTL7CF3hbmF2AcIYMsrx8l_AF7h/view?usp=sharing"><CertificationCard title="Search Engine Optimization" subtitle="Search Engine Optimization (SEO) with Squarespace" icon={<ShieldIcon className="w-10 h-10 text-blue-400" />} />
                    </a><a href="https://drive.google.com/file/d/1oTHgLv8MLpwhwoAPLaN6PkMLQkejxnuC/view?usp=sharing"><CertificationCard title="Carina Softlabs Internship’" subtitle="Digital marketing SEO-link building" icon={<ShieldIcon className="w-10 h-10 text-blue-400" />} />
                    </a>

                 
                </div>
            </div>
        </section>


        {/* --- Education Section --- */}
        <section id="education" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <SectionTitle>Education</SectionTitle>
              <p className="text-lg mt-2">Academic foundation in computer science and software development</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <GlassCard>
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                        <div>
                            <div className="flex items-center mb-2">
                                <GraduationCapIcon className="w-8 h-8 text-blue-500 mr-3" />
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Bachelor of commerce + Master of business Administration (5 years)</h3>
                                    <p className="text-md text-slate-600 dark:text-slate-400">B.com+IP  + MBA (Finance + Digital Marketing)</p>
                                </div>
                            </div>
                            <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">Medicaps University </p>
                            <p className="flex items-center text-slate-500 dark:text-slate-400 mt-1"><MapPinIcon className="w-4 h-4 mr-2" /> Indore, Madhya Pradesh</p>
                        </div>
                        <div className="mt-4 sm:mt-0 text-left sm:text-right">
                            <p className="flex items-center justify-start sm:justify-end font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-3 py-1 rounded-full text-sm">
                                <CalendarIcon className="w-4 h-4 mr-2" /> Aug 2020 - May 2025
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Expected Graduation</p>
                        </div>
                    </div>
                    <div className="border-t border-slate-200 dark:border-slate-700 mt-6 pt-6">
                        <h4 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Coursework Highlights:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                            <ul className="list-disc list-inside space-y-2">
                                <li>Search Engine Optimization (SEO)</li>
                                <li>Digital Marketing Fundamentals</li>
                                <li>Content Marketing Strategy</li>
                                <li>Data Analytics & Reporting</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Website Optimization (UI/UX + Speed)</li>
                                <li>Backlink Acquisition Techniques</li>
                                <li>Competitor & Keyword Analysis</li>
                                <li>Technical Website Concepts</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-wrap gap-2">
                        <span className="bg-slate-200 dark:bg-slate-700 text-sm font-medium px-3 py-1 rounded-full">Search Engine Algorithms</span>
                        <span className="bg-slate-200 dark:bg-slate-700 text-sm font-medium px-3 py-1 rounded-full">Technical SEO Concepts</span>
                        <span className="bg-slate-200 dark:bg-slate-700 text-sm font-medium px-3 py-1 rounded-full">Web Technologies for SEO</span>
                        <span className="bg-slate-200 dark:bg-slate-700 text-sm font-medium px-3 py-1 rounded-full">Data & Analytics Systems</span>
                    </div>
                </GlassCard>
            </div>
          </div>
        </section>

      {/* --- Contact Section --- */}
        <section id="" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    
                    </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="space-y-8">
                      
                       
                    </div>
                    <div className="lg:col-span-2">
                       
                    </div>
                </div>
            </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-slate-900/80 text-slate-400 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
                <p className="font-semibold text-white mb-4">SEO Expert || Off-page SEO || On-Page SEO || Techanical SEO || Link Building </p>
                <div className="flex justify-center gap-6 mb-4">
                  
                </div>
                <p className="text-sm">&copy; {new Date().getFullYear()} Yash Katare. Designed with passion for technology and innovation.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

// --- Reusable Child Components ---

const SkillCard = ({ title, icon, skills }) => (
    <GlassCard>
        <div className="text-center">
            <div className="inline-block bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">{title}</h3>
            <div className="space-y-2">
                {skills.map(skill => (
                    <p key={skill} className="bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 py-2 px-4 rounded-md">{skill}</p>
                ))}
            </div>
        </div>
    </GlassCard>
);

const ProjectCard1 = ({ title, description, icon, gradient, tags, points, demoLink, codeLink }) => (
    <div className="bg-slate-900/80 rounded-xl shadow-xl overflow-hidden flex flex-col h-full border border-slate-700/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
        <div className={`bg-gradient-to-br ${gradient} h-48 flex items-center justify-center`}>
            {icon}
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 mb-4 flex-grow">{description}</p>
            <div className="mb-4">
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                    {points.map(point => <li key={point}>{point}</li>)}
                </ul>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => (
                    <span key={tag} className="bg-slate-700 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <div className="mt-auto flex gap-4">
            <a href={codeLink || 'https://loganix.com/'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-1/2 bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-slate-600 transition-all transform hover:scale-105">
                    <CodeIcon className="w-5 h-5 mr-2"/> LINK
              </a>
              
            
            </div>
        </div>
    </div>
);


const ProjectCard2 = ({ title, description, icon, gradient, tags, points, demoLink, codeLink }) => (
    <div className="bg-slate-900/80 rounded-xl shadow-xl overflow-hidden flex flex-col h-full border border-slate-700/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
        <div className={`bg-gradient-to-br ${gradient} h-48 flex items-center justify-center`}>
            {icon}
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 mb-4 flex-grow">{description}</p>
            <div className="mb-4">
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                    {points.map(point => <li key={point}>{point}</li>)}
                </ul>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => (
                    <span key={tag} className="bg-slate-700 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <div className="mt-auto flex gap-4">
                <a href={codeLink || 'https://eddypump.com/'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-1/2 bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-slate-600 transition-all transform hover:scale-105">
                    <CodeIcon className="w-5 h-5 mr-2"/> Link
                </a>
                 
            </div>
        </div>
    </div>
);


const ProjectCard3 = ({ title, description, icon, gradient, tags, points, demoLink, codeLink }) => (
    <div className="bg-slate-900/80 rounded-xl shadow-xl overflow-hidden flex flex-col h-full border border-slate-700/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
        <div className={`bg-gradient-to-br ${gradient} h-48 flex items-center justify-center`}>
            {icon}
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 mb-4 flex-grow">{description}</p>
            <div className="mb-4">
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                    {points.map(point => <li key={point}>{point}</li>)}
                </ul>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => (
                    <span key={tag} className="bg-slate-700 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <div className="mt-auto flex gap-4">
                <a href={codeLink || 'https://shedplans.org/'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-1/2 bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-slate-600 transition-all transform hover:scale-105">
                    <CodeIcon className="w-5 h-5 mr-2"/> Link
                </a>
                 
            </div>
        </div>
    </div>
);

const ProjectCard4 = ({ title, description, icon, gradient, tags, points, demoLink, codeLink }) => (
    <div className="bg-slate-900/80 rounded-xl shadow-xl overflow-hidden flex flex-col h-full border border-slate-700/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
        <div className={`bg-gradient-to-br ${gradient} h-48 flex items-center justify-center`}>
            {icon}
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 mb-4 flex-grow">{description}</p>
            <div className="mb-4">
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                    {points.map(point => <li key={point}>{point}</li>)}
                </ul>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => (
                    <span key={tag} className="bg-slate-700 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <div className="mt-auto flex gap-4">
                <a href={codeLink || 'https://easycoops.com/'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-1/2 bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-slate-600 transition-all transform hover:scale-105">
                    <CodeIcon className="w-5 h-5 mr-2"/> Link
                </a>
                 
            </div>
        </div>
    </div>
);

const ProjectCard5 = ({ title, description, icon, gradient, tags, points, demoLink, codeLink }) => (
    <div className="bg-slate-900/80 rounded-xl shadow-xl overflow-hidden flex flex-col h-full border border-slate-700/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
        <div className={`bg-gradient-to-br ${gradient} h-48 flex items-center justify-center`}>
            {icon}
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 mb-4 flex-grow">{description}</p>
            <div className="mb-4">
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                    {points.map(point => <li key={point}>{point}</li>)}
                </ul>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => (
                    <span key={tag} className="bg-slate-700 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <div className="mt-auto flex gap-4">
                <a href={codeLink || 'https://www.businesscardjunction.com/'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-1/2 bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-slate-600 transition-all transform hover:scale-105">
                    <CodeIcon className="w-5 h-5 mr-2"/> Link
                </a>
                 
            </div>
        </div>
    </div>
);

const CertificationCard = ({ title, subtitle, icon }) => (
    <GlassCard>
        <div className="text-center flex flex-col items-center justify-center h-full">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-slate-400">{subtitle}</p>
        </div>
    </GlassCard>
);












