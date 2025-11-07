# The Anatomy of a Memoir: Genre as Lens

An interactive educational website that teaches memoir writers how genre conventions shape storytelling through side-by-side transformations and craft annotations.

## 🎯 Project Purpose

This tool helps memoir writers understand how different genre conventions—noir, thriller, romance, literary fiction, horror, and fairy tale—can be used as craft techniques to enhance their storytelling. By seeing the same memoir scene transformed through different genre lenses, writers learn concrete techniques for voice, pacing, imagery, and emotional resonance.

## ✨ Features

- **Interactive Genre Demo**: See a sample memoir scene transformed through 6 different genre lenses
- **Craft Annotations**: Detailed explanations of what changed and why in each transformation
- **Side-by-Side Comparison**: Toggle between single view and comparison view
- **User Text Analysis**: Paste your own memoir scene (50-300 words) for genre-specific insights
- **Educational Content**: Learn about genre conventions and how to apply them to memoir writing
- **Beautiful Design**: Gem tone color palette with elegant typography and subtle animations

## 🛠️ Technology Stack

- **HTML5** - Semantic structure
- **CSS3** - Custom design system with CSS variables
- **JavaScript** (Vanilla) - Interactive functionality
- **P5.js** - Subtle background animations

## 🚀 Local Development

To run this website locally:

### Option 1: Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Option 2: Node.js
```bash
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

## 📁 Project Structure

```
/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styles with design system
├── js/
│   ├── sketch.js          # P5.js background animation
│   ├── transformations.js # Sample scene and genre transformations
│   ├── annotations.js     # Annotation helper functions
│   ├── userAnalysis.js    # User text analysis logic
│   └── main.js            # Main application logic
├── PLAN.md                # Detailed implementation plan
├── CLAUDE.md              # Developer guidance for Claude Code
└── README.md              # This file
```

## 🎨 Design System

### Color Palette (Gem Tones)
- **Emerald**: `#0f5132` (primary)
- **Sapphire**: `#1e3a5f` (secondary)
- **Ruby**: `#741b2f` (accent)
- **Amethyst**: `#4c1d5e` (accent)
- **Amber**: `#b8860b` (accent)
- **Neutrals**: Charcoal and Cream

### Typography
- **Headings**: Playfair Display (elegant script feel)
- **Body**: Crimson Text (readable serif)
- **UI**: Inter (clean sans-serif)

## 📚 Content Structure

### Genre Transformations Included:
1. **Original** - Simple memoir scene (grandmother and crossword puzzle)
2. **Noir** - Cynical, metaphorical, psychologically complex
3. **Thriller** - Urgent, fragmented, tension-filled
4. **Romance** - Sensory, intimate, emotionally rich
5. **Literary Fiction** - Introspective, complex, philosophically layered
6. **Horror** - Uncanny, dread-filled, atmospherically menacing
7. **Fairy Tale** - Archetypal, timeless, morally resonant

Each transformation includes 6-7 detailed craft annotations explaining specific changes.

## 🎓 Pedagogical Approach

This tool teaches by **showing, not telling**:
- Writers see concrete examples of abstract concepts like "voice" and "pacing"
- Side-by-side comparison makes differences immediately visible
- Annotations explain the "why" behind each craft choice
- User analysis provides personalized insights based on their own writing

## 📖 How to Use

1. **Learn**: Read about genre conventions in the Teaching section
2. **Observe**: Watch how the sample scene transforms through different genres
3. **Compare**: Toggle side-by-side view to see original vs. transformed
4. **Analyze**: Read craft annotations to understand specific techniques
5. **Apply**: Paste your own scene for genre-specific feedback
6. **Experiment**: Try applying one or two techniques to your own work

## 🌐 Deployment

This site is designed for **GitHub Pages** deployment:

1. Push to your GitHub repository
2. Go to Settings → Pages
3. Select source branch (usually `main`)
4. Site will be published at `https://[username].github.io/[repo-name]`

No build process required—it's pure HTML/CSS/JS!

## 🤝 Contributing

This is an educational project. Contributions welcome:
- Additional genre transformations
- More sample scenes
- Enhanced analysis algorithms
- Accessibility improvements
- Mobile optimization

## 📝 License

This project is intended for educational purposes. Feel free to use and adapt for teaching memoir writing.

## 🙏 Acknowledgments

Created to help memoir writers understand that genre isn't a cage—it's a toolkit. Every genre offers distinct craft conventions that can strengthen your truth-telling.

---

**Note**: Your text never leaves your browser. All analysis happens client-side—no servers, no tracking, no data collection.
