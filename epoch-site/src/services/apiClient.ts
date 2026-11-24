/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * EPOCH BACKEND API CLIENT
 * Connects the frontend to the local Spring Boot + MySQL backend (http://localhost:8080/api).
 * Transparent fallback to the local knowledge engine when offline.
 */

const API_BASE_URL = 'http://localhost:8080/api';

export interface BackendHealth {
  status: string;
  database: string;
}

export interface BackendSystemStatus {
  status: string;
  database: string;
  engine: string;
  recordCounts: Record<string, number>;
}

export class EpochApiClient {
  private static instance: EpochApiClient;
  private isBackendAvailable: boolean | null = null;

  public static getInstance(): EpochApiClient {
    if (!EpochApiClient.instance) {
      EpochApiClient.instance = new EpochApiClient();
    }
    return EpochApiClient.instance;
  }

  public async checkHealth(): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE_URL}/health`, { signal: AbortSignal.timeout(2000) });
      this.isBackendAvailable = res.ok;
      return res.ok;
    } catch {
      this.isBackendAvailable = false;
      return false;
    }
  }

  public async getStatus(): Promise<BackendSystemStatus | null> {
    try {
      const res = await fetch(`${API_BASE_URL}/status`, { signal: AbortSignal.timeout(3000) });
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  }

  public async getCivilizations(): Promise<any[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/civilizations`);
      if (!res.ok) throw new Error('Network error');
      return await res.json();
    } catch {
      return [];
    }
  }

  public async getPersonalities(): Promise<any[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/personalities`);
      if (!res.ok) throw new Error('Network error');
      return await res.json();
    } catch {
      return [];
    }
  }

  public async getWars(): Promise<any[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/wars`);
      if (!res.ok) throw new Error('Network error');
      return await res.json();
    } catch {
      return [];
    }
  }

  public async getRelationships(entityId: string): Promise<any | null> {
    try {
      const res = await fetch(`${API_BASE_URL}/relationships/entity/${encodeURIComponent(entityId)}`);
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  }

  public async findPath(fromId: string, toId: string): Promise<{ connected: boolean; path?: string[] }> {
    try {
      const res = await fetch(`${API_BASE_URL}/relationships/path?from=${encodeURIComponent(fromId)}&to=${encodeURIComponent(toId)}`);
      if (!res.ok) return { connected: false };
      return await res.json();
    } catch {
      return { connected: false };
    }
  }
}

export const epochApiClient = EpochApiClient.getInstance();
