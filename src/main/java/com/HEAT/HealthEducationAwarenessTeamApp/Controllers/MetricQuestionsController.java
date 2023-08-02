package com.HEAT.HealthEducationAwarenessTeamApp.Controllers;

import com.HEAT.HealthEducationAwarenessTeamApp.Models.MetricQuestions;
import com.HEAT.HealthEducationAwarenessTeamApp.Models.User;
import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.MetricQuestionsRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/api/metric-questions")
public class MetricQuestionsController {

    @Autowired
    private MetricQuestionsRepository metricQuestionsRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/submit")
    public ResponseEntity<?> submitMetricQuestions(@RequestBody MetricQuestions metricQuestions,
                                                   Authentication authentication) {
        // Get the current authenticated user's email
        String userEmail = authentication.getName();

        // Find the user in the database
        Optional<User> userOptional = userRepository.findByEmail(userEmail);
        if (userOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("User not found");
        }

        // Set the user and creation timestamp for the MetricQuestions
        User user = userOptional.get();
        metricQuestions.setUser(user);
        metricQuestions.setCreatedAt(LocalDateTime.now());

        // Save the MetricQuestions to the database
        MetricQuestions savedMetricQuestions = metricQuestionsRepository.save(metricQuestions);

        return ResponseEntity.ok(savedMetricQuestions);
    }
}
