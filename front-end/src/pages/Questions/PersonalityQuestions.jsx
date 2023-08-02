import React, { useContext } from 'react';
import AuthContext from '../utils/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PersonalityQuestions = (props) => {
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
            <h2>Personality Questions</h2>
          </div>
          <div className="descr">
            {' '}
            <h3>
              Describe yourself as you generally are now, not as you
              wish to be in the future. Describe yourself as you
              honestly see yourself, in relation to other people you
              know of the same sex as you are, and roughly your same
              age. So that you can describe yourself in an honest
              manner, your responses will be kept in absolute
              confidence. Indicate for each statement whether it is 1.
              Very Inaccurate, 2. Moderately Inaccurate, 3. Neither
              Accurate Nor Inaccurate, 4. Moderately Accurate, or 5.
              Very Accurate as a description of you.
            </h3>
          </div>

          <label htmlFor="qp1">1. Am the life of the party</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp1_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp1_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp1_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp1_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp1_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp1" id="qp1_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp1" id="qp1_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp1" id="qp1_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp1" id="qp1_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp1" id="qp1_5" />
            </div>
          </div>

          <label htmlFor="qp2">
            2. Feel little concern for others
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp2_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp2_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp2_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp2_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp2_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp2" id="qp2_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp2" id="qp2_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp2" id="qp2_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp2" id="qp2_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp2" id="qp2_5" />
            </div>
          </div>

          <label htmlFor="qp3">3. Am always prepared</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp3_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp3_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp3_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp3_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp3_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp3" id="qp3_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp3" id="qp3_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp3" id="qp3_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp3" id="qp3_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp3" id="qp3_5" />
            </div>
          </div>

          <label htmlFor="qp4">4. Get stressed out easily</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp4_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp4_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp4_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp4_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp4_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp4" id="qp4_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp4" id="qp4_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp4" id="qp4_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp4" id="qp4_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp4" id="qp4_5" />
            </div>
          </div>

          <label htmlFor="qp5">5. Have a rich vocabulary</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp5_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp5_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp5_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp5_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp5_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp5" id="qp5_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp5" id="qp5_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp5" id="qp5_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp5" id="qp5_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp5" id="qp5_5" />
            </div>
          </div>

          <label htmlFor="qp6">6. Don't talk a lot</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp6_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp6_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp6_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp6_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp6_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp6" id="qp6_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp6" id="qp6_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp6" id="qp6_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp6" id="qp6_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp6" id="qp6_5" />
            </div>
          </div>

          <label htmlFor="qp6">7. Am interested in people</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp7_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp7_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp7_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp7_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp7_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp7" id="qp7_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp7" id="qp7_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp7" id="qp7_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp7" id="qp7_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp7" id="qp7_5" />
            </div>
          </div>

          <label htmlFor="qp6">8. Leave my belongings around</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp8_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp8_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp8_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp8_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp8_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp8" id="qp8_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp8" id="qp8_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp8" id="qp8_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp8" id="qp8_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp8" id="qp8_5" />
            </div>
          </div>

          <label htmlFor="qp6">9. Am relaxed most of the time</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp9_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp9_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp9_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp9_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp9_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp9" id="qp9_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp9" id="qp9_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp9" id="qp9_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp9" id="qp9_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp9" id="qp9_5" />
            </div>
          </div>

          <label htmlFor="qp10">
            10. Have difficulty understanding abstract ideas
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp10_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp10_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp10_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp10_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp10_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp10" id="qp10_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp10" id="qp10_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp10" id="qp10_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp10" id="qp10_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp10" id="qp10_5" />
            </div>
          </div>

          <label htmlFor="qp11">
            11. Feel comfortable around people
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp11_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp11_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp11_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp11_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp11_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp11" id="qp11_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp11" id="qp11_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp11" id="qp11_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp11" id="qp11_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp11" id="qp11_5" />
            </div>
          </div>

          <label htmlFor="qp12">12. Insult people</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp12_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp12_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp12_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp12_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp12_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp12" id="qp12_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp12" id="qp12_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp12" id="qp12_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp12" id="qp12_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp12" id="qp12_5" />
            </div>
          </div>

          <label htmlFor="qp13">13. Pay attention to details</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp13_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp13_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp13_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp13_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp13_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp13" id="qp13_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp13" id="qp13_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp13" id="qp13_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp13" id="qp13_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp13" id="qp13_5" />
            </div>
          </div>

          <label htmlFor="qp14">14. Worry about things</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp14_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp14_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp14_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp14_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp14_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp14" id="qp14_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp14" id="qp14_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp14" id="qp14_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp14" id="qp14_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp14" id="qp14_5" />
            </div>
          </div>

          <label htmlFor="qp15">15. Have a vivid imagination</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp15_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp15_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp15_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp15_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp15_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp15" id="qp15_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp15" id="qp15_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp15" id="qp15_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp15" id="qp15_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp15" id="qp15_5" />
            </div>
          </div>

          <label htmlFor="qp16">16. Keep in the background</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp16_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp16_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp16_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp16_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp16_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp16" id="qp16_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp16" id="qp16_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp16" id="qp16_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp16" id="qp16_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp16" id="qp16_5" />
            </div>
          </div>

          <label htmlFor="qp17">
            17. Sympathize with others' feelings
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp17_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp17_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp17_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp17_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp17_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp17" id="qp17_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp17" id="qp17_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp17" id="qp17_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp17" id="qp17_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp17" id="qp17_5" />
            </div>
          </div>

          <label htmlFor="qp18">18. Make a mess of things</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp18_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp18_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp18_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp18_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp18_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp18" id="qp18_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp18" id="qp18_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp18" id="qp18_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp18" id="qp18_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp18" id="qp18_5" />
            </div>
          </div>

          <label htmlFor="qp19">19. Seldom feel blue</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp19_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp19_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp19_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp19_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp19_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp19" id="qp19_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp19" id="qp19_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp19" id="qp19_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp19" id="qp19_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp19" id="qp19_5" />
            </div>
          </div>

          <label htmlFor="qp20">
            20. Am not interested in abstract ideas
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp20_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp20_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp20_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp20_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp20_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp20" id="qp20_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp20" id="qp20_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp20" id="qp20_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp20" id="qp20_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp20" id="qp20_5" />
            </div>
          </div>

          <label htmlFor="qp21">21. Start conversations</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp21_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp21_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp21_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp21_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp21_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp21" id="qp21_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp21" id="qp21_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp21" id="qp21_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp21" id="qp21_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp21" id="qp21_5" />
            </div>
          </div>

          <label htmlFor="qp22">
            22. Am not interested in other people's problems
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp22_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp22_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp22_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp22_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp22_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp22" id="qp22_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp22" id="qp22_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp22" id="qp22_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp22" id="qp22_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp22" id="qp22_5" />
            </div>
          </div>

          <label htmlFor="qp23">23. Get chores done right away</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp23_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp23_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp23_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp23_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp23_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp23" id="qp23_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp23" id="qp23_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp23" id="qp23_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp23" id="qp23_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp23" id="qp23_5" />
            </div>
          </div>

          <label htmlFor="qp24">24. Am easily disturbed</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp24_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp24_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp24_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp24_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp24_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp24" id="qp24_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp24" id="qp24_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp24" id="qp24_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp24" id="qp24_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp24" id="qp24_5" />
            </div>
          </div>

          <label htmlFor="qp25">25. Have excellent ideas</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp25_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp25_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp25_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp25_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp25_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp25" id="qp25_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp25" id="qp25_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp25" id="qp25_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp25" id="qp25_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp25" id="qp25_5" />
            </div>
          </div>

          <label htmlFor="qp26">26. Have little to say</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp26_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp26_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp26_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp26_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp26_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp26" id="qp26_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp26" id="qp26_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp26" id="qp26_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp26" id="qp26_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp26" id="qp26_5" />
            </div>
          </div>

          <label htmlFor="qp27">27. Have a soft heart</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp27_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp27_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp27_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp27_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp27_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp27" id="qp27_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp27" id="qp27_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp27" id="qp27_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp27" id="qp27_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp27" id="qp27_5" />
            </div>
          </div>

          <label htmlFor="qp28">
            28. Often forget to put things back in their proper place
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp28_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp28_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp28_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp28_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp28_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp28" id="qp28_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp28" id="qp28_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp28" id="qp28_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp28" id="qp28_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp28" id="qp28_5" />
            </div>
          </div>

          <label htmlFor="qp29">29. Get upset easily</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp29_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp29_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp29_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp29_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp29_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp29" id="qp29_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp29" id="qp29_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp29" id="qp29_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp29" id="qp29_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp29" id="qp29_5" />
            </div>
          </div>

          <label htmlFor="qp30">
            30. Do not have a good imagination
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp30_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp30_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp30_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp30_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp30_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp30" id="qp30_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp30" id="qp30_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp30" id="qp30_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp30" id="qp30_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp30" id="qp30_5" />
            </div>
          </div>

          <label htmlFor="qp31">
            31. Talk to a lot of different people at parties
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp31_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp31_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp31_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp31_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp31_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp31" id="qp31_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp31" id="qp31_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp31" id="qp31_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp31" id="qp31_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp31" id="qp31_5" />
            </div>
          </div>

          <label htmlFor="qp32">
            32. Am not really interested in others
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp32_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp32_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp32_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp32_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp32_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp32" id="qp32_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp32" id="qp32_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp32" id="qp32_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp32" id="qp32_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp32" id="qp32_5" />
            </div>
          </div>

          <label htmlFor="qp33">33. Like order</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp33_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp33_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp33_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp33_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp33_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp33" id="qp33_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp33" id="qp33_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp33" id="qp33_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp33" id="qp33_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp33" id="qp33_5" />
            </div>
          </div>

          <label htmlFor="qp34">34. Change my mood a lot</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp34_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp34_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp34_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp34_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp34_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp34" id="qp34_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp34" id="qp34_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp34" id="qp34_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp34" id="qp34_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp34" id="qp34_5" />
            </div>
          </div>

          <label htmlFor="qp35">
            35. Am quick to understand things
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp35_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp35_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp35_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp35_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp35_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp35" id="qp35_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp35" id="qp35_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp35" id="qp35_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp35" id="qp35_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp35" id="qp35_5" />
            </div>
          </div>

          <label htmlFor="qp36">
            36. Don't like to draw attention to myself
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp36_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp36_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp36_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp36_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp36_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp36" id="qp36_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp36" id="qp36_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp36" id="qp36_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp36" id="qp36_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp36" id="qp36_5" />
            </div>
          </div>

          <label htmlFor="qp37">37. Take time out for others</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp37_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp37_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp37_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp37_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp37_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp37" id="qp37_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp37" id="qp37_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp37" id="qp37_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp37" id="qp37_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp37" id="qp37_5" />
            </div>
          </div>

          <label htmlFor="qp39">38. Shirk my duties</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp39_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp39_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp39_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp39_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp39_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp39" id="qp39_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp39" id="qp39_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp39" id="qp39_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp39" id="qp39_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp39" id="qp39_5" />
            </div>
          </div>

          <label htmlFor="qp39">39. Have frequent mood swings</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp39_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp39_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp39_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp39_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp39_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp39" id="qp39_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp39" id="qp39_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp39" id="qp39_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp39" id="qp39_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp39" id="qp39_5" />
            </div>
          </div>

          <label htmlFor="qp40">40. Use difficult words</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp40_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp40_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp40_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp40_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp40_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp40" id="qp40_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp40" id="qp40_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp40" id="qp40_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp40" id="qp40_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp40" id="qp40_5" />
            </div>
          </div>

          <label htmlFor="qp41">
            41. Don't mind being the center of attention
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp41_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp41_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp41_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp41_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp41_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp41" id="qp41_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp41" id="qp41_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp41" id="qp41_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp41" id="qp41_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp41" id="qp41_5" />
            </div>
          </div>

          <label htmlFor="qp42">42. Feel others' emotions</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp42_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp42_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp42_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp42_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp42_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp42" id="qp42_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp42" id="qp42_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp42" id="qp42_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp42" id="qp42_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp42" id="qp42_5" />
            </div>
          </div>

          <label htmlFor="qp43">43. Follow a schedule</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp43_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp43_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp43_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp43_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp43_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp43" id="qp43_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp43" id="qp43_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp43" id="qp43_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp43" id="qp43_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp43" id="qp43_5" />
            </div>
          </div>

          <label htmlFor="qp44">44. Get irritated easily</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp44_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp44_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp44_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp44_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp44_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp44" id="qp44_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp44" id="qp44_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp44" id="qp44_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp44" id="qp44_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp44" id="qp44_5" />
            </div>
          </div>

          <label htmlFor="qp45">
            45. Spend time reflecting on things
          </label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp45_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp45_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp45_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp45_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp45_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp45" id="qp45_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp45" id="qp45_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp45" id="qp45_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp45" id="qp45_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp45" id="qp45_5" />
            </div>
          </div>

          <label htmlFor="qp46">46. Am quiet around strangers</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp46_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp46_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp46_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp46_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp46_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp46" id="qp46_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp46" id="qp46_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp46" id="qp46_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp46" id="qp46_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp46" id="qp46_5" />
            </div>
          </div>

          <label htmlFor="qp47">47. Make people feel at ease</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp47_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp47_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp47_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp47_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp47_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp47" id="qp47_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp47" id="qp47_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp47" id="qp47_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp47" id="qp47_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp47" id="qp47_5" />
            </div>
          </div>

          <label htmlFor="qp48">48. Am exacting in my work</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp48_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp48_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp48_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp48_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp48_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp48" id="qp48_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp48" id="qp48_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp48" id="qp48_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp48" id="qp48_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp48" id="qp48_5" />
            </div>
          </div>

          <label htmlFor="qp49">49. Often feel blue</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp49_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp49_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp49_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp49_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp49_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp49" id="qp49_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp49" id="qp49_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp49" id="qp49_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp49" id="qp49_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp49" id="qp49_5" />
            </div>
          </div>

          <label htmlFor="qp50">50. Am full of ideas</label>
          <div className="answers1-10">
            <div className="answerchoicetext">
              <label htmlFor="qp50_1">1</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp50_2">2</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp50_3">3</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp50_4">4</label>
            </div>
            <div className="answerchoicetext">
              <label htmlFor="qp50_5">5</label>
            </div>
          </div>
          <div className="buttons1-10">
            <div className="answerchoice">
              <input type="radio" value="1" name="qp50" id="qp50_1" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="2" name="qp50" id="qp50_2" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="3" name="qp50" id="qp50_3" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="4" name="qp50" id="qp50_4" />
            </div>
            <div className="answerchoice">
              <input type="radio" value="5" name="qp50" id="qp50_5" />
            </div>
          </div>

          <button
            onClick={() => navigate('/fitness-nutrition-questions')}
          >
            Submit Personality Questions
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalityQuestions;
