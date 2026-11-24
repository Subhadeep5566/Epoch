package org.epoch.repository;

import org.epoch.model.Empire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface EmpireRepository extends JpaRepository<Empire, String> {
    List<Empire> findByCivilizationId(String civilizationId);
}
