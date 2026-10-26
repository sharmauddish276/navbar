import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="desktop-navbar">
        <a className="logo" href="#home">Logo</a>

        <nav className="desktop-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <a className="create-button" href="#create-account">Create Account</a>
      </div>

      <div className="mobile-navbar">
        <a className="logo" href="#home">Logo</a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a className="mobile-create-button" href="#create-account" onClick={closeMenu}>
            Create Account
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
