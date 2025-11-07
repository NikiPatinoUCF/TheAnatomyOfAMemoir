/**
 * User Text Analysis
 * Analyzes user-submitted memoir scenes and provides genre-specific feedback
 */

// DOM Elements (initialized after DOM load)
let userTextInput;
let charCount;
let analyzeBtn;
let analysisResults;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    userTextInput = document.getElementById('user-text-input');
    charCount = document.getElementById('char-count');
    analyzeBtn = document.getElementById('analyze-btn');
    analysisResults = document.getElementById('analysis-results');

    // Set up event listeners
    if (userTextInput) {
        userTextInput.addEventListener('input', updateCharacterCount);
    }

    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', analyzeUserText);
    }
});

/**
 * Update character/word count display
 */
function updateCharacterCount() {
    const text = userTextInput.value.trim();
    const wordCount = text.length > 0 ? text.split(/\s+/).length : 0;

    charCount.textContent = `${wordCount} / 300 words`;

    // Enable/disable analyze button based on word count
    if (wordCount >= 50 && wordCount <= 300) {
        analyzeBtn.disabled = false;
    } else {
        analyzeBtn.disabled = true;
    }
}

/**
 * Analyze user's text and provide feedback
 */
function analyzeUserText() {
    const text = userTextInput.value.trim();

    if (!text) {
        return;
    }

    // Analyze the text
    const analysis = performAnalysis(text);

    // Display results
    displayAnalysisResults(analysis);

    // Scroll to results
    setTimeout(() => {
        analysisResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

/**
 * Perform analysis on user text
 * Identifies key elements and suggests how different genres might transform them
 */
function performAnalysis(text) {
    const insights = [];

    // Detect sensory details
    const sensoryWords = detectSensoryLanguage(text);
    if (sensoryWords.length > 0) {
        insights.push({
            genre: 'Romance',
            insight: `Your scene contains sensory details (${sensoryWords.slice(0, 3).join(', ')}${sensoryWords.length > 3 ? '...' : ''}). Romance would amplify these sensations, making them more intimate and emotionally charged. Consider: How could these details convey connection or longing?`
        });
    }

    // Detect time/pacing indicators
    if (hasTemporalMarkers(text)) {
        insights.push({
            genre: 'Thriller',
            insight: `Your scene has temporal markers and sequential action. Thriller pacing would fragment these sentences, use present tense, and add physical tension. Try: "The door. It opens. My heart—racing now. Why?" See how urgency transforms calm narration.`
        });
    }

    // Detect objects/setting
    const objects = detectConcreteObjects(text);
    if (objects.length > 0) {
        insights.push({
            genre: 'Noir',
            insight: `You mention concrete objects like "${objects[0]}". Noir would transform these into symbolic metaphors—a cup of coffee becomes "bitter as truth," a door becomes "the only exit left." What could your objects symbolize about your narrator's internal state?`
        });
    }

    // Detect dialogue
    if (hasDialogue(text)) {
        insights.push({
            genre: 'Literary Fiction',
            insight: `Your scene includes dialogue. Literary fiction might interrupt it with reflection: what remains unsaid, the gap between words and meaning, what the speaker really wants. Consider: What's the subtext beneath your characters' words?`
        });
    }

    // Detect repetition or routine
    if (hasRepetition(text)) {
        insights.push({
            genre: 'Horror',
            insight: `Your scene contains repetition or routine. Horror could make this uncanny—the familiar becomes strange, "too" something (too quiet, too precise, too perfect). What if the routine you describe was somehow wrong? What small detail could make it threatening?`
        });
    }

    // Detect relationships
    if (hasRelationship(text)) {
        insights.push({
            genre: 'Fairy Tale',
            insight: `Your scene involves a relationship or interaction. Fairy tale would make this archetypal—"the mother," "the child"—and frame it as part of an eternal pattern. Consider: What universal truth about human connection does this moment reveal?`
        });
    }

    // If no specific patterns detected, provide general guidance
    if (insights.length === 0) {
        insights.push(
            {
                genre: 'General Observation',
                insight: `Your scene has potential for transformation across multiple genres. Consider: What emotion do you want the reader to feel? That will guide which genre conventions serve your story best.`
            },
            {
                genre: 'Next Steps',
                insight: `Try the demonstration above to see how the same moment transforms through different lenses. Pay attention to sentence length, word choice, what gets emphasized or minimized, and how these choices create different emotional effects.`
            }
        );
    }

    return insights;
}

/**
 * Display analysis results
 */
function displayAnalysisResults(insights) {
    let html = '<h3 class="analysis-title">Analysis & Suggestions</h3>';
    html += '<p style="margin-bottom: var(--spacing-md);">Based on your scene, here are some ways different genres might transform your writing:</p>';

    insights.forEach(insight => {
        html += `
            <div class="insight-item">
                <div class="insight-genre">${insight.genre}</div>
                <div class="insight-text">${insight.insight}</div>
            </div>
        `;
    });

    html += '<p style="margin-top: var(--spacing-md); font-style: italic; color: var(--color-charcoal-light);">Remember: You don\'t need to choose one genre. The best memoir writing often borrows techniques from multiple genres, using whatever serves the truth of your story.</p>';

    analysisResults.innerHTML = html;
    analysisResults.classList.add('visible');
    analysisResults.classList.add('fade-in');
}

/**
 * Detection Functions
 */

function detectSensoryLanguage(text) {
    const sensoryPatterns = [
        // Sight
        /\b(see|saw|look|watch|bright|dark|color|light|shadow|glow|shimmer|glint)\w*/gi,
        // Sound
        /\b(hear|sound|voice|whisper|shout|silence|quiet|loud|echo|ring)\w*/gi,
        // Touch
        /\b(touch|feel|soft|hard|rough|smooth|warm|cold|hot|cool|pressure)\w*/gi,
        // Taste
        /\b(taste|flavor|sweet|bitter|sour|salty|tongue)\w*/gi,
        // Smell
        /\b(smell|scent|perfume|aroma|stink|fragrant|odor)\w*/gi
    ];

    const matches = new Set();
    sensoryPatterns.forEach(pattern => {
        const found = text.match(pattern);
        if (found) {
            found.forEach(word => matches.add(word.toLowerCase()));
        }
    });

    return Array.from(matches);
}

function hasTemporalMarkers(text) {
    const temporalPatterns = /\b(then|next|after|before|when|while|first|second|finally|suddenly|now)\b/gi;
    return temporalPatterns.test(text);
}

function detectConcreteObjects(text) {
    // Simple noun detection (very basic - looks for common objects)
    const objectPatterns = /\b(table|chair|door|window|cup|glass|plate|book|phone|car|house|room|wall|floor|bed|light)\w*/gi;
    const matches = text.match(objectPatterns);
    return matches ? [...new Set(matches.map(m => m.toLowerCase()))] : [];
}

function hasDialogue(text) {
    // Check for quotation marks or dialogue tags
    return /[""]/.test(text) || /\b(said|asked|replied|answered|whispered|shouted)\b/i.test(text);
}

function hasRepetition(text) {
    // Check for repeated words or phrases indicating routine
    const routineWords = /\b(always|every|each|again|routine|habit|usual|regular|same)\b/gi;
    return routineWords.test(text);
}

function hasRelationship(text) {
    // Check for relationship words
    const relationshipWords = /\b(mother|father|sister|brother|friend|grandmother|grandfather|parent|child|family|husband|wife|partner)\b/gi;
    return relationshipWords.test(text);
}

/**
 * Utility: Count words
 */
function countWords(text) {
    return text.trim().split(/\s+/).length;
}
