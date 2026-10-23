import { Property, Community } from '../types/realEstate';

export const AGENT_INFO = {
  name: 'Kelvin Dear',
  title: 'REALTOR®',
  brokerage: 'Coldwell Banker Realty',
  directPhone: '(860) 543-0248',
  officePhone: '(480) 496-9001',
  email: 'kelvin.dear@cbrealty.com',
  license: 'SA714989000 AZ',
  portraitUrl: '/kelvin_portrait.png',
  serviceArea: 'West Valley & Greater Phoenix, Arizona',
  primaryCities: ['Goodyear', 'Buckeye', 'Surprise', 'Peoria', 'Glendale', 'Litchfield Park', 'Scottsdale', 'Phoenix'],
  officeHours: 'Monday – Saturday: 8:00 AM – 7:00 PM MST',
  bioHeadline: 'Local Insight. Personal Attention. A Better Move.',
  bioParagraph1:
    "Real estate is about more than a property. It's about finding the right fit for your goals, your lifestyle, and your future. Kelvin Dear is committed to helping clients navigate their real estate decisions with thoughtful guidance, clear communication, and a personalized approach.",
  bioParagraph2:
    "Whether evaluating a competitive purchase in a growing West Valley enclave or preparing an estate for maximum market exposure, Kelvin pairs attentive one-on-one service with Coldwell Banker's established regional and global network."
};

export const DEMO_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Desert Vista Modern Estate',
    price: 1895000,
    address: '14280 W Palo Verde Way',
    city: 'Goodyear',
    state: 'AZ',
    zip: '85395',
    beds: 4,
    baths: 4.5,
    sqft: 4320,
    type: 'Desert Contemporary',
    status: 'Just Listed',
    featuredImage: '/images/prop_1.jpg',
    gallery: [
      '/images/prop_1.jpg',
      '/images/prop_3.jpg',
      '/images/buy_interior.jpg',
      '/images/sell_exterior.jpg'
    ],
    description:
      'Impeccable desert contemporary estate situated in a peaceful enclave. Features soaring 14-foot architectural ceilings, integrated multi-slide glass pocket doors connecting to an expansive travertine patio, an infinity-edge pool with mountain silhouettes, and a gourmet chef kitchen fitted with custom walnut cabinetry and quartz waterfall islands.',
    yearBuilt: 2022,
    garage: 3,
    lotSize: '0.68 Acres',
    features: [
      'Resort Pool & Spa',
      'Chef Kitchen with Sub-Zero / Wolf',
      'Custom Wine Gallery',
      'Smart Home Automation',
      'Covered Outdoor Kitchen',
      'Panoramic Mountain Views'
    ],
    mlsNumber: 'AZ-6598214'
  },
  {
    id: 'prop-2',
    title: 'Heritage Palm Transitional Residence',
    price: 1350000,
    address: '1105 E Wigwam Blvd',
    city: 'Litchfield Park',
    state: 'AZ',
    zip: '85340',
    beds: 5,
    baths: 4,
    sqft: 3850,
    type: 'Single Family',
    status: 'Active',
    featuredImage: '/images/prop_2.jpg',
    gallery: [
      '/images/prop_2.jpg',
      '/images/buy_interior.jpg',
      '/images/prop_4.jpg',
      '/images/sell_exterior.jpg'
    ],
    description:
      'Timeless transitional luxury situated on a tree-lined avenue moments from iconic fairways. Boasts an expansive single-level floor plan, bespoke millwork, wide-plank French oak flooring, a secluded primary sanctuary with spa-inspired bath, and an oversized entertainer rear yard with fruit orchard and fire lounge.',
    yearBuilt: 2021,
    garage: 3,
    lotSize: '0.52 Acres',
    features: [
      'Single-Level Open Concept',
      'French Oak Hardwood Floors',
      'Separate Guest Casita Wing',
      'Private Spa Bath with Soaking Tub',
      'Citrus & Olive Landscape',
      'Near Historic Resort Amenities'
    ],
    mlsNumber: 'AZ-6582910'
  },
  {
    id: 'prop-3',
    title: 'The Foothill Ridge Architectural Sanctuary',
    price: 2475000,
    address: '22890 N Sunset Ridge Rd',
    city: 'Peoria',
    state: 'AZ',
    zip: '85383',
    beds: 5,
    baths: 5.5,
    sqft: 5100,
    type: 'Modern Estate',
    status: 'Active',
    featuredImage: '/images/prop_3.jpg',
    gallery: [
      '/images/prop_3.jpg',
      '/images/prop_1.jpg',
      '/images/sell_exterior.jpg',
      '/images/buy_interior.jpg'
    ],
    description:
      'Elevated ridge-line architectural marvel offering uninterrupted 270-degree sunset and desert vistas. Designed with rammed-earth textures, blackened steel accents, floor-to-ceiling high-efficiency glazing, and a cantilevered observation deck over the negative-edge pool.',
    yearBuilt: 2023,
    garage: 4,
    lotSize: '1.15 Acres',
    features: [
      'Elevated Ridge Setting',
      'Cantilevered Sunset Deck',
      'Negative Edge Pool',
      'Solar Array with Battery Storage',
      'Dedicated Home Theater & Lounge',
      'Motor Court with 4-Car Garage'
    ],
    mlsNumber: 'AZ-6601442'
  },
  {
    id: 'prop-4',
    title: 'The Veranda Courtyard Villa',
    price: 985000,
    address: '18420 W Canyon Springs Dr',
    city: 'Surprise',
    state: 'AZ',
    zip: '85374',
    beds: 4,
    baths: 3,
    sqft: 2940,
    type: 'Luxury Villa',
    status: 'Price Improvement',
    featuredImage: '/images/prop_4.jpg',
    gallery: [
      '/images/prop_4.jpg',
      '/images/prop_2.jpg',
      '/images/buy_interior.jpg',
      '/images/sell_exterior.jpg'
    ],
    description:
      'Charming single-story courtyard residence combining low-maintenance luxury living with generous open entertaining rooms. Highlights include a private central courtyard with water fountain, airy great room with beamed ceilings, and a low-water designer xeriscape garden.',
    yearBuilt: 2020,
    garage: 2,
    lotSize: '0.28 Acres',
    features: [
      'Private Interior Courtyard',
      'Vaulted Beamed Ceilings',
      'Low-Maintenance Desert Xeriscape',
      'Walk-In Pantry & Coffee Bar',
      'Quiet Cul-de-Sac Location',
      'Energy-Efficient Dual HVAC'
    ],
    mlsNumber: 'AZ-6571938'
  }
];

