package com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries;

import com.HEAT.HealthEducationAwarenessTeamApp.Models.MetricQuestions;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MetricQuestionsRepository extends JpaRepository<MetricQuestions, Long> { 

}
