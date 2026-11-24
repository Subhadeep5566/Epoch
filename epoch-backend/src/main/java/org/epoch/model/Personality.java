package org.epoch.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "personalities")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Personality {

    @Id
    @Column(length = 64)
    private String id;

    @Column(nullable = false)
    private String name;

    @Column(name = "native_name")
    private String nativeName;

    private String title;

    @Column(name = "birth_year", length = 50)
    private String birthYear;

    @Column(name = "death_year", length = 50)
    private String deathYear;

    @Column(name = "start_year")
    private Integer startYear;

    @Column(name = "end_year")
    private Integer endYear;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "birth_location_id")
    private HistoricalLocation birthLocation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "civilization_id")
    private Civilization civilization;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "empire_id")
    private Empire empire;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "religion_id")
    private Religion religion;

    private String role;

    @Column(columnDefinition = "TEXT")
    private String biography;

    @Column(columnDefinition = "TEXT")
    private String influence;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getNativeName() { return nativeName; }
    public void setNativeName(String nativeName) { this.nativeName = nativeName; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getBirthYear() { return birthYear; }
    public void setBirthYear(String birthYear) { this.birthYear = birthYear; }

    public String getDeathYear() { return deathYear; }
    public void setDeathYear(String deathYear) { this.deathYear = deathYear; }

    public Integer getStartYear() { return startYear; }
    public void setStartYear(Integer startYear) { this.startYear = startYear; }

    public Integer getEndYear() { return endYear; }
    public void setEndYear(Integer endYear) { this.endYear = endYear; }

    public HistoricalLocation getBirthLocation() { return birthLocation; }
    public void setBirthLocation(HistoricalLocation birthLocation) { this.birthLocation = birthLocation; }

    public Civilization getCivilization() { return civilization; }
    public void setCivilization(Civilization civilization) { this.civilization = civilization; }

    public Empire getEmpire() { return empire; }
    public void setEmpire(Empire empire) { this.empire = empire; }

    public Religion getReligion() { return religion; }
    public void setReligion(Religion religion) { this.religion = religion; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getBiography() { return biography; }
    public void setBiography(String biography) { this.biography = biography; }

    public String getInfluence() { return influence; }
    public void setInfluence(String influence) { this.influence = influence; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
