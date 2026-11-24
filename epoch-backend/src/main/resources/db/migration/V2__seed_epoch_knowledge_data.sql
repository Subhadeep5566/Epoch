-- =========================================================================
-- EPOCH 2.0 HISTORICAL KNOWLEDGE ENGINE - SEED DATA
-- Migration: V2__seed_epoch_knowledge_data.sql
-- =========================================================================

-- 1. Historical Periods
INSERT INTO historical_periods (id, name, native_name, period_span, start_year, end_year, region, summary, significance) VALUES
('bronze-age', 'The Bronze Age', 'Bronze Age', 'c. 3300 – 1200 BCE', -3300, -1200, 'Near East, South Asia, Mediterranean', 'Era of copper-tin metallurgy, emergence of first territorial states, writing systems, and urban networks.', 'Witnessed the birth of urban civilization in Mesopotamia, Egypt, and the Indus Valley.'),
('iron-age', 'The Iron Age', 'Iron Age', 'c. 1200 – 500 BCE', -1200, -500, 'Eurasia and Africa', 'Adoption of wrought iron smelting leading to agricultural expansion and mass military armaments.', 'Democratized metallurgy and enabled larger imperial confederations.'),
('classical-antiquity', 'Classical Antiquity', 'Greco-Roman & Classical Era', 'c. 8th Century BCE – 5th Century CE', -800, 500, 'Mediterranean, South Asia, East Asia', 'Period of interlocking philosophical, legal, and imperial achievements across Greece, Rome, India, and China.', 'Formulated enduring legal, philosophical, and political foundations of human civilization.'),
('middle-ages', 'The Middle Ages', 'Mediaeval Era', 'c. 500 – 1500 CE', 500, 1500, 'Europe, Middle East, Asia', 'Transitional era from classical collapse to modern dawn, marked by monastic scholarship, Islamic Golden Age, and feudal states.', 'Preserved and synthesized scientific and spiritual literatures across continents.'),
('early-modern', 'Early Modern Era', 'Early Modernity', 'c. 1500 – 1800 CE', 1500, 1800, 'Global', 'Inaugurated by printing press, maritime exploration, Scientific Revolution, and Enlightenment.', 'Transformed global trade and empirical scientific methodologies.');

-- 2. Locations
INSERT INTO locations (id, name, native_name, location_type, latitude, longitude, modern_country, region, period_span, description) VALUES
('mohenjo-daro', 'Mohenjo-daro', 'Mound of the Dead', 'settlement', 27.3290000, 68.1380000, 'Pakistan', 'South Asia', 'c. 2600 – 1900 BCE', 'Major urban metropolis of the Indus Valley Civilization featuring the Great Bath and covered sewers.'),
('harappa', 'Harappa', 'Harappa', 'settlement', 30.6300000, 72.8680000, 'Pakistan', 'South Asia', 'c. 2600 – 1900 BCE', 'Northern administrative metropolis of the Indus civilization with granaries and artisan quarters.'),
('lothal', 'Lothal', 'Mound of the Dead (Gujarati)', 'archaeological', 22.5220000, 72.2490000, 'India', 'South Asia', 'c. 2400 – 1900 BCE', 'World earliest known tidal lock dockyard connecting Indus trade to Mesopotamia.'),
('pataliputra', 'Pataliputra', 'Pāṭaliputra', 'capital', 25.6110000, 85.1440000, 'India', 'South Asia', 'c. 490 BCE – 1200 CE', 'Imperial capital of the Magadha, Mauryan, and Gupta empires along the Ganges.'),
('dhauli-hills', 'Dhauli Hills', 'Dhauli', 'battlefield', 20.1920000, 85.8400000, 'India', 'South Asia', 'c. 261 BCE', 'Site of the Kalinga War battlefield and Ashoka Major Rock Edict on Ahimsa.'),
('alexandria', 'Alexandria', 'Alexándreia', 'capital', 31.2000000, 29.9180000, 'Egypt', 'Northeast Africa', '331 BCE – Present', 'Hellenistic and Roman intellectual metropolis, home to the Great Library and Pharos Lighthouse.'),
('rome-city', 'Rome', 'Roma', 'capital', 41.8900000, 12.4920000, 'Italy', 'Southern Europe', '753 BCE – Present', 'Caput Mundi, center of Roman Republic and Empire, site of Colosseum and Roman Forum.'),
('athens-city', 'Athens', 'Athênai', 'capital', 37.9710000, 23.7260000, 'Greece', 'Southern Europe', 'c. 1400 BCE – Present', 'Cradle of direct democracy, tragic drama, and Western philosophical academy.'),
('babylon', 'Babylon', 'Bābili', 'capital', 32.5360000, 44.4210000, 'Iraq', 'Western Asia', 'c. 2300 – 539 BCE', 'Mesopotamian imperial capital under Hammurabi and Nebuchadnezzar II, site of Ishtar Gate.'),
('constantinople', 'Constantinople', 'Konstantinoúpolis', 'capital', 41.0080000, 28.9780000, 'Turkey', 'Balkans / Anatolia', '330 – 1453 CE', 'Imperial capital of the Byzantine Empire on the Bosphorus, site of Hagia Sophia.'),
('stalingrad', 'Stalingrad', 'Volgograd', 'battlefield', 48.7080000, 44.5130000, 'Russia', 'Eastern Europe', '1942 – 1943 CE', 'Site of the decisive turning point battle of World War II on the Volga River.');

