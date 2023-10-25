package com.HEAT.HealthEducationAwarenessTeamApp.Controllers;

import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.FitnessNutritionQuestionsRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.PersonalityQuestionsRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.UserPersonalityScoresRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.UserRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.Models.*;
import com.HEAT.HealthEducationAwarenessTeamApp.Services.RecommendationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.Authentication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/recommendations")
public class RecommendationsController {

    @Autowired
    private RecommendationsService recommendationService;

    private static final Logger logger = LoggerFactory.getLogger(RecommendationsController.class);


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PersonalityQuestionsRepository personalityQuestionsRepository;

    @Autowired
    private UserPersonalityScoresRepository userPersonalityScoreRepository;

    @Autowired
    private FitnessNutritionQuestionsRepository fitnessNutritionQuestionsRepository;


    @PostMapping("/generate")
    public ResponseEntity<?> generateRecommendationsForUser(Authentication authentication) {
        try {
            String userEmail = authentication.getName();
            Optional<User> userOptional = userRepository.findByEmail(userEmail);
            if (userOptional.isEmpty()) {
                return ResponseEntity.badRequest().body("User not found");
            }

            User user = userOptional.get();
            PersonalityQuestions personalityQuestions = personalityQuestionsRepository.findByUser(user).orElse(null);
            if (personalityQuestions == null) {
                return ResponseEntity.badRequest().body("Personality questions not found for user");
            }

            UserPersonalityScore userScores = userPersonalityScoreRepository.findByUser(user).orElse(null);
            if (userScores == null) {
                return ResponseEntity.badRequest().body("User personality scores not found for user");
            }

            FitnessNutritionQuestions fitnessNutrition = fitnessNutritionQuestionsRepository.findByUser(user).orElse(null);
            if (fitnessNutrition == null) {
                return ResponseEntity.badRequest().body("Fitness and Nutrition questions not found for user");
            }

            List<Recommendations> recommendations = recommendationService.generateRecommendations(personalityQuestions, fitnessNutrition, userScores, user);
            return ResponseEntity.ok(recommendations);
        } catch (Exception e) {
            logger.error("Error generating recommendations: ", e);
            return ResponseEntity.badRequest().body("Failed to generate recommendations");
        }
    }
}
