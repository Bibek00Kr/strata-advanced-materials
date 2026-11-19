import React, { useEffect, useState } from 'react';
import { catalogProducts, consumableProducts, featuredMaterials, materialFamilies, materialProducts, specialtyChemicalProducts } from './data/products.js';

const navigation = [
  ['home', 'Home'],
  ['materials', 'Materials'],
  ['consumables', 'Consumables'],
  ['testing', 'Testing'],
  ['services', 'Collaborate'],
  ['about', 'About us'],
];
const pageRoutes = new Set([...navigation.map(([id]) => id), 'enquiry']);

function pageFromHash(hash) {
  const location = hash.split('?')[0] || 'home';
  const [page, productId] = location.split('/');
  if (page === 'product' && catalogProducts.some((product) => product.id === productId)) return 'product';
  return pageRoutes.has(page) ? page : 'home';
}

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

function OfferingIcon({ type }) {
  const paths = {
    materials: <><path d="m12 2 8 4.5v11L12 22l-8-4.5v-11L12 2Z"/><path d="M12 2v20M4 6.5l16 11M20 6.5l-16 11M4 6.5h16M4 17.5h16"/></>,
    testing: <><path d="M9 3h6M10 3v6l-5.2 8.5A2.3 2.3 0 0 0 6.7 21h10.6a2.3 2.3 0 0 0 1.9-3.5L14 9V3"/><path d="M7 15h10M9.5 12.5h5"/></>,
    consumables: <><path d="M8 3h8M9 3v5l-4.3 8.3A3.2 3.2 0 0 0 7.5 21h9a3.2 3.2 0 0 0 2.8-4.7L15 8V3"/><path d="M7 15h10"/></>,
  };

  return <span className="home-offering-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg></span>;
}

function MoleculeIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m8 6 6-2 5 4-1 7-6 4-6-3-1-6 3-4Z"/><path d="m8 6 4 6m2-8-2 8m7-4-7 4m6 3-6-3m-6 4 6-4"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg>;
}

function MaterialArtwork() {
  return (
    <div className="artwork" aria-label="Abstract illustration of layered advanced materials" role="img">
      <div className="artwork-topline"><span>STRUCTURE / 001</span><span>2D MATERIALS</span></div>
      <svg className="material-svg" viewBox="0 0 600 510" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="layerA" x1="94" y1="200" x2="493" y2="403" gradientUnits="userSpaceOnUse"><stop stopColor="#C47A4B"/><stop offset="1" stopColor="#A86F49"/></linearGradient>
          <linearGradient id="layerB" x1="82" y1="155" x2="460" y2="351" gradientUnits="userSpaceOnUse"><stop stopColor="#E6EDF2"/><stop offset="1" stopColor="#AFC0CB"/></linearGradient>
          <linearGradient id="layerC" x1="117" y1="122" x2="477" y2="305" gradientUnits="userSpaceOnUse"><stop stopColor="#9BB8C7"/><stop offset="1" stopColor="#436D85"/></linearGradient>
        </defs>
        <g opacity=".35" stroke="#D4DDE4" strokeWidth="1"><path d="M48 100H548M48 150H548M48 200H548M48 250H548M48 300H548M48 350H548M48 400H548"/><path d="M100 52V455M160 52V455M220 52V455M280 52V455M340 52V455M400 52V455M460 52V455M520 52V455"/></g>
        <path d="M109 268 304 167l186 94-195 105-186-98Z" fill="url(#layerA)" stroke="#E0B890" strokeWidth="2"/>
        <path d="m109 222 195-101 186 94-195 105-186-98Z" fill="url(#layerB)" stroke="#EDF2F5" strokeWidth="2"/>
        <path d="m109 177 195-101 186 94-195 105-186-98Z" fill="url(#layerC)" stroke="#C8D9E2" strokeWidth="2"/>
        <g fill="#1A354A" stroke="#D79970" strokeWidth="2"><circle cx="304" cy="76" r="7"/><circle cx="490" cy="170" r="7"/><circle cx="295" cy="275" r="7"/><circle cx="109" cy="177" r="7"/><circle cx="304" cy="121" r="7"/><circle cx="490" cy="215" r="7"/><circle cx="295" cy="320" r="7"/></g>
        <path d="M421 91h89v49" stroke="#D4DDE4" strokeDasharray="4 5"/><circle cx="510" cy="91" r="4" fill="#C47A4B"/>
        <path d="M125 359H42v-52" stroke="#D4DDE4" strokeDasharray="4 5"/><circle cx="42" cy="359" r="4" fill="#C47A4B"/>
        <text x="420" y="77" fill="#E6EDF2" fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="1">LAYERED LATTICE</text>
        <text x="39" y="385" fill="#E6EDF2" fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="1">INTERFACE</text>
      </svg>
      <div className="artwork-caption"><span>DESIGNED FOR DISCOVERY</span><span>INDIA · R&amp;D</span></div>
      <div className="artwork-orbit" aria-hidden="true">S<span>+</span></div>
    </div>
  );
}

