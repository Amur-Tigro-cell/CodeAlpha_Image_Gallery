# 🌸 Shiro Oni - Anime Gallery

A modern, responsive anime streaming platform gallery built with HTML, CSS, and JavaScript. Features a professional Netflix/Crunchyroll-style UI with glassmorphism effects, dark theme, and smooth animations.

## ✨ Features

### 🎬 Core Functionality
- **Responsive Grid Layout**: Desktop (4 columns), Tablet (2-3 columns), Mobile (1 column)
- **Search System**: Real-time anime title filtering with debounced input
- **Genre Filters**: Interactive filter buttons (All, Action, Comedy, Drama, Fantasy)
- **Modal System**: Detailed view with smooth animations and keyboard navigation
- **Trailer Integration**: Click to watch official YouTube trailers

### 🎨 UI/UX Excellence
- **Dark Theme**: Professional streaming platform aesthetic
- **Glassmorphism**: Modern glass-morphism cards with backdrop blur
- **Anime Vibes**: Japanese cultural elements (torii gate logo, emoji decorations)
- **Hover Effects**: Image zoom, overlay fade-in, purple glow effects
- **Typography**: Poppins font from Google Fonts
- **Animations**: Bounce animations, floating gradients, shimmer effects

### 🌙 Advanced Features
- **Dark/Light Mode Toggle**: Theme persistence with localStorage
- **Favorite System**: Heart icon toggle with localStorage persistence
- **Keyboard Navigation**: Arrow keys and Escape for modal control
- **Performance Optimized**: Debounced search, lazy loading images

## 🎭 Anime Collection

Currently featuring **15 popular anime series** across multiple genres:

### 🗡️ Action (7)
- **Naruto** - Ninja adventure series
- **Attack on Titan** - Dark fantasy survival
- **Demon Slayer** - Beautiful animation & emotional story
- **Jujutsu Kaisen** - Modern supernatural action
- **Tokyo Revengers** - Time-traveling gang story
- **Windbreaker** - Delinquent school action
- **Blue Lock** - High-intensity soccer anime

### 😂 Comedy (2)
- **One Piece** - Pirate adventure comedy
- **Haikyu!!** - Volleyball sports comedy

### 🎭 Drama (5)
- **Death Note** - Psychological thriller
- **Tokyo Ghoul** - Dark urban fantasy
- **Lookism** - Body-swapping drama
- **Vinland Saga** - Viking historical epic
- **Monster** - Psychological thriller

### ✨ Fantasy (1)
- **My Hero Academia** - Superhero academy

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
├── index.html          # Main HTML structure
├── style.css           # Styles and animations
├── script.js           # Interactive functionality
└── README.md           # This documentation
```

## 🎯 Usage Guide

### 🔍 Search & Filter
- **Search**: Type in the search bar to filter anime by title
- **Genre Filters**: Click genre buttons to filter by category
- **Favorites**: Click heart icons to save favorite anime

### 🎬 Modal Navigation
- **Click Card**: Opens detailed anime information
- **Watch Trailer**: Opens YouTube trailer in new tab
- **Keyboard Controls**: 
  - `Arrow Left/Right`: Navigate between anime
  - `Escape`: Close modal

### 🌙 Theme Toggle
- Click the moon/sun icon in the header to switch between dark and light themes
- Theme preference is saved automatically

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern features (Grid, Flexbox, Backdrop-filter, Animations)
- **JavaScript ES6+**: Modern JavaScript with localStorage
- **Google Fonts**: Poppins typography
- **Font Awesome**: Icon library
- **Picsum Photos**: Placeholder images with unique seeds

## 🎨 Design Features

### Visual Effects
- **Glassmorphism**: Frosted glass effect on cards
- **Gradient Accents**: Purple-blue color scheme
- **Hover Animations**: Scale, glow, and overlay effects
- **Micro-interactions**: Button states and transitions

### Responsive Design
- **Mobile-first approach** with progressive enhancement
- **Flexible grid system** that adapts to screen size
- **Touch-friendly** interface elements
- **Optimized animations** for performance

## 🔧 Customization

### Adding New Anime
Edit `script.js` and add to the `animeData` array:

```javascript
{
    id: 10,
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
    --accent-primary: #8b5cf6;  /* Primary purple */
    --accent-secondary: #3b82f6; /* Secondary blue */
    --bg-primary: #0f172a;      /* Dark background */
}
```

### Adding New Genres
1. Add genre to anime data
2. Add filter button in `index.html`
3. Update CSS if needed

## 🚀 Performance Features

- **Lazy Loading**: Images load as needed
- **Debounced Search**: Reduces search function calls
- **Optimized Animations**: GPU-accelerated transforms
- **LocalStorage**: Persists user preferences
- **Semantic HTML**: Better accessibility and SEO

## 🌐 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 📱 Mobile Features

- **Touch Gestures**: Swipe-friendly interface
- **Responsive Layout**: Adapts to all screen sizes
- **Optimized Performance**: Smooth animations on mobile
- **Accessible Design**: Large touch targets

## 🎮 Interactive Elements

- **Hover States**: Visual feedback on all interactive elements
- **Loading States**: Smooth transitions and animations
- **Error Handling**: Graceful fallbacks for missing content
- **Keyboard Navigation**: Full keyboard accessibility

## 🔮 Future Enhancements

- [ ] Add more anime series
- [ ] Implement user accounts
- [ ] Add rating system
- [ ] Include episode information
- [ ] Add watchlist functionality
- [ ] Implement sorting options
- [ ] Add more themes
- [ ] Include anime recommendations

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

**Shiro Oni** - Your Gateway to Amazing Anime Worlds 🌸
