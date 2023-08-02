import React, { useContext } from 'react';
import AuthContext from '../../utils/AuthProvider';
import { useNavigate } from 'react-router-dom';

const FitnessNutritionQuestions = (props) => {
  const accessToken = useContext(AuthContext);
  const navigate = useNavigate();

  // action when submitting form
  const handleSubmit = (e) => {
    e.preventDefault();
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
          <label htmlFor="qf1">
            1. Has your doctor ever said that you have a heart
            condition OR high blood pressure?
          </label>
          <div className="dropdown">
            <select name="yesorno" id="qf1">
              <option value="heart condition">heart condition</option>
              <option value="high blood pressure">
                high blood pressure
              </option>
              <option value="both">both</option>
              <option value="neither">neither</option>
            </select>
          </div>

          <label htmlFor="qf2">
            2. Do you feel pain in your chest at rest, during your
            daily activities of living, OR when you do physical
            activity?
          </label>
          <div className="dropdown">
            <select name="yesorno" id="qf2">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <label htmlFor="qf3">
            3. Do you lose balance because of dizziness OR have you
            lost consciousness in the last 12 months? Please answer NO
            if your dizziness was associated with over-breathing
            (including during vigorous exercise).
          </label>
          <div className="dropdown">
            <select name="yesorno" id="qf3">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <label htmlFor="qf4">
            4. Have you ever been diagnosed with another chronic
            medical condition (other than heart disease or high blood
            pressure)? PLEASE LIST CONDITIONS HERE:
          </label>
          <div className="dropdown">
            <select name="yesorno" id="qf4">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <input type="text" placeholder="" id="qf4_2" name="qf4_2" />

          <label htmlFor="qf5">
            5. Are you currently taking prescribed medications for a
            chronic medical condition that could limit your ability to
            do physical activity or change your diet?
          </label>
          <div className="dropdown">
            <select name="yesorno" id="qf5">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <label htmlFor="qf6">
            6. Do you currently have (or have had within the past 12
            months) a bone, joint, or soft tissue (muscle, ligament,
            or tendon) problem that could be made worse by becoming
            more physically active? Please answer NO if you had a
            problem in the past, but it does not limit your current
            ability to be physically active. PLEASE LIST CONDITION(S)
            HERE:
          </label>
          <div className="dropdown">
            <select name="yesorno" id="qf6">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <input type="text" placeholder="" id="qf6_2" name="qf6_2" />

          <label htmlFor="qf7">
            7. Has your doctor ever said that you should only do
            medically supervised physical activity?
          </label>
          <div className="dropdown">
            <select name="yesorno" id="qf7">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <label htmlFor="qf8">
            8. What are your Fitness and Nutrition goals? (Select 3)
          </label>
          <div className="checkboxes">
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Learn to eat a balanced diet"
              />
              Learn to eat a balanced diet
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Decrease body fat"
              />
              Decrease body Fat
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Tone muscles"
              />
              Tone muscles
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Learn to balance activity & diet"
              />
              Learn to balance activity & diet
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Reduce stress"
              />
              Reduce stress
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Increase strength & power"
              />
              Increase strength & power
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Create a healthy lifestyle"
              />
              Create a healthy lifestyle
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Feel better"
              />
              Feel better
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Improve speed/agility"
              />
              Improve speed/agility
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Increase flexibility"
              />
              Increase flexibility
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Improve overall health"
              />
              Improve overall health
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Improve athletic performance"
              />
              Improve athletic performance
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Maintain healthy weight"
              />
              Maintain healthy weight
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Increase endurance"
              />
              Increase Endurance
            </div>
            <div>
              <input
                type="checkbox"
                id="goals"
                name="goals"
                value="Other"
              />
              Other
            </div>
          </div>

          <label htmlFor="qf9">
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
              />
              Lack of motivation
            </div>
            <div>
              <input
                type="checkbox"
                id="obstacles"
                name="obstacles"
                value="Lack of equipment"
              />
              Lack of equipment
            </div>
            <div>
              <input
                type="checkbox"
                id="obstacles"
                name="obstacles"
                value="Time"
              />
              Time
            </div>
            <div>
              <input
                type="checkbox"
                id="obstacles"
                name="obstacles"
                value="Hitting a plateau"
              />
              Hitting a plateau
            </div>
            <div>
              <input
                type="checkbox"
                id="obstacles"
                name="obstacles"
                value="Self-conscious"
              />
              Self-conscious
            </div>
            <div>
              <input
                type="checkbox"
                id="obstacles"
                name="obstacles"
                value="Not knowing where/how to begin"
              />
              Not knowing where/how to begin
            </div>
            <div>
              <input
                type="checkbox"
                id="obstacles"
                name="obstacles"
                value="Lack of results"
              />
              Lack of results
            </div>
            <div>
              <input
                type="checkbox"
                id="obstacles"
                name="obstacles"
                value="Money"
              />
              Money
            </div>
            <div>
              <input
                type="checkbox"
                id="obstacles"
                name="obstacles"
                value="Other"
              />
              Other
            </div>
          </div>

          <label htmlFor="qf10">
            10. What motivates you? (Check all that apply)
          </label>
          <div className="checkboxes">
            <div>
              <input
                type="checkbox"
                id="motivations"
                name="motivations"
                value="Seeing results"
              />
              Seeing results
            </div>
            <div>
              <input
                type="checkbox"
                id="motivations"
                name="motivations"
                value="Having fun"
              />
              Havin fun
            </div>
            <div>
              <input
                type="checkbox"
                id="motivations"
                name="motivations"
                value="Praise/Rewards"
              />
              Praise/Rewards
            </div>
            <div>
              <input
                type="checkbox"
                id="motivations"
                name="motivations"
                value="Accountability"
              />
              Accountability
            </div>
            <div>
              <input
                type="checkbox"
                id="motivations"
                name="motivations"
                value="Feeling better"
              />
              Feeling better
            </div>
            <div>
              <input
                type="checkbox"
                id="motivations"
                name="motivations"
                value="Other"
              />
              Other
            </div>
          </div>

          <label htmlFor="qf11">
            11. Do you follow a current exercise regime?
          </label>
          <div className="dropdown">
            <select name="yesorno" id="qf11">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <label htmlFor="qf12">
            12. Please describe how you like to exercise
          </label>
          <input type="text" placeholder="" id="qf12" name="qf12" />

          <label htmlFor="qf13">
            13. Where do you rate health prioritization in life? 1
            being low priority 5 being high priority.
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qf13_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qf13_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qf13_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qf13_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qf13_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qf13" id="qf13_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qf13" id="qf13_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qf13" id="qf13_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qf13" id="qf13_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qf13" id="qf13_5" />
            </div>
          </div>

          <label htmlFor="qf14">
            14. How committed are you to achieving your fitness
            goals?. 1 being very little 5 being very much.
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qf14_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qf14_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qf14_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qf14_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qf14_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qf14" id="qf14_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qf14" id="qf14_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qf14" id="qf14_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qf14" id="qf14_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qf14" id="qf14_5" />
            </div>
          </div>

          <label htmlFor="qf15">
            15. Approximately how many hours of sleep do you get each
            night, on average?
          </label>
          <input type="text" placeholder="" id="qf15" name="qf15" />

          <label htmlFor="qf16">
            16. Approximately how many hours sleep do you feel you
            need to function at your best?
          </label>
          <input type="text" placeholder="" id="qf16" name="qf16" />

          <label htmlFor="qf17">
            17. What factors do you feel are stopping you from getting
            the ideal amount of sleep that you need to function at
            your best? Please state up to 3.
          </label>
          <input type="text" placeholder="" id="qf17" name="qf17" />

          <h3>Nutrition related questions</h3>

          <label htmlFor="qf18">
            18. How would you rate your nutrition? 1 being very poor
            10 being excellent.
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qf18_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qf18_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qf18_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qf18_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qf18_5">5</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qf18_6">6</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qf18_7">7</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qf18_8">8</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qf18_9">9</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qf18_10">10</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qf18" id="qf18_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qf18" id="qf18_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qf18" id="qf18_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qf18" id="qf18_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qf18" id="qf18_5" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="6" name="qf18" id="qf18_6" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="7" name="qf18" id="qf18_7" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="8" name="qf18" id="qf18_8" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="9" name="qf18" id="qf18_9" />
            </div>
            <div className="answerchoice">
              <input
                type="radio"
                value="10"
                name="qf18"
                id="qf18_10"
              />
            </div>
          </div>

          <label htmlFor="qf19">
            19. How many times a day do you usually eat (including
            snacks)?
          </label>
          <input type="text" placeholder="" id="qf19" name="qf19" />

          <label htmlFor="qf20">20. Do you skip meals?</label>
          <div className="dropdown">
            <select name="yesorno" id="qf20">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <label htmlFor="qf21">21. Do you eat breakfast?</label>
          <div className="dropdown">
            <select name="yesorno" id="qf21">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <label htmlFor="qf22">22. Do you eat late at night?</label>
          <div className="dropdown">
            <select name="multipledropdown" id="qf22">
              <option value="never">never</option>
              <option value="sometimes">sometimes</option>
              <option value="often">often</option>
            </select>
          </div>

          <label htmlFor="qf23">
            23. Do you eat past the point of fullness?
          </label>
          <div className="dropdown">
            <select name="multipledropdown" id="qf23">
              <option value="never">never</option>
              <option value="sometimes">sometimes</option>
              <option value="often">often</option>
            </select>
          </div>

          <label htmlFor="qf24">
            24. Would you find cooking classes helpful?
          </label>
          <div className="dropdown">
            <select name="yesorno" id="qf24">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <label htmlFor="qf25">25. At work do you usually:</label>
          <div className="dropdown">
            <select name="multipledropdown" id="qf25">
              <option value="Bring food">Bring food</option>
              <option value="Eat out">Eat out</option>
            </select>
          </div>

          <label htmlFor="qf26">
            26. How many times a week do you eat out?
          </label>
          <input type="text" placeholder="" id="qf26" name="qf26" />

          <label htmlFor="qf27">
            27. Would you like to speak to any additional resources?
          </label>
          <div className="checkboxes">
            <div>
              <input
                type="checkbox"
                id="resources"
                name="resources"
                value="Chaplain"
              />
              Chaplain
            </div>
            <div>
              <input
                type="checkbox"
                id="resources"
                name="resources"
                value="Family Readiness"
              />
              Family Readiness
            </div>
            <div>
              <input
                type="checkbox"
                id="resources"
                name="resources"
                value="Psychological Health"
              />
              Psychological Health
            </div>
            <div>
              <input
                type="checkbox"
                id="resources"
                name="resources"
                value="SAPR"
              />
              SAPR
            </div>
            <div>
              <input
                type="checkbox"
                id="resources"
                name="resources"
                value="Medical Group"
              />
              Medical Group
            </div>
            <div>
              <input
                type="checkbox"
                id="resources"
                name="resources"
                value="Legal"
              />
              Legal
            </div>
          </div>

          <button
            onClick={() => navigate('/recommendations/dashboard')}
          >
            Submit Fitness & Nutrition Questions
          </button>
        </form>
      </div>
    </div>
  );
};

export default FitnessNutritionQuestions;
