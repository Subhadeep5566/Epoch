package org.epoch.controller;

import org.epoch.model.Personality;
import org.epoch.repository.PersonalityRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/personalities")
public class PersonalityController {

    private final PersonalityRepository personalityRepository;

    public PersonalityController(PersonalityRepository personalityRepository) {
        this.personalityRepository = personalityRepository;
    }

    @GetMapping
    public List<Personality> getAllPersonalities() {
        return personalityRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Personality> getPersonalityById(@PathVariable String id) {
        return personalityRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
