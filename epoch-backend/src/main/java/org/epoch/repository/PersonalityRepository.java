package org.epoch.repository;

import org.epoch.model.Personality;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PersonalityRepository extends JpaRepository<Personality, String> {
    List<Personality> findByCivilizationId(String civilizationId);
    List<Personality> findByEmpireId(String empireId);
}
