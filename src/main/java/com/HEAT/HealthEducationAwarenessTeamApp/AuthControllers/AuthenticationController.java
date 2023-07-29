package com.HEAT.HealthEducationAwarenessTeamApp.AuthControllers;


import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.UserRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.Models.User;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import com.HEAT.HealthEducationAwarenessTeamApp.Config.JWTService;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    private final AuthenticationService service;
    private JWTService jwtService;
    private final UserRepository repository;


    public AuthenticationController(AuthenticationService service, UserRepository repository) {
        this.service = service;
        this.repository = repository;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register (
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }


    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login  (
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.login(request));
    }

//    @GetMapping("/validate")
//    public ResponseEntity<?> validateToken (@RequestParam String token, @AuthenticationPrincipal User user) {
//        boolean isTokenValid = jwtService.isTokenValid(token, user);
//        return ResponseEntity.ok(isTokenValid);
//    }


}


