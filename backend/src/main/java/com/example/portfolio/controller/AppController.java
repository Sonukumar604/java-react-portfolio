package com.example.portfolio.controller;

import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

    @GetMapping("/")
    public Map<String, String> root() {
        return Map.of(
            "status", "running",
            "message", "Portfolio backend is running. Open http://localhost:3000 for the React app.",
            "portfolioApi", "http://localhost:8080/api/portfolio",
            "contactApi", "http://localhost:8080/api/contact"
        );
    }

    @GetMapping("/api/health")
    public Map<String, String> health() {
        return Map.of("status", "ok");
    }
}
