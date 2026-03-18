// Anime Data
const animeData = [
    {
        id: 1,
        title: "Naruto",
        genre: "action",
        poster: "https://i.pinimg.com/originals/45/bb/e4/45bbe4b282f49903338cb71c03ed0166.png",
        description: "Follow Naruto Uzumaki, a young ninja with a dream to become the strongest ninja and leader of his village. An epic journey of friendship, perseverance, and the pursuit of dreams.",
        trailer: "https://www.youtube.com/watch?v=-G9BqkgZXRA&pp=ygUObmFydXRvIHRyYWlsZXI%3D"
    },
    {
        id: 2,
        title: "Attack on Titan",
        genre: "action",
        poster: "https://peeekaboo.in/cdn/shop/files/AOT.jpg?v=1686310020",
        description: "Humanity fights for survival against giant humanoid Titans that devour humans. A dark, intense story of war, sacrifice, and the mysteries of a world behind walls.",
        trailer: "https://www.youtube.com/watch?v=MGRm4IzK1SQ&pp=ygULQU9UIHRyYWlsZXI%3D"
    },
    {
        id: 3,
        title: "Demon Slayer",
        genre: "action",
        poster: "https://i.pinimg.com/originals/ef/ea/ce/efeace5c4179d1e16d0a0636dae0a31b.jpg",
        description: "Tanjiro Kamado becomes a demon slayer to save his sister and avenge his family. Beautiful animation combined with emotional storytelling and intense action sequences.",
        trailer: "https://www.youtube.com/watch?v=x7uLutVRBfI&pp=ygUVZGVtb24gc2xheWVyICB0cmFpbGVy"
    },
    {
        id: 4,
        title: "One Piece",
        genre: "comedy",
        poster: "https://i.pinimg.com/originals/48/9d/af/489daf7c183b3b8e512fd413011658e6.jpg",
        description: "Monkey D. Luffy and his pirate crew search for the ultimate treasure, One Piece. An adventurous tale of friendship, dreams, and epic sea battles.",
        trailer: "https://www.youtube.com/watch?v=MCb13lbVGE0&pp=ygURb25lIHBpZWNlIHRyYWlsZXI%3D"
    },
    {
        id: 5,
        title: "Jujutsu Kaisen",
        genre: "action",
        poster: "https://i.pinimg.com/originals/75/4b/66/754b66e22ab4fdbd2927a44c9b6fa07b.jpg",
        description: "Yuji Itadori enters the world of jujutsu sorcery to fight cursed spirits. Modern action with stunning visuals and complex character dynamics.",
        trailer: "https://www.youtube.com/watch?v=Ig89Ot0UfvE&pp=ygUMamprICB0cmFpbGVy"
    },
    {
        id: 6,
        title: "Death Note",
        genre: "drama",
        poster: "https://tse3.mm.bing.net/th/id/OIP.k5NcGEpSwdKwqs_eFNnBGwHaG1?pid=Api&h=220&P=0",
        description: "Light Yagami finds a notebook that can kill anyone whose name is written in it. A psychological thriller about justice, morality, and the corrupting nature of power.",
        trailer: "https://www.youtube.com/watch?v=6Mzpu-iLilo&pp=ygUTZGVhdGggbm90ZSAgdHJhaWxlctIHCQnFCgGHKiGM7w%3D"
    },
    {
        id: 7,
        title: "Tokyo Ghoul",
        genre: "drama",
        poster: "https://i.pinimg.com/originals/d5/b0/0a/d5b00a295f541bcb78bb082f09ec969c.png",
        description: "Ken Kaneki becomes half-ghoul after a deadly encounter. A dark exploration of identity, humanity, and the struggle between two worlds.",
        trailer: "https://www.youtube.com/watch?v=vGuQeQsoRgU&pp=ygUTdG9reW8gZ2hvdWwgdHJhaWxlcg%3D"
    },
    {
        id: 8,
        title: "My Hero Academia",
        genre: "fantasy",
        poster: "https://i.pinimg.com/736x/d7/ab/5d/d7ab5d4cc2bd3e633fc5271b2ba932b4.jpg",
        description: "In a world where superpowers are common, Izuku Midoriya dreams of becoming a hero despite being born without powers. An inspiring story of courage and determination.",
        trailer: "https://www.youtube.com/watch?v=zz37nGym3OQ&pp=ygUZbXkgaGVybyBhY2VkZW1pYSAgdHJhaWxlcg%3D"
    },
    {
        id: 9,
        title: "Lookism",
        genre: "drama",
        poster: "https://i.pinimg.com/originals/64/7f/25/647f259d97fcbb00244d1d4d9bb60a0c.png",
        description: "Daniel Park, an overweight high school student, wakes up one day in a new body that's handsome, athletic, and popular. A story about self-acceptance, bullying, and the true meaning of beauty.",
        trailer: "https://www.youtube.com/watch?v=LPgBQSya5rU&pp=ygUPbG9ra2lzbSB0cmFpbGVy"
    },
    {
        id: 10,
        title: "Tokyo Revengers",
        genre: "action",
        poster: "https://m.media-amazon.com/images/I/61c4Jy9cT0L._AC_.jpg",
        description: "Takemichi Hanagaki travels back in time to his middle school days to save his girlfriend and change the future. A time-traveling gang story about redemption and second chances.",
        trailer: "https://www.youtube.com/watch?v=wXvnmUg8I0M&pp=ygUYdG9reW8gcmV2ZW5nZXJzICB0cmFpbGVy"
    },
    {
        id: 11,
        title: "Vinland Saga",
        genre: "drama",
        poster: "https://i.pinimg.com/originals/4d/24/cf/4d24cf501b4aac76ca5969c2e9474fb8.jpg",
        description: "Thorfinn, a young Viking warrior, seeks revenge while exploring themes of peace, violence, and the true meaning of strength. An epic historical drama set in the Viking Age.",
        trailer: "https://www.youtube.com/watch?v=f8JrZ7Q_p-8&pp=ygUWdmlubGFuZCBzYWdhICAgdHJhaWxlcg%3D"
    },
    {
        id: 12,
        title: "Monster",
        genre: "drama",
        poster: "https://i.pinimg.com/originals/7d/67/6c/7d676c1fbc77d3e6e89850fc69c2ba4f.png",
        description: "Dr. Kenzo Tenma pursues a former patient who has become a dangerous psychopath. A psychological thriller exploring morality, justice, and the nature of evil.",
        trailer: "https://www.youtube.com/watch?v=9aS-EgdAq6U&pp=ygUWbW9uc3RlciBhbmltZSAgdHJhaWxlcg%3D"
    },
    {
        id: 13,
        title: "Windbreaker",
        genre: "action",
        poster: "https://static.zerochan.net/Wind.Breaker.full.4140750.jpg",
        description: "Haruka Sakura transfers to Furin High School, known as the strongest delinquent school. A story of friendship, fights, and finding your place in the world.",
        trailer: "https://www.youtube.com/watch?v=KQMvKS5TK5g&pp=ygUUd2luZCBicmVha2VyIHRyYWlsZXI%3D"
    },
    {
        id: 14,
        title: "Blue Lock",
        genre: "action",
        poster: "https://i.etsystatic.com/39794910/r/il/e6d6d1/5206118598/il_1080xN.5206118598_a6no.jpg",
        description: "300 high school strikers compete in a ruthless training program to create Japan's greatest striker. A high-intensity sports anime about ego and becoming the best.",
        trailer: "https://www.youtube.com/watch?v=IVsII3dLbWc&pp=ygUSYmx1ZSBsb2NrICB0cmFpbGVy"
    },
    {
        id: 15,
        title: "Haikyu!!",
        genre: "comedy",
        poster: "https://i.pinimg.com/originals/82/31/7b/82317b95770f7319f2b7e54f9f8fa4a7.jpg",
        description: "Shoyo Hinata, despite his short stature, dreams of becoming a great volleyball player. An inspiring sports anime about teamwork, determination, and reaching for your dreams.",
        trailer: "https://www.youtube.com/watch?v=JOGp2c7-cKc&pp=ygUQaGFpa3l1ICAgdHJhaWxlcg%3D%3D"
    },
    {
        id: 16,
        title: "Solo Leveling",
        genre: "action",
        poster: "https://4kwallpapers.com/images/wallpapers/solo-leveling-2560x1440-16126.jpg",
        description: "Sung Jinwoo, the weakest hunter, gains the ability to level up and become the strongest. A thrilling action story about power and survival in a world of monsters.",
        trailer: "https://www.youtube.com/watch?v=bssSj4cKsrI&pp=ygUVc29sbyBsZXZlbGluZyB0cmFpbGVy"
    },
    {
        id: 17,
        title: "Bleach",
        genre: "action",
        poster: "https://wallpapercave.com/wp/wp11333332.jpg",
        description: "Ichigo Kurosaki becomes a Soul Reaper, protecting the living world from evil spirits. An epic supernatural battle story.",
        trailer: "https://www.youtube.com/watch?v=KPL8K8Rfyxc&pp=ygUPYmxlYWNoICB0cmFpbGVy"
    },
    {
        id: 18,
        title: "Dragon Ball Z",
        genre: "action",
        poster: "https://www.themoviedb.org/t/p/original/uJT3CmfSy9R1T2vCVpDWhNJXhPX.jpg",
        description: "Goku and his friends defend Earth from powerful villains. The legendary action anime that defined a generation.",
        trailer: "https://www.youtube.com/watch?v=sxufB6DxXk0&pp=ygUVZHJhZ29uIGJhbGwgeiB0cmFpbGVy"
    },
    {
        id: 19,
        title: "Full Metal Alchemist Brotherhood",
        genre: "action",
        poster: "https://wallpapers.com/images/hd/fullmetal-alchemist-brotherhood-action-poster-0tvvnvos36llm4yx.jpg",
        description: "Two brothers search for the Philosopher's Stone to restore their bodies after a failed alchemical experiment. An epic tale of sacrifice, redemption, and the true meaning of humanity.",
        trailer: "https://www.youtube.com/watch?v=Wb9NHlFtMVo&pp=ygUbZnVsbG1ldGFsIGFsY2hlbWlzdCB0cmFpbGVy"
    },
    {
        id: 20,
        title: "One Punch Man",
        genre: "comedy",
        poster: "https://wallpapercave.com/wp/wp10228912.jpg",
        description: "Saitama, a hero who can defeat any enemy with a single punch, searches for a worthy opponent. A hilarious and action-packed parody of superhero tropes.",
        trailer: "https://www.youtube.com/watch?v=oh7bd-CDY6U&pp=ygUVb25lIHB1bmNoIG1hbiB0cmFpbGVy"
    },
];

