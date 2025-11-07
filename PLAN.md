# The Anatomy of a Memoir: Genre as Lens - Implementation Plan

## Project Overview
An educational website that teaches how genre conventions shape storytelling through interactive demonstrations. Users learn by seeing how a sample memoir scene transforms through different genre lenses, with detailed craft annotations explaining each change.

## Core Approach: Pre-written Demonstration Model
- **Primary Feature**: Pre-written sample memoir scene with complete transformations for each genre
- **User Interaction**: Users can paste their own text to see educational annotations about what would change (but their text is not transformed)
- **Educational Focus**: Learning through comparison of expertly-crafted examples
- **Technical Benefit**: 100% client-side, no APIs, perfect for GitHub Pages

## Site Structure

### 1. Landing/Introduction Section
- Hero with project title and tagline
- Brief explanation of concept (genre as craft toolkit)
- "See How It Works" CTA button scrolling to demo

### 2. Teaching Section
- Clear explanation of genre conventions as craft tools
- 6 genre cards with brief overviews:
  - **Noir**: Metaphor, cynicism, shadow and light, internal monologue
  - **Thriller**: Pacing, tension, sentence fragments, urgency
  - **Romance**: Sensory details, emotional focus, intimate voice
  - **Literary Fiction**: Interiority, complex sentences, ambiguity, reflection
  - **Horror**: Dread, sensory unease, what's not said, building atmosphere
  - **Fairy Tale**: Archetypal language, moral framing, timeless quality, patterns of three

### 3. Interactive Demonstration Zone
**Sample Memoir Scene** (neutral, simple, 150-200 words):
- A childhood memory at a kitchen table
- Generic enough to work in any genre
- Focus on a moment with sensory details
- Placeholder content to be crafted during implementation

**Genre Filter Gallery**:
- Visual genre selector (6 buttons/cards)
- Clicking a genre shows that transformation
- Side-by-side comparison view:
  - Left: Original memoir scene
  - Right: Transformed version
- Annotations below transformation highlighting specific craft changes:
  - Voice shifts
  - Pacing changes
  - Sensory detail alterations
  - Sentence structure modifications
  - What gets emphasized/minimized

### 4. User Text Input Section
- Text area for users to paste their own scene (50-300 words)
- Character counter
- "Analyze My Scene" button
- When clicked, shows educational annotations:
  - Identifies key moments that would shift
  - Highlights phrases that would change by genre
  - Explains what transformations would occur
  - Does NOT actually rewrite their text
  - Provides writing prompts based on their content

### 5. About/Pedagogical Goals Section
- Why genre matters for memoir writers
- How to use genre techniques in memoir
- Additional resources

## Technical Architecture

### File Structure
```
/
├── index.html                 # Main HTML structure
├── css/
│   ├── styles.css            # Main stylesheet
│   └── typography.css        # Font and text styles
├── js/
│   ├── main.js               # Core application logic
│   ├── transformations.js    # Pre-written genre transformations data
│   ├── annotations.js        # Craft explanation content
│   └── userAnalysis.js       # User text analysis logic
├── lib/
│   └── p5.min.js             # P5.js library
├── assets/
│   └── fonts/                # Custom fonts
├── CLAUDE.md                 # Project documentation
└── README.md                 # User-facing documentation
```

### Data Structure

**transformations.js**:
```javascript
const sampleScene = {
  original: "Original memoir scene text...",
  genres: {
    noir: {
      transformed: "Noir version...",
      annotations: [
        {
          original: "specific phrase",
          changed: "noir version",
          explanation: "Why this changed..."
        }
      ]
    },
    // ... other genres
  }
}
```

### JavaScript Modules

1. **main.js**:
   - Page navigation and scrolling
   - Genre selector interaction
   - View switching (single/comparison)
   - P5.js animation triggers

2. **transformations.js**:
   - Contains all pre-written transformations
   - Original sample scene
   - Six complete genre transformations
   - Detailed annotation data

3. **annotations.js**:
   - Craft explanation templates
   - Genre-specific teaching content
   - Annotation formatting utilities

