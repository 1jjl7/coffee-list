import { useState } from 'react';

function Header({ shopCount, searchQuery, onSearchChange, selectedCity, onCityChange, cities }) {
    return (
        <header className="header">
            <div className="header-bg">
                <div className="header-overlay"></div>
                <div className="header-content">
                    <div className="header-badge">☕ Al Qassim</div>
                    <h1 className="header-title">
                        Coffee Shops
                        <span className="header-title-ar">مقاهي القصيم</span>
                    </h1>
                    <p className="header-subtitle">
                        Discover {shopCount} amazing coffee shops across Al Qassim region
                    </p>

                    <div className="search-bar">
                        <div className="search-input-wrapper">
                            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.35-4.35" />
                            </svg>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search coffee shops..."
                                value={searchQuery}
                                onChange={(e) => onSearchChange(e.target.value)}
                            />
                        </div>
                        <div className="filter-pills">
                            <button
                                className={`filter-pill ${selectedCity === 'All' ? 'active' : ''}`}
                                onClick={() => onCityChange('All')}
                            >
                                All
                            </button>
                            {cities.map(city => (
                                <button
                                    key={city}
                                    className={`filter-pill ${selectedCity === city ? 'active' : ''}`}
                                    onClick={() => onCityChange(city)}
                                >
                                    {city}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
