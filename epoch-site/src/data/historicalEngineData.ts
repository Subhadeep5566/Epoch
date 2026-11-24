/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * EPOCH UNIFIED HISTORICAL ARCHITECTURE ENGINE
 * A comprehensive, interconnected dataset spanning 10,000+ BCE to 2026 CE.
 * Powers the Atlas, Living Timeline, Civilization Comparator, Artefact Archive,
 * Time Machine, Personalities Network, Connections Engine, Everyday Life, and Daily History.
 */

export interface GeoLocation {
  name: string;
  lat: number;
  lng: number;
  type: 'capital' | 'settlement' | 'battle' | 'archaeological' | 'monument';
  description: string;
  period: string;
  civilizationId?: string;
  recordId?: string;
}

export interface TradeRoute {
  id: string;
  name: string;
  period: string;
  description: string;
  color: string;
  path: [number, number][]; // [lat, lng]
  goods: string[];
}

export interface TerritoryBoundary {
  civilizationId: string;
  name: string;
  period: string;
  approxYear: number;
  color: string;
  center: [number, number]; // [lat, lng]
  radiusKm: number; // approximate imperial territorial sphere
  description: string;
}

export interface DetailedCivilization {
  id: string;
  name: string;
  nativeName?: string;
  era: string;
  startYear: number; // negative for BCE
  endYear: number;
  capital: string;
  region: string;
  overview: string;
  categories: {
    period: string;
    geography: string;
    government: string;
    politicalStructure: string;
    economy: string;
    trade: string;
    military: string;
    architecture: string;
    religionPhilosophy: string;
    scienceTechnology: string;
    literature: string;
    artCulture: string;
    everydayLife: string;
    historicalLegacy: string;
  };
  keyLocations: GeoLocation[];
  relatedRecordId?: string;
}

export interface GlobalSyncEvent {
  year: number; // e.g. -500 for 500 BCE, 1492 for 1492 CE
  yearDisplay: string;
  eraName: string;
  synopsis: string;
  regions: {
    india: string;
    europe: string;
    africa: string;
    china: string;
    centralAsia: string;
    americas: string;
    middleEast: string;
  };
  events: {
    title: string;
    region: string;
    civilization: string;
    description: string;
    category: 'politics' | 'war' | 'religion' | 'science' | 'culture' | 'daily';
    recordId?: string;
  }[];
}

export interface HistoricalDocumentArtefact {
  id: string;
  title: string;
  date: string;
  approxYear: number;
  period: string;
  origin: string;
  creator: string;
  institution: string;
  collection: string;
  description: string;
  historicalSignificance: string;
  fullExcerpt?: string;
  sourceUrl: string;
  license: string;
  imageUrl: string;
  recordId?: string;
  tags: string[];
}

export interface PersonalityNode {
  id: string;
  name: string;
  title: string;
  birthYear: string;
  deathYear: string;
  period: string;
  geography: string;
  civilization: string;
  bio: string;
  achievements: string[];
  influence: string;
  imageUrl: string;
  recordId?: string;
  relationships: {
    targetId: string;
    targetName: string;
    type: 'teacher' | 'student' | 'ally' | 'rival' | 'contemporary' | 'successor' | 'influence';
    description: string;
    provenance: 'documented' | 'traditional_attribution';
  }[];
}

export interface CausalConnectionNode {
  id: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  earlierCauses: {
    title: string;
    explanation: string;
    targetId?: string;
  }[];
  laterConsequences: {
    title: string;
    explanation: string;
    targetId?: string;
  }[];
  relatedWars: string[];
  personalities: string[];
  civilizations: string[];
  scientificMovements: string[];
  recordId?: string;
}

export interface EverydayLifeStory {
  id: string;
  title: string;
  role: string;
  period: string;
  region: string;
  civilization: string;
  narrative: string;
  dailyRoutine: string;
  dietAndFood: string;
  dwellingAndFamily: string;
  materialCulture: string;
  historicalInsight: string;
  imageUrl: string;
}

export interface DailyHistoryRecord {
  month: number; // 1-12
  day: number; // 1-31
  year: number;
  yearDisplay: string;
  title: string;
  location: string;
  summary: string;
  significance: string;
  imageUrl: string;
  recordId?: string;
}

// ---------------------------------------------------------------------------
// 1. CIVILIZATIONS COMPARATIVE DATABASE (14 Complete Analytical Fields)
// ---------------------------------------------------------------------------

