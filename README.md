# 🎬 Anime Slideshow Gallery

A stunning full-screen anime slideshow experience with heavy animations, dark theme, and custom poster images. Navigate through 20 popular anime series with smooth transitions and trailer integration.

## ✨ Features

### 🎥 Full-Screen Slideshow
- **Immersive Display**: Full viewport anime poster presentation
- **Heavy Animations**: Particle effects, zoom transitions, and gradient overlays
- **Dark Theme**: Professional streaming aesthetic with #0f172a background
- **Manual Navigation**: Click-to-advance, keyboard arrows, and touch support

### 🎯 Core Functionality
- **20 Anime Collection**: Popular series with real poster images
- **Trailer Integration**: Working YouTube trailer links for all anime
- **Smooth Transitions**: 1.5s cubic-bezier animations between slides
- **Responsive Design**: Optimized for desktop and mobile viewing

### 🎨 Visual Excellence
- **Object-Fit: Contain**: Full poster visibility without cropping
- **Particle Background**: Floating animated elements
- **Gradient Overlays**: Purple/blue gradients for dramatic effect
- **Hover Interactions**: Cursor pointer for navigation

### 🌙 Navigation Methods
- **Click Navigation**: Click anywhere on poster to advance
- **Keyboard Support**: Arrow keys for previous/next
- **Touch Gestures**: Swipe support for mobile devices
- **Mouse Wheel**: Scroll wheel navigation

## 🎭 Anime Collection

Featuring **20 popular anime series** with custom poster images:

### ⚔️ Action Series
- **Naruto** - Ninja adventure series
- **Attack on Titan** - Dark fantasy survival
- **Demon Slayer** - Beautiful animation & emotional story
- **Jujutsu Kaisen** - Modern supernatural action
- **Death Note** - Psychological thriller
- **Tokyo Ghoul** - Dark urban fantasy
- **Tokyo Revengers** - Time-traveling gang story
- **Windbreaker** - Delinquent school action
- **Blue Lock** - High-intensity soccer anime
- **Solo Leveling** - Hunter leveling-up action
- **Bleach** - Soul Reaper supernatural battles
- **Dragon Ball Z** - Legendary action series
- **Full Metal Alchemist Brotherhood** - Alchemical adventure

### 😂 Comedy Series
- **One Piece** - Pirate adventure comedy
- **Haikyu!!** - Volleyball sports comedy
- **One Punch Man** - Hilarious superhero parody

### 🎭 Drama Series
- **Lookism** - Body-swapping drama
- **Vinland Saga** - Viking historical epic
- **Monster** - Psychological thriller

### ✨ Fantasy Series
- **My Hero Academia** - Superhero academy

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (recommended)

### Installation

1. **Clone or Download** the project files:
   ```bash
   # Download the ZIP or clone the repository
   git clone <repository-url>
   cd anime-gallery
   ```

2. **Start Local Server**:
   ```bash
   # Using Python
   python -m http.server 3000
   
   # Using Node.js
   npx serve .
   ```

3. **Open in Browser**:
   - Navigate to `http://localhost:3000`

## 📁 Project Structure

```
Anime Gallery/
├── index.html          # Slideshow HTML structure
├── style.css           # Full-screen styling & animations
├── script.js           # Slideshow functionality & navigation
└── README.md           # This documentation
```

## 🎯 Usage Guide

### 🖱️ Navigation Methods
- **Click Poster**: Click anywhere on the anime poster to advance to next slide
- **Keyboard**: Use ← → arrow keys to navigate
- **Touch**: Swipe left/right on mobile devices
- **Mouse Wheel**: Scroll to navigate between slides

### 🎬 Anime Interactions
- **Watch Trailer**: Click the "Watch Trailer" button to open YouTube trailer
- **Full Visibility**: All posters display completely without cropping
- **Smooth Transitions**: Animated transitions between anime slides

### 🌙 Display Features
- **Dark Theme**: Professional streaming platform aesthetic
- **Full Screen**: Immersive full-viewport experience
- **Responsive**: Adapts to all screen sizes
- **Particle Effects**: Animated background elements

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern animations (transforms, gradients, keyframes)
- **JavaScript ES6+**: Modern JavaScript with event handling
- **Google Fonts**: Poppins typography
- **Font Awesome**: Icon library

## 🎨 Design Features

### Slideshow Elements
- **Full-Screen Layout**: Complete viewport coverage
- **Absolute Positioning**: Stacked slide system
- **Z-Index Management**: Proper layer stacking
- **Visibility Control**: Hidden/show slide states

### Visual Effects
- **Particle Background**: Floating animated elements
- **Gradient Overlays**: Dynamic color gradients
- **Zoom Animations**: 20s slow zoom effect
- **Fade Transitions**: Smooth opacity changes
- **Scale Transforms**: Entry/exit animations

### Animation Details
- **Slow Zoom**: 20s infinite ease-in-out on images
- **Pulse Gradient**: 8s infinite background animation
- **Slide Up**: 1.5s content entrance animation
- **Particle Float**: 15s floating animation loop

## 🔧 Customization

### Adding New Anime
Edit both `index.html` and `script.js`:

**HTML (add new slide):**
```html
<div class="slide" data-anime-id="21">
    <img src="POSTER_URL" alt="Anime Title" class="slide-image">
    <div class="slide-overlay"></div>
    <div class="slide-content">
        <h1 class="slide-title">Anime Title</h1>
        <p class="slide-description">Description here...</p>
        <div class="slide-actions">
            <button class="slide-btn primary" onclick="watchTrailer(21)">
                <i class="fas fa-play"></i> Watch Trailer
            </button>
        </div>
    </div>
</div>
```

**JavaScript (add to animeData array):**
```javascript
{
    id: 21,
    title: "Anime Title",
    genre: "action",
    poster: "POSTER_URL",
    description: "Description here...",
    trailer: "YOUTUBE_URL"
}
```

### Customizing Colors
Edit CSS variables in `style.css`:

```css
:root {
    --bg-primary: #0f172a;      /* Dark background */
    --accent-primary: #8b5cf6;   /* Primary purple */
    --accent-secondary: #3b82f6;  /* Secondary blue */
}
```

### Adjusting Animations
Modify animation timing in `style.css`:

```css
.slide-image {
    animation: slow-zoom 20s infinite ease-in-out;
}

.slide-overlay {
    animation: pulse-gradient 8s infinite ease-in-out;
}
```

## 🚀 Performance Features

- **Hardware Acceleration**: GPU-accelerated transforms
- **Efficient Rendering**: Only active slide processes
- **Smooth Animations**: 60fps transitions
- **Event Delegation**: Optimized event handling
- **Lazy Loading**: Images load as needed

## 🌐 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 📱 Mobile Features

- **Touch Gestures**: Swipe and tap interactions
- **Responsive Design**: Adapts to all screen sizes
- **Optimized Performance**: Smooth animations on mobile
- **Large Touch Targets**: Easy navigation on mobile

## 🎮 Interactive Elements

- **Click Navigation**: Poster click to advance
- **Keyboard Controls**: Arrow key navigation
- **Touch Support**: Mobile swipe gestures
- **Mouse Wheel**: Scroll wheel navigation
- **Trailer Links**: YouTube integration

## 🔮 Future Enhancements

- [ ] Auto-play option
- [ ] Random shuffle mode
- [ ] Volume control for trailers
- [ ] Fullscreen toggle
- [ ] Anime information panel
- [ ] Custom animation speeds
- [ ] Background music option

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📧 Contact

Created with ❤️ for anime fans everywhere.

---

**Anime Slideshow Gallery** - Your Full-Screen Anime Experience 🎬✨
