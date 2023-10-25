package com.HEAT.HealthEducationAwarenessTeamApp.Services;

import com.HEAT.HealthEducationAwarenessTeamApp.Models.PersonalityQuestions;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class PersonalityScoreService {

    public Map<String, Integer> calculateScores(PersonalityQuestions pq) {
        Map<String, Integer> scores = new HashMap<>();

        // Openness to Experience
        int opennessScore = pq.getQ5() + (6 - pq.getQ10()) + pq.getQ15() + (6 - pq.getQ20()) +
                pq.getQ25() + (6 - pq.getQ30()) + pq.getQ35() + (6 - pq.getQ40()) +
                pq.getQ45() + pq.getQ50();

        // Conscientiousness
        int conscientiousnessScore = pq.getQ3() + (6 - pq.getQ8()) + pq.getQ13() + (6 - pq.getQ18()) +
                pq.getQ23() + (6 - pq.getQ28()) + pq.getQ33() + (6 - pq.getQ38()) +
                pq.getQ43() + pq.getQ48();

        // Extraversion
        int extraversionScore = pq.getQ1() + (6 - pq.getQ6()) + pq.getQ11() + (6 - pq.getQ16()) +
                pq.getQ21() + (6 - pq.getQ26()) + pq.getQ31() + (6 - pq.getQ36()) +
                pq.getQ41() + (6 - pq.getQ46());

        // Agreeableness
        int agreeablenessScore = (6 - pq.getQ2()) + pq.getQ7() + (6 - pq.getQ12()) + pq.getQ17() +
                (6 - pq.getQ22()) + pq.getQ27() + (6 - pq.getQ32()) + pq.getQ37() +
                (6 - pq.getQ42()) + pq.getQ47();

        // Neuroticism (Emotional Stability)
        int neuroticismScore = (6 - pq.getQ4()) + pq.getQ9() + (6 - pq.getQ14()) + pq.getQ19() +
                (6 - pq.getQ24()) + pq.getQ29() + (6 - pq.getQ34()) + pq.getQ39() +
                (6 - pq.getQ44()) + pq.getQ49();

        scores.put("Openness", opennessScore);
        scores.put("Conscientiousness", conscientiousnessScore);
        scores.put("Extraversion", extraversionScore);
        scores.put("Agreeableness", agreeablenessScore);
        scores.put("Neuroticism", neuroticismScore);

        return scores;
    }

    public String categorizeScore(int score) {
        if (score >= 10 && score <= 24) {
            return "low";
        } else if (score >= 25 && score <= 35) {
            return "moderate";
        } else {
            return "high";
        }
    }
}

