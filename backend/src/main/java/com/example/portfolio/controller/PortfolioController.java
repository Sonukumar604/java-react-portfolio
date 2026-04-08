package com.example.portfolio.controller;

import com.example.portfolio.model.Portfolio;
import com.example.portfolio.model.Project;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    @GetMapping("/portfolio")
    public Portfolio getPortfolio() {
        List<String> skills = Arrays.asList(
            "Java", "Spring Boot", "React", "HTML/CSS", 
            "JavaScript", "REST APIs", "Maven", "Git", "MySQL"
        );

        List<Project> projects = Arrays.asList(
            new Project(
                "E-Commerce Platform",
                "Full-stack Java Spring Boot and React web application",
                "Spring Boot, React, MySQL, REST APIs",
                "https://github.com/Sonukumar604i"
            ),
            new Project(
                "Task Management System",
                "REST API for task management with React frontend",
                "Spring Boot, React, PostgreSQL, Axios",
                "https://github.com/Sonukumar604i"
            ),
            new Project(
                "Portfolio Website",
                "Personal portfolio built with Spring Boot and React",
                "Java, Spring Boot, React, CSS3",
                "https://github.com/Sonukumar604i"
            )
        );

        return new Portfolio(
            "Sonu Kumar",
            "Java & React Developer",
            "Passionate developer building full-stack applications with Java Spring Boot and React",
            "sonusaini48292@gmail.com",
            "+91-8708788127",
            "https://github.com/Sonukumar604",
            "www.linkedin.com/in/sonu-kumar-940b9b304",
            skills,
            projects
        );
    }
}
