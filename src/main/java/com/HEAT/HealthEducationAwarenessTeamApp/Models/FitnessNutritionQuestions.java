package com.HEAT.HealthEducationAwarenessTeamApp.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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

    private String qpn1; // heartConditionOrHighBloodPressure
    private String qpn2; // painInChest
    private String qpn3; // loseBalanceOrConsciousness
    private String qpn4; // chronicMedicalCondition
    private String qpn4_text; // chronicMedicalConditionDetails
    private String qpn5; // takingPrescribedMedications
    private String qpn6; // boneJointOrSoftTissueProblem
    private String qpn6_text; // boneJointOrSoftTissueProblemDetails
    private String qpn7; // medicallySupervisedPhysicalActivity
    @ElementCollection
    @CollectionTable(name = "qpn8_values", joinColumns = @JoinColumn(name = "fitness_nutrition_questions_id"))
    @Column(name = "value")
    private List<String> qpn8; // fitnessNutritionGoals
    @ElementCollection
    @CollectionTable(name = "qpn9_values", joinColumns = @JoinColumn(name = "fitness_nutrition_questions_id"))
    @Column(name = "value")
    private List<String> qpn9; // obstaclesToGoals
    @ElementCollection
    @CollectionTable(name = "qpn10_values", joinColumns = @JoinColumn(name = "fitness_nutrition_questions_id"))
    @Column(name = "value")
    private List<String> qpn10; // motivations
    private String qpn11; // currentExerciseRegime
    private String qpn12; // exercisePreference
    private int qpn13; // healthPrioritization
    private int qpn14; // commitmentToFitnessGoals
    private int qpn15; // hoursOfSleep
    private int qpn16; // hoursOfSleepNeeded
    private String qpn17; // factorsAffectingSleep
    private int qpn18; // nutritionRating
    private int qpn19; // timesADayEating
    private String qpn20; // skipMeals
    private String qpn21; // eatBreakfast
    private String qpn22; // eatLateAtNight
    private String qpn23; // eatPastFullness
    private String qpn24; // findCookingClassesHelpful
    private String qpn25; // workMealPreference
    private int qpn26; // timesAWeekEatingOut
    @ElementCollection
    @CollectionTable(name = "qpn27_values", joinColumns = @JoinColumn(name = "fitness_nutrition_questions_id"))
    @Column(name = "value")
    private List<String> qpn27; // additionalResources
}
