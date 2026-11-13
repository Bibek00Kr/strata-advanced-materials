// Keep catalogue items and their family assignments together for easy updates.
const materialGroups = [
  {
    family: 'Graphene-based Materials',
    products: [
      { id: 'reduced-graphene-oxide', name: 'Reduced graphene oxide', type: 'Graphene-based material', symbol: 'rGO', visual: 'graphene', image: '/assets/products/reduced-graphene-oxide.webp', description: 'Reduced graphene oxide for materials research. Contact Strata to confirm grade, form and quantity.' },
      { id: 'graphene-oxide', name: 'Graphene oxide', type: 'Graphene-based material', symbol: 'GO', visual: 'graphene', description: 'Graphene oxide for materials research. Contact Strata to confirm grade, form and quantity.' },
      { id: 'aminated-graphene', name: 'Aminated graphene', type: 'Functionalised graphene', symbol: 'NH₂', visual: 'graphene', description: 'Aminated graphene for materials research. Contact Strata to confirm grade, form and quantity.' },
      { id: 'brominated-graphene', name: 'Brominated graphene', type: 'Functionalised graphene', symbol: 'Br', visual: 'graphene', description: 'Brominated graphene for materials research. Contact Strata to confirm grade, form and quantity.' },
      { id: 'custom-doped-graphene', name: 'Custom doped graphene', type: 'Custom graphene', symbol: 'C*', visual: 'graphene', description: 'Share your target dopant and requirements so the specification can be discussed.' },
      { id: 'flash-graphene', name: 'Flash graphene', type: 'Graphene-based material', symbol: 'FG', visual: 'graphene', description: 'Flash graphene for materials research. Contact Strata to confirm grade, form and quantity.' },
    ],
  },
  {
    family: 'MAX Phases and MXenes',
    products: [
      { id: 'ti3alc2-max-phase', name: 'Ti3AlC2 MAX Phase', type: 'MAX phase', symbol: 'Ti₃', visual: 'mxene', description: 'Ti3AlC2 MAX Phase. Contact Strata to confirm grade, form and quantity.' },
      { id: 'v2alc-max-phase', name: 'V2AlC MAX Phase', type: 'MAX phase', symbol: 'V₂', visual: 'mxene', description: 'V2AlC MAX Phase. Contact Strata to confirm grade, form and quantity.' },
      { id: 'cr2alc-max-phase', name: 'Cr2AlC MAX Phase', type: 'MAX phase', symbol: 'Cr₂', visual: 'mxene', description: 'Cr2AlC MAX Phase. Contact Strata to confirm grade, form and quantity.' },
      { id: 'ti3c2tx-mxene', name: 'Ti3C2Tx MXene', type: 'MXene', symbol: 'Ti₃', visual: 'mxene', image: '/assets/products/Ti3C2Tx-MXene.webp', description: 'Ti3C2Tx MXene. Contact Strata to confirm grade, form and quantity.' },
      { id: 'v2ctx-mxene', name: 'V2CTx MXene', type: 'MXene', symbol: 'V₂', visual: 'mxene', description: 'V2CTx MXene. Contact Strata to confirm grade, form and quantity.' },
      { id: 'cr2ctx-mxene', name: 'Cr2CTx MXene', type: 'MXene', symbol: 'Cr₂', visual: 'mxene', description: 'Cr2CTx MXene. Contact Strata to confirm grade, form and quantity.' },
    ],
  },
  {
    family: 'Layered Double Hydroxides (LDH)',
    products: [
      { id: 'nial-ldh', name: 'NiAl LDH', type: 'Layered double hydroxide', symbol: 'NiAl', visual: 'ldh', description: 'NiAl layered double hydroxide. Contact Strata to confirm grade, form and quantity.' },
      { id: 'nicoal-ldh', name: 'NiCoAl LDH', type: 'Layered double hydroxide', symbol: 'NiCo', visual: 'ldh', description: 'NiCoAl layered double hydroxide. Contact Strata to confirm grade, form and quantity.' },
    ],
  },
  {
    family: 'Activated Carbon & Charcoal',
    products: [
      { id: 'biomass-charcoal', name: 'Waste-based biomass charcoal (locally sourced)', type: 'Biomass charcoal', symbol: 'BC', visual: 'carbon', description: 'Waste-based biomass charcoal, locally sourced as specified. Enquire to confirm source details and available quantity.' },
      { id: 'rice-husk-activated-carbon', name: 'Research-grade rice husk activated carbon', type: 'Activated carbon', symbol: 'AC', visual: 'carbon', description: 'Research-grade rice husk activated carbon. Contact Strata to confirm available form and quantity.' },
    ],
  },
];

export const materialFamilies = materialGroups.map(({ family }) => family);

export const materialProducts = materialGroups.flatMap(({ family, products }) =>
  products.map((product) => ({ ...product, family, catalogLabel: 'Materials', catalogRoute: 'materials' })),
);

export const consumableProducts = [
  { id: 'ag-agcl-reference-electrode', name: 'Ag/AgCl Reference electrode', type: 'Reference electrode', symbol: 'Ag', visual: 'carbon', description: 'Ag/AgCl reference electrode. Contact Strata to confirm configuration, availability and pricing.' },
  { id: 'graphite-sheet', name: 'Graphite sheet', type: 'Electrode material', symbol: 'C', visual: 'carbon', description: 'Graphite sheet for laboratory and electrochemical applications. Enquire to confirm dimensions and availability.' },
  { id: 'cr2032-coin-cell-cases', name: 'CR2032 coin cell cases', type: 'Coin cell component', symbol: 'CR', visual: 'carbon', description: 'CR2032 coin cell cases. Contact Strata to confirm pack details and availability.' },
  { id: 'hydrothermal-reactors', name: 'Hydrothermal reactors', type: 'Laboratory equipment', symbol: 'H', visual: 'carbon', description: 'Hydrothermal reactors. Enquire to confirm available configurations and product details.' },
].map((product) => ({ ...product, family: 'Consumables', catalogLabel: 'Consumables', catalogRoute: 'consumables' }));

export const specialtyChemicalProducts = [
  { id: 'brominating-agents', name: 'Brominating agents', type: 'Specialty chemical', symbol: 'Br', visual: 'mof', description: 'Brominating agents. Enquire with your required compound, grade and quantity.' },
  { id: 'ctmatb', name: 'CTMATB', type: 'Specialty chemical', symbol: 'CT', visual: 'mof', description: 'CTMATB. Contact Strata to confirm specification and availability.' },
  { id: 'tbaab', name: 'TBAAB', type: 'Specialty chemical', symbol: 'TBA', visual: 'mof', description: 'TBAAB. Contact Strata to confirm specification and availability.' },
  { id: 'nafion', name: 'Nafion', type: 'Specialty chemical', symbol: 'N', visual: 'mof', description: 'Nafion availability is to be confirmed. Enquire with your required form and grade.' },
].map((product) => ({ ...product, family: 'Specialty Chemicals', catalogLabel: 'Specialty Chemicals', catalogRoute: 'consumables' }));

export const catalogProducts = [...materialProducts, ...consumableProducts, ...specialtyChemicalProducts];

const featuredMaterialIds = ['reduced-graphene-oxide', 'ti3c2tx-mxene', 'nial-ldh'];
export const featuredMaterials = featuredMaterialIds
  .map((id) => materialProducts.find((product) => product.id === id))
  .filter(Boolean);
