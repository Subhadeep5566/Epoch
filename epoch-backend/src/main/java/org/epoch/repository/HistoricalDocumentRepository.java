package org.epoch.repository;

import org.epoch.model.HistoricalDocument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface HistoricalDocumentRepository extends JpaRepository<HistoricalDocument, String> {
    List<HistoricalDocument> findByDocumentType(String documentType);
}
