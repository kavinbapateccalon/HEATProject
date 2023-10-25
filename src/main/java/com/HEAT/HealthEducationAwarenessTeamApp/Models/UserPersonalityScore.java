package com.HEAT.HealthEducationAwarenessTeamApp.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "user_personality_scores")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserPersonalityScore {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    private int opennessScore;
    private int conscientiousnessScore;
    private int extraversionScore;
    private int agreeablenessScore;
    private int neuroticismScore;
}
