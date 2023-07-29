package com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries;

import com.HEAT.HealthEducationAwarenessTeamApp.Models.Group;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GroupsRepository extends JpaRepository<Group, Long> { // User, Long correspond to the class name, primary key of users table variable type
//    boolean existsByUserIdAndGroupId(Long userId, Long groupId);

}
