package org.epoch;

import org.epoch.model.Personality;
import org.epoch.repository.CivilizationRepository;
import org.epoch.repository.PersonalityRepository;
import org.epoch.repository.WarRepository;
import org.epoch.service.KnowledgeService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class EpochApplicationTests {

    @Autowired
    private CivilizationRepository civilizationRepository;

    @Autowired
    private PersonalityRepository personalityRepository;

    @Autowired
    private WarRepository warRepository;

    @Autowired
    private KnowledgeService knowledgeService;

    @Test
    @DisplayName("Verify Spring Boot Context Loads Successfully")
    void contextLoads() {
        assertNotNull(knowledgeService, "KnowledgeService should be autowired");
    }

    @Test
    @DisplayName("Verify Flyway Seeded Civilizations in MySQL")
    void verifyCivilizationsSeeded() {
        long count = civilizationRepository.count();
        assertTrue(count >= 5, "Expected at least 5 seeded civilizations in epoch_db");
        assertTrue(civilizationRepository.existsById("indus-valley"), "Indus Valley must exist");
        assertTrue(civilizationRepository.existsById("ancient-egypt"), "Ancient Egypt must exist");
    }

    @Test
    @DisplayName("Verify Ashoka the Great Personality and Attributes")
    void verifyAshokaPersonality() {
        Optional<Personality> ashokaOpt = personalityRepository.findById("ashoka");
        assertTrue(ashokaOpt.isPresent(), "Ashoka should exist in database");

        Personality ashoka = ashokaOpt.get();
        assertEquals("Ashoka the Great", ashoka.getName());
        assertNotNull(ashoka.getEmpire(), "Ashoka must link to an empire");
        assertEquals("mauryan-empire", ashoka.getEmpire().getId());
    }

    @Test
    @DisplayName("Verify Kalinga War Seeded in MySQL")
    void verifyKalingaWar() {
        assertTrue(warRepository.existsById("kalinga-war"), "Kalinga War must exist in wars table");
        assertTrue(warRepository.existsById("world-war-ii"), "World War II must exist in wars table");
    }

    @Test
    @DisplayName("Verify Graph Relationship Traversal (Ashoka -> Kalinga War)")
    void verifyGraphTraversal() {
        List<String> path = knowledgeService.findShortestPath("ashoka", "kalinga-war");
        assertFalse(path.isEmpty(), "Path between Ashoka and Kalinga War must be found");
        assertEquals("ashoka", path.get(0));
        assertEquals("kalinga-war", path.get(path.size() - 1));
    }

    @Test
    @DisplayName("Verify System Health & Record Count Aggregation")
    void verifySystemStatus() {
        Map<String, Object> status = knowledgeService.getSystemStatus();
        assertEquals("UP", status.get("status"));
        assertEquals("epoch_db", status.get("database"));

        @SuppressWarnings("unchecked")
        Map<String, Long> counts = (Map<String, Long>) status.get("recordCounts");
        assertNotNull(counts);
        assertTrue(counts.get("civilizations") > 0);
        assertTrue(counts.get("personalities") > 0);
        assertTrue(counts.get("wars") > 0);
        assertTrue(counts.get("relationships") > 0);
    }
}
