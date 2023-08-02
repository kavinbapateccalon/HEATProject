package com.HEAT.HealthEducationAwarenessTeamApp.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name="personality_questions")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PersonalityQuestions {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    private LocalDateTime createdAt;

    private int q1;
    private int q2;
    private int q3;
    private int q4;
    private int q5;
    private int q6;
    private int q7;
    private int q8;
    private int q9;
    private int q10;
    private int q11;
    private int q12;
    private int q13;
    private int q14;
    private int q15;
    private int q16;
    private int q17;
    private int q18;
    private int q19;
    private int q20;
    private int q21;
    private int q22;
    private int q23;
    private int q24;
    private int q25;
    private int q26;
    private int q27;
    private int q28;
    private int q29;
    private int q30;
    private int q31;
    private int q32;
    private int q33;
    private int q34;
    private int q35;
    private int q36;
    private int q37;
    private int q38;
    private int q39;
    private int q40;
    private int q41;
    private int q42;
    private int q43;
    private int q44;
    private int q45;
    private int q46;
    private int q47;
    private int q48;
    private int q49;
    private int q50;
}