-- 3. Civilizations
INSERT INTO civilizations (id, name, native_name, period_span, start_year, end_year, region, overview, capital_location_id, writing_system, government_system, economic_system) VALUES
('indus-valley', 'Indus Valley Civilization', 'Meluhha', 'c. 3300 – 1300 BCE', -3300, -1300, 'South Asia', 'Bronze Age civilization renowned for orthogonal urban planning, covered sewers, and maritime trade.', 'mohenjo-daro', 'Indus Script (undeciphered)', 'Decentralized civic councils and merchant guilds', 'Agricultural surplus and maritime trade (Meluhha trade)'),
('ancient-egypt', 'Ancient Egypt', 'Kemet', 'c. 3100 – 30 BCE', -3100, -30, 'Northeast Africa', 'Three millennia of monumental architecture, hieroglyphs, and cosmic Maat justice.', 'alexandria', 'Hieroglyphs, Hieratic, Demotic', 'Theocratic absolute pharaonic monarchy', 'State redistributed grain economy and Nile inundation agriculture'),
('mesopotamia', 'Ancient Mesopotamia', 'Beth Nahrain', 'c. 3500 – 539 BCE', -3500, -539, 'Western Asia', 'Cradle of urban civilization between Tigris and Euphrates, inventing cuneiform and statutory law.', 'babylon', 'Cuneiform on clay tablets', 'Monarchy and city-state temple priesthoods', 'Irrigated barley agriculture and trade'),
('ancient-greece', 'Classical Greece', 'Hellas', 'c. 800 – 146 BCE', -800, -146, 'Southern Europe', 'Confederation of autonomous poleis pioneering democratic assembly, philosophy, and tragedy.', 'athens-city', 'Greek alphabet', 'Direct democracy, oligarchy, and tyranny across poleis', 'Maritime Aegean trade, olive and wine commerce'),
('ancient-rome', 'Ancient Rome', 'Senatus Populusque Romanus', '753 BCE – 476 CE', -753, 476, 'Mediterranean & Europe', 'Republic and subsequent empire unifying the Mediterranean through civil law and concrete engineering.', 'rome-city', 'Latin alphabet', 'Republican magistracies evolving into Principate autocracy', 'Agrarian estate production, silver denarius, Mediterranean commerce');

-- 4. Empires
INSERT INTO empires (id, name, native_name, civilization_id, capital_location_id, period_span, start_year, end_year, region, peak_territory_sq_km, summary, legacy) VALUES
('mauryan-empire', 'Mauryan Empire', 'Maurya Samrajya', 'indus-valley', 'pataliputra', 'c. 322 – 185 BCE', -322, -185, 'South Asia', 5000000, 'First pan-Indian subcontinent empire, unifying northern and central India under Chandragupta and Ashoka.', 'Disseminated Buddhism across Asia, established state ethics and veterinary hospitals via Ashokan edicts.'),
('roman-empire', 'Roman Empire', 'Imperium Romanum', 'ancient-rome', 'rome-city', '27 BCE – 476 CE', -27, 476, 'Europe, Mediterranean, Near East', 5000000, 'Mediterranean superpower established under Augustus, governing 50-70 million subjects under Pax Romana.', 'Codified Western civil law, pioneered vaulted pozzolanic concrete architecture, facilitated Christianity.'),
('han-dynasty', 'Han Dynasty', 'Han Chao', NULL, NULL, '202 BCE – 220 CE', -202, 220, 'East Asia', 6000000, 'Classical Chinese golden age establishing Confucian orthodoxy and opening the transcontinental Silk Road.', 'Defined cultural Han Chinese identity, standardized civil service examinations, invented paper.'),
('gupta-empire', 'Gupta Empire', 'Gupta Samrajya', NULL, 'pataliputra', 'c. 319 – 543 CE', 319, 543, 'South Asia', 3500000, 'Golden Age of ancient India celebrated for classical Sanskrit literature, astronomical models, and mathematical zero.', 'Gifted modern decimal positional arithmetic and mathematical zero (Aryabhata and Brahmagupta).'),
('byzantine-empire', 'Byzantine Empire', 'Basileia Rhomaion', 'ancient-rome', 'constantinople', '330 – 1453 CE', 330, 1453, 'Eastern Mediterranean', 3500000, 'Eastern continuation of the Roman Empire centered at Constantinople for 1,123 years.', 'Preserved classical Greco-Roman manuscripts, compiled Justinian legal code, built Hagia Sophia.');

