// Anime Data
const animeData = [
    {
        id: 1,
        title: "Naruto",
        genre: "action",
        poster: "https://picsum.photos/seed/naruto/300/450",
        description: "Follow Naruto Uzumaki, a young ninja with a dream to become the strongest ninja and leader of his village. An epic journey of friendship, perseverance, and the pursuit of dreams.",
        trailer: "https://www.youtube.com/watch?v=3jQrN5y8_5I"
    },
    {
        id: 2,
        title: "Attack on Titan",
        genre: "action",
        poster: "https://picsum.photos/seed/aot/300/450",
        description: "Humanity fights for survival against giant humanoid Titans that devour humans. A dark, intense story of war, sacrifice, and the mysteries of a world behind walls.",
        trailer: "https://www.youtube.com/watch?v=MGRm2IiiO_s"
    },
    {
        id: 3,
        title: "Demon Slayer",
        genre: "action",
        poster: "https://picsum.photos/seed/demonslayer/300/450",
        description: "Tanjiro Kamado becomes a demon slayer to save his sister and avenge his family. Beautiful animation combined with emotional storytelling and intense action sequences.",
        trailer: "https://www.youtube.com/watch?v=VgzG3h3d3Zg"
    },
    {
        id: 4,
        title: "One Piece",
        genre: "comedy",
        poster: "https://picsum.photos/seed/onepiece/300/450",
        description: "Monkey D. Luffy and his pirate crew search for the ultimate treasure, One Piece. An adventurous tale of friendship, dreams, and epic sea battles.",
        trailer: "https://www.youtube.com/watch?v=rRzVt4nrryg"
    },
    {
        id: 5,
        title: "Jujutsu Kaisen",
        genre: "action",
        poster: "https://picsum.photos/seed/jjk/300/450",
        description: "Yuji Itadori enters the world of jujutsu sorcery to fight cursed spirits. Modern action with stunning visuals and complex character dynamics.",
        trailer: "https://www.youtube.com/watch?v=FkD9T-8i5L4"
    },
    {
        id: 6,
        title: "Death Note",
        genre: "drama",
        poster: "https://picsum.photos/seed/deathnote/300/450",
        description: "Light Yagami finds a notebook that can kill anyone whose name is written in it. A psychological thriller about justice, morality, and the corrupting nature of power.",
        trailer: "https://www.youtube.com/watch?v=NlUeBMEhtKo"
    },
    {
        id: 7,
        title: "Tokyo Ghoul",
        genre: "drama",
        poster: "https://picsum.photos/seed/tokyoghoul/300/450",
        description: "Ken Kaneki becomes half-ghoul after a deadly encounter. A dark exploration of identity, humanity, and the struggle between two worlds.",
        trailer: "https://www.youtube.com/watch?v=iJhGZrm-3jY"
    },
    {
        id: 8,
        title: "My Hero Academia",
        genre: "fantasy",
        poster: "https://picsum.photos/seed/mha/300/450",
        description: "In a world where superpowers are common, Izuku Midoriya dreams of becoming a hero despite being born without powers. An inspiring story of courage and determination.",
        trailer: "https://www.youtube.com/watch?v=JkEa9UyO4Y8"
    },
    {
        id: 9,
        title: "Lookism",
        genre: "drama",
        poster: "https://picsum.photos/seed/lookism/300/450",
        description: "Daniel Park, an overweight high school student, wakes up one day in a new body that's handsome, athletic, and popular. A story about self-acceptance, bullying, and the true meaning of beauty.",
        trailer: "https://www.youtube.com/watch?v=Hk2mCq7W0qU"
    },
    {
        id: 10,
        title: "Tokyo Revengers",
        genre: "action",
        poster: "https://picsum.photos/seed/tokyorevengers/300/450",
        description: "Takemichi Hanagaki travels back in time to his middle school days to save his girlfriend and change the future. A time-traveling gang story about redemption and second chances.",
        trailer: "https://www.youtube.com/watch?v=O6zB9qJhQW0"
    },
    {
        id: 11,
        title: "Vinland Saga",
        genre: "drama",
        poster: "https://picsum.photos/seed/vinlandsaga/300/450",
        description: "Thorfinn, a young Viking warrior, seeks revenge while exploring themes of peace, violence, and the true meaning of strength. An epic historical drama set in the Viking Age.",
        trailer: "https://www.youtube.com/watch?v=2rRz5oV2qX8"
    },
    {
        id: 12,
        title: "Monster",
        genre: "drama",
        poster: "https://picsum.photos/seed/monster/300/450",
        description: "Dr. Kenzo Tenma pursues a former patient who has become a dangerous psychopath. A psychological thriller exploring morality, justice, and the nature of evil.",
        trailer: "https://www.youtube.com/watch?v=8jP2jJ3YQ3A"
    },
    {
        id: 13,
        title: "Windbreaker",
        genre: "action",
        poster: "https://picsum.photos/seed/windbreaker/300/450",
        description: "Haruka Sakura transfers to Furin High School, known as the strongest delinquent school. A story of friendship, fights, and finding your place in the world.",
        trailer: "https://www.youtube.com/watch?v=9xL2jJ8YQ4M"
    },
    {
        id: 14,
        title: "Blue Lock",
        genre: "action",
        poster: "https://picsum.photos/seed/bluelock/300/450",
        description: "300 high school strikers compete in a ruthless training program to create Japan's greatest striker. A high-intensity sports anime about ego and becoming the best.",
        trailer: "https://www.youtube.com/watch?v=7f6Tj5pJ8Xk"
    },
    {
        id: 15,
        title: "Haikyu!!",
        genre: "comedy",
        poster: "https://picsum.photos/seed/haikyu/300/450",
        description: "Shoyo Hinata, despite his short stature, dreams of becoming a great volleyball player. An inspiring sports anime about teamwork, determination, and reaching for your dreams.",
        trailer: "https://www.youtube.com/watch?v=3jQrN5y8_5I"
    }
];

