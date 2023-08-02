package com.HEAT.HealthEducationAwarenessTeamApp.Controllers;

import com.HEAT.HealthEducationAwarenessTeamApp.Models.PersonalityQuestions;
import com.HEAT.HealthEducationAwarenessTeamApp.Models.User;
import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.PersonalityQuestionsRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/api/personality-questions")
public class PersonalityQuestionsController {

    @Autowired
    private PersonalityQuestionsRepository personalityQuestionsRepository;

    @Autowired
    private UserRepository userRepository;

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

        return ResponseEntity.ok(savedPersonalityQuestions);
    }
}
