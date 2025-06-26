'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/AppIcon';
import CategoryCard from '@/components/products/CategoryCard';
import FilterPanel from '@/components/products/FilterPanel';
import SearchBar from '@/components/products/SearchBar';
import SeasonalCalendar from '@/components/products/SeasonalCalendar';
import QualityAssurance from '@/components/products/QualityAssurance';
import { getCollections, getSheets, getSheetData } from '../hooks/data-fetching-hooks';

const ProductsExplorer = () => {
  const [collections, setCollections] = useState<string[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [sheets, setSheets] = useState<string[]>([]);
  const [selectedSheet, setSelectedSheet] = useState<string | null>(null);
  const [sheetData, setSheetData] = useState<any[] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    origin: '',
    certification: '',
    availability: '',
    orderVolume: '',
  });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch collections on mount
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getCollections()
      .then(data => {
        console.log('Collections:', data); // Debug log
        setCollections(Array.isArray(data) ? data : []);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error loading collections:', err);
        setError('Failed to load collections. Please try again.');
        setIsLoading(false);
      });
  }, []);

  // Fetch sheets when a collection is selected
  useEffect(() => {
    if (selectedCollection) {
      setIsLoading(true);
      setError(null);
      setSelectedSheet(null);
      setSheetData(null);
      getSheets(selectedCollection)
        .then(data => {
          console.log('Sheets:', data); // Debug log
          setSheets(Array.isArray(data) ? data : []);
          setIsLoading(false);
        })
        .catch(err => {
          console.error('Error loading sheets:', err);
          setError('Failed to load sub-categories. Please try again.');
          setIsLoading(false);
        });
    }
  }, [selectedCollection]);

  // Fetch sheet data when a sheet is selected
  useEffect(() => {
    if (selectedCollection && selectedSheet) {
      setIsLoading(true);
      setError(null);
      getSheetData(selectedCollection, selectedSheet)
        .then(response => {
          const data = response.data || response; // Handle nested or flat response
          console.log('Sheet Data:', data); // Debug log
          setSheetData(Array.isArray(data) ? data : []);
          setIsLoading(false);
        })
        .catch(err => {
          console.error('Error loading sheet data:', err);
          setError('Failed to load products. Please try again.');
          setIsLoading(false);
        });
    }
  }, [selectedCollection, selectedSheet]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter collections based on search query
  const filteredCollections = collections.filter(collection =>
    collection.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter sheets based on search query
  const filteredSheets = sheets.filter(sheet =>
    sheet.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter sheet data based on search query
  const filteredSheetData = sheetData
    ? sheetData.filter(item => {
        const matchesSearch =
          item['Product Name']?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item['Product Description']?.toLowerCase().includes(searchQuery.toLowerCase());
        // Placeholder for activeFilters (uncomment and adjust when filters are implemented)
        // const matchesFilters =
        //   (activeFilters.origin ? item['Origin'] === activeFilters.origin : true) &&
        //   (activeFilters.certification ? item['Certification'] === activeFilters.certification : true) &&
        //   (activeFilters.availability ? item['Availability'] === activeFilters.availability : true) &&
        //   (activeFilters.orderVolume ? item['OrderVolume'] === activeFilters.orderVolume : true);
        // return matchesSearch && matchesFilters;
        return matchesSearch;
      })
    : [];

  return (
    <div className="min-h-screen bg-surface">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-primary/10 to-accent pt-20 lg:pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold text-secondary-dark mb-6">
              Interactive Product Explorer
            </h1>
            <p className="text-xl text-secondary-light max-w-3xl mx-auto mb-8">
             Discover our wide range of premium, high-quality products.
             Crafted to meet diverse needs with unmatched excellence.
            </p>
            {/* Search & View Toggle */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-8">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                placeholder="Search collections, sheets, or products..."
              />
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center px-4 py-2 bg-white border border-border rounded-lg hover:bg-accent transition-colors duration-300"
                >
                  <Icon name="Filter" size={20} className="mr-2" />
                  Filters
                </button>
                <div className="flex items-center bg-white rounded-lg border border-border">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-l-lg ${
                      viewMode === 'grid' ? 'bg-primary text-white' : 'text-secondary hover:bg-accent'
                    }`}
                  >
                    <Icon name="Grid3X3" size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-r-lg ${
                      viewMode === 'list' ? 'bg-primary text-white' : 'text-secondary hover:bg-accent'
                    }`}
                  >
                    <Icon name="List" size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Breadcrumbs */}
            <nav className="flex items-center justify-center text-sm text-secondary-light">
              <Link
                href="/homepage-premium-b2b-trade-platform"
                className="hover:text-primary transition-colors duration-300"
              >
                Home
              </Link>
              <Icon name="ChevronRight" size={16} className="mx-2" />
              <span className="text-secondary">Products</span>
              {selectedCollection && (
                <>
                  <Icon name="ChevronRight" size={16} className="mx-2" />
                  <span className="text-primary capitalize">{selectedCollection}</span>
                </>
              )}
              {selectedSheet && (
                <>
                  <Icon name="ChevronRight" size={16} className="mx-2" />
                  <span className="text-primary capitalize">{selectedSheet}</span>
                </>
              )}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Panel (Optional) */}
          {showFilters && (
            <div className="w-full lg:w-64">
              <FilterPanel activeFilters={activeFilters} setActiveFilters={setActiveFilters} categories={undefined} selectedCategory={undefined} setSelectedCategory={undefined} />
            </div>
          )}
          <div className="flex-1">
            {isLoading ? (
              <p className="text-center text-secondary">Loading...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : !selectedCollection ? (
              <>
                {/* Collections List */}
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-montserrat font-bold text-secondary-dark">
                      Product Collections
                    </h2>
                    <div className="text-sm text-secondary-light">
                      {filteredCollections.length} collections available
                    </div>
                  </div>
                  {filteredCollections.length > 0 ? (
                    <div
                      className={`grid gap-6 ${
                        viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'
                      }`}
                    >
                      {filteredCollections.map(collection => (
                        <CategoryCard
                          key={collection}
                          category={{
                            id: collection,
                            name: collection,
                            image: 'https://via.placeholder.com/800',
                            description: `Explore products in ${collection}`,
                          }}
                          onClick={() => setSelectedCollection(collection)}
                          viewMode={viewMode}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-secondary-light">No collections found.</p>
                  )}
                </div>
              </>
            ) : !selectedSheet ? (
              <>
                {/* Sheets List */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-montserrat font-bold text-secondary-dark mb-2">
                        {selectedCollection}
                      </h2>
                      <p className="text-secondary-light">
                        {filteredSheets.length} sub-categories available
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedCollection(null)}
                      className="flex items-center px-4 py-2 text-primary hover:bg-accent rounded-lg transition-colors duration-300"
                    >
                      <Icon name="ArrowLeft" size={20} className="mr-2" />
                      Back to Collections
                    </button>
                  </div>
                  {filteredSheets.length > 0 ? (
                    <div
                      className={`grid gap-6 ${
                        viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'
                      }`}
                    >
                      {filteredSheets.map(sheet => (
                        <CategoryCard
                          key={sheet}
                          category={{
                            id: sheet,
                            name: sheet,
                            image: 'https://via.placeholder.com/800',
                            description: `Explore products in ${sheet}`,
                          }}
                          onClick={() => setSelectedSheet(sheet)}
                          viewMode={viewMode}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-secondary-light">No sub-categories found.</p>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Sheet Data (Products) in Table */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-montserrat font-bold text-secondary-dark mb-2">
                        {selectedSheet}
                      </h2>
                      <p className="text-secondary-light">{filteredSheetData.length} products available</p>
                    </div>
                    <button
                      onClick={() => setSelectedSheet(null)}
                      className="flex items-center px-4 py-2 text-primary hover:bg-accent rounded-lg transition-colors duration-300"
                    >
                      <Icon name="ArrowLeft" size={20} className="mr-2" />
                      Back to Sub-Categories
                    </button>
                  </div>
                  {filteredSheetData.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-border rounded-lg">
                        <thead>
                          <tr className="bg-primary/10 text-secondary-dark">
                            <th className="py-3 px-4 text-left font-montserrat font-semibold">
                              HS Code
                            </th>
                            <th className="py-3 px-4 text-left font-montserrat font-semibold">
                              Product Name
                            </th>
                            <th className="py-3 px-4 text-left font-montserrat font-semibold">
                              Product Description
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredSheetData.map((product, index) => (
                            <tr
                              key={product['HS Code'] || index}
                              className="border-t border-border hover:bg-accent/10"
                            >
                              <td className="py-3 px-4 text-secondary">{product['HS Code']}</td>
                              <td className="py-3 px-4 text-secondary">{product['Product Name']}</td>
                              <td className="py-3 px-4 text-secondary">
                                {product['Product Description']}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-secondary-light text-center">No products found.</p>
                  )}
                </div>

                {/* Optional Components */}
                {/* <SeasonalCalendar selectedCategory={selectedSheet} /> */}
                {/* <QualityAssurance selectedCategory={selectedSheet} /> */}
              </>
            )}
          </div>
        </div>
      </div>

      {/* CTA */}
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
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-montserrat font-semibold rounded-lg hover:bg-accent transition-all duration-300"
            >
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Get Custom Quote
            </Link>
            <Link
              href="/contact-global-accessibility-hub"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-montserrat font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
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