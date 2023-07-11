package com.HEAT.HealthEducationAwarenessTeamApp.Config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JWTAuthenticationFilter extends OncePerRequestFilter {

    private final JWTService jwtService;
    private final UserDetailsService userDetailsService;

    public JWTAuthenticationFilter(JWTService jwtService, UserDetailsService userDetailsService) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain)
            throws ServletException, IOException {
    final String authHeader = request.getHeader("Authorization");
    final String jwt_token;
    final String email;
    if (authHeader == null || !authHeader.startsWith("Bearer ")) {
        filterChain.doFilter(request, response);
        return; // if we don't have jwt token then return
    }
    jwt_token = authHeader.substring(7);
    // extract user email from jwt token
    email = jwtService.extractEmail(jwt_token);

    // if we have user email and user is not authenticated, we get userDetails from database
    if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(email);

        // check if user is valid or not
        if (jwtService.isTokenValid(jwt_token, userDetails)) {
            // if user is valid then create the object below
            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                    // pass parameters below into the object
                    userDetails,
                    null, // don't have credentials yet because user not registered yet
                    userDetails.getAuthorities()
            );
            // set the details of our token equal to the request data
            authToken.setDetails(
                    new WebAuthenticationDetailsSource().buildDetails(request)
            );
            // update authentication token
            SecurityContextHolder.getContext().setAuthentication(authToken);
        }
    }
    filterChain.doFilter(request, response);
    }
}