export const comparativeCivilizations: Record<string, DetailedCivilization> = {
  'indus-valley': {
    id: 'indus-valley',
    name: 'Indus Valley Civilization',
    nativeName: 'Meluhha (Mesopotamian records)',
    era: 'Bronze Age (c. 3300 – 1300 BCE)',
    startYear: -3300,
    endYear: -1300,
    capital: 'Decentralized Metropolis (Mohenjo-daro, Harappa, Dholavira, Rakhigarhi)',
    region: 'South Asia (Indus & Ghaggar-Hakra River Basin)',
    overview: 'One of the world\'s earliest urban societies, celebrated for egalitarian urban planning, baked-brick architecture, municipal sewer systems, standardized weights, and peaceful maritime commerce.',
    categories: {
      period: 'c. 3300 – 1300 BCE (Mature Harappan Phase: 2600 – 1900 BCE)',
      geography: 'Fertile alluvial plain of the Indus river and tributaries, bounded by the Thar Desert, the Arabian Sea coastline, and the Hindu Kush foothills.',
      government: 'Decentralized civic administration; lack of monumental royal palaces or militaristic monuments suggests governance by merchant councils or civic assemblies rather than autocratic god-kings.',
      politicalStructure: 'Remarkably uniform urban standards across thousands of settlements without central militarized fortresses. Power appears distributed among civic guilds and municipal overseers.',
      economy: 'Agrarian surplus supported by intensive floodplain agriculture, bronze metallurgy, steatite seal fabrication, shell working, and large-scale textile manufacturing.',
      trade: 'Extensive long-distance maritime and overland networks connecting Lothal to Dilmun (Bahrain), Magan (Oman), and Mesopotamia (Akkad and Ur), trading carnelian beads, lapis lazuli, ivory, and cotton.',
      military: 'Remarkably low evidence of offensive military gear or state-directed conquests; fortifications functioned primarily as flood barriers, customs gates, and civic protection rather than battle bastions.',
      architecture: 'Kiln-fired modular bricks with uniform 4:2:1 dimensional ratios, grid-iron street plans, multi-story courtyard residences with private brick latrines, and civic installations like the Great Bath of Mohenjo-daro.',
      religionPhilosophy: 'Early proto-indic spiritual cosmology: reverence for natural fertility, sacred pipal trees, ritual purification through water baths, terracotta mother figurines, and the horned Pashupati figure.',
      scienceTechnology: 'World-pioneering municipal hydraulics, covered drainage channels, binary and decimal weight standards accurate to fractions of a gram, and dock engineering at Lothal with tidal lock gates.',
      literature: 'Undeciphered Indus script found on over 4,000 steatite stamp seals, copper tablets, and ceramic pottery; primarily used for mercantile accounting, identity tokens, and trade consignments.',
      artCulture: 'Mastery of lost-wax bronze casting (Dancing Girl of Mohenjo-daro), realistic steatite portraiture (Priest-King), finely painted black-on-red pottery, and delicate terracotta figurines.',
      everydayLife: 'Comfortable domestic living with cool insulated brick rooms, rooftop living areas, municipal trash chutes, clean drinking wells on every block, vegetarian and riverine fish diets, and board games with terracotta dice.',
      historicalLegacy: 'Laid the architectural, water-management, and cultural foundations of the South Asian subcontinent; standard measurement and civic municipal ethics persisted across subsequent Indian eras.'
    },
    keyLocations: [
      { name: 'Mohenjo-daro', lat: 27.329, lng: 68.138, type: 'settlement', description: 'Metropolis featuring the Great Bath, College of Priests, and complex underground sewer network.', period: 'c. 2500 BCE' },
      { name: 'Harappa', lat: 30.630, lng: 72.868, type: 'settlement', description: 'Major northern administrative center with granaries and artisan quarters.', period: 'c. 2600 BCE' },
      { name: 'Lothal', lat: 22.522, lng: 72.249, type: 'archaeological', description: 'Earliest known tidal dockyard with marine customs warehouse and bead factories.', period: 'c. 2400 BCE' },
      { name: 'Dholavira', lat: 23.886, lng: 70.213, type: 'archaeological', description: 'Kutch island citadel featuring stone water reservoirs and a giant stadium billboard with Indus glyphs.', period: 'c. 2650 BCE' }
    ],
    relatedRecordId: 'indus-valley'
  },
  'ancient-egypt': {
    id: 'ancient-egypt',
    name: 'Ancient Egypt',
    nativeName: 'Kemet (The Black Land)',
    era: 'Bronze & Iron Ages (c. 3100 – 30 BCE)',
    startYear: -3100,
    endYear: -30,
    capital: 'Memphis / Thebes (Luxor) / Alexandria',
    region: 'Northeast Africa (Lower & Upper Nile Valley)',
    overview: 'A monumental civilization enduring three millennia, founded upon the cyclical inundation of the Nile, governed by divine pharaohs, and renowned for pyramid tombs, hieroglyphic literature, and Ma\'at cosmology.',
    categories: {
      period: 'Old Kingdom (c. 2686–2181 BCE), Middle Kingdom (c. 2055–1650 BCE), New Kingdom (c. 1550–1069 BCE), Ptolemaic Era (305–30 BCE)',
      geography: 'Narrow fertile river corridor flanked by the hyper-arid Eastern and Western Sahara deserts, with the Delta opening onto the Mediterranean Sea.',
      government: 'Centralized theocratic monarchy headed by Pharaoh, revered as the earthly incarnation of Horus and son of Ra, maintaining cosmic truth and order (Ma\'at).',
      politicalStructure: 'Hierarchical state governed through the Vizier (Tjaty), nomarchs overseeing local administrative districts (nomes), a vast royal scribal bureaucracy, and powerful temple priesthoods.',
      economy: 'Centrally planned state agricultural redistribution; grain stored in state granaries served as physical currency, backing wages for craftsmen, quarrymen, and soldiers.',
      trade: 'State expeditions to Punt for frankincense and myrrh; Sinai for turquoise and copper; Nubia for gold, ebony, and ivory; Byblos and Levant for cedar timber.',
      military: 'Old Kingdom relied on conscripted militia; New Kingdom developed professional standing armies with composite bows, light horse-drawn chariots, bronze khopesh swords, and naval fleets.',
      architecture: 'Monumental megalithic stone construction: Great Pyramids of Giza, Karnak and Luxor hypostyle halls, rock-cut mortuary temples at Abu Simbel, and subterranean tombs in the Valley of the Kings.',
      religionPhilosophy: 'Polytheistic cosmology centered on Ma\'at (cosmic harmony, balance, and justice); elaborate funerary literature (Book of the Dead) guiding the soul through the underworld (Duat) to the Weighing of the Heart.',
      scienceTechnology: 'Solar calendar of 365 days, geometry for field resurveying following Nile floods, papyrus paper manufacturing, mummification embalming chemistry, and medical surgical treatises (Edwin Smith Papyrus).',
      literature: 'Sacred hieroglyphic inscriptions on monuments, cursive hieratic and demotic scripts for administration, lyrical love poetry, autobiographies, and moral treatises (Instructions of Ptahhotep).',
      artCulture: 'Strict canonical 2D visual conventions with profile perspective, symbolic scale based on status, faience ceramics, gold funerary masks, and limestone wall relief carvings.',
      everydayLife: 'Daily rhythm dictated by the three seasons: Akhet (flood), Peret (planting), Shemu (harvest); linen clothing, beer and emmer wheat bread staple diet, cosmetic kohl eye protection, and senet board games.',
      historicalLegacy: 'Monumental architecture, solar calendar, paper making, medical knowledge, and divine monarchy concepts profoundly shaped Greek, Roman, and broader Western Mediterranean civilizations.'
    },
    keyLocations: [
      { name: 'Memphis', lat: 29.849, lng: 31.255, type: 'capital', description: 'Ancient Old Kingdom capital dedicated to Ptah, patron of craftsmen.', period: 'c. 3100 BCE' },
      { name: 'Thebes (Luxor)', lat: 25.687, lng: 32.639, type: 'capital', description: 'New Kingdom ceremonial capital featuring Karnak Temple and Valley of the Kings.', period: 'c. 1550 BCE' },
      { name: 'Giza Necropolis', lat: 29.979, lng: 31.134, type: 'monument', description: 'The Great Pyramid of Khufu, Khafre, Menkaure, and the Great Sphinx.', period: 'c. 2560 BCE' },
      { name: 'Alexandria', lat: 31.200, lng: 29.918, type: 'settlement', description: 'Hellenistic intellectual capital housing the Great Library and Pharos Lighthouse.', period: '331 BCE' }
    ],
    relatedRecordId: 'ancient-egypt'
  },
  'mesopotamia': {
    id: 'mesopotamia',
    name: 'Mesopotamia (Sumer, Akkad & Babylon)',
    nativeName: 'The Land Between the Rivers',
    era: 'Bronze & Iron Ages (c. 4500 – 539 BCE)',
    startYear: -4500,
    endYear: -539,
    capital: 'Ur / Uruk / Babylon / Nineveh',
    region: 'Near East (Tigris and Euphrates River Valleys, modern Iraq)',
    overview: 'The cradle of urban civilization where writing, arithmetic, the wheel, written law codes, and astronomical catalogs were first systematized among independent city-states and expansive empires.',
    categories: {
      period: 'Uruk & Early Dynastic Sumer (c. 4000–2334 BCE), Akkadian Empire (2334–2154 BCE), Babylonian Empire (c. 1894–539 BCE), Neo-Assyrian (911–609 BCE)',
      geography: 'Alluvial plain between the Tigris and Euphrates rivers, characterized by volatile, unpredictable spring floods, mud soils, and complete absence of stone or timber.',
      government: 'Evolved from theocratic temple-states ruled by priest-governors (Ensi) to warrior-kings (Lugal) commanding professional administrative and standing forces.',
      politicalStructure: 'Fiercely competitive independent city-states (Ur, Uruk, Lagash, Umma) continually warring for water and irrigation rights until unified into regional empires under Sargon and Hammurabi.',
      economy: 'Barley, date palm, and sesame intensive irrigation agriculture; sheep wool and linen textile manufacturing; temple storehouses functioning as banking and credit hubs with interest rates.',
      trade: 'Extensive overland and Gulf sea trade importing timber from Lebanon, diorite and copper from Magan, tin from Iran/Afghanistan, and lapis lazuli in exchange for woven textiles and barley.',
      military: 'Phalanx formations with copper helmets and spears (Stele of the Vultures), four-wheeled equus battle carts, bronze composite siege weaponry, and Assyrian iron cavalry and battering rams.',
      architecture: 'Mud-brick masonry featuring soaring terraced Ziggurats connecting heaven and earth, monumental vaulted city gates (Ishtar Gate), arched irrigation aqueducts, and the legendary Hanging Gardens.',
      religionPhilosophy: 'Polytheistic cosmology with capricious deities representing natural forces (Enlil, Enki, Inanna/Ishtar, Marduk); bleak afterlife (Kur) reflected in the human mortality themes of the Epic of Gilgamesh.',
      scienceTechnology: 'Invention of cuneiform script, base-60 sexagesimal numerical system (origin of the 60-minute hour and 360-degree circle), wheel, plow, and mathematical astronomy predicting lunar eclipses.',
      literature: 'The Epic of Gilgamesh (world\'s oldest literary epic), Enheduanna\'s temple hymns (earliest named author in human history), creation myths (Enuma Elish), and legal collections (Code of Hammurabi).',
      artCulture: 'Cylinder seals with intricate microscopic narrative reliefs, votive stone statues with wide observant lapis eyes, monumental human-headed winged bull lamassu guardians, and glazed lapis brickwork.',
      everydayLife: 'Dense walled city living with narrow alleyways, central courtyards, beer brewed in dozens of distinct varieties, barley flatbreads, mutton stew, clay tablet school academies (Edubba).',
      historicalLegacy: 'Foundational concepts of codifying civil law, sixty-unit divisions of time and geometry, urban municipal zoning, and astronomical record-keeping inherited by Greece and the Western world.'
    },
    keyLocations: [
      { name: 'Uruk', lat: 31.322, lng: 45.637, type: 'settlement', description: 'The world\'s earliest true metropolis, birthplace of cuneiform writing and home to legendary Gilgamesh.', period: 'c. 3500 BCE' },
      { name: 'Ur', lat: 30.962, lng: 46.103, type: 'monument', description: 'Great Ziggurat of Ur and royal tombs excavated with golden harps and lapis headdresses.', period: 'c. 2100 BCE' },
      { name: 'Babylon', lat: 32.542, lng: 44.421, type: 'capital', description: 'Metropolis of Hammurabi and Nebuchadnezzar II, famous for the Ishtar Gate and Etemenanki ziggurat.', period: 'c. 1792 BCE' },
      { name: 'Nineveh', lat: 36.363, lng: 43.153, type: 'capital', description: 'Neo-Assyrian imperial capital housing the royal library of Ashurbanipal with tens of thousands of clay tablets.', period: 'c. 700 BCE' }
    ],
    relatedRecordId: 'mesopotamia'
  },
  'mauryan-empire': {
    id: 'mauryan-empire',
    name: 'Mauryan Empire',
    nativeName: 'Maurya Samrajya',
    era: 'Classical Antiquity (322 – 185 BCE)',
    startYear: -322,
    endYear: -185,
    capital: 'Pataliputra (Modern Patna, India)',
    region: 'South Asia (Covering almost the entire Indian Subcontinent)',
    overview: 'The first pan-Indian imperial state, founded by Chandragupta Maurya with Chanakya\'s statecraft, which under Emperor Ashoka pioneered human rights, animal welfare, and non-violent statecraft (Dhamma).',
    categories: {
      period: 'c. 322 – 185 BCE (Peak under Ashoka: 268 – 232 BCE)',
      geography: 'Spanning from the Hindu Kush in Afghanistan to the Bay of Bengal, and from the Himalayas southward to the borders of the Tamil kingdoms in the Deccan.',
      government: 'Centralized bureaucratic imperial administration guided by Kautilya\'s Arthashastra, divided into four major provinces ruled by royal princes (Kumāras).',
      politicalStructure: 'Rigorous state oversight with dedicated ministerial boards governing manufacturing, trade, vital statistics, tax assessment, foreign affairs, and espionage surveillance.',
      economy: 'State-regulated agricultural taxation, imperial monopoly on mines, forests, and salt, extensive royal minting of punch-marked silver coins (Pana), and irrigation canals.',
      trade: 'The Grand Trunk Road (Uttarapatha) connecting Pataliputra to Taxila and Central Asian routes; maritime trade through Bharuch on the Arabian Sea and Tamralipti on the Bay of Bengal.',
      military: 'Formidable standing army recorded by Megasthenes: 600,000 infantry, 30,000 cavalry, 9,000 war elephants, and imperial war chariots managed by a war council of thirty members.',
      architecture: 'Pioneered monumental polished stone sculpture and rock-cut architecture: Ashokan lion capitals, monumental monolithic stone pillars, and the Barabar cave sanctuaries.',
      religionPhilosophy: 'Religious pluralism embracing Vedic traditions, Jainism (adopted by Chandragupta), and Buddhism (adopted and actively patronized by Ashoka via the Dhamma policy).',
      scienceTechnology: 'High-level metallurgy (rust-resistant iron processing), advanced civil engineering of royal highways with rest-houses and shade trees, and sophisticated veterinary and human pharmacopeias.',
      literature: 'Kautilya\'s Arthashastra (political philosophy and espionage manual), Ashoka\'s Rock and Pillar Edicts composed in Prakrit, Greek, and Aramaic scripts, and early Buddhist canonical redactions.',
      artCulture: 'Unique "Mauryan polish" giving sandstone a mirror-like finish, monumental Yaksha and Yakshi statues, polished stupas at Sanchi, and animal pillar finials.',
      everydayLife: 'Thriving marketplace economy with guilds (Shrenis), public hospitals providing free medicine for humans and animals, communal dining halls, and street festival processions.',
      historicalLegacy: 'Established the geopolitical blueprint of a unified India; the Lion Capital of Ashoka serves as the modern Republic of India\'s official national emblem.'
    },
    keyLocations: [
      { name: 'Pataliputra', lat: 25.611, lng: 85.144, type: 'capital', description: 'Vast fortified capital along the Ganges, described by Megasthenes with 570 towers and 64 gates.', period: '322 BCE' },
      { name: 'Taxila', lat: 33.746, lng: 72.839, type: 'settlement', description: 'Great northwestern university city and junction of Silk Road and Uttarapatha routes.', period: 'c. 300 BCE' },
      { name: 'Sanchi', lat: 23.479, lng: 77.740, type: 'monument', description: 'Great Stupa commissioned by Ashoka, adorned with torana gates depicting early Buddhist narrative reliefs.', period: 'c. 250 BCE' },
      { name: 'Dhauli', lat: 20.192, lng: 85.839, type: 'archaeological', description: 'Site of the Kalinga War battlefield where Ashoka inscribed his Edicts of remorse and renounced aggressive war.', period: '261 BCE' }
    ],
    relatedRecordId: 'kalinga-war'
  },
  'roman-empire': {
    id: 'roman-empire',
    name: 'Roman Empire & Republic',
    nativeName: 'Senatus Populusque Romanus (SPQR)',
    era: 'Classical Antiquity (509 BCE – 476 CE / 1453 CE)',
    startYear: -509,
    endYear: 476,
    capital: 'Rome (later Constantinople)',
    region: 'Mediterranean Basin, Western Europe, North Africa, Near East',
    overview: 'The dominant Mediterranean superpower that codified constitutional jurisprudence, revolutionized civil engineering with concrete and aqueducts, and established cultural foundations for modern law and governance.',
    categories: {
      period: 'Roman Republic (509–27 BCE), Principate (27 BCE – 284 CE), Dominate & Western Fall (284–476 CE)',
      geography: 'Encircled the entire Mediterranean Sea ("Mare Nostrum"), stretching from Britannia and Hadrian\'s Wall to Egypt and the Euphrates.',
      government: 'Transitioned from aristocratic Republic (Consuls, Senate, Tribunes of the Plebs) to an autocratic military empire founded by Augustus (Emperor/Princeps).',
      politicalStructure: 'Codified Roman law (Twelve Tables, Corpus Juris Civilis), municipal charters, provincial governors (proconsuls), and extended universal citizenship (Constitutio Antoniniana, 212 CE).',
      economy: 'Slave- and tenant-powered agrarian economy centered on vast latifundia estates; standardized silver denarius and gold aureus coinage; massive grain dole shipments from Egypt and North Africa.',
      trade: 'Unprecedented commercial security (Pax Romana) enabled through 80,000 km of paved military highways and Mediterranean sea lanes cleared of piracy, importing spices from India and silk from China.',
      military: 'Highly disciplined professional legionary standing army organized into cohorts and centurias; mastered castrametation (fortified camps), siegecraft, and ballistas.',
      architecture: 'Revolutionized structural engineering through pozzolanic hydraulic concrete, arches, vaults, and domes: Colosseum, Pantheon, monumental baths (Caracalla), and multistory insulae.',
      religionPhilosophy: 'Syncretic polytheism absorbing Greek, Egyptian (Isis), and Persian (Mithras) deities, alongside Stoicism (Seneca, Marcus Aurelius), culminating in the adoption of Christianity under Constantine.',
      scienceTechnology: 'Gravity-fed stone aqueducts delivering clean mountain water over tens of kilometers, hypocaust underfloor heating, medical field surgery, and monumental cartography.',
      literature: 'Cicero\'s orations, Virgil\'s Aeneid epic, Livy and Tacitus historical annals, Ovid\'s Metamorphoses, and Horace\'s odes.',
      artCulture: 'Hyper-realistic republican verism portrait bust sculpture, vibrant fresco murals (Pompeii), intricate mosaic flooring, and triumphal arches commemorating victories.',
      everydayLife: 'Public communal thermal baths (thermae), gladiator contests and chariot races at the Circus Maximus, bread and circuses (panem et circenses), and olive oil lamps.',
      historicalLegacy: 'Roman law codes form the bedrock of modern civil jurisprudence; Latin alphabet and Romance languages dominate global communication; republican principles inspired modern constitutional democracies.'
    },
    keyLocations: [
      { name: 'Rome', lat: 41.902, lng: 12.496, type: 'capital', description: 'Caput Mundi: Forum Romanum, Colosseum, Pantheon, and Palatine Hill palaces.', period: '509 BCE' },
      { name: 'Constantinople', lat: 41.008, lng: 28.978, type: 'capital', description: 'The New Rome founded by Constantine on the Bosporus, capital of the Eastern Roman Empire.', period: '330 CE' },
      { name: 'Pompeii', lat: 40.751, lng: 14.487, type: 'archaeological', description: 'Roman city preserved under Vesuvius volcanic ash, revealing detailed everyday life.', period: '79 CE' },
      { name: 'Carthage', lat: 36.852, lng: 10.323, type: 'settlement', description: 'Rival Phoenician city rebuilt as a premier Roman province capital in North Africa.', period: '146 BCE' }
    ],
    relatedRecordId: 'cleopatra'
  },
  'han-dynasty': {
    id: 'han-dynasty',
    name: 'Han Dynasty of China',
    nativeName: 'Han Chao (Great Han)',
    era: 'Classical Antiquity (202 BCE – 220 CE)',
    startYear: -202,
    endYear: 220,
    capital: 'Chang\'an (Western Han) / Luoyang (Eastern Han)',
    region: 'East Asia (Central Plains, Tarim Basin, southern expansion)',
    overview: 'The golden age of Chinese civilization that established Confucianism as state orthodoxy, pioneered the Silk Road, invented paper, and created an enduring cultural identity as the "Han" people.',
    categories: {
      period: 'Western Han (202 BCE – 9 CE), Xin Interregnum (9–23 CE), Eastern Han (25–220 CE)',
      geography: 'Spanning the Yellow and Yangtze River valleys, extending through the Hexi Corridor westward into the Tarim Basin (Xinjiang) and south to Vietnam.',
      government: 'Centralized imperial monarchy governed by the Emperor under the Mandate of Heaven, supported by a meritocratic civil service bureaucracy trained in Confucian classics.',
      politicalStructure: 'Commandery and county administrative system (Junxian), with national academies (Taixue) educating thousands of scholar-officials in filial piety and state ethics.',
      economy: 'State monopolies over salt, iron, and liquor production; standardized copper cash (Wuzhu coin); intensive hydraulic terraced rice and wheat agriculture.',
      trade: 'Inaugurated the overland Silk Road through Central Asia under Emperor Wu and explorer Zhang Qian, exporting fine silk, lacquerware, and iron in exchange for Ferghana horses, jade, and glassware.',
      military: 'Professional standing army complemented by cavalry forces bred to counter Xiongnu nomadic horse archers; perfected the repeating crossbow with precision bronze triggers.',
      architecture: 'Rammed-earth defensive walls, timber-frame post-and-beam palaces with multi-tiered dougong bracket sets, watchtowers, and underground brick tomb vaults.',
      religionPhilosophy: 'Synthesis of Confucian moral philosophy with Daoist cosmic harmony and Legalist administrative rigor; early introduction of Buddhism along Silk Road caravan paths.',
      scienceTechnology: 'Invention of papermaking by Cai Lun (105 CE), Zhang Heng\'s earthquake seismometer, water-powered armillary spheres, negative numbers in mathematics, and ship rudders.',
      literature: 'Sima Qian\'s Shiji (Records of the Grand Historian, foundational model for Chinese historiography), Yuefu folk poetry, and comprehensive Chinese dictionaries (Shuowen Jiezi).',
      artCulture: 'Exquisite multi-color cloud-pattern silk brocades, carved jade burial suits wired with gold thread, lacquerware wine vessels, and painted terracotta tomb figurines.',
      everydayLife: 'Extended clan households governed by filial respect; meals of millet, rice, fermented soybean paste, and pork; tea drinking emergence; traditional festival holidays.',
      historicalLegacy: 'Established the enduring blueprint for Chinese statehood, bureaucratic civil service examinations, and cultural identity; ethnic Chinese still identify as "Han people" today.'
    },
    keyLocations: [
      { name: 'Chang\'an', lat: 34.341, lng: 108.939, type: 'capital', description: 'Eastern terminus of the Silk Road and vast imperial capital with Weiyang Palace.', period: '202 BCE' },
      { name: 'Luoyang', lat: 34.620, lng: 112.453, type: 'capital', description: 'Flourishing capital of the Eastern Han and home to the Imperial Academy.', period: '25 CE' },
      { name: 'Dunhuang', lat: 40.142, lng: 94.661, type: 'settlement', description: 'Gateway oasis city along the Silk Road where routes skirted the Taklamakan Desert.', period: '111 BCE' }
    ]
  },
  'gupta-empire': {
    id: 'gupta-empire',
    name: 'Gupta Empire',
    nativeName: 'Gupta Samrajya (Golden Age of India)',
    era: 'Classical / Post-Classical (c. 319 – 543 CE)',
    startYear: 319,
    endYear: 543,
    capital: 'Pataliputra / Ujjain',
    region: 'South Asia (Northern, Central, and Eastern India)',
    overview: 'The golden age of Indian science, mathematics, literature, and art. Produced the invention of zero, the decimal place-value system, Aryabhata\'s astronomy, Kalidasa\'s poetry, and the Ajanta frescoes.',
    categories: {
      period: 'c. 319 – 543 CE (Classical Zenith under Chandragupta II Vikramaditya)',
      geography: 'Covered northern and central India from the Arabian Sea to the Bay of Bengal, with feudatory influence reaching deep into southern India.',
      government: 'Decentralized feudal monarchy; imperial authority presided over semi-autonomous regional kings (Samantas) and local village councils (Panchayats).',
      politicalStructure: 'Empowered local merchant guilds, temple trusts, and scholar communities; judicial punishments were notoriously lenient with capital punishment abolished.',
      economy: 'Agricultural surplus supported by private and collective canal networks; lucrative maritime commerce through Bengal and Gujarat ports; abundant pure gold Dinar coinage.',
      trade: 'Extensive maritime trade connecting with the Sassanian Persian Empire, Byzantine Alexandria, Sri Lanka, and Southeast Asia (Funan and Srivijaya).',
      military: 'Renowned for heavy armored cavalry, elephant corps, composite horn bows, and the finest steel swords (Wootz crucible steel) prized across Eurasia.',
      architecture: 'Birth of classical free-standing stone Hindu temples (Dashavatara Temple at Deogarh), monolithic rock-cut Buddhist monasteries at Ajanta, and the world-renowned Nalanda Mahavihara university.',
      religionPhilosophy: 'Classical revival of Vaishnavism and Shaivism alongside state support for Buddhism; codification of the Puranas and consolidation of classical Vedanta and Yoga philosophical schools.',
      scienceTechnology: 'Invention of the mathematical zero (Shunya) and decimal place-value system; Aryabhata calculated pi to 3.1416 and proposed heliocentric earth rotation; rust-resistant iron metallurgy (Iron Pillar of Delhi).',
      literature: 'The supreme golden age of Sanskrit drama: Kalidasa\'s Shakuntala and Meghaduta, the Panchatantra moral fables, and Vatsyayana\'s treatises.',
      artCulture: 'Sensuous spiritual sculpture expressing inner serenity (Sarnath seated Buddha), magnificent fresco wall paintings inside the Ajanta Caves, and golden coin portraiture.',
      everydayLife: 'Described by Chinese pilgrim Faxian as peaceful and affluent: no state meat shops, no capital punishment, low taxes, free public traveler rest-houses, and charitable medicine dispensaries.',
      historicalLegacy: 'Gave humanity the foundational decimal mathematics and zero that enabled the modern digital world; crystallized classical Hindu and Buddhist iconography across Asia.'
    },
    keyLocations: [
      { name: 'Nalanda', lat: 25.136, lng: 85.444, type: 'monument', description: 'Premier residential monastic university with 10,000 international scholars and 9-story library.', period: 'c. 427 CE' },
      { name: 'Ujjain', lat: 23.176, lng: 75.788, type: 'capital', description: 'Astronomical prime meridian of ancient India and cultural capital of Vikramaditya.', period: 'c. 380 CE' },
      { name: 'Ajanta Caves', lat: 20.551, lng: 75.703, type: 'monument', description: 'Masterpiece rock-cut Buddhist monasteries adorned with vibrant tempera frescoes.', period: 'c. 450 CE' }
    ]
  },
  'islamic-caliphate': {
    id: 'islamic-caliphate',
    name: 'Abbasid Caliphate & Islamic Golden Age',
    nativeName: 'Al-Khilafah al-Abbasiyyah',
    era: 'Post-Classical / Medieval (750 – 1258 CE)',
    startYear: 750,
    endYear: 1258,
    capital: 'Baghdad (Madinat al-Salam)',
    region: 'Middle East, North Africa, Central Asia, Levant',
    overview: 'A magnificent explosion of scholarship, translation, astronomy, medicine, and architecture centered at Baghdad\'s House of Wisdom (Bayt al-Hikma), synthesizing Greek, Persian, and Indian sciences.',
    categories: {
      period: '750 – 1258 CE (High Golden Age under Harun al-Rashid & Al-Ma\'mun: 786 – 833 CE)',
      geography: 'Spanning from the Indus river in the east to the Mediterranean and North Africa, centered at the crossroads of Tigris and Euphrates.',
      government: 'Imperial Caliphate commanding both political and religious authority under the Abbasid dynasty, governed through a Grand Vizier (Wazir) and provincial Emirs.',
      politicalStructure: 'Cosmopolitan bureaucracy integrating Arab, Persian, Jewish, Christian, and Turkic administrators; Sharia legal scholarship and Qadi judge courts.',
      economy: 'Vast unified monetary zone based on gold dinar and silver dirham; sophisticated early banking with letters of credit (Suftaja, origin of "check") and bills of exchange.',
      trade: 'Commanded the global hub of world trade: Indian Ocean dhow navigation to India and China (Canton), overland Silk Road to Samarkand, and trans-Saharan routes.',
      military: 'Professional standing infantry, composite bow cavalry, and imported Turkic Mamluk cavalry guards; sophisticated incendiary naphtha siege technology.',
      architecture: 'Circular planned cities (Round City of Baghdad), soaring minarets (Spiral Minaret of Samarra), intricate geometric arabesque tilework, horseshoe arches, and muqarnas vaulting.',
      religionPhilosophy: 'Mainstream Sunni and Shia jurisprudence schools; flowering of rationalist theology (Mu\'tazila) and Islamic philosophy (Falsafa) reconciling faith with Aristotle and Plato (Al-Kindi, Al-Farabi, Ibn Sina).',
      scienceTechnology: 'Al-Khwarizmi invented algebra (Al-Jabr); Ibn al-Haytham founded experimental optics; Ibn Sina wrote The Canon of Medicine; astrolabes perfected for celestial navigation.',
      literature: 'One Thousand and One Nights (Arabian Nights folklore), mystical Sufi poetry (Rumi, Attar), philosophical allegory (Hayy ibn Yaqdhan), and vast geographical encyclopedias.',
      artCulture: 'Aniconic geometric pattern design, master calligraphy in Kufic and Naskh scripts, lusterware ceramic pottery, and damascus steel metalworking.',
      everydayLife: 'Flourishing urban cafe culture, public hammam bathhouses, free hospital complexes (Bimaristans) treating mental and physical illness, and paper book bazaars.',
      historicalLegacy: 'Preserved and revolutionized human science and medicine; transmitted zero, algebra, paper manufacturing, and Greek philosophy to medieval Europe, sparking the Renaissance.'
    },
    keyLocations: [
      { name: 'Baghdad', lat: 33.315, lng: 44.366, type: 'capital', description: 'The Round City of Peace, housing the House of Wisdom and scholars from across Eurasia.', period: '762 CE' },
      { name: 'Samarra', lat: 34.198, lng: 43.874, type: 'capital', description: 'Massive imperial palace complex featuring the Great Mosque and 52-meter spiral minaret.', period: '836 CE' },
      { name: 'Cairo', lat: 30.044, lng: 31.235, type: 'settlement', description: 'Major cultural rival and home to Al-Azhar University, founded in 970 CE.', period: '969 CE' }
    ]
  }
};

