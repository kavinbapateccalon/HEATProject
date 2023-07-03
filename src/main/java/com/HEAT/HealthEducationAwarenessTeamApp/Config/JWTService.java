package com.HEAT.HealthEducationAwarenessTeamApp.Config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;


@Service
public class JWTService {

    private static final String SECRET_KEY = "e4edef82a6f215858ec5b86ef5585e6c17271f9a0bb7f286d40c81864fbd26ff";
    public String extractEmail (String jwt_token) {
        return extractClaim(jwt_token, Claims::getSubject);
    }

    // extract a single claim that we pass
    public <T> T extractClaim (String jwt_token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(jwt_token);
        return claimsResolver.apply(claims);
    }

    public String generateToken (UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken (Map<String, Object> extraClaims,
        UserDetails userDetails) {
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() * 1000 * 60 * 24)).signWith(getSignInKey(), SignatureAlgorithm.HS256).compact();
    }

    public boolean isTokenValid (String jwt_token, UserDetails userDetails) {
        final String email = extractEmail(jwt_token);
        return (email.equals(userDetails.getUsername())) && !isTokenExpired(jwt_token);
    }

    private boolean isTokenExpired (String jwt_token) {
        return extractExpiration(jwt_token).before(new Date());
    }

    private Date extractExpiration (String jwt_token) {
        return extractClaim(jwt_token, Claims::getExpiration);
    }

    private Claims extractAllClaims (String jwt_token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(jwt_token)
                .getBody();
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
