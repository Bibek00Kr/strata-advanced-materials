import React, { useEffect, useState } from 'react';

const navigation = [
  ['home', 'Home'],
  ['materials', 'Materials'],
  ['consumables', 'Consumables'],
  ['testing', 'Testing'],
  ['services', 'Services'],
  ['about', 'About us'],
];

const categories = [
  {
    id: 'materials',
    number: '01',
    title: 'Advanced materials',
    short: 'Purposeful material choices for the next experiment.',
    items: ['Graphene & related materials', 'MXenes', 'Layered double hydroxides', 'Metal–organic frameworks', 'Heterostructures'],
    icon: '◈',
  },
  {
    id: 'consumables',
    number: '02',
    title: 'Lab consumables',
    short: 'The components that keep your electrochemistry moving.',
    items: ['Electrodes & current collectors', 'Electrolytes', 'Separators', 'Coin-cell components'],
    icon: '⌁',
  },
  {
    id: 'testing',
    number: '03',
    title: 'Electrochemical testing',
    short: 'Useful measurements, planned around your research question.',
    items: ['Cyclic voltammetry (CV)', 'Galvanostatic cycling (GCD)', 'Impedance spectroscopy (EIS)', 'Linear sweep voltammetry (LSV)'],
    icon: '⌬',
  },
  {
    id: 'services',
    number: '04',
    title: 'R&D services',
    short: 'Flexible technical support from material to measurement.',
    items: ['Custom synthesis', 'Electrode fabrication', 'Process optimisation', 'Supercapacitor evaluation'],
    icon: '↗',
  },
];

const pageCopy = {
  materials: {
    kicker: 'Materials',
    title: 'A deeper set of materials to explore.',
    intro: 'Find advanced material families for energy storage, electrochemistry and emerging research. Tell us your application and we can help narrow the options.',
    detail: 'Material availability, specifications and quantities can be discussed around your project requirements.',
    offers: [
      ['Graphene & related materials', 'Explore carbon-based materials for conductive networks, composites and electrochemical studies.'],
      ['MXenes', 'Two-dimensional transition-metal carbides and nitrides for research into energy storage and functional materials.'],
      ['LDHs & MOFs', 'Layered double hydroxides and metal–organic frameworks for tunable composition and structure.'],
      ['Heterostructures', 'Combined material systems designed for investigation of interfaces and complementary properties.'],
    ],
  },
  consumables: {
    kicker: 'Consumables',
    title: 'Keep the experiment in motion.',
    intro: 'Source the everyday cell and electrode components that support your electrochemical workflow, from early screening to repeatable testing.',
    detail: 'Share your cell format, electrode dimensions and electrolyte requirements when you enquire.',
    offers: [
      ['Electrodes', 'Electrode materials and formats for research and evaluation workflows.'],
      ['Electrolytes', 'Electrolyte options to suit your system, chemistry and testing conditions.'],
      ['Separators', 'Cell separators for laboratory-scale electrochemical configurations.'],
      ['Coin-cell components', 'Components for assembling and evaluating coin-cell research formats.'],
    ],
  },
  testing: {
    kicker: 'Testing',
    title: 'Measure what matters to your study.',
    intro: 'Plan an electrochemical test around your sample, cell configuration and research question, with methods agreed before the work begins.',
    detail: 'Test scope and reporting are confirmed per enquiry; sample and safety requirements are discussed before submission.',
    offers: [
      ['Cyclic voltammetry · CV', 'Study current response across a defined potential window and scan rate.'],
      ['Galvanostatic cycling · GCD', 'Evaluate charge–discharge behaviour under specified current conditions.'],
      ['Impedance spectroscopy · EIS', 'Investigate frequency-dependent electrochemical response across an agreed range.'],
      ['Linear sweep · LSV', 'Characterise current response while sweeping potential in one direction.'],
    ],
  },
  services: {
    kicker: 'R&D services',
    title: 'Technical support, shaped around your goal.',
    intro: 'Bring a defined research question or an early-stage idea. We can scope practical support across synthesis, electrode preparation and electrochemical evaluation.',
    detail: 'Every project starts with a conversation about objectives, deliverables, feasibility and handling requirements.',
    offers: [
      ['Custom synthesis', 'Discuss material composition, target properties and the scale needed for your study.'],
      ['Electrode fabrication', 'Prepare electrodes to an agreed format and loading for evaluation.'],
      ['Optimisation', 'Iterate material, formulation or test parameters against a defined objective.'],
      ['Performance evaluation', 'Combine suitable electrochemical methods to build a clearer view of system behaviour.'],
    ],
  },
};

