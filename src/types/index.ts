export type Theme = 'theme1' | 'theme2' | 'theme3';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  brand?: string;
  model?: string;
  color?: string;
  discount?: number;
  rating?: {
    rate: number;
    count: number;
  };
}

export interface ThemeConfig {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    accent: string;
    border: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  layout: {
    type: 'minimalist' | 'sidebar' | 'card-grid';
    maxWidth: string;
    borderRadius: string;
  };
} 