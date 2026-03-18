# � AniGallery - Netflix-Style Anime Streaming Platform

A modern, responsive anime gallery with horizontal sliders inspired by Netflix and Crunchyroll. Features a professional streaming platform UI with smooth animations, search functionality, and interactive modals.

## ✨ Features

### 🎬 Netflix-Style Layout
- **Sticky Navbar**: Logo, centered search bar, and theme toggle
- **Horizontal Sliders**: 5 categorized sections with smooth scrolling
- **Navigation Controls**: Previous/Next buttons with boundary detection
- **Compact Cards**: Professional 200px cards with hover effects
- **Hidden Scrollbars**: Clean, streaming-platform appearance

### 🎯 Core Functionality
- **Real-time Search**: Filter anime across all sections instantly
- **Genre Organization**: Trending, Action, Comedy, Drama, Fantasy sections
- **Modal System**: Detailed view with smooth animations
- **Favorite System**: Heart toggle with localStorage persistence
- **Trailer Integration**: YouTube trailer links for all anime

### 🎨 UI/UX Excellence
- **Dark Theme**: Professional streaming platform aesthetic (#0f172a)
- **Smooth Animations**: Fade, scale, and slide transitions
- **Hover Effects**: Card zoom, overlay fade-in, button animations
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Modern Typography**: Poppins font for clean readability

### 🌙 Advanced Features
- **Dark/Light Mode Toggle**: Theme persistence with localStorage
- **Keyboard Navigation**: Arrow keys and Escape support
- **Mouse Drag Support**: Click and drag to scroll sliders
- **Touch-Friendly**: Optimized for mobile interactions
- **Performance Optimized**: Hardware-accelerated animations

## 🎭 Anime Collection

Currently featuring **15 popular anime series** across multiple genres:

### � Trending (All)
- **Naruto** - Ninja adventure series
- **Attack on Titan** - Dark fantasy survival
- **Demon Slayer** - Beautiful animation & emotional story
- **One Piece** - Pirate adventure comedy
- **Jujutsu Kaisen** - Modern supernatural action
- **Death Note** - Psychological thriller
- **Tokyo Ghoul** - Dark urban fantasy
- **My Hero Academia** - Superhero academy
- **Lookism** - Body-swapping drama
- **Tokyo Revengers** - Time-traveling gang story
- **Vinland Saga** - Viking historical epic
- **Monster** - Psychological thriller
- **Windbreaker** - Delinquent school action
- **Blue Lock** - High-intensity soccer anime
- **Haikyu!!** - Volleyball sports comedy

### � Action (7)
- Naruto, Attack on Titan, Demon Slayer, Jujutsu Kaisen, Tokyo Revengers, Windbreaker, Blue Lock

### 😂 Comedy (2)
- One Piece, Haikyu!!

### 🎭 Drama (5)
- Death Note, Tokyo Ghoul, Lookism, Vinland Saga, Monster

### ✨ Fantasy (1)
- My Hero Academia

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Installation

1. **Clone or Download** the project files:
   ```bash
   # Download the ZIP or clone the repository
   git clone <repository-url>
   cd anime-gallery
   ```

2. **Start Local Server** (recommended):
   ```bash
   # Using Python
   python -m http.server 3000
   
   # Using Node.js
   npx serve .
   
   # Or use any live server extension in your IDE
   ```

3. **Open in Browser**:
   - Navigate to `http://localhost:3000`
   - Or simply open `index.html` directly in your browser

## 📁 Project Structure

```
Anime Gallery/
├── index.html          # Netflix-style HTML structure
├── style.css           # Horizontal slider styling
├── script.js           # Slider functionality & interactions
└── README.md           # This documentation
```

## 🎯 Usage Guide

### 🔍 Search & Navigation
- **Search**: Type in the navbar search bar to filter anime across all sections
- **Slider Navigation**: Use ❮ ❯ buttons or mouse drag to scroll
- **Keyboard**: Arrow keys for modal navigation, Escape to close

### 🎬 Anime Interactions
- **Click Card**: Opens detailed modal with full information
- **Heart Button**: Toggle favorite status (saves automatically)
- **Watch Trailer**: Opens YouTube trailer in new tab
- **View Details**: Hover and click "View Details" button

### 🌙 Theme & Display
- **Dark/Light Mode**: Click moon/sun icon in navbar
- **Responsive**: Adapts to desktop (4 cards), tablet (2-3 cards), mobile (1-2 cards)
- **Smooth Scrolling**: All interactions use hardware acceleration

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern features (Grid, Flexbox, Transforms, Animations)
- **JavaScript ES6+**: Modern JavaScript with localStorage
- **Google Fonts**: Poppins typography
- **Font Awesome**: Icon library
- **Picsum Photos**: Placeholder images with unique seeds

## 🎨 Design Features

### Netflix-Style Elements
- **Horizontal Scrolling**: Smooth slider navigation
- **Card Layout**: Compact 200px cards with rounded corners
- **Sticky Navigation**: Fixed header with search functionality
- **Section Organization**: Genre-based content grouping
- **Professional Spacing**: Optimized gaps and alignment

### Visual Effects
- **Card Hover**: Scale transformation with shadow effects
- **Overlay Animations**: Smooth fade-in on hover
- **Button Transitions**: Color and transform animations
- **Modal Effects**: Scale and fade animations
- **Slider Transitions**: Smooth horizontal scrolling

### Responsive Design
- **Desktop**: 200px cards, full navbar layout
- **Tablet**: 150px cards, stacked navbar
- **Mobile**: 120px cards, simplified navigation
- **Touch Support**: Swipe gestures for mobile

## 🔧 Customization

### Adding New Anime
Edit `script.js` and add to the `animeData` array:

```javascript
{
    id: 16,
    title: "New Anime",
    genre: "action",
    poster: "https://picsum.photos/seed/newanime/300/450",
    description: "Anime description here...",
    trailer: "https://www.youtube.com/watch?v=VIDEO_ID"
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

### Adding New Sections
1. Add section HTML in `index.html`
2. Add section to `sections` array in `script.js`
3. Update styling if needed

## 🚀 Performance Features

- **Lazy Loading**: Images load as needed
- **Hardware Acceleration**: GPU-accelerated transforms
- **Efficient Rendering**: Only visible sections update
- **Smooth Scrolling**: Optimized animation performance
- **LocalStorage**: Persists user preferences

## 🌐 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 📱 Mobile Features

- **Touch Gestures**: Swipe and tap interactions
- **Responsive Layout**: Adapts to all screen sizes
- **Optimized Performance**: Smooth animations on mobile
- **Accessible Design**: Large touch targets and clear contrast

## 🎮 Interactive Elements

- **Slider Navigation**: Button clicks, mouse drag, keyboard
- **Card Interactions**: Hover states, click actions
- **Modal Controls**: Multiple close methods, navigation
- **Search System**: Real-time filtering across sections
- **Theme Toggle**: Instant theme switching

## 🔮 Future Enhancements

- [ ] Auto-scroll sliders
- [ ] User accounts and watchlists
- [ ] Rating system
- [ ] Episode information
- [ ] Anime recommendations
- [ ] More themes and customization
- [ ] Advanced filtering options

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

**AniGallery** - Your Netflix-Style Anime Streaming Platform �✨
