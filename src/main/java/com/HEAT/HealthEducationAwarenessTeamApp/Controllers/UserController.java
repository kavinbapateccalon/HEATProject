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
@RequestMapping("/api/user")
public class UserController {
    private final UserRepository userRepository;

    @GetMapping("/get")
    public ResponseEntity<User> getCurrentUser(@AuthenticationPrincipal User user) {
        // Retrieve the email of the currently authenticated user
        String email = user.getUsername();

        // Retrieve the user from the userRepository or service based on the email
        Optional<User> currentUser = userRepository.findByEmail(email);
        if (currentUser.isEmpty()) {
            // User not found, handle accordingly (e.g., return a 404 error)
            return ResponseEntity.notFound().build();
        }

        // Return the user object
        return ResponseEntity.ok(currentUser.get());
    }
}
