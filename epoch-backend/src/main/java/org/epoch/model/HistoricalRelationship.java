package org.epoch.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "historical_relationships")
public class HistoricalRelationship {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "source_entity_type", nullable = false, length = 50)
    private String sourceEntityType;

    @Column(name = "source_entity_id", nullable = false, length = 64)
    private String sourceEntityId;

    @Column(name = "relationship_type", nullable = false, length = 50)
    private String relationshipType;

    @Column(name = "target_entity_type", nullable = false, length = 50)
    private String targetEntityType;

    @Column(name = "target_entity_id", nullable = false, length = 64)
    private String targetEntityId;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private Boolean bidirectional = false;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getSourceEntityType() { return sourceEntityType; }
    public void setSourceEntityType(String sourceEntityType) { this.sourceEntityType = sourceEntityType; }

    public String getSourceEntityId() { return sourceEntityId; }
    public void setSourceEntityId(String sourceEntityId) { this.sourceEntityId = sourceEntityId; }

    public String getRelationshipType() { return relationshipType; }
    public void setRelationshipType(String relationshipType) { this.relationshipType = relationshipType; }

    public String getTargetEntityType() { return targetEntityType; }
    public void setTargetEntityType(String targetEntityType) { this.targetEntityType = targetEntityType; }

    public String getTargetEntityId() { return targetEntityId; }
    public void setTargetEntityId(String targetEntityId) { this.targetEntityId = targetEntityId; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Boolean getBidirectional() { return bidirectional; }
    public void setBidirectional(Boolean bidirectional) { this.bidirectional = bidirectional; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
