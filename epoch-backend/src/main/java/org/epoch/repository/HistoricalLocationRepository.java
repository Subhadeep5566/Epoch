package org.epoch.repository;

import org.epoch.model.HistoricalLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface HistoricalLocationRepository extends JpaRepository<HistoricalLocation, String> {
    List<HistoricalLocation> findByLocationType(String locationType);
}
