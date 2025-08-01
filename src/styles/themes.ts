import { ThemeConfig } from '../types';

export const themes: Record<string, ThemeConfig> = {
  theme1: {
    name: 'Minimalist',
    colors: {
      primary: '#2c3e50',
      secondary: '#34495e',
      background: '#ffffff',
      surface: '#f8f9fa',
      text: '#2c3e50',
      textSecondary: '#7f8c8d',
      accent: '#3498db',
      border: '#e9ecef',
    },
    fonts: {
      primary: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      secondary: "'Open Sans', sans-serif",
    },
    spacing: {
      small: '0.5rem',
      medium: '1rem',
      large: '2rem',
      xlarge: '4rem',
    },
    layout: {
      type: 'minimalist',
      maxWidth: '1200px',
      borderRadius: '8px',
    },
  },
  theme2: {
    name: 'Dark Sidebar',
    colors: {
      primary: '#ffffff',
      secondary: '#2d2d2d',
      background: '#121212',
      surface: '#1e1e1e',
      text: '#ffffff',
      textSecondary: '#b0b0b0',
      accent: '#bb86fc',
      border: '#333333',
    },
    fonts: {
      primary: "'Merriweather', Georgia, serif",
      secondary: "'Source Serif Pro', serif",
    },
    spacing: {
      small: '0.75rem',
      medium: '1.5rem',
      large: '3rem',
      xlarge: '6rem',
    },
    layout: {
      type: 'sidebar',
      maxWidth: '1400px',
      borderRadius: '12px',
    },
  },
  theme3: {
    name: 'Colorful Cards',
    colors: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      background: '#f7f1e3',
      surface: '#ffffff',
      text: '#2d3436',
      textSecondary: '#636e72',
      accent: '#fd79a8',
      border: '#ffeaa7',
    },
    fonts: {
      primary: "'Fredoka One', cursive",
      secondary: "'Comic Neue', cursive",
    },
    spacing: {
      small: '0.25rem',
      medium: '0.75rem',
      large: '1.5rem',
      xlarge: '3rem',
    },
    layout: {
      type: 'card-grid',
      maxWidth: '1600px',
      borderRadius: '20px',
    },
  },
}; 