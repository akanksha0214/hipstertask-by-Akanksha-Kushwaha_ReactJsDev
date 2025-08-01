import React from 'react';
import styled from 'styled-components';
import { Product } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../styles/themes';

const Card = styled.div<{ theme: string }>`
  background-color: ${({ theme }) => themes[theme].colors.surface};
  border: 1px solid ${({ theme }) => themes[theme].colors.border};
  border-radius: ${({ theme }) => themes[theme].layout.borderRadius};
  padding: ${({ theme }) => themes[theme].spacing.medium};
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: ${({ theme }) => themes[theme].colors.accent};
  }
`;

const ImageContainer = styled.div<{ theme: string }>`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: ${({ theme }) => themes[theme].layout.borderRadius};
  margin-bottom: ${({ theme }) => themes[theme].spacing.medium};
  background-color: ${({ theme }) => themes[theme].colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.img<{ theme: string }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ProductTitle = styled.h3<{ theme: string }>`
  font-family: ${({ theme }) => themes[theme].fonts.secondary};
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => themes[theme].colors.text};
  margin-bottom: ${({ theme }) => themes[theme].spacing.small};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductDescription = styled.p<{ theme: string }>`
  font-family: ${({ theme }) => themes[theme].fonts.secondary};
  font-size: 0.9rem;
  color: ${({ theme }) => themes[theme].colors.textSecondary};
  margin-bottom: ${({ theme }) => themes[theme].spacing.medium};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductPrice = styled.div<{ theme: string }>`
  font-family: ${({ theme }) => themes[theme].fonts.secondary};
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => themes[theme].colors.accent};
  margin-bottom: ${({ theme }) => themes[theme].spacing.small};
`;

const ProductRating = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => themes[theme].spacing.small};
  margin-bottom: ${({ theme }) => themes[theme].spacing.medium};
`;

const RatingStars = styled.div<{ theme: string }>`
  color: #ffd700;
  font-size: 0.9rem;
`;

const RatingText = styled.span<{ theme: string }>`
  font-family: ${({ theme }) => themes[theme].fonts.secondary};
  font-size: 0.8rem;
  color: ${({ theme }) => themes[theme].colors.textSecondary};
`;

const ProductCategory = styled.div<{ theme: string }>`
  font-family: ${({ theme }) => themes[theme].fonts.secondary};
  font-size: 0.8rem;
  color: ${({ theme }) => themes[theme].colors.textSecondary};
  text-transform: capitalize;
  background-color: ${({ theme }) => themes[theme].colors.accent}20;
  color: ${({ theme }) => themes[theme].colors.accent};
  padding: ${({ theme }) => themes[theme].spacing.small};
  border-radius: ${({ theme }) => themes[theme].layout.borderRadius};
  display: inline-block;
  margin-bottom: ${({ theme }) => themes[theme].spacing.medium};
`;

const DiscountBadge = styled.div<{ theme: string }>`
  position: absolute;
  top: ${({ theme }) => themes[theme].spacing.small};
  right: ${({ theme }) => themes[theme].spacing.small};
  background-color: #ff4757;
  color: white;
  font-family: ${({ theme }) => themes[theme].fonts.secondary};
  font-size: 0.8rem;
  font-weight: 600;
  padding: ${({ theme }) => themes[theme].spacing.small};
  border-radius: ${({ theme }) => themes[theme].layout.borderRadius};
  z-index: 1;
`;

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { theme } = useTheme();

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    if (hasHalfStar) {
      stars.push('☆');
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push('☆');
    }

    return stars.join('');
  };

  return (
    <Card theme={theme} className="fade-in">
      {product.discount && (
        <DiscountBadge theme={theme}>
          -{product.discount}%
        </DiscountBadge>
      )}
      <ImageContainer theme={theme}>
        <ProductImage 
          src={product.image} 
          alt={product.title}
          theme={theme}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </ImageContainer>
      
      <ProductCategory theme={theme}>
        {product.brand ? `${product.brand} - ${product.category}` : product.category}
      </ProductCategory>
      
      <ProductTitle theme={theme}>
        {product.title}
      </ProductTitle>
      
      <ProductDescription theme={theme}>
        {product.description}
      </ProductDescription>
      
      {product.rating && (
        <ProductRating theme={theme}>
          <RatingStars theme={theme}>
            {renderStars(product.rating.rate)}
          </RatingStars>
          <RatingText theme={theme}>
            ({product.rating.count} reviews)
          </RatingText>
        </ProductRating>
      )}
      
      <ProductPrice theme={theme}>
        ${product.price.toFixed(2)}
      </ProductPrice>
    </Card>
  );
};

export default ProductCard; 