import React, { useEffect, useState } from 'react';
import { featuredMaterials, materialProducts, shopCategories } from './data/products.js';

const navigation = [
  ['home', 'Home'],
  ['materials', 'Materials'],
  ['consumables', 'Consumables'],
  ['testing', 'Testing'],
  ['services', 'Services'],
  ['about', 'About us'],
];
const pageRoutes = new Set([...navigation.map(([id]) => id), 'enquiry']);

function pageFromHash(hash) {
  const location = hash.split('?')[0] || 'home';
  const [page, productId] = location.split('/');
  if (page === 'product' && materialProducts.some((product) => product.id === productId)) return 'product';
  return pageRoutes.has(page) ? page : 'home';
}

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

function ProductArt({ product }) {
  return <div className={`product-art art-${product.visual}`} aria-hidden="true"><span>{product.symbol}</span><i /><i /><i /><b /></div>;
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

function FeaturedMaterialHero({ basketIds, onAddToBasket }) {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const product = featuredMaterials[featuredIndex];
  const showPrevious = () => setFeaturedIndex((featuredIndex + featuredMaterials.length - 1) % featuredMaterials.length);
  const showNext = () => setFeaturedIndex((featuredIndex + 1) % featuredMaterials.length);

  return (
    <section className="store-hero page-wrap">
      <div className="store-hero-copy">
        <Eyebrow>Advanced materials · Research supply</Eyebrow>
        <h1>Materials for<br />what comes <span>next.</span></h1>
        <p>Shop graphene, MXenes, MOFs and other advanced materials. Build your basket and request a quote for the specification you need.</p>
        <a className="button button-dark" href="#home-catalogue">Shop materials <Arrow /></a>
        <div className="hero-trust-line"><span>01</span><i /><span>Material families for research and development</span></div>
      </div>
      <article className="hero-feature" aria-live="polite">
        <div className="hero-feature-image"><ProductArt product={product} /><span className="hero-feature-label"><i /> FEATURED MATERIAL / 0{featuredIndex + 1}</span></div>
        <div className="hero-feature-body">
          <div className="hero-feature-meta"><span>{product.type}</span><span>Pricing on request</span></div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <div className="hero-feature-actions"><button className={`add-button ${basketIds.includes(product.id) ? 'added' : ''}`} onClick={() => onAddToBasket(product.id)}>{basketIds.includes(product.id) ? 'In basket' : 'Add to basket'} <Arrow /></button><a href={`#product/${product.id}`}>Details <Arrow diagonal /></a></div>
          <div className="hero-carousel-controls"><button onClick={showPrevious} aria-label="Previous featured material">←</button><div>{featuredMaterials.map((item, index) => <button key={item.id} className={index === featuredIndex ? 'current' : ''} onClick={() => setFeaturedIndex(index)} aria-label={`Show ${item.name}`} aria-pressed={index === featuredIndex} />)}</div><button onClick={showNext} aria-label="Next featured material">→</button></div>
        </div>
      </article>
    </section>
  );
}

function HomeProductCatalogue({ basketIds, onAddToBasket }) {
  const [search, setSearch] = useState('');
  const [family, setFamily] = useState('All materials');
  const families = ['All materials', ...materialProducts.map((product) => product.family)];
  const visibleProducts = materialProducts.filter((product) => family === 'All materials' || product.family === family)
    .filter((product) => `${product.name} ${product.type} ${product.description}`.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="home-product-catalogue page-wrap" id="home-catalogue">
      <div className="shop-section-head"><div><Eyebrow>Shop Strata materials</Eyebrow><h2>Find your material<br /><em>starting point.</em></h2></div><a className="under-link" href="#materials">Open full catalogue <Arrow /></a></div>
      <div className="catalogue-tools home-catalogue-tools"><label className="catalogue-search"><span aria-hidden="true">⌕</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search graphene, MXenes, MOFs…" aria-label="Search materials on homepage" /></label><span className="home-catalogue-note">{visibleProducts.length} material families · Request pricing</span></div>
      <div className="filter-row" aria-label="Filter homepage materials">{families.map((item) => <button key={item} className={`filter-chip ${family === item ? 'selected' : ''}`} onClick={() => setFamily(item)} aria-pressed={family === item}>{item}</button>)}</div>
      {visibleProducts.length ? <div className="home-products-grid">{visibleProducts.map((item) => <ProductCard key={item.id} product={item} inBasket={basketIds.includes(item.id)} onAdd={onAddToBasket} />)}</div> : <div className="no-products"><h2>No materials match that search.</h2><button className="text-link" onClick={() => { setSearch(''); setFamily('All materials'); }}>Clear filters <Arrow /></button></div>}
      <div className="home-catalogue-foot"><span>Need a particular grade, form or quantity?</span><a href="#enquiry">Include it in a quote request <Arrow /></a></div>
    </section>
  );
}

function ShopByCategory() {
  return (
    <section className="shop-by-category page-wrap">
      <div className="category-section-heading"><Eyebrow>Explore the range</Eyebrow><h2>Shop by category</h2><p>Browse advanced material families for your research and development work.</p></div>
      <div className="shop-category-grid">{shopCategories.map((category) => <a className="shop-category-card" key={category.family} href={`#materials?family=${encodeURIComponent(category.family)}`}><h3>{category.title}</h3><p>{category.description}</p><span>View products <Arrow /></span></a>)}</div>
    </section>
  );
}

function HomePage({ basketIds, onAddToBasket }) {
  return (
    <>
      <main>
        <FeaturedMaterialHero basketIds={basketIds} onAddToBasket={onAddToBasket} />
        <ShopByCategory />
        <HomeProductCatalogue basketIds={basketIds} onAddToBasket={onAddToBasket} />

        <section className="intro-band page-wrap">
          <div className="section-label"><span>01 — WHY STRATA</span><span>SCROLL TO EXPLORE ↓</span></div>
          <div className="intro-grid"><h2>Good research needs<br /><em>the right building blocks.</em></h2><div><p>Browse material families, share the grade and quantity you need, and bring the details together in one quote request.</p><a className="under-link" href="#about">A little about us <Arrow /></a></div></div>
        </section>

        <section className="capabilities-section page-wrap" id="capabilities">
          <div className="section-heading"><div><Eyebrow>Capabilities</Eyebrow><h2>Four ways to move<br />your work forward.</h2></div><p>Choose a starting point. We’ll help you find the right next step for your project.</p></div>
          <div className="category-grid">{categories.map((item) => <CategoryCard key={item.id} item={item} />)}</div>
        </section>

        <section className="statement-band"><div className="statement-inner page-wrap"><span className="statement-mark">“</span><div><Eyebrow>Our approach</Eyebrow><p>From the first material question to the final measurement, <span>make every step count.</span></p></div><a href="#services" className="circle-link" aria-label="Explore our services"><Arrow diagonal /></a></div></section>

        <section className="home-about page-wrap"><div className="about-visual"><div className="about-visual-grid"/><div className="about-stamp"><span>SCIENCE,</span><span>WITH INTENT.</span><i>SM</i></div><span className="visual-caption">MATERIALS / METHODS / MEASUREMENT</span></div><div className="about-summary"><Eyebrow>Made for collaboration</Eyebrow><h2>Research is a team sport.</h2><p>We believe useful progress comes from clear conversations, thoughtful material choices and technical work shaped around the question at hand.</p><a className="under-link" href="#about">Get to know Strata <Arrow /></a></div></section>

        <section className="home-cta page-wrap"><div><Eyebrow>Have a project in mind?</Eyebrow><h2>Let’s find the right<br />starting point.</h2></div><a className="button button-accent" href="#enquiry">Tell us what you’re working on <Arrow diagonal /></a></section>
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
      <section className="page-bottom-cta"><div><span>HAVE A SPECIFIC REQUIREMENT?</span><h2>Let’s talk through the details.</h2></div><a className="button button-accent" href="#enquiry">Make an enquiry <Arrow diagonal /></a></section>
    </main>
  );
}

function MaterialsShop({ basketIds, onAddToBasket }) {
  const [search, setSearch] = useState('');
  const [family, setFamily] = useState(() => {
    const requestedFamily = new URLSearchParams(window.location.hash.split('?')[1] || '').get('family');
    return ['All materials', ...materialProducts.map((product) => product.family)].includes(requestedFamily) ? requestedFamily : 'All materials';
  });
  const [sort, setSort] = useState('featured');
  const families = ['All materials', ...materialProducts.map((product) => product.family)];
  const visibleProducts = materialProducts
    .filter((product) => family === 'All materials' || product.family === family)
    .filter((product) => `${product.name} ${product.type} ${product.description}`.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sort === 'name' ? a.name.localeCompare(b.name) : materialProducts.indexOf(a) - materialProducts.indexOf(b));

  return (
    <main className="inner-page shop-page page-wrap">
      <div className="breadcrumb"><a href="#home">Home</a><span>/</span><span>Materials</span></div>
      <section className="shop-heading">
        <div><Eyebrow>Material catalogue</Eyebrow><h1>Shop materials.</h1><p>Browse the material families, add your selections to the basket and request pricing for your required grade and quantity.</p></div>
        <div className="shop-promise"><span>01 / SELECT</span><span>02 / SPECIFY</span><span>03 / GET A QUOTE</span></div>
      </section>
      <section className="catalogue" aria-label="Material catalogue">
        <div className="catalogue-tools">
          <label className="catalogue-search"><span aria-hidden="true">⌕</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search materials" aria-label="Search materials" /></label>
          <label className="sort-label">Sort by <select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured</option><option value="name">Name A–Z</option></select></label>
        </div>
        <div className="filter-row" aria-label="Filter by material family">{families.map((item) => <button key={item} className={`filter-chip ${family === item ? 'selected' : ''}`} onClick={() => setFamily(item)} aria-pressed={family === item}>{item}</button>)}</div>
        <div className="catalogue-count">Showing {visibleProducts.length} {visibleProducts.length === 1 ? 'material family' : 'material families'} <span>Pricing and availability confirmed by quote</span></div>
        {visibleProducts.length ? <div className="product-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} inBasket={basketIds.includes(product.id)} onAdd={onAddToBasket} />)}</div> : <div className="no-products"><h2>No materials match that search.</h2><p>Try another material name or clear the selected filter.</p><button className="text-link" onClick={() => { setSearch(''); setFamily('All materials'); }}>Clear filters <Arrow /></button></div>}
        <div className="catalogue-footnote"><span className="footnote-mark">i</span><p>Material grades, forms, quantities, lead times and pricing are confirmed for each request. Add items to your basket and include the details you need in the quote request.</p></div>
      </section>
      <section className="page-bottom-cta"><div><span>NEED HELP CHOOSING?</span><h2>Tell us about your application.</h2></div><a className="button button-accent" href="#enquiry">Ask our team <Arrow diagonal /></a></section>
    </main>
  );
}

function ProductDetailPage({ product, basketIds, onAddToBasket }) {
  const relatedProducts = materialProducts.filter((item) => item.id !== product.id).slice(0, 3);
  const specifications = product.specifications?.length ? product.specifications : [
    ['Stock No.', 'To be added with the product listing'],
    ['Purity / Grade', 'Confirm for the selected item'],
    ['Form / Packing', 'To be confirmed'],
    ['CAS No.', 'Item-specific; add with product documentation'],
    ['Material family', product.family],
  ];

  return (
    <main className="inner-page product-detail-page page-wrap">
      <div className="breadcrumb"><a href="#home">Home</a><span>/</span><a href={`#materials?family=${encodeURIComponent(product.family)}`}>{product.family}</a><span>/</span><span>{product.name}</span></div>
      <section className="product-detail-main">
        <div className="product-detail-visual"><ProductArt product={product} /><span className="product-detail-visual-label">STRATA MATERIALS · {product.family.toUpperCase()}</span></div>
        <div className="product-detail-info">
          <Eyebrow>{product.type} · Material family listing</Eyebrow>
          <h1>{product.name}</h1>
          <p className="product-detail-summary">{product.description}</p>
          <div className="product-price-panel"><span>Price &amp; availability</span><strong>Request a quote</strong><small>Confirmed against your required grade and quantity</small></div>
          <div className="product-detail-actions"><button className="button button-dark" onClick={() => onAddToBasket(product.id)}>{basketIds.includes(product.id) ? 'Added to basket' : 'Add to basket'} <Arrow /></button><button className="button button-accent" onClick={() => { onAddToBasket(product.id); window.location.hash = 'enquiry'; }}>Request pricing <Arrow diagonal /></button></div>
          <p className="product-data-note">Product-specific specifications will be added when Strata’s item list is supplied.</p>
        </div>
      </section>
      <section className="product-specifications">
        <div className="product-spec-heading"><Eyebrow>Product information</Eyebrow><h2>Specifications</h2></div>
        <div className="specification-table">{specifications.map(([label, value], index) => <div className={`specification-row ${index % 2 ? 'alternate' : ''}`} key={label}><strong>{label}</strong><span>{value}</span></div>)}</div>
      </section>
      <section className="product-description-grid">
        <div><Eyebrow>Product detail</Eyebrow><h2>About {product.name}</h2></div>
        <div><p>{product.description}</p><p>This is a category-level listing while the individual products are being prepared. Add the exact product name, stock number, specifications, description and available forms to publish a complete product page.</p><div className="shipping-note"><strong>Ordering information</strong><span>Pricing, stock, lead time and delivery details are confirmed with the quote.</span></div></div>
      </section>
      <section className="related-products-section">
        <div className="related-products-heading"><div><Eyebrow>Keep exploring</Eyebrow><h2>Related items</h2></div><a className="under-link" href="#materials">View all materials <Arrow /></a></div>
        <div className="related-products-grid">{relatedProducts.map((item) => <ProductCard key={item.id} product={item} inBasket={basketIds.includes(item.id)} onAdd={onAddToBasket} />)}</div>
      </section>
    </main>
  );
}

function BasketDrawer({ open, cart, onClose, onRemove, onSetAmount }) {
  const rows = cart.map((item) => ({ ...materialProducts.find((product) => product.id === item.id), amount: item.amount || '' })).filter((product) => product.id);
  return (
    <div className={`basket-overlay ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <button className="basket-scrim" onClick={onClose} tabIndex={open ? 0 : -1} aria-label="Close basket" />
      <aside className="basket-drawer" role="dialog" aria-modal="true" aria-label="Your material basket">
        <div className="basket-header"><div><Eyebrow>Your selection</Eyebrow><h2>Basket <span>({rows.length})</span></h2></div><button className="basket-close" onClick={onClose} aria-label="Close basket">×</button></div>
        <p className="basket-explainer">No prices are shown until we confirm the material grade, form and quantity you need.</p>
        <div className="basket-items">{rows.length ? rows.map((product) => <article className="basket-item" key={product.id}><ProductArt product={product} /><div className="basket-item-main"><span>{product.family}</span><h3>{product.name}</h3><label>Required amount <input value={product.amount} onChange={(event) => onSetAmount(product.id, event.target.value)} placeholder="e.g. 5 g or 100 mL" /></label></div><button className="remove-item" onClick={() => onRemove(product.id)} aria-label={`Remove ${product.name}`}>×</button></article>) : <div className="basket-empty"><span className="empty-basket-icon"><BasketIcon /></span><h3>Your basket is empty</h3><p>Add material families to start a quote request.</p><button className="text-link" onClick={() => { onClose(); window.location.hash = 'materials'; }}>Browse materials <Arrow /></button></div>}</div>
        <div className="basket-bottom"><p><span>Next step</span> We’ll confirm pricing and availability with you.</p><button className="button button-dark" disabled={!rows.length} onClick={() => { onClose(); window.location.hash = 'enquiry'; }}>Request a quote <Arrow diagonal /></button></div>
      </aside>
    </div>
  );
}

function AboutPage() {
  return (
    <main className="inner-page page-wrap">
      <div className="breadcrumb"><a href="#home">Home</a><span>/</span><span>About us</span></div>
      <section className="about-page-hero"><Eyebrow>About Strata</Eyebrow><h1>Science moves<br />when people <em>connect.</em></h1><p>Strata Advanced Materials is built around a simple idea: make advanced materials and electrochemical know-how easier to bring into the lab.</p></section>
      <section className="about-values"><div className="values-aside"><span>OUR POINT OF VIEW</span><div className="values-symbol">S<span>↗</span></div></div><div className="values-content"><h2>Curiosity needs<br /><em>good company.</em></h2><p>Whether you are exploring a new material, developing a cell or planning a test, the details matter. We aim to make those conversations practical, clear and collaborative.</p><div className="value-points"><article><span>01</span><h3>Start with the question</h3><p>Understand the goal before recommending a material, method or service.</p></article><article><span>02</span><h3>Make it practical</h3><p>Keep the next step clear, scoped and connected to the real work.</p></article><article><span>03</span><h3>Build together</h3><p>Good outcomes come from open communication at every stage.</p></article></div></div></section>
      <section className="page-bottom-cta"><div><span>LET’S MAKE SOMETHING USEFUL</span><h2>Bring us your next question.</h2></div><a className="button button-accent" href="#enquiry">Start a conversation <Arrow diagonal /></a></section>
    </main>
  );
}

function EnquiryPage({ cart }) {
  const [status, setStatus] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const inbox = import.meta.env.VITE_ENQUIRY_EMAIL;
    const materialLines = cart.map((item) => {
      const product = materialProducts.find((entry) => entry.id === item.id);
      return product ? `- ${product.name} | Requested amount: ${item.amount || 'Please advise'}` : null;
    }).filter(Boolean).join('\n');
    const subject = encodeURIComponent(`${cart.length ? 'Material quote request' : 'Website enquiry'} — ${form.get('topic')}`);
    const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\nOrganisation: ${form.get('organisation') || 'Not provided'}\nArea of interest: ${form.get('topic')}\n${materialLines ? `\nMaterials requested:\n${materialLines}\n` : ''}\nProject details:\n${form.get('message')}`);
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
        <div className="enquiry-copy"><Eyebrow>{cart.length ? 'Material quote request' : 'Start a conversation'}</Eyebrow><h1>{cart.length ? <>Let’s price<br />your <em>materials.</em></> : <>What are you<br />working <em>on?</em></>}</h1><p>{cart.length ? 'Share your requirements and we’ll follow up to confirm grade, availability, pricing and lead time.' : 'Tell us a little about your project, material or testing needs. We’ll have a better place to start.'}</p>{cart.length > 0 && <div className="quote-summary"><span>YOUR BASKET · {cart.length} {cart.length === 1 ? 'ITEM' : 'ITEMS'}</span>{cart.map((item) => { const product = materialProducts.find((entry) => entry.id === item.id); return product && <p key={item.id}>{product.name}<small>{item.amount || 'Amount to be confirmed'}</small></p>; })}<a href="#materials">Edit basket <Arrow /></a></div>}<div className="enquiry-aside"><span className="aside-symbol">↗</span><span>Materials · Consumables<br />Testing · R&amp;D services</span></div></div>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-row"><label>Your name<input name="name" autoComplete="name" required placeholder="Name" /></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@organisation.com" /></label></div>
          <label>Organisation <span className="optional">OPTIONAL</span><input name="organisation" autoComplete="organization" placeholder="Company or institution" /></label>
          <label>What can we help with?<select name="topic" defaultValue={cart.length ? 'Materials' : ''} required><option value="" disabled>Select an area</option><option>Materials</option><option>Consumables</option><option>Electrochemical testing</option><option>R&amp;D services</option><option>Something else</option></select></label>
          <label>A few project details<textarea name="message" rows="5" required placeholder="A short note about your goals, requirements or timeline…" /></label>
          <button className="button button-dark submit-button" type="submit">{cart.length ? 'Prepare quote request' : 'Prepare enquiry'} <Arrow diagonal /></button>
          <p className="form-note">Submitting opens your email app when an enquiry inbox is configured. No payment is taken on this site.</p>
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
  const [routeLocation, setRouteLocation] = useState(() => window.location.hash.slice(1) || 'home');
  const active = pageFromHash(routeLocation);
  const [menuOpen, setMenuOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem('strata-material-basket') || '[]');
      return Array.isArray(saved) ? saved.filter((item) => item && materialProducts.some((product) => product.id === item.id)).map((item) => ({ id: item.id, amount: typeof item.amount === 'string' ? item.amount : '' })) : [];
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
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setBasketOpen(false);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen, basketOpen]);

  const content = active === 'home' ? <HomePage basketIds={basketIds} onAddToBasket={addToBasket} />
    : active === 'materials' ? <MaterialsShop key={routeLocation} basketIds={basketIds} onAddToBasket={addToBasket} />
      : active === 'product' ? <ProductDetailPage key={routeLocation} product={materialProducts.find((item) => item.id === routeLocation.split('/')[1]?.split('?')[0])} basketIds={basketIds} onAddToBasket={addToBasket} />
      : pageCopy[active] ? <CategoryPage id={active} />
      : active === 'about' ? <AboutPage />
        : active === 'enquiry' ? <EnquiryPage cart={cart} />
          : <HomePage />;

  return <><SiteHeader active={active === 'product' ? 'materials' : active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} cartCount={cart.length} onOpenCart={() => { setMenuOpen(false); setBasketOpen(true); }} />{content}<SiteFooter /><BasketDrawer open={basketOpen} cart={cart} onClose={() => setBasketOpen(false)} onRemove={removeFromBasket} onSetAmount={setRequestedAmount} /></>;
}