// ---------------------------------------------------------------------------
// 2. HISTORICAL ATLAS LOCATIONS & ANCIENT TRADE ROUTES
// ---------------------------------------------------------------------------

export const atlasTradeRoutes: TradeRoute[] = [
  {
    id: 'silk-road',
    name: 'The Great Silk Road',
    period: 'c. 130 BCE – 1453 CE',
    description: 'The premier trans-Eurasian trade artery linking Chang\'an in China through the Tarim Basin, Samarkand, Persia, and Baghdad to Antioch and Rome.',
    color: '#D7FF00',
    goods: ['Silk', 'Porcelain', 'Glassware', 'Paper', 'Gunpowder', 'Lapis Lazuli', 'Spices'],
    path: [
      [34.34, 108.93], // Chang'an
      [36.56, 101.77], // Xining
      [40.14, 94.66],  // Dunhuang
      [42.95, 89.17],  // Turpan
      [39.46, 75.98],  // Kashgar
      [39.65, 66.97],  // Samarkand
      [37.95, 58.38],  // Ashgabat
      [35.68, 51.38],  // Rayy (Tehran)
      [33.31, 44.36],  // Baghdad
      [36.20, 36.15],  // Antioch
      [41.00, 28.97],  // Constantinople
      [41.90, 12.49]   // Rome
    ]
  },
  {
    id: 'incense-route',
    name: 'Arabian Incense & Myrrh Route',
    period: 'c. 1000 BCE – 200 CE',
    description: 'Ancient camel caravan route transporting precious frankincense from southern Arabia (Oman & Yemen) through the Nabataean kingdom of Petra to Egypt and Rome.',
    color: '#A88B55',
    goods: ['Frankincense', 'Myrrh', 'Spices', 'Gold', 'Precious Stones'],
    path: [
      [17.01, 54.09], // Salalah (Oman)
      [15.36, 44.20], // Marib (Yemen)
      [21.48, 39.19], // Mecca
      [24.46, 39.61], // Medina
      [26.79, 37.95], // Hegra / Mada'in Salih
      [30.32, 35.44], // Petra
      [31.20, 29.91]  // Alexandria
    ]
  },
  {
    id: 'spice-route',
    name: 'Indian Ocean Maritime Spice Highway',
    period: 'c. 300 BCE – Present',
    description: 'Maritime monsoon navigation route connecting spice ports of Malabar (Kerala), Sri Lanka, and Malacca through the Arabian Sea to the Red Sea.',
    color: '#38BDF8',
    goods: ['Black Pepper', 'Cardamom', 'Cinnamon', 'Cloves', 'Nutmeg', 'Cotton Textiles'],
    path: [
      [3.13, 101.68],  // Strait of Malacca
      [6.92, 79.86],   // Sri Lanka
      [10.19, 76.19],  // Muziris (Kerala, India)
      [21.64, 69.60],  // Bharuch (Gujarat)
      [12.78, 45.01],  // Aden (Yemen)
      [27.87, 34.29],  // Red Sea Gulf of Aqaba
      [31.20, 29.91]   // Alexandria
    ]
  },
  {
    id: 'amber-road',
    name: 'European Amber Route',
    period: 'c. 1500 BCE – 300 CE',
    description: 'Ancient amber trade route from the Baltic Sea coast across Central Europe along the Danube and Adige rivers to Aquileia and Rome.',
    color: '#F59E0B',
    goods: ['Fossilized Baltic Amber', 'Furs', 'Iron', 'Tin'],
    path: [
      [54.71, 20.51], // Baltic Sea (Gdansk / Kaliningrad)
      [50.06, 19.94], // Krakow
      [48.14, 17.10], // Carnuntum / Vienna
      [45.76, 13.36], // Aquileia (Italy)
      [41.90, 12.49]  // Rome
    ]
  }
];

