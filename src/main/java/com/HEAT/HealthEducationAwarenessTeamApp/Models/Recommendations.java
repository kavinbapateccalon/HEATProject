package com.HEAT.HealthEducationAwarenessTeamApp.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="recommendations")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Recommendations {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user_id;
    private String category;  // 'Fitness', 'Nutrition', or 'Psychological'
    private String type; // personality, physical_nutrition
    private String recommendationText;

}
