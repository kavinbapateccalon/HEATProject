package com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries;

import com.HEAT.HealthEducationAwarenessTeamApp.Models.FitnessNutritionQuestions;
import com.HEAT.HealthEducationAwarenessTeamApp.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FitnessNutritionQuestionsRepository extends JpaRepository<FitnessNutritionQuestions, Long> {
    Optional<FitnessNutritionQuestions> findByUser(User user);

}
