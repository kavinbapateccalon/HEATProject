package com.HEAT.HealthEducationAwarenessTeamApp.Controllers;
import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.GroupsRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.PostsRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.JPAqueries.UserRepository;
import com.HEAT.HealthEducationAwarenessTeamApp.Models.Group;
import com.HEAT.HealthEducationAwarenessTeamApp.Models.Post;
import com.HEAT.HealthEducationAwarenessTeamApp.Models.User;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import com.HEAT.HealthEducationAwarenessTeamApp.DTO.GroupDTO;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/social")
public class SocialController {

    private final UserRepository userRepository;
    private final GroupsRepository groupsRepository;
    @Autowired
    private PostsRepository postsRepository;

    @Autowired
    private ModelMapper modelMapper;
//    @PostMapping("/{displayName}/add-friend")
//    public void addFriend(@AuthenticationPrincipal User user, @PathVariable String displayName) {
//        Optional<User> friendUser = userRepository.findByDisplayName(displayName);
//        if (friendUser.isPresent()) {
//            User currentUser = userRepository.getById(user.getId());
//            User friend = friendUser.get();
//            currentUser.getFriends().add(friend);
//            userRepository.save(currentUser);
//        } else {
//            // Friend user not found, handle accordingly (e.g., return a 404 error)
//            ResponseEntity.ok("Friend not found");
//        }
//    }
//
//    @GetMapping("/user/get-friends")
//    public ResponseEntity<List<User>> getUserFriends(@AuthenticationPrincipal User user) {
//        Optional<User> currentUserOptional = userRepository.findById(user.getId());
//
//        if (currentUserOptional.isPresent()) {
//            User currentUser = currentUserOptional.get();
//
//            List<User> friends = currentUser.getFriends();
//
//            return ResponseEntity.ok(friends);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
//
//    @DeleteMapping("/{displayName}/remove-friend")
//    public ResponseEntity<?> removeFriend(@AuthenticationPrincipal User user, @PathVariable String displayName) {
//        Optional<User> friendUser = userRepository.findByDisplayName(displayName);
//
//        if (friendUser.isPresent()) {
//            User currentUser = userRepository.findById(user.getId()).orElseThrow();
//            User friend = friendUser.get();
//
//            currentUser.getFriends().remove(friend);
//            userRepository.save(currentUser);
//
//            return ResponseEntity.ok("Friend removed successfully");
//        } else {
//            // Friend user not found, handle accordingly (e.g., return a 404 error)
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Friend not found");
//        }
//    }

    @PostMapping("/group/create")
    public ResponseEntity<GroupDTO> newGroup(@AuthenticationPrincipal User user, @RequestBody Group group) {
        group.setMembers(Arrays.asList(user));
        Group savedGroup = groupsRepository.save(group);

        GroupDTO groupDTO = new GroupDTO();
        groupDTO.setId(savedGroup.getId());
        groupDTO.setName(savedGroup.getName());
        // Set any other properties you included in GroupDTO

        return ResponseEntity.ok(groupDTO);
    }

    @PostMapping("/group/{groupId}/join")
    public ResponseEntity<?> joinGroup(@AuthenticationPrincipal User user, @PathVariable Long groupId) {
        Optional<Group> optionalGroup = groupsRepository.findById(groupId);

        if (optionalGroup.isPresent()) {
            Group group = optionalGroup.get();

            // Check if the user is already a member of the group
            if (group.getMembers().contains(user)) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("User is already a member of this group");
            }

            // Modify on the user side
            user.getGroups().add(group);
            userRepository.save(user); // save the user

            return ResponseEntity.ok("Joined group successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Group not found");
        }
    }


    // Get all groups that exist
    @GetMapping("/group/all")
    public ResponseEntity<List<GroupDTO>> getAllGroups() {
        List<Group> groups = groupsRepository.findAll();
        List<GroupDTO> groupDTOs = groups.stream()
                .map(group -> modelMapper.map(group, GroupDTO.class))
                .collect(Collectors.toList());

        return ResponseEntity.ok(groupDTOs);
    }

    // Get all groups that the user is currently in
    @GetMapping("/group/my-groups")
    public ResponseEntity<List<GroupDTO>> getMyGroups(@AuthenticationPrincipal User user) {
        List<Group> groups = user.getGroups();
        List<GroupDTO> groupDTOs = groups.stream()
                .map(group -> modelMapper.map(group, GroupDTO.class))
                .collect(Collectors.toList());

        return ResponseEntity.ok(groupDTOs);
    }

    // Leave a group that a user is currently in
    @PostMapping("/group/leave/{groupId}")
    public ResponseEntity<?> leaveGroup(@AuthenticationPrincipal User user, @PathVariable Long groupId) {
        Optional<Group> groupOptional = groupsRepository.findById(groupId);

        if (groupOptional.isPresent()) {
            Group group = groupOptional.get();
            User currentUser = userRepository.findById(user.getId()).orElseThrow();

            // Remove the group from the user's list of groups
            currentUser.getGroups().remove(group);

            // Save the user
            userRepository.save(currentUser);

            return ResponseEntity.ok("You have left the group");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/group/{groupId}/get-group")
    public ResponseEntity<GroupDTO> getGroup(@PathVariable Long groupId) {
        Optional<Group> optionalGroup = groupsRepository.findById(groupId);

        if (optionalGroup.isPresent()) {
            Group group = optionalGroup.get();
            GroupDTO groupDTO = modelMapper.map(group, GroupDTO.class);
            return ResponseEntity.ok(groupDTO);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }



    @PostMapping("/group/{groupId}/create-post")
    public ResponseEntity<?> createPost(@AuthenticationPrincipal User user,
                                        @PathVariable Long groupId,
                                        @RequestBody Post post) {
        Optional<Group> optionalGroup = groupsRepository.findById(groupId);

        if (optionalGroup.isPresent()) {
            Group group = optionalGroup.get();

            boolean isUserAMember = group.getMembers()
                    .stream()
                    .anyMatch(member -> member.getId() == user.getId());

            if (isUserAMember) {
                post.setUser(user);
                post.setGroup(group);
                post.setCreatedAt(LocalDateTime.now());
                Post savedPost = postsRepository.save(post);
                return ResponseEntity.ok(savedPost);
            } else {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You are not a member of this group");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Group not found");
        }
    }


    @GetMapping("/group/{groupId}/get-posts")
    public ResponseEntity<List<Post>> getGroupPosts(@PathVariable Long groupId) {
        List<Post> posts = postsRepository.findAllByGroupId(groupId);
        return ResponseEntity.ok(posts);
    }

}
