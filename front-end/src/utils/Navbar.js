import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../utils/AuthProvider';
import { useContext } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const { accessToken, isLoggedIn, setAccessToken, setIsLoggedIn } =
    useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    if (accessToken && isLoggedIn) {
      setAccessToken(null);
      setIsLoggedIn(false);
    } else if (accessToken && !isLoggedIn) {
      alert('You are already logged in');
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSocialDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (route) => {
    navigate(route);
    setDropdownOpen(false);
  };

  return (
    <div className="navbar">
      <nav>
        <ul className="navbar-list">
          <li>
            <button
              className="navbar-btn"
              onClick={() => navigate('/')}
            >
              Home
            </button>
          </li>

          <li
            className={`dropdown-nav ${dropdownOpen ? 'open' : ''}`}
          >
            <button className="navbar-btn" onClick={toggleDropdown}>
              Recommendations
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="link-btn"
                    onClick={() =>
                      handleOptionClick('/recommendations/dashboard')
                    }
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    className="link-btn"
                    onClick={() =>
                      handleOptionClick('/recommendations/fitness')
                    }
                  >
                    Fitness
                  </button>
                </li>
                <li>
                  <button
                    className="link-btn"
                    onClick={() =>
                      handleOptionClick('/recommendations/nutrition')
                    }
                  >
                    Nutrition
                  </button>
                </li>
                <li>
                  <button
                    className="link-btn"
                    onClick={() =>
                      handleOptionClick(
                        '/recommendations/mental-health'
                      )
                    }
                  >
                    Mental Health
                  </button>
                </li>
              </ul>
            )}
          </li>

          <li
            className={`dropdown-nav ${dropdownOpen ? 'open' : ''}`}
          >
            <button
              className="navbar-btn"
              onClick={toggleSocialDropdown}
            >
              Community
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="link-btn"
                    onClick={() =>
                      handleOptionClick('/community/feed')
                    }
                  >
                    Feed
                  </button>
                </li>
                <li>
                  <button
                    className="link-btn"
                    onClick={() =>
                      handleOptionClick('/community/friends')
                    }
                  >
                    Friends
                  </button>
                </li>
                <li>
                  <button
                    className="link-btn"
                    onClick={() =>
                      handleOptionClick('/community/groups')
                    }
                  >
                    Groups
                  </button>
                </li>
              </ul>
            )}
          </li>

          <li>
            <form onSubmit={handleLogout}>
              <button
                className="navbar-btn"
                onClick={() => navigate('/logout')}
              >
                Logout
              </button>
            </form>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