// Global Variables
let currentAnimeIndex = 0;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentFilter = 'all';
let searchTerm = '';

// DOM Elements
const animeGrid = document.getElementById('anime-grid');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const modalOverlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');
const themeIcon = document.getElementById('theme-icon');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderAnimeGrid();
    setupEventListeners();
    loadTheme();
});

// Render Anime Grid
function renderAnimeGrid() {
    animeGrid.innerHTML = '';
    
    const filteredAnime = animeData.filter(anime => {
        const matchesFilter = currentFilter === 'all' || anime.genre === currentFilter;
        const matchesSearch = anime.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    filteredAnime.forEach((anime, index) => {
        const animeCard = createAnimeCard(anime, index);
        animeGrid.appendChild(animeCard);
    });
}

// Create Anime Card
function createAnimeCard(anime, index) {
    const card = document.createElement('div');
    card.className = 'anime-card';
    card.dataset.index = index;
    
    const isFavorite = favorites.includes(anime.id);
    
    card.innerHTML = `
        <div class="anime-poster">
            <img src="${anime.poster}" alt="${anime.title}" loading="lazy">
            <div class="anime-overlay">
                <button class="view-details-btn" data-index="${index}">
                    View Details
                </button>
            </div>
        </div>
        <div class="anime-info">
            <h3 class="anime-title">${anime.title}</h3>
            <div class="anime-meta">
                <span class="anime-genre">${anime.genre.charAt(0).toUpperCase() + anime.genre.slice(1)}</span>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${anime.id}">
                    <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Setup Event Listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderAnimeGrid();
    });

    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderAnimeGrid();
        });
    });

    // Anime card clicks (event delegation)
    animeGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-details-btn')) {
            const index = parseInt(e.target.dataset.index);
            openModal(index);
        } else if (e.target.closest('.favorite-btn')) {
            const btn = e.target.closest('.favorite-btn');
            const animeId = parseInt(btn.dataset.id);
            toggleFavorite(btn, animeId);
        } else if (e.target.closest('.anime-card')) {
            const card = e.target.closest('.anime-card');
            const index = parseInt(card.dataset.index);
            openModal(index);
        }
    });

    // Modal controls
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    modalPrev.addEventListener('click', () => {
        navigateModal(-1);
    });

    modalNext.addEventListener('click', () => {
        navigateModal(1);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modalOverlay.classList.contains('active')) {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') navigateModal(-1);
            if (e.key === 'ArrowRight') navigateModal(1);
        }
    });

    // Theme toggle
    themeIcon.addEventListener('click', toggleTheme);

    // Modal favorite button
    document.getElementById('modal-favorite').addEventListener('click', () => {
        const anime = getFilteredAnime()[currentAnimeIndex];
        const btn = document.getElementById('modal-favorite');
        toggleFavorite(btn, anime.id);
    });

    // Trailer button
    document.getElementById('btn-trailer').addEventListener('click', () => {
        const anime = getFilteredAnime()[currentAnimeIndex];
        window.open(anime.trailer, '_blank');
    });
}

// Get Filtered Anime
function getFilteredAnime() {
    return animeData.filter(anime => {
        const matchesFilter = currentFilter === 'all' || anime.genre === currentFilter;
        const matchesSearch = anime.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });
}

// Open Modal
function openModal(index) {
    const filteredAnime = getFilteredAnime();
    if (filteredAnime.length === 0) return;
    
    currentAnimeIndex = index;
    const anime = filteredAnime[index];
    
    // Update modal content
    document.getElementById('modal-poster').src = anime.poster;
    document.getElementById('modal-poster').alt = anime.title;
    document.getElementById('modal-title').textContent = anime.title;
    document.getElementById('modal-description').textContent = anime.description;
    
    // Update genres
    const genresContainer = document.getElementById('modal-genres');
    genresContainer.innerHTML = `
        <span class="modal-genre-tag">${anime.genre.charAt(0).toUpperCase() + anime.genre.slice(1)}</span>
    `;
    
    // Update favorite button
    const modalFavoriteBtn = document.getElementById('modal-favorite');
    const isFavorite = favorites.includes(anime.id);
    modalFavoriteBtn.className = `btn-favorite ${isFavorite ? 'active' : ''}`;
    modalFavoriteBtn.innerHTML = `<i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>`;
    
    // Show modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Navigate Modal
function navigateModal(direction) {
    const filteredAnime = getFilteredAnime();
    if (filteredAnime.length === 0) return;
    
    currentAnimeIndex += direction;
    
    // Wrap around
    if (currentAnimeIndex < 0) {
        currentAnimeIndex = filteredAnime.length - 1;
    } else if (currentAnimeIndex >= filteredAnime.length) {
        currentAnimeIndex = 0;
    }
    
    openModal(currentAnimeIndex);
}

// Toggle Favorite
function toggleFavorite(btn, animeId) {
    const isFavorite = favorites.includes(animeId);
    
    if (isFavorite) {
        favorites = favorites.filter(id => id !== animeId);
        btn.classList.remove('active');
        btn.innerHTML = '<i class="far fa-heart"></i>';
    } else {
        favorites.push(animeId);
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-heart"></i>';
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Update all favorite buttons for this anime
    document.querySelectorAll(`.favorite-btn[data-id="${animeId}"]`).forEach(button => {
        if (isFavorite) {
            button.classList.remove('active');
            button.innerHTML = '<i class="far fa-heart"></i>';
        } else {
            button.classList.add('active');
            button.innerHTML = '<i class="fas fa-heart"></i>';
        }
    });
}

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const isLight = body.classList.contains('light-theme');
    
    if (isLight) {
        body.classList.remove('light-theme');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light-theme');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'light');
    }
}

// Load Theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeIcon.className = 'fas fa-sun';
    }
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Performance optimization: Debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search
searchInput.addEventListener('input', debounce((e) => {
    searchTerm = e.target.value;
    renderAnimeGrid();
}, 300));
