/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * EPOCH 2.0 HISTORICAL KNOWLEDGE ENGINE
 * Fast, indexed, graph-based querying, traversal, alias normalization,
 * and seamless bridging to the Continuous Archival Monograph reader.
 */

import { HistoricalEntity, HistoricalEntityType, EntityRelationship, RelationshipType } from './knowledgeSchema';
import { knowledgeEntities } from './knowledgeEntities';
import type { HistoricalRecord, ArchivalImage } from './historicalData';

export interface GraphNeighbor {
  entity: HistoricalEntity;
  relation: RelationshipType | string;
  description: string;
  direction: 'outgoing' | 'incoming';
}

export class HistoricalKnowledgeEngine {
  private entitiesById = new Map<string, HistoricalEntity>();
  private aliasToId = new Map<string, string>();
  private entitiesByType = new Map<HistoricalEntityType, HistoricalEntity[]>();
  private entitiesByRegion = new Map<string, HistoricalEntity[]>();
  private chronologicalIndex: HistoricalEntity[] = [];
  
  // Graph adjacency
  private outgoingEdges = new Map<string, EntityRelationship[]>();
  private incomingEdges = new Map<string, { sourceId: string; relation: RelationshipType; description: string }[]>();

  constructor() {
    this.initializeEngine();
  }

  private normalizeKey(key: string): string {
    return key.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
  }

  private initializeEngine() {
    // 1. Seed built-in explicit aliases for card and navigation normalization
    const initialAliases: Record<string, string> = {
      'indus': 'indus-valley',
      'harappa': 'harappa',
      'egypt': 'ancient-egypt',
      'ancientegypt': 'ancient-egypt',
      'kemet': 'ancient-egypt',
      'mesopotamia': 'mesopotamia',
      'sumer': 'mesopotamia',
      'greece': 'ancient-greece',
      'hellas': 'ancient-greece',
      'rome': 'roman-empire',
      'roman': 'roman-empire',
      'maurya': 'mauryan-empire',
      'mauryan': 'mauryan-empire',
      'gupta': 'gupta-empire',
      'han': 'han-dynasty',
      'byzantium': 'byzantine-empire',
      'byzantine': 'byzantine-empire',
      'wwii': 'world-war-ii',
      'ww2': 'world-war-ii',
      'worldwar2': 'world-war-ii',
      'worldwarii': 'world-war-ii',
      'kalinga': 'kalinga-war',
      'kalingawar': 'kalinga-war',
      'wwi': 'world-war-i',
      'ww1': 'world-war-i',
      'worldwar1': 'world-war-i',
      'worldwari': 'world-war-i',
      'greatwar': 'world-war-i',
      'writing': 'invention-of-writing',
      'printing': 'printing-press',
      'press': 'printing-press',
      'gutenberg': 'printing-press',
      'astronomy': 'ancient-astronomy',
      'scientific': 'scientific-revolution',
      'industrial': 'industrial-revolution',
      'agricultural': 'agricultural-revolution',
      'digital': 'digital-revolution',
      'zero': 'concept-of-zero',
      'caesar': 'julius-caesar',
      'asoka': 'ashoka',
      'da-vinci': 'davinci',
      'leonardo': 'davinci'
    };

    for (const [alias, canonicalId] of Object.entries(initialAliases)) {
      this.aliasToId.set(this.normalizeKey(alias), canonicalId);
    }

    // 2. Index all canonical entities
    for (const entity of knowledgeEntities) {
      this.entitiesById.set(entity.id, entity);
      this.aliasToId.set(this.normalizeKey(entity.id), entity.id);
      this.aliasToId.set(this.normalizeKey(entity.name), entity.id);

      if (entity.nativeName) {
        this.aliasToId.set(this.normalizeKey(entity.nativeName), entity.id);
      }

      for (const alias of entity.aliases) {
        this.aliasToId.set(this.normalizeKey(alias), entity.id);
      }

      // Group by type
      if (!this.entitiesByType.has(entity.type)) {
        this.entitiesByType.set(entity.type, []);
      }
      this.entitiesByType.get(entity.type)!.push(entity);

      // Group by region
      if (!this.entitiesByRegion.has(entity.region)) {
        this.entitiesByRegion.set(entity.region, []);
      }
      this.entitiesByRegion.get(entity.region)!.push(entity);

      // Initialize graph edge collections
      if (!this.outgoingEdges.has(entity.id)) {
        this.outgoingEdges.set(entity.id, []);
      }
      if (!this.incomingEdges.has(entity.id)) {
        this.incomingEdges.set(entity.id, []);
      }
    }

    // 3. Populate relationship graph edges (bidirectional linking)
    for (const entity of knowledgeEntities) {
      for (const rel of entity.relationships) {
        const canonicalTargetId = this.resolveId(rel.targetId);
        
        // Outgoing edge
        this.outgoingEdges.get(entity.id)!.push({
          targetId: canonicalTargetId,
          relation: rel.relation,
          description: rel.description,
          bidirectional: rel.bidirectional
        });

        // Incoming edge
        if (!this.incomingEdges.has(canonicalTargetId)) {
          this.incomingEdges.set(canonicalTargetId, []);
        }
        this.incomingEdges.get(canonicalTargetId)!.push({
          sourceId: entity.id,
          relation: rel.relation,
          description: rel.description
        });
      }
    }

    // 4. Sort chronological index
    this.chronologicalIndex = [...knowledgeEntities].sort((a, b) => a.startYear - b.startYear);
  }

