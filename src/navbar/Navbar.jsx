import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Navbar.scss';
import { MENU_ITEMS, BUTTON_TEXT, IMAGES } from './constants';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (path) => {
    if (path) {
      navigate(path);
      setIsMenuOpen(false); // suggestion:- renderer should not do any computation(before rendere)
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // function before renderer for comparison
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src={IMAGES.logo}
            alt="Logo"
            className="logo-image"
            onClick={() => handleNavigate('/')}
          />
        </div>
        <img
          src="/images/Burger.png"
          alt="Menu"
          className="navbar-hamburger"
          onClick={toggleMenu}
        />
        <ul className={`navbar-menu`}>
          {' '}
          {MENU_ITEMS.map(
            (
              item // remove it (the space)
            ) => (
              <li
                key={item.path}
                className={`navbar-menu-item ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                <Link
                  to={item.path}
                  className="navbar-menu-link"
                  onClick={() => handleNavigate(item.path)}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
        <div className="navbar-buttons">
          <button
            onClick={() => handleNavigate('/login')}
            className="button-primary navbar-button-login"
          >
            {BUTTON_TEXT.login}
          </button>
          <button
            onClick={() => handleNavigate('/signup')}
            className="button-secondary navbar-button-signup"
          >
            {BUTTON_TEXT.signup}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
