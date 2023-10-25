import React, { useContext } from 'react';
import AuthContext from '../../utils/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importing axios

const MetricQuestions = (props) => {
  const accessToken = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(accessToken);
  // action when submitting form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Collecting answers
    const answers = {
      q1: e.target.q1.value,
      q2: e.target.q2.value,
      q3: e.target.q3.value,
      q4: e.target.q4.value,
      q5: e.target.q5.value,
      q6: e.target.q6.value,
      q7: e.target.q7.value,
      q8: e.target.q8.value,
      q9: e.target.days.value,
      q10: e.target.yesorno.value,
      q11: e.target.q11.value,
      q12: e.target.q12.value,
    };

    // Axios POST request
    axios
      .post('/api/metric-questions/submit', answers, {
        headers: {
          Authorization: `Bearer ${accessToken.accessToken}`,
        },
      })
      .then((response) => {
        // Handle success here, such as navigation to another page
        console.log(response);
        navigate('/personality-questions');
      })
      .catch((error) => {
        // Handle error here
        console.error(error);
      });
  };

  // what is displayed - return value
  return (
    <div className="App">
      <div className="auth-form-container">
        <h1>Wellness Onboarding Survey</h1>

        <form className="questionnaire" onSubmit={handleSubmit}>
          <div className="header">
            <h2>Metric Questions</h2>
          </div>

          <label htmlFor="q1">
            1. Rate your knowledge level in personal fitness. 1 being
            no knowledge and 10 being extremely knowledgeable.
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="q1_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q1_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q1_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q1_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q1_5">5</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q1_6">6</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q1_7">7</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q1_8">8</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q1_9">9</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q1_10">10</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="q1" id="q1_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="q1" id="q1_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="q1" id="q1_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="q1" id="q1_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="q1" id="q1_5" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="6" name="q1" id="q1_6" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="7" name="q1" id="q1_7" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="8" name="q1" id="q1_8" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="9" name="q1" id="q1_9" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="10" name="q1" id="q1_10" />
            </div>
          </div>

          <label htmlFor="q2">
            2. Rate your knowledge level in personal nutrition. 1
            being no knowledge and 10 being extremely knowledgeable.
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="q2_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q2_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q2_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q2_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q2_5">5</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q2_6">6</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q2_7">7</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q2_8">8</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q2_9">9</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q2_10">10</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="q2" id="q2_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="q2" id="q2_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="q2" id="q2_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="q2" id="q2_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="q2" id="q2_5" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="6" name="q2" id="q2_6" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="7" name="q2" id="q2_7" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="8" name="q2" id="q2_8" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="9" name="q2" id="q2_9" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="10" name="q2" id="q2_10" />
            </div>
          </div>

          <label htmlFor="q3">
            3. Rate how confident you are in your current fitness
            plan. 1 being no confidence and 10 being extremely
            confident.
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="q3_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q3_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q3_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q3_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q3_5">5</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q3_6">6</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q3_7">7</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q3_8">8</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q3_9">9</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q3_10">10</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="q3" id="q3_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="q3" id="q3_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="q3" id="q3_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="q3" id="q3_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="q3" id="q3_5" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="6" name="q3" id="q3_6" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="7" name="q3" id="q3_7" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="8" name="q3" id="q3_8" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="9" name="q3" id="q3_9" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="10" name="q3" id="q3_10" />
            </div>
          </div>

          <label htmlFor="q4">
            4. Rate how confident you are in your current nutrition
            plan. 1 being no confidence and 10 being extremely
            confident.
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="q4_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q4_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q4_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q4_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q4_5">5</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q4_6">6</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q4_7">7</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q4_8">8</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q4_9">9</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q4_10">10</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="q4" id="q4_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="q4" id="q4_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="q4" id="q4_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="q4" id="q4_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="q4" id="q4_5" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="6" name="q4" id="q4_6" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="7" name="q4" id="q4_7" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="8" name="q4" id="q4_8" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="9" name="q4" id="q4_9" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="10" name="q4" id="q4_10" />
            </div>
          </div>

          <label htmlFor="q5">
            5. Rate how confident you are in building a fitness plan
            for you and your family if applicable. 1 being no
            confidence and 10 being extremely confident.
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="q5_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q5_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q5_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q5_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q5_5">5</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q5_6">6</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q5_7">7</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q5_8">8</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q5_9">9</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q5_10">10</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="q5" id="q5_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="q5" id="q5_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="q5" id="q5_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="q5" id="q5_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="q5" id="q5_5" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="6" name="q5" id="q5_6" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="7" name="q5" id="q5_7" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="8" name="q5" id="q5_8" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="9" name="q5" id="q5_9" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="10" name="q5" id="q5_10" />
            </div>
          </div>

          <label htmlFor="q6">
            6. Rate how confident you are in building a nutrition plan
            for you and your family if applicable. 1 being no
            confidence and 10 being extremely confident.
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="q6_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q6_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q6_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q6_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q6_5">5</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q6_6">6</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q6_7">7</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q6_8">8</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q6_9">9</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q6_10">10</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="q6" id="q6_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="q6" id="q6_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="q6" id="q6_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="q6" id="q6_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="q6" id="q6_5" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="6" name="q6" id="q6_6" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="7" name="q6" id="q6_7" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="8" name="q6" id="q6_8" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="9" name="q6" id="q6_9" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="10" name="q6" id="q6_10" />
            </div>
          </div>

          <label htmlFor="q7">
            7. Rate how confident you are in meeting the Air Force
            fitness standards. 1 being no confidence and 10 being
            extremely confident.
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="q7_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q7_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q7_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q7_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q7_5">5</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q7_6">6</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q7_7">7</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q7_8">8</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q7_9">9</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q7_10">10</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="q7" id="q7_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="q7" id="q7_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="q7" id="q7_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="q7" id="q7_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="q7" id="q7_5" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="6" name="q7" id="q7_6" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="7" name="q7" id="q7_7" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="8" name="q7" id="q7_8" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="9" name="q7" id="q7_9" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="10" name="q7" id="q7_10" />
            </div>
          </div>

          <label htmlFor="q8">
            8. Rate how confident you are in the fitness and
            nutritional support offered at Kingsley Field. 1 being no
            confidence and 10 being extremely confident.
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="q8_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q8_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q8_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q8_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q8_5">5</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q8_6">6</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q8_7">7</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q8_8">8</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q8_9">9</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q8_10">10</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="q8" id="q8_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="q8" id="q8_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="q8" id="q8_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="q8" id="q8_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="q8" id="q8_5" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="6" name="q8" id="q8_6" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="7" name="q8" id="q8_7" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="8" name="q8" id="q8_8" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="9" name="q8" id="q8_9" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="10" name="q8" id="q8_10" />
            </div>
          </div>

          <label htmlFor="q9">
            9. How many days a month do you perform a healthy activity
            (running, walking, biking, gardening, sports, etc.) with
            someone outside your immediate family.
          </label>
          <div className="dropdown">
            <select name="days" id="days">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>

          <label htmlFor="q10">
            10. Has fitness or nutrition concerns negatively impacted
            your intentions on staying in the military
          </label>
          <div className="dropdown">
            <select name="yesorno" id="yesorno">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <label htmlFor="q11">
            11. Rate your likelihood of asking for nutrition help if
            needed. 1 being not likely and 10 being extremely likely.
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="q11_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q11_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q11_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q11_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q11_5">5</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q11_6">6</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q11_7">7</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q11_8">8</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q11_9">9</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q11_10">10</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="q11" id="q11_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="q11" id="q11_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="q11" id="q11_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="q11" id="q11_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="q11" id="q11_5" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="6" name="q11" id="q11_6" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="7" name="q11" id="q11_7" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="8" name="q11" id="q11_8" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="9" name="q11" id="q11_9" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="10" name="q11" id="q11_10" />
            </div>
          </div>

          <label htmlFor="q12">
            12. Rate your likelihood of asking for fitness help if
            needed. 1 being not likely and 10 being extremely likely.
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="q12_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q12_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q12_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q12_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q12_5">5</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q12_6">6</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q12_7">7</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q12_8">8</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q12_9">9</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="q12_10">10</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="q12" id="q12_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="q12" id="q12_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="q12" id="q12_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="q12" id="q12_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="q12" id="q12_5" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="6" name="q12" id="q12_6" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="7" name="q12" id="q12_7" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="8" name="q12" id="q12_8" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="9" name="q12" id="q12_9" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="10" name="q12" id="q12_10" />
            </div>
          </div>

          <button type="submit">Submit Metric Questions</button>
        </form>
      </div>
    </div>
  );
};

export default MetricQuestions;
