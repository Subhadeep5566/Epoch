/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * EPOCH 2.0 HISTORICAL KNOWLEDGE ARCHITECTURE SCHEMA
 * A unified relational and graph data specification supporting 14 distinct entity types,
 * bidirectional relationship graphs, primary source documents, spatial coordinates,
 * and academic citation metadata.
 */

export type HistoricalEntityType = 
  | 'event'                  // Historical events
  | 'civilization'           // Civilizations
  | 'empire'                 // Empires and kingdoms
  | 'war'                    // Wars and conflicts
  | 'person'                 // Historical personalities
  | 'religion'               // Religions and belief systems
  | 'location'               // Historical locations & settlements
  | 'discovery'              // Archaeological discoveries
  | 'invention'              // Inventions and scientific discoveries
  | 'document'               // Historical documents & inscriptions
  | 'treaty'                 // Treaties and agreements
  | 'movement'               // Cultural & philosophical movements
  | 'revolution'             // Revolutions (political, agricultural, scientific, industrial)
  | 'period';                // Historical periods & epochs

export type RelationshipType = 
  | 'ruled'                  // Sovereign/leader -> polity/empire
  | 'founded'                // Person -> civilization/religion/dynasty/city
  | 'participated_in'        // Person/Polity -> war/event/treaty
  | 'allied_with'            // Polity/Person <-> Polity/Person
  | 'opposed'                // Rivalry / belligerent in conflict
  | 'influenced'             // Intellectual / artistic / ideological influence
  | 'authored'               // Person/Institution -> document/inscription/code
  | 'discovered'             // Archaeologist/Explorer -> archaeological find / scientific principle
  | 'invented'               // Inventor -> technology/apparatus/system
  | 'signed'                 // Party -> treaty/pact/concordat
  | 'located_in'             // Settlement/monument -> geographic region / polity
  | 'preceded_by'            // Chronological predecessor
  | 'succeeded_by'           // Chronological successor
  | 'part_of'                // Component / subsidiary / province
  | 'caused'                 // Causal catalyst -> subsequent event/war/revolution
  | 'resulted_from'          // Consequence of prior event/war/policy
  | 'contemporary_with'      // Synchronous coexistence across regions
  | 'reformed'               // Person/Movement -> institution/religious doctrine
  | 'adhered_to';            // Person -> religious/philosophical tradition

export interface EntityRelationship {
  targetId: string;
  relation: RelationshipType;
  description: string;
  bidirectional?: boolean;
}

export interface PrimarySourceCitation {
  title: string;
  date: string;
  excerpt: string;
  context: string;
  sourceUrl?: string;
}

export interface ArchivalImageRef {
  url: string;
  title: string;
  date: string;
  creator: string;
  institution: string;
  sourceUrl: string;
  license: string;
}

export interface HistoricalEntity {
  id: string;
  type: HistoricalEntityType;
  name: string;
  nativeName?: string;
  aliases: string[];
  period: string;
  startYear: number;         // Astronomical dating: -261 = 261 BCE, 1492 = 1492 CE
  endYear?: number;
  region: string;
  coordinates?: [number, number]; // [lat, lng]
  summary: string;
  significance: string;
  coverImage?: ArchivalImageRef;
  relationships: EntityRelationship[];
  attributes: Record<string, any>;
  primarySources?: PrimarySourceCitation[];
  monographId?: string;      // Key in historicalRecordsDatabase
  tags: string[];
}
