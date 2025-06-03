export type BookingType = 'instant' | 'advance';

export interface BookingOption {
  type: BookingType;
  title: string;
  description: string;
  recommendedFor: string[];
  terms: string[];
  subTerms: string[];
}

export interface BookingTypeScreenProps {
  onSelect: (type: BookingType) => void;
  onCreatePackage: () => void;
}