export const DEMO_COMMUNITIES: Community[] = [
  {
    id: 'goodyear',
    name: 'Goodyear & Estrella Mountain',
    tagline: 'Lakeside trails, championship golf, and mountain sunsets',
    description:
      'One of the premier master-planned communities in the West Valley, offering miles of scenic mountain hiking, quiet neighborhood parks, community lakes, and rapid connectivity to dining and enterprise centers.',
    image: '/images/comm_1.jpg',
    avgPrice: '$620K – $1.9M',
    vibe: 'Active, Family & Resort-Oriented',
    features: ['Over 50 Miles of Trails', 'Yacht & Hiking Clubs', 'Championship Golf Courses', 'Top-Rated Schools'],
    highlights: ['Estrella Mountain Regional Park', 'South Lake Community Center', 'Goodyear Ballpark']
  },
  {
    id: 'litchfield-park',
    name: 'Litchfield Park & The Wigwam',
    tagline: 'Historic charm, tree-lined avenues, and timeless luxury',
    description:
      'Renowned for its historic citrus heritage and the iconic Wigwam resort, Litchfield Park offers quiet strollable boulevards, classic architecture, and a tight-knit community feel unique in the Phoenix metropolitan area.',
    image: '/images/comm_2.jpg',
    avgPrice: '$750K – $2.5M',
    vibe: 'Heritage, Refined & Peaceful',
    features: ['Historic Resort Lifestyle', 'Tree-Lined Boulevards', 'Pedestrian-Friendly Village', 'Spacious Acreage Lots'],
    highlights: ['The Wigwam Golf Resort', 'Scout Park', 'Historic Village Square']
  },
  {
    id: 'surprise-buckeye',
    name: 'Surprise & Buckeye Foothills',
    tagline: 'Dynamic growth, modern amenities, and desert open space',
    description:
      'Fast-growing enclaves in the Northwest Valley featuring new construction luxury developments, world-class tennis and sports complexes, and immediate access to the White Tank Mountain Regional Park.',
    image: '/images/comm_3.jpg',
    avgPrice: '$480K – $1.4M',
    vibe: 'Expanding, Vibrant & Scenic',
    features: ['Modern New Builds', 'White Tank Park Access', 'Surprise Stadium & Tennis', 'Spacious Floor Plans'],
    highlights: ['White Tank Mountains', 'Surprise Community Park', 'Verrado Main Street']
  }
];
