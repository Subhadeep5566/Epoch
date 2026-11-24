package org.epoch.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "religions")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Religion {

    @Id
    @Column(length = 64)
    private String id;

    @Column(nullable = false)
    private String name;

    @Column(name = "native_name")
    private String nativeName;

    @Column(name = "origin_region")
    private String originRegion;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "origin_location_id")
    private HistoricalLocation originLocation;

    @Column(name = "founder_name")
    private String founderName;

    @Column(name = "period_span", length = 100)
    private String periodSpan;

    @Column(name = "start_year")
    private Integer startYear;

    @Column(name = "canonical_texts", columnDefinition = "TEXT")
    private String canonicalTexts;

    @Column(name = "core_philosophy", columnDefinition = "TEXT")
    private String corePhilosophy;

    @Column(columnDefinition = "TEXT")
    private String summary;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getNativeName() { return nativeName; }
    public void setNativeName(String nativeName) { this.nativeName = nativeName; }

    public String getOriginRegion() { return originRegion; }
    public void setOriginRegion(String originRegion) { this.originRegion = originRegion; }

    public HistoricalLocation getOriginLocation() { return originLocation; }
    public void setOriginLocation(HistoricalLocation originLocation) { this.originLocation = originLocation; }

    public String getFounderName() { return founderName; }
    public void setFounderName(String founderName) { this.founderName = founderName; }

    public String getPeriodSpan() { return periodSpan; }
    public void setPeriodSpan(String periodSpan) { this.periodSpan = periodSpan; }

    public Integer getStartYear() { return startYear; }
    public void setStartYear(Integer startYear) { this.startYear = startYear; }

    public String getCanonicalTexts() { return canonicalTexts; }
    public void setCanonicalTexts(String canonicalTexts) { this.canonicalTexts = canonicalTexts; }

    public String getCorePhilosophy() { return corePhilosophy; }
    public void setCorePhilosophy(String corePhilosophy) { this.corePhilosophy = corePhilosophy; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
