# Beginner Responsive Navbar (React + Vite)

A beginner-friendly React project based on the supplied assignment.

## Features
- Desktop: logo, four horizontal links, and a Create Account button.
- Tablet: green navbar with horizontal links.
- Mobile: green navbar with a hamburger button. Opening it displays a full-screen vertical menu and a Create Account button at the bottom.
- Uses React state and ordinary CSS media queries; no Tailwind or extra icon libraries.

## Run the project

1. Install Node.js (LTS) from https://nodejs.org/
2. Extract this ZIP file.
3. Open the extracted folder in VS Code.
4. Open a terminal in that folder and run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite in your browser.

## Main files
- `src/App.jsx` — page content
- `src/components/Navbar.jsx` — navigation and menu toggle
- `src/index.css` — layout, colors, and responsive breakpoints

## Beginner notes
- `useState(false)` remembers whether the mobile menu is open.
- `setMenuOpen(!menuOpen)` switches the menu between open and closed.
- `@media (max-width: 600px)` applies the mobile layout.
- `@media (min-width: 601px) and (max-width: 900px)` applies the tablet layout.

The assignment asks for the menu to collapse on smaller screens. This version uses a hamburger menu on mobile and keeps tablet links horizontal, matching the written requirements as closely as possible with a simple implementation.
