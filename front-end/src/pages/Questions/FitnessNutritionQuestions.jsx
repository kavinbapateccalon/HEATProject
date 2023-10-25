import React, { useContext, useState } from 'react';
import AuthContext from '../../utils/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FitnessNutritionQuestions = (props) => {
  const accessToken = useContext(AuthContext);
  const navigate = useNavigate();
  const [qpn1, setQpn1] = useState('');
  const [qpn2, setQpn2] = useState('');
  const [qpn3, setQpn3] = useState('');
  const [qpn4, setQpn4] = useState('');
  const [qpn4_text, setQpn4_text] = useState('');
  const [qpn5, setQpn5] = useState('');
  const [qpn6, setQpn6] = useState('');
  const [qpn6_text, setQpn6_text] = useState('');
  const [qpn7, setQpn7] = useState('');
  const [qpn8, setQpn8] = useState([]); // Assuming this is a multi-choice question
  const [qpn9, setQpn9] = useState([]); // Assuming this is a multi-choice question
  const [qpn10, setQpn10] = useState([]); // Assuming this is a multi-choice question
  const [qpn11, setQpn11] = useState('');
  const [qpn12, setQpn12] = useState('');
  const [qpn13, setQpn13] = useState('');
  const [qpn14, setQpn14] = useState('');
  const [qpn15, setQpn15] = useState('');
  const [qpn16, setQpn16] = useState('');
  const [qpn17, setQpn17] = useState('');
  const [qpn18, setQpn18] = useState('');
  const [qpn19, setQpn19] = useState('');
  const [qpn20, setQpn20] = useState('');
  const [qpn21, setQpn21] = useState('');
  const [qpn22, setQpn22] = useState('');
  const [qpn23, setQpn23] = useState('');
  const [qpn24, setQpn24] = useState('');
  const [qpn25, setQpn25] = useState('');
  const [qpn26, setQpn26] = useState('');
  const [qpn27, setQpn27] = useState([]); // Assuming this is a multi-choice question

  const handleQpn8Change = (e) => {
    if (e.target.checked) {
      // Add the value to the array if the checkbox is checked
      setQpn8([...qpn8, e.target.value]);
    } else {
      // Remove the value from the array if the checkbox is unchecked
      setQpn8(qpn8.filter((item) => item !== e.target.value));
    }
  };

  const handleQpn9Change = (e) => {
    if (e.target.checked) {
      setQpn9([...qpn9, e.target.value]);
    } else {
      setQpn9(qpn9.filter((obstacle) => obstacle !== e.target.value));
    }
  };

  const handleQpn10Change = (e) => {
    if (e.target.checked) {
      setQpn10([...qpn10, e.target.value]);
    } else {
      setQpn10(
        qpn10.filter((motivation) => motivation !== e.target.value)
      );
    }
  };

  const handleQpn13Change = (e) => {
    setQpn13(e.target.value);
  };

  const handleQpn14Change = (e) => {
    setQpn14(e.target.value);
  };

  const handleQpn15Change = (e) => {
    setQpn15(e.target.value);
  };

  const handleQpn16Change = (e) => {
    setQpn16(e.target.value);
  };

  const handleQpn17Change = (e) => {
    setQpn17(e.target.value);
  };

  const handleQpn18Change = (e) => {
    setQpn18(e.target.value);
  };

  const handleQpn27Change = (e) => {
    if (e.target.checked) {
      // Add the value to the array if the checkbox is checked
      setQpn27([...qpn27, e.target.value]);
    } else {
      // Remove the value from the array if the checkbox is unchecked
      setQpn27(
        qpn27.filter((resource) => resource !== e.target.value)
      );
    }
  };

  // action when submitting form
  const handleSubmit = (e) => {
    e.preventDefault();

    const answers = {
      qpn1: qpn1,
      qpn2: qpn2,
      qpn3: qpn3,
      qpn4: qpn4,
      qpn4_text: qpn4_text,
      qpn5: qpn5,
      qpn6: qpn6,
      qpn6_text: qpn6_text,
      qpn7: qpn7,
      qpn8: qpn8,
      qpn9: qpn9,
      qpn10: qpn10,
      qpn11: qpn11,
      qpn12: qpn12,
      qpn13: parseFloat(qpn13),
      qpn14: parseFloat(qpn14),
      qpn15: parseFloat(qpn15),
      qpn16: parseFloat(qpn16),
      qpn17: qpn17,
      qpn18: parseFloat(qpn18),
      qpn19: parseFloat(qpn19),
      qpn20: qpn20,
      qpn21: qpn21,
      qpn22: qpn22,
      qpn23: qpn23,
      qpn24: qpn24,
      qpn25: qpn25,
      qpn26: parseFloat(qpn26),
      qpn27: qpn27,
    };

    // Make API call
    axios
      .post('/api/fitness-nutrition-questions/submit', answers, {
        headers: {
          Authorization: `Bearer ${accessToken.accessToken}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // Handle success
        console.log(response);
        navigate('/proceed');
      })
      .catch((error) => {
        // Handle error
        console.error(error);
        alert('An error occurred while submitting the form.');
      });
  };

  // what is displayed - return value
  return (
    <div className="App">
      <div className="auth-form-container">
        <h1>Wellness Onboarding Survey</h1>

        <form className="questionnaire" onSubmit={handleSubmit}>
          <div className="header">
            <h2>
              Personal Fitness & Nutrition Development Questions
            </h2>
          </div>
          <label htmlFor="qpn1">
            1. Has your doctor ever said that you have a heart
            condition OR high blood pressure?
          </label>
          <div className="dropdown">
            <select
              name="yesorno"
              id="qpn1"
              value={qpn1}
              onChange={(e) => setQpn1(e.target.value)}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="heart condition">heart condition</option>
              <option value="high blood pressure">
                high blood pressure
              </option>
              <option value="both">both</option>
              <option value="neither">neither</option>
            </select>
          </div>

          <label htmlFor="qpn2">
            2. Do you feel pain in your chest at rest, during your
            daily activities of living, OR when you do physical
            activity?
          </label>
          <div className="dropdown">
            <select
              name="yesorno"
              id="qpn2"
              value={qpn2}
              onChange={(e) => setQpn2(e.target.value)}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <label htmlFor="qpn3">
            3. Do you lose balance because of dizziness OR have you
            lost consciousness in the last 12 months? Please answer NO
            if your dizziness was associated with over-breathing
            (including during vigorous exercise).
          </label>
          <div className="dropdown">
            <select
              name="yesorno"
              id="qpn3"
              value={qpn3}
              onChange={(e) => setQpn3(e.target.value)}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <label htmlFor="qpn4">
            4. Have you ever been diagnosed with another chronic
            medical condition (other than heart disease or high blood
            pressure)? PLEASE LIST CONDITIONS HERE:
          </label>
          <div className="dropdown">
            <select
              name="yesorno"
              id="qpn4"
              value={qpn4}
              onChange={(e) => setQpn4(e.target.value)}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <input
            type="text"
            placeholder=""
            id="qpn4_text"
            name="qpn4_text"
            value={qpn4_text}
            onChange={(e) => setQpn4_text(e.target.value)}
          />

          <label htmlFor="qpn5">
            5. Are you currently taking prescribed medications for a
            chronic medical condition that could limit your ability to
            do physical activity or change your diet?
          </label>
          <div className="dropdown">
            <select
              name="yesorno"
              id="qpn5"
              value={qpn5}
              onChange={(e) => setQpn5(e.target.value)}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <label htmlFor="qpn6">
            6. Do you currently have (or have had within the past 12
            months) a bone, joint, or soft tissue (muscle, ligament,
            or tendon) problem that could be made worse by becoming
            more physically active? Please answer NO if you had a
            problem in the past, but it does not limit your current
            ability to be physically active. PLEASE LIST CONDITION(S)
            HERE:
          </label>
          <div className="dropdown">
            <select
              name="yesorno"
              id="qpn6"
              value={qpn6}
              onChange={(e) => setQpn6(e.target.value)}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <input
            type="text"
            placeholder=""
            id="qpn6_text"
            name="qpn6_text"
            value={qpn6_text}
            onChange={(e) => setQpn6_text(e.target.value)}
          />

          <label htmlFor="qpn7">
            7. Has your doctor ever said that you should only do
            medically supervised physical activity?
          </label>
          <div className="dropdown">
            <select
              name="yesorno"
              id="qpn7"
              value={qpn7}
              onChange={(e) => setQpn7(e.target.value)}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <label htmlFor="qpn8">
            8. What are your Fitness and Nutrition goals? (Select 3)
          </label>
          <div className="checkboxes">
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Learn to eat a balanced diet"
                checked={qpn8.includes(
                  'Learn to eat a balanced diet'
                )}
                onChange={handleQpn8Change}
              />
              Learn to eat a balanced diet
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Decrease body fat"
                checked={qpn8.includes('Decrease body fat')}
                onChange={handleQpn8Change}
              />
              Decrease body Fat
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Tone muscles"
                checked={qpn8.includes('Tone muscles')}
                onChange={handleQpn8Change}
              />
              Tone muscles
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Learn to balance activity & diet"
                checked={qpn8.includes(
                  'Learn to balance activity & diet'
                )}
                onChange={handleQpn8Change}
              />
              Learn to balance activity & diet
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Reduce stress"
                checked={qpn8.includes('Reduce stress')}
                onChange={handleQpn8Change}
              />
              Reduce stress
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Increase strength & power"
                checked={qpn8.includes('Increase strength & power')}
                onChange={handleQpn8Change}
              />
              Increase strength & power
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Create a healthy lifestyle"
                checked={qpn8.includes('Create a healthy lifestyle')}
                onChange={handleQpn8Change}
              />
              Create a healthy lifestyle
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Feel better"
                checked={qpn8.includes('Feel better')}
                onChange={handleQpn8Change}
              />
              Feel better
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Improve speed/agility"
                checked={qpn8.includes('Improve speed/agility')}
                onChange={handleQpn8Change}
              />
              Improve speed/agility
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Increase flexibility"
                checked={qpn8.includes('Increase flexibilitys')}
                onChange={handleQpn8Change}
              />
              Increase flexibility
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Improve overall health"
                checked={qpn8.includes('Improve overall health')}
                onChange={handleQpn8Change}
              />
              Improve overall health
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Improve athletic performance"
                checked={qpn8.includes(
                  'Improve athletic performance'
                )}
                onChange={handleQpn8Change}
              />
              Improve athletic performance
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Maintain healthy weight"
                checked={qpn8.includes('Maintain healthy weight')}
                onChange={handleQpn8Change}
              />
              Maintain healthy weight
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Increase endurance"
                checked={qpn8.includes('Increase endurance')}
                onChange={handleQpn8Change}
              />
              Increase Endurance
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Other"
                checked={qpn8.includes('Other')}
                onChange={handleQpn8Change}
              />
              Other
            </div>
          </div>

          <label htmlFor="qpn9">
            9. What is keeping you from achieving your Fitness and
            Nutrition Goals? (Check all that apply)
          </label>
          <div className="checkboxes">
            <div>
              <input
                type="checkbox"
                id="obstacles"
                name="obstacles"
                value="Lack of motivation"
                checked={qpn9.includes('Lack of motivation')}
                onChange={handleQpn9Change}
              />
              Lack of motivation
            </div>
            <div>
              <input
                type="checkbox"
                id="obstacles"
                name="obstacles"
                value="Lack of equipment"
                checked={qpn9.includes('Lack of equipment')}
                onChange={handleQpn9Change}
              />
              Lack of equipment
            </div>
            <div>
              <input
                type="checkbox"
                id="obstacles"
                name="obstacles"
                value="Time"
                checked={qpn9.includes('Time')}
                onChange={handleQpn9Change}
              />
              Time
            </div>
            <div>
              <input
                type="checkbox"
                id="obstacles"
                name="obstacles"
                value="Hitting a plateau"
                checked={qpn9.includes('Hitting a plateau')}
                onChange={handleQpn9Change}
              />
              Hitting a plateau
            </div>
            <div>
              <input
                type="checkbox"
                id="obstacles"
                name="obstacles"
                value="Self-conscious"
                checked={qpn9.includes('Self-conscious')}
                onChange={handleQpn9Change}
              />
              Self-conscious
            </div>
            <div>
              <input
                type="checkbox"
                id="obstacles"
                name="obstacles"
                value="Not knowing where/how to begin"
                checked={qpn9.includes(
                  'Not knowing where/how to begin'
                )}
                onChange={handleQpn9Change}
              />
              Not knowing where/how to begin
            </div>
            <div>
              <input
                type="checkbox"
                id="obstacles"
                name="obstacles"
                value="Lack of results"
                checked={qpn9.includes('Lack of results')}
                onChange={handleQpn9Change}
              />
              Lack of results
            </div>
            <div>
              <input
                type="checkbox"
                id="obstacles"
                name="obstacles"
                value="Money"
                checked={qpn9.includes('Money')}
                onChange={handleQpn9Change}
              />
              Money
            </div>
            <div>
              <input
                type="checkbox"
                id="obstacles"
                name="obstacles"
                value="Other"
                checked={qpn9.includes('Other')}
                onChange={handleQpn9Change}
              />
              Other
            </div>
          </div>

          <label htmlFor="qpn10">
            10. What motivates you? (Check all that apply)
          </label>
          <div className="checkboxes">
            <div>
              <input
                type="checkbox"
                id="motivations"
                name="motivations"
                value="Seeing results"
                checked={qpn10.includes('Seeing results')}
                onChange={handleQpn10Change}
              />
              Seeing results
            </div>
            <div>
              <input
                type="checkbox"
                id="motivations"
                name="motivations"
                value="Having fun"
                checked={qpn10.includes('Having fun')}
                onChange={handleQpn10Change}
              />
              Havin fun
            </div>
            <div>
              <input
                type="checkbox"
                id="motivations"
                name="motivations"
                value="Praise/Rewards"
                checked={qpn10.includes('Praise/Rewards')}
                onChange={handleQpn10Change}
              />
              Praise/Rewards
            </div>
            <div>
              <input
                type="checkbox"
                id="motivations"
                name="motivations"
                value="Accountability"
                checked={qpn10.includes('Accountability')}
                onChange={handleQpn10Change}
              />
              Accountability
            </div>
            <div>
              <input
                type="checkbox"
                id="motivations"
                name="motivations"
                value="Feeling better"
                checked={qpn10.includes('Feeling better')}
                onChange={handleQpn10Change}
              />
              Feeling better
            </div>
            <div>
              <input
                type="checkbox"
                id="motivations"
                name="motivations"
                value="Other"
                checked={qpn10.includes('Other')}
                onChange={handleQpn10Change}
              />
              Other
            </div>
          </div>

          <label htmlFor="qpn11">
            11. Do you follow a current exercise regime?
          </label>
          <div className="dropdown">
            <select
              name="yesorno"
              id="qpn11"
              value={qpn11}
              onChange={(e) => setQpn11(e.target.value)}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <label htmlFor="qpn12">
            12. Please describe how you like to exercise
          </label>
          <input
            type="text"
            placeholder=""
            id="qpn12"
            name="qpn12"
            value={qpn11}
            onChange={(e) => setQpn11(e.target.value)}
          />

          <label htmlFor="qpn13">
            13. Where do you rate health prioritization in life? 1
            being low priority 5 being high priority.
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qpn13_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qpn13_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qpn13_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qpn13_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qpn13_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input
                type="radio"
                value="1"
                name="qpn13"
                id="qpn13_1"
                checked={qpn13 === '1'}
                onChange={handleQpn13Change}
              />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="2"
                name="qpn13"
                id="qpn13_2"
                checked={qpn13 === '2'}
                onChange={handleQpn13Change}
              />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="3"
                name="qpn13"
                id="qpn13_3"
                checked={qpn13 === '3'}
                onChange={handleQpn13Change}
              />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="4"
                name="qpn13"
                id="qpn13_4"
                checked={qpn13 === '4'}
                onChange={handleQpn13Change}
              />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="5"
                name="qpn13"
                id="qpn13_5"
                checked={qpn13 === '5'}
                onChange={handleQpn13Change}
              />
            </div>
          </div>

          <label htmlFor="qpn14">
            14. How committed are you to achieving your fitness
            goals?. 1 being very little 5 being very much.
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qpn14_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qpn14_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qpn14_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qpn14_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qpn14_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input
                type="radio"
                value="1"
                name="qpn14"
                id="qpn14_1"
                checked={qpn14 === '1'}
                onChange={handleQpn14Change}
              />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="2"
                name="qpn14"
                id="qpn14_2"
                checked={qpn14 === '2'}
                onChange={handleQpn14Change}
              />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="3"
                name="qpn14"
                id="qpn14_3"
                checked={qpn14 === '3'}
                onChange={handleQpn14Change}
              />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="4"
                name="qpn14"
                id="qpn14_4"
                checked={qpn14 === '4'}
                onChange={handleQpn14Change}
              />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="5"
                name="qpn14"
                id="qpn14_5"
                checked={qpn14 === '5'}
                onChange={handleQpn14Change}
              />
            </div>
          </div>

          <label htmlFor="qpn15">
            15. Approximately how many hours of sleep do you get each
            night, on average?
          </label>
          <input
            type="number"
            placeholder=""
            id="qpn15"
            name="qpn15"
            value={qpn15}
            onChange={handleQpn15Change}
          />

          <label htmlFor="qpn16">
            16. Approximately how many hours sleep do you feel you
            need to function at your best?
          </label>
          <input
            type="number"
            placeholder=""
            id="qpn16"
            name="qpn16"
            value={qpn16}
            onChange={handleQpn16Change}
          />

          <label htmlFor="qpn17">
            17. What factors do you feel are stopping you from getting
            the ideal amount of sleep that you need to function at
            your best? Please state up to 3.
          </label>
          <input
            type="text"
            placeholder=""
            id="qpn17"
            name="qpn17"
            value={qpn17}
            onChange={handleQpn17Change}
          />

          <h3>Nutrition related questions</h3>

          <label htmlFor="qpn18">
            18. How would you rate your nutrition? 1 being very poor
            10 being excellent.
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qpn18_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qpn18_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qpn18_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qpn18_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qpn18_5">5</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qpn18_6">6</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qpn18_7">7</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qpn18_8">8</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qpn18_9">9</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qpn18_10">10</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input
                type="radio"
                value="1"
                name="qpn18"
                id="qpn18_1"
                checked={qpn18 === '1'}
                onChange={handleQpn18Change}
              />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="2"
                name="qpn18"
                id="qpn18_2"
                checked={qpn18 === '2'}
                onChange={handleQpn18Change}
              />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="3"
                name="qpn18"
                id="qpn18_3"
                checked={qpn18 === '3'}
                onChange={handleQpn18Change}
              />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="4"
                name="qpn18"
                id="qpn18_4"
                checked={qpn18 === '4'}
                onChange={handleQpn18Change}
              />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="5"
                name="qpn18"
                id="qpn18_5"
                checked={qpn18 === '5'}
                onChange={handleQpn18Change}
              />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="6"
                name="qpn18"
                id="qpn18_6"
                checked={qpn18 === '6'}
                onChange={handleQpn18Change}
              />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="7"
                name="qpn18"
                id="qpn18_7"
                checked={qpn18 === '7'}
                onChange={handleQpn18Change}
              />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="8"
                name="qpn18"
                id="qpn18_8"
                checked={qpn18 === '8'}
                onChange={handleQpn18Change}
              />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="9"
                name="qpn18"
                id="qpn18_9"
                checked={qpn18 === '9'}
                onChange={handleQpn18Change}
              />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="10"
                name="qpn18"
                id="qpn18_10"
                checked={qpn18 === '10'}
                onChange={handleQpn18Change}
              />
            </div>
          </div>

          <label htmlFor="qpn19">
            19. How many times a day do you usually eat (including
            snacks)?
          </label>
          <input
            type="number"
            placeholder="Enter the number of times"
            id="qpn19"
            name="qpn19"
            value={qpn19}
            onChange={(e) => setQpn19(e.target.value)}
          />

          <label htmlFor="qpn20">20. Do you skip meals?</label>
          <div className="dropdown">
            <select
              name="yesorno"
              id="qpn20"
              value={qpn20}
              onChange={(e) => setQpn20(e.target.value)}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <label htmlFor="qpn21">21. Do you eat breakfast?</label>
          <div className="dropdown">
            <select
              name="yesorno"
              id="qpn21"
              value={qpn21}
              onChange={(e) => setQpn21(e.target.value)}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <label htmlFor="qpn22">22. Do you eat late at night?</label>
          <div className="dropdown">
            <select
              name="multipledropdown"
              id="qpn22"
              value={qpn22}
              onChange={(e) => setQpn22(e.target.value)}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="never">never</option>
              <option value="sometimes">sometimes</option>
              <option value="often">often</option>
            </select>
          </div>

          <label htmlFor="qpn23">
            23. Do you eat past the point of fullness?
          </label>
          <div className="dropdown">
            <select
              name="multipledropdown"
              id="qpn23"
              value={qpn23}
              onChange={(e) => setQpn23(e.target.value)}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="never">never</option>
              <option value="sometimes">sometimes</option>
              <option value="often">often</option>
            </select>
          </div>

          <label htmlFor="qpn24">
            24. Would you find cooking classes helpful?
          </label>
          <div className="dropdown">
            <select
              name="yesorno"
              id="qpn24"
              value={qpn24}
              onChange={(e) => setQpn24(e.target.value)}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <label htmlFor="qpn25">25. At work do you usually:</label>
          <div className="dropdown">
            <select
              name="multipledropdown"
              id="qpn25"
              value={qpn25}
              onChange={(e) => setQpn25(e.target.value)}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="Bring food">Bring food</option>
              <option value="Eat out">Eat out</option>
            </select>
          </div>

          <label htmlFor="qpn26">
            26. How many times a week do you eat out?
          </label>
          <input
            type="number"
            placeholder=""
            id="qpn26"
            name="qpn26"
            value={qpn26}
            onChange={(e) => setQpn26(e.target.value)}
          />

          <label htmlFor="qpn27">
            27. Would you like to speak to any additional resources?
          </label>
          <div className="checkboxes">
            <div>
              <input
                type="checkbox"
                id="resources"
                value="Chaplain"
                onChange={handleQpn27Change}
              />
              Chaplain
            </div>
            <div>
              <input
                type="checkbox"
                id="resources"
                value="Family Readiness"
                onChange={handleQpn27Change}
              />
              Family Readiness
            </div>
            <div>
              <input
                type="checkbox"
                id="resources"
                value="Psychological Health"
                onChange={handleQpn27Change}
              />
              Psychological Health
            </div>
            <div>
              <input
                type="checkbox"
                id="resources"
                value="SAPR"
                onChange={handleQpn27Change}
              />
              SAPR
            </div>
            <div>
              <input
                type="checkbox"
                id="resources"
                value="Medical Group"
                onChange={handleQpn27Change}
              />
              Medical Group
            </div>
            <div>
              <input
                type="checkbox"
                id="resources"
                value="Legal"
                onChange={handleQpn27Change}
              />
              Legal
            </div>
          </div>

          <button type="submit">
            Submit Fitness & Nutrition Questions
          </button>
        </form>
      </div>
    </div>
  );
};

export default FitnessNutritionQuestions;
