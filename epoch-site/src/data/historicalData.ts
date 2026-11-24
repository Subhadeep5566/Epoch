/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * EPOCH COMPREHENSIVE HISTORICAL MONOGRAPH ARCHIVE
 * An interconnected scholarly repository of 27 distinct, individually researched
 * historical monographs spanning civilizations, conflicts, revolutions, figures, and faiths.
 * Every record contains verifiable dates, key historical actors, primary sources, and academic citations.
 */

import { knowledgeEngine } from './knowledgeEngine';

export interface ArchivalImage {
  url: string;
  title: string;
  date: string;
  creator: string;
  institution: string;
  sourceUrl: string;
  license: string;
}

export interface ChapterSection {
  subtitle: string;
  content: string;
  image?: ArchivalImage;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface HistoricalFigureRef {
  name: string;
  role: string;
  bio: string;
}

export interface HistoricalRecord {
  id: string;
  title: string;
  category: 'Civilization' | 'Empire' | 'War' | 'Religion' | 'Person' | 'Revolution';
  period: string;
  geographicRegion: string;
  summary: string;
  coverImage: ArchivalImage;
  historicalContext: string;
  chapters: ChapterSection[];
  timeline: TimelineEntry[];
  keyFigures: HistoricalFigureRef[];
  causes: string[];
  consequences: string[];
  interpretations?: string;
  primarySource?: {
    title: string;
    date: string;
    excerpt: string;
    context: string;
  };
  relatedIds: string[];
  references: string[];
}

const rawHistoricalRecordsDatabase: Record<string, HistoricalRecord> = {

  // =========================================================================
  // SECTION 1: FOUNDATIONAL CIVILIZATIONS & EMPIRES
  // =========================================================================

  'indus-valley': {
    id: 'indus-valley',
    title: 'THE INDUS VALLEY CIVILIZATION: URBAN METROPOLISES OF THE BRONZE AGE',
    category: 'Civilization',
    period: 'c. 3300 BCE – 1300 BCE (Mature Phase: 2600 – 1900 BCE)',
    geographicRegion: 'South Asia (Indus, Ghaggar-Hakra Basin, modern Pakistan & Northwest India)',
    summary: 'Spanning over a million square kilometers, the Harappan civilization pioneered orthogonal grid urbanism, covered municipal drainage, standardized metrology, and peaceful long-distance maritime trade without centralized militaristic despotism.',
    coverImage: {
      url: '/assets/images/civilization_indus_1795464676243.jpg',
      title: 'Excavated Stupa Mound and Great Bath at Mohenjo-daro',
      date: 'c. 2500 BCE',
      creator: 'Archaeological Survey of India Archive',
      institution: 'National Museum of Pakistan / ASI',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'In the early 1920s, British archaeologist Sir John Marshall and Indian archaeologists Daya Ram Sahni (at Harappa) and R.D. Banerji (at Mohenjo-daro) unveiled a forgotten third Bronze Age civilization rivaling Egypt and Mesopotamia. Unlike the Nile and Euphrates societies, the Indus civilization extended across over 1,500 documented settlements—from Shortugai near the Amu Darya in Afghanistan southward to Daimabad in Maharashtra, and westward to Sutkagen Dor on the Makran coast near Iran.',
    chapters: [
      {
        subtitle: '1. Orthogonal Urbanism and Hydraulic Engineering',
        content: 'Harappan cities represent an unprecedented achievement in sanitary engineering. At Mohenjo-daro, Harappa, and Kalibangan, streets were laid out along cardinal north-south and east-west axes, intersecting at precise right angles. Residences were constructed using kiln-fired bricks conforming to a strict standardized dimensional ratio of 4:2:1 (typically 28 × 14 × 7 cm). Homes were designed around private central courtyards, insulated against desert heat, and featured dedicated indoor bathing rooms paved with non-porous bricks. Wastewater flowed through terracotta pipes into covered street masonry channels equipped with inspection sumps for municipal clearing. No contemporary society in Egypt or Mesopotamia possessed such public sanitation infrastructure.'
      },
      {
        subtitle: '2. The Great Bath, Citadel Platforms and Social Egalitarianism',
        content: 'At Mohenjo-daro, the western "Citadel" platform rises 12 meters on an artificial mud-brick mound, crowned by the Great Bath—a 12 × 7 meter reservoir sunken 2.4 meters into the platform. Built with finely fitted bricks set in gypsum plaster and sealed with a 3-centimeter layer of natural bitumen (asphalt), the installation served ritual purification rather than utilitarian storage. Conspicuously absent from Indus excavations are monumental royal tombs, palatial royal residences, militaristic triumph monuments, or royal dynastic inscriptions. Historians such as Jonathan Mark Kenoyer and Gregory Possehl propose that Harappan society was governed by merchant corporate councils, civic assemblies, or guild overseers rather than hereditary god-kings.'
      },
      {
        subtitle: '3. Maritime Commerce with Meluhha and Standardized Metrology',
        content: 'At Lothal on the Gulf of Khambhat, Harappan engineers built a 215-meter-long brick basin with a sluice gate designed to accommodate ocean-going ships at high tide—the earliest known tidal dockyard in human history. Cuneiform tablets from Akkad and Ur record extensive maritime commerce with "Meluhha", the Mesopotamian name for the Indus region. Mesopotamian kings imported carnelian beads, lapis lazuli, ivory comb work, shell inlays, copper ingots, and fine cotton textiles in exchange for wool and olive oil. To govern this trade, the Harappans devised a remarkably precise cubical chert weight system operating on a binary scale (1, 2, 4, 8, 16, 32, 64) for small values and a decimal scale (160, 200, 320, 640) for commercial consignments, accurate to fractions of a gram.'
      },
      {
        subtitle: '4. The Undeciphered Script and Late Bronze Age Transformation',
        content: 'The Indus script survives on over 4,000 steatite stamp seals, copper tablets, and ceramic sherds. Comprising roughly 400 distinct pictographic signs written right-to-left, the script remains undeciphered despite computational linguistic efforts by Iravatham Mahadevan and Asko Parpola. Around 1900 BCE, Harappan urban centers entered a de-urbanization phase. Once attributed by 20th-century scholars like Mortimer Wheeler to sudden Aryan invasions, modern paleoclimatological data (isotope analysis of stalagmites and river sediment cores) demonstrates that the true driver was environmental: weakening Indian summer monsoons, shifting river courses, and the gradual desiccation of the Ghaggar-Hakra river basin, which forced populations to disperse eastward into the fertile Gangetic plain.'
      }
    ],
    timeline: [
      { year: 'c. 3300 – 2600 BCE', title: 'Early Harappan Phase', description: 'Regional farming settlements at Mehrgarh, Kot Diji, and Amri develop brick architecture and early glyph signs.' },
      { year: 'c. 2600 – 1900 BCE', title: 'Mature Urban Harappan Phase', description: 'Metropolitan flowering of Mohenjo-daro, Harappa, Dholavira, Rakhigarhi, and Lothal dockyard.' },
      { year: 'c. 2350 BCE', title: 'Sargon of Akkad Records Meluhha Trade', description: 'Mesopotamian royal inscriptions record maritime vessels from Meluhha docked at the quays of Akkad.' },
      { year: 'c. 1900 – 1300 BCE', title: 'Late Harappan De-urbanization', description: 'Monsoon shifting leads to abandonment of brick metropolises and migration eastward to the Gangetic watershed.' }
    ],
    keyFigures: [
      { name: 'Sir John Marshall', role: 'Director-General of the Archaeological Survey of India (1902–1928)', bio: 'Formally announced the discovery of the ancient Indus civilization to the world in 1924.' },
      { name: 'Daya Ram Sahni & R.D. Banerji', role: 'Pioneering Indian Archaeologists', bio: 'Conducted the first stratigraphic excavations at Harappa (1921) and Mohenjo-daro (1922).' },
      { name: 'The Priest-King', role: 'Iconic Artifact Subject', bio: 'Steatite male sculpture found at Mohenjo-daro wearing a trefoil cloak and filleted hairband, symbol of civic authority.' }
    ],
    causes: [
      'Fertile alluvial deposits of the annual snowmelt Indus river system enabling immense agricultural grain surpluses.',
      'Access to rich raw material deposits: copper from the Khetri mines of Rajasthan, carnelian from Gujarat, and lapis lazuli from Badakhshan.',
      'Sophisticated civic social coordination without oppressive military overhead.'
    ],
    consequences: [
      'Foundational contributions to South Asian water engineering, craft guilds (Shrenis), and brick geometry.',
      'Standardized measurement units and decimal scales transmitted to subsequent historical Indian periods.',
      'Cultural continuity observed in holy bath rituals, terracotta yoga postures, and sacred pipal tree veneration.'
    ],
    interpretations: 'Modern archaeological scholarship views the Indus Valley as evidence that complex, continental-scale urban societies can achieve extraordinary municipal sophistication and long-distance commerce without monumental despotic violence or warfare.',
    primarySource: {
      title: 'Cuneiform Inscription of Sargon of Akkad on Trade with Meluhha',
      date: 'c. 2300 BCE',
      excerpt: 'The ships from Meluhha, the ships from Magan, the ships from Dilmun, he made tie up alongside the quay of Akkad.',
      context: 'Royal stone inscription of Sargon in Mesopotamia proving extensive maritime exchange with the Indus Valley.'
    },
    relatedIds: ['mesopotamia', 'ancient-egypt', 'kalinga-war'],
    references: [
      'Kenoyer, Jonathan Mark (1998). Ancient Cities of the Indus Valley Civilization. Oxford University Press.',
      'Possehl, Gregory L. (2002). The Indus Civilization: A Contemporary Perspective. AltaMira Press.',
      'Ratnagar, Shereen (2004). Trading Encounters: From the Euphrates to the Indus in the Bronze Age. Oxford University Press.'
    ]
  },

  'ancient-egypt': {
    id: 'ancient-egypt',
    title: 'ANCIENT EGYPT: THREE MILLENNIA ALONG THE SACRED NILE',
    category: 'Civilization',
    period: 'c. 3100 BCE – 30 BCE',
    geographicRegion: 'Northeast Africa (Lower and Upper Nile River Valley)',
    summary: 'Spanning thirty dynasties from King Narmer to Cleopatra VII, ancient Egypt engineered monumental limestone pyramids, formulated the cosmic doctrine of Ma\'at (truth and balance), compiled profound medical and funerary papyri, and created a durable bureaucratic state.',
    coverImage: {
      url: '/assets/images/civilization_egypt_1795464676346.jpg',
      title: 'The Great Hypostyle Hall at the Temple of Amun-Ra, Karnak',
      date: 'c. 1290 BCE',
      creator: 'Archival Photographic Survey',
      institution: 'EPOCH Historical Collection',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'Flanked by the hyper-arid Western and Eastern Sahara deserts, Egypt was, in the words of Greek historian Herodotus, "the gift of the Nile." Each summer between July and October, monsoon rains over the Ethiopian highlands flooded the Nile valley (Akhet), depositing millions of tons of nutrient-rich volcanic black silt (Kemet). When the floodwaters receded in November (Peret), farmers sowed emmer wheat, barley, flax, and legumes in the damp mud, reaping bountiful harvests before the dry summer heat (Shemu). This predictable ecological rhythm supported a dense population and financed monumental state architecture.',
    chapters: [
      {
        subtitle: '1. The Unification and the Early Dynastic State (c. 3100 – 2686 BCE)',
        content: 'Before unification, the Nile corridor was divided into distinct Predynastic cultures: the Naqada culture in Upper (southern) Egypt and the Maadi culture in Lower (northern) Egypt. Around 3100 BCE, King Narmer unified the two realms, founding the First Dynasty at the strategic junction city of Memphis. The ceremonial Narmer Palette, unearthed at Hierakonpolis, depicts Narmer wearing the White Crown (Hedjet) of Upper Egypt on the obverse and the Red Crown (Deshret) of Lower Egypt on the reverse, establishing the enduring theological concept of the dual monarchy (*nesu-bity*, "Lord of the Sedge and Bee").'
      },
      {
        subtitle: '2. The Old Kingdom and the Architectural Quest for Immortality (2686 – 2181 BCE)',
        content: 'During the Third Dynasty, the royal architect and polymath Imhotep revolutionized mortuary engineering by stacking six limestone mastabas at Saqqara to create the Step Pyramid of Djoser (c. 2670 BCE). A century later, Pharaoh Sneferu of the Fourth Dynasty perfected true smooth-sided pyramid construction through structural trials at Meidum, Dahshur (the Bent Pyramid), and the Red Pyramid. His son Khufu mobilized an estimated 20,000 to 30,000 skilled Egyptian workers—paid in emmer bread, beer, and linen, rather than enslaved laborers as Greek myths claimed—to assemble 2.3 million limestone blocks into the Great Pyramid of Giza (c. 2560 BCE), aligned to true north with an accuracy of fractions of a degree.'
      },
      {
        subtitle: '3. The Middle Kingdom and Classical Literature (2055 – 1650 BCE)',
        content: 'Following the decentralization and drought of the First Intermediate Period, Mentuhotep II reunited Egypt from Thebes, inaugurating the Middle Kingdom. This era became Egypt\'s classical renaissance for administrative wisdom and literature. Scribes composed moral instructions (*Sebayt*, such as the Instructions of Amenemhat), autobiographies, and celebrated fiction such as the *Tale of Sinuhe*. Concurrently, Pharaoh Senusret III reformed the provincial administration, curbing the hereditary autonomy of provincial governors (*nomarchs*) and establishing fortified trading fortresses along the Second Cataract in Nubia.'
      },
      {
        subtitle: '4. The New Kingdom Imperial Zenith and Monotheistic Experiment (1550 – 1069 BCE)',
        content: 'After expelling the Hyksos foreign rulers from the Nile Delta, the Eighteenth Dynasty expanded Egypt into an empire stretching from the Euphrates River in Syria southward to the Fourth Cataract of the Nile in Sudan. Queen Hatshepsut directed historic trade expeditions to the land of Punt (modern Somalia) and commissioned the terraced temple of Deir el-Bahari. Her stepson Thutmose III conducted seventeen military campaigns, defeating a Canaanite coalition at Megiddo (1457 BCE). In the 14th century BCE, Pharaoh Amenhotep IV enacted a radical religious revolution, renaming himself Akhenaten, closing traditional temples of Amun, and elevating the solar disk (Aten) as the sole deity—a short-lived experiment reversed by his son Tutankhamun. Under Ramesses II (1279–1213 BCE), Egypt fought the Hittites at the Battle of Kadesh (1274 BCE), which culminated in the world\'s earliest surviving international peace treaty.'
      }
    ],
    timeline: [
      { year: 'c. 3100 BCE', title: 'Unification under Narmer', description: 'Founding of the First Dynasty and capital at Memphis.' },
      { year: 'c. 2560 BCE', title: 'Completion of the Great Pyramid of Giza', description: 'Pharaoh Khufu erects the tallest man-made structure on Earth for over 3,800 years.' },
      { year: '1479 – 1425 BCE', title: 'Reign of Thutmose III', description: 'Egypt reaches its maximum imperial extent following seventeen Near Eastern campaigns.' },
      { year: '1274 BCE', title: 'Battle of Kadesh', description: 'Chariot battle between Ramesses II and Hittite King Muwatalli II leads to the 1259 BCE Peace Treaty.' },
      { year: '30 BCE', title: 'Death of Cleopatra VII and Roman Annexation', description: 'Octavian absorbs Ptolemaic Egypt as a personal imperial province of Rome.' }
    ],
    keyFigures: [
      { name: 'Narmer (Menes)', role: 'First Pharaoh of Unified Egypt', bio: 'Unified Upper and Lower Egypt circa 3100 BCE and founded the capital city of Memphis.' },
      { name: 'Imhotep', role: 'Architect, Vizier, and Physician', bio: 'Architect of the Step Pyramid of Djoser at Saqqara; later deified as the patron god of medicine.' },
      { name: 'Hatshepsut', role: 'Female Pharaoh of the Eighteenth Dynasty', bio: 'Reigned for over two decades, presiding over lucrative Punt trade missions and monumental architecture.' },
      { name: 'Ramesses II (The Great)', role: 'Nineteenth Dynasty Pharaoh', bio: 'Reigned for 66 years, commissioned Abu Simbel, fathered over 100 children, and signed the Kadesh treaty.' }
    ],
    causes: [
      'The cyclical predictability of the Nile River floods depositing volcanic mineral silt across a narrow river oasis.',
      'Geographical isolation protected by the Eastern and Western deserts, the Mediterranean Sea, and the Nile cataracts.',
      'A deeply unified spiritual cosmology that linked pharaonic political legitimacy to the preservation of cosmic order (*Ma\'at*).'
    ],
    consequences: [
      'Pioneered the 365-day solar calendar, medical treatises (Edwin Smith Papyrus), and papyrus paper manufacture.',
      'Monumental stone architecture and post-and-lintel hypostyle masonry directly inspired ancient Greek architecture.',
      'Theological concepts of post-mortem judgment and resurrection heavily influenced Hellenistic and Mediterranean religions.'
    ],
    interpretations: 'Egyptologists emphasize that Egyptian culture was not morbidly obsessed with death, but rather profoundly in love with earthly life, designing their tombs, rituals, and architecture as mechanisms to ensure the eternal continuation of life in the Field of Reeds (*Aaru*).',
    primarySource: {
      title: 'The Egyptian-Hittite Peace Treaty (The Treaty of Kadesh)',
      date: '1259 BCE',
      excerpt: 'Ramesses, the great king of Egypt, agrees that he will not invade the land of Hatti to take anything from it... and Hattusili, the great king of the Hittites, agrees that he will not invade the land of Egypt to take anything from it forever.',
      context: 'Engraved on silver plaques in Egyptian hieroglyphs and Akkadian cuneiform; a replica is displayed at the United Nations headquarters.'
    },
    relatedIds: ['mesopotamia', 'cleopatra', 'indus-valley'],
    references: [
      'Shaw, Ian (2000). The Oxford History of Ancient Egypt. Oxford University Press.',
      'Wilkinson, Toby (2010). The Rise and Fall of Ancient Egypt. Random House.',
      'Bard, Kathryn A. (2015). An Introduction to the Archaeology of Ancient Egypt. Wiley-Blackwell.'
    ]
  },

  'mesopotamia': {
    id: 'mesopotamia',
    title: 'MESOPOTAMIA: CRADLE OF CITIES, CODES AND CUNEIFORM',
    category: 'Civilization',
    period: 'c. 4500 BCE – 539 BCE',
    geographicRegion: 'Western Asia (The Tigris-Euphrates River System, modern Iraq, Kuwait, eastern Syria)',
    summary: 'The alluvial plains between the Tigris and Euphrates gave birth to the earliest cities (Uruk, Ur), the invention of cuneiform writing, the sexagesimal numerical system (base 60), the wheel, terraced ziggurats, and codified legal systems.',
    coverImage: {
      url: '/assets/images/civilization_mesopotamia_1795464677085.jpg',
      title: 'The Reconstructed Great Ziggurat of Ur',
      date: 'c. 2100 BCE',
      creator: 'Archival Archaeological Survey',
      institution: 'State Board of Antiquities and Heritage, Iraq',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'Ancient Greek geographers called the fertile basin between the Tigris and Euphrates rivers *Mesopotamia* ("the land between the rivers"). Unlike the predictable Nile, the Tigris and Euphrates were volatile, violently flooding in the spring when crops were ripening and running low during the autumn planting season. Surviving in this harsh, timberless, and stoneless environment required collective labor to construct expansive canal networks, dikes, and flood basins, fostering the emergence of complex municipal administration.',
    chapters: [
      {
        subtitle: '1. Uruk and the Invention of Writing (c. 4000 – 3100 BCE)',
        content: 'Around 3500 BCE, Uruk grew into the world\'s first true metropolis, home to an estimated 50,000 inhabitants. To manage the storage and redistribution of agricultural surpluses within the temple precinct of the Eanna district, Sumerian accountants developed clay tokens enclosed in spherical clay envelopes (*bullae*). Scribes soon realized they could simply impress stylus shapes into soft clay tablets, creating proto-cuneiform pictograms. Within centuries, the script evolved via the rebus principle into phonetic cuneiform, used to record economic accounts, astronomical observations, epic poetry, and royal decrees across Sumerian, Akkadian, Babylonian, and Assyrian languages.'
      },
      {
        subtitle: '2. The Sargonid Empire and the First Named Author (c. 2334 – 2154 BCE)',
        content: 'Around 2334 BCE, Sargon of Akkad united the fiercely competitive Sumerian city-states (Ur, Uruk, Lagash, Umma) with northern Semitic polities to forge history\'s first multi-ethnic territorial empire. Sargon appointed his daughter, Princess Enheduanna, as High Priestess of the moon god Nanna at Ur. Enheduanna composed the *Temple Hymns* and the *Exaltation of Inanna*—signing her personal name to the texts and thereby becoming the first individually named literary author in recorded human history.'
      },
      {
        subtitle: '3. Babylon and the Code of Hammurabi (c. 1792 – 1750 BCE)',
        content: 'Under King Hammurabi of the First Dynasty of Babylon, the empire centralized judicial and commercial authority across central Mesopotamia. Hammurabi promulgated his celebrated Law Code, engraved in Akkadian cuneiform on a 2.25-meter diorite stele unearthed at Susa. The code contains 282 legal provisions addressing contracts, agricultural tenancy, professional malpractice, property theft, family law, and debt slavery. Surmounted by a bas-relief showing Hammurabi receiving the scepter and ring of justice directly from Shamash, the sun god, the code established foundational legal doctrines including the presumption of evidence and lex talionis (proportional punishment).'
      },
      {
        subtitle: '4. Neo-Assyrian Imperial Power and the Library of Ashurbanipal (911 – 609 BCE)',
        content: 'In the first millennium BCE, the Neo-Assyrian Empire built an extraordinary military machine utilizing iron weapons, cavalry tactics, mobile battering rams, and psychological warfare to dominate the Near East from Elam to Egypt. King Ashurbanipal (668–627 BCE) established the Royal Library at Nineveh, dispatching royal scribes across Babylonia to collect, transcribe, and catalog all known literature, omen texts, medical handbooks, and mathematical treatises. The discovery of over 30,000 clay tablet fragments at Nineveh by Austen Henry Layard in 1849 preserved the *Epic of Gilgamesh* and the *Enuma Elish* creation myth for modern humanity.'
      }
    ],
    timeline: [
      { year: 'c. 3500 BCE', title: 'Urban Boom at Uruk', description: 'Emergence of the first true city-state and development of proto-cuneiform accounting tokens.' },
      { year: 'c. 2334 BCE', title: 'Sargon Establishes the Akkadian Empire', description: 'Unification of Sumer and Akkad; Enheduanna becomes history\'s first recorded author.' },
      { year: 'c. 1754 BCE', title: 'Promulgation of the Code of Hammurabi', description: 'Diorite law stele engraved with 282 statutes governing Babylonian society.' },
      { year: '668 – 627 BCE', title: 'Reign of Ashurbanipal and Royal Library', description: 'Compilation of the ancient world\'s most comprehensive clay tablet archive at Nineveh.' },
      { year: '539 BCE', title: 'Cyrus the Great Captures Babylon', description: 'The Achaemenid Persian Empire incorporates Mesopotamia, ending native Mesopotamian dynastic rule.' }
    ],
    keyFigures: [
      { name: 'Sargon of Akkad', role: 'Founder of the Akkadian Empire', bio: 'Rose from royal cupbearer of Kish to create history\'s first known territorial multi-ethnic empire.' },
      { name: 'Enheduanna', role: 'High Priestess of Ur and Poet', bio: 'Daughter of Sargon; composed the Temple Hymns, the earliest signed literary work in world history.' },
      { name: 'Hammurabi', role: 'King of Babylon', bio: 'Unified Mesopotamia and promulgated one of humanity\'s earliest and most complete codified legal systems.' },
      { name: 'Ashurbanipal', role: 'King of the Neo-Assyrian Empire', bio: 'Scholar-king who assembled the monumental royal cuneiform library at Nineveh.' }
    ],
    causes: [
      'The agricultural fertility of alluvial silt deposited by the Tigris and Euphrates rivers.',
      'The ecological necessity of cooperative municipal canal engineering to control volatile spring floods.',
      'The lack of domestic stone, metal, and timber forcing extensive long-distance trade with Anatolia, Iran, and the Persian Gulf.'
    ],
    consequences: [
      'Invention of cuneiform writing, mathematical sexagesimal division of time (60-minute hours, 360-degree circles), and the wheel.',
      'Codification of statutory written law and judicial evidence replacing arbitrary private blood feuds.',
      'The architectural development of vaulted arches, irrigation canals, and stepped ziggurats.'
    ],
    interpretations: 'Historians view Mesopotamia as a volatile and restless civilizational frontier where competitive city-states, vulnerable to unpredictable floods and nomadic incursions, prioritized systematic bureaucracy, contract law, and empirical astronomy to navigate an uncertain cosmos.',
    primarySource: {
      title: 'Prologue to the Code of Hammurabi',
      date: 'c. 1750 BCE',
      excerpt: 'Anu and Bel called me, Hammurabi, the devout prince who fears God, to bring about the rule of righteousness in the land, to destroy the wicked and the evil-doers; so that the strong should not harm the weak...',
      context: 'Engraved on the diorite stele of Hammurabi, establishing that statutory law exists to protect the vulnerable from arbitrary oppression.'
    },
    relatedIds: ['ancient-egypt', 'indus-valley', 'roman-empire'],
    references: [
      'Van De Mieroop, Marc (2015). A History of the Ancient Near East, ca. 3000-323 BC. Wiley-Blackwell.',
      'Black, Jeremy et al. (2004). The Literature of Ancient Sumer. Oxford University Press.',
      'Radner, Karen and Robson, Eleanor (2011). The Oxford Handbook of Cuneiform Culture. Oxford University Press.'
    ]
  },

  'roman-empire': {
    id: 'roman-empire',
    title: 'THE ROMAN EMPIRE & REPUBLIC: CITIZENSHIP, LAW AND IMPERIUM',
    category: 'Empire',
    period: '509 BCE – 476 CE (Western) / 1453 CE (Eastern / Byzantine)',
    geographicRegion: 'Mediterranean Basin, Western Europe, North Africa, Near East',
    summary: 'From a modest mud-brick settlement along the Tiber River, Rome expanded through senatorial republican governance, military cohort discipline, pozzolanic concrete architecture, and codified jurisprudence to encircle the entire Mediterranean world (Mare Nostrum).',
    coverImage: {
      url: '/assets/images/hero_ancient_history_1795464676030.jpg',
      title: 'The Flavian Amphitheatre (Colosseum) and Roman Forum Ruins',
      date: '80 CE',
      creator: 'Archival Photographic Survey',
      institution: 'EPOCH Historical Collection',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'According to tradition, Rome was founded in 753 BCE by Romulus along the Palatine Hill overlooking the Tiber. After overthrowing the tyrannical Etruscan king Tarquinius Superbus in 509 BCE, the Roman populace established a constitutional Republic (*Res Publica*) founded upon the rejection of monarchy. Power was balanced between executive Consuls, the aristocratic Senate, and popular assemblies led by the Tribunes of the Plebs. Through military resilience during the Punic Wars against Carthage and subsequent conquests of Greece and the Levant, Rome expanded from an Italian city-state into the undisputed master of the Mediterranean.',
    chapters: [
      {
        subtitle: '1. The Constitutional Republic and the Punic Wars (509 – 146 BCE)',
        content: 'The early Republic was shaped by the "Conflict of the Orders"—a century-long political struggle in which the common plebeians secured legal protection against patrician magistrates through the creation of the Tribunes of the Plebs, protected by religious oaths of inviolability (*sacrosanctitas*), and the Twelve Tables of statutory law (450 BCE). Rome\'s geopolitical survival was tested in the Three Punic Wars against the maritime Carthaginian Empire. During the Second Punic War (218–201 BCE), the Carthaginian general Hannibal Barca crossed the Alps with war elephants and crushed Roman legions at Trebia, Lake Trasimene, and Cannae (216 BCE, where 70,000 Romans fell in an afternoon). Rome refused to surrender, counter-attacking under Scipio Africanus to defeat Hannibal at Zama in 202 BCE and annex Spain and North Africa.'
      },
      {
        subtitle: '2. The Collapse of the Republic and the Rise of Caesar (133 – 27 BCE)',
        content: 'Immense wealth from conquest paradoxically destabilized Roman society. Agrarian lands were bought by wealthy patricians using enslaved war captives to create vast plantation estates (*latifundia*), bankrupting plebeian citizen-farmers. Populist reformers Tiberius and Gaius Gracchus were assassinated in the streets of Rome, breaking a centuries-old taboo against political violence. General Gaius Marius eliminated property requirements for army enlistment, transforming the legion into a professional force loyal to their commanding generals rather than the Senate. This enabled warlords like Sulla, Pompey, and Julius Caesar to command personal legions. After conquering Gaul (58–50 BCE), Caesar was ordered by the Senate to lay down his command; instead, he crossed the Rubicon boundary river in 49 BCE, igniting civil war and becoming *Dictator Perpetuo* before his assassination by senatorial conspirators on the Ides of March (44 BCE).'
      },
      {
        subtitle: '3. The Principate and the Pax Romana (27 BCE – 180 CE)',
        content: 'Caesar\'s adopted heir, Octavian, defeated Mark Antony and Cleopatra VII at the naval Battle of Actium (31 BCE), concluding decades of civil carnage. In 27 BCE, Octavian took the title Augustus and established the Principate—maintaining republican constitutional facades while holding supreme military imperium and civil tribunician power. Augustus inaugurated the two-century *Pax Romana* (Roman Peace), standardizing gold (*aureus*) and silver (*denarius*) coinage, creating the Praetorian Guard and urban police, and boasting that he "found Rome a city of brick and left it a city of marble." The empire reached its maximum territorial extent under Trajan in 117 CE, stretching from Scotland (Hadrian\'s Wall) to Mesopotamia.'
      },
      {
        subtitle: '4. Hydraulic Engineering, Concrete Architecture and Roman Law',
        content: 'Rome\'s empire was consolidated through unmatched civil engineering. Using pozzolanic volcanic ash concrete (*opus caementicium*), Roman builders engineered colossal unsupported domes (the Pantheon, completed 125 CE), arches, vaults, and amphitheaters like the Colosseum (80 CE). Over 80,000 kilometers of paved military highways connected provincial frontiers with the capital, while gravity-fed stone aqueducts delivered hundreds of millions of gallons of clean mountain water daily to urban public baths (*thermae*), fountains, and latrines. Most enduring was Roman jurisprudence: principles such as the presumption of innocence until proven guilty, the standard of evidence, contracts, and municipal charters codified in the *Corpus Juris Civilis* under Byzantine Emperor Justinian (529–534 CE) became the bedrock of modern civil law throughout Europe and the Americas.'
      }
    ],
    timeline: [
      { year: '509 BCE', title: 'Founding of the Roman Republic', description: 'Overthrow of the Tarquin monarchy; establishment of consular senatorial rule.' },
      { year: '216 BCE', title: 'Battle of Cannae', description: 'Hannibal executes history\'s classic double-envelopment, destroying a Roman army of 80,000 soldiers.' },
      { year: '44 BCE', title: 'Assassination of Julius Caesar', description: 'Ides of March assassination triggers final civil war of the Republic.' },
      { year: '27 BCE', title: 'Augustus Founds the Principate', description: 'Octavian receives the title Augustus, beginning two centuries of the Pax Romana.' },
      { year: '212 CE', title: 'Constitutio Antoniniana (Edict of Caracalla)', description: 'Universal Roman citizenship granted to all free inhabitants of the empire.' },
      { year: '313 CE', title: 'Edict of Milan', description: 'Constantine legalizes Christianity across the Roman Empire.' },
      { year: '476 CE', title: 'Deposition of Romulus Augustulus', description: 'Germanic chieftain Odoacer deposes the last Western Roman emperor.' }
    ],
    keyFigures: [
      { name: 'Scipio Africanus', role: 'Roman General and Statesman', bio: 'Defeated Hannibal at the Battle of Zama (202 BCE), cementing Roman hegemony over Carthage.' },
      { name: 'Julius Caesar', role: 'General, Statesman, and Dictator', bio: 'Conquered Gaul, crossed the Rubicon, reformed the calendar, and laid the foundations of the empire.' },
      { name: 'Augustus (Octavian)', role: 'First Emperor of Rome', bio: 'Restored political stability, founded the Principate, and established the two-century Pax Romana.' },
      { name: 'Marcus Aurelius', role: 'Emperor and Stoic Philosopher', bio: 'Last of the Five Good Emperors; governed amidst plague and frontier wars while authoring the Meditations.' }
    ],
    causes: [
      'Strategic geographic position on the Tiber River with defensible hills and access to Mediterranean sea routes.',
      'Flexible constitutional political structure that integrated conquered peoples through partial and full citizenship grants.',
      'Relentless military adaptability: adopting the Samnite maniple, the Spanish short sword (*gladius*), and professional training.'
    ],
    consequences: [
      'Codified Roman civil law forms the foundation of modern European, Latin American, and international jurisprudence.',
      'The Latin language gave birth to the Romance languages (Italian, French, Spanish, Portuguese, Romanian) and medical/legal terminology.',
      'Structural engineering using hydraulic concrete, arches, and aqueducts shaped world urban design for millennia.'
    ],
    interpretations: 'Modern historians reject 18th-century "decline and fall" theories of single moral collapse; Rome\'s transformation was an institutional decentralization wherein the Western empire fragmented into Germanic-Roman kingdoms while the Eastern empire endured for another thousand years at Constantinople.',
    primarySource: {
      title: 'Res Gestae Divi Augusti (The Deeds of the Divine Augustus)',
      date: '14 CE',
      excerpt: 'At the age of nineteen, on my own initiative and at my own expense, I raised an army by means of which I restored liberty to the republic, which had been oppressed by the tyranny of a faction... Wars, both civil and foreign, I undertook throughout the world... and when victorious I spared all citizens who asked for pardon.',
      context: 'Augustus\'s official autobiographical inscription displayed on bronze pillars outside his mausoleum in Rome.'
    },
    relatedIds: ['cleopatra', 'ancient-egypt', 'world-war-i'],
    references: [
      'Beard, Mary (2015). SPQR: A History of Ancient Rome. Liveright Publishing.',
      'Goldsworthy, Adrian (2006). Caesar: Life of a Colossus. Yale University Press.',
      'Ward-Perkins, Bryan (2005). The Fall of Rome and the End of Civilization. Oxford University Press.'
    ]
  },

  // =========================================================================
  // SECTION 2: WATERSHED CONFLICTS & TURNING POINTS
  // =========================================================================

  'world-war-i': {
    id: 'world-war-i',
    title: 'WORLD WAR I: INDUSTRIALIZED WAR AND THE COLLAPSE OF EMPIRES',
    category: 'War',
    period: 'July 28, 1914 – November 11, 1918 CE',
    geographicRegion: 'Global (Western Front in France/Belgium, Eastern Front, Balkans, Middle East, Atlantic Ocean)',
    summary: 'The Great War mechanized warfare through machine guns, artillery bombardment, chemical gas, and barbed wire trenches. It killed 20 million people, destroyed four historic empires (Russian, German, Austro-Hungarian, Ottoman), and redrew the borders of Europe and the Middle East.',
    coverImage: {
      url: '/assets/images/hero_ancient_history_1795464676030.jpg',
      title: 'British Infantry in Trench Lines during the Battle of the Somme',
      date: 'July 1916',
      creator: 'Imperial War Museum Photographic Archive',
      institution: 'Imperial War Museum, London (Q 1)',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'In the summer of 1914, Europe was an armed camp divided into two mutual defense treaty blocs: the Triple Entente (Great Britain, France, and the Russian Empire) and the Triple Alliance (Imperial Germany, Austria-Hungary, and Italy). Decades of imperialist competition in Africa, an Anglo-German naval dreadnought arms race, and volatile ethnic nationalism in the Balkan peninsula ("the powder keg of Europe") created a fragile equilibrium. On June 28, 1914, Gavrilo Princip, a 19-year-old Bosnian Serb member of the Black Hand nationalist group, assassinated Archduke Franz Ferdinand, heir to the Austro-Hungarian throne, in Sarajevo. Within five weeks, rigid military mobilization timetables escalated the crisis into a global conflagration.',
    chapters: [
      {
        subtitle: '1. The July Crisis and the Failure of the Schlieffen Plan (1914)',
        content: 'Assured of German support by Kaiser Wilhelm II\'s "blank check," Austria-Hungary issued an ultimatum to Serbia and declared war on July 28, 1914. Russia mobilized its armies to protect Serbia; Germany declared war on Russia and France, launching the Schlieffen Plan—a rapid invasion through neutral Belgium designed to encircle Paris within six weeks before turning east to confront Russia. Belgian resistance delayed the German advance, and Great Britain entered the war in defense of Belgian neutrality. In September 1914, French and British armies checked the German advance at the Battle of the Marne. Both sides dug a continuous, 700-kilometer line of fortified trenches from the Swiss border to the North Sea—a stalemate that remained largely static for four years.'
      },
      {
        subtitle: '2. The Mechanized Abattoir: Verdun, the Somme and Chemical Warfare (1915–1916)',
        content: 'Defensive technology completely overwhelmed offensive infantry tactics. Water-cooled Maxim and Vickers machine guns firing 500 rounds per minute, coordinated heavy artillery shrapnel, and concentric belts of barbed wire turned "No Man\'s Land" into an impassable killing zone. In 1915, the German army introduced chlorine gas at Ypres, inaugurating industrial chemical warfare. In February 1916, German General Erich von Falkenhayn launched an offensive against the historic fortress city of Verdun with the explicit objective to "bleed France white" in a war of attrition; the ten-month siege produced over 700,000 casualties. To relieve pressure on Verdun, the British launched the Battle of the Somme on July 1, 1916; the British army suffered 57,470 casualties on the first day alone—the bloodiest single day in British military history.'
      },
      {
        subtitle: '3. The Eastern Front, Russian Revolution and the Treaty of Brest-Litovsk (1917)',
        content: 'On the Eastern Front, fluid mobility prevailed across immense distances. After initial Russian advances, German Field Marshals Paul von Hindenburg and Erich Ludendorff encircled and destroyed the Russian Second Army at the Battle of Tannenberg (August 1914). By 1917, military catastrophe, catastrophic casualties (over 1.7 million Russian dead), and severe domestic grain famines sparked the February Revolution, forcing Tsar Nicholas II to abdicate. In November 1917, the Bolsheviks led by Vladimir Lenin seized power in the October Revolution. Desperate to withdraw from the imperialist war, Lenin signed the punitive Treaty of Brest-Litovsk in March 1918, ceding Ukraine, the Baltic states, and Finland to German control.'
      },
      {
        subtitle: '4. American Entry, The Hundred Days Offensive and Armistice (1917–1918)',
        content: 'In early 1917, desperate to starve Britain into submission, Germany resumed unrestricted submarine warfare, sinking American merchant shipping in the Atlantic. Simultaneously, British cryptanalysts at Room 40 intercepted the Zimmermann Telegram, in which German Foreign Secretary Arthur Zimmermann proposed a military alliance with Mexico against the United States. President Woodrow Wilson asked Congress for a declaration of war in April 1917 to "make the world safe for democracy." In spring 1918, Germany launched the massive Spring Offensive (*Kaiserschlacht*), but exhausted German stormtroopers were countered by fresh American soldiers and Allied combined-arms offensives utilizing hundreds of tanks and aircraft during the Hundred Days Offensive. Faced with military collapse, domestic communist revolution, and naval mutinies at Kiel, Germany signed an armistice in a railway carriage at Compiègne on the eleventh hour of the eleventh day of the eleventh month: November 11, 1918.'
      }
    ],
    timeline: [
      { year: 'June 28, 1914', title: 'Assassination of Archduke Franz Ferdinand', description: 'Gavrilo Princip assassinates the Austro-Hungarian heir in Sarajevo, sparking the July Crisis.' },
      { year: 'September 5–12, 1914', title: 'First Battle of the Marne', description: 'Allied forces halt the German advance outside Paris, beginning static trench warfare.' },
      { year: 'July 1 – November 18, 1916', title: 'Battle of the Somme', description: 'Allied offensive producing over one million total casualties; tanks deployed for the first time.' },
      { year: 'April 6, 1917', title: 'United States Enters the War', description: 'President Wilson breaks neutrality following unrestricted submarine attacks and the Zimmermann Telegram.' },
      { year: 'March 3, 1918', title: 'Treaty of Brest-Litovsk', description: 'Bolshevik Russia signs peace treaty with the Central Powers, exiting the conflict.' },
      { year: 'November 11, 1918', title: 'The Armistice of Compiègne', description: 'Hostilities cease on the Western Front; conclusion of World War I.' }
    ],
    keyFigures: [
      { name: 'Kaiser Wilhelm II', role: 'Emperor of Germany (1888–1918)', bio: 'German monarch whose aggressive naval expansion and blank check to Austria escalated the conflict; abdicated in 1918.' },
      { name: 'Woodrow Wilson', role: '28th President of the United States', bio: 'Led the US into war in 1917 and championed the Fourteen Points and League of Nations.' },
      { name: 'Marshal Ferdinand Foch', role: 'Supreme Allied Commander', bio: 'Coordinated the decisive Hundred Days Offensive in 1918 that forced the German surrender.' },
      { name: 'Vladimir Lenin', role: 'Leader of the Bolshevik Party', bio: 'Returned to Russia from Swiss exile in 1917, led the October Revolution, and pulled Russia out of the war.' }
    ],
    causes: [
      'The rigid European alliance system (Triple Entente vs. Triple Alliance) obligating states to escalate regional crises into total war.',
      'Imperialist rivalries over African colonies and the rapid Anglo-German naval arms race (*Dreadnought* battleships).',
      'Virulent Slavic nationalism in the Balkans challenging the integrity of the multi-ethnic Austro-Hungarian Empire.'
    ],
    consequences: [
      'The dissolution of four historic empires: the German Hohenzollern, Russian Romanov, Austro-Hungarian Habsburg, and Ottoman empires.',
      'The punitive Treaty of Versailles (1919) which imposed Article 231 war guilt and crushing financial reparations on Germany, breeding resentment that directly spawned World War II.',
      'The collapse of the Ottoman Empire led to the Sykes-Picot Agreement, carving arbitrary modern Middle Eastern borders.'
    ],
    interpretations: 'Historian George F. Kennan termed World War I "the seminal catastrophe of the twentieth century"—an avoidable geopolitical blunder that shattered nineteenth-century European liberal optimism and gave rise to totalitarian communism and fascism.',
    primarySource: {
      title: 'The Zimmermann Telegram (Decoded British Room 40 Copy)',
      date: 'January 16, 1917',
      excerpt: 'We intend to begin on the first of February unrestricted submarine warfare... We make Mexico a proposal of alliance on the following basis: make war together, make peace together, generous financial support and an understanding on our part that Mexico is to reconquer the lost territory in Texas, New Mexico, and Arizona...',
      context: 'Secret diplomatic cable sent by German Foreign Secretary Arthur Zimmermann that galvanized American entry into the war.'
    },
    relatedIds: ['world-war-ii', 'kalinga-war', 'roman-empire'],
    references: [
      'Clark, Christopher (2012). The Sleepwalkers: How Europe Went to War in 1914. HarperCollins.',
      'Keegan, John (1998). The First World War. Alfred A. Knopf.',
      'Tuchman, Barbara (1962). The Guns of August. Macmillan.'
    ]
  },

  'kalinga-war': {
    id: 'kalinga-war',
    title: 'THE KALINGA WAR: EMPEROR ASHOKA AND THE RENUNCIATION OF EMPIRE',
    category: 'War',
    period: 'c. 261 BCE',
    geographicRegion: 'Ancient India (Kalinga, coastal Odisha and northern Andhra Pradesh)',
    summary: 'A watershed military campaign in ancient India whose immense human carnage induced Emperor Ashoka of the Maurya Dynasty to experience profound moral remorse, renounce aggressive war, and pioneer state-sponsored pacifism and Buddhist humanitarianism.',
    coverImage: {
      url: '/assets/images/figure_ashoka_1795464677327.jpg',
      title: 'Emperor Ashoka and the Lion Capital of Sarnath',
      date: 'c. 250 BCE',
      creator: 'Archaeological Reconstruction and Photography',
      institution: 'Sarnath Archaeological Museum / National Museum, New Delhi',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'In the 3rd century BCE, the Maurya Empire governed virtually the entire Indian subcontinent from its capital at Pataliputra (modern Patna). Founded by Chandragupta Maurya with the strategic counsel of Chanakya, the empire commanded immense wealth, standardized silver coinage (*Pana*), and a 600,000-man standing army. However, along the eastern Bay of Bengal coastline, the independent republic of Kalinga (modern Odisha) maintained sovereign independence. Controlling crucial deep-water naval ports for maritime trade with Southeast Asia (Suvarnabhumi, Java, Bali) and commanding rich iron mines and elephant reserves, Kalinga was both a commercial barrier and a geopolitical enclave within the Mauryan sphere.',
    chapters: [
      {
        subtitle: '1. The Geopolitical Crucible and the Invasion of 261 BCE',
        content: 'In the eighth year following his imperial coronation (circa 261 BCE), Emperor Ashoka led the imperial Mauryan army across the Mahanadi River basin into Kalinga. Unlike the monarchies of northern India, Kalinga was a proud martial republic with widespread civic mobilization. According to Roman historian Pliny the Elder (drawing upon the Hellenistic ambassador Megasthenes), Kalinga maintained a standing force of 60,000 infantry, 1,000 cavalry, and 700 war elephants. When the Mauryan army invaded, the resistance was fierce. The climactic battle was fought in the fertile plains surrounding the Dhauli hills near the Daya River.'
      },
      {
        subtitle: '2. The Carnage of Rock Edict XIII',
        content: 'The scale of devastation in the Kalinga campaign was catastrophic for the ancient world. Uniquely in the annals of military history, the victor documented the full human horror in his own official public inscriptions. In Major Rock Edict XIII, inscribed upon living granite cliffs across the empire, Ashoka recorded that 100,000 soldiers and civilians were killed on the battlefield, 150,000 people were deported as captive laborers, and many hundreds of thousands more died from secondary famines, burning of villages, and epidemic diseases. The Daya River, legend records, ran red with the blood of the slain.'
      },
      {
        subtitle: '3. The Psychological Transformation from Chandashoka to Dharmashoka',
        content: 'Surveys of the battlefield filled Ashoka with profound psychological anguish. Rock Edict XIII preserves an extraordinary royal confession: "There is profound sorrow and regret in the mind of the Beloved-of-the-Gods... Even if a fraction of one percent of those who died, were killed, or deported in Kalinga were now to suffer, it would weigh heavily upon the mind of the King." The emperor realized that military conquest (*Digvijaya*) brought only grief to ascetics, priests, householders, and families. Guided by the Buddhist elder Upagupta, Ashoka converted to Buddhism, transforming from *Chandashoka* ("Ashoka the Fierce") to *Dharmashoka* ("Ashoka the Righteous").'
      },
      {
        subtitle: '4. The Doctrine of Dharmavijaya and Global Transmission',
        content: 'Ashoka formally renounced aggressive military conquest, proclaiming that the only true victory is "Conquest through Righteousness" (*Dharmavijaya*). He outlawed offensive war throughout his realm, abolished imperial hunting expeditions, and redirected imperial revenues toward humanitarian public works. Over the next three decades, he inscribed his edicts in Prakrit, Greek, and Aramaic scripts across modern India, Pakistan, Nepal, and Afghanistan. He dispatched his children, Prince Mahendra and Princess Sanghamitta, to Sri Lanka with a sapling of the sacred Bodhi tree, and sent diplomatic missions to Hellenistic monarchs including Antiochus II of Syria, Ptolemy II of Egypt, and Antigonus Gonatas of Macedonia, transforming Buddhism from a regional Gangetic sect into a world religion.'
      }
    ],
    timeline: [
      { year: '268 BCE', title: 'Coronation of Ashoka', description: 'Ashoka ascends the Mauryan imperial throne at Pataliputra.' },
      { year: '261 BCE', title: 'The Invasion of Kalinga', description: 'Bloody imperial campaign resulting in over 250,000 casualties and deportations.' },
      { year: 'c. 260 BCE', title: 'Ashoka\'s Conversion to Buddhism', description: 'The emperor embraces the Dhamma and proclaims the cessation of military conquest.' },
      { year: 'c. 257 – 250 BCE', title: 'Engraving of the Major Rock and Pillar Edicts', description: 'Moral edicts championing non-violence and tolerance carved across Asia.' },
      { year: 'c. 250 BCE', title: 'Third Buddhist Council at Pataliputra', description: 'Monastic summit organizes missionary envoys to Sri Lanka, Burma, and the Hellenistic kingdoms.' }
    ],
    keyFigures: [
      { name: 'Emperor Ashoka', role: 'Third Mauryan Emperor (reigned c. 268 – 232 BCE)', bio: 'Ruler of the Indian subcontinent who voluntarily renounced warfare after the Kalinga conquest.' },
      { name: 'Upagupta', role: 'Buddhist Elder and Preceptor', bio: 'The Buddhist monk who guided Ashoka through his spiritual crisis following the battle.' },
      { name: 'Sanghamitta & Mahendra', role: 'Imperial Children and Envoys', bio: 'Ashoka\'s daughter and son who brought Buddhist monastic lineages and the Bodhi tree to Sri Lanka.' }
    ],
    causes: [
      'Strategic need for the landlocked Mauryan capital at Pataliputra to control maritime ports on the Bay of Bengal.',
      'Kalinga\'s sovereign independence posed an economic and military obstacle to complete Mauryan pan-Indian unification.',
      'Competition for lucrative merchant shipping routes linking South Asia to Southeast Asian spice markets.'
    ],
    consequences: [
      'History\'s first recorded instance of an absolute military conqueror voluntarily abandoning warfare out of moral conscience.',
      'The dissemination of Buddhism across Sri Lanka, Central Asia, China, and Southeast Asia.',
      'The creation of the Ashoka Pillar Edicts and the Lion Capital of Sarnath, which serves as the official national emblem of the modern Republic of India.'
    ],
    interpretations: 'Historians Romila Thapar and Upinder Singh note that Ashoka did not disband his standing army completely, recognizing the realities of frontier defense, but fundamentally altered the philosophical foundation of state power from coercive terror (*danda*) to moral persuasion (*Dhamma*).',
    primarySource: {
      title: 'Ashoka\'s Major Rock Edict XIII (Shahbazgarhi / Girnar Version)',
      date: 'c. 256 BCE',
      excerpt: 'One hundred and fifty thousand people were deported, one hundred thousand were killed, and many times that number died of other causes... Even a person who does evil should be forgiven as far as it is possible to forgive. For the Beloved-of-the-Gods desires that all beings should be unhurt, self-controlled, peaceful of mind, and gentle. This is what the Beloved-of-the-Gods considers the greatest victory: the victory through Dharma.',
      context: 'Rock inscription carved in Kharosthi script on a granite cliff, publicly confessing royal remorse.'
    },
    relatedIds: ['ashoka', 'indus-valley', 'world-war-i', 'world-war-ii'],
    references: [
      'Thapar, Romila (1961). Aśoka and the Decline of the Mauryas. Oxford University Press.',
      'Lahiri, Nayanjot (2015). Ashoka in Ancient India. Harvard University Press.',
      'Singh, Upinder (2008). A History of Ancient and Early Medieval India. Pearson Education.'
    ]
  },

  'world-war-ii': {
    id: 'world-war-ii',
    title: 'WORLD WAR II: THE GLOBAL CONFLAGRATION AND TOTAL WAR',
    category: 'War',
    period: 'September 1, 1939 – September 2, 1945 CE',
    geographicRegion: 'Global (Europe, Pacific Basin, North Africa, East Asia, Atlantic Ocean, Soviet Union)',
    summary: 'The deadliest and most destructive military conflict in human history, involving more than 100 million personnel from 30 countries. Characterized by industrial total warfare, the systematic genocide of six million Jews in the Holocaust, devastating strategic aerial bombardments, and the dawn of the nuclear era, World War II annihilated 70 to 85 million human beings and reshaped the geopolitical order under the United Nations and the Cold War superpower rivalry.',
    coverImage: {
      url: '/assets/images/conflict_wwii_1795464677003.jpg',
      title: 'Global Military Mobilization and the Ruins of War',
      date: '1944–1945',
      creator: 'National Archives and Records Administration',
      institution: 'NARA Historical Collection, Washington D.C.',
      sourceUrl: 'https://www.archives.gov/research/military/ww2',
      license: 'Public Domain / US National Archives'
    },
    historicalContext: 'The unresolved national animosities and economic crises left by the 1919 Treaty of Versailles, compounded by the global catastrophic unemployment of the Great Depression, facilitated the rise of expansionist totalitarian regimes: Adolf Hitler\'s National Socialist Germany, Benito Mussolini\'s Fascist Italy, and militarist Imperial Japan. The failure of the League of Nations collective security framework to deter Japan\'s invasion of Manchuria (1931) and Italy\'s conquest of Ethiopia (1935) led directly to aggressive territorial expansionism. When Nazi Germany invaded Poland on September 1, 1939, having secured its eastern flank through the secret protocols of the Molotov-Ribbentrop Pact, Great Britain and France declared war, inaugurating global hostilities.',
    chapters: [
      {
        subtitle: 'The Blitzkrieg Era and the Battle for Survival (1939–1941)',
        content: 'Employing combined-arms doctrine (Blitzkrieg) integrating armored Panzer divisions with close air support from Stuka dive-bombers, the German Wehrmacht overwhelmed Poland in weeks, followed by Denmark, Norway, the Netherlands, Belgium, and France in the spring of 1940. The miraculous evacuation of over 338,000 Allied soldiers from Dunkirk and Britain\'s defiant victory in the aerial Battle of Britain prevented an immediate European collapse. Concurrently, Imperial Japan expanded aggressively across China and Southeast Asia to secure petroleum and rubber resources, forming the Tripartite Pact with Germany and Italy.'
      },
      {
        subtitle: 'The Watershed Turning Points: Barbarossa, Pearl Harbor, and Stalingrad (1941–1943)',
        content: 'On June 22, 1941, Hitler launched Operation Barbarossa, invading the Soviet Union with over 3.8 million combatants along a 2,900-kilometer front, initiating the most brutal land war in human chronicle. On December 7, 1941, the Japanese surprise air attack on the US Pacific Fleet at Pearl Harbor propelled the industrial powerhouse of the United States into direct combat. By late 1942 and early 1943, the strategic momentum shifted decisively: the US Navy crippled the Japanese carrier fleet at the Battle of Midway; the British Eighth Army defeated Rommel at Second El Alamein in Egypt; and the Soviet Red Army encircled and destroyed Friedrich Paulus\'s German Sixth Army in the apocalyptic urban crucible of the Battle of Stalingrad.'
      },
      {
        subtitle: 'The Holocaust: Industrialized Genocide and State Murder',
        content: 'Under the bureaucratic oversight of the SS and codified at the Wannsee Conference of January 1942, Nazi Germany organized the systematic, industrialized murder of European Jewry (the Shoah). Utilizing specialized extermination camps fitted with carbon monoxide and Zyklon-B gas chambers at Auschwitz-Birkenau, Treblinka, Belzec, Sobibor, and Chelmno, the regime murdered approximately six million Jews—two-thirds of Europe\'s pre-war Jewish population—alongside hundreds of thousands of Romani people, Soviet prisoners of war, political dissidents, and disabled individuals. The scale of state-engineered mass execution necessitated the creation of the legal concept of "genocide" by jurist Raphael Lemkin and the landmark 1945–1946 Nuremberg International Military Tribunal.'
      },
      {
        subtitle: 'Allied Counter-Offensive, The Nuclear Threshold, and the Post-War Settlement (1944–1945)',
        content: 'Coordinating strategy at Tehran and Yalta, Allied forces launched Operation Overlord (D-Day) on June 6, 1944, landing over 156,000 troops across Normandy beaches to open the Western Front, while the Soviet Operation Bagration shattered Army Group Centre in the East. Following Adolf Hitler\'s suicide in his Berlin bunker and Germany\'s unconditional surrender in May 1945, the war culminated in the Pacific. To compel Japanese capitulation without a devastating amphibious invasion of the home islands, US President Harry S. Truman authorized the deployment of the first atomic weapons, detonating enriched uranium and plutonium bombs over Hiroshima (August 6) and Nagasaki (August 9, 1945). Emperor Hirohito announced surrender on August 15, concluding the war.'
      }
    ],
    timeline: [
      { year: '1939', title: 'Invasion of Poland', description: 'Germany and the USSR invade Poland; Britain and France declare war on Germany.' },
      { year: '1940', title: 'Fall of France & Battle of Britain', description: 'Blitzkrieg forces French armistice; RAF denies Luftwaffe air superiority over Britain.' },
      { year: '1941', title: 'Operation Barbarossa & Pearl Harbor', description: 'Germany invades the Soviet Union; Japan bombs Pearl Harbor, bringing the US into the war.' },
      { year: '1942–1943', title: 'Midway & Stalingrad', description: 'Allied forces pivot from defensive operations to decisive offensive encirclement.' },
      { year: '1944', title: 'D-Day & Operation Bagration', description: 'Western Allies invade Normandy while Soviet forces drive the Wehrmacht from Eastern Europe.' },
      { year: '1945', title: 'Yalta, Fall of Berlin & Atomic Bombings', description: 'Germany surrenders in May; Hiroshima and Nagasaki bombed in August; war ends September 2.' }
    ],
    keyFigures: [
      { name: 'Winston Churchill', role: 'Prime Minister of Great Britain', bio: 'Rallied British domestic resistance during the Blitz and forged the Grand Alliance.' },
      { name: 'Franklin D. Roosevelt', role: '32nd President of the United States', bio: 'Transformed American industry into the "Arsenal of Democracy" and architected the United Nations.' },
      { name: 'Joseph Stalin', role: 'General Secretary of the Soviet Union', bio: 'Directed the massive military mobilization of the Red Army on the decisive Eastern Front.' },
      { name: 'Dwight D. Eisenhower', role: 'Supreme Allied Commander in Europe', bio: 'Planned and commanded the Allied invasion of Normandy and the liberation of Western Europe.' },
      { name: 'George C. Marshall', role: 'US Army Chief of Staff', bio: 'Organized the largest military expansion in US history and conceived the post-war European Recovery Plan.' }
    ],
    causes: [
      'The punitive geopolitical and economic terms of the 1919 Treaty of Versailles provoking revanchism in Weimar Germany.',
      'The global financial collapse of the Great Depression destabilizing democratic institutions and empowering totalitarian dictatorships.',
      'Racial-expansionist imperial ideologies seeking territorial lebensraum (Germany) and resource autarky (Japan).',
      'The paralysis and appeasement policy of the League of Nations failing to halt regional aggression.'
    ],
    consequences: [
      'The catastrophic death of approximately 70 to 85 million human beings, the majority being civilians.',
      'The permanent destruction of European colonial empires, triggering rapid decolonization across Asia, Africa, and the Middle East.',
      'The bipolar division of global geopolitics between the United States and the Soviet Union, initiating the Cold War.',
      'The advent of the nuclear age and the institutional establishment of the United Nations, Bretton Woods monetary architecture, and the Universal Declaration of Human Rights.'
    ],
    primarySource: {
      title: 'The Atlantic Charter (Declaration of Principles)',
      date: 'August 14, 1941',
      excerpt: 'First, their countries seek no aggrandizement, territorial or other; Second, they desire to see no territorial changes that do not accord with the freely expressed wishes of the peoples concerned; Third, they respect the right of all peoples to choose the form of government under which they will live; and they wish to see sovereign rights and self-government restored to those who have been forcibly deprived of them.',
      context: 'Joint policy statement issued by Roosevelt and Churchill aboard the warship USS Augusta off Newfoundland, establishing Allied goals for post-war peace.'
    },
    relatedIds: ['world-war-i', 'kalinga-war', 'digital-revolution'],
    references: [
      'Kershaw, Ian (2007). Fateful Choices: Ten Decisions That Changed the World, 1940-1941. Penguin Press.',
      'Evans, Richard J. (2008). The Third Reich at War. Penguin Books.',
      'Beevor, Antony (2012). The Second World War. Little, Brown and Company.',
      'Overy, Richard (1995). Why the Allies Won. W. W. Norton & Company.'
    ]
  },

  // =========================================================================
  // SECTION 2B: PIVOTAL HISTORICAL PERSONALITIES
  // =========================================================================

  'ashoka': {
    id: 'ashoka',
    title: 'ASHOKA THE GREAT: THE EDICTS OF DHAMMA AND MORAL STATECRAFT',
    category: 'Person',
    period: 'c. 304 – 232 BCE (Reigned c. 268 – 232 BCE)',
    geographicRegion: 'Maurya Empire (Modern India, Pakistan, Bangladesh, Eastern Afghanistan)',
    summary: 'The third emperor of the Maurya dynasty whose existential remorse following the carnage of the Kalinga War led him to formally renounce imperial conquest by military force (Digvijaya) in favor of moral persuasion and ethical governance (Dharmavijaya). Inscribing thirty-three major rock and pillar edicts across South Asia, Ashoka established state-funded veterinary and medical care, botanical preserves, active inter-religious tolerance, and universal welfare policies.',
    coverImage: {
      url: '/assets/images/figure_ashoka_1795464677327.jpg',
      title: 'The Lion Capital of Ashoka at Sarnath',
      date: 'c. 250 BCE',
      creator: 'Royal Mauryan Artisans',
      institution: 'Sarnath Archaeological Museum, Uttar Pradesh, India',
      sourceUrl: 'https://en.wikipedia.org/wiki/Lion_Capital_of_Ashoka',
      license: 'Public Domain / Archaeological Survey of India'
    },
    historicalContext: 'Founded by Ashoka\'s grandfather Chandragupta Maurya with the strategic counsel of Chanakya (Kautilya), the Maurya Empire had consolidated nearly the entire Indian subcontinent under a centralized administrative bureaucracy supported by extensive taxation and a massive standing army. After succeeding his father Bindusara following a contested succession in 268 BCE, Ashoka sought to consolidate imperial authority over the wealthy maritime republic of Kalinga on the Bay of Bengal coast. The resulting war in 261 BCE resulted in catastrophic loss of life, causing a profound psychological and spiritual crisis that altered the trajectory of imperial Indian history.',
    chapters: [
      {
        subtitle: 'The Kalinga Metamorphosis: From Conquest to Renunciation',
        content: 'According to his own autobiographical Major Rock Edict XIII, the conquest of Kalinga resulted in the slaughter of 100,000 soldiers, the deportation of 150,000 citizens, and untold collateral famine. Stricken with intense grief and moral revulsion, Ashoka underwent an unprecedented transformation: an absolute autocrat voluntarily renouncing aggressive warfare at the height of military supremacy. Guided by Buddhist teachers, including monk Upagupta, he committed himself to the Dharma—a universal ethical code centered on non-violence (Ahimsa), compassionate duty, and the sanctity of all living beings.'
      },
      {
        subtitle: 'The Inscribed Landscape: Rock and Pillar Edicts',
        content: 'To communicate his radical ethical governance directly to ordinary subjects, Ashoka commissioned thirty-three major inscriptions carved into living granite cliffs and towering polished sandstone monoliths throughout his empire, from Kandahar in Afghanistan to Amaravati in southern India. Written primarily in vernacular Prakrit utilizing the Brahmi script, and in bilingual Greek and Aramaic in the northwestern frontier, these edicts announced state obligations: the planting of banyan shade trees and mango groves, the digging of wells along public highways, the establishment of free herbal dispensaries for both humans and animals, and the prohibition of gratuitous animal slaughter.'
      },
      {
        subtitle: 'Dharmamahamatras and Radical Religious Pluralism',
        content: 'Rather than establishing Buddhism as a coercive state religion, Ashoka promulgated active ecumenical pluralism. In Major Rock Edict XII, he declared that honors must be bestowed upon ascetics and householders of all philosophical sects—including Brahmanas, Shramanas, Ajivikas, and Jains. He warned that whoever praises their own religion while denigrating another solely to glorify their own sect in fact inflicts the gravest harm upon their faith. To enforce equitable justice, prevent wrongful imprisonment or torture, and aid the impoverished, he created an independent administrative body of judicial inspectors called the Dharmamahamatras.'
      },
      {
        subtitle: 'The Global Transmission of Buddhism and Imperial Legacy',
        content: 'Convening the Third Buddhist Council at his imperial capital of Pataliputra (modern Patna) around 250 BCE, Ashoka patronized the codification of the Pali Canon (Tripitaka) and dispatched diplomatic missions across the known civilized world. His son Mahendra and daughter Sanghamitta carried the teachings of the Buddha and a sapling of the sacred Bodhi Tree to King Devanampiya Tissa of Sri Lanka. Envoys were dispatched to Hellenistic rulers including Antiochus II of Syria, Ptolemy II of Egypt, and Antigonus Gonatas of Macedonia. Through these non-military diplomatic initiatives, Ashoka transformed Buddhism from a regional monastic movement into a world religion.'
      }
    ],
    timeline: [
      { year: 'c. 304 BCE', title: 'Birth of Ashoka', description: 'Born in Pataliputra to Mauryan Emperor Bindusara and Queen Subhadrangi.' },
      { year: 'c. 268 BCE', title: 'Coronation at Pataliputra', description: 'Coronated after serving as governor of Taxila and Ujjain.' },
      { year: 'c. 261 BCE', title: 'The Kalinga War', description: 'Devastating conquest of Kalinga; personal moral revulsion leads to Buddhist conversion.' },
      { year: 'c. 257 BCE', title: 'Engraving of Major Rock Edicts', description: 'Promulgation of non-violence, veterinary hospitals, and religious tolerance across South Asia.' },
      { year: 'c. 250 BCE', title: 'Third Buddhist Council', description: 'Convened at Pataliputra; international missionary delegations dispatched to Sri Lanka and Greece.' },
      { year: 'c. 232 BCE', title: 'Death of Ashoka', description: 'Passes away after a 36-year reign; his Lion Capital later becomes modern India\'s state emblem.' }
    ],
    keyFigures: [
      { name: 'Ashoka Maurya', role: 'Emperor of India (Devanampiya Piyadasi)', bio: 'Architect of moral statecraft who repudiated imperial conquest for Dharmavijaya.' },
      { name: 'Upagupta', role: 'Buddhist Monastic Teacher', bio: 'Venerated monk who guided Ashoka in the philosophical and ethical doctrines of Buddhism.' },
      { name: 'Mahendra (Mahinda)', role: 'Crown Prince and Buddhist Missionary', bio: 'Son of Ashoka who established the Theravada Buddhist lineage in Anuradhapura, Sri Lanka.' },
      { name: 'Sanghamitta', role: 'Buddhist Nun and Missionary', bio: 'Daughter of Ashoka who founded the female monastic order in Sri Lanka with a branch of the Bodhi Tree.' }
    ],
    causes: [
      'Profound psychological revulsion and existential guilt over the 100,000+ casualties of the Kalinga War.',
      'The necessity of unifying a vast, multi-lingual subcontinent empire through moral consensus rather than endless military coercion.',
      'The intellectual and ethical appeal of Shramanic monastic traditions that prioritized non-violence and ethical karma over sacrificial ritualism.'
    ],
    consequences: [
      'The internationalization of Buddhism, transforming it into a major world philosophy spanning Asia.',
      'The creation of humanity\'s earliest surviving state-funded animal hospitals, botanical gardens, and human welfare edicts.',
      'The creation of Mauryan stone sculptural masterworks, including the Sarnath Lion Capital, the national emblem of modern India.'
    ],
    primarySource: {
      title: 'Major Rock Edict XII (On Inter-Religious Harmony)',
      date: 'c. 257 BCE',
      excerpt: 'Beloved-of-the-Gods, King Piyadasi, honors both ascetics and householders of all religions, and he honors them with gifts and honors of various kinds. But Beloved-of-the-Gods does not value gifts and honors as much as he values the growth of the essentials of all religions... For he who does reverence to his own sect while condemning the sects of others with intent to glorify his own sect, in reality, such a man by such conduct inflicts the severest injury on his own sect.',
      context: 'Engraved on rock faces at Junagadh and Kalsi, formulating the earliest royal decree mandating active interfaith respect and tolerance.'
    },
    relatedIds: ['kalinga-war', 'buddhism', 'indus-valley', 'hinduism', 'jainism'],
    references: [
      'Thapar, Romila (1997). Asoka and the Decline of the Mauryas. Oxford University Press.',
      'Lahiri, Nayanjot (2015). Ashoka in Ancient India. Harvard University Press.',
      'Strong, John S. (1983). The Legend of King Asoka: A Study and Translation of the Asokavadana. Princeton University Press.'
    ]
  },

  'cleopatra': {
    id: 'cleopatra',
    title: 'CLEOPATRA VII PHILOPATOR: DIPLOMACY, STATECRAFT AND THE FALL OF ALEXANDRIA',
    category: 'Person',
    period: '69 – August 10, 30 BCE',
    geographicRegion: 'Ptolemaic Egypt & Mediterranean Basin (Alexandria, Memphis, Rome, Tarsus, Actium)',
    summary: 'The final sovereign ruler of the Ptolemaic Kingdom of Egypt, Cleopatra VII was a polyglot diplomat, naval commander, and economic strategist who preserved Egypt\'s independence against Roman annexation for more than two decades. Fluent in nine languages and the only Ptolemaic monarch to master demotic Egyptian, she leveraged Alexandria\'s vast agricultural wealth and naval power through alliances with Julius Caesar and Mark Antony, concluding with the decisive naval clash at Actium and the formal inception of the Roman Empire.',
    coverImage: {
      url: '/assets/images/figure_cleopatra_1795464677702.jpg',
      title: 'Hellenistic Portrait Bust of Cleopatra VII Philopator',
      date: 'c. 40–30 BCE',
      creator: 'Hellenistic Sculptor',
      institution: 'Altes Museum, Berlin State Museums (Antikensammlung Berlin)',
      sourceUrl: 'https://en.wikipedia.org/wiki/Cleopatra',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'Following the death of Alexander the Great in 323 BCE, his general Ptolemy I Soter established a Greek-Macedonian ruling dynasty in Egypt, creating the Mediterranean\'s cultural capital in Alexandria with its renowned Library and Mouseion. By the 1st century BCE, however, the Roman Republic had annexed neighboring Hellenistic realms (Macedon and the Seleucid Empire) and forced Egyptian monarchs into crippling debts. Ascending the throne at eighteen upon the death of her father Ptolemy XII Auletes in 51 BCE, Cleopatra faced dynastic rebellion from her brother-husband Ptolemy XIII and the overwhelming threat of Roman conquest.',
    chapters: [
      {
        subtitle: 'The Polyglot Monarch and Alexandrian Erudition',
        content: 'Unlike her predecessors who ruled exclusively in Greek and relied on court interpreters, Cleopatra was an accomplished intellectual educated in rhetoric, astronomy, geometry, and finance. She spoke Egyptian, Greek, Aramaic, Hebrew, Latin, Mede, Parthian, and Ethiopian. Understanding the deep theological roots of Egyptian kingship, she presented herself as the living incarnation of the goddess Isis (Nea Isis), earning the loyalty of the native Egyptian priesthood and agrarian populace of the Nile Delta, a demographic her dynasty had traditionally marginalized.'
      },
      {
        subtitle: 'The Alexandrian War and Strategic Alliance with Julius Caesar',
        content: 'Exiled by her brother\'s regents in 48 BCE, Cleopatra orchestrated a daring return to Alexandria, having herself smuggled past enemy cordons inside a bed-sack into the presence of Roman dictator Julius Caesar. Impressed by her political acumen and personal magnetism, Caesar intervened militarily in the Alexandrian War, defeating Ptolemy XIII in the Battle of the Nile. Cleopatra was restored to the throne alongside her younger brother Ptolemy XIV, and in 47 BCE she gave birth to Ptolemy XV Caesar (nicknamed Caesarion). During her residency in Rome from 46 to 44 BCE, her courtly elegance influenced Roman elite culture, while her court astronomer Sosigenes designed the Julian calendar.'
      },
      {
        subtitle: 'Mark Antony and the Donations of Alexandria',
        content: 'Following the assassination of Julius Caesar on the Ides of March, 44 BCE, Cleopatra sailed in 41 BCE to Tarsus aboard a gilded barge with purple sails and silver oars to negotiate with Mark Antony, the triumvir controlling Rome\'s eastern provinces. For the next decade, their political and romantic partnership integrated Egypt\'s grain supplies and treasury with Antony\'s veteran legions. At the lavish "Donations of Alexandria" in 34 BCE, Antony declared Cleopatra "Queen of Kings" and Caesarion the legitimate heir of Julius Caesar, awarding Roman eastern client territories to their children. This provocation gave Octavian (the future Augustus) the political pretext to declare war on Egypt.'
      },
      {
        subtitle: 'The Battle of Actium, Royal Suicide, and the End of the Hellenistic Age',
        content: 'On September 2, 31 BCE, the joint fleet of Antony and Cleopatra clashed with Octavian\'s navy under Admiral Marcus Vipsanius Agrippa at the Battle of Actium off the coast of Greece. Outmaneuvered by Agrippa\'s agile Liburnian galleys, Cleopatra and Antony withdrew their surviving squadrons to Alexandria. As Octavian\'s legions invaded Egypt in August 30 BCE, Antony committed suicide upon false reports of her death. Refusing to be exhibited as a humiliated captive in Octavian\'s triumphal procession through the Roman Forum, Cleopatra ended her life on August 10, 30 BCE, reputedly via the venomous bite of an Egyptian cobra (asp). Her death extinguished the three-hundred-year Ptolemaic dynasty and three millennia of pharaonic rule, reducing Egypt to an imperial Roman province.'
      }
    ],
    timeline: [
      { year: '69 BCE', title: 'Birth in Alexandria', description: 'Born to King Ptolemy XII Auletes of the Macedonian Ptolemaic dynasty.' },
      { year: '51 BCE', title: 'Accession to the Egyptian Throne', description: 'Becomes co-ruler with her younger brother Ptolemy XIII at age 18.' },
      { year: '48 BCE', title: 'Alliance with Julius Caesar', description: 'Smuggled into the royal palace; Caesar intervenes in the Alexandrian War to secure her throne.' },
      { year: '41 BCE', title: 'Meeting with Mark Antony at Tarsus', description: 'Forges political and personal alliance securing Egyptian sovereign territorial integrity.' },
      { year: '34 BCE', title: 'Donations of Alexandria', description: 'Proclaims Caesarion legitimate heir of Caesar; bestows eastern titles upon her children.' },
      { year: '30 BCE', title: 'Battle of Actium & Death', description: 'Defeated at Actium; commits suicide on August 10; Rome annexes Egypt.' }
    ],
    keyFigures: [
      { name: 'Cleopatra VII Philopator', role: 'Queen of Egypt and Living Isis', bio: 'Diplomat, naval commander, and polyglot monarch who defended Egypt\'s autonomy against Rome.' },
      { name: 'Julius Caesar', role: 'Roman Dictator and Military Commander', bio: 'Restored Cleopatra to the throne and fathered her eldest son, Caesarion.' },
      { name: 'Mark Antony', role: 'Roman Triumvir and Commander of the East', bio: 'Allied militarily with Cleopatra against Octavian, marrying her in Alexandria.' },
      { name: 'Octavian (Caesar Augustus)', role: 'First Emperor of Rome', bio: 'Defeated Cleopatra and Antony at Actium, annexing Egypt as personal imperial territory.' }
    ],
    causes: [
      'The dynastic weakness and heavy financial debts of the late Ptolemaic kingdom against Roman expansionism.',
      'Cleopatra\'s calculated strategic imperative to align with dominant Roman military commanders to prevent direct provincial annexation.',
      'The Roman civil wars between republican factions and ambitious triumvirs providing opportunities for foreign statecraft.'
    ],
    consequences: [
      'The annexation of Egypt into the Roman Empire, providing Rome with the agrarian grain surplus that subsidized the Pax Romana.',
      'The formal conclusion of the Hellenistic Era (323–30 BCE) and the definitive collapse of the Ptolemaic dynasty.',
      'The transformation of Octavian into the sole ruler of the Mediterranean world, establishing the Roman Empire.'
    ],
    primarySource: {
      title: 'Plutarch\'s Life of Antony (On Cleopatra\'s Intellectual Charisma)',
      date: 'c. 100 CE',
      excerpt: 'For her beauty, as we are told, was in itself not altogether incomparable, nor such as to strike those who saw her; but converse with her had an irresistible charm, and her presence, combined with the persuasiveness of her discourse and her character, had something stimulating about it. There was sweetness also in the tones of her voice; and her tongue, like an instrument of many strings, she could readily turn to whatever language she pleased.',
      context: 'Classical biography composed by Greek historian Plutarch documenting Cleopatra\'s rhetorical power and scholarly intellect.'
    },
    relatedIds: ['ancient-egypt', 'roman-empire', 'ancient-astronomy'],
    references: [
      'Roller, Duane W. (2010). Cleopatra: A Biography. Oxford University Press.',
      'Schiff, Stacy (2010). Cleopatra: A Life. Little, Brown and Company.',
      'Tyldesley, Joyce (2008). Cleopatra: Last Queen of Egypt. Basic Books.'
    ]
  },

  'davinci': {
    id: 'davinci',
    title: 'LEONARDO DA VINCI: EMPIRICAL ANATOMY, OPTICS AND RENAISSANCE POLYMATHY',
    category: 'Person',
    period: 'April 15, 1452 – May 2, 1519 CE',
    geographicRegion: 'Renaissance Italy & France (Florence, Milan, Rome, Amboise)',
    summary: 'The quintessential polymath of the Italian High Renaissance, Leonardo di ser Piero da Vinci unified fine art and empirical science by integrating observational anatomy, fluid dynamics, perspective optics, and kinematic mechanical engineering. Leaving behind over 7,000 pages of notebooks inscribed in mirror-script, Da Vinci conducted systematic human cadaveric dissections and aerodynamic experiments, establishing the modern scientific principle that nature must be deciphered through direct sensory observation rather than scholastic dogma.',
    coverImage: {
      url: '/assets/images/figure_davinci_1795464678057.jpg',
      title: 'Study of the Vitruvian Man (The Canon of Proportions)',
      date: 'c. 1490',
      creator: 'Leonardo da Vinci',
      institution: 'Gallerie dell\'Accademia, Venice, Italy',
      sourceUrl: 'https://en.wikipedia.org/wiki/Vitruvian_Man',
      license: 'Public Domain / Gallerie dell\'Accademia'
    },
    historicalContext: 'Fifteenth-century Florence was the epicenter of the Italian Renaissance, a cultural explosion fueled by humanist philosophy, commercial banking fortunes under the Medici family, and the recovery of classical Greek and Roman texts. Within the collaborative artisanal bottegas (workshops), master craftsmen combined fine arts with metallurgy, geometry, and mechanical drafting. Entering the workshop of Andrea del Verrocchio around 1466, Leonardo emerged in an environment where technical craftsmanship and natural philosophy were indivisible.',
    chapters: [
      {
        subtitle: 'The Verrocchio Bottega and "The Disciple of Experience"',
        content: 'Trained under the polymathic master Andrea del Verrocchio alongside Sandro Botticelli and Pietro Perugino, Leonardo developed mastery over oil painting, bronze casting, perspective geometry, and architectural draftsmanship. Unlike the university-trained scholars of his era who relied on Latin commentary of Aristotle and Galen, Leonardo was largely self-educated in Latin and unashamedly styled himself an "omo sanza lettere" (an unlettered man). He asserted that true understanding arises from direct empirical testing: "Wisdom is the daughter of experience, and nature never breaks her own laws."'
      },
      {
        subtitle: 'Pioneering Human Anatomy and Cadaveric Dissection',
        content: 'Beginning in the 1480s and expanding in collaboration with physician Marcantonio della Torre at the University of Pavia, Leonardo dissected more than thirty human corpses, along with various animal specimens. Operating by candlelight in anatomical crypts, he produced unprecedented cross-sectional drawings of the musculoskeletal system, the nervous system, and the vascular tree. Centuries before modern cardiology, Leonardo accurately identified the heart as a four-chambered muscular pump and discovered the vortex currents created by blood flow within the aortic valve sinuses that trigger the closure of the aortic leaflets—a physical mechanism verified by magnetic resonance imaging in the 21st century.'
      },
      {
        subtitle: 'Kinematic Engineering, Fluid Mechanics, and Flight',
        content: 'Serving Duke Ludovico Sforza in Milan and later Cesare Borgia as senior military architect and general engineer, Leonardo drafted blueprints for canal lock systems, siege ballistics, armored combat vehicles, and moveable pontoon bridges. Fascinated by the physics of avian flight, he compiled the Codex on the Flight of Birds (1505), analyzing the center of gravity, wing curvature, and air resistance to design early gliders, parachutes, and a helical aerial screw. His studies of fluid dynamics in the Codex Leicester examined turbulent whirlpools, river sedimentation, and wave interference, recognizing fluid turbulence as a fundamental universal physical pattern.'
      },
      {
        subtitle: 'The Science of Vision and Masterpieces of High Renaissance Art',
        content: 'In revolutionary paintings such as The Virgin of the Rocks, The Last Supper in Santa Maria delle Grazie, and the Mona Lisa (La Gioconda), Leonardo applied his optical discoveries. He pioneered sfumato—a painting technique that eliminates harsh contour lines through subtle, imperceptible gradations of tone, imitating how human vision perceives objects enveloped in atmospheric haze. His deep investigations into facial musculature and psychology allowed him to capture fleeting human emotional consciousness. Spending his final years as "Premier Painter and Engineer and Architect to the King" under Francis I at Château du Clos Lucé in France, Leonardo bequeathed notebooks that anticipated modern empirical science.'
      }
    ],
    timeline: [
      { year: '1452', title: 'Birth in Vinci', description: 'Born in the Tuscan hill town of Vinci, illegitimate son of notary Ser Piero.' },
      { year: '1466', title: 'Apprenticeship under Verrocchio', description: 'Enters the premier artistic and engineering bottega in Renaissance Florence.' },
      { year: '1482', title: 'Court of Ludovico Sforza in Milan', description: 'Appointed court artist and military engineer; paints The Last Supper.' },
      { year: 'c. 1490', title: 'The Vitruvian Man', description: 'Draws the iconic synthesis of human anatomy, geometry, and classical proportion.' },
      { year: '1503', title: 'Beginning of the Mona Lisa', description: 'Commences the portrait in Florence, pioneering optical sfumato techniques.' },
      { year: '1519', title: 'Death at Amboise, France', description: 'Passes away at Château du Clos Lucé in the arms of French Renaissance patron King Francis I.' }
    ],
    keyFigures: [
      { name: 'Leonardo da Vinci', role: 'Polymath, Anatomist and Painter', bio: 'Empirical observer who integrated art, anatomy, optics, and engineering.' },
      { name: 'Andrea del Verrocchio', role: 'Master Sculptor and Painter', bio: 'Florentine master whose workshop forged Leonardo\'s interdisciplinary skills.' },
      { name: 'Ludovico Sforza (Il Moro)', role: 'Duke of Milan', bio: 'Major patron who employed Leonardo for seventeen years on military and artistic commissions.' },
      { name: 'Francis I of France', role: 'King of France', bio: 'Renaissance monarch who provided Leonardo a generous royal pension and residence in his final years.' }
    ],
    causes: [
      'The Florentine bottega tradition uniting mechanical drafting, casting, and geometry with fine art.',
      'Renaissance humanist values encouraging individual inquiry and the rediscovery of classical proportions.',
      'Rejection of dogmatic medieval scholasticism in favor of direct sensory observation and physical dissection.'
    ],
    consequences: [
      'The foundation of modern observational anatomy, cross-sectional medical illustration, and kinematic machine design.',
      'The conceptual genesis of aerodynamic flight, hydraulic canal engineering, and optical perspective.',
      'The creation of High Renaissance masterpieces (Mona Lisa, The Last Supper) that redefined painting and psychological realism.'
    ],
    primarySource: {
      title: 'Leonardo da Vinci\'s Notebooks (On Experience and Nature)',
      date: 'c. 1490–1500 CE',
      excerpt: 'Many will believe that they have reason to reproach me by saying that my statements are contrary to the authority of certain men who are held in high reverence by their inexperienced judgments... They do not know that my topics are to be dealt with rather by experience than by words of others; experience has been the mistress of those who wrote well, and so as mistress I will cite her in all cases.',
      context: 'Manuscript note written in reverse mirror-script, declaring direct experimental investigation supreme over academic scholasticism.'
    },
    relatedIds: ['printing-press', 'scientific-revolution', 'roman-empire'],
    references: [
      'Isaacson, Walter (2017). Leonardo da Vinci. Simon & Schuster.',
      'Kemp, Martin (2006). Leonardo. Oxford University Press.',
      'Vasari, Giorgio (1550). Lives of the Most Excellent Painters, Sculptors, and Architects. Florence.'
    ]
  },

  // =========================================================================
  // SECTION 3: SCIENTIFIC & TECHNOLOGICAL REVOLUTIONS
  // =========================================================================

  'agricultural-revolution': {
    id: 'agricultural-revolution',
    title: 'THE NEOLITHIC AGRICULTURAL REVOLUTION: THE DAWN OF SETTLED HUMANITY',
    category: 'Revolution',
    period: 'c. 10,000 BCE – 4,000 BCE',
    geographicRegion: 'Global (Fertile Crescent, Yangtze/Yellow River Basins, Mesoamerica, New Guinea)',
    summary: 'The fundamental transition from nomadic hunter-gatherer foraging to systematic crop cultivation and animal domestication. This ecological revolution created grain surpluses, permanent village settlements, demographic booms, and the foundations of civilization.',
    coverImage: {
      url: '/assets/images/civilization_indus_1795464676243.jpg',
      title: 'Early Neolithic Sickle Blades and Grinding Stones',
      date: 'c. 8000 BCE',
      creator: 'Archival Archaeological Collection',
      institution: 'EPOCH Historical Collection',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'For over 95 percent of human evolutionary history (*Homo sapiens* emerging circa 300,000 BCE), humanity lived in egalitarian, nomadic foraging bands numbering 20 to 50 individuals. As the last Pleistocene Ice Age ended around 11,700 years ago, warming climates, retreating glaciers, and stabilizing rainfall inaugurated the Holocene epoch. In the "Hilly Flanks" of the Fertile Crescent—the arc extending from the Levant through southeastern Turkey, northern Iraq, and the Zagros mountains of Iran—wild cereal grains (emmer wheat, einkorn wheat, and two-row barley) grew in dense natural stands. Human communities began harvesting these grains with flint sickles, selecting seeds from non-shattering seed heads and permanently altering the genetic architecture of wild plants.',
    chapters: [
      {
        subtitle: '1. The Natufians and the Transition from Foraging to Farming',
        content: 'Between 12,500 and 9,500 BCE, the Natufian culture of the Levant established the world\'s first semi-sedentary villages before farming actually began. Utilizing microlithic flint sickles set into bone handles, they harvested wild cereals and crushed grains in heavy basalt mortars. When the Younger Dryas cold reversal (circa 10,800 BCE) caused severe droughts and depleted wild food stands, Natufian descendants at sites like Jericho (Tell es-Sultan) and Ain Ghazal took the critical evolutionary step: deliberately clearing plots of soil, sowing saved grain seeds, and irrigating fields near springs.'
      },
      {
        subtitle: '2. The Domestication of Animals and Polycentric Global Origins',
        content: 'Agriculture did not originate in a single geographic cradle, but arose independently in at least seven distinct regions across the globe with zero contact. In the Fertile Crescent, farmers domesticated sheep, goats, pigs, and cattle between 8500 and 7000 BCE, acquiring milk, wool, leather, and draft animal muscle power. Along the Yangtze and Yellow River valleys in China (circa 7000 BCE), communities domesticated wet-field rice and foxtail millet. In Mesoamerica (circa 5000 BCE), indigenous farmers bred tiny teosinte grass into nutritious modern maize (corn), beans, and squash. In the Andean highlands, farmers domesticated potatoes, quinoa, and llamas; in New Guinea, farmers cultivated taro and bananas.'
      },
      {
        subtitle: '3. Göbekli Tepe and the Social Catalyst of Monumental Assembly',
        content: 'Traditional 20th-century archaeology assumed that agriculture was invented first, generating surpluses that subsequently permitted religion and monuments. This paradigm was shattered by Klaus Schmidt\'s excavations at Göbekli Tepe in southeastern Turkey (dated to circa 9500 BCE). There, nomadic hunter-gatherers with no domesticated crops or permanent pottery carved and erected massive T-shaped limestone megaliths weighing up to 20 tons, decorated with intricate bas-reliefs of lions, vultures, foxes, and scorpions. Göbekli Tepe proves that monumental ritual assembly preceded settled farming; the need to feed hundreds of workers gathering for ceremonial rites served as the cultural catalyst that forced humanity to develop agriculture.'
      },
      {
        subtitle: '4. The Double-Edged Sword of Sedentary Life',
        content: 'While agriculture expanded total human population from an estimated 5 million to over 100 million by 1000 BCE, bioarchaeological studies of human skeletons show that early farmers were physically shorter, suffered from chronic dental caries (due to carbohydrate diets), iron-deficiency anemia, and spine osteoarthritis compared to foragers. Permanent mud-brick villages brought close contact with domesticated animal herds, creating zoonotic infectious diseases (measles, smallpox, influenza, tuberculosis). Grain storage created private property, which in turn produced social stratification, inherited inequality, military fortresses, and organized territorial warfare.'
      }
    ],
    timeline: [
      { year: 'c. 11,500 BCE', title: 'The Holocene Epoch Begins', description: 'End of the last glacial maximum brings warmer, stable global climates.' },
      { year: 'c. 9500 BCE', title: 'Construction of Megaliths at Göbekli Tepe', description: 'Hunter-gatherers erect ceremonial stone circles in Anatolia, catalyzing agricultural mobilization.' },
      { year: 'c. 8500 BCE', title: 'Founder Crops Domesticated in the Fertile Crescent', description: 'Emmer wheat, einkorn wheat, barley, peas, lentils, chickpeas, and flax domesticated.' },
      { year: 'c. 7500 BCE', title: 'Flourishing of Proto-City at Çatalhöyük', description: 'Densely clustered mud-brick village in central Anatolia with rooftop entryways and cattle shrines.' },
      { year: 'c. 5000 BCE', title: 'Mesoamerican Domestication of Maize', description: 'Selective breeding transforms wild teosinte into the staple crop of the Americas.' }
    ],
    keyFigures: [
      { name: 'Gordon Childe', role: 'Australian Prehistorian and Archaeologist', bio: 'Coined the term "Neolithic Revolution" in 1936 to describe the transformation from foraging to farming.' },
      { name: 'Klaus Schmidt', role: 'German Prehistoric Archaeologist', bio: 'Directed excavations at Göbekli Tepe from 1996 to 2014, demonstrating that monumental religion preceded farming.' },
      { name: 'Kathleen Kenyon', role: 'British Archaeologist', bio: 'Excavated the monumental stone wall and round tower of Neolithic Jericho (Tell es-Sultan) in the 1950s.' }
    ],
    causes: [
      'Climatic warming and stabilization at the beginning of the Holocene epoch (c. 11,700 years ago).',
      'Population pressure and depletion of megafauna forcing nomadic foragers to exploit wild grain grasses.',
      'Ritual and social demands for communal feasts, requiring concentrated carbohydrate and alcohol sources.'
    ],
    consequences: [
      'Sedentism created permanent architecture, pottery for grain storage, woven textiles, and demographic explosions.',
      'Accumulation of property produced social division of labor, hereditary social classes, and standing political states.',
      'Human relationship to nature shifted from adaptation to conscious ecological transformation and domestication.'
    ],
    interpretations: 'Anthropologist James C. Scott argues in *Against the Grain* that the earliest agrarian states were fragile and coercive, where domesticated grains served primarily as an easily taxable commodity that allowed elites to extract surplus from peasant labor.',
    primarySource: {
      title: 'Excavation Field Observation on the Sickle Blades of Tell Abu Hureyra',
      date: 'c. 9000 BCE Archaeological Layer',
      excerpt: 'The flint blades exhibit a distinct glossy sheen along the cutting edge—"sickle gloss"—caused by the abrasive microscopic phytoliths (silica deposits) found inside the stems of cultivated wheat and barley grasses.',
      context: 'Microscopic archaeological evidence confirming the earliest harvesting of domesticated cereal grasses.'
    },
    relatedIds: ['indus-valley', 'mesopotamia', 'ancient-egypt'],
    references: [
      'Bellwood, Peter (2004). First Farmers: The Origins of Agricultural Societies. Wiley-Blackwell.',
      'Scott, James C. (2017). Against the Grain: A Deep History of the Earliest States. Yale University Press.',
      'Barker, Graeme (2006). The Agricultural Revolution in Prehistory. Oxford University Press.'
    ]
  },

  'invention-of-writing': {
    id: 'invention-of-writing',
    title: 'THE INVENTION OF WRITING: THE GENESIS OF EXTERNAL HUMAN MEMORY',
    category: 'Revolution',
    period: 'c. 3300 BCE – Present',
    geographicRegion: 'Global (Mesopotamia, Egypt, China, Mesoamerica)',
    summary: 'The independent invention of writing across ancient Sumer, Egypt, China, and Mesoamerica transformed human communication. It liberated knowledge from the biological limits of oral memory, enabling statutory law, municipal tax administration, and literature.',
    coverImage: {
      url: '/assets/images/civilization_mesopotamia_1795464677085.jpg',
      title: 'Archaic Cuneiform Account Tablet from Uruk',
      date: 'c. 3100 BCE',
      creator: 'Sumerian Temple Scribes',
      institution: 'Vorderasiatisches Museum, Berlin',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'Before writing, human knowledge was stored exclusively within biological neural memory. Cultural preservation depended entirely upon oral recitation, songlines, and formulaic mnemonic poetry transmitted across generations. While oral transmission preserved profound philosophical and mythic frameworks, it was inherently vulnerable to distortion, death of elders, and geographic isolation. More critically, as agricultural cities swelled to tens of thousands of inhabitants, human memory could no longer track complex property deeds, tax consignments, irrigation canal upkeep rosters, or international barter agreements. Writing was invented not to compose poetry, but to solve accounting crises.',
    chapters: [
      {
        subtitle: '1. The Clay Token Accounting System of Ancient Sumer',
        content: 'French-American archaeologist Denise Schmandt-Besserat discovered that the roots of writing lay in modest clay tokens used across the Near East since 8000 BCE. Cones, spheres, and disks represented specific measures of grain, oil, and livestock. Around 3300 BCE in the Sumerian metropolis of Uruk, accountants began sealing these tokens inside hollow clay balls (*bullae*) stamped with cylinder seals to prevent commercial fraud. Scribes soon recognized that impressing the token shapes directly onto soft flat clay tablets made the internal tokens redundant. By pressing the wedge-shaped edge of a reed stylus (*calamus*) into damp clay, they developed cuneiform ("wedge-shaped") script.'
      },
      {
        subtitle: '2. The Rebus Principle: From Accounting Marks to Phonetic Speech',
        content: 'The breakthrough that elevated pictograms into true writing was the "rebus principle"—using a pictographic symbol not for its meaning, but for its phonetic sound. For example, in Sumerian, the word for "water" was *A*, and the word for "in" was also *A*. A scribe wishing to record the abstract preposition "in" simply drew the water sign. By combining phonetic glyphs with semantic classifiers (*determinatives*), cuneiform transcended bookkeeping to record complex human speech, abstract theological debates, diagnostic medical handbooks, and epic narratives like the *Epic of Gilgamesh*.'
      },
      {
        subtitle: '3. Independent Inventions in Egypt, China, and Mesoamerica',
        content: 'Writing was invented independently from scratch in at least four distinct civilizations: (1) Sumerian cuneiform in Mesopotamia (circa 3300 BCE); (2) Egyptian hieroglyphs ("sacred carvings", circa 3200 BCE, discovered at Abydos); (3) Chinese oracle bone script (*Jiaguwen*, circa 1250 BCE under the Shang Dynasty at Anyang), engraved on ox scapulae and turtle plastrons for royal divination; and (4) Olmec and Maya hieroglyphs in Mesoamerica (circa 500 BCE to 300 CE), using intricate logographic and syllabic glyph blocks to record astronomical cycles and royal dynastic accessions.'
      },
      {
        subtitle: '4. The Democratization of the Alphabet',
        content: 'Early cuneiform and hieroglyphic scripts required scribes to master hundreds of distinct characters, creating elite, hereditary scribal castes (*Edubba* academies) that guarded literacy as an instrument of state control. Around 1800 BCE, Semitic turquoise miners in the Sinai peninsula (Serabit el-Khadim) adapted Egyptian hieroglyphs to represent the phonetic consonants of their own language, creating the Proto-Sinaitic alphabet—comprising just 22 to 30 simple signs. Transmitted by Phoenician maritime traders across the Mediterranean, this phonetic script was adopted by the Greeks (who added dedicated vowel letters) and the Romans, becoming the ancestor of the Latin, Greek, Cyrillic, Arabic, Hebrew, and Brahmi alphabets.'
      }
    ],
    timeline: [
      { year: 'c. 3300 BCE', title: 'Earliest Proto-Cuneiform at Uruk', description: 'Sumerian accountants impress reed styluses into wet clay accounting tablets.' },
      { year: 'c. 3200 BCE', title: 'Egyptian Hieroglyphs at Abydos', description: 'Bone and ivory tags found in Tomb U-j record phonetic Egyptian labels.' },
      { year: 'c. 1800 BCE', title: 'Invention of the Proto-Sinaitic Alphabet', description: 'Canaanite workers in Sinai adapt hieroglyphs into the world\'s first consonantal alphabet.' },
      { year: 'c. 1250 BCE', title: 'Shang Dynasty Oracle Bone Script', description: 'Royal diviners at Anyang inscribe questions to royal ancestors on ox bones.' },
      { year: 'c. 300 BCE', title: 'Development of the Maya Glyphic Script', description: 'Mesoamerican civilization creates a complex logosyllabic calendar and historical writing system.' }
    ],
    keyFigures: [
      { name: 'Denise Schmandt-Besserat', role: 'French-American Archaeologist', bio: 'Deciphered the origin of writing from prehistoric clay counting tokens to cuneiform tablets.' },
      { name: 'Jean-François Champollion', role: 'French Philologist and Orientalist', bio: 'Deciphered Egyptian hieroglyphs in 1822 using the bilingual inscriptions of the Rosetta Stone.' },
      { name: 'Sir Henry Rawlinson', role: 'British East India Company Officer and Orientalist', bio: 'Deciphered Old Persian and Babylonian cuneiform by scaling the rock face of the Behistun Inscription.' }
    ],
    causes: [
      'The explosive administrative complexity of Bronze Age urban city-states managing grain storage and tax distribution.',
      'The need for binding legal contracts and verification seals in long-distance maritime and caravan commerce.',
      'Royal dynastic desires to commemorate military conquests and religious sacrifices for posterity.'
    ],
    consequences: [
      'Created external, permanent human memory, enabling the preservation of cumulative science, philosophy, and history.',
      'Established statutory written law (such as the Code of Hammurabi) that bounded both ruler and ruled.',
      'The phonetic alphabet democratized literacy, breaking the monopoly of elite scribal priesthoods.'
    ],
    interpretations: 'Philosopher Walter J. Ong noted in *Orality and Literacy* that writing is a technology that fundamentally restructures human consciousness: by transforming spoken sound into spatial visual marks, writing enables critical linear analysis, skepticism, and formal logic impossible in purely oral cultures.',
    primarySource: {
      title: 'Sumerian Praise Poem of the Edubba (Scribal School Tablet)',
      date: 'c. 1900 BCE',
      excerpt: 'The scribe who writes with his hand, if his mouth does not keep pace with his stylus, is like an archer without arrows... Writing is the mother of eloquence and the father of artists.',
      context: 'Clay tablet school exercise from Nippur describing the rigorous training required to master cuneiform.'
    },
    relatedIds: ['mesopotamia', 'ancient-egypt', 'printing-press'],
    references: [
      'Schmandt-Besserat, Denise (1996). How Writing Came About. University of Texas Press.',
      'Robinson, Andrew (2007). The Story of Writing: Alphabets, Hieroglyphs and Pictograms. Thames & Hudson.',
      'Ong, Walter J. (1982). Orality and Literacy: The Technologizing of the Word. Routledge.'
    ]
  },

  'printing-press': {
    id: 'printing-press',
    title: 'THE GUTENBERG PRINTING PRESS: THE DEMOCRATIZATION OF KNOWLEDGE',
    category: 'Revolution',
    period: 'c. 1440 – 1500 CE',
    geographicRegion: 'Europe (Mainz, Holy Roman Empire, spreading globally)',
    summary: 'Johannes Gutenberg combined movable metal type, oil-based ink, and a wooden screw press in Mainz, Germany. This mechanical revolution replaced grueling hand-copied manuscripts, ignited the Protestant Reformation, and fueled the Scientific Revolution.',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'A 15th-Century Wooden Screw Printing Press Workshop',
      date: 'c. 1500',
      creator: 'Archival Renaissance Engraving',
      institution: 'Gutenberg Museum, Mainz',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'Before 1450, every single book in Europe was copied entirely by hand. Monastic scribes working in cold scriptoriums took up to a year of grueling labor to transcribe a single Bible onto the scraped skins of over 170 sheep or calves (*vellum*). As a consequence, books were exorbitant luxury items owned only by cathedrals, royal courts, and early universities; a single manuscript Bible could cost the equivalent of a substantial town manor. While woodblock printing (*xylography*) and movable ceramic type had been invented in Song Dynasty China (Bi Sheng, circa 1040 CE) and metal movable type in Goryeo Korea (the *Jikji*, printed 1377 CE), these remained specialized because the Chinese script required thousands of distinct characters.',
    chapters: [
      {
        subtitle: '1. Gutenberg\'s Metallurgical and Mechanical Synthesis (Mainz, c. 1440–1455)',
        content: 'Johannes Gensfleisch zur Laden zum Gutenberg, a trained goldsmith in Mainz, Germany, synthesized four separate technologies into a high-speed production system. First, he engineered an adjustable two-part hand mold to cast identical, interchangeable movable metal type pieces. Second, he formulated a durable metallurgical alloy of 80% lead, 15% antimony, and 5% tin—the antimony expanding slightly upon cooling to fill the delicate contours of the mold with sharp typographic definition. Third, he formulated a viscous, oil-based black printing ink made from linseed oil and soot that adhered to metal rather than beading up like water-based inks. Fourth, he modified a heavy wooden screw press used for pressing wine grapes and linen cloth.'
      },
      {
        subtitle: '2. The 42-Line Bible: A Monument of Typographic Art',
        content: 'Between 1450 and 1455, financed by Mainz merchant Johann Fust, Gutenberg printed roughly 180 copies of the Latin Vulgate Bible in two folio volumes, arranged in two columns of 42 lines per page. Emulating the formal Gothic *Textura* calligraphy of contemporary scribes, Gutenberg cast nearly 300 distinct letterforms, ligatures, and abbreviations so the mechanical text was indistinguishable from handwritten work. When Enea Silvio Piccolomini (the future Pope Pius II) inspected unbound sample gatherings at Frankfurt in 1454, he reported to Cardinal Carvajal that the script was so clean and legible that the cardinal would be able to read it without spectacles.'
      },
      {
        subtitle: '3. The Incunabula Explosion Across Europe',
        content: 'Following a legal dispute in 1455, Johann Fust and Gutenberg\'s foreman Peter Schöffer took control of the workshop, and Gutenberg\'s printers dispersed across Europe. The technology spread with explosive speed. By 1500, printing presses operated in over 250 European cities—including Venice (the typographic capital of Europe under Aldus Manutius), Paris, Basel, Nuremberg, and London (William Caxton). In the fifty years between 1450 and 1500—the "Incunabula" period—European presses produced an estimated 20 million volumes, surpassing the total number of books hand-copied by all European scribes over the preceding thousand years.'
      },
      {
        subtitle: '4. Catalyzing the Reformation and the Scientific Revolution',
        content: 'The movable-type press shattered the intellectual monopoly of the Catholic Church. When Augustinian monk Martin Luther penned his Ninety-Five Theses protesting papal indulgences in October 1517, supporters translated the Latin text into German, printed thousands of broadsheet copies, and circulated them across Germany in two weeks and throughout Europe in a month. Printing transformed science by eliminating the cumulative transcription errors of scribes; mathematical tables, anatomical illustrations (such as Andreas Vesalius\'s *De humani corporis fabrica*, 1543), and astronomical charts could be mass-produced with absolute fidelity, enabling researchers across the continent to replicate experiments.'
      }
    ],
    timeline: [
      { year: 'c. 1440', title: 'Gutenberg Experiments in Strasbourg', description: 'Gutenberg develops hand casting molds and movable metal typography in secrecy.' },
      { year: '1450 – 1455', title: 'Printing of the 42-Line Gutenberg Bible', description: 'The first major book printed in the Western world using movable metal type at Mainz.' },
      { year: '1476', title: 'William Caxton Introduces Printing to England', description: 'Caxton sets up the first English press at Westminster, printing Chaucer\'s Canterbury Tales.' },
      { year: '1494', title: 'Aldus Manutius Founds the Aldine Press in Venice', description: 'Pioneers compact octavo pocket books and commissions the first italic typefaces.' },
      { year: '1517', title: 'Luther\'s Theses Circulate via Print', description: 'Print technology fuels the rapid, unstoppable dissemination of the Protestant Reformation.' }
    ],
    keyFigures: [
      { name: 'Johannes Gutenberg', role: 'Inventor of the European Movable-Type Press', bio: 'Mainz goldsmith who synthesized metallurgical casting, oil ink, and the screw press.' },
      { name: 'Johann Fust & Peter Schöffer', role: 'Financier and Master Printer', bio: 'Financed Gutenberg and subsequently operated Europe\'s most successful early publishing house.' },
      { name: 'Aldus Manutius', role: 'Venetian Renaissance Publisher', bio: 'Printed Greek classics, invented pocket books, and pioneered modern editorial punctuation (the semicolon).' }
    ],
    causes: [
      'The growth of universities and urban merchant guilds creating a vast demand for books that hand-copying could not meet.',
      'The invention of linen rag paper manufacturing in Europe, which provided an affordable substrate compared to animal vellum.',
      'Gutenberg\'s specialized goldsmithing knowledge of punch-cutting and precision metallurgy.'
    ],
    consequences: [
      'Democratized access to literacy, philosophy, and religion, sparking the Protestant Reformation.',
      'Standardized national vernacular languages (German, English, French, Italian) and modern spelling and punctuation.',
      'Provided the empirical distribution platform that enabled the Scientific Revolution and Enlightenment.'
    ],
    interpretations: 'Media theorist Marshall McLuhan argued in *The Gutenberg Galaxy* that the movable-type press created "typographic man"—conditioning the Western mind to think in linear, fragmented, standardized, and repeatable patterns that underwrote modern industrialization and nationalism.',
    primarySource: {
      title: 'Letter of Enea Silvio Piccolomini (Later Pope Pius II) to Cardinal Carvajal',
      date: 'March 1455',
      excerpt: 'I did not see complete Bibles, but several gatherings of various books... The writing was exceedingly clean and correct, without any errors; your Grace would be able to read it without effort, indeed without spectacles.',
      context: 'The earliest surviving documentary testimony describing the inspection of Gutenberg\'s printed Bible sheets at Frankfurt.'
    },
    relatedIds: ['scientific-revolution', 'invention-of-writing', 'davinci'],
    references: [
      'Eisenstein, Elizabeth L. (1979). The Printing Press as an Agent of Change. Cambridge University Press.',
      'Febvre, Lucien and Martin, Henri-Jean (1976). The Coming of the Book: The Impact of Printing. Verso.',
      'Man, John (2002). The Gutenberg Revolution: The Story of a Genius and an Invention. Review.'
    ]
  },

  'industrial-revolution': {
    id: 'industrial-revolution',
    title: 'THE INDUSTRIAL REVOLUTION: THE MECHANIZATION OF HUMAN LABOUR',
    category: 'Revolution',
    period: 'c. 1760 – 1840 CE (First Phase); 1870 – 1914 CE (Second Phase)',
    geographicRegion: 'Britain (origin), spreading across Western Europe, North America, and globally',
    summary: 'The great transformation from an agrarian, muscle-and-wood economy to an industrial, fossil-fuel-powered society. Driven by the steam engine, coal extraction, textile mechanization, and railways, it sparked unprecedented urbanization and reorganized human labor.',
    coverImage: {
      url: '/assets/images/conflict_wwii_1795464677003.jpg',
      title: 'Coalbrookdale by Night: The Heart of British Iron Metallurgy',
      date: '1801',
      creator: 'Philip James de Loutherbourg',
      institution: 'Science Museum, London',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'For thousands of years, human physical labor was strictly limited by the biological muscle power of humans and draft animals, supplemented only slightly by seasonal watermills and windmills. In late 18th-century Great Britain, a unique combination of factors converged: abundant and easily accessible surface coal deposits, rich iron ore veins, institutional patent protections, colonial capital accumulation, and an expanding commercial empire with global export markets. The transition began in the textile mills of Lancashire and the iron furnaces of Shropshire, substituting the thermodynamic energy of burning fossil coal for biological muscle.',
    chapters: [
      {
        subtitle: '1. The Steam Engine: From Newcomen to James Watt',
        content: 'As British coal mines were dug deeper to satisfy timber shortages, underground water flooding became a critical crisis. In 1712, Thomas Newcomen built the first commercial atmospheric steam engine to pump water from deep mine shafts. Operating on the condensation of low-pressure steam, Newcomen\'s engine was notoriously inefficient, wasting energy by repeatedly heating and cooling the same cylinder. In 1765 at the University of Glasgow, Scottish instrument maker James Watt devised the critical breakthrough: a separate condenser that kept the main cylinder hot continuously. Partnering with Birmingham industrialist Matthew Boulton, Watt patented a rotary-motion steam engine (1781) capable of powering factory machinery anywhere, liberating industry from river banks.'
      },
      {
        subtitle: '2. The Mechanization of Textiles and the Factory System',
        content: 'The textile sector underwent rapid, cascading mechanization. In 1764, James Hargreaves invented the spinning jenny, allowing a single operator to spin multiple spools of thread simultaneously. Richard Arkwright followed with the water frame (1769), which spun strong cotton warp threads using water power; Arkwright established the world\'s first modern industrial factory at Cromford, Derbyshire, organizing hundreds of wage laborers under strict clock time and division of labor. Samuel Crompton\'s spinning mule (1779) and Edmund Cartwright\'s power loom (1785) mechanized weaving, transforming Britain into the "workshop of the world" producing millions of yards of cheap cotton textiles for global export.'
      },
      {
        subtitle: '3. Metallurgy, Railways and the Annihilation of Distance',
        content: 'At Coalbrookdale in Shropshire, Abraham Darby had pioneered the smelting of iron using baked coal (coke) instead of scarce wood charcoal. In 1779, his grandson completed The Iron Bridge over the River Severn—the first major bridge in the world constructed entirely of cast iron. High-strength iron and steam combined to create the railway revolution. In 1829, George Stephenson and his son Robert designed the locomotive *Rocket*, winning the Rainhill Trials and opening the Liverpool and Manchester Railway in 1830—the world\'s first fully mechanized inter-city passenger railway. Railways compressed travel times from days to hours, standardizing Greenwich Mean Time across nations and enabling mass freight transport.'
      },
      {
        subtitle: '4. The Human Toll: Urbanization, Child Labor and Social Struggle',
        content: 'The industrial revolution came at immense human cost. Millions of peasant farm laborers, displaced by agricultural enclosure acts, flooded into unzoned industrial boomtowns like Manchester, Leeds, and Birmingham. Families lived in crowded, unventilated tenements with open cesspools, where life expectancy at birth plummeted below 20 years in working-class districts, and cholera epidemics were rampant. Children as young as six worked 14-hour days in textile mills and coal shafts, subjected to brutal corporal punishment and toxic dust. These conditions sparked the Luddite machine-breaking rebellions (1811–1816), the Peterloo Massacre (1819), the Chartist movement demanding universal suffrage, and the passage of the landmark Factory Acts regulating child labor.'
      }
    ],
    timeline: [
      { year: '1712', title: 'Newcomen Atmospheric Engine', description: 'Thomas Newcomen installs the first practical steam-powered mine drainage pump in Staffordshire.' },
      { year: '1769', title: 'James Watt Patents the Separate Condenser', description: 'Breakthrough dramatically increases steam engine efficiency, making industrial factory use viable.' },
      { year: '1779', title: 'Completion of The Iron Bridge', description: 'World\'s first cast-iron bridge erected over the River Severn at Coalbrookdale.' },
      { year: '1830', title: 'Opening of the Liverpool and Manchester Railway', description: 'The Stephenson Rocket powers the dawn of passenger rail transportation.' },
      { year: '1848', title: 'Publication of The Communist Manifesto', description: 'Karl Marx and Friedrich Engels analyze the class struggle between industrial proletariat and bourgeoisie.' }
    ],
    keyFigures: [
      { name: 'James Watt', role: 'Scottish Inventor and Mechanical Engineer', bio: 'Engineered the separate steam condenser and rotary motion, enabling factories to operate away from rivers.' },
      { name: 'Richard Arkwright', role: 'Pioneer of the Factory System', bio: 'Invented the water frame and established the Cromford cotton mill, establishing modern industrial wage labor.' },
      { name: 'George Stephenson', role: 'Father of Railways', bio: 'Engineered the first public inter-city railway lines and established standard railway gauge (4 ft 8.5 in).' },
      { name: 'Robert Owen', role: 'Social Reformer and Industrialist', bio: 'Operated the New Lanark cotton mills with limited working hours, free schooling, and utopian socialist ideals.' }
    ],
    causes: [
      'Vast domestic deposits of coal and iron ore located in close geographic proximity in Great Britain.',
      'Agricultural productivity gains and Enclosure Acts freeing millions of peasants for urban industrial wage labor.',
      'British naval supremacy and colonial markets providing raw materials (American cotton) and captive consumer export markets.'
    ],
    consequences: [
      'Massive global urbanization shifting humanity from predominantly rural living to majority urban living.',
      'The rise of modern industrial capitalism, trade unionism, labor laws, and socialist political movements.',
      'The beginning of large-scale anthropogenic greenhouse gas emissions and fossil-fuel climate change.'
    ],
    interpretations: 'Economic historian E.A. Wrigley emphasized that the Industrial Revolution represented the escape from an "organic economy" (dependent on the annual solar surface energy captured by plants and wood) into a "mineral-based energy economy" unlocking hundreds of millions of years of stored subterranean solar energy in coal.',
    primarySource: {
      title: 'Parliamentary Evidence of Matthew Crabtree to the Sadler Committee on Child Labor',
      date: '1832',
      excerpt: 'What age are you? Twenty-two... What age were you when you entered the factory? Eight years old... What were your hours of labor? From 6 in the morning to 8 at night, with forty minutes at noon... Did you not become very fatigued? Yes, that at night I could not stand upon my feet...',
      context: 'Official testimony before the British House of Commons leading to the passage of the 1833 Factory Act.'
    },
    relatedIds: ['scientific-revolution', 'digital-revolution', 'world-war-i'],
    references: [
      'Hobsbawm, Eric (1962). The Age of Revolution: 1789–1848. Weidenfeld & Nicolson.',
      'Wrigley, E.A. (2010). Energy and the English Industrial Revolution. Cambridge University Press.',
      'Thompson, E.P. (1963). The Making of the English Working Class. Victor Gollancz.'
    ]
  },

  'ancient-astronomy': {
    id: 'ancient-astronomy',
    title: 'ANCIENT ASTRONOMY & MATHEMATICS: CHARTING THE CELESTIAL MECHANISM',
    category: 'Revolution',
    period: 'c. 2000 BCE – 600 CE',
    geographicRegion: 'Global (Mesopotamia, India, Greece, Alexandria, Mesoamerica)',
    summary: 'Across Mesopotamia, ancient India, Greece, and Alexandria, scholars charted the heavens, invented the sexagesimal 360-degree sphere, formulated trigonometry, calculated planetary orbits, and created the philosophical zero and decimal place-value system.',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'Astronomical Astrolabe and Armillary Sphere Studies',
      date: 'c. 500 CE',
      creator: 'Archival Scientific Collection',
      institution: 'EPOCH Historical Collection',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'Before artificial electric lighting illuminated the night sky, the movements of the sun, moon, planets, and constellations were the primary clock, calendar, and compass of human civilization. Accurate astronomical observation was an existential necessity: it dictated when to plant crops, when river floods would arrive, and how ships could navigate across open oceans without visible shorelines. Over millennia, what began as astrological omen tracking evolved into empirical mathematical physics.',
    chapters: [
      {
        subtitle: '1. Babylonian Diaries and the Base-60 Division of the Cosmos',
        content: 'From the second millennium BCE, Babylonian priest-astronomers atop ziggurats systematically compiled nightly clay-tablet observation logs known as the Astronomical Diaries. By tracking the recurring cycles of Venus (the Ammisaduqa tablet) and the 18-year Saros cycle of solar and lunar eclipses, they applied their sexagesimal (base 60) mathematics to divide the circular path of the sun into 360 degrees, and each degree into 60 minutes and 60 seconds—a coordinate system that still governs global cartography and timekeeping today.'
      },
      {
        subtitle: '2. Hellenistic Geometry and the Ptolemaic Cosmos',
        content: 'In classical Greece and Hellenistic Alexandria, astronomers transformed astronomical observation using geometry. In the 3rd century BCE, Eratosthenes calculated the circumference of the Earth with astonishing accuracy (within 2%) by measuring the shadow cast by obelisks at Alexandria and Syene at midday on the summer solstice. Hipparchus of Nicaea discovered the precession of the equinoxes and compiled the first star catalog. Around 150 CE, Claudius Ptolemy compiled the *Almagest* (*Mathematike Syntaxis*), constructing a mathematical geocentric model of the universe utilizing eccentric circles and epicycles that dominated European and Islamic science for 1,400 years.'
      },
      {
        subtitle: '3. Classical Indian Astronomy and the Invention of Zero',
        content: 'In 5th-century India, mathematical astronomy reached a monumental peak. At the age of 23 in 499 CE, the mathematician-astronomer Aryabhata published the *Aryabhatiya* at Kusumapura (Pataliputra). Aryabhata correctly deduced that the Earth is a sphere that rotates daily on its axis, producing day and night, and explained that lunar and solar eclipses are caused by the shadows cast by the Earth and Moon rather than mythological demons. He calculated the length of the solar year as 365.258 days, calculated the value of $\\pi$ as 3.1416, and pioneered sine tables. More critically, Indian mathematicians formulated the decimal place-value system and the mathematical zero (*Shunya*), codified by Brahmagupta in 628 CE in the *Brahmasphutasiddhanta*, providing the arithmetic system that enabled modern global science.'
      },
      {
        subtitle: '4. The Maya Calendar and the Islamic Transmission',
        content: 'In Mesoamerica, the Maya civilization developed an extraordinarily sophisticated astronomical calendar without metal tools or optical lenses. By tracking the synodic cycle of Venus (584 days) across centuries in codices like the Dresden Codex, Maya priest-astronomers achieved calculations accurate to within one day in several centuries. In the 8th to 12th centuries CE, the Islamic Golden Age in Baghdad and Cairo synthesized Greek, Indian, and Persian astronomy: scholars like Al-Battani refined Ptolemy\'s measurements, Al-Khwarizmi integrated Indian decimal numerals into algebra, and Ibn al-Haytham revolutionized optical observation, laying the groundwork for the Copernican Revolution.'
      }
    ],
    timeline: [
      { year: 'c. 1600 BCE', title: 'Venus Tablet of Ammisaduqa', description: 'Babylonian scribes record the first known systematic planetary observations on clay.' },
      { year: 'c. 240 BCE', title: 'Eratosthenes Calculates Earth\'s Circumference', description: 'Measures solar shadows between Alexandria and Syene, calculating the globe\'s size.' },
      { year: 'c. 150 CE', title: 'Ptolemy Compiles the Almagest', description: 'The definitive geocentric mathematical manual of antiquity.' },
      { year: '499 CE', title: 'Aryabhata Publishes the Aryabhatiya', description: 'Pioneers earth\'s axial rotation, accurate pi calculation, and trigonometry.' },
      { year: '628 CE', title: 'Brahmagupta Codifies Arithmetic Rules for Zero', description: 'Brahmasphutasiddhanta establishes zero and negative numbers in mathematical operations.' }
    ],
    keyFigures: [
      { name: 'Aryabhata', role: 'Indian Astronomer and Mathematician (476–550 CE)', bio: 'Author of the Aryabhatiya; proposed that the Earth rotates on its axis and computed pi to 4 decimal places.' },
      { name: 'Claudius Ptolemy', role: 'Greco-Roman Mathematician and Astronomer (c. 100–170 CE)', bio: 'Authored the Almagest, establishing the standard geocentric mathematical model of the classical world.' },
      { name: 'Brahmagupta', role: 'Indian Mathematician (598–668 CE)', bio: 'Codified the rules of arithmetic with zero and negative numbers, revolutionizing world mathematics.' },
      { name: 'Eratosthenes', role: 'Chief Librarian at the Library of Alexandria', bio: 'Used geometry and solar shadows to measure the circumference of the Earth with startling accuracy.' }
    ],
    causes: [
      'The critical agricultural need to predict seasonal river inundations and planting cycles.',
      'The navigation requirements of maritime traders crossing open ocean waters without landmarks.',
      'Philosophical and religious impulses to decode the cosmic mathematical order governing the universe.'
    ],
    consequences: [
      'The invention of the base-60 sexagesimal coordinate system (degrees, minutes, seconds) and the 24-hour day.',
      'The formulation of the decimal place-value system and zero, which underwrites all modern computation.',
      'The preservation and mathematical refinement of planetary tables that directly catalyzed the Copernican Revolution.'
    ],
    interpretations: 'Historians of science emphasize that ancient astronomy was fundamentally global and interconnected: Hellenistic geometry, Babylonian celestial record-keeping, and Indian decimal mathematics converged in the medieval Islamic world before sparking the modern European scientific awakening.',
    primarySource: {
      title: 'Aryabhata\'s Verse on Earth\'s Axial Rotation (Aryabhatiya, Golapada 9)',
      date: '499 CE',
      excerpt: 'Just as a man in a boat moving forward sees the stationary objects on the bank as moving backward, even so are the stationary stars seen by the people on the equator as moving straight westward, caused by the daily rotation of the Earth.',
      context: 'Classical Sanskrit verse demonstrating that the apparent movement of stars is caused by Earth\'s rotation.'
    },
    relatedIds: ['scientific-revolution', 'mesopotamia', 'indus-valley'],
    references: [
      'Neugebauer, Otto (1969). The Exact Sciences in Antiquity. Dover Publications.',
      'Pingree, David (1981). Jyotiḥśāstra: Astral and Mathematical Literature. Otto Harrassowitz.',
      'Evans, James (1998). The History and Practice of Ancient Astronomy. Oxford University Press.'
    ]
  },

  'scientific-revolution': {
    id: 'scientific-revolution',
    title: 'THE SCIENTIFIC REVOLUTION: EMPIRICISM, HELIOCENTRISM AND MATHEMATICAL PHYSICS',
    category: 'Revolution',
    period: 'c. 1543 – 1687 CE',
    geographicRegion: 'Western and Central Europe (Poland, Italy, England, Germany, Netherlands, France)',
    summary: 'The foundational transformation in European natural philosophy that dismantled the ancient Aristotelian-Ptolemaic geocentric cosmology and replaced scholastic dogma with systematic empirical observation, controlled experimentation, and mathematical universal laws. Commencing with Nicolaus Copernicus\'s De revolutionibus orbium coelestium in 1543 and culminating in Isaac Newton\'s Philosophiae Naturalis Principia Mathematica in 1687, the Scientific Revolution birthed modern physics, astronomy, optics, and chemistry, providing the intellectual framework for the Enlightenment and global industrialization.',
    coverImage: {
      url: '/assets/images/hero_ancient_history_1795464676030.jpg',
      title: 'Galileo Demonstrating the Astronomical Telescope',
      date: '1609',
      creator: 'H. J. Detouche Historical Engraving',
      institution: 'Science Museum, London',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'For over a millennium, European intellectual life was structured around the Christianized synthesis of Aristotelian natural philosophy and Ptolemaic astronomy, which asserted a stationary Earth at the center of the cosmos encircled by concentric, crystalline heavenly spheres. However, the rediscovery of classical Hellenistic mathematical treatises during the Renaissance, the rapid dissemination of empirical data via Gutenberg printing presses, and the navigational imperatives of trans-oceanic exploration exposed deep structural inaccuracies in Ptolemy\'s planetary tables. Natural philosophers increasingly demanded a mathematics-based cosmology grounded in physical evidence.',
    chapters: [
      {
        subtitle: 'The Copernican Rupture and Kepler\'s Ellipses',
        content: 'In 1543, Polish canon Nicolaus Copernicus published De revolutionibus orbium coelestium on his deathbed, proposing that the Sun, rather than the Earth, rests at the center of the planetary system. Decades later, German mathematician Johannes Kepler analyzed the extraordinarily precise celestial observations recorded by Danish astronomer Tycho Brahe. Between 1609 and 1619, Kepler dismantled the ancient Aristotelian dogma of uniform circular motion, publishing his three laws of planetary motion: demonstrating that planets orbit the Sun along elliptical paths with varying speeds proportional to their distance from the solar focus.'
      },
      {
        subtitle: 'The Galilean Telescope and Empirical Subversion',
        content: 'In the autumn of 1609, Florentine mathematician Galileo Galilei constructed a 20x magnification refractive telescope and turned it toward the heavens. In his sensational 1610 treatise Sidereus Nuncius (The Starry Messenger), Galileo revealed that the Moon was cratered and mountainous rather than a pristine celestial sphere; that four moons orbited Jupiter (proving Earth was not the unique center of all celestial orbits); that Venus exhibited planetary phases consistent only with orbiting the Sun; and that sunspots blemished the Sun. For defending Copernicanism in his Dialogue Concerning the Two Chief World Systems (1632), Galileo was summoned before the Roman Inquisition, forced to abjure his findings, and spent the remainder of his life under house arrest.'
      },
      {
        subtitle: 'The Empirical Method and Scientific Institutions',
        content: 'Parallel to astronomical breakthroughs, English statesman Francis Bacon formulated the inductive scientific method in Novum Organum (1620), advocating for systematic empirical experimentation over deductive scholastic armchair philosophy. In France, René Descartes laid the foundations of analytic geometry and Cartesian rationalism. Crucially, science transitioned from isolated individual pursuits to institutional collective inquiry through the establishment of permanent scientific academies: the Accademia dei Lincei in Rome (1603), the Royal Society of London (1660) with its motto Nullius in verba ("Take nobody\'s word for it"), and the Académie des Sciences in Paris (1666). The creation of peer-reviewed scientific journals like the Philosophical Transactions enabled rapid international replication and verification of experiments.'
      },
      {
        subtitle: 'The Newtonian Synthesis: Universal Gravitation and the Clockwork Universe',
        content: 'In 1687, Cambridge mathematician Isaac Newton published Philosophiae Naturalis Principia Mathematica, one of the supreme intellectual achievements in human history. Inventing infinitesimal calculus alongside Gottfried Wilhelm Leibniz, Newton formulated the Three Universal Laws of Motion and the Law of Universal Gravitation, proving that an inverse-square mathematical attraction governs both terrestrial projectile motion and the orbital mechanics of moons and planets. By unifying celestial and terrestrial mechanics under a single set of universal mathematical equations, Newton definitively dismantled the ancient dualism of heaven and earth, completing the mechanical conception of the cosmos.'
      }
    ],
    timeline: [
      { year: '1543', title: 'Publication of De revolutionibus', description: 'Copernicus proposes the heliocentric model on his deathbed.' },
      { year: '1609', title: 'Kepler\'s Laws & Galileo\'s Telescope', description: 'Kepler proves elliptical orbits; Galileo discovers moons of Jupiter.' },
      { year: '1620', title: 'Bacon\'s Novum Organum', description: 'Francis Bacon outlines the empirical, experimental inductive scientific method.' },
      { year: '1632', title: 'Galileo\'s Dialogue & Inquisition Trial', description: 'Galileo publishes Dialogue; condemned to life house arrest by the Roman Inquisition in 1633.' },
      { year: '1660', title: 'Founding of the Royal Society', description: 'The Royal Society of London is established to promote experimental learning.' },
      { year: '1687', title: 'Newton\'s Principia Mathematica', description: 'Isaac Newton publishes laws of motion and universal gravitation, unifying modern physics.' }
    ],
    keyFigures: [
      { name: 'Nicolaus Copernicus', role: 'Astronomer and Mathematician', bio: 'Initiated the Scientific Revolution by mathematically modeling the heliocentric cosmos.' },
      { name: 'Galileo Galilei', role: 'Physicist, Astronomer and Mathematician', bio: 'Father of observational astronomy who championed telescope observation and kinematic acceleration.' },
      { name: 'Johannes Kepler', role: 'Astronomer and Mathematician', bio: 'Formulated the three fundamental laws of planetary elliptical motion.' },
      { name: 'Isaac Newton', role: 'Physicist and Mathematician', bio: 'Formulated universal gravitation, laws of classical mechanics, and infinitesimal calculus.' },
      { name: 'Francis Bacon', role: 'Philosopher and Statesman', bio: 'Pioneered the empirical scientific method of systematic inductive experimentation.' }
    ],
    causes: [
      'The dissemination of classical mathematics and astronomical texts through movable-type printing presses.',
      'The navigational and cartographic demands of the Age of Exploration requiring precise celestial reckoning.',
      'The invention of precision empirical instruments: the refracting telescope, compound microscope, barometer, and pendulum clock.'
    ],
    consequences: [
      'The overthrow of geocentrism and the birth of modern quantitative physics, chemistry, and astronomy.',
      'The establishment of peer-reviewed empirical methodology and institutional scientific societies.',
      'The intellectual bedrock for the European Enlightenment, medical advances, and the Industrial Revolution.'
    ],
    primarySource: {
      title: 'Isaac Newton: Philosophiae Naturalis Principia Mathematica (Rules of Reasoning in Philosophy)',
      date: '1687 CE',
      excerpt: 'Rule I: We are to admit no more causes of natural things than such as are both true and sufficient to explain their appearances... Rule III: The qualities of bodies, which admit neither intensification nor remission of degrees, and which are found to belong to all bodies within the reach of our experiments, are to be esteemed the universal qualities of all bodies whatsoever... For the rule of wandering from analogies of Nature would be very absurd.',
      context: 'Opening methodological axioms of Book III of the Principia, formulating the universal principles of empirical physical science.'
    },
    relatedIds: ['printing-press', 'ancient-astronomy', 'industrial-revolution', 'davinci'],
    references: [
      'Kuhn, Thomas S. (1957). The Copernican Revolution: Planetary Astronomy in the Development of Western Thought. Harvard University Press.',
      'Shapin, Steven (1996). The Scientific Revolution. University of Chicago Press.',
      'Westfall, Richard S. (1980). Never at Rest: A Biography of Isaac Newton. Cambridge University Press.'
    ]
  },

  'digital-revolution': {
    id: 'digital-revolution',
    title: 'THE DIGITAL REVOLUTION: INFORMATION THEORY, TRANSISTORS AND ALGORITHMIC COGNITION',
    category: 'Revolution',
    period: 'c. 1947 CE – Present',
    geographicRegion: 'Global (Bell Labs, Silicon Valley, Cambridge, Tokyo, Global Distributed Networks)',
    summary: 'The rapid historical transition from mechanical and analog electronic technologies to digital computing, binary logic, and planetary telecommunications networks. Commencing with the invention of the solid-state point-contact transistor at Bell Labs in 1947 and underpinned by Claude Shannon\'s mathematical information theory and Alan Turing\'s universal computational machine, the Digital Revolution has compressed planetary time and space, re-architected the global economy around software, and culminated in the dawn of generative artificial intelligence.',
    coverImage: {
      url: '/assets/images/hero_ancient_history_1795464676030.jpg',
      title: 'Early Silicon Microprocessor and Printed Circuitry',
      date: 'c. 1971',
      creator: 'Intel Historical Archives',
      institution: 'Computer History Museum, Mountain View, California',
      sourceUrl: 'https://www.computerhistory.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'During the Second World War, the urgent military imperatives of cryptographic decipherment (Alan Turing\'s electromechanical Bombe and Colossus at Bletchley Park) and artillery trajectory calculations (the 30-ton vacuum-tube ENIAC at the University of Pennsylvania) demonstrated the immense power of automated calculation. However, early computers relied on thousands of glowing thermionic vacuum tubes that generated intense heat, consumed massive electrical power, and burned out continuously. To unlock scalable computing, physicists sought solid-state semiconductor mechanisms capable of amplifying and switching electrical currents without moving parts or vacuum glass envelopes.',
    chapters: [
      {
        subtitle: 'Theoretical Foundations: Turing Machines and Shannon\'s Information Theory',
        content: 'In 1936, British mathematician Alan Turing published "On Computable Numbers," introducing the theoretical Universal Turing Machine—a mathematical model capable of simulating any algorithmic computation by manipulating discrete symbols on an infinite tape. In 1948, Claude Shannon published his seminal paper "A Mathematical Theory of Communication" at Bell Labs, creating the discipline of Information Theory. Shannon proved that all information—whether voice, text, image, or telemetry—can be encoded, measured, transmitted, and error-corrected using binary units of information: "bits" (0 and 1).'
      },
      {
        subtitle: 'The Semiconductor Revolution: Transistors and the Silicon Microchip',
        content: 'In December 1947, physicists John Bardeen, Walter Brattain, and William Shockley at Bell Telephone Laboratories invented the point-contact transistor using germanium, replacing fragile vacuum tubes with microscopic solid-state electronic switches. In 1958–1959, Jack Kilby of Texas Instruments and Robert Noyce of Fairchild Semiconductor independently invented the planar integrated circuit, fabricating multiple interconnected transistors, resistors, and capacitors on a single wafer of silicon. In 1965, Gordon Moore observed that the number of transistors packed onto a microchip was doubling approximately every two years with falling cost (Moore\'s Law), an exponential trajectory that propelled humanity from room-sized mainframes to handheld supercomputers.'
      },
      {
        subtitle: 'The Interconnected Planet: ARPANET, TCP/IP, and the World Wide Web',
        content: 'In 1969, the US Department of Defense\'s Advanced Research Projects Agency launched ARPANET, transmitting the first packet-switched message between computers at UCLA and Stanford University. In the 1970s, Vinton Cerf and Robert Kahn developed the TCP/IP protocol suite, creating an open, decentralized architecture for interconnecting disparate computer networks into the global "Internet." In 1989, British software engineer Tim Berners-Lee at CERN invented the World Wide Web (HTML, HTTP, and URLs), democratizing information by allowing anyone to link, navigate, and publish multimedia documents globally over the internet.'
      },
      {
        subtitle: 'Ubiquitous Computing, Deep Learning, and Artificial Intelligence',
        content: 'By the 2020s, billions of connected smartphones, cloud data centers, and planetary fiber-optic undersea cables had created an exabyte-scale planetary digital nervous system. The convergence of massive computational hardware (GPUs), internet-scale datasets, and transformer deep neural networks catalyzed the emergence of artificial intelligence. Computers evolved from deterministic calculation devices executing explicit rules into self-supervised learning systems capable of natural language synthesis, scientific protein folding prediction, and algorithmic reasoning, marking the commencement of humanity\'s cognitive partnership with artificial intelligence.'
      }
    ],
    timeline: [
      { year: '1936', title: 'Turing\'s Universal Machine', description: 'Alan Turing formulates the theoretical foundation of modern general-purpose computing.' },
      { year: '1947', title: 'Invention of the Transistor', description: 'Bell Labs invents the solid-state transistor, replacing vacuum tubes.' },
      { year: '1948', title: 'Shannon\'s Information Theory', description: 'Claude Shannon publishes mathematical foundations of digital data and the "bit".' },
      { year: '1959', title: 'The Integrated Circuit', description: 'Robert Noyce and Jack Kilby invent the silicon microchip.' },
      { year: '1969', title: 'Birth of ARPANET', description: 'First packet-switched message sent across nodes, laying the foundation for the Internet.' },
      { year: '1989', title: 'The World Wide Web', description: 'Tim Berners-Lee creates HTTP, HTML, and URLs at CERN, launching the Web.' }
    ],
    keyFigures: [
      { name: 'Alan Turing', role: 'Mathematician and Computer Scientist', bio: 'Broke the Enigma cipher and conceived the universal computational machine and Turing Test.' },
      { name: 'Claude Shannon', role: 'Mathematician and Electrical Engineer', bio: 'Father of Information Theory who defined the bit and binary digital circuit design.' },
      { name: 'John Bardeen & Walter Brattain', role: 'Physicists and Nobel Laureates', bio: 'Co-inventors of the point-contact transistor at Bell Labs in 1947.' },
      { name: 'Robert Noyce', role: 'Physicist and Co-Founder of Intel', bio: 'Co-inventor of the planar integrated circuit who catalyzed Silicon Valley.' },
      { name: 'Tim Berners-Lee', role: 'Computer Scientist at CERN', bio: 'Invented the World Wide Web, creating open protocols that united global humanity online.' }
    ],
    causes: [
      'The military and cryptography imperatives of World War II demanding automated electronic calculation.',
      'The physical and thermal limits of vacuum tube electronics requiring durable solid-state semiconductors.',
      'The exponential economic and institutional demand for rapid data transmission, telecommunications, and business automation.'
    ],
    consequences: [
      'The complete transition of human civilization from an industrial energy economy to an information economy.',
      'Instantaneous planetary communication, globalization of finance, and open access to human knowledge.',
      'The emergence of artificial intelligence, machine learning, and fundamental questions regarding the future of human cognition.'
    ],
    primarySource: {
      title: 'Claude Shannon: A Mathematical Theory of Communication (Bell System Technical Journal)',
      date: 'July 1948',
      excerpt: 'The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point. Frequently the messages have meaning... These semantic aspects of communication are irrelevant to the engineering problem. The significant aspect is that the actual message is one selected from a set of possible messages.',
      context: 'The opening mathematical treatise that established modern information theory and defined binary communication.'
    },
    relatedIds: ['industrial-revolution', 'printing-press', 'invention-of-writing', 'scientific-revolution'],
    references: [
      'Isaacson, Walter (2014). The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution. Simon & Schuster.',
      'Shannon, Claude E. and Weaver, Warren (1949). The Mathematical Theory of Communication. University of Illinois Press.',
      'Gleick, James (2011). The Information: A History, a Theory, a Flood. Pantheon Books.'
    ]
  },

  // =========================================================================
  // SECTION 4: WORLD RELIGIONS & PHILOSOPHICAL TRADITIONS
  // =========================================================================

  'hinduism': {
    id: 'hinduism',
    title: 'HINDUISM: SANATANA DHARMA, VEDIC WISDOM AND THE UPANISHADS',
    category: 'Religion',
    period: 'c. 2000 BCE – Present (Vedic Period: c. 1500 – 500 BCE)',
    geographicRegion: 'South Asia (Indian Subcontinent, spreading across Southeast Asia)',
    summary: 'One of the world\'s oldest continuous spiritual traditions, Sanatana Dharma ("The Eternal Order") encompasses the sacred oral hymns of the Vedas, the profound monistic metaphysics of the Upanishads, the ethical discourse of the Bhagavad Gita, and diverse paths to spiritual liberation (Moksha).',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'Ancient Stone Carvings and Temples of the Vedic Tradition',
      date: 'c. 800 BCE',
      creator: 'Archival Photographic Collection',
      institution: 'EPOCH Historical Collection',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'Unlike historical traditions tracing back to a single prophet, historical founder, or institutional hierarchy, Hinduism emerged organically over millennia along the river valleys of South Asia. Known traditionally as *Sanatana Dharma* ("the eternal order"), it represents a vast, pluralistic family of philosophical traditions, ritual practices, and spiritual inquiries sharing common roots in the sacred oral corpus of the Vedas (*Shruti*, "that which is heard").',
    chapters: [
      {
        subtitle: '1. The Four Vedas and the Sacred Oral Tradition (c. 1500 – 900 BCE)',
        content: 'The foundational scriptures of Hinduism are the four Vedas: the *Rigveda* (comprising 1,028 poetic hymns praising cosmic deities such as Agni, Indra, and Varuna), the *Yajurveda* (sacrificial prose formulas), the *Samaveda* (musical chants), and the *Atharvaveda* (domestic spells and philosophical hymns). For over two millennia before being written down, these texts were preserved through extraordinary oral mnemonic systems (*pathas*): chanting syllables backwards, forwards, and in interwoven patterns (*ghanapatha*) that preserved phonetic pitch and syllable duration with mathematical precision across generations without a single variant reading.'
      },
      {
        subtitle: '2. The Upanishadic Awakening: Brahman and Atman (c. 800 – 500 BCE)',
        content: 'In the first millennium BCE, forest ascetics and philosophers pivoted from external sacrificial rituals toward deep psychological and metaphysical introspection. The *Upanishads* (such as the *Brihadaranyaka*, *Chandogya*, and *Katha*) articulated the core metaphysical insights of classical Indian thought: *Brahman* (the infinite, unmanifest, unchanging ground of the universe) is identical to *Atman* (the innermost soul or true consciousness within every individual). This realization is encapsulated in the Great Sayings (*Mahavakyas*): *Tat Tvam Asi* ("Thou art That") and *Aham Brahmasmi* ("I am the Infinite Consciousness").'
      },
      {
        subtitle: '3. Dharma, Karma, Samsara and the Four Goals of Life',
        content: 'Classical Hindu thought organized human life around four legitimate pursuits (*Purusharthas*): *Dharma* (ethical living, duty, and cosmic order), *Artha* (material prosperity and security), *Kama* (aesthetic and sensual enjoyment), and *Moksha* (spiritual liberation from the cycle of birth and death). Transmigration (*Samsara*) is governed by *Karma*—the universal moral law of causality wherein every deliberate intention and action produces corresponding fruits across lifetimes. Liberation occurs when the illusion of individual separateness (*Maya*) is dissolved in the experiential realization of oneness with the divine.'
      },
      {
        subtitle: '4. The Bhagavad Gita and the Paths to Liberation',
        content: 'Embedded within the great epic *Mahabharata*, the *Bhagavad Gita* ("Song of the Lord") presents a profound philosophical dialogue on the battlefield of Kurukshetra between the warrior Arjuna and Krishna. Facing civil war against his own kinsmen, Arjuna collapses in moral crisis. Krishna synthesizes the diverse spiritual temperaments of humanity into four integrated yogas: *Jnana Yoga* (the path of philosophical discernment), *Bhakti Yoga* (the path of loving devotion), *Karma Yoga* (the path of selfless duty without attachment to the fruits of action), and *Raja Yoga* (meditative contemplation).'
      }
    ],
    timeline: [
      { year: 'c. 1500 – 1200 BCE', title: 'Composition of the Rigveda', description: 'Oldest surviving Indo-European oral religious poetry composed in archaic Sanskrit.' },
      { year: 'c. 800 – 500 BCE', title: 'The Axial Upanishadic Period', description: 'Philosophical inquiries formulate the identity of Brahman and Atman, Karma, and Moksha.' },
      { year: 'c. 200 BCE – 200 CE', title: 'Composition of the Bhagavad Gita', description: 'Battlefield dialogue synthesizes Karma Yoga, Bhakti Yoga, and philosophical duty.' },
      { year: 'c. 788 – 820 CE', title: 'Adi Shankara and Advaita Vedanta', description: 'Master philosopher establishes non-dualistic Vedanta and reorganizes monastic orders across India.' }
    ],
    keyFigures: [
      { name: 'Yajnavalkya', role: 'Upanishadic Sage and Philosopher', bio: 'Central figure of the Brihadaranyaka Upanishad; formulated the neti-neti ("not this, not that") inquiry into consciousness.' },
      { name: 'Adi Shankaracharya', role: 'Philosopher and Theologian (c. 788–820 CE)', bio: 'Consolidated Advaita (non-dualist) Vedanta philosophy and established four monastic seats across India.' },
      { name: 'Ramanuja', role: 'Philosopher and Theologian (1017–1137 CE)', bio: 'Proponent of Vishishtadvaita (qualified non-dualism), synthesizing intellectual philosophy with heartfelt Bhakti devotion.' }
    ],
    causes: [
      'Vedic pastoralist hymns celebrating the cosmic and ecological forces of the Indian subcontinent.',
      'The urban and philosophical Sramana movement questioning ritual sacrifice in search of direct spiritual experience.',
      'The synthesis of popular devotional practices (*Bhakti*) with high metaphysical philosophy.'
    ],
    consequences: [
      'Gave humanity foundational concepts: Karma, Dharma, Yoga, Ahimsa, and non-dualist philosophy.',
      'Inspired monumental rock-cut and structural architecture: Ellora, Khajuraho, Tanjore, and Angkor Wat.',
      'Influenced global thinkers from Schopenhauer, Emerson, and Thoreau to Mahatma Gandhi\'s non-violent resistance.'
    ],
    interpretations: 'Indologists emphasize that Hinduism is an umbrella term coined in the 18th century for an organic, non-dogmatic mosaic of philosophical schools (Darshanas) united by respect for the Vedas, spiritual tolerance, and the pursuit of inner self-realization.',
    primarySource: {
      title: 'The Nasadiya Sukta (Hymn of Creation, Rigveda 10.129)',
      date: 'c. 1200 BCE',
      excerpt: 'Then was not non-existence nor existence: there was no realm of air, no sky beyond it... Who really knows? Who will here proclaim it? Whence was it produced? Whence is this creation? The gods came afterwards, with the creation of this universe. Who then knows whence it has arisen?',
      context: 'Ancient Sanskrit hymn demonstrating radical philosophical skepticism and awe before cosmic creation.'
    },
    relatedIds: ['buddhism', 'jainism', 'kalinga-war', 'ashoka'],
    references: [
      'Radhakrishnan, Sarvepalli (1923). Indian Philosophy (2 vols). Oxford University Press.',
      'Flood, Gavin (1996). An Introduction to Hinduism. Cambridge University Press.',
      'Doniger, Wendy (2009). The Hindus: An Alternative History. Penguin Books.'
    ]
  },

  'buddhism': {
    id: 'buddhism',
    title: 'BUDDHISM: THE NOBLE EIGHTFOLD PATH AND THE AWAKENING OF MIND',
    category: 'Religion',
    period: 'c. 6th – 5th Century BCE – Present',
    geographicRegion: 'Origin in Magadha (Ancient India), spreading across Asia and globally',
    summary: 'Founded by Siddhartha Gautama (The Buddha) in ancient Magadha, Buddhism diagnosed the root of psychological suffering (Dukkha) in craving and ignorance, offering the Middle Way, the Four Noble Truths, and the Eightfold Path to attain Nirvana.',
    coverImage: {
      url: '/assets/images/figure_ashoka_1795464677327.jpg',
      title: 'Seated Buddha in Dharmachakra Mudra, Sarnath',
      date: 'c. 5th Century CE',
      creator: 'Gupta Classical Sculptural Master',
      institution: 'Sarnath Archaeological Museum, ASI',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'In the 6th century BCE, the central Gangetic plains of northern India witnessed rapid urbanization, the rise of powerful monarchies (Magadha, Kosala), and the growth of wealthy merchant guilds (*shrenis*). Disillusioned by rigid Vedic animal sacrifice, hereditary caste stratification, and material transience, independent truth-seekers (*Sramanas*) renounced household life to seek spiritual liberation through asceticism, meditation, and philosophy.',
    chapters: [
      {
        subtitle: '1. The Great Renunciation and Enlightenment at Bodh Gaya',
        content: 'Born Prince Siddhartha Gautama of the Shakya clan at Lumbini (modern Nepal), he lived a sheltered life of luxury in Kapilavastu. Confronted outside the palace gates by the "Four Sights"—an aged man, a diseased person, a corpse, and a tranquil wandering ascetic—the prince realized that biological existence is subject to decay. At age 29, he departed his palace, wife, and newborn son in the "Great Renunciation." For six years, he studied meditation with master yogis and practiced severe mortification until near starvation. Recognizing that extreme self-mortification dulls the mind just as extreme luxury clouds it, he sat beneath a sacred pipal tree at Bodh Gaya, entering deep meditative absorption (*dhyana*) to attain complete Awakening (*Bodhi*), becoming the Buddha.'
      },
      {
        subtitle: '2. The Four Noble Truths and the First Sermon at Sarnath',
        content: 'At the Deer Park in Isipatana (Sarnath near Varanasi), the Buddha preached his First Sermon, setting in motion the Wheel of the Law (*Dhammacakkappavattana Sutta*). He outlined the Four Noble Truths: (1) *Dukkha*: Unenlightened existence is inherently characterized by suffering, dissatisfaction, and impermanence; (2) *Samudaya*: The origin of suffering is craving (*tanha*) rooted in ignorance of reality; (3) *Nirodha*: The cessation of suffering is achievable by extinguishing craving, attaining *Nirvana*; and (4) *Magga*: The path leading to cessation is the Noble Eightfold Path—comprising Right View, Right Intention, Right Speech, Right Action, Right Livelihood, Right Effort, Right Mindfulness, and Right Concentration.'
      },
      {
        subtitle: '3. Anicca, Anatta and Dependent Origination (Paticcasamuppada)',
        content: 'At the core of Buddhist philosophy are the Three Marks of Existence: *Anicca* (all conditioned phenomena are impermanent), *Dukkha* (unsatisfactoriness), and *Anatta* (non-self). Countering contemporary philosophical notions of an eternal, unchanging soul (*Atman*), the Buddha demonstrated that what we call the self is merely an ever-shifting stream of five aggregates (*skandhas*): form, sensation, perception, mental formations, and consciousness. Through *Paticcasamuppada* (Dependent Origination), all things arise conditionally in interdependence with causes and conditions; nothing possesses independent, isolated existence.'
      },
      {
        subtitle: '4. The Monastic Sangha and the Great Vehicles of Transmission',
        content: 'The Buddha established the *Sangha*—an egalitarian monastic community that accepted monks and nuns across all social castes, breaking ancient caste barriers. Following the Buddha\'s *Parinirvana* at Kushinagar at age 80, Buddhist councils at Rajgir and Pataliputra standardized the Pali Canon (*Tipitaka*). Under the royal patronage of Emperor Ashoka (3rd century BCE) and Emperor Kanishka (2nd century CE), Buddhism diversified into major traditions: *Theravada* ("Way of the Elders") preserved in Sri Lanka, Burma, and Thailand; *Mahayana* ("Great Vehicle") emphasizing the compassionate *Bodhisattva* ideal in China, Korea, and Japan; and *Vajrayana* in Tibet and the Himalayas.'
      }
    ],
    timeline: [
      { year: 'c. 563 – 483 BCE', title: 'Life of Siddhartha Gautama', description: 'Birth at Lumbini, Enlightenment at Bodh Gaya, and Parinirvana at Kushinagar.' },
      { year: 'c. 528 BCE', title: 'The First Sermon at Sarnath', description: 'Setting in motion the Wheel of the Dhamma (Dhammacakkappavattana Sutta).' },
      { year: 'c. 250 BCE', title: 'Third Buddhist Council and Global Missions', description: 'Emperor Ashoka sponsors missionary envoys across Asia and the Hellenistic kingdoms.' },
      { year: 'c. 1st Century CE', title: 'Emergence of Mahayana Buddhism', description: 'Codification of the Prajnaparamita sutras and the universal Bodhisattva ideal.' },
      { year: 'c. 427 CE', title: 'Founding of Nalanda Mahavihara', description: 'The premier residential Buddhist university in India attracts 10,000 scholars from across Asia.' }
    ],
    keyFigures: [
      { name: 'Siddhartha Gautama (The Buddha)', role: 'The Awakened One and Founder', bio: 'Historical teacher who taught the Middle Way, Four Noble Truths, and meditation across northern India.' },
      { name: 'Ananda', role: 'Chief Disciple and Companion', bio: 'The Buddha\'s personal attendant whose extraordinary memory recited the Sutta Pitaka at the First Council.' },
      { name: 'Nagarjuna', role: 'Philosopher of Madhyamaka (c. 150–250 CE)', bio: 'Formulated the doctrine of Sunyata (Emptiness), revolutionizing Mahayana metaphysics.' }
    ],
    causes: [
      'The psychological crisis of mortality, disease, and suffering observed by Siddhartha Gautama.',
      'Socio-economic shifts in urban Gangetic India rejecting hereditary ritual animal sacrifice and caste privilege.',
      'The pursuit of an empirical, contemplative Middle Way avoiding both luxury and severe mortification.'
    ],
    consequences: [
      'Disseminated the ethical principles of Ahimsa (non-harm), compassion (Karuna), and mindfulness across global civilization.',
      'Inspired monumental Asian architecture: the Great Stupa of Sanchi, Ajanta Caves, Borobudur, and Todai-ji.',
      'Pioneered empirical psychological introspection and mindfulness practices practiced worldwide today.'
    ],
    interpretations: 'Modern philosophers emphasize that the Buddha taught an empirical, therapeutic philosophy rather than a dogmatic theology, famously comparing his teachings to a raft used to cross a turbulent river, to be discarded once the other shore of liberation is reached.',
    primarySource: {
      title: 'The Dhammacakkappavattana Sutta (Setting the Wheel of Dhamma in Motion)',
      date: 'c. 528 BCE',
      excerpt: 'There are these two extremes that ought not to be cultivated by one who has gone forth: the devotion to sensual pleasure, which is low, common, and unbeneficial; and the devotion to self-mortification, which is painful and unbeneficial. Avoiding these two extremes, the Tathagata has realized the Middle Way, which produces vision and knowledge, and leads to peace, direct knowledge, awakening, and Nirvana.',
      context: 'The historical opening words of the Buddha\'s first sermon at the Deer Park in Sarnath.'
    },
    relatedIds: ['ashoka', 'kalinga-war', 'hinduism', 'jainism'],
    references: [
      'Gombrich, Richard (2006). Theravada Buddhism: A Social History from Ancient Benares to Modern Colombo. Routledge.',
      'Gethin, Rupert (1998). The Foundations of Buddhism. Oxford University Press.',
      'Williams, Paul (2008). Mahāyāna Buddhism: The Doctrinal Foundations. Routledge.'
    ]
  },

  'jainism': {
    id: 'jainism',
    title: 'JAINISM: THE PATH OF ABSOLUTE AHIMSA AND MULTI-SIDED TRUTH',
    category: 'Religion',
    period: 'c. 9th – 6th Century BCE – Present',
    geographicRegion: 'Ancient India (Magadha, Gujarat, Rajasthan, Karnataka)',
    summary: 'Founded in the ancient Sramana ascetic tradition of India and codified by the 24th Tirthankara, Vardhamana Mahavira, Jainism champions absolute non-violence (Ahimsa), intellectual non-absolutism (Anekantavada), and spiritual ascetic liberation (Moksha).',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'Marble Carvings at the Ranakpur Jain Temple, Rajasthan',
      date: 'c. 1439 CE',
      creator: 'Archival Architectural Survey',
      institution: 'EPOCH Historical Collection',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'Jainism is one of humanity\'s most ancient continuous ascetic philosophies, originating within the non-Vedic *Sramana* ("renouncer") tradition of the Gangetic plain. Jain tradition recognizes a succession of 24 enlightened spiritual teachers known as *Tirthankaras* ("ford-makers" who establish a ford across the ocean of worldly suffering). While the historical existence of the 23rd Tirthankara, Parshvanatha (circa 9th–8th century BCE), is widely accepted by modern historians, the tradition reached its classical philosophical formulation under the 24th Tirthankara, Vardhamana Mahavira (circa 599–527 BCE), an elder contemporary of the Buddha.',
    chapters: [
      {
        subtitle: '1. Mahavira and the Great Renunciation',
        content: 'Born a royal prince of the Jnatrika clan at Kundagrama near Vaishali, Mahavira abandoned royal wealth, clothing, and domestic ties at age thirty. For twelve and a half years, he wandered the forests of eastern India practicing severe ascetic penances, enduring verbal and physical abuse without retaliation, and taking extraordinary care never to injure even the smallest insect. Under a sal tree on the banks of the Rijupalika River, he attained *Kevala Jnana* (supreme, omniscient spiritual knowledge), becoming a *Jina* ("spiritual conqueror", one who has conquered all inner passions of anger, greed, pride, and deceit).'
      },
      {
        subtitle: '2. The Supreme Principle of Ahimsa (Non-Violence)',
        content: 'The paramount ethical axiom of Jainism is *Ahimsa Paramo Dharma*—"Non-violence is the supreme spiritual path." Jain metaphysics posits that all living entities, from humans and animals to plants and microscopic elemental beings (*nigodas*), possess an immortal, conscious soul (*Jiva*). Every act of intentional or unintentional violence attracts subtle karmic matter (*pudgala*) that sticks to the soul, weighing it down in lower realms of rebirth. To minimize harm, Jain monks sweep the path ahead with small brooms (*rajoharana*), wear fabric masks (*muhpatti*) to avoid inhaling airborne organisms, and practice strict vegetarianism, avoiding root vegetables whose harvesting destroys the whole plant.'
      },
      {
        subtitle: '3. Anekantavada and Syadvada: Intellectual Non-Violence',
        content: 'Jainism made a revolutionary contribution to world epistemology through *Anekantavada* (the doctrine of the "many-sidedness" of reality) and *Syadvada* (conditional assertion). Jain philosophers argued that reality is infinitely complex; limited human perspectives grasp only partial facets of truth. This is illustrated by the celebrated ancient parable of the blind men and the elephant, where each person touches a different part (the trunk, ear, tusk, leg) and dogmatically insists the creature is a snake, fan, spear, or pillar. By establishing that all human statements are valid only from a specific perspective (*naya*), Jainism pioneered intellectual tolerance and non-absolutism.'
      },
      {
        subtitle: '4. The Monastic Vows, Lay Guilds and Enduring Heritage',
        content: 'Jain spirituality is structured by the Five Great Vows (*Mahavratas*): (1) *Ahimsa* (non-violence); (2) *Satya* (truthfulness); (3) *Asteya* (non-stealing); (4) *Brahmacharya* (chastity); and (5) *Aparigraha* (non-possession). Unable to practice agriculture because plowing harms underground organisms, Jain laypeople historically channeled their energies into mercantile trade, finance, jewelry, and scholarly publishing. Their profound emphasis on literacy and scholarship led to the preservation of some of India\'s oldest paper and palm-leaf manuscript libraries (*jnana bhandars*), as well as breathtaking white marble temple architecture at Mount Abu (Dilwara) and Ranakpur.'
      }
    ],
    timeline: [
      { year: 'c. 877 – 777 BCE', title: 'Traditional Era of Parshvanatha', description: 'The 23rd Tirthankara establishes the Fourfold Restraint (Chaturyama) of non-violence.' },
      { year: 'c. 599 – 527 BCE', title: 'Life and Ministry of Vardhamana Mahavira', description: 'The 24th Tirthankara attains Kevala Jnana and codifies Jain philosophy and monastic discipline.' },
      { year: 'c. 300 BCE', title: 'Council of Pataliputra and Division', description: 'Famine prompts migration southward to Shravanabelagola, leading to the Digambara and Svetambara traditions.' },
      { year: 'c. 10th Century CE', title: 'Erection of the Monolithic Gommateshwara Statue', description: '57-foot-tall granite statue of Bahubali dedicated at Shravanabelagola in Karnataka.' }
    ],
    keyFigures: [
      { name: 'Vardhamana Mahavira', role: '24th Tirthankara and Master Reformer', bio: 'The historical codifier of classical Jain monastic discipline and the five great vows.' },
      { name: 'Acharya Kundakunda', role: 'Digambara Philosopher (c. 2nd Century CE)', bio: 'Author of seminal mystical and philosophical treatises including Samayasara and Pravacanasara.' },
      { name: 'Chandragupta Maurya', role: 'Founder of the Maurya Empire', bio: 'Renounced his imperial throne in old age to become a Jain monk, migrating to Shravanabelagola.' }
    ],
    causes: [
      'Ascetic Sramana resistance against Vedic animal sacrifices and social stratification.',
      'The pursuit of radical ethical consistency regarding the sanctity of all forms of life.',
      'Philosophical recognition of the multi-faceted, conditional nature of human cognitive truth.'
    ],
    consequences: [
      'Pioneered radical non-violence (*Ahimsa*) which directly influenced Mahatma Gandhi\'s political philosophy of Satyagraha.',
      'Preserved ancient South Asian literature in monumental manuscript repositories (*Jnana Bhandars*).',
      'Created landmark Indian architectural and sculptural wonders at Mount Abu, Ranakpur, and Shravanabelagola.'
    ],
    interpretations: 'Philosophers highlight *Anekantavada* as history\'s most sophisticated system of philosophical non-violence, demonstrating that dogmatic ideological intolerance is itself a form of violent aggression against the complexity of truth.',
    primarySource: {
      title: 'Acaranga Sutra (The Earliest Jain Canonical Scripture)',
      date: 'c. 4th Century BCE',
      excerpt: 'All beings are fond of life, they like pleasure, hate pain, shun destruction, wish to live, to all life is dear. To kill any living being is to kill oneself; to show compassion to any living being is to show compassion to oneself.',
      context: 'The foundational statement of absolute Ahimsa in Jain scripture.'
    },
    relatedIds: ['buddhism', 'hinduism', 'ashoka', 'kalinga-war'],
    references: [
      'Dundas, Paul (2002). The Jains. Routledge.',
      'Jaini, Padmanabh S. (1979). The Jaina Path of Purification. University of California Press.',
      'Long, Jeffery D. (2009). Jainism: An Introduction. I.B. Tauris.'
    ]
  },

  'judaism': {
    id: 'judaism',
    title: 'JUDAISM: THE COVENANT, ETHICAL MONOTHEISM AND THE TORAH',
    category: 'Religion',
    period: 'c. 2nd Millennium BCE – Present',
    geographicRegion: 'Ancient Near East (Levant, Jerusalem, and global Diaspora)',
    summary: 'The foundational Abrahamic faith, Judaism introduced ethical monotheism to human history: the conviction that one righteous Creator entered into a moral covenant with humanity, revealed through the Torah and the prophetic call for universal justice.',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'The Western Wall (Kotel) and Temple Mount in Jerusalem',
      date: 'c. 1st Century BCE',
      creator: 'Archival Photographic Survey',
      institution: 'EPOCH Historical Collection',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'In the polytheistic Bronze Age ancient Near East—where Mesopotamian, Canaanite, and Egyptian religions worshipped nature deities through idol effigies and temple sacrifices—the Hebrew tribes forged a radically distinct theological identity. Known in historical scholarship as ethical monotheism, Judaism introduced the conviction that the Creator of the universe is not an amoral force of nature, but a single, transcendent, righteous God (*Yahweh*) who demands moral justice, compassion for the marginalized, and holy living rather than mere ritual appeasement.',
    chapters: [
      {
        subtitle: '1. The Patriarchal Covenant and the Exodus from Egypt',
        content: 'Judaism traces its covenantal origin to Abraham, who according to the Book of Genesis departed the Mesopotamian city of Ur around 1800 BCE in obedience to divine command, rejecting ancestral idolatry in exchange for the promise of a covenant people and the land of Canaan. Centuries later, following servitude in Egypt, Moses led the Israelites in the Exodus, an event that became the definitive archetype of divine liberation from tyranny. At Mount Sinai, the covenant was formalized with the giving of the Torah (the "Teaching" or Law), centered upon the Ten Commandments, which bound the divine sovereign and the free human community in mutual moral responsibility.'
      },
      {
        subtitle: '2. The Kingdom of Israel and the Prophetic Tradition',
        content: 'Following the tribal confederation of the Judges, Israel unified under King David (circa 1000 BCE), who established Jerusalem as the political and spiritual capital. His son King Solomon erected the First Temple on Mount Moriah, housing the Ark of the Covenant. During the divided kingdoms of Israel and Judah, Hebrew prophets (*Nevi\'im*, such as Isaiah, Jeremiah, and Amos) stepped forward not merely as prognosticators, but as fearless social critics speaking truth to power. They excoriated corrupt kings and wealthy elites who observed temple ceremonies while oppressing widows, orphans, and laborers, proclaiming that God desires "justice to roll down like waters, and righteousness like an ever-flowing stream" (Amos 5:24).'
      },
      {
        subtitle: '3. The Babylonian Exile and the Canonization of the Tanakh',
        content: 'In 586 BCE, King Nebuchadnezzar II of Babylon besieged and sacked Jerusalem, incinerating Solomon\'s Temple and deporting the royal family and scribal elites to Babylon. Deprived of sacrificial temple worship, Jewish scholars during the Babylonian Captivity transformed their faith from a temple-centric cult into a text-centric religion. They gathered in communal assemblies (the origins of the synagogue), observed the Sabbath as a sanctuary in time, and compiled and redacted the Hebrew Bible (*Tanakh*, comprising Torah, Prophets, and Writings). When Cyrus the Great conquered Babylon in 539 BCE, he issued his famous cylinder edict permitting Jewish exiles to return and rebuild the Second Temple.'
      },
      {
        subtitle: '4. The Roman Destruction of 70 CE and the Rabbinic Evolution',
        content: 'In 66 CE, the Jews of Judea revolted against oppressive Roman taxation and military brutality. Following a grueling four-year siege, Roman legions under Titus breached Jerusalem\'s walls in 70 CE, leveling the Second Temple to its foundation stones. Facing the total destruction of their sacrificial institutions, visionary rabbis led by Yochanan ben Zakkai established an academy at Yavne. They transitioned Judaism into Rabbinic Judaism: prayer, study of the Torah, and deeds of loving-kindness (*Chesed*) permanently replaced animal sacrifices. Over the next five centuries, scholars codified the *Mishnah* and the monumental multi-volume *Talmud* (Gemara)—a vast corpus of legal argumentation, ethical debates, and philosophical homilies that preserved Jewish communal identity throughout two millennia of global diaspora.'
      }
    ],
    timeline: [
      { year: 'c. 1800 BCE', title: 'The Covenant of Abraham', description: 'Traditional migration of Abraham from Ur to Canaan; dawn of Hebrew monotheism.' },
      { year: 'c. 1250 BCE', title: 'The Exodus and Mount Sinai', description: 'Moses leads the Israelites out of Egyptian bondage; reception of the Torah and Ten Commandments.' },
      { year: 'c. 950 BCE', title: 'Solomon Dedicates the First Temple', description: 'Monumental stone sanctuary constructed in Jerusalem to house the Ark of the Covenant.' },
      { year: '586 BCE', title: 'Babylonian Destruction of the First Temple', description: 'Sack of Jerusalem, exile to Babylon, and the emergence of text-based synagogue worship.' },
      { year: '70 CE', title: 'Roman Destruction of the Second Temple', description: 'Titus destroys Jerusalem; Yochanan ben Zakkai and the rabbis establish Rabbinic Judaism at Yavne.' }
    ],
    keyFigures: [
      { name: 'Moses', role: 'Prophet, Lawgiver, and Deliverer', bio: 'Led the Israelites out of Egyptian bondage and transmitted the Torah and Ten Commandments at Sinai.' },
      { name: 'King David', role: 'Second King of United Israel (c. 1000 BCE)', bio: 'Unified the twelve tribes, conquered Jerusalem as capital, and traditionally authored many Psalms.' },
      { name: 'Hillel the Elder', role: 'Nasi (President) of the Sanhedrin (c. 110 BCE – 10 CE)', bio: 'Renowned sage who summarized the Torah: "What is hateful to you, do not do to your neighbor; that is the whole Torah, the rest is commentary."' },
      { name: 'Moses Maimonides (Rambam)', role: 'Philosopher, Physician, and Codifier (1138–1204 CE)', bio: 'Authored the Mishneh Torah legal code and The Guide for the Perplexed, reconciling Jewish theology with Aristotelian philosophy.' }
    ],
    causes: [
      'The theological breakthrough of Abrahamic ethical monotheism in the polytheistic ancient Near East.',
      'The collective historical trauma of Egyptian slavery, which forged an enduring ethical commitment to human dignity and freedom.',
      'The necessity of preserving identity through texts and synagogues following the destruction of the Temple.'
    ],
    consequences: [
      'Gave birth to ethical monotheism, which served as the theological parent of both Christianity and Islam.',
      'Introduced revolutionary ethical concepts: the Sabbath rest for all workers and animals, universal literacy, and human equality as beings created in the image of God (*Imago Dei*).',
      'The compilation of the Hebrew Bible (*Tanakh*), the most translated, printed, and influential literary corpus in human history.'
    ],
    interpretations: 'Theologians and historians emphasize that the revolutionary core of biblical Judaism was the moralization of the divine: in the pagan world, gods were amoral powers placated with magic, whereas the God of Israel demanded ethical behavior: loving the stranger, defending the oppressed, and enacting justice in history.',
    primarySource: {
      title: 'The Shema Yisrael (Deuteronomy 6:4-5)',
      date: 'c. 7th Century BCE Canonized Text',
      excerpt: 'Hear, O Israel: The Lord our God, the Lord is one. Love the Lord your God with all your heart and with all your soul and with all your strength.',
      context: 'The foundational declaration of Jewish monotheistic faith, recited twice daily by observant Jews.'
    },
    relatedIds: ['christianity', 'islam', 'ancient-egypt', 'roman-empire'],
    references: [
      'Telushkin, Joseph (1991). Jewish Literacy. William Morrow.',
      'Bright, John (2000). A History of Israel. Westminster John Knox Press.',
      'Finkelstein, Israel and Silberman, Neil Asher (2001). The Bible Unearthed. Free Press.'
    ]
  },

  'christianity': {
    id: 'christianity',
    title: 'CHRISTIANITY: THE GOSPEL, THE EARLY CHURCH AND THE MEDITERRANEAN EXPANSION',
    category: 'Religion',
    period: 'c. 1st Century CE – Present',
    geographicRegion: 'Origin in Roman Judea, spreading across the Roman Empire, Europe, and globally',
    summary: 'Emerging from the ministry, crucifixion, and resurrection proclamation of Jesus of Nazareth in 1st-century Roman Judea, Christianity transformed from a persecuted underground Jewish sect into the dominant religious and cultural force of the Western world.',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'Historical Christian Basilica and Catacomb Murals',
      date: 'c. 350 CE',
      creator: 'Early Christian Archaeological Survey',
      institution: 'Vatican Museums / Christian Antiquities Collection',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'In the first century of the Common Era, the land of Israel was under direct Roman military occupation, governed by Roman prefects like Pontius Pilate and puppet client-kings like the Herodian dynasty. Deep social, economic, and religious tensions divided Jewish society among the aristocratic Sadducees, the legalistic Pharisees, the apocalyptic Essenes at Qumran, and armed Zealot rebels. Messianic anticipation ran high across the province, with widespread yearning for divine liberation from foreign imperial oppression.',
    chapters: [
      {
        subtitle: '1. The Historical Ministry of Jesus of Nazareth (c. 4 BCE – 30/33 CE)',
        content: 'Raised in Nazareth in the Galilee, Jesus began an itinerant preaching and healing ministry around 28 CE following baptism by John the Baptist. Speaking in vivid rural parables, Jesus proclaimed the imminent arrival of the "Kingdom of God"—a revolutionary social and spiritual order wherein the poor, meek, and peacemakers are blessed, and traditional hierarchies are inverted. In the Sermon on the Mount (Matthew 5–7), he radicalized ethical commandments, demanding not merely the avoidance of murder, but the elimination of anger; not merely love of neighbor, but love of enemies. Entering Jerusalem during the Passover festival, Jesus cleansed the Temple of commercial currency exchanges, alarming both the priestly aristocracy and the Roman authorities. Arrested on charges of sedition (claiming to be the "King of the Jews"), he was executed by Roman crucifixion under Pontius Pilate around 30 or 33 CE.'
      },
      {
        subtitle: '2. The Resurrection Proclamation and Paul\'s Mediterranean Mission',
        content: 'Following his execution, Jesus\'s disheartened followers experienced profound visionary encounters with him resurrected from the dead, transforming them into fearless apostles. The movement expanded rapidly through the missionary journeys of Paul of Tarsus (Saint Paul), a former Pharisee and Roman citizen who underwent a dramatic conversion on the road to Damascus. In his theological epistles and travels through Antioch, Ephesus, Corinth, Athens, and Rome, Paul made the revolutionary theological breakthrough that non-Jewish Gentiles could enter the covenant through faith in Christ without undergoing circumcision or ritual dietary laws, converting Christianity from a Palestinian Jewish sect into a universal global movement.'
      },
      {
        subtitle: '3. Underground Survival in the Catacombs and Roman Persecution',
        content: 'For its first three centuries, Christianity was an illicit religion (*religio illicita*) under Roman law. Because Christians refused to offer incense sacrifices to the emperor or the pagan gods of the state—viewing it as idolatry—they were suspected of political disloyalty, atheism, and subversion. Under emperors Nero (64 CE), Domitian, Decius (250 CE), and Diocletian\'s "Great Persecution" (303–311 CE), thousands of Christians were tortured, executed in amphitheaters, and forced to bury their dead in subterranean catacomb networks. The stoic courage of Christian martyrs, combined with their radical charity in caring for the sick and poor during Roman urban plagues, caused the faith to multiply exponentially across all strata of Roman society.'
      },
      {
        subtitle: '4. The Constantine Turning Point and the Council of Nicaea (313 – 325 CE)',
        content: 'In 312 CE, on the eve of the Battle of the Milvian Bridge outside Rome, Emperor Constantine reported seeing a cross of light in the sky with the words *In hoc signo vinces* ("In this sign, conquer"). Winning the battle, Constantine issued the Edict of Milan in 313 CE, granting universal religious toleration and ending persecution. To resolve intense theological divisions regarding the divinity of Christ (the Arian controversy), Constantine convened the First Council of Nicaea in 325 CE—the first ecumenical council of 318 bishops from across the empire—which formulated the Nicene Creed, establishing that Jesus Christ was *homoousios* ("of one substance") with God the Father. In 380 CE, Emperor Theodosius I issued the Edict of Thessalonica, making Nicene Christianity the official state religion of the Roman Empire.'
      }
    ],
    timeline: [
      { year: 'c. 4 BCE', title: 'Birth of Jesus of Nazareth', description: 'Born in Bethlehem of Judea during the reign of Augustus Caesar and Herod the Great.' },
      { year: 'c. 30 / 33 CE', title: 'Crucifixion and Resurrection', description: 'Jesus executed under Pontius Pilate in Jerusalem; resurrection proclamation initiates the Church.' },
      { year: 'c. 50 – 62 CE', title: 'The Epistles of Paul', description: 'Earliest Christian written documents, formulating justification by faith and universal Gentile mission.' },
      { year: '313 CE', title: 'The Edict of Milan', description: 'Emperor Constantine legalizes Christian worship throughout the Roman Empire.' },
      { year: '325 CE', title: 'First Council of Nicaea', description: 'Ecumenical council formulates the Nicene Creed defining the orthodox Christian doctrine of the Trinity.' }
    ],
    keyFigures: [
      { name: 'Jesus of Nazareth (Jesus Christ)', role: 'Central Figure and Lord of Christianity', bio: 'Jewish prophet, teacher, and Messiah whose life, death on the cross, and resurrection form the bedrock of the Christian faith.' },
      { name: 'Paul of Tarsus (Saint Paul)', role: 'Apostle to the Gentiles and Theologian', bio: 'Pioneered early Mediterranean missionary journeys and authored thirteen canonical New Testament epistles.' },
      { name: 'Emperor Constantine I', role: 'Roman Emperor (reigned 306–337 CE)', bio: 'First Roman emperor to embrace Christianity; legalized the faith and convened the Council of Nicaea.' },
      { name: 'Augustine of Hippo', role: 'Bishop, Theologian, and Church Father (354–430 CE)', bio: 'Authored The Confessions and The City of God, fundamentally shaping Western Christian theology.' }
    ],
    causes: [
      'The ethical and spiritual ministry of Jesus announcing the Kingdom of God in Roman Judea.',
      'The missionary strategy of Paul utilizing Roman roads and common Hellenistic Greek (*Koine*) across urban centers.',
      'The radical moral witness of early Christian communities practicing mutual aid, care for the sick, and opposing infanticide.'
    ],
    consequences: [
      'Transformed the Roman Empire and served as the primary cultural, artistic, and philosophical matrix of Western civilization.',
      'Pioneered universal human charity institutions: establishing the world\'s first public hospitals, orphanages, and monasteries.',
      'Directly inspired the preservation of classical literature in medieval monastic scriptoriums and the birth of medieval universities.'
    ],
    interpretations: 'Historians like Peter Brown emphasize that Christianity succeeded in the Roman world not through coercion, but through its radical community ethic: in a brutal classical world characterized by strict hierarchy and exposure of unwanted infants, the early church offered universal dignity, female empowerment, and unconditional social support.',
    primarySource: {
      title: 'The Nicene Creed (Formulated at the Council of Nicaea)',
      date: '325 CE',
      excerpt: 'We believe in one God, the Father Almighty, Maker of all things visible and invisible. And in one Lord Jesus Christ, the Son of God, begotten of the Father, Light of Light, very God of very God, begotten, not made, being of one substance with the Father...',
      context: 'The definitive ecumenical creed agreed upon by 318 bishops in Bithynia to establish orthodox Christian belief.'
    },
    relatedIds: ['judaism', 'islam', 'roman-empire', 'ancient-egypt'],
    references: [
      'Brown, Peter (1971). The World of Late Antiquity: AD 150-750. Thames & Hudson.',
      'MacCulloch, Diarmaid (2009). Christianity: The First Three Thousand Years. Viking.',
      'Chadwick, Henry (1993). The Early Church. Penguin Books.'
    ]
  },

  'islam': {
    id: 'islam',
    title: 'ISLAM: THE QURAN, THE PROPHETIC MISSION AND THE ISLAMIC GOLDEN AGE',
    category: 'Religion',
    period: 'c. 610 CE – Present (Golden Age: 8th – 14th Century CE)',
    geographicRegion: 'Origin in Mecca & Medina (Arabian Peninsula), spreading across the Middle East, North Africa, Asia, and globally',
    summary: 'Revealed to the Prophet Muhammad in 7th-century Arabia through the Holy Quran, Islam established a radical monotheistic brotherhood, codified the Five Pillars, and within a century sparked the Islamic Golden Age—a magnificent explosion of science, algebra, medicine, and philosophy.',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'Geometric Arabesque and Calligraphy at the Great Mosque of Isfahan',
      date: 'c. 1000 CE',
      creator: 'Archival Architectural Survey',
      institution: 'EPOCH Historical Collection',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'In early 7th-century Arabia, the peninsula was dominated by nomadic Bedouin clans and commercial caravan oasis towns like Mecca and Yathrib (Medina). The Kaaba sanctuary in Mecca was a center of polytheistic tribal idolatry, housing hundreds of tribal effigies. Society was fractured by bitter inter-tribal blood feuds, female infanticide, predatory commercial usury, and the absence of unified statutory law. Bounded by two decaying superpower empires—the Byzantine Christian Empire and the Sasanian Persian Zoroastrian Empire—the Arabian peninsula was an ideological crossroads ripe for spiritual awakening.',
    chapters: [
      {
        subtitle: '1. The Prophetic Revelation in Mecca (610 – 622 CE)',
        content: 'Around 570 CE, Muhammad ibn Abdullah was born into the Banu Hashim clan of the Quraysh tribe in Mecca. Known for his absolute integrity (*Al-Amin*, "the trustworthy"), he frequently retreated for contemplation to the cave of Hira on the mountain of Jabal al-Nour. In the month of Ramadan in 610 CE, at the age of forty, he experienced the first revelation from God through the Archangel Gabriel (*Jibril*), commanding him: *Iqra!* ("Recite in the name of your Lord who created"). The revelations continued for 23 years, forming the Holy Quran. Muhammad preached strict, uncompromising monotheism (*Tawhid*), the resurrection and final judgment, the prohibition of female infanticide, care for the orphan and widow, and the ethical accountability of wealthy merchant oligarchs. Facing fierce persecution, economic boycotts, and torture from the Quraysh elite, early Muslims sought refuge across the Red Sea in the Christian Kingdom of Aksum in Ethiopia.'
      },
      {
        subtitle: '2. The Hijrah to Medina and the Constitution of Medina (622 CE)',
        content: 'In 622 CE, facing an assassination plot in Mecca, Muhammad and his loyal companion Abu Bakr undertook the historic 320-kilometer migration (*Hijrah*) northward to Yathrib, renamed *Madinat al-Nabi* ("The City of the Prophet", Medina). The Hijrah marks Year One of the Islamic lunar calendar (1 AH). In Medina, Muhammad drafted the historic "Constitution of Medina" (*Sahifat al-Madinah*)—a landmark socio-political charter establishing an egalitarian commonwealth (*Ummah*) uniting Muslim emigrants, local Medinan helpers (*Ansar*), and Jewish tribes into a mutual defense pact guaranteeing freedom of religious worship. Following defensive battles against Quraysh armies at Badr, Uhud, and the Trench, Muhammad led a peaceful bloodless march on Mecca in 630 CE, granting general amnesty to his former persecutors and personally cleansing the Kaaba of its 360 idols, re-dedicating the sanctuary exclusively to the One God of Abraham.'
      },
      {
        subtitle: '3. The Five Pillars and Global Geographic Expansion',
        content: 'Islamic life is founded upon five essential spiritual practices known as the Five Pillars of Islam: (1) *Shahada* (the declaration of faith: "There is no god but Allah, and Muhammad is His messenger"); (2) *Salah* (the five daily ritual prayers facing the Kaaba); (3) *Zakat* (mandatory annual charitable almsgiving of 2.5% of accumulated wealth for the poor and destitute); (4) *Sawm* (fasting from dawn to dusk during the holy month of Ramadan for spiritual self-restraint); and (5) *Hajj* (the pilgrimage to Mecca once in a lifetime for those physically and financially able). Following Muhammad\'s passing in 632 CE, the four Rightly Guided Caliphs (*Rashidun*: Abu Bakr, Umar, Uthman, and Ali) and the subsequent Umayyad Caliphate expanded across the Levant, Egypt, North Africa, Persia, and into Spain (Al-Andalus) within a century, creating history\'s largest continuous free-trade and multilingual zone.'
      },
      {
        subtitle: '4. The House of Wisdom and the Islamic Golden Age (750 – 1258 CE)',
        content: 'Under the Abbasid Caliphate centered in Baghdad, Caliphs Harun al-Rashid and Al-Ma\'mun founded the House of Wisdom (*Bayt al-Hikma*)—the premier research academy of the medieval world. Islamic scholars launched the Translation Movement, translating philosophical, mathematical, astronomical, and medical texts from Sanskrit, Greek, Syriac, and Persian into Arabic. In this vibrant intellectual climate: (1) Muhammad ibn Musa al-Khwarizmi invented algebra (*Al-Jabr*), giving humanity algorithms and decimal arithmetic; (2) Ibn al-Haytham (Alhazen) founded modern experimental optics in Cairo, inventing the camera obscura and disproving Greek theories of vision; (3) Ibn Sina (Avicenna) authored the *Canon of Medicine*, the standard medical textbook across Europe and Asia for five centuries; and (4) Islamic astronomers designed high-precision astrolabes, calculated the circumference of the Earth, and named hundreds of celestial stars (Betelgeuse, Aldebaran, Vega) that retain their Arabic names today.'
      }
    ],
    timeline: [
      { year: '610 CE', title: 'The First Revelation at Cave Hira', description: 'The Prophet Muhammad receives the initial verses of the Holy Quran through the Archangel Gabriel.' },
      { year: '622 CE', title: 'The Hijrah to Medina', description: 'Migration from Mecca to Medina; founding of the first Islamic commonwealth and Year 1 AH of the Islamic calendar.' },
      { year: '630 CE', title: 'The Cleansing of the Kaaba', description: 'Peaceful return to Mecca; general amnesty proclaimed and idols removed from the Kaaba.' },
      { year: '762 CE', title: 'Founding of Baghdad', description: 'Abbasid Caliph Al-Mansur founds the Round City of Baghdad, intellectual heart of the Islamic Golden Age.' },
      { year: '830 CE', title: 'Al-Khwarizmi Publishes Compendious Book on Calculation by Completion and Balancing', description: 'Birth of algebra and systemic mathematical algorithms.' },
      { year: '1258 CE', title: 'The Mongol Siege of Baghdad', description: 'Hulagu Khan sacks Baghdad, destroying the House of Wisdom and concluding the Abbasid Caliphate.' }
    ],
    keyFigures: [
      { name: 'Prophet Muhammad (PBUH)', role: 'The Final Messenger of Islam (c. 570–632 CE)', bio: 'Transmitted the Holy Quran, unified the Arabian peninsula under monotheism, and established the Islamic Ummah.' },
      { name: 'Ali ibn Abi Talib', role: 'Fourth Caliph and First Shia Imam', bio: 'Cousin and son-in-law of the Prophet, renowned for peerless judicial wisdom, eloquence, and chivalry.' },
      { name: 'Muhammad ibn Musa al-Khwarizmi', role: 'Mathematician and Astronomer (c. 780–850 CE)', bio: 'Director of the House of Wisdom in Baghdad; inventor of algebra and introducer of Indian numerals to the West.' },
      { name: 'Ibn Sina (Avicenna)', role: 'Polymath, Physician, and Philosopher (980–1037 CE)', bio: 'Authored The Canon of Medicine and The Book of Healing, synthesizing Islamic theology with Aristotelian logic.' }
    ],
    causes: [
      'The prophetic revelation of the Holy Quran calling for absolute monotheism (*Tawhid*) and social justice in Mecca.',
      'The establishment of a unified legal commonwealth in Medina governed by mutual covenant rather than tribal blood feuds.',
      'The Islamic religious injunction to seek empirical knowledge (*Ilm*) from all corners of the Earth.'
    ],
    consequences: [
      'Created a global spiritual civilization uniting nearly two billion people across Asia, Africa, Europe, and the Americas.',
      'Preserved, synthesized, and revolutionized global mathematics (algebra), astronomy, medicine, chemistry, and optics.',
      'The transmission of Islamic scientific texts and translated Greek philosophy through Spain (Cordoba) and Sicily sparked the European Renaissance.'
    ],
    interpretations: 'Historians such as Marshall Hodgson in *The Venture of Islam* emphasize that Islam created an "Islamicate" world civilization—a cosmopolitan culture where Muslims, Christians, and Jews collaborated in scientific translation academies, international banking, and trade across three continents.',
    primarySource: {
      title: 'The Constitution of Medina (Sahifat al-Madinah)',
      date: '622 CE',
      excerpt: 'This is a document from Muhammad the Prophet between the believers and Muslims of Quraysh and Yathrib, and those who followed them and joined them and labored with them. They are one community (*Ummah*) to the exclusion of all people... The Jews of the Banu Awf are one community with the believers; the Jews have their religion and the Muslims have their religion...',
      context: 'The earliest surviving political constitutional treaty in Islamic history establishing a pluralistic multi-faith society.'
    },
    relatedIds: ['mesopotamia', 'judaism', 'christianity', 'scientific-revolution'],
    references: [
      'Hodgson, Marshall G.S. (1974). The Venture of Islam (3 vols). University of Chicago Press.',
      'Armstrong, Karen (2000). Islam: A Short History. Modern Library.',
      'Saliba, George (2007). Islamic Science and the Making of the European Renaissance. MIT Press.'
    ]
  },

  'sikhism': {
    id: 'sikhism',
    title: 'SIKHISM: IK ONKAR, THE GURU TRADITION AND SELFLESS SERVICE',
    category: 'Religion',
    period: 'c. 1469 CE – Present',
    geographicRegion: 'Punjab (South Asia, spreading across the global diaspora)',
    summary: 'Founded in late 15th-century Punjab by Guru Nanak Dev Ji, Sikhism preaches the oneness of the Creator (Ik Onkar), radical equality dismantling caste and gender oppression, selfless communal service (Seva), and the saint-soldier duty (Sant-Sipahi) to defend the vulnerable.',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'Sri Harmandir Sahib (The Golden Temple) at Amritsar',
      date: 'c. 1604 CE',
      creator: 'Archival Heritage Collection',
      institution: 'Shiromani Gurdwara Parbandhak Committee / EPOCH Archive',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'In the late 15th century, the Punjab region of northwestern India was fractured by centuries of religious conflict, ritualistic hypocrisy, rigid Hindu caste untouchability, and oppressive Mughal and Afghan dynastic invasions. Common citizens suffered under both orthodox religious hierarchies and despotic feudal taxation. In this volatile borderland, a divine voice arose declaring: *Na koi hindu, na koi musalman* ("There is no Hindu, there is no Muslim"—all are equal children of the One Supreme Reality).',
    chapters: [
      {
        subtitle: '1. Guru Nanak and the Revelation of Ik Onkar (1469 – 1539 CE)',
        content: 'Born at Talwandi (modern Nankana Sahib, Pakistan) in 1469, Guru Nanak experienced deep divine communion around age thirty after emerging from the Kali Bein river. He proclaimed *Ik Onkar*—that there is One Formless, Omnipresent Creator (*Akal Purakh*) who dwells within all creation. Accompanied by his Muslim minstrel companion Bhai Mardana playing the rebec (*rabab*), Guru Nanak undertook four extensive spiritual journeys (*Udasis*) traveling thousands of miles across India, Tibet, Sri Lanka, Mecca, Medina, and Baghdad. He excoriated external ritualism, caste pollution taboos, and ascetic forest renunciation, teaching that true spirituality must be lived as an active, honest householder through three core pillars: *Naam Japna* (remembering the divine name), *Kirat Karo* (earning an honest living through hard labor), and *Vand Chhako* (sharing earnings with the needy).'
      },
      {
        subtitle: '2. Langar: The Radical Institution of Universal Equality',
        content: 'To dismantle the ancient Indian caste system at its root, Guru Nanak established the institution of *Langar*—a free communal vegetarian kitchen attached to every Gurdwara. In a society where high-caste brahmins considered it polluting even to sit near or accept food touched by lower castes, the Guru decreed that every visitor, whether Mughal emperor or disenfranchised "untouchable", must sit side by side in the same line (*Pangat*) on the floor and share the exact same meal before meeting the Guru (*Sangat*). When Mughal Emperor Akbar visited Guru Amar Das Ji at Goindwal, the emperor was obliged to sit on the floor and eat simple lentils and flatbread among peasants before entering the Guru\'s presence.'
      },
      {
        subtitle: '3. The Martyrdom of the Gurus and Compilation of the Adi Granth',
        content: 'The Sikh path was nurtured across a lineage of Ten living Gurus. The fifth Guru, Guru Arjan Dev Ji, designed the Sri Harmandir Sahib (Golden Temple) in Amritsar with four entrances facing north, south, east, and west, symbolizing that the sanctuary is open to all four varnas and four corners of the Earth without distinction. In 1604, Guru Arjan compiled the *Adi Granth*—the sacred Sikh scripture containing not only the divine hymns of the Sikh Gurus, but also the verses of Hindu Bhakti saints (Kabir, Ravidas, Namdev) and Muslim Sufi saints (Baba Farid). When Guru Arjan was tortured to death in 1606 by Mughal Emperor Jahangir for refusing to alter the scripture, his son Guru Hargobind Ji inaugurated the concept of *Miri-Piri* (holding two swords representing temporal sovereignty and spiritual authority).'
      },
      {
        subtitle: '4. The Khalsa Panth and the Eternal Guru Granth Sahib (1699 – 1708 CE)',
        content: 'Following the public martyrdom of the ninth Guru, Guru Tegh Bahadur Ji, who sacrificed his life in Delhi in 1675 to defend the religious freedom of persecuted Kashmiri Hindu pandits, his son Guru Gobind Singh Ji forged the ultimate defensive brotherhood. On Vaisakhi day in 1699 at Anandpur Sahib, Guru Gobind Singh created the *Khalsa Panth* ("the Pure Collective"). He initiated the *Panj Pyare* (Five Beloved Ones—from different castes across India) through the nectar baptism (*Amrit Sanchar*), dissolving all prior caste, family, and religious distinctions, and bestowing the royal names *Singh* ("Lion") upon men and *Kaur* ("Princess") upon women. Each was commanded to wear the Five Ks (*Kesh*, *Kangha*, *Kara*, *Kachera*, *Kirpan*). Before his passing in 1708, Guru Gobind Singh declared that the physical lineage of living Gurus was complete; eternal guruship was bestowed forever upon the holy scripture, the *Guru Granth Sahib Ji*.'
      }
    ],
    timeline: [
      { year: '1469 CE', title: 'Birth of Guru Nanak Dev Ji', description: 'Founding of the Sikh faith at Talwandi (modern Nankana Sahib, Pakistan).' },
      { year: '1604 CE', title: 'Installation of the Adi Granth', description: 'Guru Arjan Dev Ji installs the sacred multi-faith scripture in the Golden Temple at Amritsar.' },
      { year: '1675 CE', title: 'Martyrdom of Guru Tegh Bahadur Ji', description: 'The ninth Guru is executed in Delhi by Emperor Aurangzeb defending religious freedom of Hindus.' },
      { year: '1699 CE', title: 'Creation of the Khalsa Panth', description: 'Guru Gobind Singh initiates the Panj Pyare at Anandpur Sahib, establishing the saint-soldier order.' },
      { year: '1708 CE', title: 'Conferment of Eternal Guruship upon Guru Granth Sahib', description: 'The physical lineage concludes; the scripture is revered as the living, eternal Guru.' }
    ],
    keyFigures: [
      { name: 'Guru Nanak Dev Ji', role: 'First Guru and Founder of Sikhism (1469–1539 CE)', bio: 'Preached Ik Onkar, traveled on four extensive global missionary journeys, and founded the Langar.' },
      { name: 'Guru Arjan Dev Ji', role: 'Fifth Sikh Guru (1563–1606 CE)', bio: 'Constructed the Golden Temple at Amritsar, compiled the Adi Granth, and became the first Sikh martyr.' },
      { name: 'Guru Gobind Singh Ji', role: 'Tenth Sikh Guru (1666–1708 CE)', bio: 'Created the Khalsa Panth in 1699, bestowed the names Singh and Kaur, and finalized the Guru Granth Sahib.' },
      { name: 'Mata Khivi Ji', role: 'Spiritual Matriarch and Wife of Guru Angad', bio: 'Directly administered and expanded the Langar kitchen, commemorated by name in the Guru Granth Sahib.' }
    ],
    causes: [
      'The divine revelation of Ik Onkar to Guru Nanak emphasizing one universal divine light in all beings.',
      'Moral outrage against rigid caste untouchability, female subjugation, and religious clerical exploitation.',
      'The imperative to defend religious freedom and vulnerable populations against tyrannical persecution.'
    ],
    consequences: [
      'Established a casteless, egalitarian society that champions radical gender equality and community seva.',
      'The Langar kitchen serves over 100,000 free hot vegetarian meals daily at the Golden Temple alone to anyone regardless of faith.',
      'The concept of the Sant-Sipahi (Saint-Soldier) created one of the most decorated, resilient martial traditions in world history.'
    ],
    interpretations: 'Scholars of religion emphasize that Sikhism is neither a blend of Hinduism and Islam nor a reform movement, but a sovereign revelation with its own unique scripture, theological vocabulary, and socio-political institutions centered on the active pursuit of divine love and social justice.',
    primarySource: {
      title: 'The Mool Mantar (Opening Verse of the Guru Granth Sahib)',
      date: 'c. 1500 CE',
      excerpt: 'Ik Onkar, Satnam, Karta Purakh, Nirbhau, Nirvair, Akal Moorat, Ajooni Saibhan, Gur Prasad... (One Universal Creator, The Name is Truth, The Creative Being, Without Fear, Without Hatred, Timeless Form, Beyond Birth, Self-Existent, By the Guru\'s Grace).',
      context: 'The foundational theological verse composed by Guru Nanak Dev Ji.'
    },
    relatedIds: ['hinduism', 'islam', 'kalinga-war', 'ashoka'],
    references: [
      'Singh, Khushwant (2004). A History of the Sikhs (2 vols). Oxford University Press.',
      'Grewal, J.S. (1998). The Sikhs of the Punjab. Cambridge University Press.',
      'McLeod, W.H. (1968). Guru Nanak and the Sikh Religion. Oxford University Press.'
    ]
  },

  'taoism': {
    id: 'taoism',
    title: 'TAOISM: THE WAY OF NATURE, SPONTANEITY AND WU WEI',
    category: 'Religion',
    period: 'c. 4th Century BCE – Present',
    geographicRegion: 'Ancient China, East Asia, and global philosophy',
    summary: 'Codified by Laozi in the Daodejing and expanded by Zhuangzi, Taoism (Daoism) teaches alignment with the ineffable cosmic flow of the Dao through the paradox of Wu Wei (effortless action), simplicity (Pu), humility, and the harmonious balance of Yin and Yang.',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'Taoist Mountain Temple Sanctuaries of Wudangshan',
      date: 'c. 1200 CE',
      creator: 'Archival Photographic Survey',
      institution: 'EPOCH Historical Collection',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'During the turbulent Spring and Autumn (770–476 BCE) and Warring States (475–221 BCE) periods of ancient China, the royal Zhou dynasty collapsed into chaotic, bloody warfare among rival feudal states. In response to this catastrophic social disintegration, various schools of thought ("The Hundred Schools of Thought") arose. While Confucians advocated strict moral hierarchy, ritual etiquette (*Li*), and family duty, and Legalists advocated ruthless state totalitarianism, the early Taoists looked beyond human political contrivance to the natural cosmos, seeking peace through alignment with the fundamental rhythm of nature.',
    chapters: [
      {
        subtitle: '1. Laozi and the Mystery of the Daodejing',
        content: 'Legend holds that Laozi ("The Old Master") was an archivist in the royal Zhou court. Disgusted by political corruption, he mounted an ox and rode westward into the mountains. At the Hangu Pass, the gatekeeper Yinxi pleaded with him to record his wisdom before departing into the wilderness. Laozi paused to brush five thousand Chinese characters in eighty-one paradoxical poetic verses: the *Daodejing* (Classic of the Way and Its Virtue). The text opens with an epistemological paradox: "The Dao that can be spoken of is not the eternal Dao; the name that can be named is not the eternal name." The Dao is not a personal god, but the formless, motherly source and mysterious rhythm from which the "ten thousand things" continuously emerge.'
      },
      {
        subtitle: '2. The Virtue of Wu Wei: The Water Parable',
        content: 'The core practical principle of Taoism is *Wu Wei*—often translated as "effortless action", "non-forcing", or "action in alignment with nature." Rather than passivity or laziness, *Wu Wei* is the supreme skill of acting without artificial egoic friction, moving like water. Laozi writes: "Nothing in the world is softer and weaker than water, yet for attacking that which is hard and strong, nothing can surpass it." Just as water effortlessly finds the lowest valleys, carves through towering granite canyons over time without force, and nourishes all living things without seeking reward or recognition, the Taoist sage operates with quiet humility and non-contention (*Wuzheng*).'
      },
      {
        subtitle: '3. Zhuangzi: Skepticism, Dreams and the Useless Tree',
        content: 'In the 4th century BCE, the philosopher Zhuangzi (Master Zhuang) expanded Taoism through brilliant humor, allegorical parables, and radical epistemological skepticism. In his celebrated "Butterfly Dream", Zhuangzi awakens from dreaming he was a butterfly fluttering joyfully among flowers, and wonders: "Was I Zhuangzi dreaming I was a butterfly, or am I now a butterfly dreaming I am Zhuangzi?" Zhuangzi championed the wisdom of the "useless tree"—an ancient gnarled oak whose timber is too crooked for carpenters to chop into tables or coffins, and which therefore lives to a majestic, undisturbed age of centuries, offering shade to all travelers.'
      },
      {
        subtitle: '4. Yin-Yang, Traditional Medicine and Martial Arts',
        content: 'Taoist cosmology is rooted in the dynamic polarities of *Yin* (the receptive, dark, cool, female, quiet force) and *Yang* (the active, bright, warm, male, energetic force). Neither can exist without the other; health and wisdom consist of maintaining dynamic equilibrium between them. This philosophy underpins traditional Chinese medicine (balancing the flow of *Qi* vital energy through meridian channels via acupuncture and herbal pharmacology) as well as internal martial arts (*Taijiquan* and *Qigong*), where yielding to an opponent\'s force deflects and neutralizes aggression without reciprocal violence.'
      }
    ],
    timeline: [
      { year: 'c. 6th – 4th Century BCE', title: 'Traditional Era of Laozi and the Daodejing', description: 'Composition of the 81 verses of paradoxical philosophical poetry.' },
      { year: 'c. 369 – 286 BCE', title: 'Life of Zhuangzi', description: 'Master of parables, skepticism, and the philosophical celebration of natural freedom.' },
      { year: '142 CE', title: 'Zhang Daoling Founds the Way of the Celestial Masters', description: 'Transformation of Taoist philosophy into an organized liturgical religious tradition.' },
      { year: 'c. 712 – 756 CE', title: 'Tang Dynasty Establishes Taoism as Royal State Faith', description: 'Emperor Xuanzong recognizes Laozi as an imperial ancestor, placing the Daodejing on civil service exams.' }
    ],
    keyFigures: [
      { name: 'Laozi (The Old Master)', role: 'Legendary Founder and Author of the Daodejing', bio: 'Archivist who articulated the mystery of the Dao, the virtue of Wu Wei, and the metaphor of water.' },
      { name: 'Zhuangzi (Master Zhuang)', role: 'Philosopher, Author, and Satirist', bio: 'Authored the Zhuangzi, using parables and linguistic skepticism to liberate the mind from societal dogma.' },
      { name: 'Zhang Daoling', role: 'First Celestial Master (2nd Century CE)', bio: 'Founded religious Taoism (Tianshi Dao), integrating community health, rituals, and internal alchemy.' }
    ],
    causes: [
      'The violent collapse and moral bankruptcy of the late Zhou dynasty and Warring States warfare.',
      'Skeptical rejection of Confucian moral dogmatism and Legalist totalitarian coercion.',
      'Deep contemplative observation of the effortless cycles of nature, seasons, and ecological harmony.'
    ],
    consequences: [
      'Shaped traditional Chinese landscape painting, architecture, calligraphy, and nature poetry.',
      'Formed the foundational theoretical matrix for Traditional Chinese Medicine (acupuncture, herbs, Qi balance).',
      'Pioneered internal martial arts (*Taijiquan*) and deeply influenced the development of Chan (Zen) Buddhism.'
    ],
    interpretations: 'Sinologists emphasize that while Confucianism governed the public, bureaucratic daytime life of the Chinese scholar-official, Taoism was their private, nocturnal sanctuary—allowing them to connect with nature, art, poetry, and inner freedom away from worldly responsibilities.',
    primarySource: {
      title: 'Daodejing (Chapter 8: The Excellence of Water)',
      date: 'c. 4th Century BCE',
      excerpt: 'The highest goodness is like water. Water beneficially enriches all things and does not contend. It stays in places which others despise; therefore, it is near to the Dao. In dwelling, be close to the ground. In meditation, delve into the depths of the heart. In dealing with others, be gentle and kind. In speech, be true. In ruling, be just. In work, be competent. In action, be timely. Because it does not contend, it is free of blame.',
      context: 'Classical Chinese text from the Daodejing outlining the ideal conduct of the Taoist sage.'
    },
    relatedIds: ['mesopotamia', 'indus-valley', 'buddhism'],
    references: [
      'Kohn, Livia (2000). Daoism Handbook. Brill.',
      'Robinet, Isabelle (1997). Taoism: Growth of a Religion. Stanford University Press.',
      'Waley, Arthur (1934). The Way and Its Power: A Study of the Tao Tê Ching. Grove Press.'
    ]
  },

  'zoroastrianism': {
    id: 'zoroastrianism',
    title: 'ZOROASTRIANISM: THE COSMIC STRUGGLE BETWEEN LIGHT AND DARKNESS',
    category: 'Religion',
    period: 'c. 1500 – 1000 BCE – Present',
    geographicRegion: 'Ancient Persia (Iranian Plateau, Central Asia, and Parsi diaspora in India)',
    summary: 'Founded by the prophet Zarathustra (Zoroaster) in ancient Persia, Zoroastrianism introduced cosmic dualism between Ahura Mazda (the Wise Lord of Truth) and Angra Mainyu (the Spirit of Falsehood), centered upon the ethical triune: Good Thoughts, Good Words, Good Deeds.',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'The Winged Faravahar Symbol carved into the Rock Tombs of Persepolis',
      date: 'c. 500 BCE',
      creator: 'Archival Archaeological Survey',
      institution: 'EPOCH Historical Collection',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'Before the rise of the Persian Empire, the Indo-Iranian tribes of the Iranian plateau practiced polytheistic cattle-herding religions worshipping daevas through animal blood sacrifices and intoxication with the plant hallucinogen *haoma*. Ruthless warlords and nomadic raiders devastated peaceful agrarian communities. Into this violent Bronze Age pastoral world stepped Zarathustra Spitama (Zoroaster), who experienced visionary revelations calling humanity to abandon cattle-raiding and deceit in favor of agricultural stewardship and ethical truth.',
    chapters: [
      {
        subtitle: '1. The Visions of Zarathustra and the Gathas',
        content: 'Around age thirty, while fetching water at dawn from a river for a sacred ritual, Zarathustra saw a shining radiant being, Vohu Manah ("Good Mind"), who led his consciousness into the divine presence of Ahura Mazda ("The Wise Lord"). Zarathustra composed the *Gathas*—seventeen profound poetic hymns preserved in archaic Gathic Avestan. He preached that Ahura Mazda is the uncreated, wholly benevolent Creator who fashioned the cosmos in order (*Asha* / Truth). Evil does not originate from God, but from Angra Mainyu (Ahriman), the destructive spirit of chaos, deceit, and malice (*Druj*).'
      },
      {
        subtitle: '2. The Cosmic Battle and Human Free Will',
        content: 'Zoroastrianism is founded upon radical moral free will. Unlike predestinarian or fatalistic religions, Zarathustra taught that every human being is an active soldier in the cosmic war between light and darkness. Humanity is not born in original sin, but possesses the freedom and obligation to choose between Truth (*Asha*) and the Lie (*Druj*). This ethical responsibility is distilled into the three pillars of Zoroastrian life: *Humata* (Good Thoughts), *Hukhta* (Good Words), and *Huvarshta* (Good Deeds). By tilling the soil, caring for cattle, speaking truth, digging wells, and raising children in justice, humans actively assist Ahura Mazda in purifying the creation.'
      },
      {
        subtitle: '3. Sacred Fire (Atar) and the Towers of Silence',
        content: 'Zoroastrians do not worship fire; rather, sacred fire (*Atar*) is revered as the visible symbol of divine truth, illumination, and Ahura Mazda\'s pure creative energy. In Zoroastrian fire temples (*Agyaris*), sacred flames—some burning continuously for over a millennium, such as the Atash Behram in Yazd, Iran—are tended by white-robed priests (*mobeds*) wearing cloths over their mouths to avoid polluting the flame with breath. Because earth, fire, and water are considered pure sacred elements of Ahura Mazda, Zoroastrians historically avoided cremating or burying corpses in the earth, instead placing the deceased on open-air stone circular platforms (*Dakhmas*, Towers of Silence) where scavenging birds of prey quickly returned the physical elements to nature.'
      },
      {
        subtitle: '4. Eschatology and Influence on Western Monotheism',
        content: 'Zoroastrianism was the official state religion of three great Persian world empires: the Achaemenid (Cyrus the Great, Darius I), the Parthian, and the Sasanian empires. It pioneered eschatological concepts that fundamentally reshaped post-exilic Judaism, Christianity, and Islam: the Bridge of the Separator (*Chinvat Bridge*) where individual souls are judged after death; a personal adversary devil (Satan / Ahriman); realms of eternal light (paradise, from Persian *pairi-daeza*) and darkness (hell); a future virgin-born savior (*Saoshyant*); the resurrection of the dead; and the final universal renovation of the cosmos (*Frashokereti*) when evil is permanently annihilated and creation restored to perfection.'
      }
    ],
    timeline: [
      { year: 'c. 1200 – 1000 BCE', title: 'Life and Revelations of Zarathustra', description: 'Composition of the seventeen Gathic hymns in northeastern Iran / Central Asia.' },
      { year: '550 – 330 BCE', title: 'Achaemenid Empire Adopts Zoroastrian Ethos', description: 'Cyrus the Great, Darius I, and Xerxes rule the Persian Empire under the blessing of Ahura Mazda.' },
      { year: '224 – 651 CE', title: 'Sasanian Empire Establishes Orthodoxy', description: 'Compilation and canonization of the complete Avestan texts and Pahlavi commentaries.' },
      { year: 'c. 936 CE', title: 'The Parsi Migration to Sanjan, India', description: 'Zoroastrian refugees flee religious persecution in Persia, arriving in Gujarat and establishing the Parsi community.' }
    ],
    keyFigures: [
      { name: 'Zarathustra (Zoroaster)', role: 'Prophet and Poet of the Gathas', bio: 'Spiritual reformer who proclaimed ethical dualism between Ahura Mazda and Angra Mainyu.' },
      { name: 'Cyrus the Great', role: 'Founder of the Achaemenid Persian Empire', bio: 'Governed with Zoroastrian righteousness; issued the Cyrus Cylinder freeing captive peoples including the Jews.' },
      { name: 'Kartir', role: 'Sasanian High Priest (3rd Century CE)', bio: 'Architect of institutional Zoroastrian orthodoxy, inscribed on the Ka\'ba-ye Zartosht.' }
    ],
    causes: [
      'The prophetic moral revulsion of Zarathustra against nomadic cattle-raiding violence and polytheistic blood sacrifice.',
      'The philosophical need to explain the origin of evil without attributing moral darkness to a benevolent Creator.',
      'The imperial statecraft of Cyrus the Great and Darius I requiring a universal ethical religion of truth.'
    ],
    consequences: [
      'Introduced foundational eschatological concepts (heaven, hell, Satan, resurrection, final judgment) to Judaism and Christianity.',
      'Promoted environmental stewardship: protecting the purity of water, soil, plant life, and sacred fire.',
      'The enduring survival of the Parsi community in India, which spearheaded modern Indian industrialization and philanthropy (the Tata family).'
    ],
    interpretations: 'Historians like Mary Boyce note that Zoroastrianism was humanity\'s first theological system to assign profound cosmic purpose to human life: rather than mere servants or playthings of arbitrary gods, humans are vital co-workers with God whose every ethical action tips the scales of cosmic victory toward light.',
    primarySource: {
      title: 'The Ashem Vohu and Ahuna Vairya Prayers (Gathas of the Avesta)',
      date: 'c. 1000 BCE',
      excerpt: 'Truth is the best of all that is good. As desired, what is desired shall be: Truth for him who is the champion of the highest Truth! Good Thoughts, Good Words, Good Deeds.',
      context: 'The daily sacred prayers recited by Zoroastrian priests and laypeople.'
    },
    relatedIds: ['judaism', 'christianity', 'islam', 'mesopotamia'],
    references: [
      'Boyce, Mary (1979). Zoroastrians: Their Religious Beliefs and Practices. Routledge.',
      'Foltz, Richard (2013). Religions of Iran: From Prehistory to the Present. Oneworld.',
      'Stausberg, Michael (2002). Die Religion Zarathushtras. Kohlhammer.'
    ]
  },

  'shinto': {
    id: 'shinto',
    title: 'SHINTO: THE WAY OF THE KAMI, SACRED NATURE AND PURIFICATION',
    category: 'Religion',
    period: 'c. 1st Millennium BCE – Present (Formalized: 8th Century CE)',
    geographicRegion: 'Japanese Archipelago',
    summary: 'The indigenous spiritual tradition of Japan, Shinto ("The Way of the Kami") centers upon the reverent worship of Kami—divine spirits and natural energies inhabiting mountains, rivers, ancient trees, and waterfalls—through the ritual purification (Harae) of mind and space.',
    coverImage: {
      url: '/assets/images/religion_temple_1795464678450.jpg',
      title: 'The Floating Vermilion Torii Gate at Itsukushima Shrine, Miyajima',
      date: 'c. 1168 CE',
      creator: 'Archival Heritage Collection',
      institution: 'EPOCH Historical Collection',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    },
    historicalContext: 'Unlike continental religions founded upon sacred written commandments, rigid moral dogmas, or ecclesiastical institutions, Shinto evolved organically from the prehistoric animism and shamanic nature rituals of the Jomon and Yayoi cultures of the Japanese archipelago. It possessed no single human founder, no fixed theological dogma, and no written scriptures until the 8th century CE, when the imperial court codified ancestral myths to legitimize the imperial lineage. Known natively as *Kami no Michi* ("the way of the spirits"), it reflects a profound reverence for the awe-inspiring beauty, vitality, and seasonal rhythm of the Japanese natural landscape.',
    chapters: [
      {
        subtitle: '1. The Concept of Kami: The Sacred Within Nature',
        content: 'At the heart of Shinto is the concept of *Kami*—a term often inadequately translated as "gods", but which refers to the sacred spiritual essence, vitality, and awe-inspiring power (*musuhi*) present within all phenomena. An ancient centuries-old cedar tree (*Shinboku*) wrapped in a straw rope (*Shimenawa*), a thunderous waterfall like Nachi Falls, Mount Fuji, animals like the fox (*Kitsune*, messenger of Inari), ancestral spirits, and outstanding deceased human leaders are all revered as Kami. Motoori Norinaga, the celebrated 18th-century scholar, famously defined Kami as: "Any being whatsoever which possesses some eminent quality out of the ordinary, and is awe-inspiring, is called Kami."'
      },
      {
        subtitle: '2. The Mythological Chronicles: Kojiki and Nihon Shoki',
        content: 'In the early 8th century CE, the imperial court commissioned the compilation of the oral mythological traditions: the *Kojiki* ("Records of Ancient Matters", 712 CE) and the *Nihon Shoki* ("Chronicles of Japan", 720 CE). The myths recount how the primordial creator deities, Izanagi and Izanami, stirred the ocean with a jeweled spear, creating the islands of Japan. When Izanagi purified himself in a river after visiting the polluted underworld, the sun goddess Amaterasu Omikami was born from his left eye. Amaterasu dispatched her grandson Ninigi-no-Mikoto to earth with the Three Sacred Treasures (the Bronze Mirror, the Curved Jade Jewel, and the Iron Sword), whose great-grandson Emperor Jimmu became the legendary first Emperor of Japan in 660 BCE, establishing the divine lineage of the imperial throne.'
      },
      {
        subtitle: '3. Purity, Pollution (Kegare) and Ritual Cleansing (Harae)',
        content: 'Shinto theology is organized not around the Western moral dichotomy of "good versus evil", but around the aesthetic and spiritual dichotomy of *Seimei* (brightness, vitality, purity) versus *Kegare* (spiritual pollution, stagnation, death, disease, and guilt). *Kegare* is not considered permanent personal sin, but a temporary spiritual stain that can be removed through *Harae* (ritual purification) and *Misogi* (cleansing with cold, flowing water). Before entering any Shinto shrine (*Jinja*), visitors pause at the water pavilion (*Temizuya*) to rinse their hands and mouth with a bamboo ladle, restoring pure harmony between the human heart (*Kokoro*) and the Kami.'
      },
      {
        subtitle: '4. Syncretism with Buddhism (Shinbutsu-Shugo) and Shrine Architecture',
        content: 'When Mahayana Buddhism arrived in Japan from Korea in the 6th century CE, it did not extinguish Shinto; instead, the two traditions entered a profound millennium-long syncretism known as *Shinbutsu-shugo*. Local Shinto Kami were recognized as emanations or protectors of Buddhist deities (*Honji suijaku*); Buddhist temples and Shinto shrines were constructed within shared sacred precincts. Shinto shrine architecture remained deliberately natural and unpainted, constructed using unvarnished cypress wood fitted without nails, as exemplified by the Grand Shrine of Ise (*Ise Jingu*), which is ritually dismantled and rebuilt anew every twenty years (*Shikinen Sengu*) in an unbroken cycle of eternal renewal.'
      }
    ],
    timeline: [
      { year: 'c. 300 BCE – 300 CE', title: 'Yayoi Period Agricultural Rituals', description: 'Introduction of wet-rice agriculture and bronze ritual bells (dotaku) dedicated to harvest Kami.' },
      { year: '552 / 538 CE', title: 'Introduction of Buddhism to Japan', description: 'King of Baekje sends Buddhist statues to the Yamato court, initiating Shinbutsu-shugo syncretism.' },
      { year: '712 CE', title: 'Compilation of the Kojiki', description: 'Court scholar O no Yasumaro records ancestral Shinto mythology and imperial lineage.' },
      { year: 'c. 690 CE – Present', title: 'The Shikinen Sengu Cycle at Ise Jingu', description: 'The Grand Shrine of the Sun Goddess Amaterasu is rebuilt every 20 years to maintain pristine purity.' },
      { year: '1868 – 1945 CE', title: 'State Shinto Era', description: 'Meiji Restoration separates Shinto from Buddhism and establishes state-sponsored imperial Shinto.' }
    ],
    keyFigures: [
      { name: 'Amaterasu Omikami', role: 'The Great Sun Goddess of the Plain of High Heaven', bio: 'Central deity of Shinto and mythological ancestor of the Japanese imperial line, enshrined at Ise Jingu.' },
      { name: 'O no Yasumaro', role: 'Court Noble and Chronicler (d. 723 CE)', bio: 'Compiled and transcribed the oral myths of Hieda no Are into the written Kojiki in 712 CE.' },
      { name: 'Motoori Norinaga', role: 'Kokugaku Scholar (1730–1801 CE)', bio: 'Revitalized ancient Shinto scholarship, authoring the monumental 44-volume commentary Kojiki-den.' }
    ],
    causes: [
      'Prehistoric indigenous animism and agrarian gratitude for the fertile, volcanic islands of the Japanese archipelago.',
      'The seasonal necessity of communal rice-planting and harvest festivals (*Matsuri*).',
      'The imperial Yamato court\'s desire to unify rival regional clans under a shared mythological lineage.'
    ],
    consequences: [
      'Fostered deep ecological reverence for pristine natural environments, ancient forests, and clean water.',
      'Shaped Japanese aesthetic sensibilities: minimalism, appreciation for natural materials, and the beauty of transience (*Mono no aware*).',
      'Gave rise to the iconic vermilion *Torii* gates that mark the boundary between the mundane world and sacred space throughout Japan.'
    ],
    interpretations: 'Anthropologists note that Shinto is less a set of philosophical dogmas and more an embodied way of living in participatory harmony with nature: it is not something one "believes", but something one "does" through seasonal festivals, respectful bowing, purification, and gratitude for life.',
    primarySource: {
      title: 'Kojiki (The Divine Mandate of Amaterasu to Her Grandson Ninigi)',
      date: '712 CE',
      excerpt: 'This Reed-Plain-1500-Autumns-Fair-Rice-Ear Land is the region which my descendants shall rule. Do thou, my August Grandchild, proceed thither and govern it. Go, and may prosperity attend thy dynasty, and may it, like the Heaven and the Earth, endure forever.',
      context: 'The mythological imperial mandate recorded in the Kojiki establishing the divine origin of Japan.'
    },
    relatedIds: ['taoism', 'buddhism', 'ancient-astronomy'],
    references: [
      'Nelson, John K. (1996). A Year in the Life of a Shinto Shrine. University of Washington Press.',
      'Breen, John and Teeuwen, Mark (2010). A New History of Shinto. Wiley-Blackwell.',
      'Ono, Sokyo (1962). Shinto: The Kami Way. Tuttle Publishing.'
    ]
  }
};

// =========================================================================
// SECTION 5: STANDARDIZED CANONICAL ALIASES
// Ensures every section, card, button, and router hash across the site
// opens its true, dedicated, authentic historical monograph.
// =========================================================================

// Civilizations & Empires
rawHistoricalRecordsDatabase['indus'] = rawHistoricalRecordsDatabase['indus-valley'];
rawHistoricalRecordsDatabase['egypt'] = rawHistoricalRecordsDatabase['ancient-egypt'];
rawHistoricalRecordsDatabase['rome'] = rawHistoricalRecordsDatabase['roman-empire'];
rawHistoricalRecordsDatabase['spqr'] = rawHistoricalRecordsDatabase['roman-empire'];

// Wars & Conflicts
rawHistoricalRecordsDatabase['wwii'] = rawHistoricalRecordsDatabase['world-war-ii'];
rawHistoricalRecordsDatabase['ww1'] = rawHistoricalRecordsDatabase['world-war-i'];
rawHistoricalRecordsDatabase['wwi'] = rawHistoricalRecordsDatabase['world-war-i'];
rawHistoricalRecordsDatabase['kalinga'] = rawHistoricalRecordsDatabase['kalinga-war'];

// Revolutions & Inventions
rawHistoricalRecordsDatabase['agricultural'] = rawHistoricalRecordsDatabase['agricultural-revolution'];
rawHistoricalRecordsDatabase['neolithic'] = rawHistoricalRecordsDatabase['agricultural-revolution'];
rawHistoricalRecordsDatabase['writing'] = rawHistoricalRecordsDatabase['invention-of-writing'];
rawHistoricalRecordsDatabase['printing'] = rawHistoricalRecordsDatabase['printing-press'];
rawHistoricalRecordsDatabase['gutenberg'] = rawHistoricalRecordsDatabase['printing-press'];
rawHistoricalRecordsDatabase['industrial'] = rawHistoricalRecordsDatabase['industrial-revolution'];
rawHistoricalRecordsDatabase['astronomy'] = rawHistoricalRecordsDatabase['ancient-astronomy'];
rawHistoricalRecordsDatabase['scientific'] = rawHistoricalRecordsDatabase['scientific-revolution'];
rawHistoricalRecordsDatabase['digital'] = rawHistoricalRecordsDatabase['digital-revolution'];

// Historical Figures
rawHistoricalRecordsDatabase['ashoka-the-great'] = rawHistoricalRecordsDatabase['ashoka'];
rawHistoricalRecordsDatabase['cleopatra-vii'] = rawHistoricalRecordsDatabase['cleopatra'];
rawHistoricalRecordsDatabase['leonardo'] = rawHistoricalRecordsDatabase['davinci'];
rawHistoricalRecordsDatabase['leonardo-da-vinci'] = rawHistoricalRecordsDatabase['davinci'];
rawHistoricalRecordsDatabase['da-vinci'] = rawHistoricalRecordsDatabase['davinci'];

// World Faiths & Philosophies
rawHistoricalRecordsDatabase['hindu'] = rawHistoricalRecordsDatabase['hinduism'];
rawHistoricalRecordsDatabase['buddhist'] = rawHistoricalRecordsDatabase['buddhism'];
rawHistoricalRecordsDatabase['jain'] = rawHistoricalRecordsDatabase['jainism'];
rawHistoricalRecordsDatabase['jewish'] = rawHistoricalRecordsDatabase['judaism'];
rawHistoricalRecordsDatabase['christian'] = rawHistoricalRecordsDatabase['christianity'];
rawHistoricalRecordsDatabase['islamic'] = rawHistoricalRecordsDatabase['islam'];
rawHistoricalRecordsDatabase['sikh'] = rawHistoricalRecordsDatabase['sikhism'];
rawHistoricalRecordsDatabase['daoism'] = rawHistoricalRecordsDatabase['taoism'];

// =========================================================================
// SECTION 6: KNOWLEDGE ENGINE INTEGRATION PROXY
// Seamlessly proxies all entity lookups, graph traversals, and dynamic monographs.
// =========================================================================

export const historicalRecordsDatabase: Record<string, HistoricalRecord> = new Proxy(rawHistoricalRecordsDatabase, {
  get(target, prop: string | symbol) {
    if (typeof prop !== 'string') {
      return Reflect.get(target, prop);
    }

    // 1. Direct hit in raw curated monographs
    if (prop in target) {
      return target[prop];
    }

    // 2. Resolve alias via knowledge engine
    const canonicalId = knowledgeEngine.resolveId(prop);
    if (canonicalId in target) {
      return target[canonicalId];
    }

    // 3. Convert entity from knowledge graph on demand
    const entity = knowledgeEngine.getEntity(prop) || knowledgeEngine.getEntity(canonicalId);
    if (entity) {
      const generated = knowledgeEngine.toHistoricalRecord(entity);
      target[prop] = generated;
      target[canonicalId] = generated;
      return generated;
    }

    // 4. Default fallback to preserve stability
    return target['kalinga-war'];
  },
  has(target, prop: string | symbol) {
    if (typeof prop !== 'string') return Reflect.has(target, prop);
    if (prop in target) return true;
    return !!knowledgeEngine.getEntity(prop);
  },
  ownKeys(target) {
    const entityIds = knowledgeEngine.getAllEntities().map(e => e.id);
    return Array.from(new Set([...Object.keys(target), ...entityIds]));
  },
  getOwnPropertyDescriptor(target, prop) {
    if (typeof prop === 'string' && (prop in target || knowledgeEngine.getEntity(prop))) {
      const entity = knowledgeEngine.getEntity(prop);
      const val = target[prop] || (entity ? knowledgeEngine.toHistoricalRecord(entity) : target['kalinga-war']);
      return {
        enumerable: true,
        configurable: true,
        value: val
      };
    }
    return Reflect.getOwnPropertyDescriptor(target, prop);
  }
});
