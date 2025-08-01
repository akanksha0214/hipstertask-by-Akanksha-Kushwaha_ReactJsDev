import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../styles/themes';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

const HomeContainer = styled.div<{ theme: string }>`
  min-height: 100vh;
  padding-top: 120px;
  transition: all 0.3s ease;
`;

const ContentWrapper = styled.div<{ theme: string }>`
  max-width: ${({ theme }) => themes[theme].layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => themes[theme].spacing.medium};
`;

const HeroSection = styled.section<{ theme: string }>`
  text-align: center;
  padding: ${({ theme }) => themes[theme].spacing.xlarge} 0;
  margin-bottom: ${({ theme }) => themes[theme].spacing.xlarge};
`;

const HeroTitle = styled.h1<{ theme: string }>`
  font-family: ${({ theme }) => themes[theme].fonts.primary};
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({ theme }) => themes[theme].colors.text};
  margin-bottom: ${({ theme }) => themes[theme].spacing.large};
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p<{ theme: string }>`
  font-family: ${({ theme }) => themes[theme].fonts.secondary};
  font-size: 1.25rem;
  color: ${({ theme }) => themes[theme].colors.textSecondary};
  margin-bottom: ${({ theme }) => themes[theme].spacing.large};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonGroup = styled.div<{ theme: string }>`
  display: flex;
  gap: ${({ theme }) => themes[theme].spacing.medium};
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductsSection = styled.section<{ theme: string }>`
  padding: ${({ theme }) => themes[theme].spacing.xlarge} 0;
`;

const SectionTitle = styled.h2<{ theme: string }>`
  font-family: ${({ theme }) => themes[theme].fonts.primary};
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ theme }) => themes[theme].colors.text};
  text-align: center;
  margin-bottom: ${({ theme }) => themes[theme].spacing.large};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProductsGrid = styled.div<{ theme: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => themes[theme].spacing.large};
  margin-bottom: ${({ theme }) => themes[theme].spacing.xlarge};
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${({ theme }) => themes[theme].spacing.medium};
  }
`;

const LoadingContainer = styled.div<{ theme: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-family: ${({ theme }) => themes[theme].fonts.secondary};
  font-size: 1.1rem;
  color: ${({ theme }) => themes[theme].colors.textSecondary};
`;

const ErrorContainer = styled.div<{ theme: string }>`
  text-align: center;
  padding: ${({ theme }) => themes[theme].spacing.xlarge};
  font-family: ${({ theme }) => themes[theme].fonts.secondary};
  color: ${({ theme }) => themes[theme].colors.textSecondary};
`;

const ErrorMessage = styled.p<{ theme: string }>`
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => themes[theme].spacing.medium};
`;

const LoadMoreButton = styled.div<{ theme: string }>`
  text-align: center;
  margin-top: ${({ theme }) => themes[theme].spacing.large};
`;

const Home: React.FC = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [displayCount, setDisplayCount] = useState(6);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://fakestoreapi.in/api/products');
      console.log(response);
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data = await response.json();
      
      // Handle the API response structure
      let productsArray;
      if (data.products && Array.isArray(data.products)) {
        // API returns { products: [...] }
        productsArray = data.products;
      } else if (Array.isArray(data)) {
        // API returns array directly
        productsArray = data;
      } else {
        throw new Error('Invalid data format received from API');
      }
      
      setProducts(productsArray);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setProducts([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 6, Array.isArray(products) ? products.length : 0));
  };

  const displayedProducts = Array.isArray(products) ? products.slice(0, displayCount) : [];

  return (
    <HomeContainer theme={theme}>
      <ContentWrapper theme={theme}>
        <HeroSection theme={theme}>
          <HeroTitle theme={theme}>
            Welcome to Hipster Theme App
          </HeroTitle>
          <HeroSubtitle theme={theme}>
            Experience the power of dynamic theming with our modern React application. 
            Switch between three distinct themes and see how the entire interface transforms 
            with different colors, fonts, layouts, and spacing.
          </HeroSubtitle>
          <ButtonGroup theme={theme}>
            <Button 
              variant="outline" 
              size="large"
              onClick={() => window.scrollTo({ 
                top: document.getElementById('products')?.offsetTop || 0, 
                behavior: 'smooth' 
              })}
            >
              View Products
            </Button>
          </ButtonGroup>
        </HeroSection>

        <ProductsSection theme={theme} id="products">
          <SectionTitle theme={theme}>
            Featured Products
          </SectionTitle>
          
          {loading && (
            <LoadingContainer theme={theme}>
              Loading products...
            </LoadingContainer>
          )}
          
          {error && (
            <ErrorContainer theme={theme}>
              <ErrorMessage theme={theme}>
                {error}
              </ErrorMessage>
              <Button variant="primary" onClick={fetchProducts}>
                Try Again
              </Button>
            </ErrorContainer>
          )}
          
          {!loading && !error && (
            <>
              <ProductsGrid theme={theme}>
                {displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </ProductsGrid>
              
              {Array.isArray(products) && displayCount < products.length && (
                <LoadMoreButton theme={theme}>
                  <Button variant="secondary" onClick={handleLoadMore}>
                    Load More Products
                  </Button>
                </LoadMoreButton>
              )}
            </>
          )}
        </ProductsSection>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home; 