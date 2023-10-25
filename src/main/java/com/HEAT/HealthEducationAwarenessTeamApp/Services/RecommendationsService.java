package com.HEAT.HealthEducationAwarenessTeamApp.Services;

import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.FitnessNutritionQuestionsRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.RecommendationsRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.Models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class RecommendationsService {

    @Autowired
    private FitnessNutritionQuestionsRepository fitnessNutritionQuestionsRepository;

    @Autowired
    private PersonalityScoreService personalityScoreService;  // Autowire the PersonalityScoreService

    @Autowired
    private RecommendationsRepository recommendationsRepository;

    public FitnessNutritionQuestions getUserFitnessNutritionAnswers(User user) {
        return fitnessNutritionQuestionsRepository.findByUser(user).orElse(null);
    }
    public List<Recommendations> generateRecommendations(PersonalityQuestions personality, FitnessNutritionQuestions fitnessNutrition, UserPersonalityScore userScores, User user) {
        List<Recommendations> recommendations = new ArrayList<>();

        // Calculate the personality scores
        Map<String, Integer> scores = personalityScoreService.calculateScores(personality);

        // Access the individual scores
        // Use the scores to generate recommendations
        int opennessScore = userScores.getOpennessScore();
        int conscientiousnessScore = userScores.getConscientiousnessScore();
        int extraversionScore = userScores.getExtraversionScore();
        int agreeablenessScore = userScores.getAgreeablenessScore();
        int neuroticismScore = userScores.getNeuroticismScore();


        Recommendations recommendation = null;

        // Openness to Experience recommendations
        if (opennessScore >= 36) {
            recommendation = (Recommendations.builder().category("Physical").type("personality").recommendationText("Explore a variety of workout routines to keep things exciting.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("personality").recommendationText("Incorporate world cuisines into your diet for diverse flavors.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("personality").recommendationText("Consider meditation techniques that focus on exploration of inner thoughts.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        } else if (opennessScore >= 25) {
            recommendation = (Recommendations.builder().category("Physical").type("personality").recommendationText("Mix traditional exercises with something new once in a while.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("personality").recommendationText("Engage in mindfulness exercises to better understand your thoughts and feelings.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("personality").recommendationText("Try introducing a new healthy ingredient into your diet occasionally.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        } else {
            recommendation = (Recommendations.builder().category("Physical").type("personality").recommendationText("Maintain a consistent workout routine for best results.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("personality").recommendationText("Routine-based relaxation techniques may work well for you.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("personality").recommendationText("Stick to familiar and comfortable meals that you enjoy and that are healthy.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

        // Conscientiousness recommendations
        if (conscientiousnessScore >= 36) {
            recommendation = (Recommendations.builder().category("Physical").type("personality").recommendationText("Adopt a structured workout regimen.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("personality").recommendationText("Meal planning and prep can help maintain a balanced diet.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("personality").recommendationText("Consider techniques that require discipline, like focused meditation.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        } else if (conscientiousnessScore >= 25) {
            recommendation = (Recommendations.builder().category("Physical").type("personality").recommendationText("Set small goals in your workouts to maintain motivation.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("personality").recommendationText("Daily reflection or journaling can help stay on track.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("personality").recommendationText("Set a regular eating schedule and stick to it.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        } else {
            recommendation = (Recommendations.builder().category("Physical").type("personality").recommendationText("Find a workout buddy to help keep you accountable.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("personality").recommendationText("Engage in group activities that provide a sense of structure.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("personality").recommendationText("Prepackaged and pre-prepared meals can be convenient for you as long as they aren't too processed and contain healthy ingredients.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

        // Extraversion recommendations
        if (extraversionScore >= 36) {
            recommendation = (Recommendations.builder().category("Physical").type("personality").recommendationText("Engage in group sports or fitness classes to feed your social energy.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("personality").recommendationText("Social dining and cooking classes might be enjoyable for you.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("personality").recommendationText("Group therapy or support groups can be beneficial to share and connect.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        } else if (extraversionScore >= 25) {
            recommendation = (Recommendations.builder().category("Physical").type("personality").recommendationText("Try a mix of solo and group exercises.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("personality").recommendationText("Balance solitary activities like reading with social activities.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("personality").recommendationText("Occasional social meals or potlucks can be a good mix.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        } else {
            recommendation = (Recommendations.builder().category("Physical").type("personality").recommendationText("Solo exercises like running or cycling might suit you.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("personality").recommendationText("Mindfulness and solo meditation can be calming and beneficial.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("personality").recommendationText("Quiet meals focusing on self-reflection can be beneficial.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

// Agreeableness recommendations
        if (agreeablenessScore >= 36) {
            recommendation = (Recommendations.builder().category("Physical").type("personality").recommendationText("Consider workouts that also involve helping others, like training someone.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("personality").recommendationText("Share your healthy recipes with friends and family.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("personality").recommendationText("Counseling or therapy where you help others can be rewarding.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        } else if (agreeablenessScore >= 25) {
            recommendation = (Recommendations.builder().category("Physical").type("personality").recommendationText("Engage in collaborative sports where teamwork is key.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("personality").recommendationText("Engage in group activities that foster mutual understanding.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("personality").recommendationText("Consider occasionally preparing meals for friends or family.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        } else {
            recommendation = (Recommendations.builder().category("Physical").type("personality").recommendationText("Engage in competitive sports or activities.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("personality").recommendationText("Work on building empathy and understanding through specific exercises or therapies.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("personality").recommendationText("Focus on foods that you personally enjoy, even if they're unique to your taste.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

// Neuroticism (Emotional Stability) recommendations
        if (neuroticismScore >= 36) {
            recommendation = (Recommendations.builder().category("Physical").type("personality").recommendationText("Engage in calming exercises like yoga or tai chi.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("personality").recommendationText("Focus on a balanced diet to stabilize mood swings.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("personality").recommendationText("Cognitive-behavioral therapy can be beneficial. Avoid high stress situations.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        } else if (neuroticismScore >= 25) {
            recommendation = (Recommendations.builder().category("Physical").type("personality").recommendationText("Moderate exercises can help in maintaining emotional balance.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("personality").recommendationText("Engage in regular relaxation techniques to manage stress.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("personality").recommendationText("Avoid foods that can trigger mood swings like excessive caffeine or sugar.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        } else {
            recommendation = (Recommendations.builder().category("Physical").type("personality").recommendationText("You can handle intense workouts which can also act as a stress buster.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("personality").recommendationText("Engage in activities that challenge you mentally and emotionally.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("personality").recommendationText("Feel free to indulge occasionally but be mindful of emotional eating.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }


        // FitnessNutritionQuestions recommendations
        // Q1: Has your doctor ever said that you have a heart condition OR high blood pressure?
        if ("yes".equalsIgnoreCase(fitnessNutrition.getQpn1())) {
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Stick to low-impact exercises to avoid strain.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Monitor salt intake in your diet.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Stress can impact heart health. Consider relaxation techniques.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

        // Q2: Do you feel pain in your chest at rest, during your daily activities of living, OR when you do physical activity?
        if ("yes".equalsIgnoreCase(fitnessNutrition.getQpn2())) {
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Consult with a healthcare professional before engaging in rigorous activity.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Deep breathing exercises can help manage chest pain related to stress.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

        // Q3: Do you lose balance because of dizziness OR have you lost consciousness in the last 12 months?
        if ("yes".equalsIgnoreCase(fitnessNutrition.getQpn3())) {
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Avoid exercises that require sudden position changes.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Stay hydrated and monitor your salt intake.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Stress or anxiety can cause dizziness. Consider relaxation techniques.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

        // Q4: Have you ever been diagnosed with another chronic medical condition?
        if ("yes".equalsIgnoreCase(fitnessNutrition.getQpn4())) {
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Consult with a healthcare professional to tailor a safe workout regimen.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Focus on a balanced diet and avoid known triggers or allergens.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Counseling or therapy can help manage chronic conditions.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

        // Q5: Are you currently taking prescribed medications for a chronic medical condition?
        if ("yes".equalsIgnoreCase(fitnessNutrition.getQpn5())) {
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Be aware of any medication side effects that might impact your exercise.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Consult with a nutritionist to ensure your diet doesn't interfere with your medication.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Stay informed about your condition and maintain regular check-ups.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

// Q6: Do you currently have a bone, joint, or soft tissue problem?
        if ("yes".equalsIgnoreCase(fitnessNutrition.getQpn6())) {
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Engage in low-impact exercises like swimming or cycling.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Ensure adequate calcium and vitamin D intake for bone health.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Consider counseling to manage any anxiety or stress related to your condition.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

// Q7: Has your doctor ever said that you should only do medically supervised physical activity?
        if ("yes".equalsIgnoreCase(fitnessNutrition.getQpn7())) {
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Always consult with a medical professional before starting any exercise routine.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Follow dietary recommendations given by healthcare professionals.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Join support groups or therapy to discuss any concerns about your health limitations.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }


        // Q8: What are your Fitness and Nutrition goals?
        List<String> goals = fitnessNutrition.getQpn8(); // Assuming this returns a list of selected goals
        for (String goal : goals) {
            switch (goal.toLowerCase()) {
                case "learn to eat a balanced diet":
                    recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Consider a nutrition class or consultation with a dietitian.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "decrease body fat":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Combine strength training with cardiovascular exercises.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Focus on a protein-rich diet and monitor calorie intake.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "tone muscles":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Incorporate resistance training into your routine.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "learn to balance activity & diet":
                    recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Ensure a mix of macronutrients in every meal and sync your meals with your exercise routine.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "reduce stress":
                    recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Engage in relaxation techniques like meditation and deep breathing exercises.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "increase strength & power":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Incorporate weight training and plyometrics into your routine.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "create a healthy lifestyle":
                    recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Prioritize whole foods, minimize processed foods, and stay hydrated.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Establish a regular exercise routine and get adequate sleep.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "feel better":
                    recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Engage in activities that uplift your mood and reduce stress.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "improve speed/agility":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Incorporate agility drills and interval training into your routine.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "increase flexibility":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Engage in regular stretching routines and consider activities like yoga or pilates.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "improve overall health":
                    recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Eat a varied and balanced diet, rich in fruits, vegetables, and lean proteins.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Stay active and engage in a mix of cardiovascular and strength training exercises.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "improve athletic performance":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Consider sport-specific training and techniques. Ensure adequate recovery after workouts.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "maintain healthy weight":
                    recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Monitor calorie intake and ensure you're consuming a balanced diet.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Combine cardiovascular exercises with strength training for optimal weight management.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "increase endurance":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Engage in longer, moderate-intensity workouts like running, swimming, or cycling.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "other":
                    recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Consider consulting with a nutritionist or personal trainer to tailor recommendations to your specific needs.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
            }

        }


// Q9: What is keeping you from achieving your Fitness and Nutrition Goals?
        List<String> barriers = fitnessNutrition.getQpn9(); // Assuming this returns a list of selected barriers
        for (String barrier : barriers) {
            switch (barrier.toLowerCase()) {
                case "lack of motivation":
                    recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Set clear, achievable goals and reward yourself when they are met.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "lack of equipment":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("There are many effective bodyweight exercises you can do without equipment.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "time":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Short, high-intensity workouts can be time-efficient.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "hitting a plateau":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Mix up your exercise routine and consider revising your dietary intake.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Ensure you're consuming the right balance of macronutrients for your goals.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "self-conscious":
                    recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Consider joining support groups or finding a workout buddy to help boost confidence.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "not knowing where/how to begin":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Start with basic exercises and gradually intensify. Consider seeking guidance from fitness professionals.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Begin by making small, sustainable changes to your diet.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "lack of results":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Re-evaluate your workout routine and dietary intake. Consistency and patience are key.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "money":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("There are numerous cost-effective workouts available online. Consider home workouts or outdoor activities.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Focus on a balanced diet with locally available and seasonal produce.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "other":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Consider discussing your specific barriers with a fitness or nutrition professional for tailored advice.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
            }


        }


// Q10: What motivates you?
        List<String> motivators = fitnessNutrition.getQpn10(); // Assuming this returns a list of selected motivators
        for (String motivator : motivators) {
            switch (motivator.toLowerCase()) {
                case "seeing results":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Keep a fitness journal to track your progress.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "having fun":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Try dance workouts or sports to combine fitness and fun.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "praise/rewards":
                    recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Set milestones in your fitness journey and reward yourself upon achieving them.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "accountability":
                    recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Consider getting a workout buddy or hiring a personal trainer.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "feeling better":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Notice the positive changes in your mood and energy levels with consistent workouts and a balanced diet.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Opt for nutrient-rich foods that promote overall well-being.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
                case "other":
                    recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Stay curious and explore different activities or diets to find what motivates you.").build());
                    // Set the user to the recommendation
                    recommendation.setUser_id(user);
                    recommendations.add(recommendation);
                    recommendationsRepository.save(recommendation);
                    break;
            }


        }



        // Q11: Do you follow a current exercise regime?
        if ("no".equalsIgnoreCase(fitnessNutrition.getQpn11())) {
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Start with a simple walking routine and gradually increase intensity.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Maintain a balanced diet to support your new exercise routine.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Setting short-term goals can help you stay motivated.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

// Q13: Where do you rate health prioritization in life?
        int healthPriority = fitnessNutrition.getQpn13();
        switch (healthPriority) {
            case 1:
                recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Begin with small dietary changes, such as including one fruit or vegetable in each meal.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Start with short, manageable physical activities like a 10-minute walk daily.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Consider reflecting on the benefits of a healthy lifestyle, and how it can positively impact other areas of your life.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                break;
            case 2:
                recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Experiment with new healthy recipes or foods once a week.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Incorporate physical activity into your routine, like taking the stairs instead of the elevator.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Set aside some time weekly for self-care and relaxation.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                break;
            case 3:
                recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Work on maintaining a balanced diet with a mix of protein, carbs, and fats.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Set a goal to engage in moderate exercise at least 3 times a week.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Stay consistent with health routines, and seek support or advice when needed.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                break;
            case 4:
                recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Track your meals occasionally to ensure you're meeting nutrient goals.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Consider joining a fitness class or group to enhance your exercise routine.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Engage in regular mental health check-ins, and consider practices like meditation or journaling.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                break;
            default:
                recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Continue optimizing your diet. Consider consulting a nutritionist for personalized advice.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Challenge yourself with new physical goals, be it endurance, strength, or flexibility.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Prioritize mental health as much as physical. Regularly engage in activities that nourish your mind.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
        }

// Q14: How committed are you to achieving your fitness goals? 1 being very little 5 being very much.
        int commitmentLevel = fitnessNutrition.getQpn14();
        switch (commitmentLevel) {
            case 1:
                recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Start with small dietary goals like reducing sugary drinks or adding more water to your daily intake.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Begin with easy, short-duration activities. Even a 5-minute daily stretch can make a difference.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Explore the reasons behind your current commitment level. Reflect on what might motivate you to prioritize fitness.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                break;
            case 2:
                recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Try to include a protein source in every meal. This can help with muscle repair and growth.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Set a small weekly exercise goal, like walking 30 minutes 3 times a week.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Consider writing down the benefits you hope to achieve from a more active lifestyle.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                break;
            case 3:
                recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Focus on portion control and aim for balanced meals.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Gradually increase your exercise duration or intensity, aiming for consistency.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Join fitness forums or groups to gain knowledge and motivation.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                break;
            case 4:
                recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Consider meal planning to better align with your fitness objectives.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Add variety to your workouts to challenge different muscle groups and keep things interesting.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Set clear and specific fitness goals, and track your progress.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                break;
            default:
                recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Fine-tune your diet based on your specific fitness goals. Consider seeking advice from a nutritionist.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Diversify your training with strength, cardio, and flexibility exercises. Consider hiring a personal trainer for optimized results.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
                recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Regularly evaluate and adjust your fitness goals. Celebrate milestones and stay focused on continuous growth.").build());
                // Set the user to the recommendation
                recommendation.setUser_id(user);
                recommendations.add(recommendation);
                recommendationsRepository.save(recommendation);
        }


        // Q15: Approximately how many hours of sleep do you get each night, on average?
// Q16: Approximately how many hours sleep do you feel you need to function at your best?
        int actualSleepHours = fitnessNutrition.getQpn15();
        int neededSleepHours = fitnessNutrition.getQpn16();
        int sleepDifference = actualSleepHours - neededSleepHours;

        if (sleepDifference < -2) {
            recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Limit caffeine intake, especially in the evenings, as it can disrupt your sleep cycle.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Avoid high-intensity workouts close to bedtime as they might keep you awake.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Consider relaxation techniques before bed to help initiate sleep.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }
        else if (sleepDifference == -1 || sleepDifference == -2) {
            recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Ensure you're consuming magnesium-rich foods, which can aid relaxation.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Gentle evening stretches can help signal the body it's time to wind down.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Establish a consistent bedtime routine to better align with your sleep needs.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }
        else if (sleepDifference == 0) {
            recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Maintain a balanced diet to support optimal sleep patterns.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Regular exercise can help regulate and improve sleep quality.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Continue prioritizing sleep as a foundation for overall health.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }
        else if (sleepDifference == 1 || sleepDifference == 2) {
            recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Avoid eating large meals close to bedtime, which can disrupt sleep.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Monitor your energy levels during the day to ensure you're not becoming lethargic.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Consider short daytime naps to supplement sleep without affecting nighttime rest.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }
        else {
            recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Be cautious with caffeine and sugar intake, which can mask sleepiness.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Reflect on your exercise routine to ensure it's not contributing to feelings of restlessness at night.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Consider sleep studies or professional consultation to understand potential sleep issues.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

        // Q18 How would you rate your nutrition? 1 being very poor 10 being excellent.
        int nutritionRating = fitnessNutrition.getQpn18();

        if (nutritionRating >= 1 && nutritionRating <= 3) {
            recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Consider consulting with a nutritionist or dietitian to understand essential dietary needs.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Moderate physical activity can help stimulate appetite and improve metabolism.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Mindful eating practices can help improve your relationship with food.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }
        else if (nutritionRating >= 4 && nutritionRating <= 6) {
            recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Incorporate a variety of fruits and vegetables to ensure you're getting all essential vitamins and minerals.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Stay hydrated; water intake can impact both physical performance and digestion.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Maintain a food diary to become more aware of your eating patterns and areas of improvement.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }
        else if (nutritionRating >= 7 && nutritionRating <= 8) {
            recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Consider diversifying protein sources, including more plant-based options if not already included.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("As your diet is relatively balanced, focus on synchronizing your meals with your workout routine.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Stay informed about nutritional advancements and consider tweaking your diet for optimal results.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }
        else {
            recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Maintain your excellent nutrition habits and share tips with friends or family.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("You're likely fueling your body well; ensure you're also giving it adequate physical activity.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Consider exploring deeper aspects of nutrition, like the gut-brain connection or intermittent fasting, if it aligns with your health goals.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }


        // Q19: meal frequency
        int mealFrequency = fitnessNutrition.getQpn19();  // Assuming the result is stored as an integer

        if (mealFrequency <= 2) {
            recommendation = (Recommendations.builder().category("Nutrition").type("mealFrequency").recommendationText("Consider increasing the number of meals or including healthy snacks to maintain a consistent energy level throughout the day.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("mealFrequency").recommendationText("Infrequent meals might lead to energy slumps. Ensure you're fueling your body adequately before engaging in physical activities.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("mealFrequency").recommendationText("Regular meals can help in stabilizing mood. Consider having smaller, more frequent meals to maintain emotional balance.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        } else if (mealFrequency <= 4) {
            recommendation = (Recommendations.builder().category("Nutrition").type("mealFrequency").recommendationText("You're eating at typical intervals. Ensure each meal is balanced in terms of macronutrients.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("mealFrequency").recommendationText("Maintain a gap of at least 2 hours between eating and exercising for optimal performance.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("mealFrequency").recommendationText("Routine meals can help in building a structured day. Consider mindful eating practices to enhance the mealtime experience.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        } else {
            recommendation = (Recommendations.builder().category("Nutrition").type("mealFrequency").recommendationText("If you're eating frequently, pay attention to portion sizes to avoid overconsumption. Opt for smaller meals or healthy snacks.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("mealFrequency").recommendationText("Frequent eating can provide sustained energy. Stay active and ensure you're balancing caloric intake with expenditure.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("mealFrequency").recommendationText("Frequent meals might be driven by emotional eating. Reflect on your hunger cues and consider if you're eating out of habit or genuine hunger.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }



        // Q20: Do you skip meals?
        if ("yes".equalsIgnoreCase(fitnessNutrition.getQpn20())) {
            recommendation = (Recommendations.builder().category("Physical").type("physicalNutrition").recommendationText("Short, frequent workouts can help boost metabolism.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("physicalNutrition").recommendationText("Opt for multiple small meals or healthy snacks throughout the day.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("physicalNutrition").recommendationText("Mindful eating can help you recognize and respond to hunger cues.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

        // Q21: Do you eat breakfast?
        if ("no".equalsIgnoreCase(fitnessNutrition.getQpn21())) {
            recommendation = (Recommendations.builder().category("Physical").type("breakfast").recommendationText("Morning stretches or light exercise can kickstart your metabolism.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("breakfast").recommendationText("Try easy-to-make breakfast options like smoothies or overnight oats.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("breakfast").recommendationText("Reflect on the reasons for skipping breakfast and consider its importance for energy levels.  However, if skipping breakfast works for you, no need to change it.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

// Q22: Do you eat late at night?
        if ("often".equalsIgnoreCase(fitnessNutrition.getQpn22())) {
            recommendation = (Recommendations.builder().category("Physical").type("lateNightEating").recommendationText("Consider light exercises in the evening to boost metabolism.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("lateNightEating").recommendationText("Opt for light, easily digestible meals or snacks in the evening.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("lateNightEating").recommendationText("Establish a consistent sleep routine to avoid late-night eating habits.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

// Q23: Do you eat past the point of fullness?
        if ("often".equalsIgnoreCase(fitnessNutrition.getQpn23())) {
            recommendation = (Recommendations.builder().category("Physical").type("overEating").recommendationText("Regular exercise can help regulate appetite.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("overEating").recommendationText("Focus on mindful eating and recognize satiety cues.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("overEating").recommendationText("Consider counseling to explore emotional eating habits.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }


        // Q24: Would you find cooking classes helpful?
        if ("yes".equalsIgnoreCase(fitnessNutrition.getQpn24())) {
            recommendation = (Recommendations.builder().category("Nutrition").type("cookingClasses").recommendationText("Participate in a local cooking class to enhance your culinary skills and learn new healthy recipes.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("cookingClasses").recommendationText("Cooking at home allows you to control the ingredients, ensuring you're fueling your body with nutritious meals. Consider making meals that align with your fitness goals.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("cookingClasses").recommendationText("Cooking can be a therapeutic activity. Enjoy the process and feel the sense of accomplishment with every dish you prepare.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        } else {
            recommendation = (Recommendations.builder().category("Nutrition").type("noCookingClasses").recommendationText("Continue exploring and refining your own cooking methods and recipes for optimal nutrition.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("noCookingClasses").recommendationText("Although you may not prefer formal cooking classes, consider watching online tutorials or reading cookbooks to expand your culinary knowledge.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

// Q25: At work do you usually:
        if ("bring food".equalsIgnoreCase(fitnessNutrition.getQpn25())) {
            recommendation = (Recommendations.builder().category("Nutrition").type("bringFoodToWork").recommendationText("Meal prepping on weekends can save you time during the week and ensure you're eating balanced meals.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("bringFoodToWork").recommendationText("When you bring food, you have more control over portion sizes. Ensure you're packing portions that align with your fitness goals.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("bringFoodToWork").recommendationText("Bringing your own food can provide a sense of routine and consistency, which can be comforting during a busy workday.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        } else if ("eat out".equalsIgnoreCase(fitnessNutrition.getQpn25())) {
            recommendation = (Recommendations.builder().category("Nutrition").type("eatOutAtWork").recommendationText("Opt for healthier choices when eating out. Avoid fried or overly processed foods.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("eatOutAtWork").recommendationText("If you frequently eat out, try to incorporate some physical activity, like a walk, post-meal to aid digestion.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("eatOutAtWork").recommendationText("While eating out can be a social activity, ensure you're making choices that align with your health goals. Consider occasionally trying new healthy eateries or dishes.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

// Q26: How many times a week do you eat out?
        int eatOutFrequency = fitnessNutrition.getQpn26();  // Assuming the result is stored as an integer

        if (eatOutFrequency >= 5) {
            recommendation = (Recommendations.builder().category("Nutrition").type("frequentEatOut").recommendationText("Consider reducing the number of times you eat out to better control your nutritional intake.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("frequentEatOut").recommendationText("Eating out frequently might lead to consuming more calories. Ensure you're balancing it with adequate physical activity.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("frequentEatOut").recommendationText("Eating out often can strain your budget and may not always provide the comfort of home-cooked meals. Consider setting specific days to cook at home and enjoy the process.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        } else if (eatOutFrequency >= 3) {
            recommendation = (Recommendations.builder().category("Nutrition").type("occasionalEatOut").recommendationText("When eating out, opt for healthier menu options and be mindful of portion sizes.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("occasionalEatOut").recommendationText("After eating out, consider a short walk to aid digestion and stay active.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("occasionalEatOut").recommendationText("Eating out can be a social event. While you enjoy the social aspect, ensure you're making informed food choices.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        } else {
            recommendation = (Recommendations.builder().category("Nutrition").type("rareEatOut").recommendationText("Great job on limiting eating out! Continue exploring diverse cuisines and dishes while being mindful of nutrition.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Physical").type("rareEatOut").recommendationText("As you eat out less frequently, ensure the meals you have at home align with your fitness goals.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("rareEatOut").recommendationText("Cooking at home can be a therapeutic and rewarding experience. Embrace the joy of preparing your own meals.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }



        //Q27: Would you like to speak to any additional resources?
        List<String> resources = fitnessNutrition.getQpn27();

        if (resources.contains("Chaplain")) {
            recommendation = (Recommendations.builder().category("Psychological").type("Chaplain").recommendationText("Engage in spiritual or faith-based activities to find inner peace and clarity.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("Chaplain").recommendationText("Some religious practices have dietary guidelines. Ensure you're maintaining a balanced diet while adhering to any religious dietary practices.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

        if (resources.contains("Family Readiness")) {
            recommendation = (Recommendations.builder().category("Physical").type("FamilyReadiness").recommendationText("Incorporate family-friendly physical activities into your routine, like group hikes or bike rides.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("FamilyReadiness").recommendationText("Plan family meals that cater to everyone's nutritional needs.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("FamilyReadiness").recommendationText("Engaging in family counseling or group activities can help in strengthening bonds.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

        if (resources.contains("Psychological Health")) {
            recommendation = (Recommendations.builder().category("Physical").type("PsychologicalHealth").recommendationText("Engage in exercises that also benefit mental well-being, like yoga or tai chi.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("PsychologicalHealth").recommendationText("A balanced diet can positively influence mental health. Consider foods rich in Omega-3s and antioxidants.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("PsychologicalHealth").recommendationText("Prioritize activities that promote relaxation and stress-relief.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

        if (resources.contains("SAPR")) {
            recommendation = (Recommendations.builder().category("Physical").type("SAPR").recommendationText("Engage in self-defense classes to build confidence and physical capability.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("SAPR").recommendationText("Join support groups or engage in therapy for trauma healing.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

        if (resources.contains("Medical Group")) {
            recommendation = (Recommendations.builder().category("Physical").type("MedicalGroup").recommendationText("Always consult with a healthcare professional before making major changes to your physical activity.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("MedicalGroup").recommendationText("Consider a dietary assessment to ensure you're getting essential nutrients.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("MedicalGroup").recommendationText("Regular medical check-ups can provide peace of mind and highlight areas for focus.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

        if (resources.contains("Legal")) {
            recommendation = (Recommendations.builder().category("Physical").type("Legal").recommendationText("Ensure any fitness contracts or agreements you enter are reviewed and understood.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Nutrition").type("Legal").recommendationText("Be aware of regulations or laws surrounding dietary supplements and performance enhancers.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
            recommendation = (Recommendations.builder().category("Psychological").type("Legal").recommendationText("Understanding your legal rights and responsibilities can provide peace of mind when making health decisions.").build());
            // Set the user to the recommendation
            recommendation.setUser_id(user);
            recommendations.add(recommendation);
            recommendationsRepository.save(recommendation);
        }

        return recommendations;
    }
}
