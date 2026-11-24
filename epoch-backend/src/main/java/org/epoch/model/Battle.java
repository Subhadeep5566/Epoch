package org.epoch.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "battles")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Battle {

    @Id
    @Column(length = 64)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "war_id")
    private War war;

    @Column(nullable = false)
    private String name;

    @Column(name = "battle_date", length = 100)
    private String battleDate;

    @Column(name = "battle_year")
    private Integer battleYear;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "location_id")
    private HistoricalLocation location;

    @Column(columnDefinition = "TEXT")
    private String combatants;

    @Column(columnDefinition = "TEXT")
    private String commanders;

    @Column(columnDefinition = "TEXT")
    private String casualties;

    @Column(columnDefinition = "TEXT")
    private String outcome;

    @Column(columnDefinition = "TEXT")
    private String summary;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public War getWar() { return war; }
    public void setWar(War war) { this.war = war; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getBattleDate() { return battleDate; }
    public void setBattleDate(String battleDate) { this.battleDate = battleDate; }

    public Integer getBattleYear() { return battleYear; }
    public void setBattleYear(Integer battleYear) { this.battleYear = battleYear; }

    public HistoricalLocation getLocation() { return location; }
    public void setLocation(HistoricalLocation location) { this.location = location; }

    public String getCombatants() { return combatants; }
    public void setCombatants(String combatants) { this.combatants = combatants; }

    public String getCommanders() { return commanders; }
    public void setCommanders(String commanders) { this.commanders = commanders; }

    public String getCasualties() { return casualties; }
    public void setCasualties(String casualties) { this.casualties = casualties; }

    public String getOutcome() { return outcome; }
    public void setOutcome(String outcome) { this.outcome = outcome; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
