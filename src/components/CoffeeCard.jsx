import { useState } from 'react';

function CoffeeCard({ shop, index }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 >= 0.3;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<span key={i} className="star filled">★</span>);
            } else if (i === fullStars && hasHalf) {
                stars.push(<span key={i} className="star half">★</span>);
            } else {
                stars.push(<span key={i} className="star empty">★</span>);
            }
        }
        return stars;
    };

    return (
        <div
            className={`coffee-card ${imageLoaded ? 'loaded' : ''}`}
            style={{ animationDelay: `${index * 0.08}s` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="card-image-wrapper">
                <img
                    src={shop.image}
                    alt={shop.name}
                    className={`card-image ${isHovered ? 'zoomed' : ''}`}
                    onLoad={() => setImageLoaded(true)}
                    loading="lazy"
                />
                <div className="card-image-overlay"></div>
                <div className="card-rating-badge">
                    <span className="rating-star">★</span>
                    <span>{shop.rating}</span>
                </div>
            </div>

            <div className="card-body">
                <div className="card-header">
                    <h3 className="card-name">{shop.name}</h3>
                    <span className="card-name-ar">{shop.nameAr}</span>
                </div>

                <div className="card-location">
                    <svg className="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{shop.location} • {shop.locationAr}</span>
                </div>

                <p className="card-description">{shop.description}</p>

                <div className="card-hours">
                    <svg className="clock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12,6 12,12 16,14" />
                    </svg>
                    <span>{shop.hours}</span>
                </div>

                <div className="card-tags">
                    {shop.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>

                <div className="card-stars">
                    {renderStars(shop.rating)}
                </div>
            </div>
        </div>
    );
}

export default CoffeeCard;
