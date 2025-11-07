/**
 * Annotations Helper Module
 * Provides utility functions for working with craft annotations
 */

/**
 * Genre color mapping for consistent theming
 */
const genreColors = {
    original: '#0f5132',
    noir: '#2d3436',
    thriller: '#741b2f',
    romance: '#9c2642',
    literary: '#1e3a5f',
    horror: '#4c1d5e',
    fairytale: '#b8860b'
};

/**
 * Get the theme color for a specific genre
 */
function getGenreColor(genre) {
    return genreColors[genre] || genreColors.original;
}

/**
 * Highlight specific text within a larger body of text
 * Used for showing transformations
 */
function highlightText(fullText, textToHighlight) {
    if (!textToHighlight || textToHighlight.length === 0) {
        return fullText;
    }

    // Escape special regex characters
    const escapedText = textToHighlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedText})`, 'gi');

    return fullText.replace(regex, '<span class="highlight">$1</span>');
}

/**
 * Format an annotation for display
 */
function formatAnnotation(annotation) {
    return `
        <div class="annotation-item">
            <div class="annotation-label">${annotation.label}</div>
            <div class="annotation-comparison">
                <div class="annotation-original">
                    <strong>Original:</strong><br>
                    "${annotation.original}"
                </div>
                <div class="annotation-changed">
                    <strong>Transformed:</strong><br>
                    "${annotation.changed}"
                </div>
            </div>
            <div class="annotation-explanation">
                ${annotation.explanation}
            </div>
        </div>
    `;
}

/**
 * Create a summary of key craft changes for a genre
 */
function summarizeCraftChanges(annotations) {
    const categories = new Set();

    annotations.forEach(annotation => {
        // Extract category from label (e.g., "Voice & Tone" -> "Voice")
        const category = annotation.label.split(/[&,]/)[0].trim();
        categories.add(category);
    });

    return Array.from(categories);
}

/**
 * Get a brief description of what changes in each genre
 */
function getGenreDescription(genre) {
    const descriptions = {
        noir: "Transforms scenes through cynical internal monologue, symbolic metaphor, and moral ambiguity. Everything becomes harder, darker, more psychologically complex.",
        thriller: "Creates urgency through sentence fragments, present tense, and heightened stakes. Every detail pulses with potential threat and immediate danger.",
        romance: "Emphasizes emotional connection, sensory richness, and intimate observation. Small gestures carry deep significance and warmth.",
        literary: "Values interiority, complex syntax, and layered meaning. Explores philosophical questions through close observation and reflection.",
        horror: "Builds dread through the uncanny, the unsaid, and subtle wrongness. Makes the familiar strange and threatening.",
        fairytale: "Uses archetypal language, moral framing, and timeless patterns. Makes personal stories feel universal and mythic."
    };

    return descriptions[genre] || "";
}

/**
 * Extract key techniques from annotations
 */
function extractTechniques(annotations) {
    const techniques = [];

    annotations.forEach(annotation => {
        // Look for specific techniques mentioned in explanations
        const explanation = annotation.explanation.toLowerCase();

        if (explanation.includes('sentence') || explanation.includes('fragment')) {
            techniques.push('Sentence structure modification');
        }
        if (explanation.includes('metaphor') || explanation.includes('symbol')) {
            techniques.push('Metaphorical language');
        }
        if (explanation.includes('voice') || explanation.includes('tone')) {
            techniques.push('Voice & tone shift');
        }
        if (explanation.includes('sensory') || explanation.includes('detail')) {
            techniques.push('Sensory detail emphasis');
        }
        if (explanation.includes('pacing') || explanation.includes('rhythm')) {
            techniques.push('Pacing control');
        }
    });

    return [...new Set(techniques)]; // Remove duplicates
}

/**
 * Compare two pieces of text and identify differences
 * Returns array of difference objects
 */
function compareTexts(original, transformed) {
    // Very simple word-level comparison
    const origWords = original.toLowerCase().split(/\s+/);
    const transWords = transformed.toLowerCase().split(/\s+/);

    const differences = {
        lengthChange: transWords.length - origWords.length,
        originalLength: origWords.length,
        transformedLength: transWords.length,
        percentageChange: ((transWords.length - origWords.length) / origWords.length * 100).toFixed(1)
    };

    return differences;
}

// Export functions if using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        genreColors,
        getGenreColor,
        highlightText,
        formatAnnotation,
        summarizeCraftChanges,
        getGenreDescription,
        extractTechniques,
        compareTexts
    };
}