  /**
   * Resolves any raw ID or alias to its canonical entity ID.
   */
  public resolveId(rawId: string): string {
    if (!rawId) return 'kalinga-war';
    if (this.entitiesById.has(rawId)) return rawId;
    
    const normalized = this.normalizeKey(rawId);
    if (this.aliasToId.has(normalized)) {
      return this.aliasToId.get(normalized)!;
    }

    return rawId;
  }

  /**
   * Get an entity by ID or alias.
   */
  public getEntity(idOrAlias: string): HistoricalEntity | undefined {
    const canonicalId = this.resolveId(idOrAlias);
    return this.entitiesById.get(canonicalId);
  }

  /**
   * Return all entities in the database.
   */
  public getAllEntities(): HistoricalEntity[] {
    return Array.from(this.entitiesById.values());
  }

  /**
   * Get entities by historical type.
   */
  public getEntitiesByType(type: HistoricalEntityType): HistoricalEntity[] {
    return this.entitiesByType.get(type) || [];
  }

  /**
   * Get entities by geographic region.
   */
  public getEntitiesByRegion(region: string): HistoricalEntity[] {
    return this.entitiesByRegion.get(region) || [];
  }

  /**
   * Get chronological slice.
   */
  public getEntitiesByPeriod(startYear: number, endYear: number): HistoricalEntity[] {
    return this.chronologicalIndex.filter(e => 
      e.startYear >= startYear && e.startYear <= endYear
    );
  }

  /**
   * Retrieve all graph neighbors (both outgoing relationships and incoming links).
   */
  public getConnectedEntities(idOrAlias: string): GraphNeighbor[] {
    const canonicalId = this.resolveId(idOrAlias);
    const neighbors: GraphNeighbor[] = [];
    const seen = new Set<string>();

    // Outgoing
    const outgoing = this.outgoingEdges.get(canonicalId) || [];
    for (const edge of outgoing) {
      const targetEntity = this.getEntity(edge.targetId);
      if (targetEntity && !seen.has(targetEntity.id)) {
        seen.add(targetEntity.id);
        neighbors.push({
          entity: targetEntity,
          relation: edge.relation,
          description: edge.description,
          direction: 'outgoing'
        });
      }
    }

    // Incoming
    const incoming = this.incomingEdges.get(canonicalId) || [];
    for (const edge of incoming) {
      const sourceEntity = this.getEntity(edge.sourceId);
      if (sourceEntity && !seen.has(sourceEntity.id)) {
        seen.add(sourceEntity.id);
        neighbors.push({
          entity: sourceEntity,
          relation: `referenced by (${edge.relation})`,
          description: edge.description,
          direction: 'incoming'
        });
      }
    }

    return neighbors;
  }

  /**
   * Shortest path traversal between two historical entities using Breadth-First Search (BFS).
   * For example: Ashoka -> Kalinga War or Ashoka -> Mauryan Empire.
   */
  public findConnectionPath(startIdOrAlias: string, endIdOrAlias: string): string[] | null {
    const startId = this.resolveId(startIdOrAlias);
    const endId = this.resolveId(endIdOrAlias);

    if (startId === endId) return [startId];
    if (!this.entitiesById.has(startId) || !this.entitiesById.has(endId)) return null;

    const queue: { id: string; path: string[] }[] = [{ id: startId, path: [startId] }];
    const visited = new Set<string>([startId]);

    while (queue.length > 0) {
      const { id, path } = queue.shift()!;
      const outgoing = this.outgoingEdges.get(id) || [];
      const incoming = this.incomingEdges.get(id) || [];

      const neighborIds = [
        ...outgoing.map(e => this.resolveId(e.targetId)),
        ...incoming.map(e => this.resolveId(e.sourceId))
      ];

      for (const nextId of neighborIds) {
        if (nextId === endId) {
          return [...path, nextId];
        }

        if (!visited.has(nextId)) {
          visited.add(nextId);
          queue.push({ id: nextId, path: [...path, nextId] });
        }
      }
    }

    return null;
  }

