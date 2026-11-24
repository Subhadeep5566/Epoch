package org.epoch.repository;

import org.epoch.model.HistoricalPeriod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoricalPeriodRepository extends JpaRepository<HistoricalPeriod, String> {
}
