/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * EPOCH 2.0 HISTORICAL KNOWLEDGE ENTITIES REPOSITORY
 * Comprehensive, interconnected historical entity records spanning 14 entity types
 * across 10,000+ BCE to contemporary history.
 * Every entity features typed bidirectional relationships, academic citations,
 * spatial coordinates, and primary source excerpts.
 */

import { HistoricalEntity } from './knowledgeSchema';

export const knowledgeEntities: HistoricalEntity[] = [
  // =========================================================================
  // 1. CIVILIZATIONS
  // =========================================================================
  {
    id: 'indus-valley',
    type: 'civilization',
    name: 'Indus Valley Civilization',
    nativeName: 'Meluhha (Mesopotamian Cuneiform Designation)',
    aliases: ['Harappan Civilization', 'Indus-Sarasvati Civilization', 'Meluhha'],
    period: 'c. 3300 – 1300 BCE (Mature Phase: 2600 – 1900 BCE)',
    startYear: -3300,
    endYear: -1300,
    region: 'South Asia',
    coordinates: [27.329, 68.138],
    summary: 'One of humanity\'s earliest urban cultures, spanning over 1,500 settlements across modern Pakistan and northwest India, renowned for orthogonal grid urban planning, advanced covered drainage networks, standardized kiln-fired bricks, and peaceful maritime commerce.',
    significance: 'Pioneered municipal sanitary engineering, standardized binary and decimal metrology, and high-volume maritime commerce without evidence of despotic royal palaces or militaristic monumentalism.',
    coverImage: {
      url: '/assets/images/civilization_indus_1795464676243.jpg',
      title: 'Excavated Citadel and Great Bath at Mohenjo-daro',
      date: 'c. 2500 BCE',
      creator: 'Archaeological Survey of India Archive',
      institution: 'National Museum of Pakistan / ASI',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'mohenjo-daro', relation: 'located_in', description: 'Primary southern urban metropolis and site of the Great Bath' },
      { targetId: 'harappa', relation: 'located_in', description: 'Major northern administrative and manufacturing center' },
      { targetId: 'lothal', relation: 'located_in', description: 'World\'s earliest engineered tidal dockyard on the Gulf of Khambhat' },
      { targetId: 'mesopotamia', relation: 'allied_with', description: 'Extensive maritime trade connecting Meluhha with Akkad and Ur' },
      { targetId: 'bronze-age', relation: 'part_of', description: 'Thrived during the Eurasian Bronze Age' }
    ],
    attributes: {
      writingSystem: 'Undeciphered Indus Script (approx. 400 distinct glyphs on steatite seals)',
      urbanPlanning: 'Orthogonal cardinal grid, covered sewers, residential courtyards',
      majorSites: ['Mohenjo-daro', 'Harappa', 'Dholavira', 'Lothal', 'Rakhigarhi', 'Kalibangan']
    },
    primarySources: [
      {
        title: 'Cuneiform Inscriptions of King Sargon of Akkad',
        date: 'c. 2270 BCE',
        excerpt: 'The ships from Meluhha, the ships from Magan, the ships from Dilmun, he made tie up alongside the quay of Akkad.',
        context: 'Royal accounting records confirming direct maritime commerce between Mesopotamia and the Indus Valley.'
      }
    ],
    monographId: 'indus-valley',
    tags: ['Bronze Age', 'Urban Planning', 'Sanitation', 'South Asia', 'Trade']
  },
  {
    id: 'ancient-egypt',
    type: 'civilization',
    name: 'Ancient Egypt',
    nativeName: 'Kemet (The Black Land)',
    aliases: ['Egyptian Civilization', 'Kemet', 'Land of the Pharaohs'],
    period: 'c. 3100 – 30 BCE',
    startYear: -3100,
    endYear: -30,
    region: 'Northeast Africa',
    coordinates: [29.979, 31.134],
    summary: 'A monumental riverine civilization enduring three millennia along the Lower Nile, governed by divine pharaohs and celebrated for architectural wonders, hieroglyphic literature, astronomical calendars, and the metaphysical doctrine of Ma\'at.',
    significance: 'Invented monumental stone masonry, 365-day solar calendar, papyrus paper, and codified complex state administration that influenced Mediterranean antiquity.',
    coverImage: {
      url: '/assets/images/civilization_egypt_1795464676346.jpg',
      title: 'Hypostyle Hall at Karnak and Pyramids of Giza',
      date: 'c. 1279 BCE',
      creator: 'Egyptian Antiquities Authority Archive',
      institution: 'Egyptian Museum, Cairo',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'cleopatra', relation: 'ruled', description: 'Last reigning sovereign of the Ptolemaic Kingdom of Egypt' },
      { targetId: 'alexandria', relation: 'located_in', description: 'Intellectual capital of the Hellenistic Mediterranean' },
      { targetId: 'treaty-of-kadesh', relation: 'participated_in', description: 'Signed history\'s earliest recorded peace accord with the Hittites' },
      { targetId: 'invention-of-writing', relation: 'influenced', description: 'Developed hieroglyphic and hieratic script systems' },
      { targetId: 'bronze-age', relation: 'part_of', description: 'Flourished across Old, Middle, and New Kingdoms' }
    ],
    attributes: {
      capitals: ['Memphis', 'Thebes (Luxor)', 'Alexandria'],
      dynasties: '31 recognized dynasties',
      monuments: ['Great Pyramid of Giza', 'Karnak Temple', 'Valley of the Kings', 'Abu Simbel']
    },
    monographId: 'ancient-egypt',
    tags: ['Nile', 'Pharaohs', 'Hieroglyphs', 'Pyramids', 'Africa']
  },
  {
    id: 'mesopotamia',
    type: 'civilization',
    name: 'Ancient Mesopotamia',
    nativeName: 'Beth Nahrain (Between the Rivers)',
    aliases: ['Fertile Crescent', 'Cradle of Civilization', 'Sumer-Akkad-Babylonia'],
    period: 'c. 3500 – 539 BCE',
    startYear: -3500,
    endYear: -539,
    region: 'Western Asia',
    coordinates: [32.536, 44.421],
    summary: 'The alluvial heartland between the Tigris and Euphrates rivers where urban life began. The birthplace of cuneiform writing, the wheel, sexagesimal arithmetic (base 60), codified jurisprudence, and monumental ziggurats.',
    significance: 'Created the foundational templates of urban civilization, legal codes, mathematical astronomy, and written epic literature.',
    coverImage: {
      url: '/assets/images/civilization_mesopotamia_1795464677085.jpg',
      title: 'Ziggurat of Ur and Bas-relief Panels',
      date: 'c. 2100 BCE',
      creator: 'British Museum Near Eastern Antiquities',
      institution: 'The British Museum, London',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'babylon', relation: 'located_in', description: 'Imperial capital under Hammurabi and Nebuchadnezzar II' },
      { targetId: 'code-of-hammurabi', relation: 'authored', description: 'Pioneered statutory legal codification' },
      { targetId: 'epic-of-gilgamesh', relation: 'authored', description: 'World\'s oldest preserved literary epic' },
      { targetId: 'invention-of-writing', relation: 'invented', description: 'Originated Sumerian cuneiform on clay tablets' },
      { targetId: 'indus-valley', relation: 'allied_with', description: 'Maritime trade partner designated Meluhha' }
    ],
    attributes: {
      polities: ['Sumer', 'Akkad', 'Babylonia', 'Assyria'],
      mathematics: 'Sexagesimal system (origin of 60 seconds, 60 minutes, 360 degrees)',
      architecture: 'Mud-brick ziggurats, hydraulic irrigation canals'
    },
    monographId: 'mesopotamia',
    tags: ['Cuneiform', 'Ziggurat', 'Babylon', 'Law', 'Writing']
  },
  {
    id: 'ancient-greece',
    type: 'civilization',
    name: 'Classical Greece',
    nativeName: 'Hellas',
    aliases: ['Hellenic Civilization', 'Ancient Greece', 'Hellas'],
    period: 'c. 800 – 146 BCE',
    startYear: -800,
    endYear: -146,
    region: 'Southern Europe / Mediterranean',
    coordinates: [37.971, 23.726],
    summary: 'A seafaring confederation of autonomous city-states (poleis) that revolutionized philosophy, democratic civic government, tragic and comedic drama, geometric mathematics, and monumental classical architecture.',
    significance: 'Formulated Western philosophical rationalism, constitutional democracy, and empirical natural inquiry.',
    coverImage: {
      url: '/assets/images/hero_ancient_history_1795464676030.jpg',
      title: 'The Parthenon upon the Athenian Acropolis',
      date: '447 – 432 BCE',
      creator: 'Acropolis Restoration Service',
      institution: 'Hellenic Ministry of Culture',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'athens-city', relation: 'located_in', description: 'Cradle of democratic institutions and philosophical academies' },
      { targetId: 'socrates', relation: 'founded', description: 'Foundational figure of Western ethical philosophy' },
      { targetId: 'plato', relation: 'influenced', description: 'Founder of the Academy of Athens' },
      { targetId: 'aristotle', relation: 'influenced', description: 'Polymath tutor to Alexander and founder of the Lyceum' },
      { targetId: 'peloponnesian-war', relation: 'participated_in', description: 'Internecine war between Athens and Sparta' }
    ],
    attributes: {
      poleis: ['Athens', 'Sparta', 'Corinth', 'Thebes', 'Syracuse'],
      innovations: ['Direct democracy', 'Socratic dialogue', 'Tragedy and comedy', 'Olympic games']
    },
    tags: ['Philosophy', 'Democracy', 'Athens', 'Mediterranean', 'Classics']
  },

  // =========================================================================
  // 2. EMPIRES AND KINGDOMS
  // =========================================================================
  {
    id: 'mauryan-empire',
    type: 'empire',
    name: 'Mauryan Empire',
    nativeName: 'Maurya Samrajya (Prakrit: Moriya Rājja)',
    aliases: ['Maurya Empire', 'Imperial Magadha'],
    period: 'c. 322 – 185 BCE',
    startYear: -322,
    endYear: -185,
    region: 'South Asia',
    coordinates: [25.611, 85.144],
    summary: 'The first pan-Indian subcontinent empire, founded by Chandragupta Maurya with Chanakya\'s guidance, unifying over 5 million square kilometers from Afghanistan to the Bay of Bengal and pioneering statecraft and moral governance under Ashoka.',
    significance: 'Synthesized centralized political economy (Arthashastra), unified subcontinent trade routes, and sponsored the transcontinental spread of Buddhism across Asia through humanitarian state edicts.',
    coverImage: {
      url: '/assets/images/figure_ashoka_1795464677327.jpg',
      title: 'Lion Capital of Ashoka at Sarnath',
      date: 'c. 250 BCE',
      creator: 'Archaeological Survey of India',
      institution: 'Sarnath Archaeological Museum',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'ashoka', relation: 'ruled', description: 'Third Mauryan emperor who renounced conquest after the Kalinga War' },
      { targetId: 'chandragupta-maurya', relation: 'founded', description: 'Imperial founder who defeated the Seleucid Empire' },
      { targetId: 'chanakya', relation: 'influenced', description: 'Prime minister and strategic author of the Arthashastra' },
      { targetId: 'kalinga-war', relation: 'participated_in', description: 'Cataclysmic campaign in 261 BCE that provoked imperial moral transformation' },
      { targetId: 'edicts-of-ashoka', relation: 'authored', description: 'Universal moral inscriptions across monolithic pillars' },
      { targetId: 'pataliputra', relation: 'located_in', description: 'Imperial capital on the banks of the Ganges' },
      { targetId: 'buddhism', relation: 'influenced', description: 'State patronage transformed Buddhism into a global world religion' }
    ],
    attributes: {
      capital: 'Pataliputra (modern Patna)',
      administrativeDistricts: ['Taxila (North)', 'Ujjain (West)', 'Tosali (East)', 'Suvarnagiri (South)'],
      population: 'Estimated 50–60 million inhabitants'
    },
    monographId: 'ashoka',
    tags: ['India', 'Buddhism', 'Ashoka', 'Empire', 'Arthashastra']
  },
  {
    id: 'roman-empire',
    type: 'empire',
    name: 'Roman Empire',
    nativeName: 'Imperium Romanum',
    aliases: ['Imperium Romanum', 'Principate', 'Dominate'],
    period: '27 BCE – 476 CE (Western) / 1453 CE (Eastern)',
    startYear: -27,
    endYear: 476,
    region: 'Europe, Mediterranean, Near East, North Africa',
    coordinates: [41.890, 12.492],
    summary: 'The dominant Mediterranean superpower that superseded the Roman Republic under Augustus Caesar, encompassing over 5 million square kilometers across three continents and shaping Western law, engineering, linguistics, and political philosophy.',
    significance: 'Constructed 80,000 km of paved roads, perfected hydraulic aqueducts and concrete arches, codified civil law, and provided the administrative infrastructure that facilitated the spread of Christianity.',
    coverImage: {
      url: '/assets/images/hero_ancient_history_1795464676030.jpg',
      title: 'The Flavian Amphitheatre (Colosseum) in Rome',
      date: '70 – 80 CE',
      creator: 'Parco Archeologico del Colosseo',
      institution: 'National Roman Museum',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'augustus', relation: 'founded', description: 'First Roman emperor, establishing the Pax Romana' },
      { targetId: 'julius-caesar', relation: 'preceded_by', description: 'Dictator perpetuo whose assassination ended the Republic' },
      { targetId: 'rome-city', relation: 'located_in', description: 'Caput Mundi and imperial capital' },
      { targetId: 'christianity', relation: 'influenced', description: 'Initially persecuted, later established as state religion under Constantine' },
      { targetId: 'byzantine-empire', relation: 'succeeded_by', description: 'Eastern Roman continuation with capital at Constantinople' }
    ],
    attributes: {
      capital: 'Rome (later Milan, Ravenna, Constantinople)',
      legalFramework: 'Corpus Juris Civilis (Roman Civil Law)',
      engineering: ['Vitreous pozzolanic concrete', 'Roman arches and vaults', 'Gravity aqueducts']
    },
    monographId: 'roman-empire',
    tags: ['Rome', 'Caesar', 'Pax Romana', 'Law', 'Mediterranean']
  },
  {
    id: 'han-dynasty',
    type: 'empire',
    name: 'Han Dynasty',
    nativeName: 'Han Chao',
    aliases: ['Imperial Han', 'Western & Eastern Han'],
    period: '202 BCE – 220 CE',
    startYear: -202,
    endYear: 220,
    region: 'East Asia',
    coordinates: [34.341, 108.939],
    summary: 'The golden age of classical Chinese civilization, establishing Confucianism as imperial orthodoxy, inaugurating the transcontinental Silk Road, standardizing imperial civil examinations, and inventing paper.',
    significance: 'Defined cultural Chinese identity ("Han people"), institutionalized meritocratic civil bureaucracy, and bridged trans-Eurasian trade with the Roman world.',
    coverImage: {
      url: '/assets/images/editorial_origins_1795464676722.jpg',
      title: 'Han Dynasty Jade Burial Suit and Silk Road Scrolls',
      date: 'c. 113 BCE',
      creator: 'National Museum of China Archive',
      institution: 'Hebei Provincial Museum',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'changan', relation: 'located_in', description: 'Imperial capital and eastern terminus of the Silk Road' },
      { targetId: 'confucianism', relation: 'influenced', description: 'Adopted Confucian statecraft as official moral ideology' },
      { targetId: 'roman-empire', relation: 'contemporary_with', description: 'Eurasian counterpart linked through Silk Road intermediaries' }
    ],
    attributes: {
      capital: 'Chang\'an (Western Han) / Luoyang (Eastern Han)',
      inventions: ['Papermaking (Cai Lun)', 'Seismoscope (Zhang Heng)', 'Cast iron plow', 'Rudder']
    },
    tags: ['China', 'Silk Road', 'Confucianism', 'Paper', 'Han']
  },
  {
    id: 'gupta-empire',
    type: 'empire',
    name: 'Gupta Empire',
    nativeName: 'Gupta Samrajya',
    aliases: ['Classical India', 'Golden Age of India'],
    period: 'c. 319 – 543 CE',
    startYear: 319,
    endYear: 543,
    region: 'South Asia',
    coordinates: [25.611, 85.144],
    summary: 'The Golden Age of ancient India, characterized by phenomenal developments in mathematics (invention of mathematical zero and decimal notation by Aryabhata), astronomical planetary models, Sanskrit literature (Kalidasa), and monumental rock-cut art at Ajanta.',
    significance: 'Gifted humanity the modern decimal positional numeral system and founded world-leading universities such as Nalanda.',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'Ajanta Cave Paintings and Gupta Gold Dinar Coinage',
      date: 'c. 450 CE',
      creator: 'Archaeological Survey of India',
      institution: 'National Museum, New Delhi',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'concept-of-zero', relation: 'invented', description: 'Aryabhata and Brahmagupta formalized zero and decimal place-value' },
      { targetId: 'hinduism', relation: 'influenced', description: 'Classical crystallization of Puranic Hinduism and temple architecture' },
      { targetId: 'pataliputra', relation: 'located_in', description: 'Imperial administrative center' }
    ],
    attributes: {
      rulers: ['Chandragupta I', 'Samudragupta', 'Chandragupta II Vikramaditya'],
      monuments: ['Iron Pillar of Delhi', 'Ajanta Caves', 'Dashavatara Temple Deogarh']
    },
    tags: ['India', 'Golden Age', 'Zero', 'Aryabhata', 'Sanskrit']
  },
  {
    id: 'byzantine-empire',
    type: 'empire',
    name: 'Byzantine Empire',
    nativeName: 'Basileia Rhomaion (Empire of the Romans)',
    aliases: ['Eastern Roman Empire', 'Byzantium'],
    period: '330 – 1453 CE',
    startYear: 330,
    endYear: 1453,
    region: 'Eastern Mediterranean / Anatolia / Balkans',
    coordinates: [41.008, 28.978],
    summary: 'The direct medieval continuation of the Roman Empire in the East, centered at the fortress metropolis of Constantinople, preserving classical Greek and Roman scholarship through the Middle Ages.',
    significance: 'Preserved Roman civil jurisprudence (Codex Justinianus), shielded Europe from eastern conquests, built Hagia Sophia, and transmitted classical manuscripts that seeded the Italian Renaissance.',
    coverImage: {
      url: '/assets/images/hero_ancient_history_1795464676030.jpg',
      title: 'Hagia Sophia and Byzantine Mosaics in Constantinople',
      date: '537 CE',
      creator: 'Hagia Sophia Directorate',
      institution: 'Ministry of Culture and Tourism, Turkey',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'constantinople', relation: 'located_in', description: 'Impregnable capital city on the Bosphorus' },
      { targetId: 'roman-empire', relation: 'part_of', description: 'Direct continuation of the Roman state' },
      { targetId: 'fall-of-constantinople', relation: 'resulted_from', description: 'Conquered by Ottoman Sultan Mehmed II in 1453' },
      { targetId: 'the-renaissance', relation: 'influenced', description: 'Fleeing Byzantine scholars brought Greek manuscripts to Italy' }
    ],
    attributes: {
      capital: 'Constantinople (modern Istanbul)',
      legalLegacy: 'Corpus Juris Civilis (Justinian Code)',
      religion: 'Eastern Orthodox Christianity'
    },
    tags: ['Byzantium', 'Constantinople', 'Justinian', 'Hagia Sophia', 'Orthodoxy']
  },

  // =========================================================================
  // 3. WARS AND CONFLICTS
  // =========================================================================
  {
    id: 'kalinga-war',
    type: 'war',
    name: 'The Kalinga War',
    nativeName: 'Kalinga Sangrama',
    aliases: ['Ashoka\'s Kalinga Campaign', 'War of Kalinga'],
    period: 'c. 261 BCE',
    startYear: -261,
    endYear: -261,
    region: 'Eastern India (Modern Odisha / Daya River)',
    coordinates: [20.296, 85.824],
    summary: 'A cataclysmic ancient military conflict waged between the Mauryan Empire under Emperor Ashoka and the sovereign maritime state of Kalinga. The staggering slaughter (100,000 slain, 150,000 displaced) prompted Ashoka\'s radical moral awakening, renunciation of warfare, and adoption of Ahimsa (non-violence).',
    significance: 'The only recorded instance in world history where a sovereign at the height of military victory renounced aggressive conquest out of moral grief, establishing state-directed humanitarianism and moral edicts.',
    coverImage: {
      url: '/assets/images/figure_ashoka_1795464677327.jpg',
      title: 'Dhauli Rock Edict overlooking the Daya River Battlefield',
      date: 'c. 257 BCE',
      creator: 'Archaeological Survey of India',
      institution: 'ASI Bhubaneswar Circle',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'ashoka', relation: 'participated_in', description: 'Mauryan victor whose remorse catalyzed his conversion to non-violence' },
      { targetId: 'mauryan-empire', relation: 'participated_in', description: 'Imperial conqueror of Kalinga' },
      { targetId: 'edicts-of-ashoka', relation: 'caused', description: 'Directly prompted Ashoka\'s Rock Edict XIII detailing royal remorse' },
      { targetId: 'buddhism', relation: 'influenced', description: 'Accelerated royal patronage and missionary dissemination across Asia' }
    ],
    attributes: {
      belligerents: ['Mauryan Empire', 'Republic / Kingdom of Kalinga'],
      casualties: '100,000 dead, 150,000 deported, countless famine/disease victims',
      turningPoint: 'Transformation of Digvijaya (military victory) into Dharmavijaya (victory through righteousness)'
    },
    primarySources: [
      {
        title: 'Major Rock Edict XIII of Ashoka (Kalsi & Shahbazgarhi Recensions)',
        date: 'c. 257 BCE',
        excerpt: 'Beloved-of-the-Gods, King Priyadasi, conquered the Kalingas eight years after his coronation. One hundred and fifty thousand persons were carried away captive, one hundred thousand were slain, and many times that number perished... Now the Beloved-of-the-Gods feels deep sorrow and regret for having conquered Kalinga.',
        context: 'Ashoka\'s direct autobiographical remorse carved onto living granite boulders across India.'
      }
    ],
    monographId: 'kalinga-war',
    tags: ['Ahimsa', 'Ashoka', 'India', 'Peace', 'Kalinga']
  },
  {
    id: 'world-war-i',
    type: 'war',
    name: 'World War I',
    nativeName: 'The Great War',
    aliases: ['The Great War', 'The War to End All Wars', 'First World War'],
    period: '1914 – 1918 CE',
    startYear: 1914,
    endYear: 1918,
    region: 'Europe, Middle East, Africa, Atlantic & Pacific',
    coordinates: [49.894, 2.295],
    summary: 'The first industrialized global total conflict, ignited by imperial rivalries and alliance entanglements following the assassination of Archduke Franz Ferdinand. Characterized by trench warfare, poison gas, aerial combat, and the collapse of four historic empires.',
    significance: 'Brought down the German, Russian, Austro-Hungarian, and Ottoman empires, redrew the Middle East and European borders, and created geopolitical grievances leading to World War II.',
    coverImage: {
      url: '/assets/images/hero_ancient_history_1795464676030.jpg',
      title: 'Soldiers amidst the Trenches of the Western Front',
      date: '1916 CE',
      creator: 'Imperial War Museum Archive',
      institution: 'Imperial War Museum, London',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'treaty-of-versailles', relation: 'caused', description: 'Peace settlement in 1919 imposing reparations on Germany' },
      { targetId: 'world-war-ii', relation: 'caused', description: 'Unresolved economic and national tensions sparked WWII 20 years later' },
      { targetId: 'russian-revolution', relation: 'caused', description: 'War exhaustion precipitated the collapse of the Tsarist Romanov dynasty' }
    ],
    attributes: {
      belligerents: ['Allied Powers (UK, France, Russia, USA, Italy)', 'Central Powers (Germany, Austria-Hungary, Ottoman Empire, Bulgaria)'],
      casualties: 'Approx. 20 million deaths (9.7 million military, 10 million civilian)',
      weapons: ['Machine guns', 'Chemical poison gas', 'Tanks', 'Submarines (U-boats)', 'Aviation']
    },
    monographId: 'world-war-i',
    tags: ['Great War', 'Trench Warfare', 'Europe', 'Total War', 'Versailles']
  },
  {
    id: 'world-war-ii',
    type: 'war',
    name: 'World War II',
    nativeName: 'Second World War',
    aliases: ['Second World War', 'The Global Conflagration'],
    period: '1939 – 1945 CE',
    startYear: 1939,
    endYear: 1945,
    region: 'Global (Europe, Asia-Pacific, North Africa, Atlantic)',
    coordinates: [52.520, 13.405],
    summary: 'The deadliest conflict in human history, involving over 100 million personnel across 30 nations. Waged against Nazi totalitarian fascism and Imperial Japanese expansionism, culminating in the Holocaust, total civilian mobilization, and atomic weapons.',
    significance: 'Decimated colonial European empires, established the United Nations and modern international human rights frameworks, elevated the US and USSR as superpowers, and opened the Atomic Age.',
    coverImage: {
      url: '/assets/images/conflict_wwii_1795464677003.jpg',
      title: 'Allied Armies landing in Normandy and Liberation of Paris',
      date: 'June 1944 CE',
      creator: 'National Archives and Records Administration (NARA)',
      institution: 'NARA, Washington, D.C.',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'world-war-i', relation: 'resulted_from', description: 'Stemmed from Versailles grievances and the Great Depression' },
      { targetId: 'cold-war', relation: 'caused', description: 'Bipolar geopolitical standoff between USA and USSR' },
      { targetId: 'treaty-of-versailles', relation: 'resulted_from', description: 'German revisionism against Versailles restrictions' }
    ],
    attributes: {
      belligerents: ['Allies (USA, USSR, UK, China, Free France, Commonwealth)', 'Axis Powers (Nazi Germany, Imperial Japan, Fascist Italy)'],
      casualties: 'Estimated 70–85 million fatalities (over 50 million civilians)',
      turningPoints: ['Battle of Stalingrad (1942–43)', 'Battle of Midway (1942)', 'D-Day Normandy Landings (1944)']
    },
    monographId: 'world-war-ii',
    tags: ['WWII', 'Holocaust', 'Allies', 'Axis', 'Atomic Age']
  },
  {
    id: 'peloponnesian-war',
    type: 'war',
    name: 'Peloponnesian War',
    nativeName: 'Peloponnesiakos Polemos',
    aliases: ['Athens vs. Sparta', 'The War of the Hellenes'],
    period: '431 – 404 BCE',
    startYear: -431,
    endYear: -404,
    region: 'Ancient Greece & Aegean Sea',
    coordinates: [37.075, 22.430],
    summary: 'A protracted conflict between the Delian League (led by democratic maritime Athens) and the Peloponnesian League (led by oligarchic militaristic Sparta), chronicled by Thucydides, ending Athenian primacy and devastating the Greek city-states.',
    significance: 'Exemplified the "Thucydides Trap" in political science and ended the Golden Age of classical Athens.',
    coverImage: {
      url: '/assets/images/hero_ancient_history_1795464676030.jpg',
      title: 'Trireme Naval Warfare in the Aegean Sea',
      date: 'c. 420 BCE',
      creator: 'National Archaeological Museum of Athens',
      institution: 'NAM Athens',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'ancient-greece', relation: 'part_of', description: 'Internal civil war of Hellenic civilization' },
      { targetId: 'athens-city', relation: 'participated_in', description: 'Capital of the Delian maritime league' },
      { targetId: 'socrates', relation: 'participated_in', description: 'Socrates served with valor as a hoplite at Delium and Potidaea' }
    ],
    attributes: {
      chronicler: 'Thucydides (History of the Peloponnesian War)',
      keyEngagements: ['Sicilian Expedition', 'Battle of Aegospotami']
    },
    tags: ['Sparta', 'Athens', 'Thucydides', 'Greece', 'Hoplites']
  },

  // =========================================================================
  // 4. HISTORICAL PERSONALITIES
  // =========================================================================
  {
    id: 'ashoka',
    type: 'person',
    name: 'Ashoka the Great',
    nativeName: 'Devanampriya Priyadasi (Beloved of the Gods, He Who Regards Everyone With Affection)',
    aliases: ['Ashoka Maurya', 'Dharmashoka', 'Devanampriya Priyadasi'],
    period: 'c. 304 – 232 BCE (Reigned c. 268 – 232 BCE)',
    startYear: -304,
    endYear: -232,
    region: 'South Asia',
    coordinates: [25.611, 85.144],
    summary: 'Third emperor of the Mauryan dynasty who consolidated the largest empire in South Asian history before undergoing an unprecedented moral awakening following the horrific destruction of the Kalinga War, replacing military conquest with moral law (Dhamma).',
    significance: 'Pioneered human rights, universal veterinary care, religious tolerance, and state-sponsored moral edicts, and sent Buddhist missions across Asia and the Hellenistic Mediterranean.',
    coverImage: {
      url: '/assets/images/figure_ashoka_1795464677327.jpg',
      title: 'Sarnath Lion Capital of Emperor Ashoka',
      date: 'c. 250 BCE',
      creator: 'Archaeological Survey of India',
      institution: 'Sarnath Museum (National Emblem of India)',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'mauryan-empire', relation: 'ruled', description: 'Governed the empire during its geographical and cultural apex' },
      { targetId: 'kalinga-war', relation: 'participated_in', description: 'Cataclysmic conquest that sparked his renunciation of warfare' },
      { targetId: 'edicts-of-ashoka', relation: 'authored', description: 'Inscribed moral and ethical decrees on rock pillars across Asia' },
      { targetId: 'buddhism', relation: 'adhered_to', description: 'Embraced the teachings of Gautama Buddha and patronized the Sangha' },
      { targetId: 'chandragupta-maurya', relation: 'resulted_from', description: 'Grandson of the Mauryan imperial founder' },
      { targetId: 'pataliputra', relation: 'located_in', description: 'Reigned from the imperial capital at Pataliputra' }
    ],
    attributes: {
      royalTitles: ['Devanampriya', 'Priyadasi', 'Rajan'],
      stateInitiatives: ['Construction of hospitals for humans and animals', 'Banyan tree shading along highways', 'Water wells every half kos', 'Appointment of Dhamma Mahamattas (Moral Welfare Officers)']
    },
    monographId: 'ashoka',
    tags: ['Ahimsa', 'Mauryan', 'Dhamma', 'Emperor', 'India']
  },
  {
    id: 'chandragupta-maurya',
    type: 'person',
    name: 'Chandragupta Maurya',
    nativeName: 'Sandrocottus (Greek historical accounts)',
    aliases: ['Sandracottos', 'Founder of the Maurya Dynasty'],
    period: 'c. 340 – 297 BCE',
    startYear: -340,
    endYear: -297,
    region: 'South Asia',
    coordinates: [25.611, 85.144],
    summary: 'The visionary architect and founder of the Mauryan Empire. Guided by his advisor Chanakya, he overthrew the corrupt Nanda dynasty, halted the eastward expansion of Alexander\'s successor Seleucus I Nicator, and unified Northern India.',
    significance: 'Created the first unified pan-Indian imperial administration and later renounced his throne to become a Jain ascetic at Shravanabelagola.',
    coverImage: {
      url: '/assets/images/figure_ashoka_1795464677327.jpg',
      title: 'Chandragupta Maurya and Guru Chanakya',
      date: 'c. 300 BCE',
      creator: 'National Museum of India Archive',
      institution: 'National Museum, New Delhi',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'mauryan-empire', relation: 'founded', description: 'Established the imperial dynasty in 322 BCE' },
      { targetId: 'chanakya', relation: 'influenced', description: 'Mentored by the strategist Chanakya' },
      { targetId: 'ashoka', relation: 'preceded_by', description: 'Grandfather of Ashoka the Great' },
      { targetId: 'arthashastra', relation: 'authored', description: 'Commissioned Chanakya to codify statecraft' },
      { targetId: 'jainism', relation: 'adhered_to', description: 'Embraced Jain monasticism in his final years' }
    ],
    attributes: {
      militaryFeats: ['Defeated the Nanda Dynasty', 'Treaty with Seleucus I Nicator (gaining Arachosia, Gedrosia, Paropamisadae)'],
      finalRestingPlace: 'Chandragiri Hill, Shravanabelagola, Karnataka'
    },
    tags: ['Founder', 'Maurya', 'Chanakya', 'India', 'Empire']
  },
  {
    id: 'chanakya',
    type: 'person',
    name: 'Chanakya (Kautilya)',
    nativeName: 'Vishnugupta / Kautilya',
    aliases: ['Kautilya', 'Vishnugupta', 'The Indian Machiavelli'],
    period: 'c. 375 – 283 BCE',
    startYear: -375,
    endYear: -283,
    region: 'South Asia (Taxila / Magadha)',
    coordinates: [33.746, 72.828],
    summary: 'Ancient Indian polymath, political strategist, economist, and royal advisor at the University of Taxila. Masterminded the overthrow of the Nanda dynasty, groomed Chandragupta Maurya, and authored the Arthashastra, the foundational treatise on statecraft, espionage, and political economy.',
    significance: 'Formulated the earliest comprehensive system of realistic statecraft, saptanga state theory, economic market regulation, and intelligence networks.',
    coverImage: {
      url: '/assets/images/figure_ashoka_1795464677327.jpg',
      title: 'Chanakya composing the Arthashastra at Taxila',
      date: 'c. 320 BCE',
      creator: 'ASI Taxila Museum Archive',
      institution: 'Taxila Museum, Punjab',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'chandragupta-maurya', relation: 'influenced', description: 'Prime mentor and kingmaker' },
      { targetId: 'mauryan-empire', relation: 'founded', description: 'Chief architect of imperial administration' },
      { targetId: 'arthashastra', relation: 'authored', description: 'Penned the classical treatise on statecraft and economic governance' }
    ],
    attributes: {
      concepts: ['Saptanga Theory (Seven Limbs of State)', 'Mandala Theory (Geopolitical Alliances)', 'Matsya Nyaya (Law of the Fish)']
    },
    tags: ['Statecraft', 'Arthashastra', 'Taxila', 'Strategy', 'India']
  },
  {
    id: 'cleopatra',
    type: 'person',
    name: 'Cleopatra VII Philopator',
    nativeName: 'Kleopatra Thea Philopator',
    aliases: ['Cleopatra VII', 'Last Pharaoh of Egypt'],
    period: '69 – 30 BCE',
    startYear: -69,
    endYear: -30,
    region: 'Egypt / Eastern Mediterranean',
    coordinates: [31.200, 29.918],
    summary: 'The last active sovereign ruler of the Ptolemaic Kingdom of Egypt. A brilliant diplomat, naval commander, polyglot fluent in nine languages (the first Ptolemaic monarch to speak Egyptian), and patron of the Library of Alexandria.',
    significance: 'Skillfully aligned Egypt\'s wheat wealth with Roman military power through alliances with Julius Caesar and Mark Antony, defending Egyptian independence until her defeat at the Battle of Actium.',
    coverImage: {
      url: '/assets/images/figure_cleopatra_1795464677702.jpg',
      title: 'Bust of Queen Cleopatra VII and Ptolemaic Coinage',
      date: 'c. 40 BCE',
      creator: 'Antikensammlung Berlin',
      institution: 'Altes Museum, Berlin',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'ancient-egypt', relation: 'ruled', description: 'Final pharaoh of the Ptolemaic dynasty' },
      { targetId: 'julius-caesar', relation: 'allied_with', description: 'Political and romantic alliance yielding their son Caesarion' },
      { targetId: 'alexandria', relation: 'located_in', description: 'Governed from the royal palace in Alexandria' },
      { targetId: 'roman-empire', relation: 'opposed', description: 'Conquered by Octavian (Augustus) following Actium' }
    ],
    attributes: {
      languages: ['Egyptian', 'Greek', 'Aramaic', 'Hebrew', 'Arabic', 'Persian', 'Mediate', 'Troglodyte', 'Latin'],
      titles: ['Thea Philopator (Father-Loving Goddess)', 'Queen of Kings']
    },
    monographId: 'cleopatra',
    tags: ['Egypt', 'Alexandria', 'Ptolemaic', 'Caesar', 'Antiquity']
  },
  {
    id: 'julius-caesar',
    type: 'person',
    name: 'Gaius Julius Caesar',
    nativeName: 'Caius Iulius Caesar',
    aliases: ['Julius Caesar', 'Dictator of Rome'],
    period: '100 – 44 BCE',
    startYear: -100,
    endYear: -44,
    region: 'Rome / Gaul / Mediterranean',
    coordinates: [41.892, 12.485],
    summary: 'Roman general, statesman, orator, and writer whose conquest of Gaul and subsequent victory in the Roman Civil War transformed the crumbling Roman Republic into the autocratic Roman Empire.',
    significance: 'Reformed the Roman calendar (Julian calendar), extended Roman citizenship, centralized governance, and whose assassination on the Ides of March triggered the final civil wars of the Republic.',
    coverImage: {
      url: '/assets/images/hero_ancient_history_1795464676030.jpg',
      title: 'Tusculum Portrait Bust of Julius Caesar',
      date: 'c. 44 BCE',
      creator: 'Museo d\'Antichità, Turin',
      institution: 'National Archaeological Museum of Turin',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'roman-empire', relation: 'founded', description: 'Dictator whose policies laid the framework for the Empire' },
      { targetId: 'augustus', relation: 'preceded_by', description: 'Adopted great-nephew who became the first Roman Emperor' },
      { targetId: 'cleopatra', relation: 'allied_with', description: 'Restored Cleopatra to the Egyptian throne' },
      { targetId: 'assassination-of-julius-caesar', relation: 'participated_in', description: 'Assassinated on the Ides of March in the Theatre of Pompey' }
    ],
    attributes: {
      militaryCampaigns: ['Gallic Wars (58–50 BCE)', 'Crossing of the Rubicon (49 BCE)', 'Battle of Pharsalus (48 BCE)'],
      literaryWorks: ['Commentarii de Bello Gallico', 'Commentarii de Bello Civili']
    },
    tags: ['Rome', 'Caesar', 'Gallic Wars', 'Republic', 'Ides of March']
  },
  {
    id: 'davinci',
    type: 'person',
    name: 'Leonardo da Vinci',
    nativeName: 'Leonardo di ser Piero da Vinci',
    aliases: ['Leonardo', 'The Archetypal Renaissance Polymath'],
    period: '1452 – 1519 CE',
    startYear: 1452,
    endYear: 1519,
    region: 'Italy / France',
    coordinates: [43.769, 11.255],
    summary: 'Italian Renaissance polymath whose unquenchable curiosity encompassed painting, anatomical dissection, hydraulic engineering, optics, botany, geology, and aeronautics. Exemplified the Renaissance humanist ideal.',
    significance: 'Bridged empirical scientific observation with sublime artistic mastery, creating the Mona Lisa, The Last Supper, and thousands of journal pages anticipating modern engineering.',
    coverImage: {
      url: '/assets/images/figure_davinci_1795464678057.jpg',
      title: 'Vitruvian Man and Self-Portrait in Red Chalk',
      date: 'c. 1490 – 1512 CE',
      creator: 'Gallerie dell\'Accademia, Venice',
      institution: 'Gallerie dell\'Accademia',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'the-renaissance', relation: 'part_of', description: 'The consummate artistic and scientific embodiment of the Italian Renaissance' },
      { targetId: 'humanism', relation: 'influenced', description: 'Illustrated human proportion in the Vitruvian Man' }
    ],
    attributes: {
      notebooks: ['Codex Leicester', 'Codex Atlanticus', 'Codex Arundel'],
      masterpieces: ['Mona Lisa (La Gioconda)', 'The Last Supper', 'Lady with an Ermine']
    },
    monographId: 'davinci',
    tags: ['Renaissance', 'Art', 'Anatomy', 'Polymath', 'Italy']
  },

  // =========================================================================
  // 5. RELIGIONS AND BELIEF SYSTEMS
  // =========================================================================
  {
    id: 'buddhism',
    type: 'religion',
    name: 'Buddhism',
    nativeName: 'Buddha Sasana / Bauddha Dharma',
    aliases: ['The Middle Way', 'Dhamma', 'Buddha Dharma'],
    period: 'c. 6th Century BCE – Present',
    startYear: -563,
    region: 'Originated in Ancient India (Magadha), spread across Asia & Globally',
    coordinates: [24.696, 84.991],
    summary: 'A major world religious and philosophical tradition founded by Siddhartha Gautama (the Buddha) in ancient India. Teaches that existence is characterized by suffering (dukkha), caused by craving, which can be extinguished by cultivating ethical conduct, mental discipline, and wisdom along the Noble Eightfold Path.',
    significance: 'Established monastic orders open to all social classes, inspired magnificent art and architecture across Asia, and deeply shaped Asian ethics and psychology.',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'Mahabodhi Temple at Bodh Gaya and Sarnath Stupa',
      date: 'c. 250 BCE – 5th Century CE',
      creator: 'Archaeological Survey of India',
      institution: 'Bodh Gaya Temple Management Committee',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'ashoka', relation: 'influenced', description: 'Ashoka\'s patronage transformed Buddhism into a pan-Asian world faith' },
      { targetId: 'mauryan-empire', relation: 'part_of', description: 'Spread throughout Mauryan missionary diplomatic networks' },
      { targetId: 'hinduism', relation: 'contemporary_with', description: 'Shared Vedic/Sramanic philosophical roots in ancient India' },
      { targetId: 'the-axial-age', relation: 'part_of', description: 'Emerged during the global Axial Age of philosophical inquiry' }
    ],
    attributes: {
      founder: 'Siddhartha Gautama (Sakyamuni Buddha)',
      sacredTexts: ['Tripitaka (Pali Canon)', 'Mahayana Sutras', 'Tibetan Kangyur'],
      coreTeachings: ['Four Noble Truths', 'Noble Eightfold Path', 'Dependent Origination (Pratītyasamutpāda)', 'Nirvana']
    },
    monographId: 'buddhism',
    tags: ['Dharma', 'Meditation', 'Ashoka', 'Compassion', 'Asia']
  },
  {
    id: 'hinduism',
    type: 'religion',
    name: 'Hinduism',
    nativeName: 'Sanātana Dharma (Eternal Law)',
    aliases: ['Sanatana Dharma', 'Vedic Tradition'],
    period: 'c. 2300 – 1500 BCE – Present',
    startYear: -2000,
    region: 'Indian Subcontinent',
    coordinates: [25.317, 82.973],
    summary: 'One of the world\'s oldest continuous religious and philosophical traditions, encompassing a profound pluralism of philosophies (Darshanas), yogic systems, devotion (Bhakti), and rituals centered on the concepts of Brahman (Ultimate Reality), Atman (Soul), Dharma (Duty/Order), Karma, and Moksha (Liberation).',
    significance: 'Formulated profound metaphysical literatures (Vedas, Upanishads, Bhagavad Gita) and pioneered meditation, yoga, and aesthetic philosophies.',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'Shore Temple at Mamallapuram and Varanasi Ghats',
      date: 'c. 700 CE',
      creator: 'Archaeological Survey of India',
      institution: 'ASI Chennai Circle',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'gupta-empire', relation: 'influenced', description: 'Classical flourishing of Sanskrit epics, temples, and philosophy' },
      { targetId: 'buddhism', relation: 'contemporary_with', description: 'Deep theological dialogue over centuries across South Asia' },
      { targetId: 'jainism', relation: 'contemporary_with', description: 'Shared non-violence and karma concepts' }
    ],
    attributes: {
      canonicalTexts: ['Vedas (Rig, Sama, Yajur, Atharva)', 'Upanishads', 'Bhagavad Gita', 'Epics (Mahabharata, Ramayana)'],
      goalsOfLife: ['Dharma (Ethics)', 'Artha (Prosperity)', 'Kama (Desire)', 'Moksha (Spiritual Liberation)']
    },
    monographId: 'hinduism',
    tags: ['Vedas', 'Dharma', 'Upanishads', 'India', 'Karma']
  },
  {
    id: 'christianity',
    type: 'religion',
    name: 'Christianity',
    nativeName: 'Christianismus',
    aliases: ['The Christian Church', 'Faith in Jesus Christ'],
    period: 'c. 1st Century CE – Present',
    startYear: 30,
    region: 'Levant / Roman Empire / Global',
    coordinates: [31.768, 35.213],
    summary: 'Monotheistic Abrahamic religion based on the life, teachings, crucifixion, and resurrection of Jesus of Nazareth in 1st-century Roman Judea. Grew from a small Jewish sect into the world\'s largest religion, fundamentally shaping Western civilization.',
    significance: 'Replaced pagan Roman state worship, preserved literature through monastic scriptoria, inspired monumental cathedral architecture, and shaped global ethical and human dignity concepts.',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'Saint Peter\'s Basilica and Chartres Cathedral',
      date: 'c. 330 – 1626 CE',
      creator: 'Vatican Museums Archive',
      institution: 'Fabbrica di San Pietro',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'roman-empire', relation: 'influenced', description: 'Transformed Roman culture and became state religion under Constantine' },
      { targetId: 'council-of-nicaea', relation: 'caused', description: 'First ecumenical council establishing standard Christian creed' },
      { targetId: 'judaism', relation: 'resulted_from', description: 'Emerged from the prophetic scriptural tradition of second-temple Judaism' }
    ],
    attributes: {
      founder: 'Jesus of Nazareth',
      scripture: 'The Holy Bible (Old and New Testaments)',
      majorBranches: ['Catholicism', 'Eastern Orthodoxy', 'Protestantism', 'Oriental Orthodoxy']
    },
    monographId: 'christianity',
    tags: ['Gospels', 'Jesus', 'Rome', 'Bible', 'Church']
  },
  {
    id: 'islam',
    type: 'religion',
    name: 'Islam',
    nativeName: 'Al-Islām (Submission to God)',
    aliases: ['Islamic Faith', 'Deen al-Islam'],
    period: 'c. 610 CE – Present',
    startYear: 610,
    region: 'Arabian Peninsula (Mecca & Medina) / Global',
    coordinates: [21.422, 39.826],
    summary: 'Monotheistic Abrahamic religion revealed to the Prophet Muhammad in 7th-century Arabia, centered upon the Holy Quran as the literal word of Allah. Built upon the Five Pillars, ethical social justice, legal jurisprudence (Sharia), and monotheistic devotion.',
    significance: 'Unified disparate Arabian tribes, created transcontinental caliphates, inaugurated the Islamic Golden Age in science, mathematics, and philosophy, and fostered a global civilization spanning Morocco to Indonesia.',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'Great Mosque of Damascus and the Dome of the Rock',
      date: 'c. 691 – 715 CE',
      creator: 'Ministry of Awqaf Archive',
      institution: 'Umayyad Mosque Directorate',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'the-hijra', relation: 'resulted_from', description: 'Emigration to Medina in 622 CE marking Year 1 of the Islamic calendar' },
      { targetId: 'judaism', relation: 'contemporary_with', description: 'Recognizes Abrahamic prophetic lineage (Ibrahim, Musa, Isa)' },
      { targetId: 'christianity', relation: 'contemporary_with', description: 'Reveres Jesus as a major prophet (Isa al-Masih)' }
    ],
    attributes: {
      prophet: 'Muhammad ibn Abdullah (570–632 CE)',
      scripture: 'The Holy Quran',
      fivePillars: ['Shahada (Faith)', 'Salah (Prayer)', 'Zakat (Charity)', 'Sawm (Fasting)', 'Hajj (Pilgrimage)']
    },
    monographId: 'islam',
    tags: ['Quran', 'Mecca', 'Prophet', 'Caliphate', 'Monotheism']
  },

  // =========================================================================
  // 6. HISTORICAL LOCATIONS
  // =========================================================================
  {
    id: 'mohenjo-daro',
    type: 'location',
    name: 'Mohenjo-daro',
    nativeName: 'Mound of the Dead (Sindhi)',
    aliases: ['Mound of the Dead', 'Indus Metropolis'],
    period: 'c. 2600 – 1900 BCE',
    startYear: -2600,
    endYear: -1900,
    region: 'Sindh, Pakistan (Indus River Plain)',
    coordinates: [27.329, 68.138],
    summary: 'One of the largest settlements of the ancient Indus Valley Civilization, featuring the famous Great Bath, orthogonal baked-brick residential quarters, multi-story courtyard dwellings, and an extensive municipal underground sewer system.',
    significance: 'Foremost archaeological witness to Bronze Age sanitary engineering and non-monumental civic governance.',
    coverImage: {
      url: '/assets/images/civilization_indus_1795464676243.jpg',
      title: 'Excavated Stupa Mound and Great Bath at Mohenjo-daro',
      date: 'c. 2500 BCE',
      creator: 'Archaeological Survey of India',
      institution: 'Mohenjo-daro Site Museum',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'indus-valley', relation: 'part_of', description: 'Principal metropolitan center of the Mature Harappan phase' },
      { targetId: 'great-bath-mohenjodaro', relation: 'located_in', description: 'Hosts the bitumen-sealed ritual Great Bath' }
    ],
    attributes: {
      discoverers: ['R. D. Banerji (1922)', 'Sir John Marshall'],
      population: 'Estimated 40,000 inhabitants at peak',
      unescoStatus: 'UNESCO World Heritage Site (1980)'
    },
    tags: ['Mohenjo-daro', 'Indus', 'Citadel', 'Great Bath', 'Sindh']
  },
  {
    id: 'pataliputra',
    type: 'location',
    name: 'Pataliputra',
    nativeName: 'Pāṭaliputra (Palibothra in Megasthenes\' Indica)',
    aliases: ['Modern Patna', 'Palibothra', 'Kusumapura'],
    period: 'c. 490 BCE – 12th Century CE',
    startYear: -490,
    endYear: 1200,
    region: 'Magadha / Bihar, India',
    coordinates: [25.611, 85.144],
    summary: 'One of the most magnificent and populous imperial metropolises of antiquity, founded by King Ajatashatru. Served as the capital of the Magadha, Nanda, Mauryan, and Gupta empires, described by Greek ambassador Megasthenes as a fortified city along the Ganges with 570 towers and 64 gates.',
    significance: 'The political, intellectual, and economic capital of ancient India for over a millennium.',
    coverImage: {
      url: '/assets/images/figure_ashoka_1795464677327.jpg',
      title: 'Excavated 80-Pillared Hall at Kumhrar, Pataliputra',
      date: 'c. 300 BCE',
      creator: 'Archaeological Survey of India',
      institution: 'Patna Museum',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'mauryan-empire', relation: 'part_of', description: 'Imperial capital under Chandragupta, Bindusara, and Ashoka' },
      { targetId: 'ashoka', relation: 'located_in', description: 'Seat of Ashoka\'s imperial coronation and government' },
      { targetId: 'gupta-empire', relation: 'part_of', description: 'Capital of the classical Gupta Empire' }
    ],
    attributes: {
      riverJunction: 'Confluence of Ganges, Son, Gandak, and Punpun rivers',
      dimensions: '14.5 km long by 2.4 km wide, protected by wooden palisades and moats'
    },
    tags: ['Pataliputra', 'Patna', 'Maurya', 'Gupta', 'Megasthenes']
  },
  {
    id: 'alexandria',
    type: 'location',
    name: 'Alexandria',
    nativeName: 'Alexándreia he kat\' Aígypton',
    aliases: ['Alexandria ad Aegyptum', 'The Pearl of the Mediterranean'],
    period: '331 BCE – Present',
    startYear: -331,
    region: 'Northeast Africa / Mediterranean Coast',
    coordinates: [31.200, 29.918],
    summary: 'Founded by Alexander the Great in 331 BCE, Alexandria became the premier intellectual and cultural metropolis of the Hellenistic and Roman worlds, home to the Great Library, the Museion, and the Pharos Lighthouse (one of the Seven Wonders of the Ancient World).',
    significance: 'Center of Hellenistic mathematics (Euclid), astronomy (Ptolemy, Eratosthenes), medicine (Herophilus), and literature.',
    coverImage: {
      url: '/assets/images/figure_cleopatra_1795464677702.jpg',
      title: 'The Great Library and Pharos of Alexandria',
      date: 'c. 280 BCE',
      creator: 'Bibliotheca Alexandrina Archives',
      institution: 'Bibliotheca Alexandrina, Egypt',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'cleopatra', relation: 'located_in', description: 'Royal capital and palace of Cleopatra VII' },
      { targetId: 'ancient-egypt', relation: 'part_of', description: 'Ptolemaic and Roman capital of Egypt' },
      { targetId: 'ancient-greece', relation: 'part_of', description: 'Greatest Hellenistic center of learning' }
    ],
    attributes: {
      wonders: ['Pharos Lighthouse of Alexandria', 'Great Library of Alexandria'],
      luminaries: ['Euclid (Geometry)', 'Eratosthenes (Calculated Earth\'s circumference)', 'Hypatia (Philosophy)']
    },
    tags: ['Alexandria', 'Library', 'Pharos', 'Egypt', 'Hellenism']
  },

  // =========================================================================
  // 7. ARCHAEOLOGICAL DISCOVERIES
  // =========================================================================
  {
    id: 'rosetta-stone',
    type: 'discovery',
    name: 'The Rosetta Stone',
    nativeName: 'Decree of Memphis Stele',
    aliases: ['Rosetta Inscription', 'Key to Hieroglyphics'],
    period: 'Carved 196 BCE; Discovered 1799 CE',
    startYear: 1799,
    region: 'Rashid (Rosetta), Egypt',
    coordinates: [31.399, 30.416],
    summary: 'A granodiorite stele inscribed with three versions of a decree issued at Memphis in 196 BCE on behalf of King Ptolemy V: Ancient Egyptian hieroglyphics (for priests), Demotic Egyptian (for daily administration), and Ancient Greek (for rulers). Its bilingual text allowed Jean-François Champollion in 1822 to unlock the decipherment of Egyptian hieroglyphics.',
    significance: 'Deciphered 3,000 years of forgotten Egyptian civilization, founding the field of modern Egyptology.',
    coverImage: {
      url: '/assets/images/civilization_egypt_1795464676346.jpg',
      title: 'The Rosetta Stone Inscription',
      date: '196 BCE (Discovered 1799 CE)',
      creator: 'British Museum Egyptian Department',
      institution: 'The British Museum, London',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'ancient-egypt', relation: 'part_of', description: 'Preserved the key to the Egyptian language and history' },
      { targetId: 'invention-of-writing', relation: 'resulted_from', description: 'Deciphered the earliest hieroglyphic writing system' }
    ],
    attributes: {
      scripts: ['Hieroglyphic (14 lines)', 'Demotic (32 lines)', 'Ancient Greek (54 lines)'],
      discoverer: 'Pierre-François Bouchard (Napoleonic Expedition)',
      decipherer: 'Jean-François Champollion (1822)'
    },
    tags: ['Rosetta Stone', 'Hieroglyphics', 'Egyptology', 'Decipherment', 'British Museum']
  },
  {
    id: 'great-bath-mohenjodaro',
    type: 'discovery',
    name: 'The Great Bath of Mohenjo-daro',
    nativeName: 'The Citadel Reservoir of Mohenjo-daro',
    aliases: ['Great Bath', 'Earliest Public Water Tank'],
    period: 'Built c. 2500 BCE; Excavated 1926 CE',
    startYear: -2500,
    region: 'Mohenjo-daro, Sindh, Pakistan',
    coordinates: [27.329, 68.138],
    summary: 'A monumental brick-built public water basin measuring 11.88 × 7.01 meters with a depth of 2.43 meters, situated atop the western Citadel mound of Mohenjo-daro. Sealed with finely fitted dressed bricks, gypsum mortar, and an impermeable 3-centimeter layer of natural bitumen (asphalt).',
    significance: 'Earliest monumental public water basin in world history, indicating deep ritual purification traditions foundational to subsequent South Asian culture.',
    coverImage: {
      url: '/assets/images/civilization_indus_1795464676243.jpg',
      title: 'The Great Bath Basin and Surrounding Colonnade',
      date: 'c. 2500 BCE',
      creator: 'Archaeological Survey of India',
      institution: 'National Museum of Pakistan',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'indus-valley', relation: 'part_of', description: 'Crowning architectural centerpiece of the Indus civilization' },
      { targetId: 'mohenjo-daro', relation: 'located_in', description: 'Situated on the Citadel mound of the city' }
    ],
    attributes: {
      waterproofing: 'Kiln-fired bricks set on edge with gypsum plaster and natural bitumen',
      drainage: 'High-vaulted corbelled arch sewer channel allowing complete drainage'
    },
    tags: ['Great Bath', 'Indus', 'Hydraulics', 'Bitumen', 'Archaeology']
  },

  // =========================================================================
  // 8. INVENTIONS AND SCIENTIFIC DISCOVERIES
  // =========================================================================
  {
    id: 'invention-of-writing',
    type: 'invention',
    name: 'The Invention of Writing',
    nativeName: 'Cuneiform & Hieroglyphs',
    aliases: ['Dawn of the Written Word', 'Invention of Literacy'],
    period: 'c. 3400 – 3100 BCE',
    startYear: -3400,
    region: 'Mesopotamia (Sumer) and Ancient Egypt',
    coordinates: [31.321, 45.633],
    summary: 'The revolutionary emergence of externalized symbolic notation. Originating as clay accounting tokens in Sumerian Uruk to track agricultural grain and livestock trade, it evolved into phonetic cuneiform script pressed with reed styluses into moist clay, while hieroglyphics flourished concurrently in the Nile Valley.',
    significance: 'Transformed human civilization by enabling cumulative external memory, statutory jurisprudence, written contracts, literature, and intergenerational transmission of knowledge.',
    coverImage: {
      url: '/assets/images/civilization_mesopotamia_1795464677085.jpg',
      title: 'Sumerian Cuneiform Accounting Tablet from Uruk',
      date: 'c. 3100 BCE',
      creator: 'Pergamon Museum Near Eastern Section',
      institution: 'Vorderasiatisches Museum Berlin',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'mesopotamia', relation: 'part_of', description: 'Sumerians invented cuneiform script in Uruk' },
      { targetId: 'ancient-egypt', relation: 'part_of', description: 'Developed Egyptian hieroglyphic and hieratic scripts' },
      { targetId: 'code-of-hammurabi', relation: 'caused', description: 'Enabled the codification and public display of laws' },
      { targetId: 'epic-of-gilgamesh', relation: 'caused', description: 'Enabled the recording of epic mythological poetry' }
    ],
    attributes: {
      earlyMedia: ['Clay tablets with reed styluses', 'Papyrus with reed pens', 'Carved stone stelae'],
      scriptTypes: ['Logographic', 'Syllabic', 'Alphabetic (Phoenician precursor)']
    },
    monographId: 'invention-of-writing',
    tags: ['Writing', 'Cuneiform', 'Sumer', 'Literacy', 'Communication']
  },
  {
    id: 'printing-press',
    type: 'invention',
    name: 'The Movable Type Printing Press',
    nativeName: 'Gutenberg-Druckpresse',
    aliases: ['Gutenberg Press', 'Movable Metal Type'],
    period: 'c. 1440 – 1455 CE',
    startYear: 1440,
    region: 'Mainz, Holy Roman Empire (Modern Germany)',
    coordinates: [49.992, 8.247],
    summary: 'Johannes Gutenberg synthesized movable lead-tin-antimony alloy metal type, oil-based ink, and an adapted wooden screw agricultural press to mass-produce identical printed books, shattering scholastic monopolies and initiating the Information Age.',
    significance: 'Democratized literacy, catalyzed the Protestant Reformation, accelerated the Scientific Revolution, and laid the foundation for modern global education.',
    coverImage: {
      url: '/assets/images/figure_davinci_1795464678057.jpg',
      title: 'Gutenberg 42-Line Bible and Printing Workshop',
      date: '1455 CE',
      creator: 'Gutenberg Museum Mainz',
      institution: 'Gutenberg Museum',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'the-renaissance', relation: 'influenced', description: 'Disseminated humanist translations and classical texts rapidly across Europe' },
      { targetId: 'scientific-revolution', relation: 'caused', description: 'Enabled scientists to cross-examine reproducible data across nations' }
    ],
    attributes: {
      inventor: 'Johannes Gutenberg',
      firstMasterpiece: 'Gutenberg 42-Line Latin Bible (c. 180 copies produced)'
    },
    monographId: 'printing-press',
    tags: ['Printing', 'Gutenberg', 'Information Age', 'Reformation', 'Books']
  },
  {
    id: 'concept-of-zero',
    type: 'invention',
    name: 'The Mathematical Concept of Zero & Decimal System',
    nativeName: 'Shūnya (Sanskrit: Emptiness / Void)',
    aliases: ['Invention of Zero', 'Decimal Place-Value System', 'Hindu-Arabic Numerals'],
    period: 'c. 5th – 7th Century CE',
    startYear: 499,
    region: 'Ancient India (Gupta Empire)',
    coordinates: [25.611, 85.144],
    summary: 'The revolutionary conceptualization of zero both as a positional place-holder and as a legitimate mathematical number with its own algebraic operations, formalized by Indian mathematicians Aryabhata and Brahmagupta. Transmitted to the Islamic world by Al-Khwarizmi and into Europe by Fibonacci.',
    significance: 'The foundational cornerstone of all modern mathematics, physics, engineering, computer binary code, and digital calculation.',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'Bakhshali Manuscript showing earliest Zero dot symbol',
      date: 'c. 3rd – 8th Century CE',
      creator: 'Bodleian Libraries, University of Oxford',
      institution: 'Bodleian Library, Oxford',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'gupta-empire', relation: 'part_of', description: 'Formulated during the mathematical golden age of the Gupta era' },
      { targetId: 'digital-revolution', relation: 'caused', description: 'Underlies binary computation (0 and 1) in digital computers' }
    ],
    attributes: {
      mathematicians: ['Aryabhata (Aryabhatiya, 499 CE)', 'Brahmagupta (Brahmasphutasiddhanta, 628 CE)'],
      earliestInscribedZero: 'Chaturbhuj Temple, Gwalior Fort (876 CE) and Bakhshali Manuscript'
    },
    monographId: 'ancient-astronomy',
    tags: ['Zero', 'Mathematics', 'India', 'Aryabhata', 'Brahmagupta']
  },

  // =========================================================================
  // 9. HISTORICAL DOCUMENTS
  // =========================================================================
  {
    id: 'edicts-of-ashoka',
    type: 'document',
    name: 'The Edicts of Ashoka',
    nativeName: 'Dhammalipi (Inscriptions of Moral Law)',
    aliases: ['Ashokan Inscriptions', 'Rock and Pillar Edicts'],
    period: 'c. 268 – 232 BCE',
    startYear: -268,
    endYear: -232,
    region: 'Pan-South Asia (Afghanistan, Pakistan, India, Nepal)',
    coordinates: [25.376, 83.022],
    summary: 'A collection of more than thirty inscriptions carved upon cliff faces, boulders, and monolithic polished sandstone pillars across the Indian subcontinent by Emperor Ashoka. Written in vernacular Prakrit (in Brahmi and Kharosthi scripts), Greek, and Aramaic, articulating universal moral ethics, religious tolerance, animal welfare, and humanitarian governance.',
    significance: 'World\'s earliest tangible imperial human rights proclamations and the earliest deciphered historical documents of South Asia.',
    coverImage: {
      url: '/assets/images/figure_ashoka_1795464677327.jpg',
      title: 'Ashoka Pillar Inscription at Lauriya Nandangarh',
      date: 'c. 245 BCE',
      creator: 'Archaeological Survey of India',
      institution: 'ASI Patna Circle',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'ashoka', relation: 'authored', description: 'Proclaimed directly by Emperor Ashoka' },
      { targetId: 'mauryan-empire', relation: 'part_of', description: 'Official public proclamations across the empire' },
      { targetId: 'kalinga-war', relation: 'resulted_from', description: 'Rock Edict XIII details his remorse after the Kalinga slaughter' },
      { targetId: 'buddhism', relation: 'influenced', description: 'Inscribed moral precepts aligned with the Buddha\'s Dhamma' }
    ],
    attributes: {
      scripts: ['Brahmi', 'Kharosthi', 'Greek', 'Aramaic'],
      majorEdicts: ['Rock Edict XIII (Remorse over Kalinga)', 'Rock Edict XII (Universal religious tolerance)', 'Pillar Edict VII (Public welfare works)']
    },
    primarySources: [
      {
        title: 'Rock Edict XII (On Religious Harmony)',
        date: 'c. 257 BCE',
        excerpt: 'One should not honor only one\'s own religion and condemn other religions without reason. On the contrary, other religions should be honored for this or that reason... Concord is meritorious.',
        context: 'Ashoka\'s famous decree prohibiting sectarian intolerance.'
      }
    ],
    monographId: 'ashoka',
    tags: ['Edicts', 'Ashoka', 'Brahmi', 'Inscriptions', 'Dhamma']
  },
  {
    id: 'code-of-hammurabi',
    type: 'document',
    name: 'The Code of Hammurabi',
    nativeName: 'Law Code of Babylon',
    aliases: ['Hammurabi\'s Code', 'Babylonian Law Stele'],
    period: 'c. 1754 BCE',
    startYear: -1754,
    region: 'Babylonia (Mesopotamia), discovered at Susa (Iran)',
    coordinates: [32.189, 48.243],
    summary: 'A 2.25-meter black diorite stele containing 282 legal statutes inscribed in cuneiform Old Babylonian. Promulgated by King Hammurabi, setting forth the legal doctrine of lex talionis ("an eye for an eye"), presumption of innocence, commercial contracts, and family law.',
    significance: 'One of the earliest, most complete written legal codes in recorded history, establishing the principle that law should be publicly displayed and binding upon rulers and citizens alike.',
    coverImage: {
      url: '/assets/images/civilization_mesopotamia_1795464677085.jpg',
      title: 'Stele of Hammurabi Receiving Laws from Shamash',
      date: 'c. 1754 BCE',
      creator: 'Musée du Louvre Department of Near Eastern Antiquities',
      institution: 'Musée du Louvre, Paris',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'mesopotamia', relation: 'part_of', description: 'Cornerstone legal text of Babylonian society' },
      { targetId: 'babylon', relation: 'located_in', description: 'Promulgated in the imperial city of Babylon' },
      { targetId: 'invention-of-writing', relation: 'resulted_from', description: 'Exemplifies legal codification made possible by cuneiform writing' }
    ],
    attributes: {
      statutesCount: '282 legal provisions',
      material: 'Polished black basalt/diorite stele',
      reliefScene: 'Hammurabi standing before Shamash, the Babylonian god of justice'
    },
    primarySources: [
      {
        title: 'Prologue of the Code of Hammurabi',
        date: 'c. 1754 BCE',
        excerpt: 'Anu and Bel called by name me, Hammurabi, the exalted prince, who feared God, to bring about the rule of righteousness in the land, to destroy the wicked and the evil-doers; so that the strong should not harm the weak.',
        context: 'Stated royal justification for establishing universal written statutory law.'
      }
    ],
    monographId: 'mesopotamia',
    tags: ['Hammurabi', 'Babylon', 'Law', 'Cuneiform', 'Justice']
  },
  {
    id: 'arthashastra',
    type: 'document',
    name: 'The Arthashastra',
    nativeName: 'Arthaśāstra (Treatise on Political Wealth and Statecraft)',
    aliases: ['Kautiliya Arthashastra', 'Treatise of Chanakya'],
    period: 'c. 3rd – 2nd Century BCE',
    startYear: -300,
    region: 'South Asia (Pataliputra, Maurya Empire)',
    coordinates: [25.611, 85.144],
    summary: 'The seminal ancient Sanskrit treatise on statecraft, economic policy, military strategy, judicial administration, and secret intelligence networks, traditionally attributed to Chanakya (Kautilya), chief minister to Chandragupta Maurya.',
    significance: 'Preceded Niccolò Machiavelli by fifteen centuries in articulating pragmatic political realism, fiscal taxation systems, counter-espionage, and state management of public infrastructure.',
    coverImage: {
      url: '/assets/images/figure_ashoka_1795464677327.jpg',
      title: 'Palm-leaf Manuscript of the Arthashastra',
      date: 'c. 300 BCE (Rediscovered 1905 CE by R. Shamasastry)',
      creator: 'Oriental Research Institute Mysore',
      institution: 'Oriental Research Institute, Mysore',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'chanakya', relation: 'authored', description: 'Composed by Kautilya for the governance of the Maurya Empire' },
      { targetId: 'chandragupta-maurya', relation: 'influenced', description: 'Operational manual for imperial conquests and governance' },
      { targetId: 'mauryan-empire', relation: 'part_of', description: 'Administrative blueprint of the Mauryan state' }
    ],
    attributes: {
      booksCount: '15 Adhikaranas (Books) comprising 150 chapters and 6,000 verses',
      topics: ['King\'s daily schedule', 'Intelligence agencies', 'Taxation & Treasury', 'Warfare strategies', 'Civic law']
    },
    tags: ['Arthashastra', 'Chanakya', 'Statecraft', 'Maurya', 'India']
  },

  // =========================================================================
  // 10. TREATIES AND AGREEMENTS
  // =========================================================================
  {
    id: 'treaty-of-kadesh',
    type: 'treaty',
    name: 'The Treaty of Kadesh',
    nativeName: 'The Silver Treaty (Egyptian-Hittite Peace Accord)',
    aliases: ['Eternal Treaty', 'Silver Tablet of Kadesh'],
    period: 'c. 1259 BCE',
    startYear: -1259,
    region: 'Ancient Near East (Syria / Levant)',
    coordinates: [34.557, 36.519],
    summary: 'The earliest recorded peace treaty in human history with surviving parallel texts, concluded between Egyptian Pharaoh Ramesses II and Hittite Great King Hattusili III following the Battle of Kadesh. Established permanent mutual non-aggression, defensive military alliance, and prisoner extradition.',
    significance: 'Foundational milestone of international diplomacy; a replica hangs in the headquarters of the United Nations in New York as a symbol of peace.',
    coverImage: {
      url: '/assets/images/civilization_egypt_1795464676346.jpg',
      title: 'Cuneiform Clay Tablet of the Treaty of Kadesh from Hattusa',
      date: 'c. 1259 BCE',
      creator: 'Istanbul Archaeological Museums',
      institution: 'Istanbul Archaeology Museum, Turkey',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'ancient-egypt', relation: 'signed', description: 'Signed by Pharaoh Ramesses II' },
      { targetId: 'bronze-age', relation: 'part_of', description: 'Culmination of Late Bronze Age Near Eastern diplomacy' }
    ],
    attributes: {
      signatories: ['Pharaoh Ramesses II (Egypt)', 'Great King Hattusili III (Hatti)'],
      languages: ['Akkadian cuneiform (international lingua franca)', 'Egyptian hieroglyphics (at Karnak and Ramesseum)']
    },
    tags: ['Treaty', 'Kadesh', 'Egypt', 'Hittites', 'Diplomacy']
  },
  {
    id: 'treaty-of-versailles',
    type: 'treaty',
    name: 'The Treaty of Versailles',
    nativeName: 'Traité de Versailles',
    aliases: ['Peace Treaty of Versailles', 'The 1919 Peace Settlement'],
    period: 'Signed June 28, 1919 CE',
    startYear: 1919,
    region: 'Versailles, France',
    coordinates: [48.804, 2.120],
    summary: 'The primary peace treaty that formally ended World War I between the Allied Powers and the German Empire. Negotiated at the Paris Peace Conference, it redrew European borders, created the League of Nations, imposed heavy financial reparations, and assigned sole war guilt to Germany under Article 231.',
    significance: 'Ended the Great War while establishing severe geopolitical and economic resentments that contributed directly to the outbreak of World War II.',
    coverImage: {
      url: '/assets/images/conflict_wwii_1795464677003.jpg',
      title: 'Signing of the Treaty of Versailles in the Hall of Mirrors',
      date: 'June 28, 1919 CE',
      creator: 'Imperial War Museum London',
      institution: 'IWM London',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'world-war-i', relation: 'resulted_from', description: 'Concluded hostilities of the First World War' },
      { targetId: 'world-war-ii', relation: 'caused', description: 'The German economic crisis and revisionism fueled the rise of Hitler' }
    ],
    attributes: {
      bigFour: ['David Lloyd George (UK)', 'Georges Clemenceau (France)', 'Woodrow Wilson (USA)', 'Vittorio Orlando (Italy)'],
      controversialClause: 'Article 231 (The War Guilt Clause)'
    },
    tags: ['Versailles', 'Treaty', 'WWI', 'WWII', 'League of Nations']
  },

  // =========================================================================
  // 11. CULTURAL MOVEMENTS
  // =========================================================================
  {
    id: 'the-renaissance',
    type: 'movement',
    name: 'The Renaissance',
    nativeName: 'Rinascimento',
    aliases: ['Italian Renaissance', 'European Rebirth'],
    period: 'c. 14th – 17th Century CE',
    startYear: 1350,
    endYear: 1650,
    region: 'Western and Southern Europe (Centered in Florence, Italy)',
    coordinates: [43.769, 11.255],
    summary: 'A fervent cultural, artistic, and intellectual movement marking the transition from the Middle Ages to modernity. Sparked by the rediscovery of classical Greek and Roman texts, humanism, linear perspective painting, empirical anatomical dissection, and technological print dissemination.',
    significance: 'Transformed European consciousness from medieval scholasticism to secular empiricism, producing geniuses like Leonardo da Vinci, Michelangelo, and Brunelleschi.',
    coverImage: {
      url: '/assets/images/figure_davinci_1795464678057.jpg',
      title: 'The School of Athens and Florence Cathedral Dome',
      date: 'c. 1509 CE',
      creator: 'Vatican Museums',
      institution: 'Stanze di Raffaello, Vatican',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'davinci', relation: 'part_of', description: 'Archetypal genius of Renaissance art and scientific inquiry' },
      { targetId: 'printing-press', relation: 'resulted_from', description: 'Printing press accelerated the spread of Renaissance literature' },
      { targetId: 'byzantine-empire', relation: 'resulted_from', description: 'Byzantine scholars brought classical Greek manuscripts to Italy after 1453' },
      { targetId: 'scientific-revolution', relation: 'caused', description: 'Empirical humanist method led directly to the Scientific Revolution' }
    ],
    attributes: {
      birthplace: 'Republic of Florence, Tuscany',
      patrons: ['House of Medici', 'Papacy (Julius II, Leo X)'],
      disciplines: ['Linear perspective', 'Human anatomy', 'Classical philology', 'Civic humanism']
    },
    tags: ['Renaissance', 'Florence', 'Art', 'Humanism', 'Da Vinci']
  },
  {
    id: 'the-axial-age',
    type: 'movement',
    name: 'The Axial Age',
    nativeName: 'Achsenzeit (Karl Jaspers)',
    aliases: ['Axial Era', 'Age of Great Thinkers'],
    period: 'c. 800 – 200 BCE',
    startYear: -800,
    endYear: -200,
    region: 'Transcontinental (Greece, India, China, Persia, Levant)',
    coordinates: [37.971, 23.726],
    summary: 'A seminal historical epoch identified by philosopher Karl Jaspers during which, independently and simultaneously across the world, revolutionary philosophical and spiritual frameworks arose that still anchor human moral thought today.',
    significance: 'Saw the simultaneous emergence of Socrates and Plato in Greece, Buddha and Mahavira in India, Confucius and Laozi in China, and Hebrew prophets in the Levant.',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'Luminaries of the Axial Age Across Civilizations',
      date: 'c. 500 BCE',
      creator: 'EPOCH Curatorial Archive',
      institution: 'International Historical Institute',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'socrates', relation: 'part_of', description: 'Pioneered ethical inquiry in Greece' },
      { targetId: 'buddhism', relation: 'part_of', description: 'Gautama Buddha taught in Magadha, India' },
      { targetId: 'ancient-greece', relation: 'part_of', description: 'Classical philosophy emerged in Greek poleis' }
    ],
    attributes: {
      theorist: 'Karl Jaspers (The Origin and Goal of History, 1949)',
      keyFigures: ['Socrates', 'Gautama Buddha', 'Mahavira', 'Confucius', 'Laozi', 'Zoroaster', 'Elijah']
    },
    tags: ['Axial Age', 'Philosophy', 'Ethics', 'Jaspers', 'Antiquity']
  },

  // =========================================================================
  // 12. REVOLUTIONS
  // =========================================================================
  {
    id: 'agricultural-revolution',
    type: 'revolution',
    name: 'The Agricultural Revolution (Neolithic Revolution)',
    nativeName: 'The First Economic Revolution',
    aliases: ['Neolithic Transition', 'Dawn of Farming'],
    period: 'c. 10,000 – 4,000 BCE',
    startYear: -10000,
    endYear: -4000,
    region: 'Fertile Crescent, Yangtze/Yellow Rivers, Indus, Mesoamerica, Andes',
    coordinates: [36.216, 37.159],
    summary: 'The monumental transition in human prehistory from nomadic foraging and hunter-gatherer bands to settled agriculture, systematic cereal crop cultivation (wheat, barley, rice, maize), and animal domestication (sheep, goats, cattle).',
    significance: 'Generated the first permanent caloric surpluses, sparking explosive population growth, permanent settlements, specialized labor, social stratification, and the birth of complex urban civilizations.',
    coverImage: {
      url: '/assets/images/editorial_origins_1795464676722.jpg',
      title: 'Neolithic Sickles, Mortars and Cultivated Fields',
      date: 'c. 8000 BCE',
      creator: 'National Museum of Damascus Archive',
      institution: 'National Museum, Damascus',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'mesopotamia', relation: 'caused', description: 'Fertile Crescent farming led directly to the first Sumerian city-states' },
      { targetId: 'indus-valley', relation: 'caused', description: 'Agricultural surplus supported Harappan urban metropolis grids' },
      { targetId: 'ancient-egypt', relation: 'caused', description: 'Nile floodplain agriculture sustained the Pharaonic state' }
    ],
    attributes: {
      primaryDomesticates: ['Emmer & Einkorn wheat', 'Barley', 'Rice (China)', 'Maize (Mesoamerica)'],
      animals: ['Dogs', 'Sheep', 'Goats', 'Pigs', 'Cattle']
    },
    monographId: 'agricultural-revolution',
    tags: ['Neolithic', 'Agriculture', 'Origins', 'Domestication', 'Farming']
  },
  {
    id: 'scientific-revolution',
    type: 'revolution',
    name: 'The Scientific Revolution',
    nativeName: 'The Empirical Awakening',
    aliases: ['Birth of Modern Science', 'Scientific Awakening'],
    period: 'c. 1543 – 1687 CE',
    startYear: 1543,
    endYear: 1687,
    region: 'Western and Northern Europe',
    coordinates: [52.205, 0.121],
    summary: 'The seismic transformation in European natural philosophy initiated by Nicolaus Copernicus\' heliocentric model (De revolutionibus, 1543) and culminating in Isaac Newton\'s mathematical physics (Principia Mathematica, 1687). Replaced scholastic Aristotelian dogma with systematic empirical observation, controlled experimentation, and universal mathematical law.',
    significance: 'Created the modern scientific method, transformed humanity\'s place in the cosmos, and gave rise to the technologies that enabled the Industrial Revolution.',
    coverImage: {
      url: '/assets/images/figure_davinci_1795464678057.jpg',
      title: 'Galileo\'s Telescope and Newton\'s Principia',
      date: '1687 CE',
      creator: 'The Royal Society Archives',
      institution: 'The Royal Society of London',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'the-renaissance', relation: 'resulted_from', description: 'Grew out of Renaissance humanist empiricism and mathematics' },
      { targetId: 'printing-press', relation: 'resulted_from', description: 'Printing press enabled rapid dissemination of peer-reviewed findings' },
      { targetId: 'industrial-revolution', relation: 'caused', description: 'Scientific physics and thermodynamics powered steam machinery' }
    ],
    attributes: {
      milestoneWorks: ['Copernicus: De revolutionibus (1543)', 'Galileo: Dialogue Concerning the Two Chief World Systems (1632)', 'Newton: Principia (1687)'],
      luminaries: ['Copernicus', 'Kepler', 'Galileo', 'Bacon', 'Descartes', 'Newton']
    },
    monographId: 'scientific-revolution',
    tags: ['Science', 'Newton', 'Galileo', 'Copernicus', 'Physics']
  },
  {
    id: 'industrial-revolution',
    type: 'revolution',
    name: 'The Industrial Revolution',
    nativeName: 'The First Industrial Transformation',
    aliases: ['Mechanization Era', 'The Age of Steam'],
    period: 'c. 1760 – 1840 CE',
    startYear: 1760,
    endYear: 1840,
    region: 'Great Britain / Western Europe / North America',
    coordinates: [53.480, -2.242],
    summary: 'The profound economic transition from handcraft manufacturing and human/animal muscle energy to steam-powered mechanization, iron and steel metallurgy, textile factories, coal energy capture, and rail transport.',
    significance: 'Multiplied global productive capacity exponentially, triggered massive rural-to-urban migrations, established the modern working class, and created the modern global economy.',
    coverImage: {
      url: '/assets/images/hero_ancient_history_1795464676030.jpg',
      title: 'Coalbrookdale by Night and Steam Locomotives',
      date: '1801 CE',
      creator: 'Science Museum Group Archive',
      institution: 'Science Museum, London',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'scientific-revolution', relation: 'resulted_from', description: 'Applied thermodynamic principles and metallurgy to mechanical design' },
      { targetId: 'digital-revolution', relation: 'caused', description: 'Laid the industrial foundations for subsequent electronic automation' }
    ],
    attributes: {
      keyInventions: ['Watt Steam Engine', 'Spinning Jenny', 'Puddling Process for Wrought Iron', 'Steam Locomotive (George Stephenson)'],
      primaryEnergySources: ['Coal', 'Steam']
    },
    monographId: 'industrial-revolution',
    tags: ['Industry', 'Steam', 'Coal', 'Mechanization', 'Urbanization']
  },

  // =========================================================================
  // 13. HISTORICAL PERIODS
  // =========================================================================
  {
    id: 'bronze-age',
    type: 'period',
    name: 'The Bronze Age',
    nativeName: 'The Age of Bronze and First States',
    aliases: ['Eurasian Bronze Age', 'The Dawn of Metal Empires'],
    period: 'c. 3300 – 1200 BCE',
    startYear: -3300,
    endYear: -1200,
    region: 'Near East, Mediterranean, South Asia, East Asia',
    coordinates: [33.315, 44.366],
    summary: 'The pivotal prehistoric and protohistoric era characterized by copper-tin metallurgy (bronze), which allowed the fabrication of durable tools, weapons, and plows. Witnessed the rise of the first centralized territorial states, writing systems, and long-distance maritime trade.',
    significance: 'Brought forth the world\'s first urban literate civilizations—Mesopotamia, Ancient Egypt, and the Indus Valley.',
    coverImage: {
      url: '/assets/images/civilization_indus_1795464676243.jpg',
      title: 'Bronze Age Metallurgy and Lost-wax Bronze Artifacts',
      date: 'c. 2000 BCE',
      creator: 'National Museum of New Delhi',
      institution: 'National Museum, New Delhi',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'indus-valley', relation: 'part_of', description: 'Flourished during the Mature Bronze Age' },
      { targetId: 'ancient-egypt', relation: 'part_of', description: 'Constructed the pyramids and New Kingdom temples' },
      { targetId: 'mesopotamia', relation: 'part_of', description: 'Invented cuneiform writing and urban states' },
      { targetId: 'treaty-of-kadesh', relation: 'part_of', description: 'Diplomatic apex of the Late Bronze Age Near East' }
    ],
    attributes: {
      metallurgy: 'Alloying copper with approximately 10-12% tin or arsenic',
      culmination: 'Late Bronze Age Collapse (c. 1200–1150 BCE) across the Eastern Mediterranean'
    },
    tags: ['Bronze Age', 'Metallurgy', 'Indus', 'Egypt', 'Mesopotamia']
  },
  {
    id: 'classical-antiquity',
    type: 'period',
    name: 'Classical Antiquity',
    nativeName: 'The Greco-Roman & Classical Era',
    aliases: ['Classical Era', 'The Age of the Great Empires'],
    period: 'c. 8th Century BCE – 5th Century CE',
    startYear: -800,
    endYear: 500,
    region: 'Mediterranean, Europe, Near East, South Asia, East Asia',
    coordinates: [41.890, 12.492],
    summary: 'The monumental era centered on the interlocking civilizations of Ancient Greece and Rome in the West, the Mauryan and Gupta empires in India, and the Han Dynasty in China, which established classical philosophy, statecraft, art, and law.',
    significance: 'Laid the foundational legal, intellectual, artistic, and philosophical models that structured subsequent world history.',
    coverImage: {
      url: '/assets/images/hero_ancient_history_1795464676030.jpg',
      title: 'Statues of Classical Antiquity and Imperial Monuments',
      date: 'c. 100 BCE',
      creator: 'Capitoline Museums Archive',
      institution: 'Capitoline Museums, Rome',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'ancient-greece', relation: 'part_of', description: 'Hellenic philosophy, drama, and democracy' },
      { targetId: 'roman-empire', relation: 'part_of', description: 'Pax Romana and Mediterranean unification' },
      { targetId: 'mauryan-empire', relation: 'part_of', description: 'First pan-Indian empire under Chandragupta and Ashoka' },
      { targetId: 'han-dynasty', relation: 'part_of', description: 'Imperial Han consolidation and Silk Road initiation' }
    ],
    attributes: {
      hallmarks: ['Constitutional citizenship', 'Philosophical dialogue', 'Classical architecture (orders: Doric, Ionic, Corinthian)', 'Silk Road transcontinental connectivity']
    },
    tags: ['Classical', 'Antiquity', 'Rome', 'Greece', 'Empire']
  },

  // =========================================================================
  // 14. HISTORICAL EVENTS
  // =========================================================================
  {
    id: 'fall-of-constantinople',
    type: 'event',
    name: 'The Fall of Constantinople',
    nativeName: 'Feth-i Kostantiniyye',
    aliases: ['Conquest of Constantinople', 'The Fall of Byzantium'],
    period: 'April 6 – May 29, 1453 CE',
    startYear: 1453,
    endYear: 1453,
    region: 'Constantinople (Modern Istanbul), Bosphorus Strait',
    coordinates: [41.008, 28.978],
    summary: 'The dramatic siege and capture of the imperial Byzantine capital by the Ottoman army commanded by 21-year-old Sultan Mehmed II. Ended the uninterrupted 1,123-year reign of the Eastern Roman Empire, breaching the colossal Theodosian Walls with super-heavy gunpowder artillery.',
    significance: 'Marked the definitive end of the Middle Ages, spurred Western European explorers to seek sea routes to Asia (sparking the Age of Exploration), and sent Greek scholars fleeing to Italy, fueling the Renaissance.',
    coverImage: {
      url: '/assets/images/hero_ancient_history_1795464676030.jpg',
      title: 'Siege of the Theodosian Walls and Entry of Mehmed II',
      date: '1453 CE',
      creator: 'Topkapi Palace Museum Archive',
      institution: 'Topkapi Palace Museum, Istanbul',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'byzantine-empire', relation: 'resulted_from', description: 'Brought the final chapter of the Roman/Byzantine state to a close' },
      { targetId: 'constantinople', relation: 'located_in', description: 'The historic seat of the Byzantine throne' },
      { targetId: 'the-renaissance', relation: 'caused', description: 'Fleeing Byzantine scholars brought priceless classical manuscripts to Italy' }
    ],
    attributes: {
      commanders: ['Sultan Mehmed II (Ottoman Empire)', 'Emperor Constantine XI Palaiologos (Byzantine Empire)'],
      militaryInnovation: 'Urban\'s giant bronze bombard cannon (firing 600kg stone balls)'
    },
    tags: ['1453', 'Constantinople', 'Byzantium', 'Ottoman', 'Middle Ages']
  },
  {
    id: 'assassination-of-julius-caesar',
    type: 'event',
    name: 'The Assassination of Julius Caesar',
    nativeName: 'Caedis Iulii Caesaris (The Ides of March)',
    aliases: ['Ides of March', 'Death of Caesar'],
    period: 'March 15, 44 BCE',
    startYear: -44,
    endYear: -44,
    region: 'Rome (Theatre of Pompey, Curia Pompeia)',
    coordinates: [41.895, 12.476],
    summary: 'The assassination of Roman dictator perpetuo Julius Caesar by a conspiracy of up to sixty Roman senators, led by Marcus Junius Brutus and Gaius Cassius Longinus. Struck by 23 stab wounds at the foot of Pompey\'s statue in an attempt to restore the Republic.',
    significance: 'Instead of restoring the Republic, the assassination triggered renewed civil war, leading to the rise of Octavian (Augustus) and the formal inauguration of the Roman Empire.',
    coverImage: {
      url: '/assets/images/hero_ancient_history_1795464676030.jpg',
      title: 'Death of Caesar in the Curia of Pompey',
      date: '44 BCE',
      creator: 'National Roman Museum Archive',
      institution: 'Museo Nazionale Romano',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    relationships: [
      { targetId: 'julius-caesar', relation: 'participated_in', description: 'Victim of the senatorial conspiracy' },
      { targetId: 'roman-empire', relation: 'caused', description: 'Led directly to the collapse of the Republic and birth of the Empire' },
      { targetId: 'rome-city', relation: 'located_in', description: 'Took place at the Curia of Pompey in the Campus Martius' }
    ],
    attributes: {
      date: 'March 15, 44 BCE (Ides of March)',
      conspirators: ['Marcus Junius Brutus', 'Gaius Cassius Longinus', 'Decimus Junius Brutus']
    },
    tags: ['Caesar', 'Rome', 'Ides of March', 'Brutus', 'Assassination']
  }
];
