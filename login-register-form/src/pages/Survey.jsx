import React, { useState } from "react";

// component that is imported by main App.js file to display
export const Survey = (props) => {

    // update functionionality for email and password
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // action when submitting form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Thanks, " + email + "! Sucessfully Submitted.");
    }

    // what is displayed - return value
    return (
        <div className="App">
        <div className="auth-form-container">
            <h1>Wellness Onboarding Survey</h1>
            
            <form className="questionnaire" onSubmit={handleSubmit}>
                <div className="header"><h2>Metric Questions</h2></div>

                    <label htmlFor="q1">1. Rate your knowledge level in personal fitness. 1 being no knowledge and 10 being extremely knowledgeable.</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="q1_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="q1_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="q1_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="q1_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="q1_5">5</label></div>
                        <div className="answerchoicetext"><label htmlFor="q1_6">6</label></div>
                        <div className="answerchoicetext"><label htmlFor="q1_7">7</label></div>
                        <div className="answerchoicetext"><label htmlFor="q1_8">8</label></div>
                        <div className="answerchoicetext"><label htmlFor="q1_9">9</label></div>
                        <div className="answerchoicetext"><label htmlFor="q1_10">10</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="q1" id="q1_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="q1" id="q1_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="q1" id="q1_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="q1" id="q1_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="q1" id="q1_5"/></div>
                        <div className="answerchoice"><input type="radio" value="6" name="q1" id="q1_6"/></div>
                        <div className="answerchoice"><input type="radio" value="7" name="q1" id="q1_7"/></div>
                        <div className="answerchoice"><input type="radio" value="8" name="q1" id="q1_8"/></div>
                        <div className="answerchoice"><input type="radio" value="9" name="q1" id="q1_9"/></div>
                        <div className="answerchoice"><input type="radio" value="10" name="q1" id="q1_10"/></div>
                    </div>
                   

                    <label htmlFor="q2">2. Rate your knowledge level in personal nutrition.  1 being no knowledge and 10 being extremely knowledgeable.</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="q2_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="q2_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="q2_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="q2_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="q2_5">5</label></div>
                        <div className="answerchoicetext"><label htmlFor="q2_6">6</label></div>
                        <div className="answerchoicetext"><label htmlFor="q2_7">7</label></div>
                        <div className="answerchoicetext"><label htmlFor="q2_8">8</label></div>
                        <div className="answerchoicetext"><label htmlFor="q2_9">9</label></div>
                        <div className="answerchoicetext"><label htmlFor="q2_10">10</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="q2" id="q2_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="q2" id="q2_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="q2" id="q2_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="q2" id="q2_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="q2" id="q2_5"/></div>
                        <div className="answerchoice"><input type="radio" value="6" name="q2" id="q2_6"/></div>
                        <div className="answerchoice"><input type="radio" value="7" name="q2" id="q2_7"/></div>
                        <div className="answerchoice"><input type="radio" value="8" name="q2" id="q2_8"/></div>
                        <div className="answerchoice"><input type="radio" value="9" name="q2" id="q2_9"/></div>
                        <div className="answerchoice"><input type="radio" value="10" name="q2" id="q2_10"/></div>
                    </div>


                    <label htmlFor="q3">3. Rate how confident you are in your current fitness plan. 1 being no confidence and 10 being extremely confident.</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="q3_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="q3_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="q3_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="q3_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="q3_5">5</label></div>
                        <div className="answerchoicetext"><label htmlFor="q3_6">6</label></div>
                        <div className="answerchoicetext"><label htmlFor="q3_7">7</label></div>
                        <div className="answerchoicetext"><label htmlFor="q3_8">8</label></div>
                        <div className="answerchoicetext"><label htmlFor="q3_9">9</label></div>
                        <div className="answerchoicetext"><label htmlFor="q3_10">10</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="q3" id="q3_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="q3" id="q3_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="q3" id="q3_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="q3" id="q3_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="q3" id="q3_5"/></div>
                        <div className="answerchoice"><input type="radio" value="6" name="q3" id="q3_6"/></div>
                        <div className="answerchoice"><input type="radio" value="7" name="q3" id="q3_7"/></div>
                        <div className="answerchoice"><input type="radio" value="8" name="q3" id="q3_8"/></div>
                        <div className="answerchoice"><input type="radio" value="9" name="q3" id="q3_9"/></div>
                        <div className="answerchoice"><input type="radio" value="10" name="q3" id="q3_10"/></div>
                    </div>

                    <label htmlFor="q4">4. Rate how confident you are in your current nutrition plan. 1 being no confidence and 10 being extremely confident.</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="q4_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="q4_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="q4_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="q4_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="q4_5">5</label></div>
                        <div className="answerchoicetext"><label htmlFor="q4_6">6</label></div>
                        <div className="answerchoicetext"><label htmlFor="q4_7">7</label></div>
                        <div className="answerchoicetext"><label htmlFor="q4_8">8</label></div>
                        <div className="answerchoicetext"><label htmlFor="q4_9">9</label></div>
                        <div className="answerchoicetext"><label htmlFor="q4_10">10</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="q4" id="q4_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="q4" id="q4_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="q4" id="q4_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="q4" id="q4_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="q4" id="q4_5"/></div>
                        <div className="answerchoice"><input type="radio" value="6" name="q4" id="q4_6"/></div>
                        <div className="answerchoice"><input type="radio" value="7" name="q4" id="q4_7"/></div>
                        <div className="answerchoice"><input type="radio" value="8" name="q4" id="q4_8"/></div>
                        <div className="answerchoice"><input type="radio" value="9" name="q4" id="q4_9"/></div>
                        <div className="answerchoice"><input type="radio" value="10" name="q4" id="q4_10"/></div>
                    </div>

                    <label htmlFor="q5">5. Rate how confident you are in building a fitness plan for you and your family if applicable. 1 being no confidence and 10 being extremely confident.</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="q5_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="q5_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="q5_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="q5_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="q5_5">5</label></div>
                        <div className="answerchoicetext"><label htmlFor="q5_6">6</label></div>
                        <div className="answerchoicetext"><label htmlFor="q5_7">7</label></div>
                        <div className="answerchoicetext"><label htmlFor="q5_8">8</label></div>
                        <div className="answerchoicetext"><label htmlFor="q5_9">9</label></div>
                        <div className="answerchoicetext"><label htmlFor="q5_10">10</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="q5" id="q5_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="q5" id="q5_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="q5" id="q5_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="q5" id="q5_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="q5" id="q5_5"/></div>
                        <div className="answerchoice"><input type="radio" value="6" name="q5" id="q5_6"/></div>
                        <div className="answerchoice"><input type="radio" value="7" name="q5" id="q5_7"/></div>
                        <div className="answerchoice"><input type="radio" value="8" name="q5" id="q5_8"/></div>
                        <div className="answerchoice"><input type="radio" value="9" name="q5" id="q5_9"/></div>
                        <div className="answerchoice"><input type="radio" value="10" name="q5" id="q5_10"/></div>
                    </div>
                    

                    <label htmlFor="q6">6. Rate how confident you are in building a nutrition plan for you and your family if applicable. 1 being no confidence and 10 being extremely confident.</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="q6_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="q6_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="q6_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="q6_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="q6_5">5</label></div>
                        <div className="answerchoicetext"><label htmlFor="q6_6">6</label></div>
                        <div className="answerchoicetext"><label htmlFor="q6_7">7</label></div>
                        <div className="answerchoicetext"><label htmlFor="q6_8">8</label></div>
                        <div className="answerchoicetext"><label htmlFor="q6_9">9</label></div>
                        <div className="answerchoicetext"><label htmlFor="q6_10">10</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="q6" id="q6_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="q6" id="q6_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="q6" id="q6_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="q6" id="q6_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="q6" id="q6_5"/></div>
                        <div className="answerchoice"><input type="radio" value="6" name="q6" id="q6_6"/></div>
                        <div className="answerchoice"><input type="radio" value="7" name="q6" id="q6_7"/></div>
                        <div className="answerchoice"><input type="radio" value="8" name="q6" id="q6_8"/></div>
                        <div className="answerchoice"><input type="radio" value="9" name="q6" id="q6_9"/></div>
                        <div className="answerchoice"><input type="radio" value="10" name="q6" id="q6_10"/></div>
                    </div>

                    <label htmlFor="q7">7.  Rate how confident you are in meeting the Air Force fitness standards. 1 being no confidence and 10 being extremely confident.</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="q7_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="q7_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="q7_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="q7_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="q7_5">5</label></div>
                        <div className="answerchoicetext"><label htmlFor="q7_6">6</label></div>
                        <div className="answerchoicetext"><label htmlFor="q7_7">7</label></div>
                        <div className="answerchoicetext"><label htmlFor="q7_8">8</label></div>
                        <div className="answerchoicetext"><label htmlFor="q7_9">9</label></div>
                        <div className="answerchoicetext"><label htmlFor="q7_10">10</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="q7" id="q7_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="q7" id="q7_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="q7" id="q7_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="q7" id="q7_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="q7" id="q7_5"/></div>
                        <div className="answerchoice"><input type="radio" value="6" name="q7" id="q7_6"/></div>
                        <div className="answerchoice"><input type="radio" value="7" name="q7" id="q7_7"/></div>
                        <div className="answerchoice"><input type="radio" value="8" name="q7" id="q7_8"/></div>
                        <div className="answerchoice"><input type="radio" value="9" name="q7" id="q7_9"/></div>
                        <div className="answerchoice"><input type="radio" value="10" name="q7" id="q7_10"/></div>
                    </div>

                    <label htmlFor="q8">8. Rate how confident you are in the fitness and nutritional support offered at Kingsley Field. 1 being no confidence and 10 being extremely confident.</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="q8_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="q8_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="q8_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="q8_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="q8_5">5</label></div>
                        <div className="answerchoicetext"><label htmlFor="q8_6">6</label></div>
                        <div className="answerchoicetext"><label htmlFor="q8_7">7</label></div>
                        <div className="answerchoicetext"><label htmlFor="q8_8">8</label></div>
                        <div className="answerchoicetext"><label htmlFor="q8_9">9</label></div>
                        <div className="answerchoicetext"><label htmlFor="q8_10">10</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="q8" id="q8_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="q8" id="q8_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="q8" id="q8_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="q8" id="q8_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="q8" id="q8_5"/></div>
                        <div className="answerchoice"><input type="radio" value="6" name="q8" id="q8_6"/></div>
                        <div className="answerchoice"><input type="radio" value="7" name="q8" id="q8_7"/></div>
                        <div className="answerchoice"><input type="radio" value="8" name="q8" id="q8_8"/></div>
                        <div className="answerchoice"><input type="radio" value="9" name="q8" id="q8_9"/></div>
                        <div className="answerchoice"><input type="radio" value="10" name="q8" id="q8_10"/></div>
                    </div>

                    <label htmlFor="q9">9. How many days a month do you perform a healthy activity (running, walking, biking, gardening, sports, etc.) with someone outside your immediate family.</label>
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

                    <label htmlFor="q10">10. Has fitness or nutrition concerns negatively impacted your intentions on staying in the military</label>
                    <div className="dropdown">
                        <select name="yesorno" id="yesorno">
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                    </div>

                    <label htmlFor="q11">11. Rate your likelihood of asking for nutrition help if needed.  1 being not likely and 10 being extremely likely.</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="q11_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="q11_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="q11_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="q11_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="q11_5">5</label></div>
                        <div className="answerchoicetext"><label htmlFor="q11_6">6</label></div>
                        <div className="answerchoicetext"><label htmlFor="q11_7">7</label></div>
                        <div className="answerchoicetext"><label htmlFor="q11_8">8</label></div>
                        <div className="answerchoicetext"><label htmlFor="q11_9">9</label></div>
                        <div className="answerchoicetext"><label htmlFor="q11_10">10</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="q11" id="q11_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="q11" id="q11_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="q11" id="q11_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="q11" id="q11_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="q11" id="q11_5"/></div>
                        <div className="answerchoice"><input type="radio" value="6" name="q11" id="q11_6"/></div>
                        <div className="answerchoice"><input type="radio" value="7" name="q11" id="q11_7"/></div>
                        <div className="answerchoice"><input type="radio" value="8" name="q11" id="q11_8"/></div>
                        <div className="answerchoice"><input type="radio" value="9" name="q11" id="q11_9"/></div>
                        <div className="answerchoice"><input type="radio" value="10" name="q11" id="q11_10"/></div>
                    </div>

                    <label htmlFor="q12">12. Rate your likelihood of asking for fitness help if needed.  1 being not likely and 10 being extremely likely.</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="q12_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="q12_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="q12_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="q12_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="q12_5">5</label></div>
                        <div className="answerchoicetext"><label htmlFor="q12_6">6</label></div>
                        <div className="answerchoicetext"><label htmlFor="q12_7">7</label></div>
                        <div className="answerchoicetext"><label htmlFor="q12_8">8</label></div>
                        <div className="answerchoicetext"><label htmlFor="q12_9">9</label></div>
                        <div className="answerchoicetext"><label htmlFor="q12_10">10</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="q12" id="q12_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="q12" id="q12_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="q12" id="q12_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="q12" id="q12_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="q12" id="q12_5"/></div>
                        <div className="answerchoice"><input type="radio" value="6" name="q12" id="q12_6"/></div>
                        <div className="answerchoice"><input type="radio" value="7" name="q12" id="q12_7"/></div>
                        <div className="answerchoice"><input type="radio" value="8" name="q12" id="q12_8"/></div>
                        <div className="answerchoice"><input type="radio" value="9" name="q12" id="q12_9"/></div>
                        <div className="answerchoice"><input type="radio" value="10" name="q12" id="q12_10"/></div>
                    </div>

                    <div className="header"><h2>Personalty Questions</h2></div>
                    <div className="descr"> <h3>Describe yourself as you generally are now, not as you wish to be in the future. Describe yourself as you honestly 
                        see yourself, in relation to other people you know of the same sex as you are, and roughly your same age. So that you 
                        can describe yourself in an honest manner, your responses will be kept in absolute confidence. Indicate for each 
                        statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, 3. Neither Accurate Nor Inaccurate, 4. Moderately 
                        Accurate, or 5. Very Accurate as a description of you.
                    </h3></div>

                    <label htmlFor="qp1">1. Am the life of the party</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp1_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp1_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp1_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp1_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp1_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp1" id="qp1_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp1" id="qp1_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp1" id="qp1_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp1" id="qp1_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp1" id="qp1_5"/></div>
                    </div>

                    <label htmlFor="qp2">2. Feel little concern for others</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp2_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp2_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp2_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp2_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp2_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp2" id="qp2_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp2" id="qp2_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp2" id="qp2_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp2" id="qp2_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp2" id="qp2_5"/></div>
                    </div>

                    <label htmlFor="qp3">3. Am always prepared</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp3_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp3_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp3_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp3_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp3_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp3" id="qp3_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp3" id="qp3_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp3" id="qp3_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp3" id="qp3_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp3" id="qp3_5"/></div>
                    </div>

                    <label htmlFor="qp4">4. Get stressed out easily</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp4_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp4_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp4_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp4_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp4_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp4" id="qp4_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp4" id="qp4_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp4" id="qp4_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp4" id="qp4_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp4" id="qp4_5"/></div>
                    </div>

                    <label htmlFor="qp5">5. Have a rich vocabulary</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp5_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp5_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp5_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp5_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp5_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp5" id="qp5_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp5" id="qp5_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp5" id="qp5_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp5" id="qp5_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp5" id="qp5_5"/></div>
                    </div>

                    <label htmlFor="qp6">6. Don't talk a lot</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp6_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp6_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp6_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp6_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp6_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp6" id="qp6_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp6" id="qp6_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp6" id="qp6_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp6" id="qp6_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp6" id="qp6_5"/></div>
                    </div>

                    <label htmlFor="qp6">7. Am interested in people</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp7_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp7_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp7_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp7_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp7_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp7" id="qp7_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp7" id="qp7_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp7" id="qp7_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp7" id="qp7_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp7" id="qp7_5"/></div>
                    </div>

                    <label htmlFor="qp6">8. Leave my belongings around</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp8_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp8_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp8_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp8_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp8_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp8" id="qp8_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp8" id="qp8_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp8" id="qp8_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp8" id="qp8_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp8" id="qp8_5"/></div>
                    </div>

                    <label htmlFor="qp6">9. Am relaxed most of the time</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp9_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp9_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp9_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp9_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp9_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp9" id="qp9_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp9" id="qp9_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp9" id="qp9_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp9" id="qp9_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp9" id="qp9_5"/></div>
                    </div>

                    <label htmlFor="qp10">10. Have difficulty understanding abstract ideas</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp10_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp10_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp10_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp10_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp10_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp10" id="qp10_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp10" id="qp10_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp10" id="qp10_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp10" id="qp10_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp10" id="qp10_5"/></div>
                    </div>

                    <label htmlFor="qp11">11. Feel comfortable around people</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp11_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp11_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp11_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp11_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp11_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp11" id="qp11_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp11" id="qp11_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp11" id="qp11_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp11" id="qp11_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp11" id="qp11_5"/></div>
                    </div>

                    <label htmlFor="qp12">12. Insult people</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp12_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp12_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp12_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp12_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp12_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp12" id="qp12_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp12" id="qp12_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp12" id="qp12_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp12" id="qp12_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp12" id="qp12_5"/></div>
                    </div>

                    <label htmlFor="qp13">13. Pay attention to details</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp13_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp13_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp13_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp13_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp13_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp13" id="qp13_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp13" id="qp13_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp13" id="qp13_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp13" id="qp13_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp13" id="qp13_5"/></div>
                    </div>

                    <label htmlFor="qp14">14. Worry about things</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp14_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp14_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp14_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp14_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp14_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp14" id="qp14_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp14" id="qp14_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp14" id="qp14_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp14" id="qp14_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp14" id="qp14_5"/></div>
                    </div>

                    <label htmlFor="qp15">15. Have a vivid imagination</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp15_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp15_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp15_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp15_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp15_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp15" id="qp15_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp15" id="qp15_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp15" id="qp15_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp15" id="qp15_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp15" id="qp15_5"/></div>
                    </div>

                    <label htmlFor="qp16">16. Keep in the background</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp16_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp16_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp16_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp16_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp16_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp16" id="qp16_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp16" id="qp16_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp16" id="qp16_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp16" id="qp16_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp16" id="qp16_5"/></div>
                    </div>

                    <label htmlFor="qp17">17. Sympathize with others' feelings</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp17_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp17_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp17_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp17_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp17_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp17" id="qp17_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp17" id="qp17_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp17" id="qp17_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp17" id="qp17_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp17" id="qp17_5"/></div>
                    </div>

                    <label htmlFor="qp18">18. Make a mess of things</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp18_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp18_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp18_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp18_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp18_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp18" id="qp18_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp18" id="qp18_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp18" id="qp18_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp18" id="qp18_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp18" id="qp18_5"/></div>
                    </div>

                    <label htmlFor="qp19">19. Seldom feel blue</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp19_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp19_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp19_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp19_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp19_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp19" id="qp19_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp19" id="qp19_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp19" id="qp19_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp19" id="qp19_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp19" id="qp19_5"/></div>
                    </div>

                    <label htmlFor="qp20">20. Am not interested in abstract ideas</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp20_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp20_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp20_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp20_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp20_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp20" id="qp20_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp20" id="qp20_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp20" id="qp20_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp20" id="qp20_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp20" id="qp20_5"/></div>
                    </div>

                    <label htmlFor="qp21">21. Start conversations</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp21_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp21_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp21_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp21_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp21_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp21" id="qp21_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp21" id="qp21_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp21" id="qp21_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp21" id="qp21_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp21" id="qp21_5"/></div>
                    </div>

                    <label htmlFor="qp22">22. Am not interested in other people's problems</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp22_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp22_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp22_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp22_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp22_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp22" id="qp22_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp22" id="qp22_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp22" id="qp22_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp22" id="qp22_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp22" id="qp22_5"/></div>
                    </div>

                    <label htmlFor="qp23">23. Get chores done right away</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp23_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp23_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp23_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp23_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp23_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp23" id="qp23_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp23" id="qp23_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp23" id="qp23_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp23" id="qp23_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp23" id="qp23_5"/></div>
                    </div>

                    <label htmlFor="qp24">24. Am easily disturbed</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp24_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp24_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp24_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp24_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp24_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp24" id="qp24_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp24" id="qp24_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp24" id="qp24_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp24" id="qp24_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp24" id="qp24_5"/></div>
                    </div>

                    <label htmlFor="qp25">25. Have excellent ideas</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp25_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp25_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp25_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp25_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp25_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp25" id="qp25_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp25" id="qp25_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp25" id="qp25_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp25" id="qp25_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp25" id="qp25_5"/></div>
                    </div>

                    <label htmlFor="qp26">26. Have little to say</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp26_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp26_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp26_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp26_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp26_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp26" id="qp26_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp26" id="qp26_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp26" id="qp26_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp26" id="qp26_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp26" id="qp26_5"/></div>
                    </div>

                    <label htmlFor="qp27">27. Have a soft heart</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp27_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp27_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp27_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp27_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp27_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp27" id="qp27_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp27" id="qp27_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp27" id="qp27_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp27" id="qp27_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp27" id="qp27_5"/></div>
                    </div>

                    <label htmlFor="qp28">28. Often forget to put things back in their proper place</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp28_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp28_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp28_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp28_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp28_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp28" id="qp28_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp28" id="qp28_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp28" id="qp28_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp28" id="qp28_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp28" id="qp28_5"/></div>
                    </div>

                    <label htmlFor="qp29">29. Get upset easily</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp29_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp29_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp29_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp29_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp29_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp29" id="qp29_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp29" id="qp29_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp29" id="qp29_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp29" id="qp29_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp29" id="qp29_5"/></div>
                    </div>

                    <label htmlFor="qp30">30. Do not have a good imagination</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp30_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp30_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp30_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp30_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp30_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp30" id="qp30_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp30" id="qp30_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp30" id="qp30_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp30" id="qp30_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp30" id="qp30_5"/></div>
                    </div>

                    <label htmlFor="qp31">31. Talk to a lot of different people at parties</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp31_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp31_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp31_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp31_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp31_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp31" id="qp31_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp31" id="qp31_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp31" id="qp31_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp31" id="qp31_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp31" id="qp31_5"/></div>
                    </div>

                    <label htmlFor="qp32">32. Am not really interested in others</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp32_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp32_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp32_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp32_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp32_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp32" id="qp32_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp32" id="qp32_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp32" id="qp32_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp32" id="qp32_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp32" id="qp32_5"/></div>
                    </div>

                    <label htmlFor="qp33">33. Like order</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp33_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp33_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp33_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp33_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp33_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp33" id="qp33_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp33" id="qp33_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp33" id="qp33_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp33" id="qp33_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp33" id="qp33_5"/></div>
                    </div>

                    <label htmlFor="qp34">34. Change my mood a lot</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp34_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp34_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp34_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp34_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp34_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp34" id="qp34_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp34" id="qp34_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp34" id="qp34_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp34" id="qp34_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp34" id="qp34_5"/></div>
                    </div>

                    <label htmlFor="qp35">35. Am quick to understand things</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp35_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp35_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp35_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp35_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp35_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp35" id="qp35_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp35" id="qp35_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp35" id="qp35_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp35" id="qp35_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp35" id="qp35_5"/></div>
                    </div>

                    <label htmlFor="qp36">36. Don't like to draw attention to myself</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp36_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp36_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp36_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp36_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp36_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp36" id="qp36_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp36" id="qp36_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp36" id="qp36_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp36" id="qp36_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp36" id="qp36_5"/></div>
                    </div>

                    <label htmlFor="qp37">37. Take time out for others</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp37_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp37_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp37_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp37_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp37_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp37" id="qp37_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp37" id="qp37_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp37" id="qp37_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp37" id="qp37_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp37" id="qp37_5"/></div>
                    </div>

                    <label htmlFor="qp39">38. Shirk my duties</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp39_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp39_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp39_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp39_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp39_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp39" id="qp39_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp39" id="qp39_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp39" id="qp39_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp39" id="qp39_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp39" id="qp39_5"/></div>
                    </div>

                    <label htmlFor="qp39">39. Have frequent mood swings</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp39_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp39_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp39_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp39_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp39_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp39" id="qp39_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp39" id="qp39_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp39" id="qp39_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp39" id="qp39_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp39" id="qp39_5"/></div>
                    </div>

                    <label htmlFor="qp40">40. Use difficult words</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp40_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp40_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp40_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp40_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp40_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp40" id="qp40_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp40" id="qp40_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp40" id="qp40_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp40" id="qp40_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp40" id="qp40_5"/></div>
                    </div>

                    <label htmlFor="qp41">41. Don't mind being the center of attention</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp41_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp41_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp41_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp41_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp41_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp41" id="qp41_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp41" id="qp41_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp41" id="qp41_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp41" id="qp41_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp41" id="qp41_5"/></div>
                    </div>

                    <label htmlFor="qp42">42. Feel others' emotions</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp42_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp42_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp42_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp42_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp42_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp42" id="qp42_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp42" id="qp42_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp42" id="qp42_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp42" id="qp42_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp42" id="qp42_5"/></div>
                    </div>

                    <label htmlFor="qp43">43. Follow a schedule</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp43_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp43_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp43_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp43_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp43_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp43" id="qp43_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp43" id="qp43_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp43" id="qp43_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp43" id="qp43_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp43" id="qp43_5"/></div>
                    </div>

                    <label htmlFor="qp44">44. Get irritated easily</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp44_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp44_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp44_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp44_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp44_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp44" id="qp44_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp44" id="qp44_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp44" id="qp44_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp44" id="qp44_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp44" id="qp44_5"/></div>
                    </div>

                    <label htmlFor="qp45">45. Spend time reflecting on things</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp45_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp45_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp45_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp45_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp45_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp45" id="qp45_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp45" id="qp45_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp45" id="qp45_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp45" id="qp45_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp45" id="qp45_5"/></div>
                    </div>

                    <label htmlFor="qp46">46. Am quiet around strangers</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp46_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp46_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp46_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp46_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp46_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp46" id="qp46_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp46" id="qp46_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp46" id="qp46_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp46" id="qp46_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp46" id="qp46_5"/></div>
                    </div>

                    <label htmlFor="qp47">47. Make people feel at ease</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp47_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp47_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp47_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp47_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp47_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp47" id="qp47_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp47" id="qp47_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp47" id="qp47_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp47" id="qp47_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp47" id="qp47_5"/></div>
                    </div>

                    <label htmlFor="qp48">48. Am exacting in my work</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp48_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp48_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp48_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp48_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp48_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp48" id="qp48_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp48" id="qp48_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp48" id="qp48_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp48" id="qp48_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp48" id="qp48_5"/></div>
                    </div>

                    <label htmlFor="qp49">49. Often feel blue</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp49_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp49_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp49_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp49_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp49_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp49" id="qp49_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp49" id="qp49_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp49" id="qp49_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp49" id="qp49_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp49" id="qp49_5"/></div>
                    </div>

                    <label htmlFor="qp50">50. Am full of ideas</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qp50_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp50_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp50_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp50_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qp50_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qp50" id="qp50_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qp50" id="qp50_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qp50" id="qp50_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qp50" id="qp50_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qp50" id="qp50_5"/></div>
                    </div>

                    <div className="header"><h2>Personal Fitness & Nutrition Development Questions</h2></div>
                    <label htmlFor="qf1">1. Has your doctor ever said that you have a heart condition OR high blood pressure?</label>
                    <div className="dropdown">
                        <select name="yesorno" id="qf1">
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                    </div>

                    <label htmlFor="qf2">2. Do you feel pain in your chest at rest, during your daily activities of living, OR when you do physical activity?</label>
                    <div className="dropdown">
                        <select name="yesorno" id="qf2">
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                    </div>

                    <label htmlFor="qf3">3. Do you lose balance because of dizziness OR have you lost consciousness in the last 12 
                    months? Please answer NO if your dizziness was associated with over-breathing (including during vigorous exercise).</label>
                    <div className="dropdown">
                        <select name="yesorno" id="qf3">
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                    </div>

                    <label htmlFor="qf4">4. Have you ever been diagnosed with another chronic medical condition (other than heart
                     disease or high blood pressure)? PLEASE LIST CONDITIONS HERE:</label>
                    <div className="dropdown">
                        <select name="yesorno" id="qf4">
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                    </div>
                    <input type="text" placeholder="" id="qf4_2" name="qf4_2"/>


                    <label htmlFor="qf5">5. Are you currently taking prescribed medications for a chronic medical condition that could 
                    limit your ability to do physical activity or change your diet?</label>
                    <div className="dropdown">
                        <select name="yesorno" id="qf5">
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                    </div>

                    <label htmlFor="qf6">6. Do you currently have (or have had within the past 12 months) a bone, joint, or soft tissue 
                    (muscle, ligament, or tendon) problem that could be made worse by becoming more physically active? Please answer NO 
                    if you had a problem in the past, but it does not limit your current ability to be physically active. 
                    PLEASE LIST CONDITION(S) HERE:</label>
                    <div className="dropdown">
                        <select name="yesorno" id="qf6">
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                    </div>
                    <input type="text" placeholder="" id="qf6_2" name="qf6_2"/>

                    <label htmlFor="qf7">7. Has your doctor ever said that you should only do medically supervised physical activity?</label>
                    <div className="dropdown">
                        <select name="yesorno" id="qf7">
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                    </div>

                    <label htmlFor="qf8">8. What are your Fitness and Nutrition goals? (List 3)</label>
                    <input type="text" placeholder="" id="qf8" name="qf8"/>

                    <label htmlFor="qf9">9. What is keeping you from achieving your Fitness and Nutrition Goals? (List multiple)</label>
                    <input type="text" placeholder="" id="qf9" name="qf9"/>

                    <label htmlFor="qf10">10. What motivates you? (List multiple)</label>
                    <input type="text" placeholder="" id="qf10" name="qf10"/>

                    <label htmlFor="qf11">11. Do you follow a current exercise regime?</label>
                    <div className="dropdown">
                        <select name="yesorno" id="qf11">
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                    </div>

                    <label htmlFor="qf12">12. Please describe how you like to exercise</label>
                    <input type="text" placeholder="" id="qf12" name="qf12"/>
                    
                    <label htmlFor="qf13">13. Where do you rate health prioritization in life? 1 being low priority 5 being high priority.</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qf13_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qf13_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qf13_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qf13_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qf13_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qf13" id="qf13_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qf13" id="qf13_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qf13" id="qf13_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qf13" id="qf13_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qf13" id="qf13_5"/></div>
                    </div>

                    <label htmlFor="qf14">14. How committed are you to achieving your fitness goals?. 1 being very little 5 being very much.</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qf14_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qf14_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qf14_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qf14_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qf14_5">5</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qf14" id="qf14_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qf14" id="qf14_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qf14" id="qf14_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qf14" id="qf14_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qf14" id="qf14_5"/></div>
                    </div>

                    <label htmlFor="qf15">15. Approximately how many hours of sleep do you get each night, on average?</label>
                    <input type="text" placeholder="" id="qf15" name="qf15"/>

                    <label htmlFor="qf16">16. Approximately how many hours sleep do you feel you need to function at your best?</label>
                    <input type="text" placeholder="" id="qf16" name="qf16"/>

                    <label htmlFor="qf17">17. What factors do you feel are stopping you from getting the ideal amount of sleep that 
                    you need to function at your best? Please state up to 3.</label>
                    <input type="text" placeholder="" id="qf17" name="qf17"/>

                    <h3>Nutrition related questions</h3>

                    <label htmlFor="qf18">18. How would you rate your nutrition? 1 being very poor 10 being excellent.</label>
                    <div className="answers1-10">
                        <div className="answerchoicetext"><label htmlFor="qf18_1">1</label></div>
                        <div className="answerchoicetext"><label htmlFor="qf18_2">2</label></div>
                        <div className="answerchoicetext"><label htmlFor="qf18_3">3</label></div>
                        <div className="answerchoicetext"><label htmlFor="qf18_4">4</label></div>
                        <div className="answerchoicetext"><label htmlFor="qf18_5">5</label></div>
                        <div className="answerchoicetext"><label htmlFor="qf18_6">6</label></div>
                        <div className="answerchoicetext"><label htmlFor="qf18_7">7</label></div>
                        <div className="answerchoicetext"><label htmlFor="qf18_8">8</label></div>
                        <div className="answerchoicetext"><label htmlFor="qf18_9">9</label></div>
                        <div className="answerchoicetext"><label htmlFor="qf18_10">10</label></div>
                    </div>
                    <div className="buttons1-10">
                        <div className="answerchoice"><input type="radio" value="1" name="qf18" id="qf18_1"/></div>
                        <div className="answerchoice"><input type="radio" value="2" name="qf18" id="qf18_2"/></div>
                        <div className="answerchoice"><input type="radio" value="3" name="qf18" id="qf18_3"/></div>
                        <div className="answerchoice"><input type="radio" value="4" name="qf18" id="qf18_4"/></div>
                        <div className="answerchoice"><input type="radio" value="5" name="qf18" id="qf18_5"/></div>
                        <div className="answerchoice"><input type="radio" value="6" name="qf18" id="qf18_6"/></div>
                        <div className="answerchoice"><input type="radio" value="7" name="qf18" id="qf18_7"/></div>
                        <div className="answerchoice"><input type="radio" value="8" name="qf18" id="qf18_8"/></div>
                        <div className="answerchoice"><input type="radio" value="9" name="qf18" id="qf18_9"/></div>
                        <div className="answerchoice"><input type="radio" value="10" name="qf18" id="qf18_10"/></div>
                    </div>
                    
                    <label htmlFor="qf19">19. How many times a day do you usually eat (including snacks)?</label>
                    <input type="text" placeholder="" id="qf19" name="qf19"/>

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



                    <button type="submit">Submit</button>

            </form>
        </div>
        </div>
    )
}