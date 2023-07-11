package com.HEAT.HealthEducationAwarenessTeamApp.Models;

import jakarta.persistence.*;

@Entity // will create table called assignment based on class name
public class Questionnaire {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String question;
    private String type;
    private String answer;
   // private User questionedTo;
    @ManyToOne(optional = false)
    private User user;
    public long getId() {
        return id;
    }

    public String getQuestion() {
        return question;
    }

    public String getType() {
        return type;
    }

    public String getAnswer() {
        return answer;
    }

//    public User getQuestionedTo() {
//        return questionedTo;
//    }


    public User getUser() {
        return user;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

//    public void setQuestionedTo(User questionedTo) {
//        this.questionedTo = questionedTo;
//    }


    public void setUser(User user) {
        this.user = user;
    }
}
