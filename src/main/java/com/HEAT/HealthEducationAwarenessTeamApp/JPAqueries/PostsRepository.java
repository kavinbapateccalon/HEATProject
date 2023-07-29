package com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries;

import com.HEAT.HealthEducationAwarenessTeamApp.Models.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PostsRepository extends JpaRepository<Post, Long> {
    List<Post> findAllByGroupId(Long groupId); // User, Long correspond to the class name, primary key of users table variable type


}