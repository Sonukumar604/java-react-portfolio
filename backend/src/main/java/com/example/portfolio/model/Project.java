package com.example.portfolio.model;

public class Project {
    private String name;
    private String description;
    private String technologies;
    private String url;

    public Project() {}

    public Project(String name, String description, String technologies, String url) {
        this.name = name;
        this.description = description;
        this.technologies = technologies;
        this.url = url;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }

    public String getTechnologies() { return technologies; }
    public void setTechnologies(String technologies) { this.technologies = technologies; }
}
