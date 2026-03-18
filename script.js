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
let searchTerm = '';
let sliderPositions = {};

// DOM Elements
const searchInput = document.getElementById('search');
const modalOverlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');
const themeIcon = document.getElementById('theme-icon');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeSliders();
    setupEventListeners();
    loadTheme();
});

// Initialize Sliders
function initializeSliders() {
    const sections = ['trending', 'action', 'comedy', 'drama', 'fantasy'];
    
    sections.forEach(section => {
        const sliderTrack = document.querySelector(`#${section}-slider .slider-track`);
        if (sliderTrack) {
            sliderPositions[section] = 0;
            renderSliderSection(section, sliderTrack);
        }
    });
}

// Render Slider Section
function renderSliderSection(section, sliderTrack) {
    sliderTrack.innerHTML = '';
    
    let animeInSection = animeData;
    
    // Filter by genre for specific sections (not trending)
    if (section !== 'trending') {
        animeInSection = animeData.filter(anime => anime.genre === section);
    }
    
    // Apply search filter
    if (searchTerm) {
        animeInSection = animeInSection.filter(anime => 
            anime.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            anime.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    animeInSection.forEach((anime, index) => {
        const animeCard = createAnimeCard(anime, index, section);
        sliderTrack.appendChild(animeCard);
    });
    
    // Reset slider position
    sliderPositions[section] = 0;
    updateSliderPosition(section);
}

// Create Anime Card
function createAnimeCard(anime, index, section) {
    const card = document.createElement('div');
    card.className = 'anime-card';
    card.dataset.animeId = anime.id;
    card.dataset.section = section;
    
    const isFavorite = favorites.includes(anime.id);
    
    card.innerHTML = `
        <div class="anime-poster">
            <img src="${anime.poster}" alt="${anime.title}" loading="lazy">
            <div class="anime-overlay">
                <button class="view-details-btn" data-anime-id="${anime.id}">
                    View Details
                </button>
            </div>
        </div>
        <div class="anime-info">
            <h3 class="anime-title">${anime.title}</h3>
            <div class="anime-meta">
                <span class="anime-genre">${anime.genre.charAt(0).toUpperCase() + anime.genre.slice(1)}</span>
                <span class="heart ${isFavorite ? 'active' : ''}" onclick="toggleLike(this)" data-anime-id="${anime.id}">
                    ${isFavorite ? '❤️' : '🤍'}
                </span>
            </div>
        </div>
    `;
    
    return card;
}

// Setup Event Listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', function () {
        searchTerm = this.value.toLowerCase();
        initializeSliders();
    });

    // Slider navigation buttons
    document.querySelectorAll('.slider-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.dataset.section;
            const direction = btn.classList.contains('prev') ? -1 : 1;
            navigateSlider(section, direction);
        });
    });

    // Anime card clicks
    document.addEventListener('click', (e) => {
        // Handle heart clicks
        if (e.target.classList.contains('heart')) {
            toggleLike(e.target);
            return;
        }
        
        // Handle view details clicks
        if (e.target.classList.contains('view-details-btn')) {
            const animeId = parseInt(e.target.dataset.animeId);
            openModal(animeId);
            return;
        }
        
        // Handle card clicks
        const card = e.target.closest('.anime-card');
        if (card) {
            const animeId = parseInt(card.dataset.animeId);
            openModal(animeId);
        }
    });

    // Modal controls
    modalClose.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', () => navigateModal(-1));
    modalNext.addEventListener('click', () => navigateModal(1));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (document.getElementById("modal-overlay").style.display === "flex") {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') navigateModal(-1);
            if (e.key === 'ArrowRight') navigateModal(1);
        }
    });

    // Theme toggle
    themeIcon.addEventListener('click', toggleTheme);

    // Modal favorite button
    document.getElementById('modal-favorite').addEventListener('click', () => {
        const modalHeart = document.querySelector('.modal-heart');
        toggleLike(modalHeart);
    });

    // Trailer button
    document.getElementById('btn-trailer').addEventListener('click', () => {
        const anime = animeData.find(a => a.id === currentAnimeIndex);
        if (anime) {
            window.open(anime.trailer, '_blank');
        }
    });
}

