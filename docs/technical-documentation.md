# Technical Documentation

## Project Structure
- `index.html` — Page structure (sections, navbar, footer)
- `css/styles.css` — Styling (theme variables, layout, responsiveness)
- `js/script.js` — Interactivity (scroll effects, active nav, dynamic year)

## Key UI/UX Decisions
- **Dark theme + accent color** using CSS variables for consistency.
- **Fixed header** so navigation is always accessible.
- **Clear section headings** with numbering for easy scanning.

## Responsiveness
- Uses **Flexbox/Grid** for layout.
- Uses **media queries** to adapt:
  - Projects grid switches from 2 columns to 1 column on smaller screens.
  - Skills grid reduces columns on smaller screens.
  - Navbar simplifies on phones (logo centered, nav items hidden).

## JavaScript Features
1. **Header shadow on scroll**
   - Adds a “scrolled” class when `window.scrollY > 50`.
2. **Dynamic footer year**
   - Automatically sets the current year.
3. **Active navigation highlight**
   - Detects the current section in view and adds `active` class to the correct nav link.

## Accessibility Notes
- Navbar links use clear labels.
- Images use `alt` text.
- Contrast was considered (light text on dark background).

## Known Limitations
- Contact form is frontend-only (no backend submission).
- Demo/GitHub project links may be placeholders if a project is still in progress.