-- 5. Religions
INSERT INTO religions (id, name, native_name, origin_region, origin_location_id, founder_name, period_span, start_year, canonical_texts, core_philosophy, summary) VALUES
('buddhism', 'Buddhism', 'Buddha Dharma', 'Ancient India (Magadha)', 'pataliputra', 'Siddhartha Gautama', 'c. 6th Century BCE – Present', -563, 'Tripitaka (Pali Canon), Mahayana Sutras', 'Four Noble Truths, Noble Eightfold Path, Nirvana', 'World faith teaching cessation of suffering through moral conduct, mindfulness, and wisdom.'),
('hinduism', 'Hinduism', 'Sanatana Dharma', 'Indian Subcontinent', NULL, 'Vedic Risis', 'c. 2000 BCE – Present', -2000, 'Vedas, Upanishads, Bhagavad Gita, Epics', 'Brahman, Atman, Dharma, Karma, Samsara, Moksha', 'Pluralistic continuous tradition seeking ultimate spiritual liberation and cosmic order.'),
('christianity', 'Christianity', 'Christianismus', 'Levant / Roman Judea', 'rome-city', 'Jesus of Nazareth', 'c. 1st Century CE – Present', 30, 'The Holy Bible (Old and New Testaments)', 'Gospel grace, Resurrection, Love of God and neighbor', 'Monotheistic Abrahamic faith centered on the life and teachings of Jesus Christ.'),
('islam', 'Islam', 'Al-Islam', 'Arabian Peninsula', NULL, 'Prophet Muhammad', 'c. 610 CE – Present', 610, 'The Holy Quran, Hadith literature', 'Tawhid (Absolute Oneness), Five Pillars, Sharia justice', 'Monotheistic Abrahamic faith revealed in Mecca and Medina through the Prophet Muhammad.'),
('jainism', 'Jainism', 'Jaina Dharma', 'Ancient India', NULL, 'Rishabhanatha and Mahavira', 'c. 9th – 6th Century BCE', -800, 'Agamas', 'Ahimsa (Absolute Non-violence), Anekantavada, Aparigraha', 'Spiritual ascetic philosophy emphasizing non-violence toward all sentient living beings.');