4. **userAnalysis.js**:
   - Text input handling
   - Character counting
   - Pattern detection (identifies moments, emotions, sensory details)
   - Generates educational feedback
   - Creates writing prompts

### P5.js Animations

1. **Genre Transition Effect**:
   - Smooth fade between genre versions
   - Highlighting effect on changed text segments
   - Color-coded annotations that pulse in

2. **Text Highlighting**:
   - Interactive highlights on hover
   - Connect annotations to specific text spans
   - Visual flow from original to transformed

3. **Visual Accents**:
   - Subtle animated background elements
   - Genre-themed decorative touches
   - Smooth scrolling transitions

## Design System

### Color Palette (Gem Tones - Deep & Moody)
- **Primary**: Deep Emerald (#0f5132, #1a7f47)
- **Secondary**: Sapphire Blue (#1e3a5f, #2c5282)
- **Accent 1**: Ruby Red (#741b2f, #9c2642)
- **Accent 2**: Amethyst Purple (#4c1d5e, #6b2d7f)
- **Accent 3**: Amber Gold (#b8860b, #d4a017)
- **Neutrals**: Charcoal (#2d3436), Cream (#f8f5f0)

### Typography
- **Headings**: Elegant script font (Playfair Display or Cormorant Garamond)
- **Body**: Clean serif for readability (Crimson Text or Libre Baskerville)
- **UI Elements**: Sans-serif for clarity (Inter or Source Sans Pro)
- **Code/Monospace**: For annotations (JetBrains Mono or Fira Code)

### Layout Principles
- Clean, generous whitespace
- Reading-friendly line lengths (60-75 characters)
- Clear visual hierarchy
- Responsive breakpoints: 768px (tablet), 1024px (desktop)
- Sticky genre selector during demo

## Implementation Phases

### Phase 1: Foundation & Structure
1. Create base HTML structure with semantic sections
2. Set up CSS architecture with variables for design system
3. Implement typography and load fonts
4. Create responsive grid layout
5. Add P5.js and set up canvas

### Phase 2: Content & Data
1. Write sample memoir scene (neutral, ~150 words)
2. Create 6 complete genre transformations
3. Write detailed annotations for each transformation
4. Add teaching content for genre overview cards
5. Structure data in transformations.js

### Phase 3: Interactive Demo
1. Build genre selector UI
2. Implement transformation display
3. Add side-by-side comparison view
4. Create annotation highlighting system
5. Add P5.js transition animations

### Phase 4: User Text Input
1. Build text input interface
2. Implement character counter
3. Create pattern detection logic
4. Generate educational feedback
5. Display analysis results

### Phase 5: Polish & Enhancement
1. Refine animations and transitions
2. Add loading states and micro-interactions
3. Optimize for mobile
4. Add accessibility features (ARIA labels, keyboard navigation)
5. Test cross-browser compatibility

### Phase 6: Documentation & Deployment
1. Write README with usage instructions
2. Add inline code comments
3. Create GitHub Pages configuration
4. Test deployment
5. Final QA

## Content Needs

### To Be Created During Implementation:
1. Sample memoir scene (150-200 words)
2. Six genre transformations of that scene
3. Detailed craft annotations for each transformation
4. Teaching content for each genre card
5. About/pedagogical goals text
6. User analysis feedback templates

### Content Guidelines:
- Sample scene should be emotionally neutral but rich in potential
- Transformations should clearly demonstrate genre conventions
- Annotations should be specific and educational
- Avoid jargon; explain craft in accessible terms
- Focus on showing, not just telling

## Success Criteria

- Users understand how genre conventions work as craft tools
- Side-by-side comparisons make abstract concepts concrete
- User text analysis provides actionable insights
- Site loads quickly and works on all devices
- Educational content is clear and engaging
- Design enhances readability without distraction
- All interactions are smooth and intuitive

## Future Enhancements (Post-Launch)
- Additional genres (Southern Gothic, Magical Realism, etc.)
- Multiple sample scenes to choose from
- Downloadable comparison PDFs
- User accounts to save their analyses
- Community-submitted examples
- Video tutorials for each genre
