package com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries;

import com.HEAT.HealthEducationAwarenessTeamApp.Models.PersonalityQuestions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalityQuestionsRepository extends JpaRepository<PersonalityQuestions, Long> {
}
