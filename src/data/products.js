// Keep catalogue items and their family assignments together for easy updates.
const materialGroups = [
  {
    family: 'Graphene-based Materials',
    products: [
      { id: 'reduced-graphene-oxide', name: 'Reduced graphene oxide', type: 'Graphene-based material', symbol: 'rGO', visual: 'graphene', image: '/assets/products/reduced-graphene-oxide.webp', description: 'Research-grade reduced graphene oxide; grade and quantity on request.' },
      { id: 'graphene-oxide', name: 'Graphene oxide', type: 'Graphene-based material', symbol: 'GO', visual: 'graphene', description: 'Graphene oxide; grade and quantity on request.' },
      { id: 'aminated-graphene', name: 'Aminated graphene', type: 'Functionalised graphene', symbol: 'NH₂', visual: 'graphene', description: 'Aminated graphene; grade and quantity on request.' },
      { id: 'brominated-graphene', name: 'Brominated graphene', type: 'Functionalised graphene', symbol: 'Br', visual: 'graphene', description: 'Brominated graphene; grade and quantity on request.' },
      { id: 'custom-doped-graphene', name: 'Custom doped graphene', type: 'Custom graphene', symbol: 'C*', visual: 'graphene', description: 'Custom doping by request; specify your target dopant.' },
      { id: 'flash-graphene', name: 'Flash graphene', type: 'Graphene-based material', symbol: 'FG', visual: 'graphene', description: 'Flash graphene; form and quantity on request.' },
    ],
  },
  {
    family: 'MAX Phases and MXenes',
    products: [
      { id: 'ti3alc2-max-phase', name: 'Ti3AlC2 MAX Phase', type: 'MAX phase', symbol: 'Ti₃', visual: 'mxene', description: 'Ti3AlC2 MAX phase; grade and quantity on request.' },
      { id: 'v2alc-max-phase', name: 'V2AlC MAX Phase', type: 'MAX phase', symbol: 'V₂', visual: 'mxene', description: 'V2AlC MAX phase; grade and quantity on request.' },
      { id: 'cr2alc-max-phase', name: 'Cr2AlC MAX Phase', type: 'MAX phase', symbol: 'Cr₂', visual: 'mxene', description: 'Cr2AlC MAX phase; grade and quantity on request.' },
      { id: 'ti3c2tx-mxene', name: 'Ti3C2Tx MXene', type: 'MXene', symbol: 'Ti₃', visual: 'mxene', image: '/assets/products/Ti3C2Tx-MXene.webp', description: 'Ti3C2Tx MXene; grade and quantity on request.' },
      { id: 'v2ctx-mxene', name: 'V2CTx MXene', type: 'MXene', symbol: 'V₂', visual: 'mxene', description: 'V2CTx MXene; grade and quantity on request.' },
      { id: 'cr2ctx-mxene', name: 'Cr2CTx MXene', type: 'MXene', symbol: 'Cr₂', visual: 'mxene', description: 'Cr2CTx MXene; grade and quantity on request.' },
    ],
  },
  {
    family: 'Layered Double Hydroxides (LDH)',
    products: [
      { id: 'nial-ldh', name: 'NiAl LDH', type: 'Layered double hydroxide', symbol: 'NiAl', visual: 'ldh', description: 'NiAl LDH; grade and quantity on request.' },
      { id: 'nicoal-ldh', name: 'NiCoAl LDH', type: 'Layered double hydroxide', symbol: 'NiCo', visual: 'ldh', description: 'NiCoAl LDH; grade and quantity on request.' },
    ],
  },
  {
    family: 'Activated Carbon & Charcoal',
    products: [
      { id: 'biomass-charcoal', name: 'Waste-based biomass charcoal (locally sourced)', type: 'Biomass charcoal', symbol: 'BC', visual: 'carbon', description: 'Locally sourced biomass charcoal; quantity on request.' },
      { id: 'rice-husk-activated-carbon', name: 'Research-grade rice husk activated carbon', type: 'Activated carbon', symbol: 'AC', visual: 'carbon', description: 'Research-grade rice husk activated carbon; form on request.' },
    ],
  },
];

export const materialFamilies = materialGroups.map(({ family }) => family);

export const materialProducts = materialGroups.flatMap(({ family, products }) =>
  products.map((product) => ({ ...product, family, catalogLabel: 'Materials', catalogRoute: 'materials' })),
);

export const consumableProducts = [
  { id: 'ag-agcl-reference-electrode', name: 'Ag/AgCl Reference electrode', type: 'Reference electrode', symbol: 'Ag', visual: 'carbon', description: 'Ag/AgCl reference electrode; configuration on request.' },
  { id: 'graphite-sheet', name: 'Graphite sheet', type: 'Electrode material', symbol: 'C', visual: 'carbon', description: 'Graphite sheet; dimensions on request.' },
  { id: 'cr2032-coin-cell-cases', name: 'CR2032 coin cell cases', type: 'Coin cell component', symbol: 'CR', visual: 'carbon', description: 'CR2032 coin cell cases; pack size on request.' },
  { id: 'hydrothermal-reactors', name: 'Hydrothermal reactors', type: 'Laboratory equipment', symbol: 'H', visual: 'carbon', description: 'Hydrothermal reactors; configurations on request.' },
].map((product) => ({ ...product, family: 'Consumables', catalogLabel: 'Consumables', catalogRoute: 'consumables' }));

export const specialtyChemicalProducts = [
  { id: 'brominating-agents', name: 'Brominating agents', type: 'Specialty chemical', symbol: 'Br', visual: 'mof', description: 'Specify compound, grade and quantity.' },
  { id: 'ctmatb', name: 'CTMATB', type: 'Specialty chemical', symbol: 'CT', visual: 'mof', description: 'CTMATB; specification on request.' },
  { id: 'tbaab', name: 'TBAAB', type: 'Specialty chemical', symbol: 'TBA', visual: 'mof', description: 'TBAAB; specification on request.' },
  { id: 'nafion', name: 'Nafion', type: 'Specialty chemical', symbol: 'N', visual: 'mof', description: 'Nafion; form and grade on request.' },
].map((product) => ({ ...product, family: 'Specialty Chemicals', catalogLabel: 'Specialty Chemicals', catalogRoute: 'consumables' }));

export const catalogProducts = [...materialProducts, ...consumableProducts, ...specialtyChemicalProducts];

const featuredMaterialIds = ['reduced-graphene-oxide', 'ti3c2tx-mxene', 'nial-ldh'];
export const featuredMaterials = featuredMaterialIds
  .map((id) => materialProducts.find((product) => product.id === id))
  .filter(Boolean);
