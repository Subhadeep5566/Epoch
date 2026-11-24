package org.epoch.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "empires")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Empire {

    @Id
    @Column(length = 64)
    private String id;

    @Column(nullable = false)
    private String name;

    @Column(name = "native_name")
    private String nativeName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "civilization_id")
    private Civilization civilization;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "capital_location_id")
    private HistoricalLocation capitalLocation;

    @Column(name = "period_span", length = 100)
    private String periodSpan;

    @Column(name = "start_year", nullable = false)
    private Integer startYear;

    @Column(name = "end_year")
    private Integer endYear;

    private String region;

    @Column(name = "peak_territory_sq_km")
    private Long peakTerritorySqKm;

    @Column(columnDefinition = "TEXT")
    private String summary;

    @Column(columnDefinition = "TEXT")
    private String legacy;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getNativeName() { return nativeName; }
    public void setNativeName(String nativeName) { this.nativeName = nativeName; }

    public Civilization getCivilization() { return civilization; }
    public void setCivilization(Civilization civilization) { this.civilization = civilization; }

    public HistoricalLocation getCapitalLocation() { return capitalLocation; }
    public void setCapitalLocation(HistoricalLocation capitalLocation) { this.capitalLocation = capitalLocation; }

    public String getPeriodSpan() { return periodSpan; }
    public void setPeriodSpan(String periodSpan) { this.periodSpan = periodSpan; }

    public Integer getStartYear() { return startYear; }
    public void setStartYear(Integer startYear) { this.startYear = startYear; }

    public Integer getEndYear() { return endYear; }
    public void setEndYear(Integer endYear) { this.endYear = endYear; }

    public String getRegion() { return region; }
    public void setRegion(String region) { this.region = region; }

    public Long getPeakTerritorySqKm() { return peakTerritorySqKm; }
    public void setPeakTerritorySqKm(Long peakTerritorySqKm) { this.peakTerritorySqKm = peakTerritorySqKm; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }

    public String getLegacy() { return legacy; }
    public void setLegacy(String legacy) { this.legacy = legacy; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
