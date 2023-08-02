package com.HEAT.HealthEducationAwarenessTeamApp.Controllers;

import com.HEAT.HealthEducationAwarenessTeamApp.Models.FitnessNutritionQuestions;
import com.HEAT.HealthEducationAwarenessTeamApp.Models.User;
import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.FitnessNutritionQuestionsRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/api/fitness-nutrition-questions")
public class FitnessNutritionQuestionsController {

    @Autowired
    private FitnessNutritionQuestionsRepository fitnessNutritionQuestionsRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/submit")
    public ResponseEntity<?> submitFitnessNutritionQuestions(@RequestBody FitnessNutritionQuestions fitnessNutritionQuestions,
                                                             Authentication authentication) {
        // Get the current authenticated user's email
        String userEmail = authentication.getName();

        // Find the user in the database
        Optional<User> userOptional = userRepository.findByEmail(userEmail);
        if (userOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("User not found");
        }

        // Set the user for the FitnessNutritionQuestions
        User user = userOptional.get();
        fitnessNutritionQuestions.setUser(user);

        // Save the FitnessNutritionQuestions to the database
        FitnessNutritionQuestions savedFitnessNutritionQuestions = fitnessNutritionQuestionsRepository.save(fitnessNutritionQuestions);

        return ResponseEntity.ok(savedFitnessNutritionQuestions);
    }
}
