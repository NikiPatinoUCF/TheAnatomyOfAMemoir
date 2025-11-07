/**
 * Main Application Logic
 * Handles genre selection, view switching, and display updates
 */

// State
let currentGenre = 'original';
let comparisonMode = false;

// DOM Elements
let genreButtons;
let comparisonToggle;
let textContainer;
let originalText;
let transformedText;
let genreLabel;
let annotationsContainer;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    genreButtons = document.querySelectorAll('.genre-button');
    comparisonToggle = document.getElementById('comparison-toggle');
    textContainer = document.querySelector('.text-container');
    originalText = document.getElementById('original-text');
    transformedText = document.getElementById('transformed-text');
    genreLabel = document.getElementById('genre-label');
    annotationsContainer = document.getElementById('annotations');

    // Set up event listeners
    setupGenreButtons();
    setupComparisonToggle();
    setupSmoothScrolling();

    // Initial display
    displayText(currentGenre);
});

/**
 * Set up genre button click handlers
 */
function setupGenreButtons() {
    genreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const genre = this.dataset.genre;
            selectGenre(genre);
        });
    });
}

/**
 * Handle genre selection
 */
function selectGenre(genre) {
    currentGenre = genre;

    // Update button states
    genreButtons.forEach(btn => {
        if (btn.dataset.genre === genre) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update display
    displayText(genre);
}

/**
 * Set up comparison view toggle
 */
function setupComparisonToggle() {
    comparisonToggle.addEventListener('change', function() {
        comparisonMode = this.checked;
        updateViewMode();
    });
}

/**
 * Update the view mode (single vs comparison)
 */
function updateViewMode() {
    if (comparisonMode) {
        textContainer.classList.remove('single-view');
        textContainer.classList.add('comparison-view');
    } else {
        textContainer.classList.remove('comparison-view');
        textContainer.classList.add('single-view');
    }
}

/**
 * Display text for the selected genre
 */
function displayText(genre) {
    // Always show original in comparison mode
    originalText.innerHTML = formatText(sampleScene.original.text);

    // Show transformed text
    if (genre === 'original') {
        genreLabel.textContent = 'Original Memoir Scene';
        transformedText.innerHTML = formatText(sampleScene.original.text);
        annotationsContainer.innerHTML = '<p style="text-align: center; color: var(--color-charcoal-light);">Select a genre to see how this scene transforms and learn about specific craft choices.</p>';
    } else {
        const genreData = sampleScene[genre];
        genreLabel.textContent = genreData.title;
        transformedText.innerHTML = formatText(genreData.text);
        displayAnnotations(genreData.annotations);
    }

    // Add fade-in animation
    transformedText.classList.remove('fade-in');
    void transformedText.offsetWidth; // Trigger reflow
    transformedText.classList.add('fade-in');
}

/**
 * Format text for display (preserve line breaks)
 */
function formatText(text) {
    return text.trim();
}

/**
 * Display annotations for the current genre
 */
function displayAnnotations(annotations) {
    if (!annotations || annotations.length === 0) {
        annotationsContainer.innerHTML = '';
        return;
    }

    let html = '<h3 style="color: var(--color-sapphire); margin-bottom: var(--spacing-md);">Craft Transformations</h3>';

    annotations.forEach(annotation => {
        html += `
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
    });

    annotationsContainer.innerHTML = html;

    // Add fade-in animation
    annotationsContainer.classList.remove('fade-in');
    void annotationsContainer.offsetWidth; // Trigger reflow
    annotationsContainer.classList.add('fade-in');
}

/**
 * Set up smooth scrolling for navigation links
 */
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 60; // Account for sticky nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Utility: Scroll to element
 */
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const offsetTop = element.offsetTop - 60;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}
