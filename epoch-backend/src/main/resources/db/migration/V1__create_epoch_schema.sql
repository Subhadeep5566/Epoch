-- =========================================================================
-- EPOCH 2.0 HISTORICAL KNOWLEDGE ENGINE - RELATIONAL DATABASE SCHEMA
-- Migration: V1__create_epoch_schema.sql
-- =========================================================================

-- 1. Historical Periods
CREATE TABLE IF NOT EXISTS historical_periods (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    native_name VARCHAR(255),
    period_span VARCHAR(100),
    start_year INT NOT NULL,
    end_year INT,
    region VARCHAR(255),
    summary TEXT,
    significance TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Geographic & Archaeological Locations
CREATE TABLE IF NOT EXISTS locations (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    native_name VARCHAR(255),
    location_type VARCHAR(50) NOT NULL, -- capital, settlement, battlefield, archaeological, religious
    latitude DECIMAL(10, 7),
    longitude DECIMAL(10, 7),
    modern_country VARCHAR(100),
    region VARCHAR(255),
    period_span VARCHAR(100),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Civilizations
CREATE TABLE IF NOT EXISTS civilizations (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    native_name VARCHAR(255),
    period_span VARCHAR(100),
    start_year INT NOT NULL,
    end_year INT,
    region VARCHAR(255),
    overview TEXT,
    capital_location_id VARCHAR(64),
    writing_system VARCHAR(255),
    government_system TEXT,
    economic_system TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_civ_capital FOREIGN KEY (capital_location_id) REFERENCES locations(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Empires and Kingdoms
CREATE TABLE IF NOT EXISTS empires (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    native_name VARCHAR(255),
    civilization_id VARCHAR(64),
    capital_location_id VARCHAR(64),
    period_span VARCHAR(100),
    start_year INT NOT NULL,
    end_year INT,
    region VARCHAR(255),
    peak_territory_sq_km BIGINT,
    summary TEXT,
    legacy TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_emp_civ FOREIGN KEY (civilization_id) REFERENCES civilizations(id) ON DELETE SET NULL,
    CONSTRAINT fk_emp_capital FOREIGN KEY (capital_location_id) REFERENCES locations(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Religions and Belief Systems
CREATE TABLE IF NOT EXISTS religions (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    native_name VARCHAR(255),
    origin_region VARCHAR(255),
    origin_location_id VARCHAR(64),
    founder_name VARCHAR(255),
    period_span VARCHAR(100),
    start_year INT,
    canonical_texts TEXT,
    core_philosophy TEXT,
    summary TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_rel_origin_loc FOREIGN KEY (origin_location_id) REFERENCES locations(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. Historical Personalities
CREATE TABLE IF NOT EXISTS personalities (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    native_name VARCHAR(255),
    title VARCHAR(255),
    birth_year VARCHAR(50),
    death_year VARCHAR(50),
    start_year INT,
    end_year INT,
    birth_location_id VARCHAR(64),
    civilization_id VARCHAR(64),
    empire_id VARCHAR(64),
    religion_id VARCHAR(64),
    role VARCHAR(255),
    biography TEXT,
    influence TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_pers_loc FOREIGN KEY (birth_location_id) REFERENCES locations(id) ON DELETE SET NULL,
    CONSTRAINT fk_pers_civ FOREIGN KEY (civilization_id) REFERENCES civilizations(id) ON DELETE SET NULL,
    CONSTRAINT fk_pers_emp FOREIGN KEY (empire_id) REFERENCES empires(id) ON DELETE SET NULL,
    CONSTRAINT fk_pers_rel FOREIGN KEY (religion_id) REFERENCES religions(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. Wars and Conflicts
CREATE TABLE IF NOT EXISTS wars (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    native_name VARCHAR(255),
    period_span VARCHAR(100),
    start_year INT NOT NULL,
    end_year INT,
    region VARCHAR(255),
    belligerents TEXT,
    casualties_estimate VARCHAR(255),
    summary TEXT,
    significance TEXT,
    outcome TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8. Battles
CREATE TABLE IF NOT EXISTS battles (
    id VARCHAR(64) PRIMARY KEY,
    war_id VARCHAR(64),
    name VARCHAR(255) NOT NULL,
    battle_date VARCHAR(100),
    battle_year INT,
    location_id VARCHAR(64),
    combatants TEXT,
    commanders TEXT,
    casualties TEXT,
    outcome TEXT,
    summary TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_battle_war FOREIGN KEY (war_id) REFERENCES wars(id) ON DELETE SET NULL,
    CONSTRAINT fk_battle_loc FOREIGN KEY (location_id) REFERENCES locations(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 9. Historical Events
CREATE TABLE IF NOT EXISTS historical_events (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    native_name VARCHAR(255),
    event_date VARCHAR(100),
    year INT NOT NULL,
    period_id VARCHAR(64),
    location_id VARCHAR(64),
    civilization_id VARCHAR(64),
    category VARCHAR(50), -- politics, war, religion, science, culture, discovery
    summary TEXT,
    significance TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_evt_period FOREIGN KEY (period_id) REFERENCES historical_periods(id) ON DELETE SET NULL,
    CONSTRAINT fk_evt_loc FOREIGN KEY (location_id) REFERENCES locations(id) ON DELETE SET NULL,
    CONSTRAINT fk_evt_civ FOREIGN KEY (civilization_id) REFERENCES civilizations(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 10. Historical Documents and Inscriptions
CREATE TABLE IF NOT EXISTS historical_documents (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    native_name VARCHAR(255),
    document_type VARCHAR(50), -- inscription, legal_code, treaty, scripture, treatise, literary_epic
    document_date VARCHAR(100),
    approx_year INT,
    author_personality_id VARCHAR(64),
    origin_location_id VARCHAR(64),
    script_language VARCHAR(255),
    full_excerpt TEXT,
    historical_context TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_doc_author FOREIGN KEY (author_personality_id) REFERENCES personalities(id) ON DELETE SET NULL,
    CONSTRAINT fk_doc_loc FOREIGN KEY (origin_location_id) REFERENCES locations(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 11. Historical Sources and Citations
CREATE TABLE IF NOT EXISTS historical_sources (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255),
    publication_year VARCHAR(50),
    source_type VARCHAR(50), -- primary_archival, academic_monograph, archaeological_report
    institution VARCHAR(255),
    source_url VARCHAR(500),
    citation_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 12. Media Assets
CREATE TABLE IF NOT EXISTS media (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    media_type VARCHAR(50) NOT NULL, -- image, manuscript_scan, artifact_photo, audio_monograph, map
    url VARCHAR(500) NOT NULL,
    asset_date VARCHAR(100),
    creator VARCHAR(255),
    institution VARCHAR(255),
    license VARCHAR(100),
    source_url VARCHAR(500),
    entity_type VARCHAR(50),
    entity_id VARCHAR(64),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_media_entity (entity_type, entity_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 13. Historical Relationships (Graph Edges)
CREATE TABLE IF NOT EXISTS historical_relationships (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    source_entity_type VARCHAR(50) NOT NULL,
    source_entity_id VARCHAR(64) NOT NULL,
    relationship_type VARCHAR(50) NOT NULL, -- ruled, participated_in, authored, caused, influenced, signed, located_in, allied_with, opposed, adhered_to
    target_entity_type VARCHAR(50) NOT NULL,
    target_entity_id VARCHAR(64) NOT NULL,
    description TEXT,
    bidirectional BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_rel_source (source_entity_id, source_entity_type),
    INDEX idx_rel_target (target_entity_id, target_entity_type),
    INDEX idx_rel_type (relationship_type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
