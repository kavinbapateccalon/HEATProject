package com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries;

import com.HEAT.HealthEducationAwarenessTeamApp.Models.PersonalityQuestions;
import com.HEAT.HealthEducationAwarenessTeamApp.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PersonalityQuestionsRepository extends JpaRepository<PersonalityQuestions, Long> {
    Optional<PersonalityQuestions> findByUser(User user);

}
