package org.epoch.repository;

import org.epoch.model.MediaAsset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MediaAssetRepository extends JpaRepository<MediaAsset, String> {
    List<MediaAsset> findByEntityTypeAndEntityId(String entityType, String entityId);
}