function Brand({ onClick }) {
  return (
    <a className="brand" href="#home" onClick={onClick} aria-label="Strata Advanced Materials home">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span className="brand-copy"><strong>STRATA</strong><small>ADVANCED MATERIALS</small></span>
    </a>
  );
}

function Arrow({ diagonal = false }) {
  return <span className="arrow" aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function MaterialArtwork() {
  return (
    <div className="artwork" aria-label="Abstract illustration of layered advanced materials" role="img">
      <div className="artwork-topline"><span>STRUCTURE / 001</span><span>2D MATERIALS</span></div>
      <svg className="material-svg" viewBox="0 0 600 510" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="layerA" x1="94" y1="200" x2="493" y2="403" gradientUnits="userSpaceOnUse"><stop stopColor="#D6F267"/><stop offset="1" stopColor="#829B34"/></linearGradient>
          <linearGradient id="layerB" x1="82" y1="155" x2="460" y2="351" gradientUnits="userSpaceOnUse"><stop stopColor="#EDF4C8"/><stop offset="1" stopColor="#B4C770"/></linearGradient>
          <linearGradient id="layerC" x1="117" y1="122" x2="477" y2="305" gradientUnits="userSpaceOnUse"><stop stopColor="#8ECAC0"/><stop offset="1" stopColor="#367D73"/></linearGradient>
        </defs>
        <g opacity=".35" stroke="#D8E0D4" strokeWidth="1"><path d="M48 100H548M48 150H548M48 200H548M48 250H548M48 300H548M48 350H548M48 400H548"/><path d="M100 52V455M160 52V455M220 52V455M280 52V455M340 52V455M400 52V455M460 52V455M520 52V455"/></g>
        <path d="M109 268 304 167l186 94-195 105-186-98Z" fill="url(#layerA)" stroke="#E4F4A0" strokeWidth="2"/>
        <path d="m109 222 195-101 186 94-195 105-186-98Z" fill="url(#layerB)" stroke="#F5F8DB" strokeWidth="2"/>
        <path d="m109 177 195-101 186 94-195 105-186-98Z" fill="url(#layerC)" stroke="#B5E0D8" strokeWidth="2"/>
        <g fill="#143A35" stroke="#D4E77A" strokeWidth="2"><circle cx="304" cy="76" r="7"/><circle cx="490" cy="170" r="7"/><circle cx="295" cy="275" r="7"/><circle cx="109" cy="177" r="7"/><circle cx="304" cy="121" r="7"/><circle cx="490" cy="215" r="7"/><circle cx="295" cy="320" r="7"/></g>
        <path d="M421 91h89v49" stroke="#D8E0D4" strokeDasharray="4 5"/><circle cx="510" cy="91" r="4" fill="#D6F267"/>
        <path d="M125 359H42v-52" stroke="#D8E0D4" strokeDasharray="4 5"/><circle cx="42" cy="359" r="4" fill="#D6F267"/>
        <text x="420" y="77" fill="#EDF4C8" fontFamily="monospace" fontSize="11" letterSpacing="1">LAYERED LATTICE</text>
        <text x="39" y="385" fill="#EDF4C8" fontFamily="monospace" fontSize="11" letterSpacing="1">INTERFACE</text>
      </svg>
      <div className="artwork-caption"><span>DESIGNED FOR DISCOVERY</span><span>INDIA · R&amp;D</span></div>
      <div className="artwork-orbit" aria-hidden="true">S<span>+</span></div>
    </div>
  );
}

function SiteHeader({ active, menuOpen, setMenuOpen }) {
  const close = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand onClick={close} />
        <button className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          <span /><span />
        </button>
        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={close} className={active === id ? 'active' : ''}>{label}</a>)}
          <a className="nav-enquiry" href="#enquiry" onClick={close}>Start an enquiry <Arrow diagonal /></a>
        </nav>
      </div>
    </header>
  );
}

function Eyebrow({ children }) {
  return <div className="eyebrow"><span className="eyebrow-dot" />{children}</div>;
}

function CategoryCard({ item }) {
  return (
    <a className="category-card" href={`#${item.id}`}>
      <span className="card-top"><span>{item.number} / 04</span><span className="category-icon">{item.icon}</span></span>
      <h3>{item.title}</h3>
      <p>{item.short}</p>
      <span className="card-link">Explore {item.title.toLowerCase()} <Arrow /></span>
    </a>
  );
}

