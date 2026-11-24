package org.epoch.controller;

import org.epoch.model.HistoricalRelationship;
import org.epoch.repository.HistoricalRelationshipRepository;
import org.epoch.service.KnowledgeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/relationships")
public class RelationshipController {

    private final HistoricalRelationshipRepository relationshipRepository;
    private final KnowledgeService knowledgeService;

    public RelationshipController(
            HistoricalRelationshipRepository relationshipRepository,
            KnowledgeService knowledgeService) {
        this.relationshipRepository = relationshipRepository;
        this.knowledgeService = knowledgeService;
    }

    @GetMapping
    public List<HistoricalRelationship> getAllRelationships() {
        return relationshipRepository.findAll();
    }

    @GetMapping("/entity/{entityId}")
    public Map<String, Object> getEntityRelationships(@PathVariable String entityId) {
        return knowledgeService.getEntityRelationships(entityId);
    }

    @GetMapping("/path")
    public ResponseEntity<?> findPath(@RequestParam String from, @RequestParam String to) {
        List<String> path = knowledgeService.findShortestPath(from, to);
        if (path.isEmpty()) {
            return ResponseEntity.ok(Map.of("connected", false, "message", "No connecting graph path found between " + from + " and " + to));
        }
        return ResponseEntity.ok(Map.of("connected", true, "path", path, "degreesOfSeparation", path.size() - 1));
    }
}
