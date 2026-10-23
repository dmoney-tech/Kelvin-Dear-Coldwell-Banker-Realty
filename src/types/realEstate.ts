export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'Single Family' | 'Modern Estate' | 'Desert Contemporary' | 'Luxury Villa';
  status: 'Active' | 'Just Listed' | 'Pending' | 'Price Improvement';
  featuredImage: string;
  gallery: string[];
  description: string;
  yearBuilt: number;
  garage: number;
  lotSize: string;
  features: string[];
  mlsNumber: string;
}

export interface Community {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  avgPrice: string;
  vibe: string;
  features: string[];
  highlights: string[];
}

export interface SearchFilters {
  query: string;
  type: string;
  minPrice: number;
  maxPrice: number;
  minBeds: number;
  searchMode: 'location' | 'mls';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: 'Buying' | 'Selling' | 'Property Inquiry' | 'General Consultation';
  timeframe: string;
  message: string;
}
