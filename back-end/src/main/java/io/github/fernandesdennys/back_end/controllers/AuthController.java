package io.github.fernandesdennys.back_end.controllers;

import io.github.fernandesdennys.back_end.dto.EmailDTO;
import io.github.fernandesdennys.back_end.dto.LoginDTO;
import io.github.fernandesdennys.back_end.dto.NewPasswordDTO;
import io.github.fernandesdennys.back_end.entities.User;
import io.github.fernandesdennys.back_end.services.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping(value = "/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping(value = "/recover-token")
    public ResponseEntity<Void> createRecoverToken(@Valid @RequestBody EmailDTO body) {
        authService.createRecoverToken(body);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(value = "/new-password")
    public ResponseEntity<Void> saveNewPassword(@Valid @RequestBody NewPasswordDTO body) {
        authService.saveNewPassword(body);
        return ResponseEntity.noContent().build();
    }

    // ✅ LOGIN FUNCIONANDO (AGORA RETORNA JSON COM TOKEN)
    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginDTO body) {

        UsernamePasswordAuthenticationToken authToken =
                new UsernamePasswordAuthenticationToken(body.getEmail(), body.getPassword());

        Authentication auth = authenticationManager.authenticate(authToken);

        User user = (User) auth.getPrincipal();

        String token = authToken.getCredentials().toString();

        return ResponseEntity.ok().body(Map.of("token", token));

    }
}