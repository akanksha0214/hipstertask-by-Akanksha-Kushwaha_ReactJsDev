import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../styles/themes';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button<{ 
  theme: string; 
  variant: string; 
  size: string; 
  disabled: boolean;
}>`
  font-family: ${({ theme }) => themes[theme].fonts.secondary};
  font-weight: 600;
  border-radius: ${({ theme }) => themes[theme].layout.borderRadius};
  border: none;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => themes[theme].spacing.small};
  text-decoration: none;
  position: relative;
  overflow: hidden;
  
  /* Size variants */
  ${({ size, theme }) => {
    switch (size) {
      case 'small':
        return `
          padding: ${themes[theme].spacing.small} ${themes[theme].spacing.medium};
          font-size: 0.875rem;
          min-height: 36px;
        `;
      case 'large':
        return `
          padding: ${themes[theme].spacing.medium} ${themes[theme].spacing.large};
          font-size: 1.125rem;
          min-height: 56px;
        `;
      default: // medium
        return `
          padding: ${themes[theme].spacing.medium} ${themes[theme].spacing.large};
          font-size: 1rem;
          min-height: 44px;
        `;
    }
  }}
  
  /* Variant styles */
  ${({ variant, theme, disabled }) => {
    if (disabled) {
      return `
        background-color: ${themes[theme].colors.border};
        color: ${themes[theme].colors.textSecondary};
        opacity: 0.6;
      `;
    }
    
    switch (variant) {
      case 'secondary':
        return `
          background-color: ${themes[theme].colors.secondary};
          color: ${themes[theme].colors.text};
          &:hover {
            background-color: ${themes[theme].colors.textSecondary};
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${themes[theme].colors.accent};
          border: 2px solid ${themes[theme].colors.accent};
          &:hover {
            background-color: ${themes[theme].colors.accent};
            color: ${themes[theme].colors.surface};
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
        `;
      default: // primary
        return `
          background-color: ${themes[theme].colors.accent};
          color: ${themes[theme].colors.surface};
          &:hover {
            background-color: ${themes[theme].colors.primary};
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
        `;
    }
  }}
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => themes[theme].colors.accent}40;
  }
  
  /* Ripple effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:active::before {
    width: 300px;
    height: 300px;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  disabled = false,
  type = 'button',
}) => {
  const { theme } = useTheme();

  return (
    <StyledButton
      theme={theme}
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className="slide-up"
    >
      {children}
    </StyledButton>
  );
};

export default Button; 