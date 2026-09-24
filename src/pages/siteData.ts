import { PiCarProfileDuotone as CarFront, PiHeartbeatDuotone as HeartPulse, PiHouseLineDuotone as House, PiBuildingsDuotone as Building2, PiAirplaneTiltDuotone as Plane, PiPlantDuotone as Sprout, PiPlusBold as Plus } from 'react-icons/pi';
export type Group = 'Personal' | 'Business' | 'Agriculture';
export type Product = { name: string; group: Group; description: string };
export const products: Product[] = [
  { name: 'Four Wheeler', group: 'Personal', description: 'Explore insurance options for your car and everyday journeys.' },
  { name: 'Two Wheeler', group: 'Personal', description: 'Find suitable options for your motorcycle or scooter.' },
  { name: 'Health', group: 'Personal', description: 'Explore individual and family medical insurance options.' },
  { name: 'Travel', group: 'Personal', description: 'Plan for eligible medical, accident and other travel-related risks.' },
  { name: 'Personal Accident', group: 'Personal', description: 'Financial protection for specified accidental events.' },
  { name: 'Home / Property', group: 'Personal', description: 'Explore protection for eligible residential property and belongings.' },
  { name: 'Other Personal Covers', group: 'Personal', description: 'Tell us about a personal insurance requirement not listed here.' },
  { name: 'Property', group: 'Business', description: 'Explore cover for buildings, equipment, inventory and eligible assets.' },
  { name: 'Fire', group: 'Business', description: 'Understand specified fire-related risks and available extensions.' },
  { name: 'Marine & Cargo', group: 'Business', description: 'Explore protection for eligible goods during transportation.' },
  { name: 'Engineering', group: 'Business', description: 'Insurance options for machinery, construction and engineering risks.' },
  { name: 'Commercial Vehicle', group: 'Business', description: 'Explore options for eligible vehicles used by your business.' },
  { name: 'Liability', group: 'Business', description: 'Explore cover for specified third-party liabilities.' },
  { name: 'Burglary', group: 'Business', description: 'Consider protection for eligible burglary-related losses.' },
  { name: 'Employee / Group', group: 'Business', description: 'Explore relevant insurance solutions for your people.' },
  { name: 'Aviation', group: 'Business', description: 'Discuss specialised aviation-related insurance requirements.' },
  { name: 'Specialized Insurance', group: 'Business', description: 'Discuss insurance options for specific operational risks.' },
  { name: 'Crop', group: 'Agriculture', description: 'Explore available insurance solutions for eligible crops.' },
  { name: 'Livestock', group: 'Agriculture', description: 'Explore available insurance solutions for eligible livestock.' },
  { name: 'Agricultural Assets', group: 'Agriculture', description: 'Consider options for eligible agricultural property and equipment.' },
  { name: 'Other Agriculture Insurance', group: 'Agriculture', description: 'Discuss other agricultural requirements with our team.' },
];
export const needs = [
  { name: 'Vehicle', icon: CarFront }, { name: 'Health', icon: HeartPulse },
  { name: 'Property', icon: House }, { name: 'Business', icon: Building2 },
  { name: 'Travel', icon: Plane }, { name: 'Agriculture', icon: Sprout },
  { name: 'Other', icon: Plus },
];
export const faqs = [
  ['Is Beemalink an insurance company?', 'No. Beemalink is an insurance aggregation company. Insurance policies are issued by licensed insurance companies. We help you understand requirements, explore options and coordinate the process.'],
  ['Can I compare insurance options through Beemalink?', 'Yes. We can help you review and understand available insurance options from relevant insurance providers. Coverage, premiums and exclusions depend on the selected insurer and policy.'],
  ['How do I get an insurance policy?', 'Start by sharing your requirement. Beemalink can help you review available options and facilitate the process of obtaining a policy through the relevant insurance provider, subject to applicable requirements.'],
  ['Can you help with claims and renewals?', 'Yes. We can assist with documentation, renewal coordination and communication with the relevant insurer. Claim assessment and settlement decisions remain with the insurance company.'],
  ['What documents will I need?', 'Requirements depend on the insurance type and insurer. Tell us what you need to insure and our team can provide a relevant checklist.'],
  ['Can businesses use Beemalink?', 'Yes. We assist with property, motor, marine, engineering, liability, employee-related and specialised business insurance requirements.'],
];
export const steps = [
  ['Tell us what you need', 'A few details about you and what you want to protect.'],
  ['We understand your risk', 'Our team helps clarify your requirements.'],
  ['Explore available options', 'Review suitable options from insurance providers.'],
  ['Compare & decide', 'Understand the details before making your choice.'],
  ['Policy arrangement', 'Get support with documentation and coordination.'],
  ['Ongoing support', 'Come back to us for renewals and claims assistance.'],
];
export const disclaimer = 'Beemalink Nepal is an insurance aggregation company, not an insurance company. Insurance policies are issued by licensed insurance companies and are subject to their respective policy terms, conditions, exclusions and applicable regulations.';

export const productPath = (product: Product) => '/insurance/' + product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/,'');
