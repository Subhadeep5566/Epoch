package org.epoch.controller;

import org.epoch.model.War;
import org.epoch.repository.WarRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wars")
public class WarController {

    private final WarRepository warRepository;

    public WarController(WarRepository warRepository) {
        this.warRepository = warRepository;
    }

    @GetMapping
    public List<War> getAllWars() {
        return warRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<War> getWarById(@PathVariable String id) {
        return warRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