-- 6. Personalities
INSERT INTO personalities (id, name, native_name, title, birth_year, death_year, start_year, end_year, birth_location_id, civilization_id, empire_id, religion_id, role, biography, influence) VALUES
('ashoka', 'Ashoka the Great', 'Devanampriya Priyadasi', 'Third Mauryan Emperor', 'c. 304 BCE', '232 BCE', -304, -232, 'pataliputra', 'indus-valley', 'mauryan-empire', 'buddhism', 'Emperor & Moral Reformer', 'Mauryan sovereign who underwent profound remorse after Kalinga War, adopting Buddhism and ahimsa.', 'Inscribed universal ethical edicts across rock pillars throughout Asia and pioneered veterinary care.'),
('chandragupta-maurya', 'Chandragupta Maurya', 'Sandrocottus', 'Founder of Mauryan Empire', 'c. 340 BCE', '297 BCE', -340, -297, 'pataliputra', 'indus-valley', 'mauryan-empire', 'jainism', 'Emperor & Liberator', 'Overthrew the Nanda dynasty and repelled Seleucid expansion, creating the first pan-Indian empire.', 'Unified Northern India and established centralized subcontinent administration with Chanakya.'),
('chanakya', 'Chanakya (Kautilya)', 'Vishnugupta', 'Prime Minister & Strategist', 'c. 375 BCE', '283 BCE', -375, -283, NULL, 'indus-valley', 'mauryan-empire', 'hinduism', 'Polymath & Statesman', 'Professor of politics at Taxila University and chief minister to Chandragupta Maurya.', 'Authored the Arthashastra, the foundational treatise on statecraft, economics, and diplomacy.'),
('cleopatra', 'Cleopatra VII Philopator', 'Kleopatra Thea Philopator', 'Queen of Egypt', '69 BCE', '30 BCE', -69, -30, 'alexandria', 'ancient-egypt', NULL, NULL, 'Queen & Diplomat', 'Last active pharaoh of Ptolemaic Egypt, speaking nine languages and navigating alliances with Rome.', 'Defended Egyptian sovereignty through astute diplomacy with Julius Caesar and Mark Antony.'),
('julius-caesar', 'Julius Caesar', 'Caius Iulius Caesar', 'Dictator of Rome', '100 BCE', '44 BCE', -100, -44, 'rome-city', 'ancient-rome', 'roman-empire', NULL, 'General & Statesman', 'Conquered Gaul, won Roman Civil War, initiated Julian calendar, assassinated on Ides of March.', 'Transformed Roman Republic into imperial autocratic framework under Augustus.'),
('socrates', 'Socrates', 'Sokrates', 'Father of Western Philosophy', '470 BCE', '399 BCE', -470, -399, 'athens-city', 'ancient-greece', NULL, NULL, 'Philosopher', 'Athenian thinker who pioneered the dialectic method of inquiry into ethics and virtue.', 'Laid the epistemological foundation for Western rational philosophy through Plato and Aristotle.'),
('davinci', 'Leonardo da Vinci', 'Leonardo di ser Piero da Vinci', 'Renaissance Polymath', '1452 CE', '1519 CE', 1452, 1519, NULL, NULL, NULL, NULL, 'Polymath & Artist', 'Florentine master painter, anatomist, and engineer embodying Renaissance humanism.', 'Painted the Mona Lisa and documented pioneering aerodynamic and anatomical discoveries.');

-- 7. Wars
INSERT INTO wars (id, name, native_name, period_span, start_year, end_year, region, belligerents, casualties_estimate, summary, significance, outcome) VALUES
('kalinga-war', 'The Kalinga War', 'Kalinga Sangrama', 'c. 261 BCE', -261, -261, 'Eastern India (Odisha)', 'Mauryan Empire vs. Sovereign Republic of Kalinga', '100,000 slain, 150,000 deported', 'Cataclysmic ancient military conquest of Kalinga by Emperor Ashoka.', 'The only known war in world history where the victor renounced aggressive warfare out of moral grief.', 'Mauryan victory; Ashoka conversion to Ahimsa and Buddhist Dhamma.'),
('world-war-i', 'World War I', 'The Great War', '1914 – 1918 CE', 1914, 1918, 'Global (Centered in Europe)', 'Allied Powers vs. Central Powers', '20 million deaths', 'First industrialized global conflagration featuring mechanized trench warfare and chemical weapons.', 'Ended four European empires (German, Russian, Austro-Hungarian, Ottoman) and led to Treaty of Versailles.', 'Allied victory; dissolution of imperial dynasties.'),
('world-war-ii', 'World War II', 'Second World War', '1939 – 1945 CE', 1939, 1945, 'Global', 'Allied Coalition vs. Axis Powers', '70–85 million fatalities', 'Deadliest conflict in human history fighting totalitarian fascism, marked by Holocaust and atomic bomb.', 'Led to founding of United Nations, Decolonization of European empires, and the Cold War.', 'Allied total victory; unconditional Axis surrender.'),
('peloponnesian-war', 'The Peloponnesian War', 'Peloponnesiakos Polemos', '431 – 404 BCE', -431, -404, 'Ancient Greece & Aegean', 'Delian League (Athens) vs. Peloponnesian League (Sparta)', 'Dozens of thousands of hoplites & civilians', 'Internecine Hellenic war chronicled by Thucydides, devastating Greek city-state cohesion.', 'Brought an end to the golden age of Athenian maritime democracy.', 'Spartan victory; destruction of Athenian naval hegemony.');