// Global Variables
let currentSlideIndex = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeSlideshow();
    setupEventListeners();
});

// Initialize Slideshow
function initializeSlideshow() {
    // Set initial slide
    showSlide(0);
    
    // Add click listeners to slides for navigation
    document.querySelectorAll('.slide').forEach((slide) => {
        slide.addEventListener('click', (e) => {
            // Don't navigate if clicking on Watch Trailer button
            if (!e.target.closest('.slide-btn')) {
                nextSlide();
            }
        });
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowLeft':
                previousSlide();
                break;
            case 'ArrowRight':
                nextSlide();
                break;
        }
    });
    
    // Mouse wheel navigation
    document.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
            nextSlide();
        } else {
            previousSlide();
        }
    }, { passive: true });
    
    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextSlide();
        } else if (touchEndX > touchStartX + 50) {
            previousSlide();
        }
    }
}

// Slideshow Functions
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    
    // Hide all slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    
    // Show current slide
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    
    // Update current index
    currentSlideIndex = index;
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function previousSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

function goToSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

// Watch Trailer
function watchTrailer(animeId) {
    const anime = animeData.find(a => a.id === animeId);
    if (anime) {
        window.open(anime.trailer, '_blank');
    }
}

// Performance optimization - Preload images
function preloadImages() {
    animeData.forEach(anime => {
        const img = new Image();
        img.src = anime.poster;
    });
}

// Initialize preloading
preloadImages();
