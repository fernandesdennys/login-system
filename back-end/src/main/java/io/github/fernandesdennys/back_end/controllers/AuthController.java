/* package io.github.fernandesdennys.back_end.controllers;

import io.github.fernandesdennys.back_end.dto.EmailDTO;
import io.github.fernandesdennys.back_end.dto.NewPasswordDTO;
import io.github.fernandesdennys.back_end.services.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

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
}
*/

package io.github.fernandesdennys.back_end.controllers;

import io.github.fernandesdennys.back_end.dto.EmailDTO;
import io.github.fernandesdennys.back_end.dto.NewPasswordDTO;
import io.github.fernandesdennys.back_end.services.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping(value = "/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

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
    public ResponseEntity<?> login(@RequestBody EmailDTO body) {

        // 🔥 Aqui depois você vai validar email/senha de verdade
        String fakeToken = "123456789";

        return ResponseEntity.ok().body(
                Map.of("token", fakeToken)
        );
    }
}