function SiteHeader({ active, menuOpen, setMenuOpen, cartCount, onOpenCart }) {
  const close = () => setMenuOpen(false);
  return (
    <header className={`site-header ${menuOpen ? 'menu-active' : ''}`}>
      <div className="header-inner">
        <Brand onClick={close} />
        <div className="header-controls">
          <button className="basket-button mobile-basket" onClick={onOpenCart} aria-label={`Open basket, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}><BasketIcon /><span>{cartCount}</span></button>
          <button className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'}><span /><span /></button>
        </div>
        <nav id="main-navigation" className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={close} className={active === id ? 'active' : ''}>{label}</a>)}
          <button className="basket-button desktop-basket" onClick={() => { close(); onOpenCart(); }}><BasketIcon /> Basket <span>{cartCount}</span></button>
          <a className="nav-enquiry" href="#enquiry" onClick={close}>Start an enquiry <Arrow diagonal /></a>
        </nav>
      </div>
      <button className={`menu-scrim ${menuOpen ? 'is-visible' : ''}`} onClick={close} aria-label="Close navigation menu" tabIndex={menuOpen ? 0 : -1} />
    </header>
  );
}

function BasketIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M4 8h16l-1.4 12H5.4L4 8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="m8 9 4-6 4 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function Eyebrow({ children }) {
  return <div className="eyebrow"><span className="eyebrow-dot" />{children}</div>;
}

function ProductArt({ product, loading = 'lazy' }) {
  return (
    <div className={`product-art art-${product.visual}${product.image ? ' product-art-has-image' : ''}`} aria-hidden="true">
      {product.image ? <img src={product.image} alt="" loading={loading} decoding="async" /> : <><span>{product.symbol}</span><i /><i /><i /><b /></>}
    </div>
  );
}

function ProductCard({ product, inBasket, onAdd }) {
  return (
    <article className="product-card">
      <a className="product-art-link" href={`#product/${product.id}`} aria-label={`View details for ${product.name}`}><ProductArt product={product} /></a>
      <div className="product-card-body">
        <div className="product-meta"><span>{product.type}</span><span className="quote-badge">Request pricing</span></div>
        <h3><a className="product-title-link" href={`#product/${product.id}`}>{product.name}</a></h3>
        <p>{product.description}</p>
        <div className="product-card-footer"><a className="product-family" href={`#product/${product.id}`}>View details <Arrow /></a><button className={`add-button ${inBasket ? 'added' : ''}`} onClick={() => onAdd(product.id)}>{inBasket ? 'In basket' : 'Add to basket'} <Arrow /></button></div>
      </div>
    </article>
  );
}

function FeaturedMaterialHero() {
  return (
    <section className="store-hero page-wrap">
      <div className="store-hero-copy">
        <Eyebrow>Advanced materials · India supply</Eyebrow>
        <h1>Materials for<br />research.</h1>
        <p>Advanced materials, lab consumables and electrochemical testing for research.</p>
        <div className="home-hero-actions"><a className="button button-dark" href="#materials">Shop materials <Arrow /></a></div>
      </div>
      <img className="store-hero-image" src="/assets/hero-india-supply.png" alt="Strata advanced materials and research supplies, serving laboratories across India." fetchPriority="high" />
    </section>
  );
}

function HomeOfferings() {
  const offerings = [
    { number: '01', image: '/assets/products/Graphene-Based%20Materials.webp', title: 'Materials', description: 'Graphene, MXenes, LDHs and carbon.', action: 'Shop materials', href: '#materials' },
    { number: '02', image: '/assets/products/Electrochemical%20Testing.webp', title: 'Electrochemical testing', description: 'CV, GCD, EIS and HER testing.', action: 'Explore testing', href: '#testing' },
    { number: '03', image: '/assets/products/Consumables.webp', title: 'Consumables', description: 'Electrodes, coin cells and lab supplies.', action: 'Explore products', href: '#consumables' },
  ];

  return (
    <section className="home-offerings page-wrap" aria-labelledby="home-offerings-title">
      <div className="home-section-heading"><h2 id="home-offerings-title">Explore our range</h2></div>
      <div className="home-offerings-grid">
        {offerings.map((item) => (
          <a className="home-offering-card" href={item.href} key={item.number}>
            <span className="home-offering-card-media" aria-hidden="true">
              <img src={item.image} alt="" loading="lazy" decoding="async" />
            </span>
            <span className="home-offering-card-copy">
              
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="home-offering-link">{item.action}<Arrow /></span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function HomeSpecialtyChemicals() {
  return (
    <section className="home-specialty page-wrap" id="specialty-chemicals" aria-labelledby="home-specialty-title">
      <div className="home-specialty-copy"><h2 id="home-specialty-title">Specialty chemicals</h2><p>TBAAB, CTMATB and other reagents on request.</p><div className="home-specialty-actions"><a className="under-link" href="#consumables">Browse chemicals <Arrow /></a><a className="home-specialty-enquiry" href="#enquiry">Ask about availability</a></div></div>
      <div className="home-chemical-list" aria-label="Specialty chemical examples">
        {['TBAAB', 'CTMATB'].map((name) => (
          <a className="home-chemical-card" href="#enquiry" key={name} aria-label={`Enquire about ${name}`}>
            <span className="home-chemical-icon"><MoleculeIcon /></span>
            <span className="home-chemical-card-copy"><strong>{name}</strong></span>
            <Arrow diagonal />
          </a>
        ))}
      </div>
    </section>
  );
}

function HomeCollaborate() {
  return (
    <section className="home-collaborate">
      <div className="home-collaborate-inner page-wrap"><div><h2>Have a project in mind?</h2><p>Custom synthesis, electrode fabrication and testing.</p></div><div className="home-collaborate-actions"><a className="button button-accent" href="#services">Discuss a project <Arrow diagonal /></a></div></div>
    </section>
  );
}

function HomePage({ basketIds, onAddToBasket }) {
  return (
    <main className="home-page">
        <FeaturedMaterialHero />
        <HomeOfferings />
        <HomeSpecialtyChemicals />
        <HomeCollaborate />
    </main>
  );
}

function CollaborationForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const inbox = import.meta.env.VITE_ENQUIRY_EMAIL;
    const subject = encodeURIComponent(`Collaboration enquiry — ${form.get('project')}`);
    const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\nOrganisation: ${form.get('organisation') || 'Not provided'}\nCollaboration area: ${form.get('project')}\n\nProject idea:\n${form.get('details')}`);

    if (inbox) {
      window.location.href = `mailto:${inbox}?subject=${subject}&body=${body}`;
      setStatus('Your email app is ready. Send the message to finish.');
    } else {
      setStatus('Enquiry prepared. Configure the site email to send it to Strata.');
    }
  }

  return (
    <form className="enquiry-form collaboration-form" onSubmit={handleSubmit}>
      <div className="form-row"><label>Your name<input name="name" autoComplete="name" required placeholder="Name" /></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@organisation.com" /></label></div>
      <label>Organisation <span className="optional">OPTIONAL</span><input name="organisation" autoComplete="organization" placeholder="Company or institution" /></label>
      <label>What would you like to collaborate on?<select name="project" defaultValue="" required><option value="" disabled>Select an area</option><option>Custom synthesis</option><option>Electrode fabrication</option><option>Electrochemical testing</option><option>Materials supply</option><option>Other project idea</option></select></label>
      <label>Tell us about your idea<textarea name="details" rows="5" required placeholder="What are you working on, and how would you like to collaborate?" /></label>
      <button className="button button-dark submit-button" type="submit">Send collaboration enquiry <Arrow diagonal /></button>
      <p className="form-note">We’ll follow up about next steps.</p>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  );
}

function CollaborationPage() {
  return (
    <main className="inner-page page-wrap collaboration-page">
      <div className="breadcrumb"><a href="#home">Home</a><span>/</span><span>Collaborate</span></div>
      <section className="collaboration-intro"><div><Eyebrow>Collaboration</Eyebrow><h1>Let’s work together.</h1><p>Tell us about your project and the support you need.</p></div></section>
      <section className="collaboration-form-section" aria-label="Collaboration form"><div className="collaboration-form-heading"><h2>Project details</h2></div><CollaborationForm /></section>
    </main>
  );
}

const testingMethods = [
  { code: 'CV', name: 'Cyclic Voltammetry', description: 'Measure response across an agreed potential range.' },
  { code: 'GCD', name: 'Galvanostatic Charge–Discharge', description: 'Evaluate charge and discharge at agreed currents.' },
  { code: 'EIS', name: 'Electrochemical Impedance Spectroscopy', description: 'Measure impedance with equivalent-circuit fitting.' },
];

const herMethods = [
  { code: 'LSV', name: 'Linear Sweep Voltammetry' },
  { code: 'EIS', name: 'Electrochemical Impedance Spectroscopy' },
  { code: 'CA', name: 'Chronoamperometry' },
];

function ServiceInquiryForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const inbox = import.meta.env.VITE_ENQUIRY_EMAIL;
    const subject = encodeURIComponent(`Electrochemical testing enquiry — ${form.get('service')}`);
    const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\nService: ${form.get('service')}\nSample / material: ${form.get('sample') || 'Not provided'}\nTarget voltage window: ${form.get('voltage') || 'Not provided'}\n\nProject details:\n${form.get('details')}`);

    if (inbox) {
      window.location.href = `mailto:${inbox}?subject=${subject}&body=${body}`;
      setStatus('Your email app is ready. Send the message to finish.');
    } else {
      setStatus('Enquiry prepared. Configure the site email to send it to Strata.');
    }
  }

  return (
    <form className="enquiry-form service-inquiry-form" onSubmit={handleSubmit}>
      <div className="form-row"><label>Your name<input name="name" autoComplete="name" required placeholder="Name" /></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@organisation.com" /></label></div>
      <label>Service of interest<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Supercapacitor testing</option><option>Hydrogen Evolution Reaction (HER)</option><option>CV</option><option>GCD</option><option>EIS with circuit fitting</option><option>LSV</option><option>Chronoamperometry</option><option>Not sure yet</option></select></label>
      <div className="form-row"><label>Sample or material <span className="optional">OPTIONAL</span><input name="sample" placeholder="Material and sample details" /></label><label>Target voltage window <span className="optional">OPTIONAL</span><input name="voltage" placeholder="e.g. up to 3.0 V" /></label></div>
      <label>Project details<textarea name="details" rows="5" required placeholder="Tell us about your sample, objective and any test conditions you have in mind…" /></label>
      <button className="button button-dark submit-button" type="submit">Request a service quote <Arrow diagonal /></button>
      <p className="form-note">Scope and charges are agreed before testing.</p>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  );
}

function TestingServicesPage() {
  const chargeRows = [
    ['Supercapacitor · CV', 'Cyclic voltammetry', 'Quote on request'],
    ['Supercapacitor · GCD', 'Galvanostatic charge–discharge', 'Quote on request'],
    ['Supercapacitor · EIS', 'Impedance spectroscopy with circuit fitting', 'Quote on request'],
    ['HER · LSV', 'Linear sweep voltammetry', 'Quote on request'],
    ['HER · EIS', 'Electrochemical impedance spectroscopy', 'Quote on request'],
    ['HER · Chronoamperometry', 'Chronoamperometry', 'Quote on request'],
    ['HER complete solution', 'LSV + EIS + chronoamperometry', 'Quote on request'],
  ];

  return (
    <main className="inner-page page-wrap testing-page">
      <div className="breadcrumb"><a href="#home">Home</a><span>/</span><span>Electrochemical testing</span></div>
      <section className="shop-heading testing-heading">
        <div><Eyebrow>Electrochemical testing</Eyebrow><h1>Testing services</h1><p>Supercapacitor CV, GCD and EIS, plus complete HER testing.</p></div>
      </section>

      <section className="testing-service-block" aria-labelledby="supercapacitor-title">
        <div className="testing-section-heading"><div><Eyebrow>Supercapacitor</Eyebrow><h2 id="supercapacitor-title">Supercapacitor testing</h2></div><p>Choose a method or combine tests for your electrode.</p></div>
        <div className="testing-method-grid">{testingMethods.map((method) => <article className="testing-method-card" key={method.code}><span>{method.code}</span><h3>{method.name}</h3><p>{method.description}</p></article>)}</div>
        <aside className="electrolyte-note"><span className="electrolyte-note-mark">i</span><div><strong>Electrolytes</strong><p>Aqueous and ionic-liquid options are available. Some systems support up to 3.2 V; suitability depends on the cell setup.</p></div></aside>
      </section>

      <section className="testing-service-block her-service-block" aria-labelledby="her-title">
        <div className="testing-section-heading"><div><Eyebrow>Hydrogen evolution</Eyebrow><h2 id="her-title">HER testing</h2></div><p>LSV, EIS and chronoamperometry for catalyst evaluation.</p></div>
        <div className="her-method-list">{herMethods.map((method, index) => <article className="her-method-row" key={method.code}><span>0{index + 1}</span><strong>{method.name}</strong><small>{method.code}</small></article>)}</div>
        <p className="her-scope-note">Sample, test conditions and reporting are agreed before work begins.</p>
      </section>

      <section className="testing-pricing-section" aria-labelledby="testing-pricing-title">
        <div className="testing-section-heading"><div><Eyebrow>Pricing</Eyebrow><h2 id="testing-pricing-title">Request a quote</h2></div><p>Pricing depends on the method and test requirements.</p></div>
        <div className="charge-table-wrap"><table className="charge-table"><thead><tr><th scope="col">Service</th><th scope="col">Methods included</th><th scope="col">Charges*</th></tr></thead><tbody>{chargeRows.map(([service, methods, charge]) => <tr key={service}><th scope="row">{service}</th><td>{methods}</td><td><span className="charge-badge">{charge}</span></td></tr>)}</tbody></table></div>
      </section>

      <section className="testing-inquiry-section" id="testing-enquiry" aria-labelledby="testing-enquiry-title">
        <div className="testing-inquiry-copy"><Eyebrow>Service enquiry</Eyebrow><h2 id="testing-enquiry-title">Request testing</h2><p>Share your sample and test requirements.</p></div>
        <ServiceInquiryForm />
      </section>
    </main>
  );
}

function ConsumablesAndChemicalsPage({ basketIds, onAddToBasket }) {
  return (
    <main className="inner-page page-wrap consumables-page">
      <div className="breadcrumb"><a href="#home">Home</a><span>/</span><span>Consumables &amp; Specialty Chemicals</span></div>
      <section className="shop-heading consumables-heading">
        <div><Eyebrow>Laboratory supply</Eyebrow><h1>Consumables &amp; chemicals</h1><p>Add items to your basket to request pricing.</p></div>
      </section>
      <section className="catalog-section" id="consumable-products" aria-labelledby="consumables-title">
        <div className="catalog-section-heading"><div><Eyebrow>01 · Lab essentials</Eyebrow><h2 id="consumables-title">Consumables</h2></div><span>{consumableProducts.length} listed products · Pricing on request</span></div>
        <div className="product-grid">{consumableProducts.map((product) => <ProductCard key={product.id} product={product} inBasket={basketIds.includes(product.id)} onAdd={onAddToBasket} />)}</div>
      </section>
      <section className="catalog-section specialty-catalog-section" id="specialty-chemicals" aria-labelledby="specialty-chemicals-title">
        <div className="catalog-section-heading"><div><Eyebrow>02 · Reagents &amp; membranes</Eyebrow><h2 id="specialty-chemicals-title">Specialty chemicals</h2></div><span>{specialtyChemicalProducts.length} listed products · Confirm availability</span></div>
        <div className="product-grid">{specialtyChemicalProducts.map((product) => <ProductCard key={product.id} product={product} inBasket={basketIds.includes(product.id)} onAdd={onAddToBasket} />)}</div>
        <p className="availability-note">Nafion availability is to be confirmed. For broad categories such as brominating agents, include the specific compound and grade you need in your enquiry.</p>
      </section>
      <section className="page-bottom-cta"><div><span>HAVE A SPECIFIC REQUIREMENT?</span><h2>Share the product and quantity you need.</h2></div><a className="button button-accent" href="#enquiry">Make an enquiry <Arrow diagonal /></a></section>
    </main>
  );
}

function MaterialsShop({ basketIds, onAddToBasket }) {
  const [search, setSearch] = useState('');
  const [family, setFamily] = useState(() => {
    const requestedFamily = new URLSearchParams(window.location.hash.split('?')[1] || '').get('family');
    return ['All materials', ...materialFamilies].includes(requestedFamily) ? requestedFamily : 'All materials';
  });
  const [sort, setSort] = useState('featured');
  const families = ['All materials', ...materialFamilies];
  const visibleProducts = materialProducts
    .filter((product) => family === 'All materials' || product.family === family)
    .filter((product) => `${product.name} ${product.type} ${product.description}`.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sort === 'name' ? a.name.localeCompare(b.name) : materialProducts.indexOf(a) - materialProducts.indexOf(b));

  return (
    <main className="inner-page shop-page page-wrap">
      <div className="breadcrumb"><a href="#home">Home</a><span>/</span><span>Materials</span></div>
      <h1 className="visually-hidden">Shop materials</h1>
      <section className="catalogue" aria-label="Material catalogue">
        <div className="catalogue-tools">
          <label className="catalogue-search"><span aria-hidden="true">⌕</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search materials" aria-label="Search materials" /></label>
          <label className="sort-label">Sort by <select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured</option><option value="name">Name A–Z</option></select></label>
        </div>
        <div className="filter-row" aria-label="Filter by material family">{families.map((item) => <button key={item} className={`filter-chip ${family === item ? 'selected' : ''}`} onClick={() => setFamily(item)} aria-pressed={family === item}>{item}</button>)}</div>
        <div className="catalogue-count">Showing {visibleProducts.length} {visibleProducts.length === 1 ? 'material product' : 'material products'} <span>Pricing and availability confirmed by quote</span></div>
        {visibleProducts.length ? <div className="product-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} inBasket={basketIds.includes(product.id)} onAdd={onAddToBasket} />)}</div> : <div className="no-products"><h2>No materials match that search.</h2><p>Try another material name or clear the selected filter.</p><button className="text-link" onClick={() => { setSearch(''); setFamily('All materials'); }}>Clear filters <Arrow /></button></div>}
        <div className="catalogue-footnote"><span className="footnote-mark">i</span><p>Include grade, form and quantity in your quote request.</p></div>
      </section>
      <section className="page-bottom-cta"><div><span>NEED HELP CHOOSING?</span><h2>Tell us about your application.</h2></div><a className="button button-accent" href="#enquiry">Ask our team <Arrow diagonal /></a></section>
    </main>
  );
}

function ProductDetailPage({ product, basketIds, onAddToBasket }) {
  const relatedProducts = catalogProducts.filter((item) => item.family === product.family && item.id !== product.id).slice(0, 3);
  const catalogueHref = product.catalogRoute === 'materials' ? `#materials?family=${encodeURIComponent(product.family)}` : `#${product.catalogRoute}`;
  const specifications = product.specifications?.length ? product.specifications : [
    ['Stock No.', 'To be confirmed'],
    ['Purity / Grade', 'Confirm for the selected item'],
    ['Form / Packing', 'To be confirmed'],
    ['CAS No.', 'To be confirmed'],
    ['Material family', product.family],
  ];

  return (
    <main className="inner-page product-detail-page page-wrap">
      <div className="breadcrumb"><a href="#home">Home</a><span>/</span><a href={catalogueHref}>{product.catalogLabel}</a><span>/</span><span>{product.name}</span></div>
      <section className="product-detail-main">
        <div className="product-detail-visual"><ProductArt product={product} /><span className="product-detail-visual-label">STRATA {product.catalogLabel.toUpperCase()} · {product.family.toUpperCase()}</span></div>
        <div className="product-detail-info">
          <Eyebrow>{product.type} · {product.catalogLabel} listing</Eyebrow>
          <h1>{product.name}</h1>
          <div className="product-price-panel"><span>Price &amp; availability</span><strong>Request a quote</strong><small>Confirmed against your required grade and quantity</small></div>
          <div className="product-detail-actions"><button className="button button-dark" onClick={() => onAddToBasket(product.id)}>{basketIds.includes(product.id) ? 'Added to basket' : 'Add to basket'} <Arrow /></button><button className="button button-accent" onClick={() => { onAddToBasket(product.id); window.location.hash = 'enquiry'; }}>Request pricing <Arrow diagonal /></button></div>
          <p className="product-data-note">Grade, form and pack size confirmed by quote.</p>
        </div>
      </section>
      <section className="product-specifications">
        <div className="product-spec-heading"><Eyebrow>Product information</Eyebrow><h2>Specifications</h2></div>
        <div className="specification-table">{specifications.map(([label, value], index) => <div className={`specification-row ${index % 2 ? 'alternate' : ''}`} key={label}><strong>{label}</strong><span>{value}</span></div>)}</div>
      </section>
      <section className="product-description-grid">
        <div><Eyebrow>Product detail</Eyebrow><h2>About {product.name}</h2></div>
        <div><p>{product.description}</p><div className="shipping-note"><strong>Ordering</strong><span>Price, stock and delivery confirmed by quote.</span></div></div>
      </section>
      <section className="related-products-section">
        <div className="related-products-heading"><div><Eyebrow>Keep exploring</Eyebrow><h2>Related items</h2></div><a className="under-link" href={catalogueHref}>View all {product.catalogLabel.toLowerCase()} <Arrow /></a></div>
        <div className="related-products-grid" role="region" aria-label="Related products" tabIndex={0}>{relatedProducts.map((item) => <ProductCard key={item.id} product={item} inBasket={basketIds.includes(item.id)} onAdd={onAddToBasket} />)}</div>
      </section>
    </main>
  );
}

function BasketDrawer({ open, cart, onClose, onRemove, onSetAmount }) {
  const rows = cart.map((item) => ({ ...catalogProducts.find((product) => product.id === item.id), amount: item.amount || '' })).filter((product) => product.id);
  return (
    <div className={`basket-overlay ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <button className="basket-scrim" onClick={onClose} tabIndex={open ? 0 : -1} aria-label="Close basket" />
      <aside className="basket-drawer" role="dialog" aria-modal="true" aria-label="Your material basket">
        <div className="basket-header"><div><Eyebrow>Your selection</Eyebrow><h2>Basket <span>({rows.length})</span></h2></div><button className="basket-close" onClick={onClose} aria-label="Close basket">×</button></div>
        <p className="basket-explainer">No prices are shown until we confirm the material grade, form and quantity you need.</p>
        <div className="basket-items">{rows.length ? rows.map((product) => <article className="basket-item" key={product.id}><ProductArt product={product} /><div className="basket-item-main"><span>{product.family}</span><h3>{product.name}</h3><label>Required amount <input value={product.amount} onChange={(event) => onSetAmount(product.id, event.target.value)} placeholder="e.g. 5 g or 100 mL" /></label></div><button className="remove-item" onClick={() => onRemove(product.id)} aria-label={`Remove ${product.name}`}>×</button></article>) : <div className="basket-empty"><span className="empty-basket-icon"><BasketIcon /></span><h3>Your basket is empty</h3><p>Add materials to start a quote request.</p><button className="text-link" onClick={() => { onClose(); window.location.hash = 'materials'; }}>Browse materials <Arrow /></button></div>}</div>
        <div className="basket-bottom"><p><span>Next step</span> We’ll confirm pricing and availability with you.</p><button className="button button-dark" disabled={!rows.length} onClick={() => { onClose(); window.location.hash = 'enquiry'; }}>Request a quote <Arrow diagonal /></button></div>
      </aside>
    </div>
  );
}

function AboutPage() {
  return (
    <main className="inner-page page-wrap about-page">
      <div className="breadcrumb"><a href="#home">Home</a><span>/</span><span>About us</span></div>
      <section className="about-page-hero"><Eyebrow>About Strata</Eyebrow><h1>Materials for<br />research.</h1><p>Advanced materials and electrochemical testing for research.</p></section>
      <section className="team-section" aria-labelledby="team-title"><div className="team-heading"><div><h2 id="team-title">Our team</h2></div></div><div className="team-grid"><article className="team-card"><span>TEAM</span><h3>Dr. Suraj Kumar</h3></article><article className="team-card"><span>TEAM</span><h3>Priyakshi Bora</h3></article><article className="team-card"><span>TEAM</span><h3>Amit Mukherjee</h3></article></div></section>
    </main>
  );
}

function EnquiryPage({ cart }) {
  const [status, setStatus] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const inbox = import.meta.env.VITE_ENQUIRY_EMAIL;
    const itemLines = cart.map((item) => {
      const product = catalogProducts.find((entry) => entry.id === item.id);
      return product ? `- ${product.name} | Requested amount: ${item.amount || 'Please advise'}` : null;
    }).filter(Boolean).join('\n');
    const subject = encodeURIComponent(`${cart.length ? 'Product quote request' : 'Website enquiry'} — ${form.get('topic')}`);
    const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\nOrganisation: ${form.get('organisation') || 'Not provided'}\nArea of interest: ${form.get('topic')}\n${itemLines ? `\nItems requested:\n${itemLines}\n` : ''}\nProject details:\n${form.get('message')}`);
    if (inbox) {
      window.location.href = `mailto:${inbox}?subject=${subject}&body=${body}`;
      setStatus('Your email app is ready. Send the message to finish.');
    } else {
      setStatus('Enquiry prepared. Configure the site email to send it to Strata.');
    }
  }
  return (
    <main className="inner-page page-wrap enquiry-page">
      <div className="breadcrumb"><a href="#home">Home</a><span>/</span><span>Enquiry</span></div>
      <section className="enquiry-layout">
        <div className="enquiry-copy"><Eyebrow>{cart.length ? 'Product quote' : 'Enquiry'}</Eyebrow><h1>{cart.length ? <>Request a<br />quote.</> : <>How can we<br />help?</>}</h1><p>{cart.length ? 'Confirm your requirements; we’ll reply with pricing and availability.' : 'Ask about materials, testing or collaboration.'}</p>{cart.length > 0 && <div className="quote-summary"><span>{cart.length} {cart.length === 1 ? 'ITEM' : 'ITEMS'}</span>{cart.map((item) => { const product = catalogProducts.find((entry) => entry.id === item.id); return product && <p key={item.id}>{product.name}<small>{item.amount || 'Amount to be confirmed'}</small></p>; })}<a href="#materials">Edit basket <Arrow /></a></div>}</div>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-row"><label>Your name<input name="name" autoComplete="name" required placeholder="Name" /></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@organisation.com" /></label></div>
          <label>Organisation <span className="optional">OPTIONAL</span><input name="organisation" autoComplete="organization" placeholder="Company or institution" /></label>
          <label>What can we help with?<select name="topic" defaultValue={cart.length ? 'Materials and products' : ''} required><option value="" disabled>Select an area</option><option>Materials</option><option>Consumables</option><option>Specialty chemicals</option><option>Electrochemical testing</option><option>Collaboration</option><option>Materials and products</option><option>R&amp;D services</option><option>Something else</option></select></label>
          <label>A few project details<textarea name="message" rows="5" required placeholder="A short note about your goals, requirements or timeline…" /></label>
          <button className="button button-dark submit-button" type="submit">{cart.length ? 'Prepare quote request' : 'Prepare enquiry'} <Arrow diagonal /></button>
          <p className="form-note">Your email app opens to send the enquiry. No payment is taken.</p>
          {status && <p className="form-status" role="status">{status}</p>}
        </form>
      </section>
    </main>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer"><div className="footer-main page-wrap"><div className="footer-brand"><Brand /><p>Advanced materials, lab consumables and electrochemical testing to support research across India.</p></div><div className="footer-links"><span>EXPLORE</span>{navigation.slice(1).map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</div><div className="footer-contact"><span>QUESTIONS?</span><a className="footer-enquiry" href="#enquiry">Ask us <Arrow diagonal /></a></div></div><div className="site-footnote page-wrap"><p>Prices and specifications are confirmed by quote.</p></div><div className="footer-bottom page-wrap"><span>© {new Date().getFullYear()} Strata Advanced Materials</span></div></footer>
  );
}

export default function App() {
  const [routeLocation, setRouteLocation] = useState(() => window.location.hash.slice(1) || 'home');
  const active = pageFromHash(routeLocation);
  const [menuOpen, setMenuOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem('strata-material-basket') || '[]');
      return Array.isArray(saved) ? saved.filter((item) => item && catalogProducts.some((product) => product.id === item.id)).map((item) => ({ id: item.id, amount: typeof item.amount === 'string' ? item.amount : '' })) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem('strata-material-basket', JSON.stringify(cart));
  }, [cart]);

  const addToBasket = (id) => setCart((current) => current.some((item) => item.id === id) ? current : [...current, { id, amount: '' }]);
  const removeFromBasket = (id) => setCart((current) => current.filter((item) => item.id !== id));
  const setRequestedAmount = (id, amount) => setCart((current) => current.map((item) => item.id === id ? { ...item, amount } : item));
  const basketIds = cart.map((item) => item.id);

  useEffect(() => {
    const updateRoute = () => {
      const next = window.location.hash.slice(1) || 'home';
      setRouteLocation(next);
      setMenuOpen(false);
      if (pageRoutes.has(next.split('?')[0]) || pageFromHash(next) === 'product') window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', updateRoute);
    return () => window.removeEventListener('hashchange', updateRoute);
  }, []);

  useEffect(() => {
    if (!menuOpen && !basketOpen) return undefined;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const previousScrollX = window.scrollX;
    const previousScrollY = window.scrollY;
    const openingHash = window.location.hash;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setBasketOpen(false);
      }
    };
    root.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      root.style.overflow = previousOverflow;
      const scrollY = window.location.hash === openingHash ? previousScrollY : 0;
      window.scrollTo({ left: previousScrollX, top: scrollY, behavior: 'auto' });
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen, basketOpen]);

  const content = active === 'home' ? <HomePage basketIds={basketIds} onAddToBasket={addToBasket} />
    : active === 'materials' ? <MaterialsShop key={routeLocation} basketIds={basketIds} onAddToBasket={addToBasket} />
      : active === 'testing' ? <TestingServicesPage />
        : active === 'consumables' ? <ConsumablesAndChemicalsPage basketIds={basketIds} onAddToBasket={addToBasket} />
          : active === 'product' ? <ProductDetailPage key={routeLocation} product={catalogProducts.find((item) => item.id === routeLocation.split('/')[1]?.split('?')[0])} basketIds={basketIds} onAddToBasket={addToBasket} />
            : active === 'services' ? <CollaborationPage />
              : active === 'about' ? <AboutPage />
                : active === 'enquiry' ? <EnquiryPage cart={cart} />
                  : <HomePage />;

  const activeNavigation = active === 'product' ? catalogProducts.find((item) => item.id === routeLocation.split('/')[1]?.split('?')[0])?.catalogRoute : active;
  return <><SiteHeader active={activeNavigation} menuOpen={menuOpen} setMenuOpen={setMenuOpen} cartCount={cart.length} onOpenCart={() => { setMenuOpen(false); setBasketOpen(true); }} />{content}<SiteFooter /><BasketDrawer open={basketOpen} cart={cart} onClose={() => setBasketOpen(false)} onRemove={removeFromBasket} onSetAmount={setRequestedAmount} /></>;
}



