# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**The Anatomy of a Memoir** is a memoir writing coach and educational website built with HTML, CSS, and JavaScript. The site aims to help aspiring memoir writers learn the craft and structure of memoir writing through educational content and coaching resources.

## Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (vanilla)
- **Hosting:** Static website (no backend server required)

## Development

### Local Development

To develop locally, you'll need to serve the HTML files through a local web server (not by opening files directly in the browser) to avoid CORS issues and properly test functionality:

**Option 1: Python (if available)**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Node.js (if available)**
```bash
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

### Project Structure

As this is a static HTML/CSS/JS website, organize files logically:
- HTML files in the root or organized by section
- CSS in a dedicated `css/` or `styles/` directory
- JavaScript in a `js/` or `scripts/` directory
- Images and assets in `images/` or `assets/` directory

## Code Guidelines

### HTML
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- Ensure accessibility with proper ARIA labels and alt text for images
- Maintain clean, readable indentation

### CSS
- Keep styles organized (consider separating layout, components, and utilities)
- Use consistent naming conventions (BEM or similar if a pattern emerges)
- Ensure responsive design for mobile, tablet, and desktop viewports

### JavaScript
- Write clean, vanilla JavaScript (no framework dependencies unless explicitly added)
- Comment complex logic
- Handle errors gracefully and provide user feedback

## Content Focus

This website focuses on memoir writing education. When creating or editing content:
- Keep educational content clear and actionable for memoir writers
- Organize coaching resources in an intuitive, easy-to-navigate structure
- Consider the user journey from beginner to advanced memoir writer
