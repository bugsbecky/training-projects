package com.carsharing.controller;
import com.carsharing.dto.LoginRequest;
import com.carsharing.dto.LoginResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController 
@RequestMapping("/api/auth")


public class AuthController {
    private static final String TEST_EMAIL = "test@example.com";
    private static final String TEST_PASSWORD= "password123";
    private static final String TEST_TOKEN = "test-token-abc123";
    
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        if(request.getEmail().equals(TEST_EMAIL) && request.getPassword().equals(TEST_PASSWORD)) {
            return ResponseEntity.ok(new LoginResponse(TEST_TOKEN));
        }
        else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
    
}

/*What this class does
Listens for POST /api/auth/login
Reads email + password from the request body
Checks them against your hard-coded test user
Returns { "token": "..." } or 401 Unauthorized*/