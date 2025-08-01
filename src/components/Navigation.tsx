import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../styles/themes';

const NavContainer = styled.nav<{ theme: string }>`
  background-color: ${({ theme }) => themes[theme].colors.surface};
  border-bottom: 1px solid ${({ theme }) => themes[theme].colors.border};
  padding: ${({ theme }) => themes[theme].spacing.medium} 0;
  transition: all 0.3s ease;
`;

const NavContent = styled.div<{ theme: string }>`
  max-width: ${({ theme }) => themes[theme].layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => themes[theme].spacing.medium};
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => themes[theme].spacing.large};
  
  @media (max-width: 768px) {
    gap: ${({ theme }) => themes[theme].spacing.medium};
    flex-wrap: wrap;
  }
`;

const NavLink = styled(Link)<{ theme: string; active: boolean }>`
  font-family: ${({ theme }) => themes[theme].fonts.secondary};
  font-size: 1rem;
  font-weight: ${({ active }) => active ? '600' : '400'};
  color: ${({ theme, active }) => active ? themes[theme].colors.accent : themes[theme].colors.text};
  text-decoration: none;
  padding: ${({ theme }) => themes[theme].spacing.small} ${({ theme }) => themes[theme].spacing.medium};
  border-radius: ${({ theme }) => themes[theme].layout.borderRadius};
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: ${({ theme }) => themes[theme].colors.accent};
    background-color: ${({ theme }) => themes[theme].colors.accent}10;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ active }) => active ? '100%' : '0'};
    height: 2px;
    background-color: ${({ theme }) => themes[theme].colors.accent};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: ${({ theme }) => themes[theme].spacing.small};
  }
`;

const Navigation: React.FC = () => {
  const { theme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <NavContainer theme={theme}>
      <NavContent theme={theme}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            theme={theme}
            active={location.pathname === item.path}
          >
            {item.label}
          </NavLink>
        ))}
      </NavContent>
    </NavContainer>
  );
};

export default Navigation; 