-- 8. Battles
INSERT INTO battles (id, war_id, name, battle_date, battle_year, location_id, combatants, commanders, casualties, outcome, summary) VALUES
('battle-of-dhauli', 'kalinga-war', 'Battle of the Daya River (Kalinga)', 'c. 261 BCE', -261, 'dhauli-hills', 'Mauryan Imperial Army vs. Kalinga Forces', 'Emperor Ashoka vs. Kalinga Senate', '100,000 killed on field', 'Decisive Mauryan victory', 'The climactic battle on the banks of the Daya River that turned the waters crimson and broke Ashoka heart.'),
('battle-of-stalingrad', 'world-war-ii', 'Battle of Stalingrad', 'Aug 1942 – Feb 1943', 1942, 'stalingrad', 'Soviet Red Army vs. Nazi German Sixth Army', 'General Vasily Chuikov vs. Field Marshal Friedrich Paulus', 'Estimated 2 million casualties', 'Decisive Soviet victory', 'Turning point of World War II on the Eastern Front, ending Nazi eastward offensive momentum.');

-- 9. Historical Events
INSERT INTO historical_events (id, title, native_name, event_date, year, period_id, location_id, civilization_id, category, summary, significance) VALUES
('fall-of-constantinople', 'The Fall of Constantinople', 'Feth-i Kostantiniyye', 'May 29, 1453 CE', 1453, 'middle-ages', 'constantinople', 'ancient-rome', 'war', 'Ottoman Sultan Mehmed II breaches the Theodosian Walls, conquering the Byzantine capital.', 'Marked the close of the Middle Ages and accelerated Greek scholar migration into Renaissance Italy.'),
('assassination-of-caesar', 'Assassination of Julius Caesar', 'Ides of March', 'March 15, 44 BCE', -44, 'classical-antiquity', 'rome-city', 'ancient-rome', 'politics', 'Roman senators assassinate dictator perpetuo Julius Caesar in the Curia of Pompey.', 'Triggered civil wars that destroyed the Roman Republic and established the Roman Empire under Augustus.'),
('coronation-of-ashoka', 'Coronation of Emperor Ashoka', 'Ashoka Abhisheka', 'c. 268 BCE', -268, 'classical-antiquity', 'pataliputra', 'indus-valley', 'politics', 'Ashoka ascends the Mauryan throne at Pataliputra following royal succession contests.', 'Began one of history most influential reigns uniting humanitarian ethics with imperial reach.');

-- 10. Historical Documents
INSERT INTO historical_documents (id, title, native_name, document_type, document_date, approx_year, author_personality_id, origin_location_id, script_language, full_excerpt, historical_context) VALUES
('edicts-of-ashoka', 'The Edicts of Ashoka', 'Dhammalipi', 'inscription', 'c. 268 – 232 BCE', -250, 'ashoka', 'pataliputra', 'Prakrit in Brahmi, Kharosthi, Greek, Aramaic', 'Beloved-of-the-Gods feels deep sorrow and regret for having conquered Kalinga... All men are my children.', 'Carved on rock faces and polished monolithic pillars to promulgate universal moral law (Dhamma).'),
('code-of-hammurabi', 'The Code of Hammurabi', 'Hammurabi Stele', 'legal_code', 'c. 1754 BCE', -1754, NULL, 'babylon', 'Old Babylonian Cuneiform', 'An eye for an eye, a tooth for a tooth... so that the strong should not harm the weak.', '2.25-meter black diorite stele with 282 statutes establishing statutory public rule of law.'),
('arthashastra', 'The Arthashastra', 'Arthasastra', 'treatise', 'c. 300 BCE', -300, 'chanakya', 'pataliputra', 'Sanskrit', 'In the happiness of his subjects lies the king happiness; in their welfare his welfare.', 'Seminal classical treatise on statecraft, intelligence, economic market control, and defense.');

-- 11. Historical Sources
INSERT INTO historical_sources (id, title, author, publication_year, source_type, institution, source_url, citation_text) VALUES
('thucydides-history', 'History of the Peloponnesian War', 'Thucydides', 'c. 400 BCE', 'primary_archival', 'Athens Historical Archives', 'https://archive.org', 'Thucydides. History of the Peloponnesian War. Translated by Rex Warner. Penguin Classics, 1954.'),
('ashoka-inscriptions-hultzsch', 'Inscriptions of Asoka (Corpus Inscriptionum Indicarum)', 'E. Hultzsch', '1925', 'archaeological_report', 'Archaeological Survey of India', 'https://asi.nic.in', 'Hultzsch, E. (1925). Inscriptions of Asoka. Oxford: Clarendon Press.'),
('cambridge-ancient-history', 'The Cambridge Ancient History: The Hellenistic Monarchies and the Rise of Rome', 'F.W. Walbank et al.', '1984', 'academic_monograph', 'Cambridge University Press', 'https://cambridge.org', 'Walbank, F.W., Astin, A.E. (1984). The Cambridge Ancient History, Vol. VII.');

