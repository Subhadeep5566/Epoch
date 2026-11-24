package org.epoch.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "historical_sources")
public class HistoricalSource {

    @Id
    @Column(length = 64)
    private String id;

    @Column(nullable = false)
    private String title;

    private String author;

    @Column(name = "publication_year", length = 50)
    private String publicationYear;

    @Column(name = "source_type", length = 50)
    private String sourceType;

    private String institution;

    @Column(name = "source_url", length = 500)
    private String sourceUrl;

    @Column(name = "citation_text", columnDefinition = "TEXT")
    private String citationText;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }

    public String getPublicationYear() { return publicationYear; }
    public void setPublicationYear(String publicationYear) { this.publicationYear = publicationYear; }

    public String getSourceType() { return sourceType; }
    public void setSourceType(String sourceType) { this.sourceType = sourceType; }

    public String getInstitution() { return institution; }
    public void setInstitution(String institution) { this.institution = institution; }

    public String getSourceUrl() { return sourceUrl; }
    public void setSourceUrl(String sourceUrl) { this.sourceUrl = sourceUrl; }

    public String getCitationText() { return citationText; }
    public void setCitationText(String citationText) { this.citationText = citationText; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
