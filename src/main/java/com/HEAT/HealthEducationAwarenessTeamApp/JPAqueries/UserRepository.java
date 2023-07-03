package com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries;

import com.HEAT.HealthEducationAwarenessTeamApp.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> { // User, Long correspond to the class name, primary key of users table variable type

    // fetch user by email
    Optional<User> findByEmail(String email);
    Optional<User> findByDisplayName(String displayName);
}
