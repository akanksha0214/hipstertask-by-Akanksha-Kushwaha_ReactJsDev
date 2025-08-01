import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../styles/themes';

const HeaderContainer = styled.header<{ theme: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ theme }) => themes[theme].colors.surface};
  border-bottom: 1px solid ${({ theme }) => themes[theme].colors.border};
  padding: ${({ theme }) => themes[theme].spacing.medium};
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div<{ theme: string }>`
  max-width: ${({ theme }) => themes[theme].layout.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => themes[theme].spacing.medium};
`;

const Logo = styled.div<{ theme: string }>`
  font-family: ${({ theme }) => themes[theme].fonts.primary};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => themes[theme].colors.primary};
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ThemeSelector = styled.div<{ theme: string }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => themes[theme].spacing.small};
`;

const Select = styled.select<{ theme: string }>`
  background-color: ${({ theme }) => themes[theme].colors.background};
  color: ${({ theme }) => themes[theme].colors.text};
  border: 1px solid ${({ theme }) => themes[theme].colors.border};
  border-radius: ${({ theme }) => themes[theme].layout.borderRadius};
  padding: ${({ theme }) => themes[theme].spacing.small} ${({ theme }) => themes[theme].spacing.medium};
  font-family: ${({ theme }) => themes[theme].fonts.secondary};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  
  &:hover {
    border-color: ${({ theme }) => themes[theme].colors.accent};
  }
  
  &:focus {
    border-color: ${({ theme }) => themes[theme].colors.accent};
    box-shadow: 0 0 0 2px ${({ theme }) => themes[theme].colors.accent}20;
  }
  
  option {
    background-color: ${({ theme }) => themes[theme].colors.background};
    color: ${({ theme }) => themes[theme].colors.text};
  }
`;

const ThemeLabel = styled.span<{ theme: string }>`
  font-family: ${({ theme }) => themes[theme].fonts.secondary};
  font-size: 0.9rem;
  color: ${({ theme }) => themes[theme].colors.textSecondary};
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = event.target.value as 'theme1' | 'theme2' | 'theme3';
    setTheme(newTheme);
  };

  return (
    <HeaderContainer theme={theme}>
      <HeaderContent theme={theme}>
        <Logo theme={theme}>
          🎨 Hipster Theme App
        </Logo>
        <ThemeSelector theme={theme}>
          <ThemeLabel theme={theme}>Theme:</ThemeLabel>
          <Select theme={theme} value={theme} onChange={handleThemeChange}>
            <option value="theme1">Theme 1 - Minimalist</option>
            <option value="theme2">Theme 2 - Dark Sidebar</option>
            <option value="theme3">Theme 3 - Colorful Cards</option>
          </Select>
        </ThemeSelector>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 