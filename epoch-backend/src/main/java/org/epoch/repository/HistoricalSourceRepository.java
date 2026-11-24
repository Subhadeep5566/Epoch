package org.epoch.repository;

import org.epoch.model.HistoricalSource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoricalSourceRepository extends JpaRepository<HistoricalSource, String> {
}
