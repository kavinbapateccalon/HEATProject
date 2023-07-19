package com.HEAT.HealthEducationAwarenessTeamApp.Controllers;
import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.UserRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.Models.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/get-user")
public class UserController {
    private final UserRepository repository;

    @GetMapping
    public ResponseEntity<User> getCurrentUser(@AuthenticationPrincipal User user) {
        // Retrieve the email of the currently authenticated user
        String email = user.getUsername();

        // Retrieve the user from the repository or service based on the email
        Optional<User> currentUser = repository.findByEmail(email);
        if (currentUser == null) {
            // User not found, handle accordingly (e.g., return a 404 error)
            return ResponseEntity.notFound().build();
        }

        // Return the user object
        return ResponseEntity.ok(user);
    }
}