// Slider Navigation
function navigateSlider(section, direction) {
    const sliderTrack = document.querySelector(`#${section}-slider .slider-track`);
    const cards = sliderTrack.querySelectorAll('.anime-card');
    const cardWidth = 216; // 200px + 16px gap
    const visibleCards = Math.floor(sliderTrack.parentElement.offsetWidth / cardWidth);
    const maxScroll = Math.max(0, cards.length - visibleCards);
    
    sliderPositions[section] += direction;
    sliderPositions[section] = Math.max(0, Math.min(sliderPositions[section], maxScroll));
    
    updateSliderPosition(section);
    updateSliderButtons(section, maxScroll);
}

function updateSliderPosition(section) {
    const sliderTrack = document.querySelector(`#${section}-slider .slider-track`);
    const cardWidth = 216;
    sliderTrack.style.transform = `translateX(-${sliderPositions[section] * cardWidth}px)`;
}

function updateSliderButtons(section, maxScroll) {
    const prevBtn = document.querySelector(`.slider-btn.prev[data-section="${section}"]`);
    const nextBtn = document.querySelector(`.slider-btn.next[data-section="${section}"]`);
    
    prevBtn.disabled = sliderPositions[section] <= 0;
    nextBtn.disabled = sliderPositions[section] >= maxScroll;
}

// Premium Modal Functions
function openModal(animeId) {
    const anime = animeData.find(a => a.id === animeId);
    if (!anime) return;
    
    currentAnimeIndex = animeId;
    
    document.getElementById("modal-overlay").style.display = "flex";
    document.getElementById("modal-poster").src = anime.poster;
    document.getElementById("modal-poster").alt = anime.title;
    document.getElementById("modal-title").innerText = anime.title;
    document.getElementById("modal-description").innerText = anime.description;
    
    // Update genres
    const genresContainer = document.getElementById('modal-genres');
    genresContainer.innerHTML = `
        <span class="modal-genre-tag">${anime.genre.charAt(0).toUpperCase() + anime.genre.slice(1)}</span>
    `;
    
    // Update favorite button
    const modalHeart = document.querySelector('.modal-heart');
    const isFavorite = favorites.includes(anime.id);
    modalHeart.className = `modal-heart ${isFavorite ? 'active' : ''}`;
    modalHeart.textContent = isFavorite ? '❤️' : '🤍';
    modalHeart.dataset.animeId = anime.id;
    
    // Add animation classes
    setTimeout(() => {
        document.getElementById("modal-overlay").classList.add("active");
    }, 10);
    
    // Prevent body scroll
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("modal-overlay").classList.remove("active");
    
    // Allow body scroll after animation
    setTimeout(() => {
        document.getElementById("modal-overlay").style.display = "none";
        document.body.style.overflow = "";
    }, 300);
}

// Navigate Modal
function navigateModal(direction) {
    const currentIndex = animeData.findIndex(a => a.id === currentAnimeIndex);
    let newIndex = currentIndex + direction;
    
    // Wrap around
    if (newIndex < 0) newIndex = animeData.length - 1;
    if (newIndex >= animeData.length) newIndex = 0;
    
    openModal(animeData[newIndex].id);
}

// Favorite Toggle
function toggleLike(el) {
    const animeId = parseInt(el.dataset.animeId);
    if (!animeId) return;
    
    el.classList.toggle("active");
    
    // Update favorites array
    if (el.classList.contains("active")) {
        favorites.push(animeId);
        el.innerHTML = "❤️";
    } else {
        favorites = favorites.filter(id => id !== animeId);
        el.innerHTML = "🤍";
    }
    
    // Save to localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Update all favorite buttons for this anime
    document.querySelectorAll(`.heart[data-anime-id="${animeId}"]`).forEach(heart => {
        if (el.classList.contains("active")) {
            heart.classList.add('active');
            heart.innerHTML = '❤️';
        } else {
            heart.classList.remove('active');
            heart.innerHTML = '🤍';
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

// Add smooth scroll behavior for mouse wheel on sliders
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.slider-container').forEach(container => {
        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener('mouseleave', () => {
            isDown = false;
        });

        container.addEventListener('mouseup', () => {
            isDown = false;
        });

        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });
    });
});