-- 12. Media Assets
INSERT INTO media (id, title, media_type, url, asset_date, creator, institution, license, source_url, entity_type, entity_id) VALUES
('med-ashoka-lion-capital', 'Lion Capital of Ashoka at Sarnath', 'artifact_photo', '/assets/images/figure_ashoka_1795464677327.jpg', 'c. 250 BCE', 'Archaeological Survey of India', 'Sarnath Archaeological Museum', 'Public Domain', 'https://commons.wikimedia.org', 'personality', 'ashoka'),
('med-indus-great-bath', 'Excavated Great Bath at Mohenjo-daro', 'image', '/assets/images/civilization_indus_1795464676243.jpg', 'c. 2500 BCE', 'ASI Archive', 'National Museum of Pakistan', 'Public Domain', 'https://commons.wikimedia.org', 'civilization', 'indus-valley'),
('med-cleopatra-bust', 'Bust of Cleopatra VII Philopator', 'artifact_photo', '/assets/images/figure_cleopatra_1795464677702.jpg', 'c. 40 BCE', 'Antikensammlung Berlin', 'Altes Museum Berlin', 'Public Domain', 'https://commons.wikimedia.org', 'personality', 'cleopatra');

-- 13. Historical Relationships (Graph Edges)
INSERT INTO historical_relationships (source_entity_type, source_entity_id, relationship_type, target_entity_type, target_entity_id, description, bidirectional) VALUES
-- Ashoka Graph
('personality', 'ashoka', 'ruled', 'empire', 'mauryan-empire', 'Third emperor of the Mauryan Empire at its territorial zenith', TRUE),
('personality', 'ashoka', 'participated_in', 'war', 'kalinga-war', 'Conquered Kalinga in 261 BCE, whose bloodshed catalyzed his moral awakening', TRUE),
('personality', 'ashoka', 'authored', 'document', 'edicts-of-ashoka', 'Proclaimed the Rock and Pillar Edicts across South Asia', FALSE),
('personality', 'ashoka', 'adhered_to', 'religion', 'buddhism', 'Embraced the teachings of Gautama Buddha and patronized the Sangha', FALSE),
('personality', 'ashoka', 'located_in', 'location', 'pataliputra', 'Coronated and governed from the imperial capital of Pataliputra', FALSE),
-- Kalinga War Graph
('war', 'kalinga-war', 'participated_in', 'empire', 'mauryan-empire', 'Campaign waged by the Mauryan state against sovereign Kalinga', TRUE),
('war', 'kalinga-war', 'caused', 'document', 'edicts-of-ashoka', 'Directly provoked Ashoka Major Rock Edict XIII on remorse and Dhamma', FALSE),
('war', 'kalinga-war', 'influenced', 'religion', 'buddhism', 'Accelerated state-directed propagation of Buddhist non-violence', FALSE),
-- Chandragupta & Chanakya Graph
('personality', 'chandragupta-maurya', 'founded', 'empire', 'mauryan-empire', 'Founded the Mauryan dynasty in 322 BCE with Chanakya guidance', TRUE),
('personality', 'chanakya', 'authored', 'document', 'arthashastra', 'Codified classical treatise on statecraft, espionage, and taxation', FALSE),
('personality', 'chanakya', 'influenced', 'personality', 'chandragupta-maurya', 'Chief advisor and kingmaker to Chandragupta Maurya', FALSE),
-- Roman & Egyptian Graph
('personality', 'julius-caesar', 'founded', 'empire', 'roman-empire', 'Dictator whose policies transitioned the Republic to Empire', TRUE),
('personality', 'julius-caesar', 'allied_with', 'personality', 'cleopatra', 'Military and romantic alliance restoring Cleopatra to Egypt throne', TRUE),
('personality', 'cleopatra', 'ruled', 'civilization', 'ancient-egypt', 'Last sovereign pharaoh of the Ptolemaic Egyptian kingdom', TRUE),
('empire', 'roman-empire', 'located_in', 'location', 'rome-city', 'Capital and epicenter of the Roman imperial world', FALSE),
-- Mesopotamia & Law
('document', 'code-of-hammurabi', 'located_in', 'location', 'babylon', 'Promulgated in the imperial city of Babylon', FALSE);