export const allHistoricalLocations: GeoLocation[] = [
  // Indus Valley
  { name: 'Mohenjo-daro', lat: 27.329, lng: 68.138, type: 'settlement', description: 'Metropolis featuring the Great Bath, College of Priests, and complex underground sewer network.', period: 'c. 2500 BCE', civilizationId: 'indus-valley', recordId: 'indus-valley' },
  { name: 'Harappa', lat: 30.630, lng: 72.868, type: 'settlement', description: 'Major northern administrative center with granaries and artisan quarters.', period: 'c. 2600 BCE', civilizationId: 'indus-valley', recordId: 'indus-valley' },
  { name: 'Lothal Dockyard', lat: 22.522, lng: 72.249, type: 'archaeological', description: 'World\'s oldest tidal dock with marine warehouse and bead factory.', period: 'c. 2400 BCE', civilizationId: 'indus-valley', recordId: 'indus-valley' },
  { name: 'Dholavira', lat: 23.886, lng: 70.213, type: 'archaeological', description: 'Citadel with complex stone rain reservoirs and giant billboard sign.', period: 'c. 2650 BCE', civilizationId: 'indus-valley', recordId: 'indus-valley' },

  // Egypt
  { name: 'Giza Pyramids', lat: 29.979, lng: 31.134, type: 'monument', description: 'Khufu\'s Great Pyramid, solitary survivor of the Seven Wonders of the Ancient World.', period: 'c. 2560 BCE', civilizationId: 'ancient-egypt', recordId: 'ancient-egypt' },
  { name: 'Thebes (Karnak & Luxor)', lat: 25.687, lng: 32.639, type: 'capital', description: 'Imperial New Kingdom religious center with titanic hypostyle columns.', period: 'c. 1550 BCE', civilizationId: 'ancient-egypt', recordId: 'ancient-egypt' },
  { name: 'Valley of the Kings', lat: 25.740, lng: 32.601, type: 'archaeological', description: 'Subterranean royal rock-cut tombs including Tutankhamun and Ramesses II.', period: 'c. 1500 BCE', civilizationId: 'ancient-egypt', recordId: 'ancient-egypt' },
  { name: 'Alexandria', lat: 31.200, lng: 29.918, type: 'settlement', description: 'Center of Hellenistic scholarship, Great Library, and Pharos Lighthouse.', period: '331 BCE', civilizationId: 'ancient-egypt', recordId: 'cleopatra' },

  // Mesopotamia
  { name: 'Uruk', lat: 31.322, lng: 45.637, type: 'settlement', description: 'World\'s first true city-state, cradle of cuneiform writing and Gilgamesh.', period: 'c. 3500 BCE', civilizationId: 'mesopotamia', recordId: 'mesopotamia' },
  { name: 'Ziggurat of Ur', lat: 30.962, lng: 46.103, type: 'monument', description: 'Monumental stepped pyramid temple dedicated to the moon god Nanna.', period: 'c. 2100 BCE', civilizationId: 'mesopotamia', recordId: 'mesopotamia' },
  { name: 'Babylon', lat: 32.542, lng: 44.421, type: 'capital', description: 'Capital of Hammurabi and Nebuchadnezzar, site of the blue glazed Ishtar Gate.', period: 'c. 1792 BCE', civilizationId: 'mesopotamia', recordId: 'mesopotamia' },

  // Classical & Mauryan
  { name: 'Pataliputra', lat: 25.611, lng: 85.144, type: 'capital', description: 'Imperial metropolis of the Mauryan and Gupta empires along the Ganges.', period: '322 BCE', civilizationId: 'mauryan-empire', recordId: 'ashoka' },
  { name: 'Dhauli Kalinga Battlefield', lat: 20.192, lng: 85.839, type: 'battle', description: 'Site of the cataclysmic Kalinga War that induced Ashoka\'s pacifist transformation.', period: '261 BCE', civilizationId: 'mauryan-empire', recordId: 'kalinga-war' },
  { name: 'Sanchi Great Stupa', lat: 23.479, lng: 77.740, type: 'monument', description: 'Foundational Buddhist hemispherical stupa commissioned by Emperor Ashoka.', period: 'c. 250 BCE', civilizationId: 'mauryan-empire', recordId: 'ashoka' },
  { name: 'Taxila', lat: 33.746, lng: 72.839, type: 'settlement', description: 'Renowned Silk Road university hub where Chanakya composed the Arthashastra.', period: 'c. 300 BCE', civilizationId: 'mauryan-empire' },

  // Rome & Greece
  { name: 'Rome', lat: 41.902, lng: 12.496, type: 'capital', description: 'Heart of the Republic and Empire: Colosseum, Forum Romanum, Pantheon.', period: '509 BCE', civilizationId: 'roman-empire' },
  { name: 'Athens (Acropolis)', lat: 37.971, lng: 23.726, type: 'monument', description: 'Birthplace of democratic assembly, philosophy, and the Parthenon temple.', period: 'c. 447 BCE' },
  { name: 'Constantinople', lat: 41.008, lng: 28.978, type: 'capital', description: 'Capital of the Eastern Roman Empire, home to Hagia Sophia and imperial walls.', period: '330 CE', civilizationId: 'roman-empire' },

  // East Asia
  { name: 'Chang\'an', lat: 34.341, lng: 108.939, type: 'capital', description: 'Terminus of the Silk Road and imperial capital of the Han and Tang dynasties.', period: '202 BCE', civilizationId: 'han-dynasty' },
  { name: 'Nalanda Mahavihara', lat: 25.136, lng: 85.444, type: 'monument', description: 'Ancient global university with 10,000 scholars taught in philosophy, logic, and medicine.', period: '427 CE', civilizationId: 'gupta-empire' },

  // Middle East & Africa
  { name: 'Baghdad (House of Wisdom)', lat: 33.315, lng: 44.366, type: 'capital', description: 'Center of the Islamic Golden Age translating and synthesizing global science.', period: '762 CE', civilizationId: 'islamic-caliphate' },
  { name: 'Timbuktu', lat: 16.766, lng: -3.002, type: 'settlement', description: 'Sankore University and trans-Saharan gold, salt, and manuscript book hub.', period: 'c. 1300 CE' },

  // Modern Battles & Turning Points
  { name: 'Normandy Beaches', lat: 49.369, lng: -0.871, type: 'battle', description: 'D-Day Allied amphibious invasion opening the Western Front in WWII.', period: 'June 6, 1944', recordId: 'world-war-ii' },
  { name: 'Stalingrad', lat: 48.708, lng: 44.513, type: 'battle', description: 'Bloodiest siege in military history, turning the tide of World War II.', period: '1942–1943', recordId: 'world-war-ii' },
  { name: 'Hiroshima', lat: 34.385, lng: 132.455, type: 'battle', description: 'First combat deployment of an atomic weapon, initiating the nuclear age.', period: 'August 6, 1945', recordId: 'world-war-ii' }
];

// ---------------------------------------------------------------------------
// 3. LIVING TIMELINE & GLOBAL SYNCHRONIZER (Where Were They Then?)
// ---------------------------------------------------------------------------

