package org.epoch.controller;

import org.epoch.model.Civilization;
import org.epoch.repository.CivilizationRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/civilizations")
public class CivilizationController {

    private final CivilizationRepository civilizationRepository;

    public CivilizationController(CivilizationRepository civilizationRepository) {
        this.civilizationRepository = civilizationRepository;
    }

    @GetMapping
    public List<Civilization> getAllCivilizations() {
        return civilizationRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Civilization> getCivilizationById(@PathVariable String id) {
        return civilizationRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/region/{region}")
    public List<Civilization> getCivilizationsByRegion(@PathVariable String region) {
        return civilizationRepository.findByRegionIgnoreCase(region);
    }
}
