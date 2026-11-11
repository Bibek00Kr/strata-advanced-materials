// Product and category content lives here so catalog updates do not require
// changes to the page components in App.jsx.
export const materialProducts = [
  {
    id: 'graphene',
    family: 'Graphene',
    name: 'Graphene & related materials',
    type: 'Carbon nanomaterials',
    description: 'Graphene family materials for research into conductive networks, composites and electrochemical systems.',
    symbol: 'G',
    visual: 'graphene',
  },
  {
    id: 'mxenes',
    family: 'MXenes',
    name: 'MXene materials',
    type: '2D materials',
    description: 'Two-dimensional carbide and nitride materials for energy storage and functional materials research.',
    symbol: 'M',
    visual: 'mxene',
  },
  {
    id: 'ldhs',
    family: 'LDHs',
    name: 'Layered double hydroxides',
    type: 'Layered materials',
    description: 'Layered hydroxide material families for catalyst, electrode and materials studies.',
    symbol: 'L',
    visual: 'ldh',
  },
  {
    id: 'mofs',
    family: 'MOFs',
    name: 'Metal–organic frameworks',
    type: 'Porous materials',
    description: 'Framework materials with tuneable composition for research and development applications.',
    symbol: 'F',
    visual: 'mof',
  },
  {
    id: 'heterostructures',
    family: 'Heterostructures',
    name: 'Material heterostructures',
    type: 'Composite systems',
    description: 'Combined material systems for investigating interfaces and complementary properties.',
    symbol: 'H',
    visual: 'hetero',
  },
];

const featuredMaterialIds = ['graphene', 'mxenes', 'mofs'];
export const featuredMaterials = featuredMaterialIds
  .map((id) => materialProducts.find((product) => product.id === id))
  .filter(Boolean);

export const shopCategories = [
  {
    family: 'Graphene',
    title: 'Graphene & related materials',
    description: 'Carbon-based materials for conductive networks, composites and electrochemical research.',
  },
  {
    family: 'MXenes',
    title: 'MXenes',
    description: 'Two-dimensional carbide and nitride material families for energy storage and functional materials research.',
  },
  {
    family: 'LDHs',
    title: 'Layered double hydroxides',
    description: 'Layered hydroxide materials for electrode, catalyst and materials studies.',
  },
  {
    family: 'MOFs',
    title: 'Metal–organic frameworks',
    description: 'Framework materials with tuneable compositions for research and development.',
  },
  {
    family: 'Heterostructures',
    title: 'Heterostructures',
    description: 'Combined material systems for exploring interfaces and complementary properties.',
  },
  {
    family: 'All materials',
    title: 'Explore all materials',
    description: 'Browse every material family and build a quote request around your requirements.',
  },
];