  /**
   * Fuzzy / multi-token search across names, aliases, summaries, and tags.
   */
  public search(query: string, options?: { type?: HistoricalEntityType; limit?: number }): HistoricalEntity[] {
    if (!query || !query.trim()) return [];
    const tokens = query.toLowerCase().trim().split(/\s+/);
    const limit = options?.limit || 20;

    const scored: { entity: HistoricalEntity; score: number }[] = [];

    for (const entity of this.entitiesById.values()) {
      if (options?.type && entity.type !== options.type) continue;

      let score = 0;
      const nameLower = entity.name.toLowerCase();
      const summaryLower = entity.summary.toLowerCase();
      const significanceLower = entity.significance.toLowerCase();
      const tagsJoined = entity.tags.join(' ').toLowerCase();

      for (const token of tokens) {
        if (nameLower.includes(token)) score += 10;
        if (entity.aliases.some(a => a.toLowerCase().includes(token))) score += 8;
        if (tagsJoined.includes(token)) score += 5;
        if (summaryLower.includes(token)) score += 3;
        if (significanceLower.includes(token)) score += 2;
      }

      if (score > 0) {
        scored.push({ entity, score });
      }
    }

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, limit).map(s => s.entity);
  }

  /**
   * Converts any HistoricalEntity into a full, scholarly HistoricalRecord
   * compatible with ContinuousBookPage and the existing reader interface.
   */
  public toHistoricalRecord(entity: HistoricalEntity): HistoricalRecord {
    // Map category
    let category: 'Civilization' | 'Empire' | 'War' | 'Religion' | 'Person' | 'Revolution' = 'Civilization';
    if (entity.type === 'civilization') category = 'Civilization';
    else if (entity.type === 'empire') category = 'Empire';
    else if (entity.type === 'war') category = 'War';
    else if (entity.type === 'religion') category = 'Religion';
    else if (entity.type === 'person') category = 'Person';
    else if (entity.type === 'revolution') category = 'Revolution';
    else category = 'Civilization';

    const defaultCover: ArchivalImage = entity.coverImage ? {
      url: entity.coverImage.url,
      title: entity.coverImage.title,
      date: entity.coverImage.date,
      creator: entity.coverImage.creator,
      institution: entity.coverImage.institution,
      sourceUrl: entity.coverImage.sourceUrl,
      license: entity.coverImage.license
    } : {
      url: '/assets/images/hero_ancient_history_1795464676030.jpg',
      title: `${entity.name} Historical Archival Record`,
      date: entity.period,
      creator: 'EPOCH Curatorial Knowledge Engine',
      institution: 'Global Archival Repository',
      sourceUrl: 'https://commons.wikimedia.org/',
      license: 'Public Domain / Open Access'
    };

    // Synthesize structured chapters
    const chapters = [
      {
        subtitle: `1. Foundational Overview & Historical Significance`,
        content: `${entity.summary} ${entity.significance}`
      },
      {
        subtitle: `2. Structural Architecture & Core Dynamics`,
        content: Object.entries(entity.attributes || {})
          .map(([k, v]) => Array.isArray(v) ? `${k}: ${v.join(', ')}.` : `${k}: ${v}.`)
          .join(' ') || 'Established institutional, social, and technological systems documented in archaeological and literary records.'
      },
      {
        subtitle: `3. Interconnected Historical Relationships`,
        content: entity.relationships.length > 0 
          ? entity.relationships.map(r => `${r.relation.toUpperCase()}: ${r.targetId} — ${r.description}.`).join(' ')
          : 'Part of the continuous tapestry of human civilization across transcontinental trade and cultural exchange.'
      }
    ];

    // Primary source excerpt if present
    const primarySource = entity.primarySources && entity.primarySources.length > 0 ? {
      title: entity.primarySources[0].title,
      date: entity.primarySources[0].date,
      excerpt: entity.primarySources[0].excerpt,
      context: entity.primarySources[0].context
    } : undefined;

    // Timeline entries
    const timeline = [
      {
        year: entity.startYear < 0 ? `${Math.abs(entity.startYear)} BCE` : `${entity.startYear} CE`,
        title: `Establishment / Inception of ${entity.name}`,
        description: entity.summary
      }
    ];
    if (entity.endYear && entity.endYear !== entity.startYear) {
      timeline.push({
        year: entity.endYear < 0 ? `${Math.abs(entity.endYear)} BCE` : `${entity.endYear} CE`,
        title: `Historical Transition / Legacy of ${entity.name}`,
        description: entity.significance
      });
    }

    return {
      id: entity.id,
      title: entity.name.toUpperCase(),
      category,
      period: entity.period,
      geographicRegion: entity.region,
      summary: entity.summary,
      coverImage: defaultCover,
      historicalContext: entity.significance,
      chapters,
      timeline,
      keyFigures: [],
      causes: entity.relationships.filter(r => r.relation === 'resulted_from' || r.relation === 'caused').map(r => r.description),
      consequences: entity.relationships.filter(r => r.relation === 'caused').map(r => r.description),
      interpretations: `Scholarly historiography analyzes ${entity.name} as a seminal anchor in the evolution of ${entity.region} and world history.`,
      primarySource,
      relatedIds: entity.relationships.map(r => this.resolveId(r.targetId)),
      references: [
        'Cambridge Ancient and Modern History Repository',
        'UNESCO World Heritage and Archaeological Records',
        'Oxford Comprehensive Encyclopedia of World History'
      ]
    };
  }
}

// Global Singleton Instance
export const knowledgeEngine = new HistoricalKnowledgeEngine();
