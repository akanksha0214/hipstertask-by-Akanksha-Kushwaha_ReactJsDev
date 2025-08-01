# Hipster Theme App

A modern React-based web application with dynamic theme switching capabilities. This application demonstrates the power of React, TypeScript, and styled-components in creating flexible, theme-aware user interfaces.

##  Features

### Theme System
- **Three Distinct Themes**: Each theme has unique colors, fonts, spacing, and layout
  - **Theme 1 (Minimalist)**: Clean, light design with sans-serif fonts
  - **Theme 2 (Dark Sidebar)**: Dark mode with serif fonts and sidebar layout
  - **Theme 3 (Colorful Cards)**: Vibrant colors with playful fonts and card-based layout

### Core Functionality
- ✅ **Theme Persistence**: Theme selection saved in localStorage
- ✅ **Context API**: React Context for theme management
- ✅ **API Integration**: Fetches products from [FakeStoreAPI](https://fakestoreapi.com/products)
- ✅ **Responsive Design**: Works perfectly on all devices
- ✅ **Smooth Animations**: Subtle transitions when switching themes
- ✅ **React Router**: Multi-page navigation (Home, About, Contact)
- ✅ **TypeScript**: Full type safety throughout the application
- ✅ **Security**: Implemented security headers and best practices
- ✅ **Modern UI**: Beautiful, accessible interface

### Technical Stack
- **React 18** with TypeScript
- **Styled-components** for theme-aware styling
- **React Router** for navigation
- **Context API** for state management
- **Google Fonts** integration
- **Responsive CSS Grid & Flexbox**

##  Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hipstertask-by-Akanksha-Kushwaha_ReactJsDev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

##  Pages

### Home Page
- Hero section with theme switcher demonstration
- Product grid displaying items from FakeStoreAPI
- Load more functionality
- Responsive design

##  Theme Implementation

### Theme Structure
Each theme includes:
- **Colors**: Primary, secondary, background, surface, text, accent, border
- **Fonts**: Primary and secondary font families
- **Spacing**: Consistent spacing scale
- **Layout**: Different layout types (minimalist, sidebar, card-grid)

### Theme Switching
- Dropdown selector in the header
- Instant theme application
- Smooth transitions
- Persistent selection

##  Customization

### Adding New Themes
1. Add theme configuration to `src/styles/themes.ts`
2. Update the theme type in `src/types/index.ts`
3. Add theme option to the dropdown in `src/components/Header.tsx`

### Modifying Existing Themes
Edit the theme configurations in `src/styles/themes.ts` to customize:
- Color palettes
- Font families
- Spacing values
- Layout properties

##  API Integration

The application integrates with [FakeStoreAPI](https://fakestoreapi.com/products) to display:
- Product information
- Images
- Pricing
- Ratings
- Categories

##  Security Features

- Content Security Policy headers
- XSS Protection
- Frame options
- Content type options
- Referrer policy

##  Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

##  Design Principles

- **Accessibility**: WCAG compliant design
- **Performance**: Optimized for speed
- **Maintainability**: Clean, modular code
- **Scalability**: Easy to extend and modify
