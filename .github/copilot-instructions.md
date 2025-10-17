# AI Agent Instructions for Workout Plan Generator

## Project Overview
This is a web-based workout plan generator that creates personalized fitness plans. The application uses a simple HTML/CSS/JavaScript stack with a focus on clean, responsive design and user experience.

## Architecture and Components
Use minimalistic and modular design patterns. Use color schemes and typography that enhance readability and user engagement.

### Frontend Structure
- `index.html`: Entry point with semantic HTML structure
- `styles.css`: Modular CSS with responsive design patterns
- `script.js`: JavaScript event handling and core functionality

### Key Components
1. **UI Components** (`index.html`):
   - Header with title and tagline
   - CTA section with plan generation button
   - Features section with 3-column grid layout
   - Responsive footer

2. **Styling Patterns** (`styles.css`):
   - Mobile-first responsive design using `@media` queries
   - CSS Grid for features layout (`grid-template-columns`)
   - Consistent spacing using `rem` units
   - Box-shadow patterns for card elevation

3. **JavaScript Architecture** (`script.js`):
   - Event-driven architecture using `DOMContentLoaded`
   - Button interaction handling with animation effects
   - TODO: Workout plan generation logic placeholder

## Development Workflows

### Local Development
1. The project is a static web application - no build step required
2. Open `index.html` in a browser to test changes
3. Use browser dev tools for style debugging and JavaScript console

### Code Patterns
- Use CSS Grid for responsive layouts over manual media queries where possible
- Maintain consistent spacing using `rem` units (base: 16px)
- JavaScript follows event-driven patterns with clear separation of concerns

## Integration Points
- Future workout generation logic should be implemented in `script.js`
- Plan generation placeholder is marked with TODO comment
- UI is prepared for AJAX/fetch calls to future backend services

## Testing Guidelines
- Test responsive layouts at common breakpoints (768px mobile threshold)
- Verify button animations and hover effects
- Ensure accessibility of interactive elements

Feel free to update this documentation as the project evolves.