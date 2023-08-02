package com.HEAT.HealthEducationAwarenessTeamApp.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="fitness_nutrition_questions")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FitnessNutritionQuestions {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String heartConditionOrHighBloodPressure; // qf1
    private String painInChest; // qf2
    private String loseBalanceOrConsciousness; // qf3
    private String chronicMedicalCondition; // qf4
    private String chronicMedicalConditionDetails; // qf4_2
    private String takingPrescribedMedications; // qf5
    private String boneJointOrSoftTissueProblem; // qf6
    private String boneJointOrSoftTissueProblemDetails; // qf6_2
    private String medicallySupervisedPhysicalActivity; // qf7
    private String fitnessNutritionGoals; // qf8
    private String obstaclesToGoals; // qf9
    private String motivations; // qf10
    private String currentExerciseRegime; // qf11
    private String exercisePreference; // qf12
    private int healthPrioritization; // qf13
    private int commitmentToFitnessGoals; // qf14
    private int hoursOfSleep; // qf15
    private int hoursOfSleepNeeded; // qf16
    private String factorsAffectingSleep; // qf17
    private int nutritionRating; // qf18
    private int timesADayEating; // qf19
    private String skipMeals; // qf20
    private String eatBreakfast; // qf21
    private String eatLateAtNight; // qf22
    private String eatPastFullness; // qf23
    private String findCookingClassesHelpful; // qf24
    private String workMealPreference; // qf25
    private int timesAWeekEatingOut; // qf26
    private String additionalResources; // qf27
}