export const globalSyncSnapshots: GlobalSyncEvent[] = [
  {
    year: -3000,
    yearDisplay: '3000 BCE',
    eraName: 'Dawn of the Bronze Age & Urban Awakening',
    synopsis: 'Human societies transition from rural Neolithic villages into monumental river-valley city-states, developing the world\'s first writing scripts, bronze metallurgy, and legal codes.',
    regions: {
      india: 'Early Harappan farming settlements expand across the Indus basin; brick firing and standardized pottery styles emerge.',
      europe: 'Megalithic builders construct stone monuments like Stonehenge; early Aegean bronze metalworking begins in the Cyclades.',
      africa: 'King Narmer unifies Upper and Lower Egypt into the First Dynasty; the Narmer Palette records the consolidation of pharaonic statecraft.',
      china: 'Late Neolithic Liangzhu and Longshan cultures cultivate wet-field rice, carve ceremonial jade bi discs, and build walled rammed-earth towns.',
      centralAsia: 'Afanasievo nomadic pastoralist cultures domesticate horses and pioneer wheeled cart transportation across the Eurasian steppes.',
      americas: 'Caral-Supe civilization in the coastal valleys of Peru begins constructing monumental stone platform pyramids and quipu knot record systems.',
      middleEast: 'Uruk in Sumer becomes the world\'s first metropolis; scribes impress pictographic cuneiform tokens into soft clay accounting tablets.'
    },
    events: [
      { title: 'Unification of Egypt under Narmer', region: 'Africa', civilization: 'Ancient Egypt', description: 'The First Dynasty unifies the Nile Valley under the double crown of Upper and Lower Egypt.', category: 'politics', recordId: 'ancient-egypt' },
      { title: 'Invention of Cuneiform Script', region: 'Middle East', civilization: 'Sumer', description: 'Temple administrators in Uruk develop wedge-shaped writing on clay to track grain and livestock.', category: 'science', recordId: 'mesopotamia' },
      { title: 'Foundations of Caral-Supe Pyramids', region: 'Americas', civilization: 'Norte Chico', description: 'Monumental ceremonial platform complexes erected in Peru without ceramic pottery.', category: 'culture' }
    ]
  },
  {
    year: -500,
    yearDisplay: '500 BCE',
    eraName: 'The Axial Age of Universal Thought',
    synopsis: 'A profound philosophical awakening sweeps Eurasia simultaneously: the Buddha and Mahavira in India, Confucius and Laozi in China, Socrates and the Pre-Socratics in Greece, and the Hebrew prophets.',
    regions: {
      india: 'Siddhartha Gautama (The Buddha) attains enlightenment in Magadha; Mahavira codifies Jain philosophy of Ahimsa (non-violence); urbanization peaks.',
      europe: 'The Roman Republic is established (509 BCE); Athenian democracy takes form under Cleisthenes; classical Greek philosophical inquiry flourishes.',
      africa: 'Nok culture in modern Nigeria masters advanced iron smelting and sculpts sophisticated terracotta heads; Kingdom of Kush thrives at Meroë.',
      china: 'Spring and Autumn period; Confucius teaches ethical statecraft, benevolence (Ren), and filial piety; Laozi reflects on the Dao.',
      centralAsia: 'Scythian and Saka nomadic horse archers dominate the Eurasian steppes, crafting intricate animal-style gold ornamental jewelry.',
      americas: 'Zapotec civilization builds the mountaintop capital of Monte Albán; Olmec culture reaches its twilight in Mesoamerica.',
      middleEast: 'Achaemenid Persian Empire under Darius I establishes the Royal Road, satrapy administrative governance, and Zoroastrian state ethics.'
    },
    events: [
      { title: 'Enlightenment of the Buddha', region: 'India', civilization: 'Magadha / Ancient India', description: 'Siddhartha Gautama preaches the Four Noble Truths and Eightfold Path at Sarnath.', category: 'religion' },
      { title: 'Founding of the Roman Republic', region: 'Europe', civilization: 'Rome', description: 'Romans overthrow the Etruscan monarchy, establishing senatorial consular government (509 BCE).', category: 'politics' },
      { title: 'Teachings of Confucius', region: 'China', civilization: 'Zhou Dynasty', description: 'Master Kong travels between Chinese states teaching moral order, ritual propriety (Li), and governance.', category: 'religion' },
      { title: 'Darius the Great Expands Persian Empire', region: 'Middle East', civilization: 'Achaemenid Empire', description: 'Persepolis palace constructed; Royal Road stretches from Susa to Sardis.', category: 'politics' }
    ]
  },
  {
    year: 1,
    yearDisplay: '1 CE',
    eraName: 'Pax Romana & The Han Silk Highway',
    synopsis: 'Eurasia is linked from the Atlantic to the Pacific by two colossal superpower empires—the Roman Empire and Han Dynasty—fostering unprecedented global trade along the Silk Road.',
    regions: {
      india: 'Satavahana Dynasty in the Deccan and Kushan Empire in the northwest link Indian Ocean spice trade with the Silk Road; Buddhist stupas proliferate.',
      europe: 'Augustus Caesar establishes the Principate, bringing an end to civil wars and inaugurating the Pax Romana across the Mediterranean.',
      africa: 'Kingdom of Aksum emerges in Ethiopia as a naval commercial power; Alexandria flourishes as the intellectual capital of the Roman Mediterranean.',
      china: 'Western Han Dynasty at its zenith; imperial academies educate 30,000 scholars in Confucian classics; Silk Road caravans stream westward.',
      centralAsia: 'Kushan nomads establish an expansive empire bridging India, Central Asia, and China, patronizing Gandhara Greco-Buddhist art.',
      americas: 'Teotihuacan in the Valley of Mexico begins constructing the titanic Pyramid of the Sun; Maya pre-classic urban centers expand.',
      middleEast: 'Judea under Roman client-king administration; birth and early life of Jesus of Nazareth, founding figure of Christianity.'
    },
    events: [
      { title: 'Reign of Augustus & Pax Romana', region: 'Europe', civilization: 'Roman Empire', description: 'Rome transforms from city of brick to city of marble under imperial rule.', category: 'politics' },
      { title: 'Kushan-Indian Silk Road Flourishing', region: 'Central Asia / India', civilization: 'Kushan Empire', description: 'Greco-Roman artistic styles blend with Buddhist spirituality in Gandhara sculpture.', category: 'culture' },
      { title: 'Rise of Teotihuacan Metropolis', region: 'Americas', civilization: 'Teotihuacan', description: 'Grid-planned metropolis founded in Mexico with Avenue of the Dead.', category: 'culture' }
    ]
  },
  {
    year: 500,
    yearDisplay: '500 CE',
    eraName: 'Post-Roman Transformations & The Classical Indian Zenith',
    synopsis: 'As the Western Roman Empire fragments into Germanic kingdoms, classical civilization peaks in India under the Guptas, the Eastern Roman Empire endures at Constantinople, and the Maya flourish.',
    regions: {
      india: 'Gupta Empire golden age; astronomer Aryabhata publishes mathematical treatise calculating pi and planetary orbits; Nalanda University thrives.',
      europe: 'Western Roman Empire dissolves; Clovis establishes the Frankish Kingdom; Theodoric the Great rules the Ostrogothic Kingdom of Italy.',
      africa: 'Vandal Kingdom rules North Africa; Aksumite Empire controls Red Sea shipping routes; Kingdom of Ghana begins to organize in West Africa.',
      china: 'Northern and Southern Dynasties; Buddhism becomes deeply entrenched in Chinese society, with massive rock-cut grottoes carved at Longmen and Dunhuang.',
      centralAsia: 'Hephthalite (White Hun) confederation dominates Central Asia, exerting military pressure on northern India and Sassanian Persia.',
      americas: 'Classic Maya civilization flourishes in the Petén rainforest; Tikal and Calakmul erect hieroglyphic stelae recording dynastic wars.',
      middleEast: 'Sassanian Persian Empire under Kavadh I engages in intense military and diplomatic rivalry with the Byzantine Empire.'
    },
    events: [
      { title: 'Aryabhata Calculates Pi and Planetary Orbits', region: 'India', civilization: 'Gupta Empire', description: 'Aryabhatiya treatise introduces trigonometry, the decimal zero, and earth\'s axial rotation.', category: 'science' },
      { title: 'Baptism of Clovis & Merovingian Rise', region: 'Europe', civilization: 'Franks', description: 'King Clovis unites Frankish tribes and converts to Catholic Christianity, reshaping Western Europe.', category: 'politics' },
      { title: 'Classic Maya Dynasty at Tikal', region: 'Americas', civilization: 'Maya', description: 'Great Plaza temples and carved dynastic stelae celebrate Maya royal lineages.', category: 'culture' }
    ]
  },
  {
    year: 1000,
    yearDisplay: '1000 CE',
    eraName: 'The Millennial Crossroads: Song Science & Chola Maritime Reach',
    synopsis: 'Technological invention explodes in Song Dynasty China (gunpowder, compass, movable type), while the Chola Empire of South India dominates Indian Ocean trade lanes, and Islamic science peaks.',
    regions: {
      india: 'Chola Dynasty under Rajaraja I and Rajendra I builds the colossal Brihadisvara Temple and dispatches naval expedition fleets across Southeast Asia.',
      europe: 'High Medieval feudalism; Holy Roman Empire; Norse explorer Leif Erikson lands in North America (Vinland); Byzantine Empire under Basil II.',
      africa: 'Kingdom of Ghana controls trans-Saharan gold trade; Swahili city-states (Kilwa, Zanzibar) trade ivory and gold across the Indian Ocean.',
      china: 'Song Dynasty pioneers paper banknote currency (Jiaozi), commercial shipping compasses, hydraulic spinning machines, and civil service exams.',
      centralAsia: 'Ghaznavid and Karakhanid dynasties patronize scholars like Al-Biruni, who compiles his monumental encyclopedic survey of Indian culture and science.',
      americas: 'Toltec civilization centers at Tula in Mexico; Ancestral Puebloans construct multistory cliff palaces at Mesa Verde and Chaco Canyon.',
      middleEast: 'Fatimid Caliphate in Cairo founds Al-Azhar; Ibn al-Haytham pioneers the modern scientific method and optics in Cairo.'
    },
    events: [
      { title: 'Song Dynasty Pioneers Paper Money and Compass', region: 'China', civilization: 'Song Dynasty', description: 'World\'s first government-issued paper currency and maritime magnetic compass revolutionize trade.', category: 'science' },
      { title: 'Rajaraja Chola Dedicates Brihadisvara Temple', region: 'India', civilization: 'Chola Empire', description: 'Granite temple tower rises 66 meters at Thanjavur, celebrating Dravidian monumental architecture.', category: 'culture' },
      { title: 'Ibn al-Haytham Publishes Book of Optics', region: 'Middle East', civilization: 'Fatimid Era', description: 'Pioneers the modern empirical scientific method, demonstrating how light rays travel into the eye.', category: 'science' }
    ]
  },
  {
    year: 1492,
    yearDisplay: '1492 CE',
    eraName: 'The Global Convergence: New Continents & The Renaissance',
    synopsis: 'Christopher Columbus crosses the Atlantic, initiating the Columbian Exchange that permanently bridges Old and New Worlds, while the Italian Renaissance reaches its artistic summit.',
    regions: {
      india: 'Delhi Sultanate in late transition before the rise of the Mughals; Vijayanagara Empire thrives in the Deccan, trading with Portugal.',
      europe: 'Catholic Monarchs conquer Granada, ending Islamic Al-Andalus; Columbus crosses the Atlantic; Leonardo da Vinci works in Milan.',
      africa: 'Songhai Empire under Askia the Great reaches its zenith in West Africa; Timbuktu manuscripts flourish in Islamic law, astronomy, and literature.',
      china: 'Ming Dynasty rebuilds the Great Wall of China with brick towers and completes the Forbidden City imperial palace in Beijing.',
      centralAsia: 'Timurid Renaissance in Samarkand and Herat; Babur begins his early campaigns that will eventually lead to the founding of the Mughal Empire.',
      americas: 'Inca Empire (Tawantinsuyu) encompasses millions across the Andes; Aztec Empire (Triple Alliance) dominates central Mexico from Tenochtitlan.',
      middleEast: 'Ottoman Empire under Bayezid II welcomes Sephardic Jewish refugees expelled from Spain, strengthening imperial trade and science.'
    },
    events: [
      { title: 'Columbus Crosses the Atlantic', region: 'Americas / Europe', civilization: 'Spain', description: 'Transatlantic voyage initiates the Columbian Exchange of crops, diseases, and cultures.', category: 'politics' },
      { title: 'Leonardo da Vinci Envisions Flying Machines', region: 'Europe', civilization: 'Italian Renaissance', description: 'Master sketches anatomical studies, military engineering, and aerodynamic wing mechanics.', category: 'science', recordId: 'davinci' },
      { title: 'Inca Empire Peak under Huayna Capac', region: 'Americas', civilization: 'Inca Empire', description: 'Royal road network of 40,000 kilometers connects mountain fortresses across the Andes.', category: 'culture' }
    ]
  },
  {
    year: 1945,
    yearDisplay: '1945 CE',
    eraName: 'The Nuclear Dawn, United Nations & Post-Colonial Awakening',
    synopsis: 'World War II concludes with the defeat of Axis fascism, the horror of the Holocaust, the detonation of atomic bombs, and the birth of the United Nations, triggering global decolonization.',
    regions: {
      india: 'Indian Independence movement accelerates under Gandhi, Nehru, and Patel; Royal Indian Navy mutiny and mass protests lead to 1947 independence.',
      europe: 'Nazi Germany surrenders after Soviet capture of Berlin; Nuremberg Trials establish legal accountability for crimes against humanity; Cold War begins.',
      africa: 'Fifth Pan-African Congress in Manchester demands immediate self-determination and end of European colonial rule across the African continent.',
      china: 'Eight-year war of resistance against Imperial Japan ends; Chinese Civil War resumes between Nationalist forces and Communist armies.',
      centralAsia: 'Central Asian Soviet republics mobilize millions for the war effort, providing vital industrial production and military recruits.',
      americas: 'United States emerges as the world\'s preeminent industrial, financial, and atomic superpower; Bretton Woods institutions (IMF, World Bank) launched.',
      middleEast: 'Arab League founded in Cairo; discovery of massive petroleum reserves initiates rapid geopolitical realignment and post-colonial border tensions.'
    },
    events: [
      { title: 'Founding of the United Nations', region: 'Americas / Global', civilization: 'United Nations', description: '50 nations sign the UN Charter in San Francisco to save succeeding generations from the scourge of war.', category: 'politics', recordId: 'world-war-ii' },
      { title: 'Detonation of the Atomic Bomb', region: 'Asia', civilization: 'Global', description: 'Atomic weapons deployed on Hiroshima and Nagasaki, inaugurating the nuclear age.', category: 'war', recordId: 'world-war-ii' },
      { title: 'Nuremberg Tribunal for War Crimes', region: 'Europe', civilization: 'Allied Powers', description: 'First international court establishing that individuals cannot plead sovereign immunity for crimes against humanity.', category: 'politics', recordId: 'world-war-ii' }
    ]
  }
];

// ---------------------------------------------------------------------------
// 4. HISTORICAL DOCUMENTS & ARTEFACT ARCHIVE (Sourced & Attributed)
// ---------------------------------------------------------------------------

