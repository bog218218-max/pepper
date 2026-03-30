export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  bgColor: string;
  isLimitedEdition?: boolean;
  formats: string[];
  tastingNotes: string[];
}