function HomePage() {
  return (
    <>
      <main>
        <section className="home-hero page-wrap">
          <div className="hero-copy">
            <Eyebrow>Advanced materials · Electrochemistry · Energy storage</Eyebrow>
            <h1>From material<br />to <span>momentum.</span></h1>
            <p className="hero-intro">Advanced materials and electrochemical support for the people turning research into what comes next.</p>
            <div className="hero-actions"><a className="button button-dark" href="#materials">Explore our capabilities <Arrow /></a><a className="text-link" href="#about">Meet Strata <Arrow diagonal /></a></div>
            <div className="hero-note"><span className="note-rule" />Material insight. Practical collaboration.</div>
          </div>
          <MaterialArtwork />
          <div className="hero-index"><span>01</span><span className="index-line" /><span>04</span></div>
        </section>

        <section className="intro-band page-wrap">
          <div className="section-label"><span>01 — WHAT WE DO</span><span>SCROLL TO EXPLORE ↓</span></div>
          <div className="intro-grid"><h2>Good research needs<br /><em>the right building blocks.</em></h2><div><p>Strata Advanced Materials brings material supply, laboratory consumables, electrochemical testing and R&amp;D services together in one place.</p><a className="under-link" href="#about">A little about us <Arrow /></a></div></div>
        </section>

        <section className="capabilities-section page-wrap" id="capabilities">
          <div className="section-heading"><div><Eyebrow>Capabilities</Eyebrow><h2>Four ways to move<br />your work forward.</h2></div><p>Choose a starting point. We’ll help you find the right next step for your project.</p></div>
          <div className="category-grid">{categories.map((item) => <CategoryCard key={item.id} item={item} />)}</div>
        </section>

        <section className="statement-band"><div className="statement-inner page-wrap"><span className="statement-mark">“</span><div><Eyebrow>Our approach</Eyebrow><p>From the first material question to the final measurement, <span>make every step count.</span></p></div><a href="#services" className="circle-link" aria-label="Explore our services"><Arrow diagonal /></a></div></section>

        <section className="home-about page-wrap"><div className="about-visual"><div className="about-visual-grid"/><div className="about-stamp"><span>SCIENCE,</span><span>WITH INTENT.</span><i>SM</i></div><span className="visual-caption">MATERIALS / METHODS / MEASUREMENT</span></div><div className="about-summary"><Eyebrow>Made for collaboration</Eyebrow><h2>Research is a team sport.</h2><p>We believe useful progress comes from clear conversations, thoughtful material choices and technical work shaped around the question at hand.</p><a className="under-link" href="#about">Get to know Strata <Arrow /></a></div></section>

        <section className="home-cta page-wrap"><div><Eyebrow>Have a project in mind?</Eyebrow><h2>Let’s find the right<br />starting point.</h2></div><a className="button button-lime" href="#enquiry">Tell us what you’re working on <Arrow diagonal /></a></section>
      </main>
    </>
  );
}

