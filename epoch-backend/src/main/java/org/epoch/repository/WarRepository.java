package org.epoch.repository;

import org.epoch.model.War;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface WarRepository extends JpaRepository<War, String> {
    List<War> findByRegionIgnoreCase(String region);
}
