package com.HEAT.HealthEducationAwarenessTeamApp.auth;

import com.HEAT.HealthEducationAwarenessTeamApp.Repositories.UserRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.User;
import com.HEAT.HealthEducationAwarenessTeamApp.config.JWTService;
import com.HEAT.HealthEducationAwarenessTeamApp.Role;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        // Check if displayName already exists
        if (repository.findByDisplayName(request.getDisplayName()).isPresent()) {
            throw new IllegalArgumentException("Display name already exists");
        }
        // Check if email already exists
        if (repository.findByEmail(request.getEmail()).isPresent()) {
            throw new IllegalArgumentException("Email already exists");
        }
        else {
            User user = User.builder()
                    .firstName(request.getFirstName())
                    .lastName(request.getLastName())
                    .email(request.getEmail())
                    .displayName(request.getDisplayName())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .role(Role.USER)
                    .createdAt(LocalDateTime.now())
                    .build();
            repository.save(user);
            var jwtToken = jwtService.generateToken(user);
            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .build();
        }
    }

    public AuthenticationResponse login(AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                request.getPassword()
        ));
        // user is authenticated so just send token
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    // creates user, saves user to database and returns the generated token
    
}
