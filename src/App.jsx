import { useState, useMemo } from 'react';
import Header from './components/Header';
import CoffeeCard from './components/CoffeeCard';
import Footer from './components/Footer';
import coffeeShops from './data/coffeeShops';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');

  const cities = useMemo(() => {
    return [...new Set(coffeeShops.map(shop => shop.location))];
  }, []);

  const filteredShops = useMemo(() => {
    return coffeeShops.filter(shop => {
      const matchesSearch =
        shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shop.nameAr.includes(searchQuery) ||
        shop.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shop.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCity = selectedCity === 'All' || shop.location === selectedCity;

      return matchesSearch && matchesCity;
    });
  }, [searchQuery, selectedCity]);

  return (
    <div className="app">
      <Header
        shopCount={coffeeShops.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
        cities={cities}
      />

      <main className="main-content">
        <div className="results-bar">
          <span className="results-count">
            {filteredShops.length} {filteredShops.length === 1 ? 'shop' : 'shops'} found
          </span>
          {(searchQuery || selectedCity !== 'All') && (
            <button
              className="clear-filters"
              onClick={() => { setSearchQuery(''); setSelectedCity('All'); }}
            >
              Clear Filters ✕
            </button>
          )}
        </div>

        {filteredShops.length > 0 ? (
          <div className="cards-grid">
            {filteredShops.map((shop, index) => (
              <CoffeeCard key={shop.id} shop={shop} index={index} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <span className="no-results-icon">🔍</span>
            <h3>No coffee shops found</h3>
            <p>Try adjusting your search or filter</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
