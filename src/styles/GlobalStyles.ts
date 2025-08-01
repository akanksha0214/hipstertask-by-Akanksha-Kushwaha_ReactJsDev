import { createGlobalStyle } from 'styled-components';
import { themes } from './themes';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&family=Merriweather:wght@300;400;700;900&family=Source+Serif+Pro:wght@300;400;600;700&family=Fredoka+One&family=Comic+Neue:wght@300;400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${themes.theme1.fonts.primary};
    background-color: ${themes.theme1.colors.background};
    color: ${themes.theme1.colors.text};
    line-height: 1.6;
    transition: all 0.3s ease;
    overflow-x: hidden;
  }

  /* Theme-specific body styles */
  body[data-theme="theme1"] {
    font-family: ${themes.theme1.fonts.primary};
    background-color: ${themes.theme1.colors.background};
    color: ${themes.theme1.colors.text};
  }

  body[data-theme="theme2"] {
    font-family: ${themes.theme2.fonts.primary};
    background-color: ${themes.theme2.colors.background};
    color: ${themes.theme2.colors.text};
  }

  body[data-theme="theme3"] {
    font-family: ${themes.theme3.fonts.primary};
    background-color: ${themes.theme3.colors.background};
    color: ${themes.theme3.colors.text};
  }

  /* Ensure smooth transitions between themes */
  body {
    transition: background-color 0.3s ease, color 0.3s ease, font-family 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
    transition: all 0.3s ease;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  a:hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${themes.theme1.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${themes.theme1.colors.border};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${themes.theme1.colors.textSecondary};
  }

  /* Animation classes */
  .fade-in {
    animation: fadeIn 0.5s ease-in;
  }

  .slide-up {
    animation: slideUp 0.5s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Responsive design */
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    
    h2 {
      font-size: 1.5rem;
    }
    
    h3 {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.75rem;
    }
    
    h2 {
      font-size: 1.25rem;
    }
    
    h3 {
      font-size: 1.1rem;
    }
  }
`; 