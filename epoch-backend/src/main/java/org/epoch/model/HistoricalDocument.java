package org.epoch.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "historical_documents")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class HistoricalDocument {

    @Id
    @Column(length = 64)
    private String id;

    @Column(nullable = false)
    private String title;

    @Column(name = "native_name")
    private String nativeName;

    @Column(name = "document_type", length = 50)
    private String documentType;

    @Column(name = "document_date", length = 100)
    private String documentDate;

    @Column(name = "approx_year")
    private Integer approxYear;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_personality_id")
    private Personality author;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "origin_location_id")
    private HistoricalLocation originLocation;

    @Column(name = "script_language")
    private String scriptLanguage;

    @Column(name = "full_excerpt", columnDefinition = "TEXT")
    private String fullExcerpt;

    @Column(name = "historical_context", columnDefinition = "TEXT")
    private String historicalContext;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getNativeName() { return nativeName; }
    public void setNativeName(String nativeName) { this.nativeName = nativeName; }

    public String getDocumentType() { return documentType; }
    public void setDocumentType(String documentType) { this.documentType = documentType; }

    public String getDocumentDate() { return documentDate; }
    public void setDocumentDate(String documentDate) { this.documentDate = documentDate; }

    public Integer getApproxYear() { return approxYear; }
    public void setApproxYear(Integer approxYear) { this.approxYear = approxYear; }

    public Personality getAuthor() { return author; }
    public void setAuthor(Personality author) { this.author = author; }

    public HistoricalLocation getOriginLocation() { return originLocation; }
    public void setOriginLocation(HistoricalLocation originLocation) { this.originLocation = originLocation; }

    public String getScriptLanguage() { return scriptLanguage; }
    public void setScriptLanguage(String scriptLanguage) { this.scriptLanguage = scriptLanguage; }

    public String getFullExcerpt() { return fullExcerpt; }
    public void setFullExcerpt(String fullExcerpt) { this.fullExcerpt = fullExcerpt; }

    public String getHistoricalContext() { return historicalContext; }
    public void setHistoricalContext(String historicalContext) { this.historicalContext = historicalContext; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
