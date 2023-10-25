import React from 'react';
import AuthContext from '../../utils/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import '../../App.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="column">
        <div className="container">
          <h2>Physical Recommendations</h2>
          <ul>
            <li>
              Engage in a 30-minute walk every day to boost
              cardiovascular health.
            </li>
            <li>
              Consider yoga or pilates for flexibility and core
              strength.
            </li>
            <li>
              Strength training exercises at least twice a week can
              help in muscle development.
            </li>
            <li>
              Always warm up before exercising and cool down after to
              prevent injuries.
            </li>
            <li>
              Try interval training to improve endurance and burn more
              calories.
            </li>
          </ul>
        </div>
        <div className="container">
          <h2>Nutrition Recommendations</h2>
          <ul>
            <li>Drink at least 8 cups of water daily.</li>
            <li>
              Incorporate more whole grains, fruits, and vegetables
              into your diet.
            </li>
            <li>Limit sugar and saturated fat intake.</li>
            <li>
              Avoid skipping meals; consider 5 small meals if
              traditional 3 meals don't work for you.
            </li>
            <li>
              Include protein sources in every meal for sustained
              energy.
            </li>
          </ul>
        </div>
      </div>
      <div className="column">
        <div className="container">
          <h2>Psychological Recommendations</h2>
          <ul>
            <li>
              Engage in daily mindfulness or meditation practices.
            </li>
            <li>
              Consider journaling to express and understand your
              feelings better.
            </li>
            <li>Allocate time for self-care every week.</li>
            <li>
              Seek counseling or therapy if feeling overwhelmed or
              stressed.
            </li>
            <li>
              Join support groups for shared experiences and coping
              strategies.
            </li>
          </ul>
        </div>
        <div className="container">
          <h2>Community Recommendations</h2>
          <ul>
            <li>
              Join a local sports team or club to stay active and
              social.
            </li>
            <li>
              Consider volunteering; it can be fulfilling and create a
              sense of belonging.
            </li>
            <li>
              Participate in community workshops or classes related to
              health and well-being.
            </li>
            <li>
              Attend local farmers markets to support local and get
              fresh produce.
            </li>
            <li>
              Engage in community clean-up or tree planting activities
              for physical activity and environmental well-being.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
