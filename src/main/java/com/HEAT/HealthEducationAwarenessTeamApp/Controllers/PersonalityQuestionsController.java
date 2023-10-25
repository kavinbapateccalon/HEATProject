package com.HEAT.HealthEducationAwarenessTeamApp.Controllers;

import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.UserPersonalityScoresRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.Models.PersonalityQuestions;
import com.HEAT.HealthEducationAwarenessTeamApp.Models.User;
import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.PersonalityQuestionsRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.UserRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.Models.UserPersonalityScore;
import com.HEAT.HealthEducationAwarenessTeamApp.Services.PersonalityScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/personality-questions")
public class PersonalityQuestionsController {

    @Autowired
    private PersonalityQuestionsRepository personalityQuestionsRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PersonalityScoreService personalityScoreService;

    @Autowired
    private UserPersonalityScoresRepository userPersonalityScoresRepository;

    @PostMapping("/submit")
    public ResponseEntity<?> submitPersonalityQuestions(@RequestBody PersonalityQuestions personalityQuestions,
                                                        Authentication authentication) {
        // Get the current authenticated user's email
        String userEmail = authentication.getName();

        // Find the user in the database
        Optional<User> userOptional = userRepository.findByEmail(userEmail);
        if (userOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("User not found");
        }

        // Set the user and creation timestamp for the PersonalityQuestions
        User user = userOptional.get();
        personalityQuestions.setUser(user);
        personalityQuestions.setCreatedAt(LocalDateTime.now());

        // Save the PersonalityQuestions to the database
        PersonalityQuestions savedPersonalityQuestions = personalityQuestionsRepository.save(personalityQuestions);

        // Calculate the personality scores
        Map<String, Integer> scores = personalityScoreService.calculateScores(savedPersonalityQuestions);

        // Store the scores for the user
        UserPersonalityScore userScores = new UserPersonalityScore();
        userScores.setUser(user);
        userScores.setOpennessScore(scores.get("Openness"));
        userScores.setConscientiousnessScore(scores.get("Conscientiousness"));
        userScores.setExtraversionScore(scores.get("Extraversion"));
        userScores.setAgreeablenessScore(scores.get("Agreeableness"));
        userScores.setNeuroticismScore(scores.get("Neuroticism"));

        userPersonalityScoresRepository.save(userScores);

        return ResponseEntity.ok(savedPersonalityQuestions);    }
}
