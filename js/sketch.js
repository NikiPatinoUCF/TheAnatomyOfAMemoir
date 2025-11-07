/**
 * P5.js Background Animation Sketch
 * Creates subtle, flowing particles in gem tones
 */

let particles = [];
const particleCount = 30;

// Gem tone colors (matching CSS)
const gemColors = [
    { r: 15, g: 81, b: 50, a: 40 },      // emerald
    { r: 30, g: 58, b: 95, a: 40 },      // sapphire
    { r: 116, g: 27, b: 47, a: 40 },     // ruby
    { r: 76, g: 29, b: 94, a: 40 },      // amethyst
    { r: 184, g: 134, b: 11, a: 40 }     // amber
];

function setup() {
    // Create canvas that fills the container
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    clear(); // Transparent background

    // Update and display particles
    particles.forEach(particle => {
        particle.update();
        particle.display();
    });
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

/**
 * Particle class
 */
class Particle {
    constructor() {
        this.reset();
        // Start at random position
        this.y = random(height);
    }

    reset() {
        this.x = random(width);
        this.y = -50;
        this.size = random(20, 80);
        this.speed = random(0.2, 0.8);
        this.color = random(gemColors);
        this.offsetX = random(-0.5, 0.5);
        this.wobble = random(TWO_PI);
        this.wobbleSpeed = random(0.01, 0.03);
    }

    update() {
        // Move down
        this.y += this.speed;

        // Gentle horizontal wobble
        this.wobble += this.wobbleSpeed;
        this.x += sin(this.wobble) * this.offsetX;

        // Reset if off screen
        if (this.y > height + 50) {
            this.reset();
        }
    }

    display() {
        noStroke();
        fill(this.color.r, this.color.g, this.color.b, this.color.a);

        // Draw soft circle
        drawingContext.shadowBlur = 20;
        drawingContext.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.3)`;

        ellipse(this.x, this.y, this.size, this.size);

        drawingContext.shadowBlur = 0;
    }
}