function CategoryPage({ id }) {
  const page = pageCopy[id];
  const category = categories.find((item) => item.id === id);
  return (
    <main className="inner-page page-wrap">
      <div className="breadcrumb"><a href="#home">Home</a><span>/</span><span>{page.kicker}</span></div>
      <section className="inner-hero">
        <div><Eyebrow>{category.number} — {page.kicker}</Eyebrow><h1>{page.title}</h1><p>{page.intro}</p><a href="#enquiry" className="button button-dark">Discuss your requirements <Arrow /></a></div>
        <div className="inner-hero-card"><span className="inner-icon">{category.icon}</span><span className="inner-card-label">STRATA / CAPABILITY {category.number}</span><div className="inner-card-lines"><i /><i /><i /><i /></div><span className="inner-card-foot">{category.items.slice(0, 2).join('  ·  ')}</span></div>
      </section>
      <section className="offer-section"><div className="offer-heading"><Eyebrow>Explore the range</Eyebrow><h2>{page.kicker},<br /><em>considered carefully.</em></h2><p>{page.detail}</p></div><div className="offer-list">{page.offers.map(([title, text], index) => <article className="offer-row" key={title}><span className="offer-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><span className="offer-plus">+</span></article>)}</div></section>
      <section className="page-bottom-cta"><div><span>HAVE A SPECIFIC REQUIREMENT?</span><h2>Let’s talk through the details.</h2></div><a className="button button-lime" href="#enquiry">Make an enquiry <Arrow diagonal /></a></section>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="inner-page page-wrap">
      <div className="breadcrumb"><a href="#home">Home</a><span>/</span><span>About us</span></div>
      <section className="about-page-hero"><Eyebrow>About Strata</Eyebrow><h1>Science moves<br />when people <em>connect.</em></h1><p>Strata Advanced Materials is built around a simple idea: make advanced materials and electrochemical know-how easier to bring into the lab.</p></section>
      <section className="about-values"><div className="values-aside"><span>OUR POINT OF VIEW</span><div className="values-symbol">S<span>↗</span></div></div><div className="values-content"><h2>Curiosity needs<br /><em>good company.</em></h2><p>Whether you are exploring a new material, developing a cell or planning a test, the details matter. We aim to make those conversations practical, clear and collaborative.</p><div className="value-points"><article><span>01</span><h3>Start with the question</h3><p>Understand the goal before recommending a material, method or service.</p></article><article><span>02</span><h3>Make it practical</h3><p>Keep the next step clear, scoped and connected to the real work.</p></article><article><span>03</span><h3>Build together</h3><p>Good outcomes come from open communication at every stage.</p></article></div></div></section>
      <section className="page-bottom-cta"><div><span>LET’S MAKE SOMETHING USEFUL</span><h2>Bring us your next question.</h2></div><a className="button button-lime" href="#enquiry">Start a conversation <Arrow diagonal /></a></section>
    </main>
  );
}

function EnquiryPage() {
  const [status, setStatus] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const inbox = import.meta.env.VITE_ENQUIRY_EMAIL;
    const subject = encodeURIComponent(`Website enquiry — ${form.get('topic')}`);
    const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\nOrganisation: ${form.get('organisation') || 'Not provided'}\nArea of interest: ${form.get('topic')}\n\n${form.get('message')}`);
    if (inbox) {
      window.location.href = `mailto:${inbox}?subject=${subject}&body=${body}`;
      setStatus('Your email app is opening with your enquiry. Please send the message there to complete it.');
    } else {
      setStatus('Thanks — the form is ready. Add VITE_ENQUIRY_EMAIL to your environment settings to route enquiries to your inbox.');
    }
  }
  return (
    <main className="inner-page page-wrap enquiry-page">
      <div className="breadcrumb"><a href="#home">Home</a><span>/</span><span>Enquiry</span></div>
      <section className="enquiry-layout">
        <div className="enquiry-copy"><Eyebrow>Start a conversation</Eyebrow><h1>What are you<br />working <em>on?</em></h1><p>Tell us a little about your project, material or testing needs. We’ll have a better place to start.</p><div className="enquiry-aside"><span className="aside-symbol">↗</span><span>Materials · Consumables<br />Testing · R&amp;D services</span></div></div>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-row"><label>Your name<input name="name" autoComplete="name" required placeholder="Name" /></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@organisation.com" /></label></div>
          <label>Organisation <span className="optional">OPTIONAL</span><input name="organisation" autoComplete="organization" placeholder="Company or institution" /></label>
          <label>What can we help with?<select name="topic" defaultValue="" required><option value="" disabled>Select an area</option><option>Materials</option><option>Consumables</option><option>Electrochemical testing</option><option>R&amp;D services</option><option>Something else</option></select></label>
          <label>A few project details<textarea name="message" rows="5" required placeholder="A short note about your goals, requirements or timeline…" /></label>
          <button className="button button-dark submit-button" type="submit">Prepare enquiry <Arrow diagonal /></button>
          <p className="form-note">We’ll use these details only to respond to your enquiry. No backend is connected yet.</p>
          {status && <p className="form-status" role="status">{status}</p>}
        </form>
      </section>
    </main>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer"><div className="footer-main page-wrap"><div className="footer-brand"><Brand /><p>Advanced materials.<br />Thoughtful science.</p></div><div className="footer-links"><span>EXPLORE</span>{navigation.slice(1).map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</div><div className="footer-contact"><span>HAVE A QUESTION?</span><p>Tell us what you’re exploring.<br />We’ll help you find a starting point.</p><a className="footer-enquiry" href="#enquiry">Make an enquiry <Arrow diagonal /></a></div></div><div className="footer-bottom page-wrap"><span>© {new Date().getFullYear()} Strata Advanced Materials</span><span>Built for discovery <i>✳</i></span></div></footer>
  );
}

export default function App() {
  const [active, setActive] = useState(() => window.location.hash.slice(1) || 'home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateRoute = () => {
      const next = window.location.hash.slice(1) || 'home';
      setActive(next);
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', updateRoute);
    return () => window.removeEventListener('hashchange', updateRoute);
  }, []);

  const content = active === 'home' ? <HomePage />
    : pageCopy[active] ? <CategoryPage id={active} />
      : active === 'about' ? <AboutPage />
        : active === 'enquiry' ? <EnquiryPage />
          : <HomePage />;

  return <><SiteHeader active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />{content}<SiteFooter /></>;
}
