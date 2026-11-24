package org.epoch.repository;

import org.epoch.model.Battle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BattleRepository extends JpaRepository<Battle, String> {
    List<Battle> findByWarId(String warId);
}
