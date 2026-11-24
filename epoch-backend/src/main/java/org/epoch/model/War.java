package org.epoch.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "wars")
public class War {

    @Id
    @Column(length = 64)
    private String id;

    @Column(nullable = false)
    private String name;

    @Column(name = "native_name")
    private String nativeName;

    @Column(name = "period_span", length = 100)
    private String periodSpan;

    @Column(name = "start_year", nullable = false)
    private Integer startYear;

    @Column(name = "end_year")
    private Integer endYear;

    private String region;

    @Column(columnDefinition = "TEXT")
    private String belligerents;

    @Column(name = "casualties_estimate")
    private String casualtiesEstimate;

    @Column(columnDefinition = "TEXT")
    private String summary;

    @Column(columnDefinition = "TEXT")
    private String significance;

    @Column(columnDefinition = "TEXT")
    private String outcome;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getNativeName() { return nativeName; }
    public void setNativeName(String nativeName) { this.nativeName = nativeName; }

    public String getPeriodSpan() { return periodSpan; }
    public void setPeriodSpan(String periodSpan) { this.periodSpan = periodSpan; }

    public Integer getStartYear() { return startYear; }
    public void setStartYear(Integer startYear) { this.startYear = startYear; }

    public Integer getEndYear() { return endYear; }
    public void setEndYear(Integer endYear) { this.endYear = endYear; }

    public String getRegion() { return region; }
    public void setRegion(String region) { this.region = region; }

    public String getBelligerents() { return belligerents; }
    public void setBelligerents(String belligerents) { this.belligerents = belligerents; }

    public String getCasualtiesEstimate() { return casualtiesEstimate; }
    public void setCasualtiesEstimate(String casualtiesEstimate) { this.casualtiesEstimate = casualtiesEstimate; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }

    public String getSignificance() { return significance; }
    public void setSignificance(String significance) { this.significance = significance; }

    public String getOutcome() { return outcome; }
    public void setOutcome(String outcome) { this.outcome = outcome; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
