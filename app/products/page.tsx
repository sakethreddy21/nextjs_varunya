'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Icon from '@/components/AppIcon';
import CategoryCard from '@/components/products/CategoryCard';
import FilterPanel from '@/components/products/FilterPanel';
import SearchBar from '@/components/products/SearchBar';
import { getCategories, getSubcategories, getProducts } from '@/app/hooks/data-fetching-hooks';

// Types
interface Category {
  id: string;
  category_name: string;
  image: string | null;
  description: string | null;
}

interface Subcategory {
  id: string;
  subcategory_name: string;
  image: string | null;
  category_id: string;
}

interface Product {
  uuid: string;
  hs_code: string;
  product_name: string;
  product_description: string | null;
  sub_category_id: string;
  subcategory_name: string;
  category_name: string;
}

interface Filters {
  origin: string;
  certification: string;
  availability: string;
  orderVolume: string;
}

// Constants
const DEFAULT_FILTERS: Filters = {
  origin: '',
  certification: '',
  availability: '',
  orderVolume: '',
};

const ProductsExplorer: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Memoized filtered data
  const filteredCategories = useMemo(
    () =>
      categories.filter(category =>
        category.category_name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [categories, searchQuery]
  );

  const filteredSubcategories = useMemo(
    () =>
      subcategories.filter(subcategory =>
        subcategory.subcategory_name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [subcategories, searchQuery]
  );

  const filteredProducts = useMemo(
    () =>
      products?.filter(product => {
        const matchesSearch =
          product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.product_description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          false;
        return matchesSearch;
      }) || [],
    [products, searchQuery]
  );

  // Handlers
  const handleCategorySelect = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
    setProducts(null);
  }, []);

  const handleSubcategorySelect = useCallback((subcategoryId: string) => {
    setSelectedSubcategory(subcategoryId);
  }, []);

  const toggleFilters = useCallback(() => {
    setShowFilters(prev => !prev);
  }, []);

  const toggleViewMode = useCallback((mode: 'grid' | 'list') => {
    setViewMode(mode);
  }, []);

  // Data fetching
  useEffect(() => {
    setIsLoading(true);
    getCategories()
      .then(data => setCategories(data))
      .catch(err => setError('Failed to load categories. Please try again.'))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setIsLoading(true);
      getSubcategories(selectedCategory)
        .then(data => setSubcategories(data))
        .catch(err => setError('Failed to load subcategories. Please try again.'))
        .finally(() => setIsLoading(false));
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory && selectedSubcategory) {
      setIsLoading(true);
      getProducts(selectedSubcategory)
        .then(data => setProducts(data))
        .catch(err => setError('Failed to load products. Please try again.'))
        .finally(() => setIsLoading(false));
    }
  }, [selectedCategory, selectedSubcategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Render components
  const renderBreadcrumbs = () => (
    <nav className="flex items-center justify-center text-sm text-secondary-light">
      <Link href="/homepage-premium-b2b-trade-platform" className="hover:text-primary transition-colors">
        Home
      </Link>
      <Icon name="ChevronRight" size={16} className="mx-2" />
      <span className="text-secondary">Products</span>
      {selectedCategory && (
        <>
          <Icon name="ChevronRight" size={16} className="mx-2" />
          <span className="text-primary capitalize">
            {categories.find(cat => cat.id === selectedCategory)?.category_name || selectedCategory}
          </span>
        </>
      )}
      {selectedSubcategory && (
        <>
          <Icon name="ChevronRight" size={16} className="mx-2" />
          <span className="text-primary capitalize">
            {subcategories.find(sub => sub.id === selectedSubcategory)?.subcategory_name || selectedSubcategory}
          </span>
        </>
      )}
    </nav>
  );

  const renderContent = () => {
    if (isLoading) return <p className="text-center text-secondary">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    if (!selectedCategory) {
      return (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-montserrat font-bold text-secondary-dark">Product Categories</h2>
            <div className="text-sm text-secondary-light">{filteredCategories.length} categories available</div>
          </div>
          {filteredCategories.length > 0 ? (
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredCategories.map(category => (
                <CategoryCard
                  key={category.id}
                  category={{
                    id: category.id,
                    name: category.category_name,
                    image: category.image || 'https://via.placeholder.com/800',
                    description: category.description || `Explore products in ${category.category_name}`,
                  }}
                  onClick={() => handleCategorySelect(category.id)}
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-secondary-light">No categories found.</p>
          )}
        </div>
      );
    }

    if (!selectedSubcategory) {
      return (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-secondary-dark mb-2">
                {categories.find(cat => cat.id === selectedCategory)?.category_name || selectedCategory}
              </h2>
              <p className="text-secondary-light">{filteredSubcategories.length} subcategories available</p>
            </div>
            <button
              onClick={() => handleCategorySelect('')}
              className="flex items-center px-4 py-2 text-primary hover:bg-accent rounded-lg transition-colors"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Back to Categories
            </button>
          </div>
          {filteredSubcategories.length > 0 ? (
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredSubcategories.map(subcategory => (
                <CategoryCard
                  key={subcategory.id}
                  category={{
                    id: subcategory.id,
                    name: subcategory.subcategory_name,
                    image: subcategory.image || 'https://via.placeholder.com/800',
                  }}
                  onClick={() => handleSubcategorySelect(subcategory.id)}
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-secondary-light">No subcategories found.</p>
          )}
        </div>
      );
    }

    return (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-montserrat font-bold text-secondary-dark mb-2">
              {subcategories.find(sub => sub.id === selectedSubcategory)?.subcategory_name || selectedSubcategory}
            </h2>
            <p className="text-secondary-light">{filteredProducts.length} products available</p>
          </div>
          <button
            onClick={() => handleSubcategorySelect('')}
            className="flex items-center px-4 py-2 text-primary hover:bg-accent rounded-lg transition-colors"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Back to Subcategories
          </button>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-border rounded-lg">
              <thead>
                <tr className="bg-primary/10 text-secondary-dark">
                  <th className="py-3 px-4 text-left font-montserrat font-semibold">HS Code</th>
                  <th className="py-3 px-4 text-left font-montserrat font-semibold">Product Name</th>
                  <th className="py-3 px-4 text-left font-montserrat font-semibold">Product Description</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr key={product.uuid || index} className="border-t border-border hover:bg-accent/10">
                    <td className="py-3 px-4 text-secondary">{product.hs_code}</td>
                    <td className="py-3 px-4 text-secondary">{product.product_name}</td>
                    <td className="py-3 px-4 text-secondary">{product.product_description || 'No description available'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-secondary-light text-center">No products found.</p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-surface">
      <div className="bg-gradient-to-br from-primary/10 to-accent pt-20 lg:pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold text-secondary-dark mb-6">
              Interactive Product Explorer
            </h1>
            <p className="text-xl text-secondary-light max-w-3xl mx-auto mb-8">
              Discover our comprehensive range of premium products with intelligent filtering.
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-8">
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeholder="Search products..." />
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleFilters}
                  className="flex items-center px-4 py-2 bg-white border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <Icon name="Filter" size={20} className="mr-2" />
                  Filters
                </button>
                <div className="flex items-center bg-white rounded-lg border border-border">
                  <button
                    onClick={() => toggleViewMode('grid')}
                    className={`p-2 rounded-l-lg ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-secondary hover:bg-accent'}`}
                  >
                    <Icon name="Grid3X3" size={20} />
                  </button>
                  <button
                    onClick={() => toggleViewMode('list')}
                    className={`p-2 rounded-r-lg ${viewMode === 'list' ? 'bg-primary text-white' : 'text-secondary hover:bg-accent'}`}
                  >
                    <Icon name="List" size={20} />
                  </button>
                </div>
              </div>
            </div>
            {renderBreadcrumbs()}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {showFilters && (
            <div className="w-full lg:w-64">
              <FilterPanel
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategorySelect}
              />
            </div>
          )}
          <div className="flex-1">{renderContent()}</div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary to-primary-dark py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-white mb-6">
            Ready to Source Premium Products?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get personalized quotes and detailed specifications for your requirements
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-quote-intelligent-conversion-portal"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-montserrat font-semibold rounded-lg hover:bg-accent transition-all"
            >
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Get Custom Quote
            </Link>
            <Link
              href="/contact-global-accessibility-hub"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-montserrat font-semibold rounded-lg hover:bg-white hover:text-primary transition-all"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Speak with Expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsExplorer;