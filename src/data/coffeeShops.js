const coffeeShops = [
    {
        id: 1,
        name: "Barn's Coffee",
        nameAr: "بارنز كوفي",
        location: "Buraydah",
        locationAr: "بريدة",
        description: "Specialty coffee roasters known for their single-origin beans and minimalist aesthetic.",
        rating: 4.7,
        hours: "7:00 AM - 12:00 AM",
        tags: ["Specialty", "Roastery", "Wi-Fi"],
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop"
    },
    {
        id: 2,
        name: "Dose Café",
        nameAr: "دوز كافيه",
        location: "Buraydah",
        locationAr: "بريدة",
        description: "Trendy café with expertly crafted espresso drinks and a cozy industrial interior.",
        rating: 4.5,
        hours: "6:30 AM - 1:00 AM",
        tags: ["Espresso", "Cozy", "Pastries"],
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop"
    },
    {
        id: 3,
        name: "Medd Café",
        nameAr: "ميد كافيه",
        location: "Unaizah",
        locationAr: "عنيزة",
        description: "Premium specialty coffee experience with carefully sourced beans from around the world.",
        rating: 4.8,
        hours: "7:00 AM - 11:30 PM",
        tags: ["Premium", "Specialty", "Quiet"],
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop"
    },
    {
        id: 4,
        name: "Flat White Café",
        nameAr: "فلات وايت كافيه",
        location: "Buraydah",
        locationAr: "بريدة",
        description: "Australian-style café serving perfect flat whites and brunch favorites.",
        rating: 4.6,
        hours: "6:00 AM - 11:00 PM",
        tags: ["Brunch", "Flat White", "Family"],
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop"
    },
    {
        id: 5,
        name: "% Arabica",
        nameAr: "أرابيكا",
        location: "Buraydah",
        locationAr: "بريدة",
        description: "World-renowned Japanese coffee brand with a sleek, minimal design philosophy.",
        rating: 4.9,
        hours: "7:00 AM - 12:00 AM",
        tags: ["International", "Minimalist", "Latte Art"],
        image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop"
    },
    {
        id: 6,
        name: "Camel Step",
        nameAr: "كامل ستيب",
        location: "Buraydah",
        locationAr: "بريدة",
        description: "Local favorite blending traditional Saudi hospitality with modern coffee culture.",
        rating: 4.4,
        hours: "4:00 PM - 2:00 AM",
        tags: ["Local", "Traditional", "Outdoor"],
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop"
    },
    {
        id: 7,
        name: "Kofuku Coffee",
        nameAr: "كوفوكو كوفي",
        location: "Unaizah",
        locationAr: "عنيزة",
        description: "Japanese-inspired café offering pour-over excellence and matcha specialties.",
        rating: 4.6,
        hours: "8:00 AM - 11:00 PM",
        tags: ["Pour Over", "Japanese", "Matcha"],
        image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&h=400&fit=crop"
    },
    {
        id: 8,
        name: "Elixir Bunn",
        nameAr: "إلكسير بن",
        location: "Buraydah",
        locationAr: "بريدة",
        description: "Artisan roastery focused on ethically sourced beans with rich, bold flavors.",
        rating: 4.7,
        hours: "7:00 AM - 11:00 PM",
        tags: ["Roastery", "Ethical", "Bold"],
        image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&h=400&fit=crop"
    },
    {
        id: 9,
        name: "Hue Coffee",
        nameAr: "هيو كوفي",
        location: "Ar Rass",
        locationAr: "الرس",
        description: "Colorful café with creative specialty drinks and Instagram-worthy presentations.",
        rating: 4.3,
        hours: "5:00 PM - 1:00 AM",
        tags: ["Creative", "Instagrammable", "Desserts"],
        image: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=600&h=400&fit=crop"
    },
    {
        id: 10,
        name: "Overdose Coffee",
        nameAr: "اوفردوز كوفي",
        location: "Buraydah",
        locationAr: "بريدة",
        description: "Edgy café with strong brews, late-night vibes, and a modern urban atmosphere.",
        rating: 4.5,
        hours: "4:00 PM - 3:00 AM",
        tags: ["Late Night", "Strong Brew", "Urban"],
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&h=400&fit=crop"
    },
    {
        id: 11,
        name: "Five Elephants",
        nameAr: "فايف إليفنتس",
        location: "Unaizah",
        locationAr: "عنيزة",
        description: "European-style specialty coffee and cheesecake bar with a warm, inviting ambiance.",
        rating: 4.8,
        hours: "8:00 AM - 12:00 AM",
        tags: ["European", "Cheesecake", "Ambiance"],
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=400&fit=crop"
    },
    {
        id: 12,
        name: "Volume Coffee",
        nameAr: "فوليوم كوفي",
        location: "Buraydah",
        locationAr: "بريدة",
        description: "Music-themed café where great coffee meets carefully curated playlists.",
        rating: 4.4,
        hours: "7:00 AM - 1:00 AM",
        tags: ["Music", "Chill", "Wi-Fi"],
        image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&h=400&fit=crop"
    }
];

export default coffeeShops;
