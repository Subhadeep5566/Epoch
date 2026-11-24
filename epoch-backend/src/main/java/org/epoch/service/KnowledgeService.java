package org.epoch.service;

import org.epoch.model.*;
import org.epoch.repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@Transactional(readOnly = true)
public class KnowledgeService {

    private final CivilizationRepository civilizationRepository;
    private final EmpireRepository empireRepository;
    private final PersonalityRepository personalityRepository;
    private final WarRepository warRepository;
    private final BattleRepository battleRepository;
    private final HistoricalEventRepository eventRepository;
    private final ReligionRepository religionRepository;
    private final HistoricalDocumentRepository documentRepository;
    private final HistoricalLocationRepository locationRepository;
    private final HistoricalPeriodRepository periodRepository;
    private final HistoricalRelationshipRepository relationshipRepository;
    private final MediaAssetRepository mediaRepository;

    public KnowledgeService(
            CivilizationRepository civilizationRepository,
            EmpireRepository empireRepository,
            PersonalityRepository personalityRepository,
            WarRepository warRepository,
            BattleRepository battleRepository,
            HistoricalEventRepository eventRepository,
            ReligionRepository religionRepository,
            HistoricalDocumentRepository documentRepository,
            HistoricalLocationRepository locationRepository,
            HistoricalPeriodRepository periodRepository,
            HistoricalRelationshipRepository relationshipRepository,
            MediaAssetRepository mediaRepository) {
        this.civilizationRepository = civilizationRepository;
        this.empireRepository = empireRepository;
        this.personalityRepository = personalityRepository;
        this.warRepository = warRepository;
        this.battleRepository = battleRepository;
        this.eventRepository = eventRepository;
        this.religionRepository = religionRepository;
        this.documentRepository = documentRepository;
        this.locationRepository = locationRepository;
        this.periodRepository = periodRepository;
        this.relationshipRepository = relationshipRepository;
        this.mediaRepository = mediaRepository;
    }

    /**
     * Finds all incoming and outgoing relationships for a given entity.
     */
    public Map<String, Object> getEntityRelationships(String entityId) {
        List<HistoricalRelationship> outgoing = relationshipRepository.findBySourceEntityId(entityId);
        List<HistoricalRelationship> incoming = relationshipRepository.findByTargetEntityId(entityId);

        Map<String, Object> result = new HashMap<>();
        result.put("entityId", entityId);
        result.put("outgoing", outgoing);
        result.put("incoming", incoming);
        return result;
    }

    /**
     * Shortest-path BFS traversal between two historical entities in the database graph.
     */
    public List<String> findShortestPath(String startId, String endId) {
        if (startId.equalsIgnoreCase(endId)) {
            return List.of(startId);
        }

        List<HistoricalRelationship> allRels = relationshipRepository.findAll();
        Map<String, Set<String>> adj = new HashMap<>();

        for (HistoricalRelationship rel : allRels) {
            adj.computeIfAbsent(rel.getSourceEntityId().toLowerCase(), k -> new HashSet<>())
               .add(rel.getTargetEntityId().toLowerCase());
            
            if (Boolean.TRUE.equals(rel.getBidirectional())) {
                adj.computeIfAbsent(rel.getTargetEntityId().toLowerCase(), k -> new HashSet<>())
                   .add(rel.getSourceEntityId().toLowerCase());
            }
        }

        String start = startId.toLowerCase();
        String end = endId.toLowerCase();

        Queue<List<String>> queue = new LinkedList<>();
        Set<String> visited = new HashSet<>();

        queue.add(List.of(start));
        visited.add(start);

        while (!queue.isEmpty()) {
            List<String> path = queue.poll();
            String current = path.get(path.size() - 1);

            Set<String> neighbors = adj.getOrDefault(current, Collections.emptySet());
            for (String neighbor : neighbors) {
                if (neighbor.equals(end)) {
                    List<String> completePath = new ArrayList<>(path);
                    completePath.add(neighbor);
                    return completePath;
                }

                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    List<String> nextPath = new ArrayList<>(path);
                    nextPath.add(neighbor);
                    queue.add(nextPath);
                }
            }
        }

        return Collections.emptyList();
    }

    /**
     * Database-wide statistics & health overview.
     */
    public Map<String, Object> getSystemStatus() {
        Map<String, Object> stats = new LinkedHashMap<>();
        stats.put("status", "UP");
        stats.put("database", "epoch_db");
        stats.put("engine", "EPOCH 2.0 Historical Knowledge Engine");
        
        Map<String, Long> counts = new LinkedHashMap<>();
        counts.put("civilizations", civilizationRepository.count());
        counts.put("empires", empireRepository.count());
        counts.put("personalities", personalityRepository.count());
        counts.put("wars", warRepository.count());
        counts.put("battles", battleRepository.count());
        counts.put("events", eventRepository.count());
        counts.put("religions", religionRepository.count());
        counts.put("documents", documentRepository.count());
        counts.put("locations", locationRepository.count());
        counts.put("periods", periodRepository.count());
        counts.put("relationships", relationshipRepository.count());
        counts.put("mediaAssets", mediaRepository.count());

        stats.put("recordCounts", counts);
        return stats;
    }
}
