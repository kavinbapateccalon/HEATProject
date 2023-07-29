import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../utils/AuthProvider';
import { useContext } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const { accessToken, isLoggedIn, setAccessToken, setIsLoggedIn } =
    useContext(AuthContext);
  const [
    recommendationsDropdownOpen,
    setRecommendationsDropdownOpen,
  ] = useState(false);
  const [communityDropdownOpen, setCommunityDropdownOpen] =
    useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    if (accessToken && isLoggedIn) {
      setAccessToken(null);
      setIsLoggedIn(false);
    } else if (accessToken && !isLoggedIn) {
      alert('You are already logged in');
    }
  };

  const toggleRecommendationsDropdown = () => {
    setRecommendationsDropdownOpen(!recommendationsDropdownOpen);
  };

  const toggleCommunityDropdown = () => {
    setCommunityDropdownOpen(!communityDropdownOpen);
  };

  const handleOptionClick = (route) => {
    navigate(route);
    setRecommendationsDropdownOpen(false);
    setCommunityDropdownOpen(false);
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
            className={`dropdown-nav ${
              recommendationsDropdownOpen ? 'open' : ''
            }`}
          >
            <button
              className="navbar-btn"
              onClick={toggleRecommendationsDropdown}
            >
              Recommendations
            </button>
            {recommendationsDropdownOpen && (
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
            className={`dropdown-nav ${
              communityDropdownOpen ? 'open' : ''
            }`}
          >
            <button
              className="navbar-btn"
              onClick={toggleCommunityDropdown}
            >
              Community
            </button>
            {communityDropdownOpen && (
              <ul className="dropdown-menu">
                {/* <li>
                  <button
                    className="link-btn"
                    onClick={() =>
                      handleOptionClick('/community/feed')
                    }
                  >
                    Feed
                  </button>
                </li> */}
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
