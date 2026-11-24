package org.epoch.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "civilizations")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Civilization {

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
    private String overview;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "capital_location_id")
    private HistoricalLocation capitalLocation;

    @Column(name = "writing_system")
    private String writingSystem;

    @Column(name = "government_system", columnDefinition = "TEXT")
    private String governmentSystem;

    @Column(name = "economic_system", columnDefinition = "TEXT")
    private String economicSystem;

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

    public String getOverview() { return overview; }
    public void setOverview(String overview) { this.overview = overview; }

    public HistoricalLocation getCapitalLocation() { return capitalLocation; }
    public void setCapitalLocation(HistoricalLocation capitalLocation) { this.capitalLocation = capitalLocation; }

    public String getWritingSystem() { return writingSystem; }
    public void setWritingSystem(String writingSystem) { this.writingSystem = writingSystem; }

    public String getGovernmentSystem() { return governmentSystem; }
    public void setGovernmentSystem(String governmentSystem) { this.governmentSystem = governmentSystem; }

    public String getEconomicSystem() { return economicSystem; }
    public void setEconomicSystem(String economicSystem) { this.economicSystem = economicSystem; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
