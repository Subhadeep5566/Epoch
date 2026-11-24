package org.epoch.repository;

import org.epoch.model.HistoricalRelationship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface HistoricalRelationshipRepository extends JpaRepository<HistoricalRelationship, Long> {
    List<HistoricalRelationship> findBySourceEntityId(String sourceEntityId);
    List<HistoricalRelationship> findByTargetEntityId(String targetEntityId);
    List<HistoricalRelationship> findByRelationshipType(String relationshipType);
}