export const archivalArtefacts: HistoricalDocumentArtefact[] = [
  {
    id: 'rosetta-stone',
    title: 'The Rosetta Stone',
    date: '196 BCE',
    approxYear: -196,
    period: 'Ptolemaic Period, Ancient Egypt',
    origin: 'Memphis, Egypt (Discovered at Rashid / Rosetta)',
    creator: 'Ptolemaic Royal Scribes & Priesthood',
    institution: 'The British Museum, London',
    collection: 'Department of Egypt and Sudan (EA 24)',
    description: 'A granodiorite stele inscribed with three versions of a decree issued by King Ptolemy V Epiphanes. The texts are written in Ancient Egyptian hieroglyphs, Demotic script, and Ancient Greek, which provided the key that allowed Jean-François Champollion to decipher Egyptian hieroglyphs in 1822.',
    historicalSignificance: 'Unlocked three thousand years of Egyptian written history, transforming Egyptology from myth into an empirical linguistic science.',
    fullExcerpt: 'In the reign of the young one who has received the royalty from his father, lord of crowns, glorious, who has established Egypt, and is pious towards the gods, triumphant over his enemies... it has been decreed by the priests that the honors of the immortal King Ptolemy shall be increased greatly in all the temples...',
    sourceUrl: 'https://www.britishmuseum.org/collection/object/Y_EA24',
    license: 'Open Access / Creative Commons CC-BY-NC-SA',
    imageUrl: '/assets/images/hero_ancient_history_1795464676030.jpg',
    recordId: 'ancient-egypt',
    tags: ['Script', 'Hieroglyphs', 'Decree', 'Linguistics', 'Ptolemaic']
  },
  {
    id: 'ashoka-rock-edict-xiii',
    title: 'Ashoka\'s Major Rock Edict XIII (Kalinga Inscription)',
    date: 'c. 250 BCE',
    approxYear: -250,
    period: 'Mauryan Empire, Ancient India',
    origin: 'Kalsi / Shahbazgarhi / Girnar (Inscribed across the Indian Subcontinent)',
    creator: 'Emperor Ashoka (Devanampriya Priyadasi)',
    institution: 'Archaeological Survey of India / National Museum, New Delhi',
    collection: 'Ashokan Epigraphic Corpus',
    description: 'A monumental rock inscription in Brahmi and Kharosthi scripts wherein Emperor Ashoka publicly confesses his profound anguish over the carnage and deportations of the Kalinga War, formally renouncing conquest by military force (Vijaya) in favor of conquest by moral righteousness (Dharmavijaya).',
    historicalSignificance: 'The earliest surviving political decree in world history wherein an absolute imperial monarch renounces military aggression out of moral remorse and champions non-violence and animal welfare.',
    fullExcerpt: 'When the King, Beloved-of-the-Gods, had been consecrated eight years, Kalinga was conquered. One hundred and fifty thousand people were deported, one hundred thousand were killed, and many times that number perished... Even a fraction of one percent of those who died, were killed, or deported in Kalinga would now cause the Beloved-of-the-Gods profound sorrow. What is conquest by Dharma is considered the supreme conquest.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Edicts_of_Ashoka',
    license: 'Public Domain / Open Access',
    imageUrl: '/assets/images/figure_ashoka_1795464677327.jpg',
    recordId: 'kalinga-war',
    tags: ['Epigraphy', 'Brahmi', 'Pacifism', 'Buddhism', 'Human Rights']
  },
  {
    id: 'code-of-hammurabi',
    title: 'The Code of Hammurabi Stele',
    date: 'c. 1750 BCE',
    approxYear: -1750,
    period: 'Old Babylonian Empire',
    origin: 'Babylon (Excavated at Susa, modern Iran)',
    creator: 'Hammurabi, King of Babylon',
    institution: 'Musée du Louvre, Paris',
    collection: 'Department of Near Eastern Antiquities (Sb 8)',
    description: 'A 2.25-meter tall diorite stele engraved in Akkadian cuneiform script with 282 legal statutes governing commerce, property rights, contracts, family law, wages, and liabilities, surmounted by a relief of Hammurabi receiving judicial authority directly from Shamash, god of justice.',
    historicalSignificance: 'One of the earliest, most complete codified legal systems in human history, establishing foundational legal concepts including presumption of innocence, written evidence, and proportional liability.',
    fullExcerpt: 'When the lofty Anu, king of the Anunnaki, and Bel, lord of heaven and earth, called me, Hammurabi, the devout prince who fears God, to bring about the rule of righteousness in the land, to destroy the wicked and the evil-doers; so that the strong should not harm the weak...',
    sourceUrl: 'https://collections.louvre.fr/en/ark:/53355/cl010174436',
    license: 'Public Domain / Louvre Open Access',
    imageUrl: '/assets/images/civilization_indus_1795464676243.jpg',
    recordId: 'mesopotamia',
    tags: ['Law', 'Cuneiform', 'Babylon', 'Justice', 'Diorite']
  },
  {
    id: 'magna-carta',
    title: 'The Magna Carta (Great Charter)',
    date: 'June 15, 1215 CE',
    approxYear: 1215,
    period: 'Medieval England',
    origin: 'Runnymede, near Windsor, England',
    creator: 'Barons of England & King John',
    institution: 'The British Library, London',
    collection: 'Cotton MS Augustus ii. 106',
    description: 'A parchment charter agreed to by King John under pressure from rebellious feudal barons, establishing for the first time the principle that everyone, including the monarch, is subject to the rule of law. Clause 39 established the protection of individual liberty from arbitrary arrest without lawful judgment by peers.',
    historicalSignificance: 'Foundational constitutional document that directly inspired the English Bill of Rights (1689), the United States Constitution (1787), and the Universal Declaration of Human Rights (1948).',
    fullExcerpt: 'No free man shall be seized or imprisoned, or stripped of his rights or possessions, or outlawed or exiled, or deprived of his standing in any other way, nor will we proceed with force against him, or send others to do so, except by the lawful judgement of his equals or by the law of the land.',
    sourceUrl: 'https://www.bl.uk/collection-items/magna-carta-1215',
    license: 'Public Domain / British Library Open Data',
    imageUrl: '/assets/images/conflict_wwii_1795464677003.jpg',
    recordId: 'world-war-i',
    tags: ['Constitutional Law', 'Rule of Law', 'Medieval', 'Due Process']
  },
  {
    id: 'leonardo-vitruvian-man',
    title: 'Vitruvian Man & Codex Studies',
    date: 'c. 1490 CE',
    approxYear: 1490,
    period: 'High Renaissance, Italy',
    origin: 'Milan / Florence, Italy',
    creator: 'Leonardo da Vinci',
    institution: 'Gallerie dell\'Accademia, Venice',
    collection: 'Prints and Drawings Cabinet (Inv. 228)',
    description: 'Pen and ink drawing on paper depicting a man in two superimposed positions with his arms and legs apart and inscribed in a circle and square. Based on the correlations of ideal human body proportions with geometry described by ancient Roman architect Vitruvius.',
    historicalSignificance: 'The ultimate visual synthesis of Renaissance humanism: the integration of art, empirical anatomy, mathematics, and philosophy, symbolizing humanity as the harmonious microcosm of the universe.',
    fullExcerpt: 'Vitruvius the architect says in his work on architecture that the measurements of man are in nature distributed in this manner: that four fingers make one palm, and four palms make one foot, six palms make a cubit; four cubits make a man; and four cubits make one pace; and 24 palms make a man; and these measurements are in his buildings.',
    sourceUrl: 'https://www.gallerieaccademia.it/',
    license: 'Public Domain / Open Access',
    imageUrl: '/assets/images/figure_davinci_1795464678057.jpg',
    recordId: 'davinci',
    tags: ['Anatomy', 'Proportion', 'Renaissance', 'Geometry', 'Humanism']
  },
  {
    id: 'united-nations-charter',
    title: 'Charter of the United Nations',
    date: 'June 26, 1945 CE',
    approxYear: 1945,
    period: 'Post-WWII / Modern Era',
    origin: 'San Francisco Opera House, California, USA',
    creator: 'Delegates of 50 Allied Nations',
    institution: 'National Archives and Records Administration (NARA), Washington D.C.',
    collection: 'General Records of the U.S. Government, Record Group 11',
    description: 'The foundational international treaty that established the United Nations following the devastation of World War II. It codified principles of collective security, universal human rights, prohibition of aggressive military force, and equal sovereignty among nations.',
    historicalSignificance: 'The bedrock legal architecture of modern international relations and international law, establishing the General Assembly, Security Council, and International Court of Justice.',
    fullExcerpt: 'WE THE PEOPLES OF THE UNITED NATIONS DETERMINED to save succeeding generations from the scourge of war, which twice in our lifetime has brought untold sorrow to mankind, and to reaffirm faith in fundamental human rights, in the dignity and worth of the human person, in the equal rights of men and women and of nations large and small...',
    sourceUrl: 'https://www.archives.gov/milestone-documents/united-nations-charter',
    license: 'Public Domain / United Nations Archives',
    imageUrl: '/assets/images/conflict_wwii_1795464677003.jpg',
    recordId: 'world-war-ii',
    tags: ['Treaty', 'Peace', 'International Law', 'Human Rights', 'Global Governance']
  }
];

// ---------------------------------------------------------------------------
// 5. HISTORICAL PERSONALITIES NETWORK (Nodes & Verified Relationships)
// ---------------------------------------------------------------------------

export const personalityNetworkNodes: PersonalityNode[] = [
  {
    id: 'socrates',
    name: 'Socrates',
    title: 'Athenian Philosopher & Father of Western Ethics',
    birthYear: 'c. 470 BCE',
    deathYear: '399 BCE',
    period: 'Classical Antiquity',
    geography: 'Athens, Greece',
    civilization: 'Ancient Greece',
    bio: 'Renowned for the Socratic method of cooperative argumentative dialogue, dialectical questioning of ethical axioms, and his trial and execution for challenging Athenian orthodoxies.',
    achievements: ['Founded philosophical ethics and epistemological questioning', 'Pioneered dialectical Socratic method'],
    influence: 'Shifted philosophical focus from natural cosmological speculation to human morality, justice, and self-knowledge.',
    imageUrl: '/assets/images/figure_cleopatra_1795464677702.jpg',
    relationships: [
      { targetId: 'plato', targetName: 'Plato', type: 'teacher', description: 'Taught Plato, who preserved Socratic dialogues in immortal philosophical texts.', provenance: 'documented' }
    ]
  },
  {
    id: 'plato',
    name: 'Plato',
    title: 'Founder of the Academy in Athens',
    birthYear: 'c. 428 BCE',
    deathYear: 'c. 348 BCE',
    period: 'Classical Antiquity',
    geography: 'Athens, Greece',
    civilization: 'Ancient Greece',
    bio: 'Author of philosophical dialogues including The Republic, Symposium, and Phaedo; established the Theory of Forms and founded Western civilization\'s first higher education institution.',
    achievements: ['Founded the Academy of Athens', 'Formulated the Theory of Forms and Republic state model'],
    influence: 'Established foundational metaphysical and political frameworks that influenced Christian theology and European philosophy.',
    imageUrl: '/assets/images/figure_cleopatra_1795464677702.jpg',
    relationships: [
      { targetId: 'socrates', targetName: 'Socrates', type: 'student', description: 'Devoted student of Socrates whose trial inspired his political philosophy.', provenance: 'documented' },
      { targetId: 'aristotle', targetName: 'Aristotle', type: 'teacher', description: 'Taught Aristotle at the Academy for twenty years.', provenance: 'documented' }
    ]
  },
  {
    id: 'aristotle',
    name: 'Aristotle',
    title: 'Universal Scholar & Founder of the Lyceum',
    birthYear: '384 BCE',
    deathYear: '322 BCE',
    period: 'Classical Antiquity',
    geography: 'Stagira / Athens / Macedonia',
    civilization: 'Ancient Greece',
    bio: 'Polymath whose writings spanned formal logic, biology, physics, metaphysics, ethics, rhetoric, and politics; tutored Alexander the Great in Macedonia.',
    achievements: ['Invention of formal syllogistic logic', 'Systematic empirical biology and teleological ethics'],
    influence: 'Dominated European, Islamic, and Byzantine philosophy and natural science for nearly two thousand years.',
    imageUrl: '/assets/images/figure_cleopatra_1795464677702.jpg',
    relationships: [
      { targetId: 'plato', targetName: 'Plato', type: 'student', description: 'Studied under Plato before formulating his empirical counter-critique of the Forms.', provenance: 'documented' },
      { targetId: 'alexander-the-great', targetName: 'Alexander the Great', type: 'teacher', description: 'Hired by King Philip II of Macedon to tutor Prince Alexander in literature, science, and medicine.', provenance: 'documented' }
    ]
  },
  {
    id: 'alexander-the-great',
    name: 'Alexander III of Macedon',
    title: 'King of Macedonia & Hegemon of Greece',
    birthYear: '356 BCE',
    deathYear: '323 BCE',
    period: 'Classical Antiquity',
    geography: 'Macedonia, Greece, Persia, Egypt, Northwest India',
    civilization: 'Hellenistic World',
    bio: 'Military commander undefeated in battle who conquered the Achaemenid Persian Empire, founded Alexandria, and disseminated Greek culture across the Near East and Central Asia.',
    achievements: ['Conquest of the Persian Empire', 'Initiated the Hellenistic Era blending Greek, Egyptian, and Asian cultures'],
    influence: 'Created the interconnected Hellenistic sphere that later facilitated Roman expansion, Silk Road commerce, and Greco-Buddhist art.',
    imageUrl: '/assets/images/hero_ancient_history_1795464676030.jpg',
    relationships: [
      { targetId: 'aristotle', targetName: 'Aristotle', type: 'student', description: 'Tutored by Aristotle, whose biological and geographic curiosity Alexander carried on campaign.', provenance: 'documented' },
      { targetId: 'chandragupta-maurya', targetName: 'Chandragupta Maurya', type: 'contemporary', description: 'His withdrawal from northwest India left a power vacuum rapidly filled by Chandragupta Maurya.', provenance: 'documented' }
    ]
  },
  {
    id: 'chandragupta-maurya',
    name: 'Chandragupta Maurya',
    title: 'Founder of the Mauryan Empire',
    birthYear: 'c. 340 BCE',
    deathYear: 'c. 297 BCE',
    period: 'Classical Antiquity',
    geography: 'Pataliputra, Magadha, Northwestern India',
    civilization: 'Mauryan Empire',
    bio: 'Overthrew the Nanda dynasty and defeated Alexander\'s successor Seleucus I Nicator in 305 BCE, consolidating northern and central India under the subcontinent\'s first pan-imperial state.',
    achievements: ['Founded the Mauryan Empire', 'Treaty with Seleucus establishing international peace and ambassadorial ties'],
    influence: 'Demonstrated the possibility of a politically unified Indian subcontinent with centralized bureaucracy and economic infrastructure.',
    imageUrl: '/assets/images/figure_ashoka_1795464677327.jpg',
    relationships: [
      { targetId: 'chanakya', targetName: 'Chanakya (Kautilya)', type: 'student', description: 'Guided from youth by Chanakya, who served as his prime minister and royal advisor.', provenance: 'documented' },
      { targetId: 'ashoka', targetName: 'Emperor Ashoka', type: 'successor', description: 'Paternal grandfather of Emperor Ashoka.', provenance: 'documented' }
    ]
  },
  {
    id: 'chanakya',
    name: 'Chanakya (Kautilya / Vishnugupta)',
    title: 'Royal Counselor & Author of Arthashastra',
    birthYear: 'c. 375 BCE',
    deathYear: 'c. 283 BCE',
    period: 'Classical Antiquity',
    geography: 'Taxila / Pataliputra, India',
    civilization: 'Mauryan Empire',
    bio: 'Taxila university professor, strategist, and statesman who engineered the rise of Chandragupta Maurya and codified the Arthashastra, Eurasia\'s foundational manual on political economy and statecraft.',
    achievements: ['Author of the Arthashastra treatise', 'Architect of Mauryan administrative espionage and taxation'],
    influence: 'Pioneered realistic political theory, intelligence networks, and strategic diplomacy (Mandala theory) centuries before Machiavelli.',
    imageUrl: '/assets/images/figure_ashoka_1795464677327.jpg',
    relationships: [
      { targetId: 'chandragupta-maurya', targetName: 'Chandragupta Maurya', type: 'teacher', description: 'Discovered and mentored young Chandragupta to overthrow oppressive Nanda rule.', provenance: 'documented' }
    ]
  },
  {
    id: 'ashoka',
    name: 'Ashoka the Great',
    title: 'Third Mauryan Emperor & Patron of Dhamma',
    birthYear: 'c. 304 BCE',
    deathYear: '232 BCE',
    period: 'Classical Antiquity',
    geography: 'Pataliputra, Indian Subcontinent',
    civilization: 'Mauryan Empire',
    bio: 'Conquered Kalinga in 261 BCE with immense bloodshed, underwent a profound spiritual crisis, converted to Buddhism, and transformed his empire into a humanitarian realm governed by moral edicts.',
    achievements: ['Disseminated Buddhist ethics across Asia via stone edicts', 'Established hospitals for humans and animals across India'],
    influence: 'Turned Buddhism from an Indian ascetic movement into a world religion; modern India adopted his Lion Capital as its national emblem.',
    imageUrl: '/assets/images/figure_ashoka_1795464677327.jpg',
    recordId: 'ashoka',
    relationships: [
      { targetId: 'chandragupta-maurya', targetName: 'Chandragupta Maurya', type: 'successor', description: 'Carried forward the imperial infrastructure founded by his grandfather.', provenance: 'documented' }
    ]
  },
  {
    id: 'cleopatra',
    name: 'Cleopatra VII Philopator',
    title: 'Last Active Queen of the Ptolemaic Kingdom',
    birthYear: '69 BCE',
    deathYear: '30 BCE',
    period: 'Hellenistic / Roman Era',
    geography: 'Alexandria, Egypt',
    civilization: 'Ptolemaic Egypt',
    bio: 'Brilliant polyglot diplomat, naval commander, and pharaoh who forged strategic political alliances with Julius Caesar and Mark Antony to defend Egyptian sovereignty against Roman annexation.',
    achievements: ['Preserved Egyptian autonomy during Roman civil wars', 'Commanded imperial naval fleets at Actium'],
    influence: 'Enduring global archetype of political intelligence, charismatic diplomacy, and tragic sovereign leadership.',
    imageUrl: '/assets/images/figure_cleopatra_1795464677702.jpg',
    recordId: 'cleopatra',
    relationships: [
      { targetId: 'julius-caesar', targetName: 'Julius Caesar', type: 'ally', description: 'Allied politically and romantically with Caesar, who restored her to the throne of Egypt.', provenance: 'documented' }
    ]
  },
  {
    id: 'julius-caesar',
    name: 'Gaius Julius Caesar',
    title: 'Dictator Perpetuo of the Roman Republic',
    birthYear: '100 BCE',
    deathYear: '44 BCE',
    period: 'Late Roman Republic',
    geography: 'Rome, Gaul, Egypt',
    civilization: 'Roman Republic',
    bio: 'Roman general and statesman who conquered Gaul, crossed the Rubicon to defeat Pompey in civil war, reformed the Roman calendar, and laid the institutional foundation for the Roman Empire.',
    achievements: ['Conquest of Gaul and Julian calendar reform', 'Centralized Roman state authority'],
    influence: 'His assassination on the Ides of March precipitated the collapse of the Roman Republic and the rise of the Roman Empire under Augustus.',
    imageUrl: '/assets/images/hero_ancient_history_1795464676030.jpg',
    relationships: [
      { targetId: 'cleopatra', targetName: 'Cleopatra VII', type: 'ally', description: 'Secured Cleopatra\'s throne in Alexandria and had a son, Caesarion.', provenance: 'documented' }
    ]
  },
  {
    id: 'davinci',
    name: 'Leonardo da Vinci',
    title: 'Archetypal Renaissance Polymath',
    birthYear: 'April 15, 1452',
    deathYear: 'May 2, 1519',
    period: 'High Renaissance',
    geography: 'Florence / Milan / Rome / Amboise, France',
    civilization: 'Italian Renaissance',
    bio: 'Painter of the Mona Lisa and The Last Supper, pioneering anatomical draughtsman, visionary civil engineer, and inventor who anticipated flight, armored vehicles, and automated hydraulics.',
    achievements: ['Created humanity\'s most celebrated paintings', 'Pioneered empirical anatomical dissection and biomechanics'],
    influence: 'Stands as history\'s ultimate exemplar of the Renaissance ideal: curiosity uniting art, empirical observation, and mechanical innovation.',
    imageUrl: '/assets/images/figure_davinci_1795464678057.jpg',
    recordId: 'davinci',
    relationships: [
      { targetId: 'verrocchio', targetName: 'Andrea del Verrocchio', type: 'student', description: 'Apprenticed in Verrocchio\'s celebrated Florentine bottega workshop.', provenance: 'documented' },
      { targetId: 'machiavelli', targetName: 'Niccolò Machiavelli', type: 'contemporary', description: 'Collaborated on strategic river diversion engineering projects during the Pisan War.', provenance: 'documented' }
    ]
  },
  {
    id: 'verrocchio',
    name: 'Andrea del Verrocchio',
    title: 'Master Sculptor and Painter of Florence',
    birthYear: 'c. 1435',
    deathYear: '1488',
    period: 'Early Renaissance',
    geography: 'Florence / Venice, Italy',
    civilization: 'Italian Renaissance',
    bio: 'Master of the preeminent Renaissance bottega that trained Leonardo da Vinci, Pietro Perugino, and Lorenzo di Credi; created the equestrian monument of Bartolomeo Colleoni.',
    achievements: ['Master of bronze casting and perspective painting', 'Trained the master generation of High Renaissance artists'],
    influence: 'Nurtured Leonardo\'s scientific attention to natural light, shadow gradation (sfumato), and musculoskeletal realism.',
    imageUrl: '/assets/images/figure_davinci_1795464678057.jpg',
    relationships: [
      { targetId: 'davinci', targetName: 'Leonardo da Vinci', type: 'teacher', description: 'Mentored young Leonardo in painting, bronze casting, and geometry in Florence.', provenance: 'documented' }
    ]
  },
  {
    id: 'machiavelli',
    name: 'Niccolò Machiavelli',
    title: 'Florentine Diplomat & Political Philosopher',
    birthYear: 'May 3, 1469',
    deathYear: 'June 21, 1527',
    period: 'Renaissance',
    geography: 'Florence, Italy',
    civilization: 'Italian Renaissance',
    bio: 'Secretary to the Florentine Chancellery and author of The Prince and Discourses on Livy, founding father of modern political realism and republican constitutional analysis.',
    achievements: ['Author of The Prince and Discourses on Livy', 'Separated political analysis from theological ethics'],
    influence: 'Revolutionized political philosophy by analyzing real human power dynamics rather than idealized moral kingdoms.',
    imageUrl: '/assets/images/figure_davinci_1795464678057.jpg',
    relationships: [
      { targetId: 'davinci', targetName: 'Leonardo da Vinci', type: 'contemporary', description: 'Met while Leonardo worked as military engineer for Cesare Borgia, later collaborating in Florence.', provenance: 'documented' }
    ]
  }
];

