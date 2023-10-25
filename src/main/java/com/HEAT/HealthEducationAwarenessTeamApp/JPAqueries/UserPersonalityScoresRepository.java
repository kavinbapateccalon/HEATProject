package com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries;

import com.HEAT.HealthEducationAwarenessTeamApp.Models.PersonalityQuestions;
import com.HEAT.HealthEducationAwarenessTeamApp.Models.User;
import com.HEAT.HealthEducationAwarenessTeamApp.Models.UserPersonalityScore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserPersonalityScoresRepository extends JpaRepository<UserPersonalityScore, Long> {
    Optional<UserPersonalityScore> findByUser(User user);

}
