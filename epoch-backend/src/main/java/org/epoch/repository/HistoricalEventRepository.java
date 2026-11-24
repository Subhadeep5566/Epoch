package org.epoch.repository;

import org.epoch.model.HistoricalEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface HistoricalEventRepository extends JpaRepository<HistoricalEvent, String> {
    List<HistoricalEvent> findByCategory(String category);
    List<HistoricalEvent> findByYearBetween(Integer startYear, Integer endYear);
}