// ---------------------------------------------------------------------------
// 6. HISTORY CONNECTIONS CAUSAL ENGINE (Causes & Consequences)
// ---------------------------------------------------------------------------

export const causalConnectionsDatabase: Record<string, CausalConnectionNode> = {
  'world-war-i': {
    id: 'world-war-i',
    title: 'World War I: The Great Cataclysm',
    year: '1914 – 1918 CE',
    category: 'Global Warfare',
    summary: 'The collapse of European balance of power through entangled alliance treaties, imperialist competition, militarized naval build-ups, and nationalist fervor in the Balkans.',
    earlierCauses: [
      { title: 'Entangled Alliances', explanation: 'The division of Europe into two armed camps: Triple Entente (Britain, France, Russia) vs Triple Alliance (Germany, Austria-Hungary, Italy).' },
      { title: 'Imperialism and the Scramble for Africa', explanation: 'Clashes between industrial European powers for global colonies, natural resources, and strategic naval coaling stations.' },
      { title: 'The Balkan Powder Keg', explanation: 'Decline of the Ottoman Empire sparking virulent nationalist rivalry between Austria-Hungary and Russia-backed Serbia.' },
      { title: 'Assassination of Archduke Franz Ferdinand', explanation: 'Assassination in Sarajevo by Gavrilo Princip triggered the July Crisis and rapid chain-reaction mobilizations.' }
    ],
    laterConsequences: [
      { title: 'Collapse of Four European Empires', explanation: 'The German, Russian, Austro-Hungarian, and Ottoman empires were dismantled, creating unstable successor states.' },
      { title: 'The Russian Revolution of 1917', explanation: 'Wartime famine, military disaster, and economic collapse paved the way for the Bolshevik seizure of power and the USSR.' },
      { title: 'The Punitive Treaty of Versailles', explanation: 'War guilt clauses, reparations, and territorial cuts imposed on Germany cultivated toxic grievances that directly spawned WWII.', targetId: 'world-war-ii' },
      { title: 'Founding of the League of Nations', explanation: 'The first global intergovernmental organization dedicated to maintaining collective world peace.' }
    ],
    relatedWars: ['Franco-Prussian War (1870)', 'Balkan Wars (1912–1913)', 'Russian Civil War (1917–1922)', 'World War II (1939–1945)'],
    personalities: ['Kaiser Wilhelm II', 'Woodrow Wilson', 'Tsar Nicholas II', 'Georges Clemenceau', 'David Lloyd George'],
    civilizations: ['British Empire', 'German Empire', 'French Republic', 'Russian Empire', 'Austro-Hungarian Empire', 'Ottoman Empire'],
    scientificMovements: ['Industrial Chemical Warfare', 'Military Aviation', 'Submarine Warfare', 'Battlefield Blood Transfusion'],
    recordId: 'world-war-i'
  },
  'world-war-ii': {
    id: 'world-war-ii',
    title: 'World War II: The Total Conflagration',
    year: '1939 – 1945 CE',
    category: 'Global Warfare',
    summary: 'The deadliest conflict in human history, uniting Allied democracies and the Soviet Union against fascist Axis tyranny, culminating in 70+ million deaths, the Holocaust, and the nuclear dawn.',
    earlierCauses: [
      { title: 'Grievances from the Treaty of Versailles', explanation: 'Severe reparations, economic devastation, and national humiliation in Weimar Germany enabled Hitler\'s rise to power.', targetId: 'world-war-i' },
      { title: 'The Great Depression of 1929', explanation: 'Global financial collapse destroyed democratic stability, empowering totalitarian demagogues in Germany, Italy, and Japan.' },
      { title: 'Fascist Expansionism and Appeasement', explanation: 'Militarized conquest of Manchuria (1931), Ethiopia (1935), and Czechoslovakia (1938) met zero resistance from the League of Nations.' },
      { title: 'Nazi-Soviet Non-Aggression Pact', explanation: 'Secret protocol dividing Poland between Hitler and Stalin, opening the path for the September 1, 1939 blitzkrieg invasion.' }
    ],
    laterConsequences: [
      { title: 'The Cold War Division of the World', explanation: 'Decades of geopolitical, nuclear, and ideological confrontation between the United States and the Soviet Union.' },
      { title: 'Decolonization of Asia and Africa', explanation: 'Bankrupted European empires were forced to withdraw, giving rise to sovereign independent nations across India, Africa, and Southeast Asia.' },
      { title: 'Founding of the United Nations', explanation: 'Establishment of international legal treaties, the Geneva Conventions, and the Universal Declaration of Human Rights.' },
      { title: 'Inauguration of the Atomic Age', explanation: 'The deployment of nuclear weapons redefined warfare and international diplomacy around Mutually Assured Destruction.' }
    ],
    relatedWars: ['World War I', 'Spanish Civil War (1936–1939)', 'Cold War', 'Korean War (1950–1953)'],
    personalities: ['Winston Churchill', 'Franklin D. Roosevelt', 'Joseph Stalin', 'Adolf Hitler', 'Dwight D. Eisenhower', 'Georgy Zhukov'],
    civilizations: ['United States', 'British Commonwealth', 'Soviet Union', 'Nazi Germany', 'Imperial Japan'],
    scientificMovements: ['Nuclear Fission (Manhattan Project)', 'Radar & Sonar Navigation', 'Penicillin Mass Production', 'Electronic Computing (Colossus & ENIAC)', 'Jet Propulsion'],
    recordId: 'world-war-ii'
  },
  'kalinga-war': {
    id: 'kalinga-war',
    title: 'The Kalinga War: Renunciation of Empire',
    year: 'c. 261 BCE',
    category: 'Ancient Warfare & Ideological Revolution',
    summary: 'The bloody imperial conquest of coastal Kalinga by Emperor Ashoka, which through its catastrophic human loss triggered history\'s most celebrated royal transformation from militarist conqueror to humanitarian patron.',
    earlierCauses: [
      { title: 'Mauryan Imperial Consolidation', explanation: 'Chandragupta and Bindusara had unified northern and central India; Kalinga was the lone independent enclave on the eastern seaboard.' },
      { title: 'Strategic Control of Bay of Bengal Trade', explanation: 'Kalinga commanded vital deep-water ports for maritime merchant routes connecting South Asia to Sri Lanka, Burma, and Java.' }
    ],
    laterConsequences: [
      { title: 'Ashoka\'s Conversion to Buddhism', explanation: 'Ashoka experienced deep remorse and dedicated his royal power to Dhamma (righteous living), peace, and non-violence.' },
      { title: 'Dissemination of Buddhism Across Asia', explanation: 'Ashoka dispatched Buddhist missionary envoys to Sri Lanka, Greece, Egypt, and Central Asia, turning a local sect into a world religion.' },
      { title: 'Pioneering State-Sponsored Animal Welfare & Medicine', explanation: 'Rock edicts banned animal sacrifice, established free veterinary clinics, and outlawed aggressive offensive warfare.' }
    ],
    relatedWars: ['Alexander\'s Indian Campaign', 'Mauryan-Seleucid War (305 BCE)'],
    personalities: ['Emperor Ashoka', 'Chandragupta Maurya', 'Chanakya'],
    civilizations: ['Mauryan Empire', 'Republic of Kalinga'],
    scientificMovements: ['Rock-Cut Architectural Engineering', 'Prakrit Epigraphy and Brahmi Script Standardization', 'Veterinary Medicine'],
    recordId: 'kalinga-war'
  },
  'scientific-revolution': {
    id: 'scientific-revolution',
    title: 'The Scientific Revolution: The Empirical Awakening',
    year: '1543 – 1700 CE',
    category: 'Intellectual & Scientific Transformation',
    summary: 'The fundamental transformation in human thought replacing scholastic dogma with mathematical formulations, telescopic observation, and repeatable physical experimentation.',
    earlierCauses: [
      { title: 'The Fall of Constantinople (1453)', explanation: 'Byzantine scholars fled to Italy carrying original Greek manuscripts of Archimedes, Plato, and Ptolemy.' },
      { title: 'Invention of the Movable-Type Printing Press', explanation: 'Gutenberg\'s press allowed rapid, censorship-resistant dissemination of scientific observations and mathematical tables.' },
      { title: 'Maritime Navigation & Global Exploration', explanation: 'Ocean voyages required precise celestial calculations, navigation instruments, and accurate global cartography.' }
    ],
    laterConsequences: [
      { title: 'The Industrial Revolution', explanation: 'Application of thermodynamics, mechanics, and metallurgy directly powered the steam engine and automated factories.' },
      { title: 'The Age of Enlightenment', explanation: 'Philosophers applied empirical reason to human governance, natural rights, constitutional democracy, and secularism.' },
      { title: 'Modern Medicine and Germ Theory', explanation: 'Microscopic observation overthrew the ancient humoral theory of disease in favor of sanitation and vaccination.' }
    ],
    relatedWars: ['Thirty Years\' War (1618–1648)', 'English Civil War (1642–1651)'],
    personalities: ['Nicolaus Copernicus', 'Galileo Galilei', 'Johannes Kepler', 'Isaac Newton', 'Francis Bacon', 'René Descartes'],
    civilizations: ['Early Modern Europe', 'Royal Society of London', 'Académie des Sciences'],
    scientificMovements: ['Heliocentrism', 'Classical Mechanics & Universal Gravitation', 'Calculus', 'Experimental Method'],
    recordId: 'scientific-revolution'
  }
};

