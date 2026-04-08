package com.example.portfolio.model;

import java.util.List;

public class Portfolio {
    private String name;
    private String title;
    private String bio;
    private String email;
    private String phone;
    private String github;
    private String linkedin;
    private List<String> skills;
    private List<Project> projects;

    public Portfolio() {}

    public Portfolio(String name, String title, String bio, String email, String phone, 
                     String github, String linkedin, List<String> skills, List<Project> projects) {
        this.name = name;
        this.title = title;
        this.bio = bio;
        this.email = email;
        this.phone = phone;
        this.github = github;
        this.linkedin = linkedin;
        this.skills = skills;
        this.projects = projects;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getGithub() { return github; }
    public void setGithub(String github) { this.github = github; }

    public String getLinkedin() { return linkedin; }
    public void setLinkedin(String linkedin) { this.linkedin = linkedin; }

    public List<String> getSkills() { return skills; }
    public void setSkills(List<String> skills) { this.skills = skills; }

    public List<Project> getProjects() { return projects; }
    public void setProjects(List<Project> projects) { this.projects = projects; }
}