// ---------------------------------------------------------------------------
// 7. THE HUMAN SIDE OF HISTORY (Everyday Lives of Ordinary People)
// ---------------------------------------------------------------------------

export const everydayLifeStories: EverydayLifeStory[] = [
  {
    id: 'nile-farmer',
    title: 'Sennedjem the Nile Farmer',
    role: 'Peasant Farmer & Field Laborer',
    period: 'c. 1300 BCE (New Kingdom)',
    region: 'Deir el-Medina / Nile Valley, Egypt',
    civilization: 'Ancient Egypt',
    narrative: 'While Pharaohs erected colossal stone hypostyles, the true heartbeat of Egypt was the agricultural peasant living along the fertile black silt (Kemet). Sennedjem\'s life was dictated entirely by Hapi, the spirit of the Nile flood. When the waters receded in autumn, he worked behind oxen with a wooden plow, scattering emmer wheat and barley across the moist mud.',
    dailyRoutine: 'Rose before dawn to check irrigation trenches; spent eight hours repairing mud-brick dikes and scooping water with a counter-weighted shaduf into higher garden canals; returned at dusk to a small sun-dried mud home.',
    dietAndFood: 'Dense sourdough emmer wheat bread, salted river catfish, dried figs, dates, broad beans, leeks, garlic, and cloudy, nutrient-dense barley beer brewed at home.',
    dwellingAndFamily: 'A flat-roofed mud-brick house of four rooms with an outdoor hearth for bread baking; walls plastered with white gypsum; roofs covered with woven reed mats where the family slept on hot summer nights.',
    materialCulture: 'Simple unbleached linen loincloth; reed sandals; wooden hoe with bronze nails; clay beer jars; amulets of Bes, the dwarf god who protected children and childbirth.',
    historicalInsight: 'Without the staggering agricultural surplus coaxed from the mud by ordinary families like Sennedjem\'s, not a single pyramid, temple, or royal expedition would ever have been built.',
    imageUrl: '/assets/images/civilization_indus_1795464676243.jpg'
  },
  {
    id: 'harappan-artisan',
    title: 'Anandi the Beadmaker of Lothal',
    role: 'Master Bead Artisan & Lapidary Worker',
    period: 'c. 2400 BCE (Mature Harappan Phase)',
    region: 'Lothal Port, Gujarat, India',
    civilization: 'Indus Valley Civilization',
    narrative: 'In the bustling artisan quarter of Lothal, overlooking the world\'s oldest engineered tidal dockyard, Anandi spent her days transforming raw red carnelian stone from the Narmada valley into micro-perforated tubular beads that would be exported as luxury treasures across the Arabian Sea to the kings of Mesopotamia.',
    dailyRoutine: 'Began by heating carnelian nodules in clay kilns to enhance their deep fiery crimson color; used a tiny chert drill to bore millimeter-thin holes through the center without cracking the stone; polished beads on sandstone wheels using fine river silt.',
    dietAndFood: 'Steamed barley and millet porridge, spiced lentils (urad dal), sesame cakes, river carp, fresh curd, and sweet melon.',
    dwellingAndFamily: 'A two-story baked-brick home connected directly to the city\'s covered underground municipal sewer system; featured a private indoor bathing platform with terracotta drains and a courtyard workshop.',
    materialCulture: 'Fine chert drills, steatite balance weights accurate to fractions of a gram, copper tweezers, shell bangles on both wrists, and a stamp seal bearing a mythical unicorn glyph for stamping shipments.',
    historicalInsight: 'Harappan artisans pioneered specialized industrial manufacturing and standard quality control two millennia before classical Mediterranean guilds emerged.',
    imageUrl: '/assets/images/civilization_indus_1795464676243.jpg'
  },
  {
    id: 'roman-baker',
    title: 'Lucius the Plebeian Baker',
    role: 'Pistrix (Master Baker) of Pompeii',
    period: 'c. 75 CE',
    region: 'Regio VI, Pompeii, Roman Empire',
    civilization: 'Roman Empire',
    narrative: 'Lucius operated a commercial bakery (pistrinum) near the Forum of Pompeii. Long before the sun illuminated the slopes of Vesuvius, his donkey turned the volcanic lava-stone mills (meta and catillus), grinding hard wheat shipped from the Nile into fine flour. He stamped each loaf with his family trade seal before sliding it into the brick wood-fired oven.',
    dailyRoutine: 'Supervised the milling and kneading troughs from 3:00 AM; baked hundreds of standardized round, 8-segmented loaves (panis quadratus); sold warm loaves directly through the street-facing shop counter to hungry townspeople.',
    dietAndFood: 'Coarse dark bread dipped in posca (water mixed with sour wine vinegar), salted goat cheese, green olives, stewed cabbage, garum (fermented fish sauce), and lentil soup.',
    dwellingAndFamily: 'Lived in an apartment directly above the noisy bakery with his wife, three children, and two enslaved apprentices; cooled by breezes from the atrium skylight.',
    materialCulture: 'Iron-reinforced wooden shovel (peel), bronze scale with lead counterweights, terracotta oil lamps depicting gladiators, and a household altar (lararium) honoring the Roman hearth gods.',
    historicalInsight: 'Ordinary commercial bakers kept Roman cities fed and politically quiet; the famous imperial policy of "bread and circuses" depended entirely on the grueling nocturnal labor of urban plebeians.',
    imageUrl: '/assets/images/figure_cleopatra_1795464677702.jpg'
  },
  {
    id: 'silk-road-merchant',
    title: 'Manich the Sogdian Caravaneer',
    role: 'Silk Road Merchant & Polyglot Broker',
    period: 'c. 720 CE (Tang / Islamic Era)',
    region: 'Samarkand to Dunhuang (Taklamakan Desert)',
    civilization: 'Sogdian / Tang Silk Road',
    narrative: 'Speaking Sogdian, Persian, Turkic, and Chinese, Manich was part of the mercantile diaspora that knit Eurasian trade together. Guiding fifty two-humped Bactrian camels laden with fine Khotan jade, Chinese raw silk bales, and Roman blown glass across the bone-dry sands of the Taklamakan Desert, his life was an endless journey between caravan waystations.',
    dailyRoutine: 'Traveled at night to avoid the blisteringly hot desert sun; navigated by Polaris and desert watchtowers; bargained at oasis custom gates using bilingual credit documents inscribed on paper and wood.',
    dietAndFood: 'Dried mutton jerky, hard flatbread (nan) soaked in tea, dried apricots, raisins, walnuts, mare\'s milk (kumis), and roasted lamb with cumin.',
    dwellingAndFamily: 'Lived in communal caravanserai courtyards when traveling; his family home in Samarkand featured painted mud plaster walls depicting banquet celebrations.',
    materialCulture: 'Heavy wool and felt caftan; high leather riding boots; carved bone compass; leather water bladders; silver Sassanian and Tang dynasty coins in a stitched money belt.',
    historicalInsight: 'Sogdian merchants were the true cultural connective tissue of antiquity, transmitting religions (Buddhism, Nestorian Christianity, Manichaeism), papermaking, and mathematics across continents.',
    imageUrl: '/assets/images/hero_ancient_history_1795464676030.jpg'
  }
];

// ---------------------------------------------------------------------------
// 8. DAILY HISTORY ("On This Day" Database across the 12 Months)
// ---------------------------------------------------------------------------

export const dailyHistoryEvents: DailyHistoryRecord[] = [
  // November 24 (Today's Date)
  {
    month: 11,
    day: 24,
    year: 1859,
    yearDisplay: 'November 24, 1859',
    title: 'Charles Darwin Publishes "On the Origin of Species"',
    location: 'London, United Kingdom',
    summary: 'John Murray publishes Darwin\'s revolutionary scientific work presenting the theory of natural selection. The entire first print run of 1,250 copies sells out on the first day.',
    significance: 'Fundamentally transformed biology, genetics, and humanity\'s understanding of our place in the natural tree of life.',
    imageUrl: '/assets/images/figure_davinci_1795464678057.jpg',
    recordId: 'scientific-revolution'
  },
  {
    month: 11,
    day: 24,
    year: 1974,
    yearDisplay: 'November 24, 1974',
    title: 'Discovery of "Lucy" (Australopithecus afarensis)',
    location: 'Hadar, Afar Depression, Ethiopia',
    summary: 'Paleoanthropologist Donald Johanson and Tom Gray discover a 3.2-million-year-old female hominin skeleton, proving early human ancestors walked upright before expanding brain size.',
    significance: 'A cornerstone discovery in human evolutionary paleoanthropology, bridging our primate ancestry and bipedal hominin evolution.',
    imageUrl: '/assets/images/civilization_indus_1795464676243.jpg',
    recordId: 'indus-valley'
  },
  {
    month: 11,
    day: 24,
    year: 1963,
    yearDisplay: 'November 24, 1963',
    title: 'Live Television Broadcasts Historical Crisis',
    location: 'Dallas, Texas, United States',
    summary: 'Millions witness the shooting of presidential assassin Lee Harvey Oswald live on television, marking a transformative moment in real-time mass media and the documentation of history.',
    significance: 'Signaled the dawn of the electronic media age where historic world events unfolded instantaneously before a mass global audience.',
    imageUrl: '/assets/images/conflict_wwii_1795464677003.jpg',
    recordId: 'digital-revolution'
  },

  // Sample Key Dates across the calendar
  {
    month: 1,
    day: 1,
    year: 1863,
    yearDisplay: 'January 1, 1863',
    title: 'The Emancipation Proclamation Takes Effect',
    location: 'Washington D.C., United States',
    summary: 'President Abraham Lincoln issues the executive decree declaring all enslaved persons in Confederate territories to be forever free.',
    significance: 'Transformed the American Civil War into a moral crusade against slavery and paved the way for the total abolition of human bondage.',
    imageUrl: '/assets/images/conflict_wwii_1795464677003.jpg',
    recordId: 'world-war-i'
  },
  {
    month: 7,
    day: 20,
    year: 1969,
    yearDisplay: 'July 20, 1969',
    title: 'Apollo 11 Lands Humans on the Moon',
    location: 'Sea of Tranquility, The Moon',
    summary: 'Neil Armstrong and Buzz Aldrin step onto the lunar surface, declaring "That\'s one small step for man, one giant leap for mankind."',
    significance: 'The first time in 4.5 billion years of Earth history that living beings departed their home planet to set foot upon another celestial body.',
    imageUrl: '/assets/images/figure_davinci_1795464678057.jpg',
    recordId: 'digital-revolution'
  },
  {
    month: 10,
    day: 24,
    year: 1945,
    yearDisplay: 'October 24, 1945',
    title: 'Entry into Force of the United Nations Charter',
    location: 'Lake Success / San Francisco',
    summary: 'The United Nations officially comes into existence following the ratification of its founding charter by the five permanent Security Council members.',
    significance: 'Created the premier global forum for multilateral diplomacy, international law, and collective humanitarian action.',
    imageUrl: '/assets/images/conflict_wwii_1795464677003.jpg',
    recordId: 'world-war-ii'
  }
];
